import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import BackendDataNotice from '../components/BackendDataNotice'
import LiveRefreshBar from '../components/LiveRefreshBar'
import SimulationPanel from '../components/SimulationPanel'
import Topbar from '../components/Topbar'
import { useLocation } from 'react-router-dom'

export default function AppLayout() {
  const { pathname } = useLocation()
  return <div className="min-h-screen bg-[#f4f7f8] lg:flex"><Sidebar /><div className="min-w-0 flex-1"><Topbar /><main className="mx-auto max-w-[1480px] px-4 py-6 sm:px-6 lg:px-10 lg:py-8"><LiveRefreshBar />{pathname === '/dashboard' && <><BackendDataNotice /><SimulationPanel /></>}<Outlet /></main></div></div>
}