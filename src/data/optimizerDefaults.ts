import type { BusinessProfile, GoalSelection } from '@/types'

export function createDefaultBusinessProfile(): BusinessProfile {
    return {
        businessType: null,
        industry: '',
        websiteUrl: '',
        monthlyVisitors: null,
    }
}

export function createDefaultGoalSelection(): GoalSelection {
    return {
        primaryGoal: null,
        secondaryGoals: [],
        currentPlacement: null,
    }
}