export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center text-sm text-gray-500 sm:text-left">
            <p>
              Built with{" "}
              <span className="text-red-400" aria-label="love">
                ♥
              </span>{" "}
              by the Claude Code community
            </p>
            <p className="mt-1">
              © {currentYear} HookHub. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://docs.claude.com/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-gray-300"
              tabIndex={0}
            >
              Docs
            </a>
            <a
              href="https://github.com/yourusername/hookhub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-gray-300"
              tabIndex={0}
            >
              GitHub
            </a>
            <a
              href="https://github.com/yourusername/hookhub/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-gray-300"
              tabIndex={0}
            >
              Contribute
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
