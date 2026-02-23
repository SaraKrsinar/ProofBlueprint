import type { Component } from 'vue'
import {
    IconHero,
    IconLanding,
    IconProductPage,
    IconCheckout,
    IconFooter,
    IconSidebar,
} from '@/components/icons'

export const ZONE_LABELS: Record<string, string> = {
    hero: 'Hero Section',
    landing_section: 'Landing Section',
    product_page: 'Product Page',
    checkout: 'Checkout / Cart',
    footer: 'Footer',
    sidebar: 'Sidebar',
}

export const ZONE_ICONS: Record<string, Component> = {
    hero: IconHero,
    landing_section: IconLanding,
    product_page: IconProductPage,
    checkout: IconCheckout,
    footer: IconFooter,
    sidebar: IconSidebar,
}

export type PriorityKey =
    | 'primary'
    | 'secondary'
    | 'optional'

export const PRIORITY_BADGE: Record<
    PriorityKey,
    { label: string; variant: 'success' | 'info' | 'muted' }
> = {
    primary: { label: 'Primary', variant: 'success' },
    secondary: { label: 'Secondary', variant: 'info' },
    optional: { label: 'Optional', variant: 'muted' },
}