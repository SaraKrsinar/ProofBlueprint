import {
    IconTrust,
    IconBounce,
    IconSignup,
    IconSEO,
    IconCarousel,
    IconGrid,
    IconFloating,
    IconInline,
    IconMasonry,
} from '@/components/icons'

export const LAYOUT_LABELS: Record<string, string> = {
    carousel: 'Carousel',
    grid: 'Grid',
    floating_badge: 'Floating Badge',
    inline_list: 'Inline List',
    masonry: 'Masonry',
}

export const ZONE_LABELS: Record<string, string> = {
    hero: 'Hero Section',
    landing_section: 'Landing Section',
    product_page: 'Product Page',
    checkout: 'Checkout / Cart',
    footer: 'Footer',
    sidebar: 'Sidebar',
}

export const PROOF_TYPE_LABELS: Record<string, string> = {
    reviews: 'Customer Reviews',
    ugc_photos: 'UGC Photos',
    star_ratings: 'Star Ratings',
    testimonials: 'Testimonials',
    social_mentions: 'Social Mentions',
}

export type ToneKey = 'trust' | 'urgency' | 'social' | 'authority'

export const TONE_LABELS: Record<
    ToneKey,
    { label: string; icon: any }
> = {
    trust: { label: 'Trust-building', icon: IconTrust },
    urgency: { label: 'Urgency-driven', icon: IconBounce },
    social: { label: 'Social proof', icon: IconSignup },
    authority: { label: 'Authority-based', icon: IconSEO },
}

export function getToneLabel(tone: string) {
    return TONE_LABELS[tone as ToneKey] ?? TONE_LABELS.trust
}

export const PSYCHOLOGICAL_TRIGGERS: Record<
    string,
    { title: string; description: string }
> = {
    trust: {
        title: 'Trust & Credibility',
        description:
            "Visitors evaluate unfamiliar brands through the lens of others' experiences. Authentic reviews reduce perceived risk by providing third-party validation - the same psychological mechanism that makes word-of-mouth the most trusted form of marketing.",
    },
    authority: {
        title: 'Authority & Expertise',
        description:
            'People defer to those with demonstrated expertise or recognized credentials. Named testimonials with job titles, company logos, and specific outcome metrics activate authority bias - making your brand appear more credible and trustworthy.',
    },
    urgency: {
        title: 'Urgency & Scarcity',
        description:
            'Loss aversion is a powerful motivator - people are more motivated to avoid losing something than to gain something equivalent. Real-time social proof (recent purchases, live visitor counts) creates urgency by signaling that others are actively engaging with your offer.',
    },
    social: {
        title: 'Social Validation',
        description:
            'The bandwagon effect drives people to follow the actions of others, especially in uncertain situations. High review counts and user numbers signal that your product or service is the popular, safe choice - reducing the cognitive effort required to make a decision.',
    },
}

export const LAYOUT_ICON_MAP = {
    carousel: IconCarousel,
    grid: IconGrid,
    floating_badge: IconFloating,
    inline_list: IconInline,
    masonry: IconMasonry,
}