# 🚀 SpaceX Launches UI

A modern and responsive frontend application to display SpaceX launch data. Built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, it consumes data from a backend wrapper API and displays upcoming and past launches, as well as embedded video streams of recent launches.

## 📁 Project Structure

spacex-launches-ui/
├── public/ # Static assets
│ └── placeholder.svg
├── src/
│ ├── components/ # Reusable UI components
│ │ ├── ui/
│ │ │ ├── LaunchCard.tsx
│ │ │ ├── LaunchList.tsx
│ │ │ ├── RocketLogo.tsx
│ │ │ └── VideoPlayer.tsx
│ ├── hooks/ # Custom React hooks
│ │ ├── use-mobile.tsx
│ │ ├── use-toast.ts
│ │ └── useLaunchData.ts
│ ├── lib/
│ │ └── utils.ts
│ ├── pages/ # Application routes/pages
│ │ ├── Index.tsx
│ │ └── NotFound.tsx
│ ├── services/ # API service layer
│ │ ├── api.ts
│ │ └── types/
│ │ └── launch.ts
│ ├── App.tsx # App layout and routing
│ ├── main.tsx # App entry point
│ ├── index.css # Global Tailwind styles
│ └── vite-env.d.ts # Vite environment type declarations
├── .env # Environment variables (e.g. VITE_SPACEX_API_URL)
├── index.html # Main HTML template
├── package.json # Project metadata and dependencies
├── postcss.config.js # PostCSS config (used by Tailwind)
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
└── README.md # This file

## 🚀 Getting Started

### Prerequisites

- Node.js `>=18.x`
- A backend API running at the URL defined in `.env` (`VITE_SPACEX_API_URL`)

### 📦 Installation

```bash
# Install dependencies
npm install
```

### 🛠️ Environment Variables

Create a .env file at the root of the project:

```bash
VITE_SPACEX_API_URL=http://localhost:3000
```

### 🧪 Development

```bash
npm run dev
```

Runs the app in development mode at `http://localhost:5173/`.

### 🏗 Build

```bash
npm run build
```

Builds the app for production.

## 🔗 Features

- 🚀 Fetches SpaceX launch data (next, previous, upcoming, past)
- 📺 Embedded webcast for the most recent launch
- 💡 Light and fast UI built with Tailwind CSS
- ♻️ React Query for API caching and data freshness
- 🧠 Modular structure with reusable components and hooks

## 💡 Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- React Query
- Lucide Icons