import { Construction } from 'lucide-react'
import { pageDetails } from '../data/navigation'
import PageIntro from '../components/PageIntro'

export default function PagePlaceholder({ path, action }) {
  const details = pageDetails[path]
  return <div className="page-enter"><PageIntro {...details} action={action} /><div className="flex min-h-[360px] flex-col items-center justify-center border border-dashed border-[#b9cbcf] bg-white px-6 text-center"><div className="mb-5 flex h-14 w-14 items-center justify-center bg-[#e8f3f2] text-[#198d83]"><Construction size={25} /></div><h3 className="display-font text-xl font-bold text-[#173747]">Foundation ready</h3><p className="mt-2 max-w-md text-sm leading-relaxed text-[#718991]">This workspace is prepared for the {details.title.toLowerCase()} module. Operational data and workflows will be added in the next build chunk.</p></div></div>
}