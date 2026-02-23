import type {
    SelectOption,
    BusinessType,
    ConversionGoal,
    PlacementZone,
    VisitorRange,
} from '@/types'
import {
    IconEcommerce,
    IconSaas,
    IconLocalService,
    IconMarketplace,
    IconAgency,
    IconTrust,
    IconBounce,
    IconCheckout,
    IconSignup,
    IconSEO
} from '@/components/icons'

export const BUSINESS_TYPE_OPTIONS: SelectOption<BusinessType>[] = [
    {
        value: 'ecommerce',
        label: 'E-Commerce',
        description: 'Online store selling physical or digital products',
        icon: IconEcommerce,
    },
    {
        value: 'saas',
        label: 'SaaS / Software',
        description: 'Subscription-based software or platform',
        icon: IconSaas,
    },
    {
        value: 'local_service',
        label: 'Local Service',
        description: 'Restaurant, clinic, salon, or some other local business',
        icon: IconLocalService,
    },
    {
        value: 'marketplace',
        label: 'Marketplace',
        description: 'Multi-vendor platform connecting buyers and sellers',
        icon: IconMarketplace,
    },
    {
        value: 'agency',
        label: 'Agency / Consultancy',
        description: 'Service-based business selling expertise',
        icon: IconAgency,
    },
]

export const CONVERSION_GOAL_OPTIONS: SelectOption<ConversionGoal>[] = [
    {
        value: 'increase_trust',
        label: 'Increase Trust',
        description: 'Build credibility with first-time visitors',
        icon: IconTrust,
    },
    {
        value: 'reduce_bounce',
        label: 'Reduce Bounce Rate',
        description: 'Keep visitors engaged longer on key pages',
        icon: IconBounce,
    },
    {
        value: 'boost_checkout',
        label: 'Boost Checkout Rate',
        description: 'Reduce cart abandonment at the purchase step',
        icon: IconCheckout,
    },
    {
        value: 'grow_signups',
        label: 'Grow Sign-ups',
        description: 'Convert visitors into leads or free trial users',
        icon: IconSignup,
    },
    {
        value: 'improve_seo',
        label: 'Improve SEO',
        description: 'Generate fresh UGC content for search engines',
        icon: IconSEO,
    },
]

export const PLACEMENT_ZONE_OPTIONS: SelectOption<PlacementZone>[] = [
    { value: 'hero', label: 'Hero Section', description: 'Top of homepage, above the fold' },
    { value: 'landing_section', label: 'Landing Section', description: 'Dedicated social proof section' },
    { value: 'product_page', label: 'Product Page', description: 'Near product details or pricing' },
    { value: 'checkout', label: 'Checkout / Cart', description: 'During the purchase flow' },
    { value: 'footer', label: 'Footer', description: 'Bottom of every page' },
    { value: 'sidebar', label: 'Sidebar', description: 'Persistent side panel' },
]

export const VISITOR_RANGE_OPTIONS: SelectOption<VisitorRange>[] = [
    { value: 'under_1k', label: 'Under 1,000 / month' },
    { value: '1k_10k', label: '1,000 – 10,000 / month' },
    { value: '10k_100k', label: '10,000 – 100,000 / month' },
    { value: 'over_100k', label: 'Over 100,000 / month' },
]
