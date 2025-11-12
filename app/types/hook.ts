export type HookCategory =
  | "code-quality"
  | "security"
  | "notifications"
  | "workflow"
  | "context-management"
  | "validation";

export type ProgrammingLanguage =
  | "python"
  | "javascript"
  | "typescript"
  | "bash"
  | "shell"
  | "go"
  | "rust";

export interface Hook {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  category: HookCategory;
  tags: string[];
  language: ProgrammingLanguage;
  repoUrl: string;
  author?: string;
  stars?: number;
  lastUpdated?: string;
}

export interface FilterState {
  searchQuery: string;
  selectedCategories: HookCategory[];
  selectedLanguages: ProgrammingLanguage[];
}

export const CATEGORIES: { value: HookCategory; label: string; color: string }[] = [
  { value: "code-quality", label: "Code Quality", color: "text-emerald-400" },
  { value: "security", label: "Security", color: "text-red-400" },
  { value: "notifications", label: "Notifications", color: "text-amber-400" },
  { value: "workflow", label: "Workflow", color: "text-blue-400" },
  { value: "context-management", label: "Context", color: "text-violet-400" },
  { value: "validation", label: "Validation", color: "text-orange-400" },
];

export const LANGUAGES: { value: ProgrammingLanguage; label: string; icon: string }[] = [
  { value: "python", label: "Python", icon: "🐍" },
  { value: "javascript", label: "JavaScript", icon: "📜" },
  { value: "typescript", label: "TypeScript", icon: "📘" },
  { value: "bash", label: "Bash", icon: "💻" },
  { value: "shell", label: "Shell", icon: "🐚" },
  { value: "go", label: "Go", icon: "🔷" },
  { value: "rust", label: "Rust", icon: "🦀" },
];
