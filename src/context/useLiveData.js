import { useContext } from 'react'
import { LiveDataContext } from './LiveDataContext'

export function useLiveData() {
  const context = useContext(LiveDataContext)
  if (!context) throw new Error('useLiveData must be used inside LiveDataProvider')
  return context
}