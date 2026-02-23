import type { PlacementRecommendation, Priority } from '@/types'
import type { MessageTone } from '@/types'

export function getPriorityByIndex(index: number): Priority {
    if (index === 0) return 'primary'
    if (index === 1) return 'secondary'
    return 'optional'
}

export function calculateOverallScore(
    placements: PlacementRecommendation[],
    secondaryGoalCount: number
): number {
    const topScore = placements[0]?.score ?? 0
    const secondScore = placements[1]?.score ?? topScore

    const weightedScore = topScore * 0.6 + secondScore * 0.4
    const secondaryBonus = secondaryGoalCount * 3

    return Math.min(100, Math.round(weightedScore + secondaryBonus))
}

export function appendToneRationale(
    baseRationale: string,
    tone: MessageTone
): string {
    const TONE_SUFFIX: Record<MessageTone, string> = {
        urgency:
            'Adding urgency signals (limited stock, time-sensitive offers) near this placement can amplify the effect by 10–15%.',

        authority:
            'Pairing this with third-party review platform badges (G2, Trustpilot) adds independent authority that self-reported testimonials cannot provide.',

        trust:
            'Reinforcing trust signals such as verified badges, security indicators, transparent guarantees, and real customer identities can further reduce perceived risk and strengthen conversion confidence.',

        social:
            'Highlighting relatable customer stories, community engagement, and user-generated content increases emotional resonance and activates peer influence, encouraging visitors to follow the behavior of others like them.',
    }

    return `${baseRationale} ${TONE_SUFFIX[tone]}`
}

export type ScoreColor = 'success' | 'brand' | 'warning'

const SCORE_THRESHOLDS = {
    success: 80,
    brand: 60,
}

export function getScoreColor(score: number): ScoreColor {
    if (score >= SCORE_THRESHOLDS.success) return 'success'
    if (score >= SCORE_THRESHOLDS.brand) return 'brand'
    return 'warning'
}