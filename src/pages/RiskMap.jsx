import { Activity, MapPinned } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import RiskMapView from '../components/RiskMapView'

export default function RiskMap() {
	return <div className="page-enter"><PageIntro eyebrow="Terrain intelligence" title="Risk map" description="Monitor landslide zones, access routes and response assets across the North Eastern Region." action="Export view" /><div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-xs text-[#6e8991]"><div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-[#3abdb2]" />Live mock layer · 118 monitoring points</div><div className="flex items-center gap-4"><span className="flex items-center gap-1.5"><MapPinned size={14} />42 districts</span><span className="flex items-center gap-1.5"><Activity size={14} />Updated 2 min ago</span></div></div><RiskMapView /></div>
}