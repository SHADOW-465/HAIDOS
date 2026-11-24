const focus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export const primaryButtonClass = `cursor-pointer items-center justify-center whitespace-nowrap rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-white transition-colors duration-150 [transition-timing-function:ease] hover:bg-ink-hover disabled:cursor-not-allowed disabled:opacity-60 ${focus}`;

export const secondaryButtonClass = `cursor-pointer items-center justify-center whitespace-nowrap rounded-md border border-ink bg-white px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-150 [transition-timing-function:ease] hover:bg-surface-2 ${focus}`;

export const textLinkClass =
  "inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-line underline-offset-4 transition-colors duration-150 [transition-timing-function:ease] hover:decoration-ink";
