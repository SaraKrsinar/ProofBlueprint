# ProofBlueprint

## Overview

ProofBlueprint is an optimization planning tool designed to help businesses strategically implement social proof (reviews, testimonials, ratings) to improve decision-making confidence and strengthen user trust.

## Purpose

The application guides users through a structured decision flow and generates a data-informed optimization plan tailored to:
- Business type
- Primary conversion goal
- Recommended widget placement
- Messaging tone strategy
- AI-enhanced headline suggestions

---

## Live Demo

https://proof-blueprint.vercel.app

---

## Architecture & Technical Approach

This project focuses on clean architecture and structured recommendation logic.

Key implementation principles:

- Component-driven UI (Vue 3 + Composition API)
- Strong typing with TypeScript
- Centralized constants for labels and psychological triggers
- Computed-based recommendation scoring logic
- Reusable UI component system
- Separation of business logic through composables

I separated the AI logic into a composable service so that the UI layer doesn’t depend on a specific AI implementation. This allows the mock layer to be replaced with a real backend integration without refactoring the component structure.

---

## Features

- Multi-step optimization wizard
- Placement scoring and confidence logic
- Layout and social proof type recommendations
- Messaging tone selection based on psychological triggers
- AI-enhanced headlines and A/B variants
- Exportable implementation checklist
- Production deployment via Vercel

---

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Composition API
- Vercel (Deployment)

---

## Local Development

```bash
git clone https://github.com/SaraKrsinar/ProofBlueprint.git
cd ProofBlueprint
npm install
npm run dev
```

Local server runs at:

http://localhost:5173

---

## Production Build

```bash
npm run build
```

Build output directory: `dist/`

---

## Future Improvements

- Integrate real AI backend (OpenAI / Azure OpenAI)
- Persist optimization plans to backend storage
- Add analytics tracking
- Export plan as downloadable PDF
- User authentication & saved strategies

---

