# NER-SAFE Frontend

NER-SAFE is a React/Vite disaster-management frontend for landslide risk monitoring, emergency response, road connectivity, alerts, analytics, and citizen reporting across the North Eastern Region of India.

## Requirements

- Node.js 20 or newer
- npm
- FastAPI backend running locally when live data is needed

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root when the backend is not using the default URL:

```env
VITE_API_BASE_URL=http://localhost:8000
```

The frontend calls FastAPI routes with the `/api` prefix, for example `/api/risk/current` and `/api/incidents`.

When the backend is unavailable, the interface shows a connection warning and keeps clearly labeled demo/mock values where applicable. It does not silently present demo data as live backend data.

## Development

Start the Vite development server:

```bash
npm run dev
```

Open `http://localhost:5173`.

## Production Build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run lint checks:

```bash
npm run lint
```

## Backend API URL

Default backend base URL:

```text
http://localhost:8000
```

Override it with `VITE_API_BASE_URL`. API requests are centralized in [src/services/api.js](src/services/api.js); UI components do not make Axios calls directly.

## Frontend Routes

- `/dashboard` - regional situation room and disaster simulation
- `/risk-map` - Leaflet risk zones, roads, villages, incidents, sensors, and facilities
- `/risk-analytics` - Recharts risk, rainfall, incidents, accessibility, and distribution analytics
- `/road-monitoring` - road status table, filters, cards, and details
- `/incidents` - incident placeholder module
- `/alerts` - alert register, severity filters, and detail modal
- `/emergency-response` - emergency priorities, safest route, and facilities
- `/citizen-report` - citizen hazard report, geolocation, media preview, AI preview, and offline queue
- `/settings` - English/Hindi language selection and Low Network Mode

## Data and Connectivity Notes

- Maps use OpenStreetMap tiles and require network access for map tiles.
- The frontend polls live risk, incident, alert, road, and sensor endpoints every 45 seconds; Low Network Mode changes this to two minutes.
- Citizen reports created offline are stored in browser localStorage and retried through `POST /api/sync` when connectivity returns.
- Full offline media persistence is not claimed; queued reports retain form values and media metadata.