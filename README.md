# HookHub 🪝

A beautiful, curated directory for discovering and browsing open-source Claude Code hooks. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

![HookHub](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)

## 🌟 Features

- **🔍 Real-time Search**: Search hooks by name, description, tags, or author
- **🏷️ Category Filtering**: Filter by use case (Code Quality, Security, Notifications, etc.)
- **💻 Language Filtering**: Filter by programming language (Python, JavaScript, Bash, etc.)
- **📱 Responsive Design**: Works beautifully on mobile, tablet, and desktop
- **🎨 GitHub-Inspired Dark Theme**: Clean, modern UI with excellent contrast
- **♿ Accessible**: Full keyboard navigation and screen reader support
- **⚡ Fast**: Client-side filtering with optimized performance

## 📋 Prerequisites

- **Node.js**: Version 20.9.0 or higher (required for Next.js 16)
- **npm**: Version 10.x or higher

> **Note**: If you have Node.js 18.x, you'll need to upgrade to Node.js 20.x or higher. You can use [nvm](https://github.com/nvm-sh/nvm) to manage Node versions:
> ```bash
> nvm install 20
> nvm use 20
> ```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
hookhub/
├── app/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Site header with logo
│   │   ├── SearchBar.tsx    # Search input
│   │   ├── FilterPills.tsx  # Category/language filters
│   │   ├── HookCard.tsx     # Hook display card
│   │   ├── HookGrid.tsx     # Responsive grid layout
│   │   ├── EmptyState.tsx   # No results view
│   │   └── Footer.tsx       # Site footer
│   ├── lib/
│   │   ├── hooks-data.ts    # Hooks dataset
│   │   └── filter-utils.ts  # Filter logic
│   ├── types/
│   │   └── hook.ts          # TypeScript types
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── memory/
│   └── spec/                # Project specification
│       ├── HOOKHUB_SPEC.md  # Full spec document
│       └── CLAUDE.md        # Hooks data source
└── public/                  # Static assets
```

## 🎨 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Fonts**: [Geist Sans & Geist Mono](https://vercel.com/font)

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server (localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Adding New Hooks

1. Open `memory/spec/CLAUDE.md`
2. Add your hook to the JSON array following this schema:

```json
{
  "id": "unique-hook-id",
  "name": "Hook Name",
  "description": "Brief description of what the hook does",
  "category": "code-quality|security|notifications|workflow|context-management|validation",
  "tags": ["tag1", "tag2", "tag3"],
  "language": "python|javascript|typescript|bash|shell|go|rust",
  "repoUrl": "https://github.com/username/repo",
  "author": "github-username"
}
```

3. Update `app/lib/hooks-data.ts` with the new hook
4. The hook will appear automatically on the site

## 🎯 Current Status

**MVP Complete** ✅

The MVP includes:
- ✅ 18 curated hooks across 6 categories
- ✅ Real-time search functionality
- ✅ Category and language filtering
- ✅ Responsive grid layout
- ✅ GitHub-inspired dark theme
- ✅ Full accessibility support
- ✅ Empty state handling

## 🔮 Future Enhancements

See `memory/spec/HOOKHUB_SPEC.md` for a complete roadmap. Planned features include:

- Hook detail pages with installation instructions
- GitHub API integration for live stats
- Community voting and ratings
- Submit new hook form
- Dark/light theme toggle
- URL-based filtering

## 📖 Documentation

- **Full Specification**: See `memory/spec/HOOKHUB_SPEC.md`
- **Hooks Data**: See `memory/spec/CLAUDE.md`
- **Claude Code Docs**: [https://docs.claude.com/claude-code](https://docs.claude.com/claude-code)

## 🤝 Contributing

We welcome contributions! To submit a new hook:

1. Ensure your hook meets the [submission criteria](memory/spec/CLAUDE.md#contributing)
2. Fork the repository
3. Add your hook to `memory/spec/CLAUDE.md`
4. Update `app/lib/hooks-data.ts`
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own purposes.

## 🙏 Acknowledgments

- Built for the [Claude Code](https://claude.ai/code) community
- Inspired by GitHub's design language
- Powered by Next.js and Tailwind CSS

---

Made with ♥ by the Claude Code community
