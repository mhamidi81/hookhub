import { Hook, CATEGORIES, LANGUAGES } from "@/app/types/hook";

interface HookCardProps {
  hook: Hook;
}

export const HookCard = ({ hook }: HookCardProps) => {
  const categoryConfig = CATEGORIES.find((c) => c.value === hook.category);
  const languageConfig = LANGUAGES.find((l) => l.value === hook.language);

  return (
    <article className="group flex min-h-[280px] flex-col rounded-lg border border-gray-700 bg-gray-800 p-6 transition-all duration-200 hover:scale-[1.02] hover:border-gray-600 hover:bg-gray-700 hover:shadow-lg">
      {/* Header with Language and Category */}
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg" aria-hidden="true">
            {languageConfig?.icon}
          </span>
          <span className="text-sm font-medium text-gray-300">
            {languageConfig?.label}
          </span>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${categoryConfig?.color} bg-gray-900/50`}
        >
          {categoryConfig?.label}
        </span>
      </div>

      {/* Hook Name */}
      <h3 className="mb-3 text-xl font-bold text-gray-100 group-hover:text-white">
        {hook.name}
      </h3>

      {/* Description */}
      <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-400 line-clamp-3">
        {hook.description}
      </p>

      {/* Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        {hook.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-900/70 px-2.5 py-1 text-xs text-gray-400"
          >
            {tag}
          </span>
        ))}
        {hook.tags.length > 4 && (
          <span className="rounded-full bg-gray-900/70 px-2.5 py-1 text-xs text-gray-500">
            +{hook.tags.length - 4}
          </span>
        )}
      </div>

      {/* Footer with Author and GitHub Link */}
      <div className="flex items-center justify-between border-t border-gray-700 pt-4">
        {hook.author && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <svg
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span>{hook.author}</span>
          </div>
        )}
        <a
          href={hook.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
          aria-label={`View ${hook.name} on GitHub`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.currentTarget.click();
            }
          }}
        >
          <span>View on GitHub</span>
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </article>
  );
};
