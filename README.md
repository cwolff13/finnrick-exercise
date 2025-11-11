# Finnrick Rating Widget

## Quick Start

```bash
npm install
npm run dev
```

## Distribution Approach

### 1. Easy Third Party Integration

**Current**: React component accepts ratingId prop and fetches data via mock API.

**Production**: Single script tag embed. Vendors add script and placeholder div. Loader script automatically injects iframes for all rating placeholders. No build tools or framework dependencies required. Widget hosted on CDN for fast global delivery. **Note:** Production deployment requires configuring the CDN to serve the widget assets and support iframe embedding.

```html
<script src="https://cdn.finnrick.com/widget.js"></script>
<div data-finnrick-rating="RATING_ID"></div>
```

### 2. Up to Date Rating Display

**Current**: Component fetches rating data via mock API function with hardcoded data. Falls back to props if API unavailable.

**Production**: Widget fetches latest rating from API on each page load. Falls back to cached data if API unavailable.

### 3. Faithful Brand Identity Rendering

**Current**: Exact brand colors via CSS variables, Inter Variable font, and logo implemented.

**Production**: Iframe isolation prevents parent site CSS from affecting widget styling. Inter Variable font loaded from Google Fonts CDN. Brand colors enforced via CSS variables. Logo always visible at bottom for attribution.

## Evaluation Criteria

### Design Fidelity

Component matches Figma specifications. Badge dimensions 160x64px. Colors use brand palette. Typography uses Inter Variable. Responsive breakpoint at 370px. Logo positioned at bottom.

### Code Quality

TypeScript provides type safety. React component structure enables reuse. CSS variables centralize brand colors. Responsive design uses Tailwind utilities. Types and services separated from component logic.

### Effectiveness and Security

**Current**: Prototype uses mock API with hardcoded data. No security measures implemented as this is frontend only demonstration.

**Production Requirements**: Backend API must restrict access to registered domains, limit request rates, and validate rating IDs. Widget delivery requires secure connections and protection against malicious scripts.

## Technology Choices

**React**: Component reusability and state management for widget logic.

**TypeScript**: Type safety prevents runtime errors in production code.

**Vite**: Fast builds and minimal bundle size for third party embedding.

**Tailwind CSS**: Responsive design without custom media queries. Design tokens ensure consistency.
