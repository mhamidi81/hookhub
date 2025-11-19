"use client";

import { useState, useMemo } from "react";
import { Header } from "./components/Header";
import { SearchBar } from "./components/SearchBar";
import { FilterPills } from "./components/FilterPills";
import { HookGrid } from "./components/HookGrid";
import { EmptyState } from "./components/EmptyState";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { RainEffect } from "./components/RainEffect";
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
    <div className="relative flex min-h-screen flex-col bg-gray-950">
      <RainEffect />
      <Header />

      <main className="relative z-10 flex-grow">
        <div className="container mx-auto px-4 py-8">
          {/* Search and Filters Section */}
          <div className="mb-8 space-y-6 rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-900/70 via-gray-800/70 to-gray-900/70 p-6 shadow-2xl backdrop-blur-sm">
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
              <div className="flex items-center justify-between border-t border-gray-700/50 pt-4">
                <p className="text-sm font-medium text-gray-400">
                  Showing <span className="text-blue-400">{filteredHooks.length}</span> of <span className="text-gray-300">{allHooks.length}</span> hooks
                </p>
                <button
                  onClick={handleClearFilters}
                  className="rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 text-sm font-medium text-blue-400 shadow-lg backdrop-blur-sm transition-all duration-300 hover:from-blue-600/30 hover:to-purple-600/30 hover:text-blue-300 hover:shadow-xl hover:shadow-blue-500/20"
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

      {/* FAQ Section */}
      <FAQ />

      <Footer />
    </div>
  );
}
