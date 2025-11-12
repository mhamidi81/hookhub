import { Hook, HookCategory, ProgrammingLanguage } from "@/app/types/hook";

export const filterHooks = (
  hooks: Hook[],
  searchQuery: string,
  selectedCategories: HookCategory[],
  selectedLanguages: ProgrammingLanguage[]
): Hook[] => {
  let filtered = hooks;

  // Apply search filter
  if (searchQuery.trim()) {
    const term = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (hook) =>
        hook.name.toLowerCase().includes(term) ||
        hook.description.toLowerCase().includes(term) ||
        hook.tags.some((tag) => tag.toLowerCase().includes(term)) ||
        hook.author?.toLowerCase().includes(term)
    );
  }

  // Apply category filter
  if (selectedCategories.length > 0) {
    filtered = filtered.filter((hook) =>
      selectedCategories.includes(hook.category)
    );
  }

  // Apply language filter
  if (selectedLanguages.length > 0) {
    filtered = filtered.filter((hook) =>
      selectedLanguages.includes(hook.language)
    );
  }

  return filtered;
};
