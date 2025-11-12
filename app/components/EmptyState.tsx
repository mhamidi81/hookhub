"use client";

interface EmptyStateProps {
  onClearFilters: () => void;
}

export const EmptyState = ({ onClearFilters }: EmptyStateProps) => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border border-dashed border-gray-700 bg-gray-900/50 px-6 py-12 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-800">
        <svg
          className="h-10 w-10 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-200">
        No hooks found
      </h3>
      <p className="mb-6 max-w-md text-sm text-gray-400">
        No hooks match your current filters. Try adjusting your search or
        clearing your filters to see more results.
      </p>
      <button
        onClick={onClearFilters}
        className="rounded-lg border border-gray-700 bg-gray-800 px-6 py-2.5 text-sm font-medium text-gray-300 transition-all hover:border-gray-600 hover:bg-gray-700 hover:text-gray-100"
        tabIndex={0}
        aria-label="Clear all filters"
      >
        Clear all filters
      </button>
    </div>
  );
};
