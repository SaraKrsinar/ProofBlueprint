import type {
    AIEnhancementResult,
    BusinessType,
    ConversionGoal,
} from '@/types'

type ContentMatrix = Record<BusinessType, Record<ConversionGoal, AIEnhancementResult>>

export const AI_CONTENT_MATRIX: ContentMatrix = {
    ecommerce: {
        increase_trust: {
            enhancedHeadline: 'Over 12,000 verified buyers can\'t be wrong',
            abVariantHeadline: 'Real reviews. Real results. Zero filters.',
            refinedMessaging: 'Every review on this page comes from a confirmed purchase. We show you the good and the bad - because transparency is what earns trust.',
            conversionRationale: 'First-time visitors to e-commerce stores experience what psychologists call "purchase anxiety" - the fear of making a wrong decision. Displaying a high volume of authentic, verified reviews directly addresses this by providing social validation. The key is specificity: showing exact review counts and verified buyer labels increases perceived credibility by up to 63% compared to generic star ratings alone.',
        },
        reduce_bounce: {
            enhancedHeadline: 'See why 10,000+ shoppers stayed - and came back',
            abVariantHeadline: 'Don\'t just browse. Discover what others found.',
            refinedMessaging: 'The best way to explore a store is through the eyes of someone who\'s already been there. Real photos, real opinions, real experiences - right here.',
            conversionRationale: 'Bounce rate on e-commerce sites is heavily influenced by the "trust gap" - the moment a visitor questions whether the store is legitimate. UGC photo carousels above the fold reduce this gap by providing immediate visual proof of real customers. Studies show that pages with customer photos see 45% longer average session durations.',
        },
        boost_checkout: {
            enhancedHeadline: 'Join 2,400+ buyers who completed this purchase today',
            abVariantHeadline: '4.9/5 - Your order is in safe hands',
            refinedMessaging: 'You\'re one step away. Thousands of customers have completed this exact purchase and loved it. Your satisfaction is guaranteed.',
            conversionRationale: 'Cart abandonment peaks at the payment step due to last-minute doubt. A compact floating badge showing star rating and recent buyer count activates the "bandwagon effect" - the cognitive bias where people follow the actions of others. Placing this at checkout, where anxiety is highest, can reduce abandonment by 15–22% without disrupting the purchase flow.',
        },
        grow_signups: {
            enhancedHeadline: 'Smart shoppers sign up. Here\'s why.',
            abVariantHeadline: '50,000 members already saving more. Your turn.',
            refinedMessaging: 'Members get early access, exclusive deals, and a personalized experience. See what they\'re saying - then decide for yourself.',
            conversionRationale: 'Sign-up conversion is driven by perceived value and social proof of that value. Testimonials from existing members near the registration CTA create a "fear of missing out" effect. The most effective approach combines a specific member count with a short, outcome-focused testimonial that speaks directly to the visitor\'s motivation.',
        },
        improve_seo: {
            enhancedHeadline: 'What customers are saying about [Product Name]',
            abVariantHeadline: 'Verified reviews for [Product Name] - updated daily',
            refinedMessaging: 'Authentic, keyword-rich reviews from real buyers. Updated continuously to keep your product pages fresh and search-engine relevant.',
            conversionRationale: 'Search engines reward pages with fresh, unique content. Customer reviews naturally contain long-tail keywords that match real search queries. A masonry layout maximizes the density of crawlable review content, while structured data markup (available via EmbedSocial) enables rich snippets - star ratings in search results - which increase click-through rates by an average of 28%.',
        },
    },
    saas: {
        increase_trust: {
            enhancedHeadline: 'The tool 5,000+ teams switched to - and never looked back',
            abVariantHeadline: 'Rated #1 by teams who tried the alternatives',
            refinedMessaging: 'We don\'t ask you to take our word for it. Read what real teams - from startups to enterprises - say about the results they\'ve achieved.',
            conversionRationale: 'B2B SaaS buyers are risk-averse and research-driven. They need authority signals - not just social proof. Named testimonials with job titles, company logos, and specific outcome metrics (e.g., "reduced onboarding time by 40%") activate authority bias and reduce perceived switching risk. Placing these in the hero section captures high-intent visitors before they leave to research competitors.',
        },
        reduce_bounce: {
            enhancedHeadline: 'Still deciding? Let our customers decide for you.',
            abVariantHeadline: 'Real teams. Real results. No marketing speak.',
            refinedMessaging: 'We\'ve collected honest feedback from teams across every industry. The good, the great, and the "we wish we\'d switched sooner."',
            conversionRationale: 'SaaS landing page bounce is often caused by feature overload - visitors feel overwhelmed and leave before understanding the core value. A rotating testimonial carousel that highlights specific use cases keeps visitors engaged by showing them relevant social proof. The key is matching testimonial content to the visitor\'s likely role or industry.',
        },
        boost_checkout: {
            enhancedHeadline: 'Teams that upgraded never went back to the free plan',
            abVariantHeadline: 'One upgrade. Measurable results in week one.',
            refinedMessaging: 'See what teams unlocked when they upgraded. Real outcomes, real timelines, real ROI - from customers who made the same decision you\'re considering.',
            conversionRationale: 'SaaS upgrade conversion is blocked by ROI uncertainty. Customers need to believe the paid plan will deliver measurable value before committing. Testimonials that include specific metrics (time saved, revenue generated, churn reduced) at the upgrade step directly address this uncertainty. Third-party review badges (G2, Capterra) add independent validation that internal testimonials cannot provide.',
        },
        grow_signups: {
            enhancedHeadline: '10,000 teams started their free trial this month',
            abVariantHeadline: 'Free to start. Proven to deliver. No credit card.',
            refinedMessaging: 'Join the teams already using [Product] to move faster, collaborate better, and deliver more. Your first 14 days are on us.',
            conversionRationale: 'Free trial sign-up conversion is driven by two factors: perceived value and perceived risk. Social proof addresses both. A high user count ("10,000 teams") reduces perceived risk by normalizing the decision. A short, outcome-focused testimonial near the sign-up CTA reinforces perceived value. Together, these can increase trial sign-up rates by 15–25%.',
        },
        improve_seo: {
            enhancedHeadline: 'Customer reviews for [Product Name] - honest feedback',
            abVariantHeadline: '[Product Name] reviews: what real users say in 2025',
            refinedMessaging: 'Unfiltered feedback from teams across every industry. Updated continuously as new customers share their experiences.',
            conversionRationale: 'SaaS review pages rank for high-intent comparison keywords like "[Product] vs [Competitor]" and "[Product] reviews." A grid of detailed customer reviews with job titles and company names generates the keyword diversity needed to rank for these terms. EmbedSocial\'s structured data support enables review rich snippets, which can increase organic CTR by 20–35% for competitive SaaS keywords.',
        },
    },
    local_service: {
        increase_trust: {
            enhancedHeadline: 'Your neighbors have been coming here for years',
            abVariantHeadline: '500+ five-star reviews from people in your area',
            refinedMessaging: 'We\'ve served this community for years. The reviews you\'re reading are from real customers who live, work, and shop near you.',
            conversionRationale: 'Local service trust is fundamentally different from e-commerce trust - it\'s community-based. Visitors want to know that people like them, in their area, have had positive experiences. Photo reviews from local customers activate "in-group" social proof, which is significantly more persuasive than generic star ratings. Showing reviewer names and neighborhoods (where permitted) amplifies this effect.',
        },
        reduce_bounce: {
            enhancedHeadline: 'See what your neighbors are saying about us',
            abVariantHeadline: 'Real photos. Real customers. Real experiences.',
            refinedMessaging: 'Browse photos and stories from customers who\'ve visited us. No stock photos, no marketing copy - just honest experiences from real people.',
            conversionRationale: 'Local service websites often lose visitors within 10 seconds because they fail to establish local relevance quickly. A photo carousel of real customer experiences above the fold immediately signals authenticity and community connection. This is especially effective for services where the physical environment matters (restaurants, salons, clinics).',
        },
        boost_checkout: {
            enhancedHeadline: '800+ customers booked with confidence. You can too.',
            abVariantHeadline: '4.8/5 - Trusted by your community',
            refinedMessaging: 'Every booking is backed by our commitment to quality. See what hundreds of satisfied customers say - then book with complete confidence.',
            conversionRationale: 'Local service booking abandonment is driven by uncertainty about quality and reliability. A compact review badge near the booking button provides the final reassurance needed to complete the action. The most effective format combines a star rating, review count, and a single short testimonial that speaks to the specific service being booked.',
        },
        grow_signups: {
            enhancedHeadline: 'Join our community of loyal customers',
            abVariantHeadline: 'Members get more. See what they\'re saying.',
            refinedMessaging: 'Our loyalty members enjoy exclusive offers, priority booking, and early access to new services. Here\'s what they love about being part of our community.',
            conversionRationale: 'Local service loyalty program sign-ups are driven by community belonging and perceived exclusivity. Testimonials from existing members that highlight specific benefits (priority booking, exclusive discounts) create a "fear of missing out" that motivates sign-ups. The key is making the community feel real and accessible, not corporate.',
        },
        improve_seo: {
            enhancedHeadline: 'Customer reviews for [Business Name] in [City]',
            abVariantHeadline: 'What customers say about [Business Name] - verified reviews',
            refinedMessaging: 'Honest reviews from real customers in [City]. Updated regularly as new customers share their experiences with our community.',
            conversionRationale: 'Local SEO is dominated by review signals. Google\'s local ranking algorithm heavily weights review quantity, recency, and keyword content. A masonry layout of local reviews generates the neighborhood and service-specific keyword content needed to rank for "[service] near me" searches. EmbedSocial\'s Google review integration ensures your best reviews are always visible and crawlable.',
        },
    },
    marketplace: {
        increase_trust: {
            enhancedHeadline: 'Every review is from a real purchase. No exceptions.',
            abVariantHeadline: 'Millions of verified buyers. One trusted platform.',
            refinedMessaging: 'We verify every review against a confirmed transaction. What you read is what real buyers experienced - nothing more, nothing less.',
            conversionRationale: 'Marketplace trust is built on review authenticity. Buyers are acutely aware of fake reviews and will abandon a platform they suspect of manipulation. Prominently displaying your review verification process ("verified purchase" labels, anti-fraud messaging) activates "system trust" - confidence in the platform\'s integrity - which is the foundation of all marketplace conversion.',
        },
        reduce_bounce: {
            enhancedHeadline: 'Real buyers. Real photos. Real decisions.',
            abVariantHeadline: 'See what buyers found when they opened the box',
            refinedMessaging: 'Browse photos and reviews from buyers who purchased this exact item. Unfiltered, unedited, and verified against real transactions.',
            conversionRationale: 'Marketplace product page bounce is driven by information uncertainty - buyers leave to research the product elsewhere. Rich UGC content (photos, detailed reviews) keeps them on the page by providing the information they\'re seeking. Photo reviews are particularly effective because they show the product in real-world contexts that product photography cannot capture.',
        },
        boost_checkout: {
            enhancedHeadline: 'Verified seller · 4.9 stars · 1,200 completed orders',
            abVariantHeadline: '✓ Trusted seller with buyer protection on every order',
            refinedMessaging: 'This seller has completed over 1,200 orders with a 4.9-star rating. Every purchase is covered by our buyer protection guarantee.',
            conversionRationale: 'Marketplace checkout abandonment is uniquely driven by seller trust, not just product trust. Buyers need confidence in the specific seller before completing a transaction. A seller trust score badge at checkout - combining star rating, order count, and response rate - directly addresses this. Buyer protection messaging activates loss aversion: the fear of losing money is reduced when a guarantee is visible.',
        },
        grow_signups: {
            enhancedHeadline: '2 million buyers and sellers. Join the community.',
            abVariantHeadline: 'Free to join. Trusted by millions. Start today.',
            refinedMessaging: 'Our platform connects millions of buyers and sellers every day. See the success stories - then create your free account and become part of it.',
            conversionRationale: 'Marketplace registration conversion is driven by network effect perception - the belief that the platform is large enough to be worth joining. A high user count combined with success testimonials from both buyers and sellers creates a compelling case for registration. The key is showing both sides of the marketplace to appeal to visitors with different intentions.',
        },
        improve_seo: {
            enhancedHeadline: 'Customer reviews for [Product Name] on [Platform]',
            abVariantHeadline: '[Product Name] reviews - verified buyer feedback',
            refinedMessaging: 'Authentic reviews from verified buyers. Updated in real time as new purchases are completed and reviewed.',
            conversionRationale: 'Marketplace SEO is driven by the sheer volume of review content across product pages. Each review is a unique piece of content that can rank for long-tail product queries. A masonry layout maximizes the density of crawlable review content, while structured data markup enables rich snippets that increase organic CTR. EmbedSocial\'s real-time sync ensures review content is always fresh.',
        },
    },
    agency: {
        increase_trust: {
            enhancedHeadline: 'Our clients don\'t just say we\'re good. They prove it.',
            abVariantHeadline: 'Results our clients talk about at their next board meeting',
            refinedMessaging: 'We let our work speak for itself - through the words of the clients who commissioned it. Real outcomes, real timelines, real ROI.',
            conversionRationale: 'Agency trust is built on demonstrated expertise and proven results, not promises. Named client testimonials with specific outcome metrics (revenue generated, traffic increased, conversion rate improved) activate authority bias - the tendency to trust those who have demonstrated competence. Client logos from recognizable brands amplify this effect by transferring their credibility to your agency.',
        },
        reduce_bounce: {
            enhancedHeadline: 'Don\'t take our word for it. Read the case studies.',
            abVariantHeadline: 'Real campaigns. Real results. No vanity metrics.',
            refinedMessaging: 'We document every campaign with honest metrics. Browse our case studies and see exactly what we delivered - and how we delivered it.',
            conversionRationale: 'Agency website bounce is often caused by vague value propositions - prospects leave because they can\'t quickly understand what makes the agency different. A rotating case study carousel that highlights specific results keeps prospects engaged by showing them concrete evidence of capability. The key is leading with outcomes, not process.',
        },
        boost_checkout: {
            enhancedHeadline: 'Clients who trusted us saw an average 3× ROI',
            abVariantHeadline: 'One proposal. Measurable results. Guaranteed.',
            refinedMessaging: 'Before you sign anything, read what our clients say about the process, the results, and the relationship. Then decide if we\'re the right fit.',
            conversionRationale: 'Agency proposal acceptance is blocked by ROI uncertainty and relationship risk. Testimonials that address both - specific ROI metrics AND comments about the working relationship - are significantly more persuasive than outcome-only testimonials. Placing these near the contact form or proposal CTA reduces the perceived risk of engagement.',
        },
        grow_signups: {
            enhancedHeadline: '200+ brands growing with our weekly insights',
            abVariantHeadline: 'The newsletter that 200 marketing teams read every Friday',
            refinedMessaging: 'Every week, we share what\'s actually working in digital marketing - no fluff, no recycled advice. Join 200+ brands already using our insights to grow.',
            conversionRationale: 'Agency newsletter sign-up conversion is driven by perceived content quality and community belonging. Testimonials from existing subscribers that highlight specific insights they\'ve applied create a "proof of value" that motivates sign-ups. The key is specificity: "I implemented their email strategy and increased open rates by 34%" is far more persuasive than "great newsletter."',
        },
        improve_seo: {
            enhancedHeadline: 'Client reviews for [Agency Name] - honest feedback',
            abVariantHeadline: 'What clients say about working with [Agency Name]',
            refinedMessaging: 'Unfiltered feedback from brands we\'ve partnered with. Updated as new projects are completed and clients share their experiences.',
            conversionRationale: 'Agency SEO is driven by review content on service-specific pages. Detailed client reviews that mention specific services, industries, and outcomes generate the keyword diversity needed to rank for "[service] agency [city]" searches. EmbedSocial\'s Google review integration ensures your best client feedback is always visible and crawlable by search engines.',
        },
    },
}

export const FALLBACK_ENHANCEMENT: AIEnhancementResult = {
    enhancedHeadline: 'Real customers. Real results. Real trust.',
    abVariantHeadline: 'See what others are saying - then decide.',
    refinedMessaging: 'Social proof works because people trust people. Show your visitors the authentic experiences of real customers and watch your conversion rate respond.',
    conversionRationale: 'Social proof is one of the most powerful conversion levers available to any business. When visitors see that others like them have made a purchase, signed up, or engaged with a service, it reduces perceived risk and activates the bandwagon effect. The key is authenticity, specificity, and placement - showing the right proof, in the right format, at the right moment in the customer journey.',
}