"use client"

import Image from "next/image"
import type { KeyboardEvent as ReactKeyboardEvent } from "react"
import { useEffect, useRef, useState } from "react"

export function FeaturedGallery({ images, alt }: { images: string[]; alt: string }) {
  const safeImages = images && images.length > 0 ? images : ["/placeholder.jpg"]
  const total = safeImages.length
  const [current, setCurrent] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const frameRef = useRef<HTMLDivElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const goTo = (index: number) => {
    if (total === 0) return
    const safeIndex = ((index % total) + total) % total
    setCurrent(safeIndex)
  }

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault()
      goTo(current + 1)
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      goTo(current - 1)
    }
  }

  useEffect(() => {
    if (!isModalOpen) return

    const handleModalKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        setIsModalOpen(false)
      } else if (event.key === "ArrowRight") {
        event.preventDefault()
        goTo(current + 1)
      } else if (event.key === "ArrowLeft") {
        event.preventDefault()
        goTo(current - 1)
      }
    }

    window.addEventListener("keydown", handleModalKeys)
    return () => window.removeEventListener("keydown", handleModalKeys)
  }, [isModalOpen, current, total])

  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.focus()
    }
  }, [isModalOpen])

  if (total === 0) return null

  return (
    <>
      <div className="space-y-4">
        <div
          ref={frameRef}
          tabIndex={0}
          className="relative aspect-[3/2] w-full overflow-hidden rounded-[32px] border border-neutral-200 bg-neutral-100 outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30"
          aria-label="Property gallery"
          aria-live="polite"
          role="region"
          aria-roledescription="carousel"
          aria-atomic="true"
          onKeyDown={handleKeyDown}
          onClick={() => frameRef.current?.focus()}
        >
          <Image
            key={safeImages[current]}
            src={safeImages[current]}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            className="object-cover object-center"
            priority
          />
          {total > 1 && (
            <button
              type="button"
              className="absolute right-5 top-5 rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-700 shadow-sm transition hover:bg-white"
              onClick={(event) => {
                event.stopPropagation()
                setIsModalOpen(true)
              }}
            >
              View
            </button>
          )}
          {total > 1 && (
            <div className="absolute bottom-5 right-5 rounded-full bg-white/80 px-4 py-1 text-xs font-medium text-neutral-700">
              {current + 1} / {total}
            </div>
          )}
          {total > 1 && (
            <>
              <button
                type="button"
                className="absolute left-4 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-700 shadow-sm backdrop-blur transition hover:bg-white md:flex"
                onClick={(event) => {
                  event.stopPropagation()
                  goTo(current - 1)
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                type="button"
                className="absolute right-4 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white/80 text-neutral-700 shadow-sm backdrop-blur transition hover:bg-white md:flex"
                onClick={(event) => {
                  event.stopPropagation()
                  goTo(current + 1)
                }}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </div>

        {total > 1 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {safeImages.map((src, index) => {
              const isActive = current === index
              return (
                <button
                  key={`${src}-${index}`}
                  type="button"
                  className={`relative h-24 w-32 flex-shrink-0 overflow-hidden rounded-2xl border transition-all sm:h-28 sm:w-40 ${
                    isActive ? "border-neutral-900 ring-2 ring-neutral-900/10" : "border-transparent hover:border-neutral-300"
                  }`}
                  onClick={() => goTo(index)}
                  aria-label={`Preview image ${index + 1}`}
                  aria-pressed={isActive}
                >
                  <Image
                    src={src}
                    alt={`${alt} preview ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 33vw, 15vw"
                    className="object-cover object-center"
                  />
                </button>
              )
            })}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div
          ref={modalRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10 focus-visible:outline-none"
          role="dialog"
          aria-modal="true"
          aria-label="Expanded property gallery"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-black" onClick={(event) => event.stopPropagation()}>
            <Image
              key={`modal-${safeImages[current]}`}
              src={safeImages[current]}
              alt={alt}
              width={1800}
              height={1200}
              className="h-full w-full object-cover"
            />
            <button
              type="button"
              className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-neutral-900 transition hover:bg-white"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
            <button
              type="button"
              className="absolute left-4 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/20 text-white shadow-sm backdrop-blur transition hover:bg-white/40 md:flex"
              onClick={() => goTo(current - 1)}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              type="button"
              className="absolute right-4 top-1/2 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/20 text-white shadow-sm backdrop-blur transition hover:bg-white/40 md:flex"
              onClick={() => goTo(current + 1)}
              aria-label="Next image"
            >
              ›
            </button>
            <div className="absolute bottom-5 right-5 rounded-full bg-white/90 px-4 py-1 text-xs font-medium text-neutral-900">
              {current + 1} / {total}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FeaturedGallery
