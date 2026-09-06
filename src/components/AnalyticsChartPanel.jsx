import SectionHeader from './SectionHeader'

export default function AnalyticsChartPanel({ eyebrow, title, action, children, className = '' }) {
  return <section className={`border border-[#dce5e7] bg-white p-5 shadow-[0_4px_16px_rgba(31,67,80,0.035)] sm:p-6 ${className}`}><SectionHeader eyebrow={eyebrow} title={title} action={action} /><div className="h-[250px] w-full">{children}</div></section>
}