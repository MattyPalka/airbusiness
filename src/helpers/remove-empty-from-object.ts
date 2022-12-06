export function removeEmptyFromObject(
  obj: Record<any, any>
): Record<string, string> {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => !!v));
}
