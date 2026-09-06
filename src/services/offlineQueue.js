import { api } from './api'

const queueKey = 'ner-safe-offline-reports'

export function readOfflineReports() {
  try { return JSON.parse(localStorage.getItem(queueKey) || '[]') } catch { return [] }
}

export function enqueueOfflineReport(report) {
  const queue = readOfflineReports()
  const queuedReport = { ...report, queueId: report.queueId || `offline-${Date.now()}-${Math.random().toString(16).slice(2)}`, queuedAt: new Date().toISOString(), status: 'pending' }
  localStorage.setItem(queueKey, JSON.stringify([...queue, queuedReport]))
  return queuedReport
}

export async function syncOfflineReports() {
  const queue = readOfflineReports()
  const failed = []
  let synced = 0
  for (const report of queue) {
    try { await api.post('/api/sync', { reports: [report] }); synced += 1 } catch { failed.push(report) }
  }
  localStorage.setItem(queueKey, JSON.stringify(failed))
  return { synced, pending: failed.length, reports: failed }
}