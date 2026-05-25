import { monthsBetween } from './monthsBetween'

export function experienceDurationLabel(start: Date, end?: Date): string {
  const endDate = end ?? new Date()
  const totalMonths = monthsBetween(start, endDate)

  if (totalMonths < 12) {
    return totalMonths === 1 ? '1 mês' : `${totalMonths} meses`
  }

  const years = Math.floor(totalMonths / 12)
  return years === 1 ? '1 ano' : `${years} anos`
}
