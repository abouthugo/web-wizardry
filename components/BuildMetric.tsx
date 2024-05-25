import getBuildDate from '@lib/getBuildDate'

export default function BuildMetric() {
  return (
    <div className="text-xs text-neutral-500 mt-2 text-center md:text-left">
      Last built: <span>{getBuildDate}</span>
    </div>
  )
}
