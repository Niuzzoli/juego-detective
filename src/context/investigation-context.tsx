"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type ReactNode,
} from "react";
import type { Accusation, Case, Hypothesis } from "@/types/case";

interface InvestigationState {
  viewedEvidenceIds: string[];
  analyzedSuspectIds: string[];
  reviewedTestimonyIds: string[];
  visitedLocationIds: string[];
  hypotheses: Hypothesis[];
  accusation: Accusation | null;
}

const initialState: InvestigationState = {
  viewedEvidenceIds: [],
  analyzedSuspectIds: [],
  reviewedTestimonyIds: [],
  visitedLocationIds: [],
  hypotheses: [],
  accusation: null,
};

type Action =
  | { type: "VIEW_EVIDENCE"; id: string }
  | { type: "ANALYZE_SUSPECT"; id: string }
  | { type: "REVIEW_TESTIMONY"; id: string }
  | { type: "VISIT_LOCATION"; id: string }
  | { type: "ADD_HYPOTHESIS"; hypothesis: Hypothesis }
  | { type: "SUBMIT_ACCUSATION"; accusation: Accusation }
  | { type: "CLEAR_ACCUSATION" }
  | { type: "RESET" }
  | { type: "HYDRATE"; state: InvestigationState };

function addUnique(list: string[], id: string): string[] {
  return list.includes(id) ? list : [...list, id];
}

function reducer(state: InvestigationState, action: Action): InvestigationState {
  switch (action.type) {
    case "VIEW_EVIDENCE":
      return { ...state, viewedEvidenceIds: addUnique(state.viewedEvidenceIds, action.id) };
    case "ANALYZE_SUSPECT":
      return { ...state, analyzedSuspectIds: addUnique(state.analyzedSuspectIds, action.id) };
    case "REVIEW_TESTIMONY":
      return { ...state, reviewedTestimonyIds: addUnique(state.reviewedTestimonyIds, action.id) };
    case "VISIT_LOCATION":
      return { ...state, visitedLocationIds: addUnique(state.visitedLocationIds, action.id) };
    case "ADD_HYPOTHESIS":
      return { ...state, hypotheses: [action.hypothesis, ...state.hypotheses] };
    case "SUBMIT_ACCUSATION":
      return { ...state, accusation: action.accusation };
    case "CLEAR_ACCUSATION":
      return { ...state, accusation: null };
    case "RESET":
      return initialState;
    case "HYDRATE":
      return action.state;
    default:
      return state;
  }
}

function storageKey(caseId: string): string {
  return `detective:investigation:${caseId}`;
}

function loadPersisted(caseId: string): InvestigationState | null {
  try {
    const raw = window.localStorage.getItem(storageKey(caseId));
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return {
      viewedEvidenceIds: Array.isArray(parsed.viewedEvidenceIds) ? parsed.viewedEvidenceIds : [],
      analyzedSuspectIds: Array.isArray(parsed.analyzedSuspectIds) ? parsed.analyzedSuspectIds : [],
      reviewedTestimonyIds: Array.isArray(parsed.reviewedTestimonyIds)
        ? parsed.reviewedTestimonyIds
        : [],
      visitedLocationIds: Array.isArray(parsed.visitedLocationIds) ? parsed.visitedLocationIds : [],
      hypotheses: Array.isArray(parsed.hypotheses) ? parsed.hypotheses : [],
      accusation: parsed.accusation ?? null,
    };
  } catch {
    return null;
  }
}

interface InvestigationStats {
  evidencesFound: number;
  evidencesTotal: number;
  suspectsAnalyzed: number;
  suspectsTotal: number;
  testimoniesReviewed: number;
  testimoniesTotal: number;
  locationsVisited: number;
  locationsTotal: number;
  hypothesesCreated: number;
}

interface InvestigationContextValue {
  state: InvestigationState;
  stats: InvestigationStats;
  viewEvidence: (id: string) => void;
  analyzeSuspect: (id: string) => void;
  reviewTestimony: (id: string) => void;
  visitLocation: (id: string) => void;
  addHypothesis: (evidenceIds: string[], text: string) => void;
  submitAccusation: (suspectId: string, evidenceIds: string[]) => void;
  clearAccusation: () => void;
  resetInvestigation: () => void;
  isEvidenceViewed: (id: string) => boolean;
  isSuspectAnalyzed: (id: string) => boolean;
  isTestimonyReviewed: (id: string) => boolean;
  isLocationVisited: (id: string) => boolean;
  isCaseSolved: boolean;
}

