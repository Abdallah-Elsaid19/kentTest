export function shouldUseAnchor(to: string, external?: boolean) {
  return external === true || to.startsWith("#") || /^(https?:\/\/|mailto:|tel:)/.test(to);
}

export function joinNavigationClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
