import { Hook, CATEGORIES, LANGUAGES } from "@/app/types/hook";

interface HookCardProps {
  hook: Hook;
}

export const HookCard = ({ hook }: HookCardProps) => {
  const categoryConfig = CATEGORIES.find((c) => c.value === hook.category);
  const languageConfig = LANGUAGES.find((l) => l.value === hook.language);

  return (
    <article className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 p-6 shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      {/* Content wrapper with higher z-index */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Header with Language and Category */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 rounded-lg bg-gray-900/50 px-3 py-1.5 backdrop-blur-sm transition-colors group-hover:bg-gray-900/70">
            <span className="text-lg transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
              {languageConfig?.icon}
            </span>
            <span className="text-sm font-medium text-gray-300 group-hover:text-white">
              {languageConfig?.label}
            </span>
          </div>
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium shadow-lg ${categoryConfig?.color} bg-gray-900/50 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}
          >
            {categoryConfig?.label}
          </span>
        </div>

        {/* Hook Name */}
        <h3 className="mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-xl font-bold text-transparent transition-all duration-300 group-hover:from-blue-300 group-hover:to-purple-300">
          {hook.name}
        </h3>

        {/* Description */}
        <p className="mb-4 flex-grow text-sm leading-relaxed text-gray-400 transition-colors duration-300 line-clamp-3 group-hover:text-gray-300">
          {hook.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {hook.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gradient-to-r from-gray-900/70 to-gray-800/70 px-2.5 py-1 text-xs text-gray-400 backdrop-blur-sm transition-all duration-300 hover:from-blue-900/40 hover:to-purple-900/40 hover:text-gray-200"
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
        <div className="flex items-center justify-between border-t border-gray-700/50 pt-4 transition-colors duration-300 group-hover:border-gray-600">
          {hook.author && (
            <div className="flex items-center gap-2 text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
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
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-3 py-1.5 text-sm font-medium text-blue-400 shadow-lg backdrop-blur-sm transition-all duration-300 hover:from-blue-600/30 hover:to-purple-600/30 hover:text-blue-300 hover:shadow-xl hover:shadow-blue-500/20"
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
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
      </div>
    </article>
  );
};
