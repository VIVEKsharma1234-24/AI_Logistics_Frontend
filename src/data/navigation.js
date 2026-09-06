import { BellRing, ClipboardList, FileWarning, LayoutDashboard, Map, Settings, Siren } from 'lucide-react'

export const primaryNavigation = [
  { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { label: 'Risk Map', path: '/risk-map', icon: Map },
  { label: 'Incidents', path: '/incidents', icon: ClipboardList },
  { label: 'Alerts', path: '/alerts', icon: BellRing, badge: '4' },
  { label: 'Emergency Response', path: '/emergency-response', icon: Siren },
  { label: 'Citizen Report', path: '/citizen-report', icon: FileWarning },
]

export const secondaryNavigation = [{ label: 'Settings', path: '/settings', icon: Settings }]
export const pageDetails = {
  '/dashboard': { eyebrow: 'Operations overview', title: 'Regional situation room', description: 'A coordinated view of landslide risk, active incidents and response readiness across the North Eastern Region.' },
  '/risk-map': { eyebrow: 'Terrain intelligence', title: 'Risk map', description: 'Monitor risk zones and changing terrain conditions across the region.' },
  '/incidents': { eyebrow: 'Field operations', title: 'Incidents', description: 'Track reported landslides and coordinate incident ownership from one queue.' },
  '/alerts': { eyebrow: 'Public safety', title: 'Alerts', description: 'Review active warnings and communication status across affected districts.' },
  '/emergency-response': { eyebrow: 'Command & control', title: 'Emergency response', description: 'Coordinate response teams, resources and access routes during an event.' },
  '/citizen-report': { eyebrow: 'Community signal', title: 'Citizen report', description: 'Create a structured channel for communities to report hazards from the field.' },
  '/settings': { eyebrow: 'Workspace controls', title: 'Settings', description: 'Configure regional preferences and operational notification settings.' },
}
export const riskSummary = [{ label: 'Critical zones', value: '08', trend: '+2 today', tone: 'red' }, { label: 'Active incidents', value: '24', trend: '5 in review', tone: 'orange' }, { label: 'Districts monitored', value: '42', trend: '100% coverage', tone: 'cyan' }]