/** Meses corridos entre início e fim (mês final conta se o dia do fim >= dia do início). */
export function monthsBetween(start: Date, end: Date): number {
  let months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())
  if (end.getDate() >= start.getDate()) {
    months += 1
  }
  return Math.max(months, 1)
}
