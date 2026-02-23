import { computed } from 'vue'
import type {
  BusinessProfile,
  GoalSelection,
  OptimizationResult,
  PlacementRecommendation,
  PlacementZone,
} from '@/types'
import {
  PLACEMENT_MATRIX,
  LAYOUT_MATRIX,
  MESSAGING_MATRIX,
} from '@/data/recommendations'
import { getPriorityByIndex, calculateOverallScore } from '@/utils/helpers'

export function useRecommendations(
  businessProfile: BusinessProfile,
  goalSelection: GoalSelection
) {
  const result = computed<OptimizationResult | null>(() => {
    const { businessType } = businessProfile
    const { primaryGoal } = goalSelection

    if (!businessType || !primaryGoal) return null

    const primaryPlacements = PLACEMENT_MATRIX[businessType][primaryGoal]

    const secondaryPlacementMap = new Map<string, PlacementRecommendation>()

    for (const secondaryGoal of goalSelection.secondaryGoals) {
      const secondaryPlacements = PLACEMENT_MATRIX[businessType][secondaryGoal]
      for (const p of secondaryPlacements) {
        const existing = secondaryPlacementMap.get(p.zone)
        if (!existing || p.score > existing.score) {
          secondaryPlacementMap.set(p.zone, {
            ...p,
            score: Math.round(p.score * 0.6),
            priority: 'optional' as const,
          })
        }
      }
    }

    const primaryZones = new Set(primaryPlacements.map((p) => p.zone))
    const mergedPlacements: PlacementRecommendation[] = [
      ...primaryPlacements.map((p, i) => ({
        ...p,
        priority: getPriorityByIndex(i),
      })),
    ]

    for (const [zone, rec] of secondaryPlacementMap) {
      if (!primaryZones.has(zone as PlacementZone)) {
        mergedPlacements.push({ ...rec, priority: 'optional' })
      }
    }

    const sortedPlacements = [...mergedPlacements]
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)

    const layout = LAYOUT_MATRIX[businessType][primaryGoal]

    const messaging = MESSAGING_MATRIX[businessType][primaryGoal]

    const overallScore = calculateOverallScore(
      sortedPlacements,
      goalSelection.secondaryGoals.length
    )

    return {
      placements: sortedPlacements,
      layout,
      messaging,
      overallScore,
      generatedAt: new Date().toISOString(),
    }
  })

  const hasResult = computed(() => result.value !== null)

  return {
    result,
    hasResult,
  }
}
