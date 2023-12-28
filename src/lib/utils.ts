export function validateString(value: unknown, maxLength: number): boolean {
  if (!value || typeof value !== "string" || value.length > maxLength) {
    return false;
  }
  return true;
}
