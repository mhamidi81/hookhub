"use client";

import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { FilterPills } from "./components/FilterPills";
import { HookGrid } from "./components/HookGrid";
import { EmptyState } from "./components/EmptyState";
import { Footer } from "./components/Footer";
import { getAllHooks } from "./lib/hooks-data";
import { filterHooks } from "./lib/filter-utils";
import { HookCategory, ProgrammingLanguage } from "./types/hook";

export default function Home() {
  const allHooks = getAllHooks();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<HookCategory[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<ProgrammingLanguage[]>([]);

  const handleToggleCategory = (category: HookCategory | ProgrammingLanguage) => {
    setSelectedCategories((prev) => {
      const cat = category as HookCategory;
      if (prev.includes(cat)) {
        return prev.filter((c) => c !== cat);
      }
      return [...prev, cat];
    });
  };

  const handleToggleLanguage = (language: HookCategory | ProgrammingLanguage) => {
    setSelectedLanguages((prev) => {
      const lang = language as ProgrammingLanguage;
      if (prev.includes(lang)) {
        return prev.filter((l) => l !== lang);
      }
      return [...prev, lang];
    });
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedLanguages([]);
  };

  const filteredHooks = useMemo(
    () => filterHooks(allHooks, searchQuery, selectedCategories, selectedLanguages),
    [allHooks, searchQuery, selectedCategories, selectedLanguages]
  );

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedCategories.length > 0 ||
    selectedLanguages.length > 0;

  return (
    <div className="flex min-h-screen flex-col bg-gray-950">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Search and Filters Section */}
          <div className="mb-8 space-y-6 rounded-lg border border-gray-800 bg-gray-900/50 p-6">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search hooks by name, description, or tags..."
            />

            <FilterPills
              type="category"
              selected={selectedCategories}
              onToggle={handleToggleCategory}
            />

            <FilterPills
              type="language"
              selected={selectedLanguages}
              onToggle={handleToggleLanguage}
            />

            {hasActiveFilters && (
              <div className="flex items-center justify-between border-t border-gray-800 pt-4">
                <p className="text-sm text-gray-400">
                  Showing {filteredHooks.length} of {allHooks.length} hooks
                </p>
                <button
                  onClick={handleClearFilters}
                  className="text-sm text-blue-400 transition-colors hover:text-blue-300"
                  tabIndex={0}
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

          {/* Hooks Grid or Empty State */}
          {filteredHooks.length > 0 ? (
            <HookGrid hooks={filteredHooks} />
          ) : (
            <EmptyState onClearFilters={handleClearFilters} />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
