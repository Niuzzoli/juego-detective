import type { LucideIcon } from "lucide-react";
import { Brain, Clock, Folder, Gavel, MapPin, MessageSquare, Search, Settings, Users } from "lucide-react";

export interface NavItem {
  slug: string;
  label: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
  { slug: "expediente", label: "Expediente", icon: Folder },
  { slug: "evidencias", label: "Evidencias", icon: Search },
  { slug: "sospechosos", label: "Sospechosos", icon: Users },
  { slug: "testimonios", label: "Testimonios", icon: MessageSquare },
  { slug: "timeline", label: "Línea temporal", icon: Clock },
  { slug: "ubicaciones", label: "Ubicaciones", icon: MapPin },
  { slug: "hipotesis", label: "Hipótesis", icon: Brain },
  { slug: "acusacion", label: "Acusación", icon: Gavel },
];

export const SETTINGS_ITEM: NavItem = { slug: "ajustes", label: "Ajustes", icon: Settings };
