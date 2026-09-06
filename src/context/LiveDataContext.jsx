import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import useAppContext from './useAppContext'
import { getAlerts, getApiErrorMessage, getCurrentRisk, getIncidents, getRoads, getSensors } from '../services/api'

const initialData = { risk: null, incidents: null, alerts: null, roads: null, sensors: null }
const LiveDataContext = createContext(null)

export function LiveDataProvider({ children }) {
  const { lowNetworkMode } = useAppContext()
  const refreshIntervalMs = lowNetworkMode ? 120_000 : 45_000
  const [data, setData] = useState(initialData)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [warning, setWarning] = useState('')
  const [loading, setLoading] = useState(true)
  const requestInFlight = useRef(false)

  const refresh = useCallback(async () => {
    if (requestInFlight.current) return
    requestInFlight.current = true
    setLoading((current) => current && !lastUpdated)
    const results = await Promise.allSettled([getCurrentRisk(), getIncidents(), getAlerts(), getRoads(), getSensors()])
    const names = ['risk', 'incidents', 'alerts', 'roads', 'sensors']
    const successful = {}; const failures = []
    results.forEach((result, index) => { if (result.status === 'fulfilled') successful[names[index]] = result.value; else failures.push(getApiErrorMessage(result.reason)) })
    if (Object.keys(successful).length) { setData((current) => ({ ...current, ...successful })); setLastUpdated(new Date()) }
    setWarning(failures.length ? `${failures.length} live data source${failures.length === 1 ? '' : 's'} failed. Previous valid data is being kept.` : '')
    setLoading(false); requestInFlight.current = false
  }, [lastUpdated])

  // The initial refresh synchronizes the shared context with backend data.
  // eslint-disable-next-line react/set-state-in-effect
  useEffect(() => { refresh(); const timer = window.setInterval(refresh, refreshIntervalMs); return () => window.clearInterval(timer) }, [refresh, refreshIntervalMs])
  const value = useMemo(() => ({ data, lastUpdated, warning, loading, refresh, refreshIntervalMs }), [data, lastUpdated, warning, loading, refresh, refreshIntervalMs])
  return <LiveDataContext.Provider value={value}>{children}</LiveDataContext.Provider>
}

export { LiveDataContext }