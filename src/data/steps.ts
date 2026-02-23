import type { WizardStep } from '@/types'

export const STEP_DEFINITIONS: Omit<WizardStep, 'isCompleted' | 'isActive'>[] = [
    {
        id: 1,
        key: 'business-profile',
        label: 'Business Profile',
        description: 'Tell us about your business type and scale',
    },
    {
        id: 2,
        key: 'goals',
        label: 'Conversion Goals',
        description: 'What do you want social proof to achieve?',
    },
    {
        id: 3,
        key: 'placements',
        label: 'Placement Strategy',
        description: 'Where to place your widgets for maximum impact',
    },
    {
        id: 4,
        key: 'results',
        label: 'Your Optimization Plan',
        description: 'Layout, messaging, and implementation guide',
    },
]
