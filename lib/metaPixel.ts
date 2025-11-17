export const FB_PIXEL_ID = "1345773383529169"

type FacebookEvent = "Lead" | "Contact" | "SubmitApplication" | "Purchase" | "ViewContent" | "PageView" | string

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export const fbq = (...args: Parameters<NonNullable<Window["fbq"]>>) => {
  if (typeof window === "undefined") return
  if (typeof window.fbq !== "function") return
  window.fbq(...args)
}







