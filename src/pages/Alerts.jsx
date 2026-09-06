import { AlertTriangle, BellRing, CheckCircle2, Clock3 } from 'lucide-react'
import { useMemo, useState } from 'react'
import AlertDetailModal from '../components/AlertDetailModal'
import AlertManagementCard from '../components/AlertManagementCard'
import EmptyState from '../components/EmptyState'
import PageIntro from '../components/PageIntro'
import { alertFilters, alertRecords } from '../data/alerts'

const summaryItems = [{ label: 'Active alerts', value: '04', icon: BellRing, tone: 'text-[#d94d35] bg-[#fff0ec]' }, { label: 'Critical alerts', value: '01', icon: AlertTriangle, tone: 'text-[#b8741e] bg-[#fff6e7]' }, { label: 'Acknowledged', value: '01', icon: Clock3, tone: 'text-[#367985] bg-[#eef5f5]' }, { label: 'Resolved today', value: '01', icon: CheckCircle2, tone: 'text-[#168d84] bg-[#e8f7f5]' }]

export default function Alerts() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedAlert, setSelectedAlert] = useState(null)
  const filteredAlerts = useMemo(() => activeFilter === 'All' ? alertRecords : alertRecords.filter((alert) => alert.severity === activeFilter.toUpperCase()), [activeFilter])

  return <div className="page-enter"><PageIntro eyebrow="Public safety" title="Alerts" description="Review active warnings, field advisories and communication status across monitored districts." action="Create alert" /><div className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">{summaryItems.map(({ label, value, icon: Icon, tone }) => <div key={label} className="flex items-center gap-3 border border-[#dce5e7] bg-white p-4"><div className={`flex h-9 w-9 items-center justify-center ${tone}`}><Icon size={18} /></div><div><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#78929b]">{label}</p><p className="display-font mt-1 text-xl font-bold text-[#173747]">{value}</p></div></div>)}</div><div className="mb-5 flex flex-col justify-between gap-4 border-b border-[#dce5e7] pb-4 sm:flex-row sm:items-center"><div><p className="text-sm font-bold text-[#284c58]">Alert register</p><p className="mt-1 text-xs text-[#80979e]">{filteredAlerts.length} {filteredAlerts.length === 1 ? 'alert' : 'alerts'} shown · mock data</p></div><div className="flex flex-wrap gap-2" role="group" aria-label="Filter alerts by severity">{alertFilters.map((filter) => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter} className={`px-3 py-2 text-xs font-bold transition ${activeFilter === filter ? 'bg-[#173f4e] text-white' : 'border border-[#dce5e7] bg-white text-[#66808a] hover:border-[#9ab7bc] hover:text-[#173f4e]'}`}>{filter}</button>)}</div></div>{filteredAlerts.length ? <div className="grid gap-4 lg:grid-cols-2">{filteredAlerts.map((alert) => <AlertManagementCard key={alert.id} alert={alert} onOpen={setSelectedAlert} />)}</div> : <div className="border border-dashed border-[#b9cbcf] bg-white"><EmptyState label={`No ${activeFilter.toLowerCase()} alerts at this time`} /></div>}<AlertDetailModal alert={selectedAlert} onClose={() => setSelectedAlert(null)} /></div>
}