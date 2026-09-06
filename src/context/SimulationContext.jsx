import { createContext, useMemo, useState } from 'react'
import { heavyRainfallSimulationState, normalSimulationState } from '../services/simulation'
import { getApiErrorMessage, resetSimulation, runHeavyRainfallSimulation } from '../services/api'

const SimulationContext = createContext(null)

export function SimulationProvider({ children }) {
  const [status, setStatus] = useState('idle')
  const [values, setValues] = useState(normalSimulationState)
  const [error, setError] = useState('')
  const startSimulation = async () => { setStatus('running'); setError(''); try { const result = await runHeavyRainfallSimulation(); setValues(result); setStatus('active') } catch (requestError) { setStatus('idle'); setError(getApiErrorMessage(requestError)) } }
  const reset = async () => { setStatus('running'); setError(''); try { const result = await resetSimulation(); setValues(result || normalSimulationState); setStatus('idle') } catch (requestError) { setStatus('active'); setError(getApiErrorMessage(requestError)) } }
  const contextValue = useMemo(() => ({ status, values, error, normalValues: normalSimulationState, simulatedValues: heavyRainfallSimulationState, startSimulation, resetSimulation: reset, isActive: status === 'active' }), [status, values, error])
  return <SimulationContext.Provider value={contextValue}>{children}</SimulationContext.Provider>
}

export { SimulationContext }