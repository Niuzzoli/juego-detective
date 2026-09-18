import { Box, FileText, Fingerprint, Image as ImageIcon, MessageCircle } from "lucide-react";
import type { EvidenceCategory, ImportanceLevel } from "@/types/case";
import type { LucideIcon } from "lucide-react";

export const categoryIcons: Record<EvidenceCategory, LucideIcon> = {
  document: FileText,
  photo: ImageIcon,
  communication: MessageCircle,
  forensic: Fingerprint,
  object: Box,
};

export const importanceBadgeVariant: Record<ImportanceLevel, "neutral" | "amber" | "case"> = {
  low: "neutral",
  medium: "neutral",
  high: "amber",
  critical: "case",
};
