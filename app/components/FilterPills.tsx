"use client";

import { HookCategory, ProgrammingLanguage, CATEGORIES, LANGUAGES } from "@/app/types/hook";

interface FilterPillsProps {
  type: "category" | "language";
  selected: (HookCategory | ProgrammingLanguage)[];
  onToggle: (value: HookCategory | ProgrammingLanguage) => void;
}

export const FilterPills = ({ type, selected, onToggle }: FilterPillsProps) => {
  const options = type === "category" ? CATEGORIES : LANGUAGES;
  const label = type === "category" ? "Categories" : "Languages";

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    value: HookCategory | ProgrammingLanguage
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle(value);
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-300">{label}</h3>
      <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
        {options.map((option) => {
          const isSelected = selected.includes(option.value as any);
          const isCategory = type === "category";

          return (
            <button
              key={option.value}
              onClick={() => onToggle(option.value as any)}
              onKeyDown={(e) => handleKeyDown(e, option.value as any)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                isSelected
                  ? "border-blue-500 bg-blue-500/20 text-blue-400"
                  : "border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600 hover:bg-gray-700 hover:text-gray-300"
              }`}
              aria-pressed={isSelected}
              aria-label={`Filter by ${option.label}`}
              tabIndex={0}
            >
              {!isCategory && "icon" in option && (
                <span aria-hidden="true">{option.icon}</span>
              )}
              <span>{option.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
