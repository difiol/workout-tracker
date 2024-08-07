import { WeightUnits } from "@/types/preferences"

const conversionFactor: Record<WeightUnits, number> = {
  kg: 1,
  lbs: 2.2046226218,
}

export function convertWeightTo(value: number, to: WeightUnits) {
  return Number((value * conversionFactor[to]).toFixed(2))
}
export function convertWeightFrom(value: number, from: WeightUnits) {
  return Number((value / conversionFactor[from]).toFixed(2))
}