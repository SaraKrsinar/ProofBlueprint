import {
    LAYOUT_LABELS,
    ZONE_LABELS,
    PROOF_TYPE_LABELS,
} from '@/constants/optimizationLabels'
import type { OptimizationResult } from '@/types'

export function buildEmbedPlanText(
    result: OptimizationResult,
    aiResult: any,
    checklistItems: string[]
): string {
    const topPlacement = result.placements[0]

    const layoutLabel =
        LAYOUT_LABELS[result.layout.layout] ??
        result.layout.layout

    const placementLabel = topPlacement
        ? ZONE_LABELS[topPlacement.zone] ?? topPlacement.zone
        : '-'

    const headline =
        aiResult?.enhancedHeadline ??
        result.messaging.headline

    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    const lines = [
        '---------------------------------------',
        '  SOCIAL PROOF EMBED PLAN',
        `  Generated: ${today}`,
        '---------------------------------------',
        '',

        'RECOMMENDED PLACEMENT',
        `  ${placementLabel}`,
        `  Expected lift: ${topPlacement?.expectedLift ?? '-'}`,
        '',

        'RECOMMENDED LAYOUT',
        `  ${layoutLabel}`,
        `  Content types: ${result.layout.socialProofTypes
            .map(t => PROOF_TYPE_LABELS[t] ?? t)
            .join(', ')}`,
        '',

        'FINAL HEADLINE',
        `  "${headline}"`,
        '',

        'IMPLEMENTATION CHECKLIST',
        ...checklistItems.map((item, i) => `  ${i + 1}. ${item}`),
        '',

        'AI-ENHANCED MESSAGING',
        `  Headline: "${headline}"`,
        `  A/B Variant: "${aiResult?.abVariantHeadline ?? '-'}"`,
        `  Supporting text: "${result.messaging.subtext}"`,
        `  CTA: "${result.messaging.ctaLabel}"`,
        '',

        '---------------------------------------',
        '  Powered by EmbedSocial',
        '  https://embedsocial.com',
        '---------------------------------------',
    ]

    return lines.join('\n')
}