import type {
  CaseStatus,
  Difficulty,
  EvidenceCategory,
  ImportanceLevel,
  InterestLevel,
} from "@/types/case";

export const statusLabels: Record<CaseStatus, string> = {
  unsolved: "SIN RESOLVER",
  solved: "RESUELTO",
  archived: "ARCHIVADO",
};

export const difficultyLabels: Record<Difficulty, string> = {
  low: "BAJA",
  medium: "MEDIA",
  high: "ALTA",
};

export const evidenceCategoryLabels: Record<EvidenceCategory, string> = {
  document: "Documento",
  photo: "Fotografía",
  communication: "Comunicación",
  forensic: "Forense",
  object: "Objeto",
};

export const importanceLabels: Record<ImportanceLevel, string> = {
  low: "Baja",
  medium: "Media",
  high: "Alta",
  critical: "Crítica",
};

export const interestLabels: Record<InterestLevel, string> = {
  low: "Bajo",
  medium: "Medio",
  high: "Alto",
};
