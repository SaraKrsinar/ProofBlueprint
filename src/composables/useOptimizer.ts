import { reactive, computed } from 'vue'
import { createDefaultBusinessProfile, createDefaultGoalSelection } from '@/data/optimizerDefaults'
import type { BusinessProfile, ConversionGoal, PlacementZone } from '@/types'

export function useOptimizer() {
    const businessProfile = reactive(createDefaultBusinessProfile())
    const goalSelection = reactive(createDefaultGoalSelection())

    function updateBusinessProfile<K extends keyof BusinessProfile>(
        key: K,
        value: BusinessProfile[K]
    ) {
        businessProfile[key] = value
    }

    function setPrimaryGoal(goal: ConversionGoal) {
        goalSelection.primaryGoal = goal
        goalSelection.secondaryGoals = goalSelection.secondaryGoals.filter(
            g => g !== goal
        )
    }

    function toggleSecondaryGoal(goal: ConversionGoal) {
        if (goal === goalSelection.primaryGoal) return

        const index = goalSelection.secondaryGoals.indexOf(goal)

        if (index !== -1) {
            goalSelection.secondaryGoals.splice(index, 1)
        } else if (goalSelection.secondaryGoals.length < 2) {
            goalSelection.secondaryGoals.push(goal)
        }
    }

    function setCurrentPlacement(zone: PlacementZone | null) {
        goalSelection.currentPlacement = zone
    }

    const isStep1Valid = computed(() =>
        businessProfile.businessType !== null &&
        businessProfile.monthlyVisitors !== null
    )

    const isStep2Valid = computed(() =>
        goalSelection.primaryGoal !== null
    )

    function reset() {
        Object.assign(businessProfile, createDefaultBusinessProfile())
        Object.assign(goalSelection, createDefaultGoalSelection())
    }

    return {
        businessProfile,
        goalSelection,
        updateBusinessProfile,
        setPrimaryGoal,
        toggleSecondaryGoal,
        setCurrentPlacement,
        isStep1Valid,
        isStep2Valid,
        reset,
    }
}