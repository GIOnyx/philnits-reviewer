# PhilNITS Reviewer

A comprehensive web-based exam preparation platform for the Philippine Informatics Teachers Association (PhilNITS) FE (Fundamentals of Engineering) examination. This application provides adaptive learning through multiple study modalities, spaced repetition, and interactive visualizers for computer science concepts.

## Features

### 📚 Multiple Study Modes

- **Subject A Exam Mode**: 475+ multiple-choice questions covering Technology, Management, and Strategy domains
- **Subject B Workbench**: Algorithm tracing scenarios with step-by-step trace table validation
- **Leitner Spaced Repetition**: Time-based, fixed-interval review system with 5-box architecture (1 day → 3 days → 7 days → 14 days → 30 days)
- **Anki Flashcards**: Digital flashcard deck with manual mastery marking for quick drills
- **Study Hub**: Structured syllabus modules with integrated interactive visualizers and worked examples

### 🧠 Adaptive Learning

- **Mastery Tracking**: 3-strike consecutive correct system automatically hides mastered content
- **Spaced Repetition**: Leitner boxes demote on wrong answers, compress intervals as exam approaches (Oct 25, 2026)
- **Progress Analytics**: Real-time accuracy metrics, domain proficiency breakdown, exam readiness score
- **AI-Powered Generation**: Generate dynamic questions and scenarios on-demand via Gemini API

### 🎨 Interactive Visualizers

- CPU pipeline execution simulator
- Paging/virtual memory simulator
- Subnet calculator with CIDR notation
- Logic gate panel (AND, OR, XOR, NAND, NOR)
- SQL JOIN visualizer (INNER, LEFT, RIGHT, FULL)
- ERD & normalization visualizer (up to 3NF)
- PERT/CPM project scheduling
- Cryptographic signature simulator
- Radix conversion sandbox

### ☁️ Cloud Synchronization

- **Supabase Integration**: Optional cloud sync of Leitner states and progress telemetry
- **Local-First**: All progress saved locally in browser; cloud sync is opt-in via username/password auth
- **Session Persistence**: Automatic login via localStorage token restoration

### 📱 User Experience

- **Dark & Light Themes**: Eye-friendly slate dark theme (default) + academic paper light theme
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Glassmorphism UI**: Modern backdrop-filter design with subtle animations
- **Accessibility**: Semantic HTML, keyboard navigation, high-contrast text

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone the repository
git clone https://github.com/GIOnyx/philnits-reviewer.git
cd philnits-reviewer

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

### Environment Setup

Create a `.env` file in the project root with:

```env
# Supabase (optional, for cloud sync)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Gemini API (optional, for AI question generation)
VITE_GEMINI_API_KEY=your-gemini-api-key

# Node environment
NODE_ENV=development
```

> ⚠️ Never commit `.env` files containing real secrets to version control.

### Development

```bash
# Start development server with hot reload
npm run dev

# Open http://localhost:5173 in your browser
```

