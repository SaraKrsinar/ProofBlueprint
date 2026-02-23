import type {
    BusinessType,
    ConversionGoal,
    LayoutRecommendation,
} from '@/types'

type LayoutMatrix = Record<
    BusinessType,
    Record<ConversionGoal, LayoutRecommendation>
>

export const LAYOUT_MATRIX: LayoutMatrix = {
    ecommerce: {
        increase_trust: {
            layout: 'grid',
            socialProofTypes: ['reviews', 'star_ratings', 'ugc_photos'],
            rationale:
                'A grid of photo reviews with star ratings creates a rich, scannable trust signal',
            bestFor: ['Product pages', 'Category pages', 'Homepage sections'],
        },
        reduce_bounce: {
            layout: 'carousel',
            socialProofTypes: ['ugc_photos', 'reviews'],
            rationale:
                'An auto-playing carousel of UGC photos keeps visitors visually engaged',
            bestFor: ['Hero sections', 'Above-the-fold placements'],
        },
        boost_checkout: {
            layout: 'floating_badge',
            socialProofTypes: ['star_ratings', 'reviews'],
            rationale:
                'A compact floating badge with star rating and review count provides ambient reassurance without disrupting the checkout flow',
            bestFor: ['Checkout pages', 'Cart pages', 'Payment steps'],
        },
        grow_signups: {
            layout: 'inline_list',
            socialProofTypes: ['testimonials', 'reviews'],
            rationale:
                'Inline testimonials near the sign-up form create a direct connection between proof and action',
            bestFor: [
                'Landing pages',
                'Sign-up forms',
                'Email capture sections',
            ],
        },
        improve_seo: {
            layout: 'masonry',
            socialProofTypes: ['reviews', 'ugc_photos', 'social_mentions'],
            rationale:
                'A masonry layout maximizes the volume of crawlable review content on the page',
            bestFor: ['Product pages', 'Category pages', 'Blog sections'],
        },
    },
    saas: {
        increase_trust: {
            layout: 'inline_list',
            socialProofTypes: ['testimonials', 'star_ratings'],
            rationale: 'Named testimonials with job titles and company logos build B2B authority',
            bestFor: ['Hero sections', 'Pricing pages', 'Feature pages'],
        },
        reduce_bounce: {
            layout: 'carousel',
            socialProofTypes: ['testimonials', 'social_mentions'],
            rationale: 'A rotating testimonial carousel keeps visitors reading and exploring the product',
            bestFor: ['Hero sections', 'Feature overview pages'],
        },
        boost_checkout: {
            layout: 'floating_badge',
            socialProofTypes: ['star_ratings', 'reviews'],
            rationale: 'A G2/Capterra-style badge at the upgrade step provides third-party validation',
            bestFor: ['Pricing pages', 'Upgrade flows', 'Checkout steps'],
        },
        grow_signups: {
            layout: 'inline_list',
            socialProofTypes: ['testimonials', 'social_mentions'],
            rationale: 'Short, punchy testimonials near the sign-up CTA remove final objections',
            bestFor: ['Sign-up pages', 'Free trial landing pages'],
        },
        improve_seo: {
            layout: 'grid',
            socialProofTypes: ['reviews', 'testimonials'],
            rationale: 'A grid of detailed reviews generates keyword-rich content for comparison searches',
            bestFor: ['Feature pages', 'Use-case landing pages', 'Comparison pages'],
        },
    },
    local_service: {
        increase_trust: {
            layout: 'grid',
            socialProofTypes: ['reviews', 'ugc_photos', 'star_ratings'],
            rationale: 'Photo reviews from real local customers are the most powerful trust signal for local businesses',
            bestFor: ['Homepage', 'Service pages', 'About page'],
        },
        reduce_bounce: {
            layout: 'carousel',
            socialProofTypes: ['ugc_photos', 'reviews'],
            rationale: 'A photo carousel of customer experiences creates emotional engagement',
            bestFor: ['Hero sections', 'Service overview pages'],
        },
        boost_checkout: {
            layout: 'floating_badge',
            socialProofTypes: ['star_ratings', 'reviews'],
            rationale: 'A compact review badge near the booking button provides last-moment reassurance',
            bestFor: ['Booking pages', 'Contact forms', 'Appointment schedulers'],
        },
        grow_signups: {
            layout: 'inline_list',
            socialProofTypes: ['testimonials', 'reviews'],
            rationale: 'Customer stories near the loyalty program or newsletter sign-up drive opt-ins',
            bestFor: ['Loyalty program pages', 'Newsletter sign-up sections'],
        },
        improve_seo: {
            layout: 'masonry',
            socialProofTypes: ['reviews', 'ugc_photos'],
            rationale: 'A masonry of local reviews generates neighborhood and service-specific keyword content',
            bestFor: ['Service pages', 'Location pages', 'Blog sections'],
        },
    },
    marketplace: {
        increase_trust: {
            layout: 'grid',
            socialProofTypes: ['reviews', 'star_ratings', 'ugc_photos'],
            rationale: 'Verified purchase reviews in a grid are the core trust mechanism for marketplace listings',
            bestFor: ['Product listing pages', 'Seller profile pages'],
        },
        reduce_bounce: {
            layout: 'carousel',
            socialProofTypes: ['ugc_photos', 'reviews'],
            rationale: 'A photo carousel of buyer experiences keeps shoppers engaged on listing pages',
            bestFor: ['Product pages', 'Category pages'],
        },
        boost_checkout: {
            layout: 'floating_badge',
            socialProofTypes: ['star_ratings', 'reviews'],
            rationale: 'Seller trust score badge at checkout prevents last-minute abandonment',
            bestFor: ['Cart pages', 'Checkout steps', 'Payment pages'],
        },
        grow_signups: {
            layout: 'inline_list',
            socialProofTypes: ['testimonials', 'social_mentions'],
            rationale: 'Buyer and seller success stories near the registration form drive sign-ups',
            bestFor: ['Registration pages', 'Onboarding flows'],
        },
        improve_seo: {
            layout: 'masonry',
            socialProofTypes: ['reviews', 'ugc_photos', 'social_mentions'],
            rationale: 'A masonry of product reviews generates massive long-tail keyword coverage',
            bestFor: ['Product pages', 'Category pages', 'Search result pages'],
        },
    },
    agency: {
        increase_trust: {
            layout: 'inline_list',
            socialProofTypes: ['testimonials', 'social_mentions'],
            rationale: 'Named client testimonials with company logos and results metrics build B2B authority',
            bestFor: ['Hero sections', 'About page', 'Services pages'],
        },
        reduce_bounce: {
            layout: 'carousel',
            socialProofTypes: ['testimonials', 'ugc_photos'],
            rationale: 'A rotating case study carousel keeps prospects engaged and exploring your work',
            bestFor: ['Portfolio pages', 'Case study sections'],
        },
        boost_checkout: {
            layout: 'inline_list',
            socialProofTypes: ['testimonials', 'reviews'],
            rationale: 'ROI-focused testimonials near the proposal or contact form convert high-intent visitors',
            bestFor: ['Contact pages', 'Proposal pages', 'Pricing sections'],
        },
        grow_signups: {
            layout: 'inline_list',
            socialProofTypes: ['testimonials', 'social_mentions'],
            rationale: 'Client success quotes near the lead magnet CTA increase opt-in rates',
            bestFor: ['Lead magnet pages', 'Webinar sign-up pages', 'Newsletter sections'],
        },
        improve_seo: {
            layout: 'grid',
            socialProofTypes: ['reviews', 'testimonials'],
            rationale: 'A grid of detailed client reviews generates keyword-rich content for agency searches',
            bestFor: ['Service pages', 'Case study pages', 'Industry-specific landing pages'],
        },
    },
}