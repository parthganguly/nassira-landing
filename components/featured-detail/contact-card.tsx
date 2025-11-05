import { Button } from "@/components/ui/button"

export function ContactCard({ brochurePath }: { brochurePath?: string }) {
  return (
    <aside className="rounded-[32px] border border-neutral-200 bg-white p-8 shadow-sm">
      <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-500">Private Viewing</p>
      <h3 className="mt-3 font-serif text-2xl text-neutral-900">Arrange a Consultation</h3>
      <p className="mt-2 text-sm text-neutral-600">
        Share your details and our Nassira advisors will coordinate a discreet tour aligned with your schedule.
      </p>

      <form className="mt-6 grid gap-4">
        <input
          className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
          placeholder="Full name"
        />
        <input
          className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
          placeholder="Email address"
        />
        <input
          className="rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
          placeholder="Mobile number"
        />
        <textarea
          className="min-h-[120px] rounded-2xl border border-neutral-200 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900/20"
          placeholder="Tell us about your requirements"
        />
        <Button className="h-auto rounded-2xl bg-neutral-900 py-3 text-xs font-semibold uppercase tracking-[0.2em] hover:bg-neutral-700">
          Request Details
        </Button>
      </form>

      <div className="mt-6 space-y-2 text-sm text-neutral-600">
        <a href="mailto:contact@nassiraproperties.com" className="block hover:text-neutral-900">
          contact@nassiraproperties.com
        </a>
        <a href="tel:+971566003563" className="block hover:text-neutral-900">
          +971 56 600 2563
        </a>
      </div>

      {brochurePath && (
        <a
          href={brochurePath}
          className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-neutral-300 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-900 transition-colors hover:border-neutral-900 hover:text-neutral-900"
        >
          Download Brochure
        </a>
      )}
    </aside>
  )
}

export default ContactCard


