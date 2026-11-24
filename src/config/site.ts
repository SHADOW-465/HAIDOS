/**
 * Launch checklist. Update this file before deployment.
 *
 * TODO: Replace email with the real inbox.
 * TODO: https://wa.me/YOUR_NUMBER
 * TODO: https://cal.com/YOUR_HANDLE
 * TODO: Link to Loom/YouTube demo video
 * TODO: Social hrefs for X / Twitter and LinkedIn
 * TODO: Connect Formspree, Web3Forms, Resend, or a custom API endpoint.
 *       formEndpoint is called from the browser. Use a public form URL.
 *       Do not put a secret API key in this file.
 */

export const site = {
  name: "haidos",
  title: "haidos — Business Operations Software & Workflow Automation Studio",
  description:
    "haidos builds fixed-scope internal tools, document extraction, and follow-up systems that replace manual operations. Delivered in 1–2 weeks.",
  url: "https://haidos.in",
  email: "hello@haidos.in",
  locationNote: "Based in Chennai, India  /  Working globally (IST / GMT / EST overlap)",
  whatsappUrl: "https://wa.me/YOUR_NUMBER",
  calendarUrl: "https://cal.com/YOUR_HANDLE",
  demoVideoUrl: "",
  formEndpoint: "",
  social: {
    x: "https://x.com/YOUR_HANDLE",
    linkedin: "https://www.linkedin.com/in/YOUR_HANDLE",
  },
} as const;

export const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;

export const trustPoints = [
  "5–14 day delivery",
  "Human-in-the-loop validation",
  "100% code ownership",
] as const;
