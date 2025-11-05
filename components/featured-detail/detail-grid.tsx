export function DetailGrid({
  details,
}: {
  details: { label: string; value?: string | number }[]
}) {
  const filtered = details.filter((detail) => typeof detail.value !== "undefined" && detail.value !== null && detail.value !== "")
  if (filtered.length === 0) return null

  return (
    <section className="rounded-[32px] border border-neutral-200 bg-white/80 px-8 py-8 shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">Property details</p>
      <dl className="mt-6 grid gap-x-12 gap-y-6 text-sm sm:grid-cols-2">
        {filtered.map((d) => (
          <div key={d.label} className="flex flex-col gap-2">
            <dt className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">{d.label}</dt>
            <dd className="text-base font-semibold text-neutral-900">{d.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default DetailGrid


