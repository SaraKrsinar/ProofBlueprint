import { reactive } from 'vue'
import type {
    BusinessProfile,
    GoalSelection,
    BusinessType,
    VisitorRange,
    ConversionGoal,
    PlacementZone,
} from '@/types'
import { createDefaultBusinessProfile, createDefaultGoalSelection } from '@/data/optimizerDefaults'

export function useOptimizer() {
    const businessProfile = reactive<BusinessProfile>(createDefaultBusinessProfile())
    const goalSelection = reactive<GoalSelection>(createDefaultGoalSelection())

    function setBusinessType(type: BusinessType) {
        businessProfile.businessType = type
    }

    function setIndustry(industry: string) {
        businessProfile.industry = industry
    }

    function setWebsiteUrl(url: string) {
        businessProfile.websiteUrl = url
    }

    function setMonthlyVisitors(range: VisitorRange) {
        businessProfile.monthlyVisitors = range
    }

    function setPrimaryGoal(goal: ConversionGoal) {
        goalSelection.primaryGoal = goal
        goalSelection.secondaryGoals = goalSelection.secondaryGoals.filter((g) => g !== goal)
    }

    function toggleSecondaryGoal(goal: ConversionGoal) {
        if (goal === goalSelection.primaryGoal) return

        const exists = goalSelection.secondaryGoals.includes(goal)

        if (exists) {
            goalSelection.secondaryGoals = goalSelection.secondaryGoals.filter(g => g !== goal)
            return
        }

        if (goalSelection.secondaryGoals.length < 2) {
            goalSelection.secondaryGoals.push(goal)
        }
    }

    function setCurrentPlacement(zone: PlacementZone | null) {
        goalSelection.currentPlacement = zone
    }

    function isStep1Valid(): boolean {
        return (
            businessProfile.businessType !== null &&
            businessProfile.monthlyVisitors !== null
        )
    }

    function isStep2Valid(): boolean {
        return goalSelection.primaryGoal !== null
    }

    function reset() {
        Object.assign(businessProfile, createDefaultBusinessProfile())
        Object.assign(goalSelection, createDefaultGoalSelection())
    }

    return {
        businessProfile,
        goalSelection,
        setBusinessType,
        setIndustry,
        setWebsiteUrl,
        setMonthlyVisitors,
        setPrimaryGoal,
        toggleSecondaryGoal,
        setCurrentPlacement,
        isStep1Valid,
        isStep2Valid,
        reset,
    }
}