### Production Build

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
philnits-reviewer/
├── src/
│   ├── components/           # React components
│   │   ├── SubjectAExam.tsx  # Multiple-choice exam interface
│   │   ├── SubjectBWorkbench.tsx  # Algorithm tracing workbench
│   │   ├── LeitnerDeck.tsx   # Spaced repetition review
│   │   ├── FlashcardDeck.tsx # Anki-style flashcards
│   │   ├── StudyHub.tsx      # Syllabus modules + visualizers
│   │   ├── AnalyticsDashboard.tsx # Progress metrics
│   │   ├── Navbar.tsx        # Tab navigation & sync status
│   │   ├── AuthModal.tsx     # Cloud sync login
│   │   ├── ConfirmationModal.tsx # Confirmation dialogs
│   │   ├── AiChatAssistant.tsx # Gemini AI tutor
│   │   └── visuals/          # Interactive visualizers
│   ├── services/
│   │   ├── api.ts            # Data loading & AI generation
│   │   └── supabase.ts       # Cloud sync client
│   ├── utils/
│   │   ├── markdown.ts       # LaTeX + markdown parser
│   │   ├── masteryEngine.ts  # Mastery state logic
│   │   └── leitnerEngine.ts  # Leitner algorithm
│   ├── data/seed/            # Question & topic data
│   ├── types/exam.ts         # TypeScript interfaces
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── public/Files/             # 299 PNG diagrams & images
├── package.json
├── tsconfig.json
├── vite.config.ts
└── index.html
```

## Data & Content

### Seeded Questions (475 Total)

- **Subject A**: 475 multiple-choice technology questions (exam years 2019-2025)
- **Subject B**: 10+ algorithm tracing scenarios with structured sub-questions
- **Flashcards**: 100+ Anki-compatible flashcards for quick drills
- **Study Topics**: 20+ syllabus modules with formulas, code examples, and deep dives

### Image Assets

All 299 PNG diagrams are stored in `public/Files/` and referenced via markdown embeds:

```markdown
![alt](Files/image-name.png)
![[image-name.png]]  # Obsidian embed syntax
```

## Architecture & Key Algorithms

### Mastery Tracking

Questions/cards are hidden from the active pool when:
- User answers **3 consecutive times correctly** (streak = 3)
- Status = `isMastered: true`
- Wrong answer resets streak to 0

Applies to all study modes except Leitner (which is time-based, not streak-based).

### Leitner Spaced Repetition

Fixed-date intervals compress as exam approaches:

| Box | Initial Interval | Current Interval* | Demotion |
|-----|-------------------|-------------------|----------|
| 1   | 1 day             | Compressed        | Wrong → stays Box 1 |
| 2   | 3 days            | Compressed        | Wrong → Box 1 |
| 3   | 7 days            | Compressed        | Wrong → Box 1 |
| 4   | 14 days           | Compressed        | Wrong → Box 1 |
| 5   | 30 days           | Compressed        | Wrong → Box 1 |

*Intervals compress dynamically based on days remaining to October 25, 2026 exam.

### LaTeX Math Rendering

Mathematical expressions are parsed with support for:

```latex
\frac{num}{den}       % Fractions
\oplus, \otimes       % Operators (⊕, ⊗)
\cdot, \times         % Multiplication (·, ×)
\overline{x}          % Negation/complement
_{x}, ^{x}            % Subscripts & superscripts
```

Rendering pipeline:
1. Markdown parser identifies `$...$` and `$$...$$` blocks
2. `formatMathToUnicode()` converts LaTeX to Unicode symbols
3. Display in monospace blue (`text-accent-cyan`) for visual distinction

## Technologies Used

| Layer | Technology | Notes |
|-------|-----------|-------|
| **Frontend** | React 18 | SPA with hooks & context |
| **Build Tool** | Vite 6 | Fast bundling & HMR |
| **Language** | TypeScript 5 | Type-safe development |
| **Styling** | Tailwind CSS 4 | Utility-first with custom utilities |
| **UI Kit** | Lucide React | 470+ icon library |
| **Backend** | Supabase PostgreSQL | Optional cloud sync |
| **AI** | Google Gemini API | Dynamic question generation |
| **State** | React Context + localStorage | Local & session persistence |

## Authentication & Cloud Sync

### Local-First Approach

- All progress stored locally in browser `localStorage`
- Mastery states, Leitner boxes, answer logs saved client-side
- No account required to use the app

### Optional Cloud Sync

1. Click "Log In" in navbar
2. Create account with username/password (simple auth, no email verification)
3. Progress synced to Supabase `leitner_sync` table
4. Sync status shown in navbar (Syncing → Synced → Error indicators)
5. Debounced auto-sync after each answered card (2 second delay)

### Security

- Passwords hashed with SHA-256 client-side before transmission
- RLS (Row-Level Security) policies enforce user data isolation
- No third-party tracking or analytics

## Performance Optimizations

- **Code Splitting**: Lazy-loaded visualizer components
- **Debounced Sync**: 2-second debounce on cloud telemetry writes
- **Memoization**: React.memo on question/card components
- **CSS**: Minimal inline styles, Tailwind purging removes unused classes
- **Bundle**: ~650 KB gzip (main challenge: seed data + Gemini library)

## Development Guidelines

### Code Style

- **TypeScript**: Strict mode enabled, no `any` types
- **React**: Functional components with hooks
- **Naming**: camelCase for variables, PascalCase for components
- **Formatting**: Prettier recommended (config can be added)

### Adding Questions

Edit `src/data/seed/subjectA_questions.ts`:

```typescript
{
  id: "YYYY_TYPE_DOMAIN_NUM",
  category: "Technology|Management|Strategy",
  subdomain: "Topic name",
  examYear: 2025,
  questionText: "Question text with LaTeX: $\\oplus$ for XOR",
  options: ["A", "B", "C", "D"],
  correctIndex: 2,
  explanation: "Detailed explanation with **bold**, $math$, and images",
  difficultyWeight: 1
}
```

### Adding Visualizers

1. Create component in `src/components/visuals/YourVisualizer.tsx`
2. Export from component barrel
3. Reference in `StudyHub.tsx` with `[[VISUALIZER: YourVisualizer]]`

## Troubleshooting

### Questions Not Showing

- Check browser console for errors
- Verify `.env` VITE_ variables are set
- Clear browser cache: DevTools → Application → Clear Storage

### Images Not Rendering

- Verify image file exists in `public/Files/`
- Check markdown syntax: `![alt](Files/name.png)` or `![[name.png]]`
- Use URL-encoded names for spaces: `Pasted%20image%2020241018.png`

### Cloud Sync Not Working

- Verify Supabase credentials in `.env`
- Check browser console for auth errors
- Ensure RLS policies are enabled on `leitner_sync` table
- Check browser network tab for failed requests

### Math Not Rendering Correctly

- Ensure LaTeX wrapped in `$...$` (inline) or `$$...$$` (block)
- Use `\\` for escaped backslashes in JSON strings: `\\oplus`
- Avoid mixing HTML entities with LaTeX in same expression

## Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/your-feature`
3. Make changes and test locally
4. Run type check: `npm run lint`
5. Commit with clear message: `git commit -m "Add feature description"`
6. Push to fork and open pull request

## Known Limitations

- **No mobile offline**: App requires browser storage API (may have issues on iOS in-app browsers)
- **Bundle size**: Seed data (475 questions + images) makes bundle ~650 KB gzip
- **Gemini API**: Required for dynamic question generation; fallback not implemented
- **Browser storage**: localStorage limited to ~5-10 MB per domain
- **Math rendering**: Complex nested expressions may have display issues

## Roadmap

- [ ] PWA support for offline usage
- [ ] PDF export of progress reports
- [ ] Spaced repetition algorithm optimization
- [ ] Mobile app (React Native)
- [ ] Question difficulty calibration (IRT)
- [ ] Collaborative study groups
- [ ] Video explanations (YouTube embeds)

## License

This project is proprietary software for PhilNITS exam preparation. Usage is restricted to authorized users.

## Support & Contact

For issues, feature requests, or questions:
- Open an issue on [GitHub](https://github.com/GIOnyx/philnits-reviewer)
- Contact project maintainers

---

**Last Updated**: August 2026  
**Build Version**: 1.0.0  
**Exam Date**: October 25, 2026
