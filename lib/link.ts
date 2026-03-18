export function isExternalHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

export function isActionableHref(href: string): boolean {
  return href.trim() !== "" && href !== "#";
}
