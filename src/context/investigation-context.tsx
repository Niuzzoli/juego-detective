"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
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
  | { type: "RESET" };

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
    default:
      return state;
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
