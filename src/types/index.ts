import type { Component } from "vue"

export type BusinessType =
    | 'ecommerce'
    | 'saas'
    | 'local_service'
    | 'marketplace'
    | 'agency'

export type ConversionGoal =
    | 'increase_trust'
    | 'reduce_bounce'
    | 'boost_checkout'
    | 'grow_signups'
    | 'improve_seo'

export type PlacementZone =
    | 'hero'
    | 'landing_section'
    | 'product_page'
    | 'checkout'
    | 'footer'
    | 'sidebar'

export type WidgetLayout =
    | 'carousel'
    | 'grid'
    | 'floating_badge'
    | 'inline_list'
    | 'masonry'

export type SocialProofType =
    | 'reviews'
    | 'ugc_photos'
    | 'star_ratings'
    | 'testimonials'
    | 'social_mentions'

export type VisitorRange =
    | 'under_1k'
    | '1k_10k'
    | '10k_100k'
    | 'over_100k'

export type Priority =
    | 'primary'
    | 'secondary'
    | 'optional'

export type MessageTone =
    | 'urgency'
    | 'authority'
    | 'trust'
    | 'social'

export type ButtonVariant =
    | 'primary'
    | 'secondary'
    | 'ghost'
    | 'danger'

export type ButtonSize =
    | 'sm'
    | 'md'
    | 'lg'

export type BadgeVariant =
    | 'default'
    | 'success'
    | 'warning'
    | 'info'
    | 'muted'

export interface BusinessProfile {
    businessType: BusinessType | null
    industry: string
    websiteUrl: string
    monthlyVisitors: VisitorRange | null
}

export interface GoalSelection {
    primaryGoal: ConversionGoal | null
    secondaryGoals: ConversionGoal[]
    currentPlacement: PlacementZone | null
}

export interface PlacementRecommendation {
    zone: PlacementZone
    score: number
    rationale: string
    expectedLift: string
    priority: Priority
}

export interface LayoutRecommendation {
    layout: WidgetLayout
    socialProofTypes: SocialProofType[]
    rationale: string
    bestFor: string[]
}

export interface MessagingRecommendation {
    headline: string
    subtext: string
    ctaLabel: string
    tone: MessageTone
}

export interface OptimizationResult {
    placements: PlacementRecommendation[]
    layout: LayoutRecommendation
    messaging: MessagingRecommendation
    overallScore: number
    generatedAt: string
}

export interface WizardStep {
    id: number
    key: string
    label: string
    description: string
    isCompleted: boolean
    isActive: boolean
}

export interface WizardState {
    currentStep: number
    totalSteps: number
    steps: WizardStep[]
    businessProfile: BusinessProfile
    goalSelection: GoalSelection
    result: OptimizationResult | null
}

export interface SelectOption<T = string> {
    value: T
    label: string
    description?: string
    icon?: Component
}

export interface AIEnhancementResult {
    enhancedHeadline: string
    abVariantHeadline: string
    refinedMessaging: string
    conversionRationale: string
}

export interface AIEnhancementState {
    result: AIEnhancementResult | null
    isLoading: boolean
    hasRun: boolean
}

export interface EmbedPlan {
    placement: PlacementZone
    layout: WidgetLayout
    headline: string
    aiHeadline: string | null
    checklist: string[]
    generatedAt: string
}
