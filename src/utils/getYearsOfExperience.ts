export function getYearsOfExperience(since: Date): number {
  const now = new Date()
  let years = now.getFullYear() - since.getFullYear()
  const anniversaryPassed =
    now.getMonth() > since.getMonth() ||
    (now.getMonth() === since.getMonth() && now.getDate() >= since.getDate())
  if (!anniversaryPassed) years -= 1
  return Math.max(years, 0)
}
