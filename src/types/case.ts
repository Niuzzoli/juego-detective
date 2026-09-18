// Core domain types for the DETECTIVE investigation platform.
// Keeping these separate from data/UI lets new cases be added without
// touching components (see /src/data/cases).

export type CaseStatus = "unsolved" | "solved" | "archived";

export type Difficulty = "low" | "medium" | "high";

export type ImportanceLevel = "low" | "medium" | "high" | "critical";

export type InterestLevel = "low" | "medium" | "high";

export type EvidenceCategory =
  | "document"
  | "photo"
  | "communication"
  | "forensic"
  | "object";

export interface Victim {
  name: string;
  age: number;
  occupation: string;
}

export interface Evidence {
  id: string;
  code: string; // e.g. "EVIDENCIA #01"
  title: string;
  category: EvidenceCategory;
  description: string;
  foundAt: string; // date/time string
  locationId: string;
  image?: string;
  discovered: boolean; // true = available from the start, no prerequisite
  unlocksAfter?: UnlockRequirement; // only meaningful when discovered is false
  importance: ImportanceLevel;
  relatedSuspectIds?: string[];
}

// A locked evidence becomes available once the referenced evidence/testimony
// has been reviewed, or the referenced location has been visited.
export type UnlockRequirement =
  | { kind: "evidence"; id: string }
  | { kind: "testimony"; id: string }
  | { kind: "location"; id: string };

export interface Suspect {
  id: string;
  name: string;
  age: number;
  avatarInitials: string;
  occupation: string;
  relationToVictim: string;
  description: string;
  alibi: string;
  interestLevel: InterestLevel;
  knownInfo: string[];
}

export interface Testimony {
  id: string;
  personName: string;
  personId?: string; // optional link to a Suspect
  date: string;
  time: string;
  location: string;
  content: string;
  clues: string[];
  contradicts?: TestimonyContradiction[];
}

export interface TestimonyContradiction {
  testimonyId: string;
  note: string;
}

export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  locationId?: string;
  relatedEvidenceIds?: string[];
  certainty: "confirmed" | "unconfirmed";
}

export interface CaseLocation {
  id: string;
  name: string;
  description: string;
  position: { x: number; y: number }; // percentage coordinates on the stylized map
  relatedEvidenceIds: string[];
}

export interface Hypothesis {
  id: string;
  evidenceIds: string[];
  text: string;
  createdAt: string; // ISO timestamp
}

// The ground truth for a case. Revealed to the player only after they submit
// a final accusation (see Accusation below) — never surfaced anywhere else.
export interface CaseSolution {
  guiltySuspectId: string;
  keyEvidenceIds: string[];
  explanation: string;
}

// A player's final accusation for a case, recorded in session state.
export interface Accusation {
  suspectId: string;
  evidenceIds: string[];
  correct: boolean;
  createdAt: string; // ISO timestamp
}

export interface Case {
  id: string;
  caseNumber: string; // "CASO #001"
  title: string;
  status: CaseStatus;
  difficulty: Difficulty;
  incidentDate: string;
  location: string;
  victim: Victim;
  leadInvestigator: string;
  summary: string;
  description: string;
  objective: string;
  evidences: Evidence[];
  suspects: Suspect[];
  testimonies: Testimony[];
  timeline: TimelineEvent[];
  locations: CaseLocation[];
  solution: CaseSolution;
}
