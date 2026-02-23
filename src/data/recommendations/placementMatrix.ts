import type {
    BusinessType,
    ConversionGoal,
    PlacementRecommendation,
} from '@/types'

type PlacementMatrix = Record<
    BusinessType,
    Record<ConversionGoal, Array<Omit<PlacementRecommendation, 'priority'>>>
>

export const PLACEMENT_MATRIX: PlacementMatrix = {
    ecommerce: {
        increase_trust: [
            { zone: 'product_page', score: 95, rationale: 'Reviews near the buy button directly address purchase hesitation', expectedLift: '+18% add-to-cart' },
            { zone: 'hero', score: 80, rationale: 'Star ratings in the hero build immediate credibility', expectedLift: '+9% time on site' },
            { zone: 'checkout', score: 72, rationale: 'Last-moment reassurance reduces abandonment', expectedLift: '+7% checkout completion' },
        ],
        reduce_bounce: [
            { zone: 'hero', score: 92, rationale: 'Social proof above the fold keeps visitors engaged immediately', expectedLift: '-14% bounce rate' },
            { zone: 'landing_section', score: 78, rationale: 'A dedicated proof section anchors scrolling behavior', expectedLift: '-10% bounce rate' },
            { zone: 'sidebar', score: 60, rationale: 'Persistent sidebar keeps proof visible during browsing', expectedLift: '-6% bounce rate' },
        ],
        boost_checkout: [
            { zone: 'checkout', score: 97, rationale: 'Proof at the point of payment is the highest-impact placement', expectedLift: '+22% checkout rate' },
            { zone: 'product_page', score: 85, rationale: 'Reviews before checkout reduce pre-purchase anxiety', expectedLift: '+15% add-to-cart' },
            { zone: 'sidebar', score: 55, rationale: 'Floating badge provides ambient reassurance', expectedLift: '+5% checkout rate' },
        ],
        grow_signups: [
            { zone: 'hero', score: 88, rationale: 'Social proof in the hero drives newsletter and account sign-ups', expectedLift: '+12% sign-up rate' },
            { zone: 'landing_section', score: 82, rationale: 'Testimonials near the CTA section convert fence-sitters', expectedLift: '+10% sign-up rate' },
            { zone: 'footer', score: 45, rationale: 'Footer proof captures last-chance conversions', expectedLift: '+3% sign-up rate' },
        ],
        improve_seo: [
            { zone: 'product_page', score: 90, rationale: 'UGC on product pages generates fresh, keyword-rich content', expectedLift: '+20% organic traffic' },
            { zone: 'landing_section', score: 75, rationale: 'Review-rich landing sections improve dwell time signals', expectedLift: '+12% organic traffic' },
            { zone: 'footer', score: 50, rationale: 'Footer reviews add crawlable content to every page', expectedLift: '+5% organic traffic' },
        ],
    },
    saas: {
        increase_trust: [
            { zone: 'hero', score: 94, rationale: 'G2/Capterra badges and customer logos in the hero establish authority', expectedLift: '+16% trial starts' },
            { zone: 'landing_section', score: 85, rationale: 'Case study quotes near pricing convert high-intent visitors', expectedLift: '+12% demo requests' },
            { zone: 'checkout', score: 70, rationale: 'Security badges and reviews at upgrade reduce churn risk', expectedLift: '+8% upgrade rate' },
        ],
        reduce_bounce: [
            { zone: 'hero', score: 90, rationale: 'Proof above the fold immediately validates the product claim', expectedLift: '-12% bounce rate' },
            { zone: 'sidebar', score: 75, rationale: 'Persistent social proof keeps visitors reading docs and features', expectedLift: '-8% bounce rate' },
            { zone: 'landing_section', score: 68, rationale: 'Testimonial sections create natural scroll anchors', expectedLift: '-7% bounce rate' },
        ],
        boost_checkout: [
            { zone: 'checkout', score: 93, rationale: 'Proof at the upgrade/payment step directly reduces churn', expectedLift: '+18% upgrade rate' },
            { zone: 'landing_section', score: 80, rationale: 'ROI testimonials near pricing tables convert hesitant buyers', expectedLift: '+14% paid conversions' },
            { zone: 'hero', score: 65, rationale: 'Top-of-funnel proof sets the stage for downstream conversion', expectedLift: '+8% trial-to-paid' },
        ],
        grow_signups: [
            { zone: 'hero', score: 96, rationale: 'Customer count and logos in the hero are the #1 SaaS trust signal', expectedLift: '+20% free trial sign-ups' },
            { zone: 'landing_section', score: 88, rationale: 'Testimonials near the sign-up CTA remove final objections', expectedLift: '+15% sign-up rate' },
            { zone: 'footer', score: 40, rationale: 'Footer proof captures late-stage visitors', expectedLift: '+3% sign-up rate' },
        ],
        improve_seo: [
            { zone: 'landing_section', score: 85, rationale: 'Review-rich feature pages rank for comparison keywords', expectedLift: '+18% organic traffic' },
            { zone: 'product_page', score: 78, rationale: 'Use-case pages with UGC attract long-tail search traffic', expectedLift: '+12% organic traffic' },
            { zone: 'footer', score: 48, rationale: 'Sitewide review snippets improve crawl signals', expectedLift: '+5% organic traffic' },
        ],
    },
    local_service: {
        increase_trust: [
            { zone: 'hero', score: 96, rationale: 'Star ratings and review count in the hero are critical for local trust', expectedLift: '+20% call/booking rate' },
            { zone: 'landing_section', score: 82, rationale: 'Photo reviews from real customers build neighborhood credibility', expectedLift: '+14% bookings' },
            { zone: 'footer', score: 60, rationale: 'Review badges in the footer reinforce trust on every page', expectedLift: '+6% contact rate' },
        ],
        reduce_bounce: [
            { zone: 'hero', score: 91, rationale: 'Local reviews immediately validate the business to new visitors', expectedLift: '-15% bounce rate' },
            { zone: 'landing_section', score: 74, rationale: 'Photo testimonials create emotional connection and engagement', expectedLift: '-9% bounce rate' },
            { zone: 'sidebar', score: 58, rationale: 'Floating review badge keeps proof visible while browsing services', expectedLift: '-5% bounce rate' },
        ],
        boost_checkout: [
            { zone: 'checkout', score: 88, rationale: 'Reviews at the booking/payment step reduce last-minute cancellations', expectedLift: '+16% booking completion' },
            { zone: 'product_page', score: 80, rationale: 'Service-specific reviews near the "Book Now" button drive action', expectedLift: '+12% bookings' },
            { zone: 'hero', score: 70, rationale: 'Strong hero proof sets conversion intent early', expectedLift: '+9% booking rate' },
        ],
        grow_signups: [
            { zone: 'hero', score: 85, rationale: 'Review count and ratings drive newsletter and loyalty sign-ups', expectedLift: '+11% sign-up rate' },
            { zone: 'landing_section', score: 78, rationale: 'Customer stories near the sign-up form increase opt-ins', expectedLift: '+9% sign-up rate' },
            { zone: 'footer', score: 50, rationale: 'Footer proof captures visitors who scrolled to the bottom', expectedLift: '+4% sign-up rate' },
        ],
        improve_seo: [
            { zone: 'landing_section', score: 88, rationale: 'Local review content ranks for "[service] near me" searches', expectedLift: '+22% local organic traffic' },
            { zone: 'product_page', score: 76, rationale: 'Service pages with reviews rank for specific service keywords', expectedLift: '+14% organic traffic' },
            { zone: 'footer', score: 55, rationale: 'Sitewide review schema improves local SEO signals', expectedLift: '+7% organic traffic' },
        ],
    },
    marketplace: {
        increase_trust: [
            { zone: 'product_page', score: 97, rationale: 'Seller and product reviews are the core trust mechanism for marketplaces', expectedLift: '+25% purchase rate' },
            { zone: 'hero', score: 78, rationale: 'Platform-level trust signals (total reviews, verified buyers) build confidence', expectedLift: '+10% new user registration' },
            { zone: 'checkout', score: 85, rationale: 'Seller ratings at checkout prevent last-minute abandonment', expectedLift: '+14% checkout completion' },
        ],
        reduce_bounce: [
            { zone: 'hero', score: 88, rationale: 'Platform credibility metrics keep new visitors from leaving immediately', expectedLift: '-13% bounce rate' },
            { zone: 'product_page', score: 82, rationale: 'Rich review content keeps shoppers engaged on listing pages', expectedLift: '-11% bounce rate' },
            { zone: 'sidebar', score: 65, rationale: 'Persistent trust signals during browsing reduce exit intent', expectedLift: '-7% bounce rate' },
        ],
        boost_checkout: [
            { zone: 'checkout', score: 95, rationale: 'Seller trust scores at payment are the highest-impact placement', expectedLift: '+20% checkout rate' },
            { zone: 'product_page', score: 90, rationale: 'Verified purchase reviews near the buy button drive conversions', expectedLift: '+18% add-to-cart' },
            { zone: 'sidebar', score: 60, rationale: 'Floating trust badge provides ambient reassurance', expectedLift: '+6% checkout rate' },
        ],
        grow_signups: [
            { zone: 'hero', score: 90, rationale: 'Buyer/seller count and success stories drive platform sign-ups', expectedLift: '+16% registration rate' },
            { zone: 'landing_section', score: 82, rationale: 'Success testimonials near the registration CTA convert visitors', expectedLift: '+12% sign-up rate' },
            { zone: 'footer', score: 42, rationale: 'Footer proof captures late-stage visitors', expectedLift: '+3% sign-up rate' },
        ],
        improve_seo: [
            { zone: 'product_page', score: 95, rationale: 'Product reviews generate massive long-tail keyword coverage', expectedLift: '+30% organic traffic' },
            { zone: 'landing_section', score: 72, rationale: 'Category-level review summaries rank for broad search terms', expectedLift: '+10% organic traffic' },
            { zone: 'footer', score: 45, rationale: 'Sitewide review schema improves crawl efficiency', expectedLift: '+4% organic traffic' },
        ],
    },
    agency: {
        increase_trust: [
            { zone: 'hero', score: 93, rationale: 'Client logos and case study quotes in the hero establish authority instantly', expectedLift: '+17% inquiry rate' },
            { zone: 'landing_section', score: 88, rationale: 'Detailed case studies near the contact form convert high-value leads', expectedLift: '+14% qualified leads' },
            { zone: 'footer', score: 55, rationale: 'Award badges and client count in the footer reinforce credibility', expectedLift: '+5% contact rate' },
        ],
        reduce_bounce: [
            { zone: 'hero', score: 89, rationale: 'Proof of results above the fold keeps prospects engaged', expectedLift: '-12% bounce rate' },
            { zone: 'landing_section', score: 80, rationale: 'Case study sections create natural scroll depth', expectedLift: '-10% bounce rate' },
            { zone: 'sidebar', score: 62, rationale: 'Persistent testimonial widget keeps proof visible during browsing', expectedLift: '-6% bounce rate' },
        ],
        boost_checkout: [
            { zone: 'checkout', score: 85, rationale: 'Client testimonials at the proposal/contract stage reduce hesitation', expectedLift: '+15% proposal acceptance' },
            { zone: 'landing_section', score: 88, rationale: 'ROI case studies near the pricing section convert high-intent visitors', expectedLift: '+16% qualified inquiries' },
            { zone: 'hero', score: 72, rationale: 'Strong hero proof sets conversion intent for the entire visit', expectedLift: '+10% inquiry rate' },
        ],
        grow_signups: [
            { zone: 'hero', score: 87, rationale: 'Client success metrics in the hero drive newsletter and webinar sign-ups', expectedLift: '+13% sign-up rate' },
            { zone: 'landing_section', score: 84, rationale: 'Testimonials near the lead magnet CTA increase opt-ins', expectedLift: '+12% sign-up rate' },
            { zone: 'footer', score: 48, rationale: 'Footer proof captures visitors who scrolled to the bottom', expectedLift: '+4% sign-up rate' },
        ],
        improve_seo: [
            { zone: 'landing_section', score: 86, rationale: 'Case study content ranks for "[service] agency" keywords', expectedLift: '+18% organic traffic' },
            { zone: 'product_page', score: 74, rationale: 'Service pages with client reviews rank for specific service searches', expectedLift: '+11% organic traffic' },
            { zone: 'footer', score: 50, rationale: 'Sitewide review schema improves domain authority signals', expectedLift: '+5% organic traffic' },
        ],
    },
}