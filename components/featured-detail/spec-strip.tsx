export function SpecStrip({
  beds,
  baths,
  size,
  plot,
}: {
  beds?: number
  baths?: number
  size?: string
  plot?: string
}) {
  const items = [
    beds ? `${beds} Bedrooms` : null,
    baths ? `${baths} Bathrooms` : null,
    size || null,
    plot || null,
  ].filter(Boolean) as string[]

  if (items.length === 0) return null

  return (
    <ul className="flex flex-wrap gap-3 text-sm text-neutral-700">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-5 py-2 font-medium shadow-sm"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default SpecStrip


