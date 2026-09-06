import { useCallback, useEffect, useState } from 'react'
import { getApiErrorMessage } from '../services/api'

export function useApiResource(loader, options = {}) {
  const { enabled = true, initialData = null } = options
  const [data, setData] = useState(initialData)
  const [loading, setLoading] = useState(enabled)
  const [error, setError] = useState('')

  const retry = useCallback(async () => {
    setLoading(true); setError('')
    try { setData(await loader()) } catch (requestError) { setError(getApiErrorMessage(requestError)) } finally { setLoading(false) }
  }, [loader])

  // The initial request intentionally synchronizes this resource with the backend.
  // eslint-disable-next-line react-hooks/exhaustive-deps, react/set-state-in-effect
  useEffect(() => { if (enabled) retry() }, [enabled, retry])
  return { data, loading, error, retry }
}