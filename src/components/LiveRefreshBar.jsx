import { AlertCircle, CheckCircle2, LoaderCircle, RefreshCw } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLiveData } from '../context/useLiveData'

function relativeTime(date, now) {
  if (!date) return 'Waiting for first refresh'
  const seconds = Math.max(0, Math.floor((now - date.getTime()) / 1000))
  if (seconds < 5) return 'just now'
  if (seconds < 60) return `${seconds} seconds ago`
  const minutes = Math.floor(seconds / 60)
  return `${minutes} minute${minutes === 1 ? '' : 's'} ago`
}

export default function LiveRefreshBar() {
  const { lastUpdated, warning, loading, refresh } = useLiveData()
  const [now, setNow] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(timer) }, [])
  return <div className="mb-4 flex flex-col gap-2 border border-[#dce5e7] bg-white px-3 py-2 text-xs sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2 text-[#66808a]">{warning ? <AlertCircle size={14} className="text-[#d94d35]" /> : loading ? <LoaderCircle size={14} className="animate-spin text-[#2c7480]" /> : <CheckCircle2 size={14} className="text-[#168d84]" />}<span>{warning || `Last updated: ${relativeTime(lastUpdated, now)}`}</span></div><button type="button" onClick={refresh} disabled={loading} className="flex items-center gap-1 self-start font-bold text-[#2c7480] disabled:cursor-wait disabled:opacity-60 sm:self-auto"><RefreshCw size={13} className={loading ? 'animate-spin' : ''} />Refresh</button></div>
}