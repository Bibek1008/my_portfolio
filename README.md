# Bibek Bhandari — Engineering & Research

A dual-track portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS. The existing public/profile.jpg remains the intended profile image; the root passport photo is never imported or publicly served.

## Development

npm ci
npm run dev

Validation: npm run lint, npx tsc --noEmit, npm run build.

## Routes and content

- / — introduction, profile, and choices of portfolio track
- /industry — five engineering projects, grouped skills, internship, education, CV
- /research — research profile, eight interests, ongoing hallucination research, preprint, five research projects, experimental methods, education, CV
- /resume — shared CV entry point
- /contact — professional profiles and email

app/data.ts contains structured project and skill content. app/ui.tsx provides shared project cards, education, safe external links, sections, and CV actions. app/navigation.tsx provides active routes and accessible mobile navigation. app/globals.css contains the shared responsive design system.

## CV handoff

No CV PDF was supplied with the available attachments or repository. Do not fabricate or regenerate it. Add the original, unchanged PDF at public/bibek-bhandari-cv.pdf, then rebuild. All routes automatically use that single asset for View CV and Download CV. Until then, the interface offers email contact and marks downloads unavailable. Detailed SupMentr responsibilities are intentionally omitted pending the actual CV.

## Content verification

On 10 November 2026, HTTP checks returned 200 for all four demo URLs and the three supplied GitHub project repositories. HTTP availability does not establish full application functionality. No unverified repository URL was added for the PR reviewer or RAG dashboard. The arXiv record was verified and its actual title and author names used; the work is labeled a preprint. Research descriptions and reported experiment figures otherwise come from the supplied brief and await CV cross-checking. Simulation results are explicitly distinguished from real GPU measurements.

No extra runtime dependencies were added. Next.js and eslint-config-next were updated together within major version 16 to address advisories in the original dependency versions. System fonts avoid a build-time Google Fonts network dependency.

## Final validation

- ESLint: passed.
- TypeScript (tsc --noEmit): passed.
- Production build: passed; all five routes prerendered successfully.
- Built-server HTTP checks: /, /industry, /research, /resume, /contact, /profile.jpg, and the Next.js optimized profile-image endpoint returned 200.
- Root passport-photo URL returned 404.
- Both portfolio routes show the shared unavailable-CV fallback until the original PDF is supplied.
- Visual desktop/mobile browser testing was blocked by the browser automation tool's URL-confidence check; responsive CSS is implemented but visual verification remains outstanding.
- Dependency audit after compatible updates: no critical/high findings; seven moderate findings remain in the ESLint / typescript-eslint tooling chain.
