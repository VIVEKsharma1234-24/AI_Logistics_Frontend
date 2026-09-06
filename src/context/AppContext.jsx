import { createContext, useMemo, useState } from 'react'
import en from '../data/i18n/en'
import hi from '../data/i18n/hi'

const translations = { en, hi }
const AppContext = createContext(null)

export function AppProvider({ children }) {
	const [locale, setLocale] = useState(() => localStorage.getItem('ner-safe-locale') || 'en')
	const [lowNetworkMode, setLowNetworkMode] = useState(() => localStorage.getItem('ner-safe-low-network') === 'true')
	const changeLocale = (nextLocale) => { setLocale(nextLocale); localStorage.setItem('ner-safe-locale', nextLocale) }
	const changeLowNetworkMode = (enabled) => { setLowNetworkMode(enabled); localStorage.setItem('ner-safe-low-network', String(enabled)) }
	const value = useMemo(() => ({ region: 'North Eastern Region', locale, lowNetworkMode, setLocale: changeLocale, setLowNetworkMode: changeLowNetworkMode, t: (key) => translations[locale]?.[key] || translations.en[key] || key }), [locale, lowNetworkMode])
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContext