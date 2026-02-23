import type {
    BusinessType,
    ConversionGoal,
    MessagingRecommendation,
} from '@/types'

type MessagingMatrix = Record<
    BusinessType,
    Record<ConversionGoal, MessagingRecommendation>
>

export const MESSAGING_MATRIX: MessagingMatrix = {
    ecommerce: {
        increase_trust: {
            headline: 'Loved by thousands of happy customers',
            subtext: 'Real reviews from verified buyers - no filters, no fakes.',
            ctaLabel: 'Read all reviews',
            tone: 'trust',
        },
        reduce_bounce: {
            headline: 'See what others are saying',
            subtext: 'Join over 10,000 customers who made the switch.',
            ctaLabel: 'Explore reviews',
            tone: 'social',
        },
        boost_checkout: {
            headline: '4.9/5 from 2,400+ verified buyers',
            subtext: 'You\'re in good hands. Shop with confidence.',
            ctaLabel: 'Complete purchase',
            tone: 'trust',
        },
        grow_signups: {
            headline: 'Join 50,000+ smart shoppers',
            subtext: 'Get exclusive deals, early access, and member-only perks.',
            ctaLabel: 'Create free account',
            tone: 'social',
        },
        improve_seo: {
            headline: 'What our customers are saying',
            subtext: 'Authentic reviews from real purchases - updated daily.',
            ctaLabel: 'Browse all reviews',
            tone: 'authority',
        },
    },
    saas: {
        increase_trust: {
            headline: 'Trusted by 5,000+ teams worldwide',
            subtext: 'See why leading companies choose us over the competition.',
            ctaLabel: 'Read case studies',
            tone: 'authority',
        },
        reduce_bounce: {
            headline: 'Don\'t just take our word for it',
            subtext: 'Real results from real customers - no cherry-picking.',
            ctaLabel: 'See all reviews',
            tone: 'trust',
        },
        boost_checkout: {
            headline: 'Rated #1 on G2 for ease of use',
            subtext: 'Join thousands of teams already saving time every week.',
            ctaLabel: 'Start your trial',
            tone: 'authority',
        },
        grow_signups: {
            headline: 'Join 10,000+ teams growing faster',
            subtext: 'Free to start. No credit card required.',
            ctaLabel: 'Start free trial',
            tone: 'social',
        },
        improve_seo: {
            headline: 'Customer reviews & success stories',
            subtext: 'Honest feedback from teams across every industry.',
            ctaLabel: 'Read all reviews',
            tone: 'trust',
        },
    },
    local_service: {
        increase_trust: {
            headline: 'Your neighbors love us',
            subtext: 'Over 500 five-star reviews from customers in your area.',
            ctaLabel: 'Read local reviews',
            tone: 'social',
        },
        reduce_bounce: {
            headline: 'See why locals choose us',
            subtext: 'Real photos and stories from customers just like you.',
            ctaLabel: 'View all reviews',
            tone: 'social',
        },
        boost_checkout: {
            headline: '4.8/5 - Trusted by 800+ local customers',
            subtext: 'Book with confidence. We stand behind every service.',
            ctaLabel: 'Book now',
            tone: 'trust',
        },
        grow_signups: {
            headline: 'Join our loyal customer community',
            subtext: 'Get exclusive offers and be the first to know about new services.',
            ctaLabel: 'Sign up free',
            tone: 'social',
        },
        improve_seo: {
            headline: 'What our customers are saying',
            subtext: 'Verified reviews from real customers in your neighborhood.',
            ctaLabel: 'Read all reviews',
            tone: 'trust',
        },
    },
    marketplace: {
        increase_trust: {
            headline: 'Millions of verified reviews',
            subtext: 'Every review is from a confirmed purchase. No exceptions.',
            ctaLabel: 'See all reviews',
            tone: 'authority',
        },
        reduce_bounce: {
            headline: 'Real buyers. Real experiences.',
            subtext: 'Browse photos and reviews from customers who bought this.',
            ctaLabel: 'Read reviews',
            tone: 'trust',
        },
        boost_checkout: {
            headline: '✓ Verified seller · 4.9 stars · 1,200+ sales',
            subtext: 'Buyer protection guaranteed on every order.',
            ctaLabel: 'Complete purchase',
            tone: 'trust',
        },
        grow_signups: {
            headline: 'Join 2 million buyers and sellers',
            subtext: 'Free to join. Start buying or selling in minutes.',
            ctaLabel: 'Create free account',
            tone: 'social',
        },
        improve_seo: {
            headline: 'Customer reviews for this product',
            subtext: 'Authentic feedback from verified buyers - updated in real time.',
            ctaLabel: 'Read all reviews',
            tone: 'trust',
        },
    },
    agency: {
        increase_trust: {
            headline: 'Results our clients actually talk about',
            subtext: 'Don\'t take our word for it - hear directly from the brands we\'ve helped.',
            ctaLabel: 'Read case studies',
            tone: 'authority',
        },
        reduce_bounce: {
            headline: 'See the work. Hear the results.',
            subtext: 'Real outcomes from real campaigns - no vanity metrics.',
            ctaLabel: 'View our work',
            tone: 'trust',
        },
        boost_checkout: {
            headline: 'Clients who trusted us saw an average 3× ROI',
            subtext: 'Let\'s talk about what we can do for your business.',
            ctaLabel: 'Get a proposal',
            tone: 'authority',
        },
        grow_signups: {
            headline: 'Join 200+ brands growing with us',
            subtext: 'Get our weekly insights on what\'s actually working in digital marketing.',
            ctaLabel: 'Subscribe free',
            tone: 'social',
        },
        improve_seo: {
            headline: 'Client reviews & success stories',
            subtext: 'Honest feedback from brands we\'ve partnered with.',
            ctaLabel: 'Read all reviews',
            tone: 'trust',
        },
    },
}