const InvestigationContext = createContext<InvestigationContextValue | null>(null);

export function InvestigationProvider({
  caseData,
  children,
}: {
  caseData: Case;
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const hydratedCaseId = useRef<string | null>(null);

  // Server-rendered state always starts empty; recover any saved progress
  // for this case right after mount so hydration never mismatches.
  useEffect(() => {
    hydratedCaseId.current = caseData.id;
    const persisted = loadPersisted(caseData.id);
    dispatch({ type: "HYDRATE", state: persisted ?? initialState });
  }, [caseData.id]);

  useEffect(() => {
    if (hydratedCaseId.current !== caseData.id) return;
    try {
      window.localStorage.setItem(storageKey(caseData.id), JSON.stringify(state));
    } catch {
      // Storage may be unavailable (private mode, quota, etc.); progress just won't persist.
    }
  }, [state, caseData.id]);

  const viewEvidence = useCallback((id: string) => dispatch({ type: "VIEW_EVIDENCE", id }), []);
  const analyzeSuspect = useCallback((id: string) => dispatch({ type: "ANALYZE_SUSPECT", id }), []);
  const reviewTestimony = useCallback((id: string) => dispatch({ type: "REVIEW_TESTIMONY", id }), []);
  const visitLocation = useCallback((id: string) => dispatch({ type: "VISIT_LOCATION", id }), []);
  const addHypothesis = useCallback((evidenceIds: string[], text: string) => {
    dispatch({
      type: "ADD_HYPOTHESIS",
      hypothesis: {
        id: `hyp-${Date.now()}`,
        evidenceIds,
        text,
        createdAt: new Date().toISOString(),
      },
    });
  }, []);
  const submitAccusation = useCallback(
    (suspectId: string, evidenceIds: string[]) => {
      dispatch({
        type: "SUBMIT_ACCUSATION",
        accusation: {
          suspectId,
          evidenceIds,
          correct: suspectId === caseData.solution.guiltySuspectId,
          createdAt: new Date().toISOString(),
        },
      });
    },
    [caseData.solution.guiltySuspectId],
  );
  const clearAccusation = useCallback(() => dispatch({ type: "CLEAR_ACCUSATION" }), []);
  const resetInvestigation = useCallback(() => dispatch({ type: "RESET" }), []);

  const stats = useMemo<InvestigationStats>(
    () => ({
      evidencesFound: state.viewedEvidenceIds.length,
      evidencesTotal: caseData.evidences.length,
      suspectsAnalyzed: state.analyzedSuspectIds.length,
      suspectsTotal: caseData.suspects.length,
      testimoniesReviewed: state.reviewedTestimonyIds.length,
      testimoniesTotal: caseData.testimonies.length,
      locationsVisited: state.visitedLocationIds.length,
      locationsTotal: caseData.locations.length,
      hypothesesCreated: state.hypotheses.length,
    }),
    [state, caseData],
  );

  const isEvidenceViewed = useCallback(
    (id: string) => state.viewedEvidenceIds.includes(id),
    [state.viewedEvidenceIds],
  );
  const isSuspectAnalyzed = useCallback(
    (id: string) => state.analyzedSuspectIds.includes(id),
    [state.analyzedSuspectIds],
  );
  const isTestimonyReviewed = useCallback(
    (id: string) => state.reviewedTestimonyIds.includes(id),
    [state.reviewedTestimonyIds],
  );
  const isLocationVisited = useCallback(
    (id: string) => state.visitedLocationIds.includes(id),
    [state.visitedLocationIds],
  );

  const value: InvestigationContextValue = {
    state,
    stats,
    viewEvidence,
    analyzeSuspect,
    reviewTestimony,
    visitLocation,
    addHypothesis,
    submitAccusation,
    clearAccusation,
    resetInvestigation,
    isEvidenceViewed,
    isSuspectAnalyzed,
    isTestimonyReviewed,
    isLocationVisited,
    isCaseSolved: state.accusation?.correct ?? false,
  };

  return (
    <InvestigationContext.Provider value={value}>{children}</InvestigationContext.Provider>
  );
}

export function useInvestigation(): InvestigationContextValue {
  const ctx = useContext(InvestigationContext);
  if (!ctx) {
    throw new Error("useInvestigation must be used within an InvestigationProvider");
  }
  return ctx;
}
