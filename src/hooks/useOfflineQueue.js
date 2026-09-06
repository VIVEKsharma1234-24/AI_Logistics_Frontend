import { useCallback, useEffect, useState } from 'react'
import { enqueueOfflineReport, readOfflineReports, syncOfflineReports } from '../services/offlineQueue'

export function useOfflineQueue() {
  const [isOnline, setIsOnline] = useState(() => navigator.onLine)
  const [pendingReports, setPendingReports] = useState(readOfflineReports)
  const refreshQueue = useCallback(() => setPendingReports(readOfflineReports()), [])
  const syncQueue = useCallback(async () => { if (!navigator.onLine) return; await syncOfflineReports(); refreshQueue() }, [refreshQueue])
  useEffect(() => { const online = () => { setIsOnline(true); syncQueue() }; const offline = () => setIsOnline(false); window.addEventListener('online', online); window.addEventListener('offline', offline); return () => { window.removeEventListener('online', online); window.removeEventListener('offline', offline) } }, [syncQueue])
  const queueReport = useCallback((report) => { const queued = enqueueOfflineReport(report); refreshQueue(); return queued }, [refreshQueue])
  return { isOnline, pendingReports, queueReport, syncQueue, refreshQueue }
}