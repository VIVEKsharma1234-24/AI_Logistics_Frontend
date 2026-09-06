import { CheckCircle2, CloudOff, LoaderCircle, RefreshCw } from 'lucide-react'
import { useApiResource } from '../hooks/useApiResource'
import { getCurrentRisk } from '../services/api'

export default function BackendDataNotice() {
  const { loading, error, retry } = useApiResource(getCurrentRisk)
  if (loading) return <div className="mb-4 flex items-center gap-2 border border-[#dce5e7] bg-white px-3 py-2 text-xs text-[#66808a]"><LoaderCircle size={14} className="animate-spin" />Checking FastAPI connection...</div>
  if (error) return <div role="alert" className="mb-4 flex flex-col justify-between gap-3 border border-[#e8c1b8] bg-[#fffaf8] px-3 py-3 text-xs text-[#b33b2b] sm:flex-row sm:items-center"><span className="flex items-center gap-2"><CloudOff size={15} />{error} Demo values are shown and are not backend data.</span><button type="button" onClick={retry} className="flex items-center gap-1 font-bold text-[#d94d35]"><RefreshCw size={13} />Retry</button></div>
  return <div className="mb-4 flex items-center gap-2 border border-[#b9d9d5] bg-[#f7fcfb] px-3 py-2 text-xs text-[#27756f]"><CheckCircle2 size={14} />FastAPI connected. Live risk data is available to the dashboard.</div>
}