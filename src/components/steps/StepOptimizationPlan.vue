<script setup lang="ts">
import { ref, computed } from 'vue'
import type { OptimizationResult, BusinessProfile, GoalSelection } from '@/types'
import { useAIEnhancement } from '@/composables/useAIEnhancement'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import {
  IconGrid,
  IconSparkle,
  IconIdea,
  IconClipboard,
  IconPlacement,
  IconMessage,
  IconAB,
  IconBook
} from '@/components/icons'
import {
  LAYOUT_LABELS,
  ZONE_LABELS,
  PROOF_TYPE_LABELS,
  getToneLabel,
  PSYCHOLOGICAL_TRIGGERS,
  LAYOUT_ICON_MAP,
} from '@/constants/optimizationLabels'

interface Props {
  result: OptimizationResult
  businessProfile: Readonly<BusinessProfile>
  goalSelection: Readonly<GoalSelection>
}

const props = defineProps<Props>()
defineEmits<{ back: []; restart: [] }>()

const { aiState, enhance } = useAIEnhancement()

function runAIEnhancement() {
  enhance(props.result, props.businessProfile.businessType, props.goalSelection.primaryGoal)
}

const isExplainOpen = ref(false)

function toggleExplain() {
  isExplainOpen.value = !isExplainOpen.value
}

const showEmbedPlan = ref(false)
const copySuccess = ref(false)

const topPlacement = computed(() => props.result.placements[0])

const CHECKLIST_ITEMS = [
  'Connect your review source (Google, Trustpilot, or social media) to EmbedSocial',
  `Create a ${LAYOUT_LABELS[props.result.layout.layout] ?? props.result.layout.layout} widget in the EmbedSocial widget builder`,
  `Place the widget in your ${topPlacement.value ? ZONE_LABELS[topPlacement.value.zone] ?? topPlacement.value.zone : 'primary'} - highest expected impact`,
  'Apply the recommended headline and CTA copy to your widget settings',
  'Measure conversion rate changes over 2-4 weeks, then expand to secondary placements',
]

function generateEmbedPlan() {
  showEmbedPlan.value = true
}

function buildPlanText(): string {
  const headline =
    aiState.value.result?.enhancedHeadline ??
    props.result.messaging.headline

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const placementLabel = topPlacement.value
    ? ZONE_LABELS[topPlacement.value.zone] ?? topPlacement.value.zone
    : '-'

  const layoutLabel =
    LAYOUT_LABELS[props.result.layout.layout] ??
    props.result.layout.layout

  const lines = [
    '---------------------------------------',
    '  SOCIAL PROOF EMBED PLAN',
    `  Generated: ${today}`,
    '---------------------------------------',
    '',

    'RECOMMENDED PLACEMENT',
    `  ${placementLabel}`,
    `  Expected lift: ${topPlacement.value?.expectedLift ?? '-'}`,
    '',

    'RECOMMENDED LAYOUT',
    `  ${layoutLabel}`,
    `  Content types: ${props.result.layout.socialProofTypes
      .map(t => PROOF_TYPE_LABELS[t] ?? t)
      .join(', ')}`,
    '',

    'FINAL HEADLINE',
    `  "${headline}"`,
    '',

    'IMPLEMENTATION CHECKLIST',
    ...CHECKLIST_ITEMS.map((item, i) => `  ${i + 1}. ${item}`),
    '',

    'AI-ENHANCED MESSAGING',
    `  Headline: "${aiState.value.result?.enhancedHeadline ?? props.result.messaging.headline}"`,
    `  A/B Variant: "${aiState.value.result?.abVariantHeadline ?? '-'}"`,
    `  Supporting text: "${props.result.messaging.subtext}"`,
    `  CTA: "${props.result.messaging.ctaLabel}"`,
    '',

    '---------------------------------------',
    '  Powered by EmbedSocial',
    '  https://embedsocial.com',
    '---------------------------------------',
  ]

  return lines.join('\n')
}

async function copyPlan() {
  try {
    await navigator.clipboard.writeText(buildPlanText())
    copySuccess.value = true
    setTimeout(() => { copySuccess.value = false }, 2500)
  } catch {
    const ta = document.createElement('textarea')
    ta.value = buildPlanText()
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
    copySuccess.value = true
    setTimeout(() => { copySuccess.value = false }, 2500)
  }
}
</script>

<template>
  <div class="step-optimization-plan">
    <div class="step-header">
      <div class="step-header__badge">
        <BaseBadge variant="success" :dot="true">Plan Ready</BaseBadge>
      </div>
      <h1 class="step-header__title">Your Optimization Plan</h1>
      <p class="step-header__subtitle">
        Here's your complete social proof strategy - layout, content types, and messaging tailored to your goals.
      </p>
    </div>

    <section class="step-section">
      <h2 class="step-section__label">Recommended Widget Layout</h2>
      <BaseCard padding="lg" class="layout-card">
        <div class="layout-card__header">
          <span class="layout-card__icon">
            <component :is="LAYOUT_ICON_MAP[result.layout.layout]" />
          </span>
          <div class="layout-card__title-group">
            <h3 class="layout-card__title">
              {{ LAYOUT_LABELS[result.layout.layout] ?? result.layout.layout }}
            </h3>
            <p class="layout-card__rationale">{{ result.layout.rationale }}</p>
          </div>
        </div>
        <div class="layout-card__details">
          <div class="layout-card__detail-block">
            <h4 class="layout-card__detail-label">Content Types to Include</h4>
            <div class="tag-list">
              <span v-for="type in result.layout.socialProofTypes" :key="type" class="tag">
                {{ PROOF_TYPE_LABELS[type] ?? type }}
              </span>
            </div>
          </div>
          <div class="layout-card__detail-block">
            <h4 class="layout-card__detail-label">Best For</h4>
            <div class="tag-list">
              <span v-for="use in result.layout.bestFor" :key="use" class="tag tag--muted">
                {{ use }}
              </span>
            </div>
          </div>
        </div>
      </BaseCard>
    </section>

    <section class="step-section">
      <h2 class="step-section__label">Recommended Messaging</h2>
      <BaseCard padding="lg" class="messaging-card">
        <div class="messaging-card__tone">
          <span class="messaging-card__tone-icon">
            <component :is="getToneLabel(result.messaging.tone).icon" />
          </span>
          <BaseBadge variant="info">
            {{ getToneLabel(result.messaging.tone).label }} tone
          </BaseBadge>
        </div>
        <div class="messaging-preview">
          <div class="messaging-preview__widget">
            <div class="messaging-preview__headline">{{ result.messaging.headline }}</div>
            <div class="messaging-preview__subtext">{{ result.messaging.subtext }}</div>
            <button class="messaging-preview__cta" type="button">{{ result.messaging.ctaLabel }}</button>
          </div>
        </div>
        <div class="messaging-card__fields">
          <div class="messaging-field">
            <span class="messaging-field__label">Headline</span>
            <span class="messaging-field__value">{{ result.messaging.headline }}</span>
          </div>
          <div class="messaging-field">
            <span class="messaging-field__label">Supporting text</span>
            <span class="messaging-field__value">{{ result.messaging.subtext }}</span>
          </div>
          <div class="messaging-field">
            <span class="messaging-field__label">CTA label</span>
            <span class="messaging-field__value">{{ result.messaging.ctaLabel }}</span>
          </div>
        </div>
      </BaseCard>
    </section>

    <section class="step-section">
      <div class="ai-section__header">
        <div class="ai-section__title-row">
          <h2 class="step-section__label">AI-Enhanced Messaging</h2>
          <BaseBadge variant="info">Beta</BaseBadge>
        </div>
        <p class="ai-section__subtitle">
          Generate alternative headlines and a conversion rationale tailored to your specific business context.
        </p>
      </div>

      <BaseCard v-if="!aiState.hasRun && !aiState.isLoading" padding="md" class="ai-trigger-card">
        <div class="ai-trigger-card__inner">
          <div class="ai-trigger-card__icon">
            <IconSparkle />
          </div>
          <div class="ai-trigger-card__text">
            <strong>Enhance with AI</strong>
            <p>Generate a refined headline, A/B variant, and conversion rationale based on your goals.</p>
          </div>
          <BaseButton variant="primary" size="md" @click="runAIEnhancement">
            <IconSparkle />
            Enhance
          </BaseButton>
        </div>
      </BaseCard>

      <BaseCard v-else-if="aiState.isLoading" padding="md" class="ai-loading-card">
        <div class="ai-loading-card__inner">
          <div class="ai-loading-card__spinner" aria-hidden="true" />
          <div class="ai-loading-card__text">
            <strong>Analyzing your strategy…</strong>
            <p>Generating personalized messaging recommendations</p>
          </div>
        </div>
        <div class="ai-loading-card__bars">
          <div class="ai-loading-bar" style="width: 85%; animation-delay: 0s" />
          <div class="ai-loading-bar" style="width: 65%; animation-delay: 0.15s" />
          <div class="ai-loading-bar" style="width: 75%; animation-delay: 0.3s" />
        </div>
      </BaseCard>

      <BaseCard v-else-if="aiState.result" padding="lg" class="ai-result-card">
        <div class="ai-result-card__header">
          <span class="ai-result-card__sparkle">
            <IconSparkle />
          </span>
          <h3 class="ai-result-card__title">AI Enhancement Complete</h3>
        </div>

        <div class="ai-result-grid">
          <div class="ai-result-item">
            <span class="ai-result-item__label">Enhanced Headline</span>
            <span class="ai-result-item__value ai-result-item__value--headline">
              "{{ aiState.result.enhancedHeadline }}"
            </span>
          </div>
          <div class="ai-result-item">
            <span class="ai-result-item__label">A/B Variant</span>
            <span class="ai-result-item__value ai-result-item__value--variant">
              "{{ aiState.result.abVariantHeadline }}"
            </span>
          </div>
          <div class="ai-result-item ai-result-item--full">
            <span class="ai-result-item__label">Refined Messaging</span>
            <span class="ai-result-item__value">{{ aiState.result.refinedMessaging }}</span>
          </div>
        </div>
      </BaseCard>
    </section>

    <section class="step-section">
      <button type="button" class="explain-toggle" :aria-expanded="isExplainOpen" @click="toggleExplain">
        <span class="explain-toggle__icon">
          <IconIdea />
        </span> <span class="explain-toggle__label">Why This Recommendation Works</span>
        <svg class="explain-toggle__chevron" :class="{ 'explain-toggle__chevron--open': isExplainOpen }"
          viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd" />
        </svg>
      </button>

      <Transition name="explain">
        <div v-if="isExplainOpen" class="explain-panel">
          <div class="explain-block">
            <h3 class="explain-block__title">Placement Reasoning</h3>
            <p class="explain-block__text">
              {{ result.placements[0]?.rationale ?? 'No placement data available.' }}
              <span v-if="result.placements[0]">
                This placement has a <strong>{{ result.placements[0].score }}% confidence score</strong>
                based on your business type and primary goal, with an expected lift of
                <strong>{{ result.placements[0].expectedLift }}</strong>.
              </span>
            </p>
          </div>

          <div class="explain-block">
            <h3 class="explain-block__title">
              Psychological Trigger:
              {{ PSYCHOLOGICAL_TRIGGERS[result.messaging.tone]?.title ?? result.messaging.tone }}
            </h3>
            <p class="explain-block__text">
              {{ PSYCHOLOGICAL_TRIGGERS[result.messaging.tone]?.description ?? '' }}
            </p>
          </div>

          <div class="explain-block">
            <h3 class="explain-block__title">Confidence Score Explained</h3>
            <p class="explain-block__text">
              The <strong>{{ result.overallScore }}/100 optimization score</strong> reflects how well your
              selected placement, layout, and messaging align with proven patterns for
              <em>{{ businessProfile.businessType?.replace('_', ' ') ?? 'your business type' }}</em>
              businesses targeting
              <em>{{ goalSelection.primaryGoal?.replace('_', ' ') ?? 'your primary goal' }}</em>.
              Scores above 85 indicate a high-confidence strategy with strong historical lift data.
            </p>
          </div>

          <div v-if="aiState.result" class="explain-block explain-block--ai">
            <h3 class="explain-block__title">
              <span aria-hidden="true">
                <IconSparkle />
              </span> AI Conversion Rationale
            </h3>
            <p class="explain-block__text">{{ aiState.result.conversionRationale }}</p>
          </div>
        </div>
      </Transition>
    </section>

    <section class="step-section">
      <h2 class="step-section__label">Implementation Checklist</h2>
      <BaseCard padding="md" class="checklist-card">
        <ol class="checklist">
          <li v-for="(item, index) in CHECKLIST_ITEMS" :key="index" class="checklist__item">
            <span class="checklist__number">{{ index + 1 }}</span>
            <div class="checklist__content">
              <p>{{ item }}</p>
            </div>
          </li>
        </ol>
      </BaseCard>
    </section>

    <section class="step-section">
      <div class="embed-plan-header">
        <h2 class="step-section__label">Export Your Plan</h2>
        <BaseButton v-if="!showEmbedPlan" variant="secondary" size="md" @click="generateEmbedPlan">
          <IconClipboard />
          Generate Embed Plan
        </BaseButton>
      </div>

      <Transition name="embed-plan">
        <BaseCard v-if="showEmbedPlan" padding="lg" class="embed-plan-card">
          <div class="embed-plan-card__header">
            <h3 class="embed-plan-card__title">Your Embed Plan</h3>
            <BaseButton variant="secondary" size="sm" :loading="false" @click="copyPlan">
              <template v-if="copySuccess">
                ✓ Copied!
              </template>
              <template v-else>
                <IconClipboard /> Copy Plan
              </template>
            </BaseButton>
          </div>

          <div class="embed-plan-body">
            <div class="embed-plan-row">
              <span class="embed-plan-row__label">
                <IconPlacement />
                Placement
              </span> <span class="embed-plan-row__value">
                {{ topPlacement ? (ZONE_LABELS[topPlacement.zone] ?? topPlacement.zone) : '-' }}
                <span v-if="topPlacement" class="embed-plan-row__lift">{{ topPlacement.expectedLift }}</span>
              </span>
            </div>
            <div class="embed-plan-row">
              <span class="embed-plan-row__label">
                <IconGrid />
                Layout
              </span> <span class="embed-plan-row__value">
                {{ LAYOUT_LABELS[result.layout.layout] ?? result.layout.layout }}
              </span>
            </div>
            <div class="embed-plan-row">
              <span class="embed-plan-row__label">
                <IconMessage />
                Headline
              </span>
              <span class="embed-plan-row__value embed-plan-row__value--quote">
                "{{ aiState.result?.enhancedHeadline ?? result.messaging.headline }}"
                <BaseBadge v-if="aiState.result" variant="info" class="embed-plan-row__ai-badge">AI</BaseBadge>
              </span>
            </div>
            <div v-if="aiState.result" class="embed-plan-row">
              <span class="embed-plan-row__label">
                <IconAB />
                A/B Variant
              </span>
              <span class="embed-plan-row__value embed-plan-row__value--quote">
                "{{ aiState.result.abVariantHeadline }}"
              </span>
            </div>
            <div class="embed-plan-row embed-plan-row--checklist">
              <span class="embed-plan-row__label">
                <IconClipboard /> Checklist
              </span>
              <ol class="embed-plan-checklist">
                <li v-for="(item, i) in CHECKLIST_ITEMS" :key="i">{{ item }}</li>
              </ol>
            </div>
          </div>
        </BaseCard>
      </Transition>
    </section>

    <BaseCard padding="lg" class="cta-card">
      <div class="cta-card__content">
        <div class="cta-card__text">
          <h3 class="cta-card__title">Ready to implement this with EmbedSocial?</h3>
          <p class="cta-card__description">
            EmbedSocial gives you all the tools to collect, manage, and display social proof - no code required.
          </p>
        </div>
        <a href="https://embedsocial.com" target="_blank" rel="noopener noreferrer" class="cta-card__link">
          Get started free
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </BaseCard>

    <div class="docs-cta">
      <div class="docs-cta__inner">
        <div class="docs-cta__icon">
          <IconBook />
        </div>
        <div class="docs-cta__text">
          <strong>Ready to implement this with EmbedSocial?</strong>
          <p>Step-by-step guides for every widget type, placement, and integration.</p>
        </div>
        <a href="https://embedsocial.com/help/" target="_blank" rel="noopener noreferrer" class="docs-cta__link">
          View EmbedSocial Documentation
          <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path
              d="M6.22 8.72a.75.75 0 001.06 1.06l5.22-5.22v1.69a.75.75 0 001.5 0v-3.5a.75.75 0 00-.75-.75h-3.5a.75.75 0 000 1.5h1.69L6.22 8.72z" />
            <path
              d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 007 4H4.75A2.75 2.75 0 002 6.75v4.5A2.75 2.75 0 004.75 14h4.5A2.75 2.75 0 0012 11.25V9a.75.75 0 00-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5z" />
          </svg>
        </a>
      </div>
    </div>

    <div class="step-nav">
      <div class="step-nav__actions">
        <BaseButton variant="secondary" size="lg" @click="$emit('back')">
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clip-rule="evenodd" />
          </svg>
          Back
        </BaseButton>
        <BaseButton variant="ghost" size="lg" @click="$emit('restart')">
          Start over
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.step-optimization-plan {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.step-header__badge {
  margin-bottom: var(--space-3);
}

.step-header__title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--space-2);
}

.step-header__subtitle {
  font-size: var(--font-size-base);
  color: var(--color-gray-500);
}

.step-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.step-section__label {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-700);
}

.layout-card {
  border-color: var(--color-brand-200);
}

.layout-card__header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.layout-card__icon {
  width: 2.5rem;
  height: 2.5rem;
  color: var(--color-brand-600);
  display: flex;
  align-items: center;
  justify-content: center;
}

.layout-card__icon svg {
  width: 100%;
  height: 100%;
}

.layout-card__title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--space-2);
}

.layout-card__rationale {
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  line-height: 1.6;
}

.layout-card__details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-6);
  padding-top: var(--space-6);
  border-top: 1px solid var(--color-gray-100);
}

.layout-card__detail-label {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-gray-400);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-3);
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tag {
  display: inline-flex;
  align-items: center;
  padding: var(--space-1) var(--space-3);
  font-size: var(--font-size-xs);
  font-weight: 500;
  background-color: var(--color-brand-100);
  color: var(--color-brand-700);
  border-radius: var(--radius-full);
}

.tag--muted {
  background-color: var(--color-gray-100);
  color: var(--color-gray-600);
}

.messaging-card__tone {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

.messaging-card__tone-icon {
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
}

.messaging-card__tone-icon svg {
  width: 100%;
  height: 100%;
}

.messaging-preview {
  background-color: var(--color-gray-50);
  border: 1px solid var(--color-gray-200);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  margin-bottom: var(--space-6);
}

.messaging-preview__widget {
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
}

.messaging-preview__headline {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-gray-900);
  margin-bottom: var(--space-2);
  line-height: 1.3;
}

.messaging-preview__subtext {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  margin-bottom: var(--space-4);
  line-height: 1.5;
}

.messaging-preview__cta {
  display: inline-flex;
  align-items: center;
  padding: var(--space-2) var(--space-5);
  background-color: var(--color-brand-600);
  color: #fff;
  font-size: var(--font-size-sm);
  font-weight: 600;
  font-family: var(--font-sans);
  border: none;
  border-radius: var(--radius-lg);
  cursor: default;
}

.messaging-card__fields {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.messaging-field {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: var(--space-3);
  align-items: baseline;
}

.messaging-field__label {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-gray-400);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.messaging-field__value {
  font-size: var(--font-size-sm);
  color: var(--color-gray-700);
  line-height: 1.5;
}

.ai-section__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.ai-section__title-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.ai-section__subtitle {
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
}

.ai-trigger-card {
  border: 1.5px dashed var(--color-brand-200);
  background-color: var(--color-brand-50);
}

.ai-trigger-card__inner {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.ai-trigger-card__icon {
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.ai-trigger-card__icon svg {
  width: 100%;
  height: 100%;
}

.ai-trigger-card__text {
  flex: 1;
}

.ai-trigger-card__text strong {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-gray-800);
  margin-bottom: var(--space-1);
}

.ai-trigger-card__text p {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
}

.ai-loading-card {
  border-color: var(--color-brand-200);
  background: linear-gradient(135deg, var(--color-brand-50) 0%, #fff 100%);
}

.ai-loading-card__inner {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
}

.ai-loading-card__spinner {
  width: 1.5rem;
  height: 1.5rem;
  border: 2px solid var(--color-brand-200);
  border-top-color: var(--color-brand-600);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  flex-shrink: 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.ai-loading-card__text strong {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-gray-800);
  margin-bottom: var(--space-1);
}

.ai-loading-card__text p {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
}

.ai-loading-card__bars {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.ai-loading-bar {
  height: 8px;
  background: linear-gradient(90deg, var(--color-brand-200) 0%, var(--color-brand-100) 50%, var(--color-brand-200) 100%);
  background-size: 200% 100%;
  border-radius: var(--radius-full);
  animation: shimmer 1.5s ease-in-out infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }

  100% {
    background-position: -200% 0;
  }
}

.ai-result-card {
  border-color: var(--color-brand-300);
  background: linear-gradient(135deg, #f0f7ff 0%, #fff 60%);
}

.ai-result-card__header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-5);
}

.ai-result-card__sparkle {
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
}

.ai-result-card__sparkle svg {
  width: 100%;
  height: 100%;
}

.ai-result-card__title {
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--color-brand-700);
}

.ai-result-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

.ai-result-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.ai-result-item--full {
  grid-column: 1 / -1;
}

.ai-result-item__label {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-gray-400);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.ai-result-item__value {
  font-size: var(--font-size-sm);
  color: var(--color-gray-700);
  line-height: 1.5;
}

.ai-result-item__value--headline {
  font-weight: 600;
  color: var(--color-gray-900);
  font-size: var(--font-size-base);
}

.ai-result-item__value--variant {
  color: var(--color-brand-700);
  font-style: italic;
}

.explain-toggle {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  padding: var(--space-4) var(--space-5);
  background-color: #fff;
  border: 1.5px solid var(--color-gray-200);
  border-radius: var(--radius-xl);
  cursor: pointer;
  font-family: var(--font-sans);
  text-align: left;
  transition: border-color var(--transition-fast), background-color var(--transition-fast);
}

.explain-toggle:hover {
  border-color: var(--color-brand-300);
  background-color: var(--color-brand-50);
}

.explain-toggle__icon {
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  flex-shrink: 0;
}

.explain-toggle__icon svg {
  width: 100%;
  height: 100%;
}

.explain-toggle__label {
  flex: 1;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-gray-700);
}

.explain-toggle__chevron {
  width: 1.25rem;
  height: 1.25rem;
  color: var(--color-gray-400);
  transition: transform var(--transition-base);
  flex-shrink: 0;
}

.explain-toggle__chevron--open {
  transform: rotate(180deg);
}

.explain-panel {
  background-color: var(--color-gray-50);
  border: 1.5px solid var(--color-gray-200);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.explain-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.explain-block__title {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-gray-800);
}

.explain-block__text {
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  line-height: 1.7;
}

.explain-block--ai {
  padding: var(--space-4);
  background-color: #f0f7ff;
  border: 1px solid var(--color-brand-200);
  border-radius: var(--radius-lg);
}

.explain-block--ai .explain-block__title {
  color: var(--color-brand-700);
}

.explain-enter-active,
.explain-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
  overflow: hidden;
}

.explain-enter-from,
.explain-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.checklist-card {
  background-color: var(--color-gray-50);
}

.checklist {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}

.checklist__item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
}

.checklist__number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  background-color: var(--color-brand-600);
  color: #fff;
  font-size: var(--font-size-xs);
  font-weight: 700;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 1px;
}

.checklist__content {
  flex: 1;
}

.checklist__content p {
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  line-height: 1.5;
}

.embed-plan-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
}

.embed-plan-card {
  border-color: var(--color-gray-300);
}

.embed-plan-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-5);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-gray-100);
}

.embed-plan-card__title {
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--color-gray-900);
}

.embed-plan-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.embed-plan-row {
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: var(--space-3);
  align-items: baseline;
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-gray-100);
}

.embed-plan-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.embed-plan-row--checklist {
  align-items: flex-start;
}

.embed-plan-row__label {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-gray-400);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.embed-plan-row__label svg {
  width: 0.875rem;
  height: 0.875rem;
}

.embed-plan-row__value {
  font-size: var(--font-size-sm);
  color: var(--color-gray-700);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.embed-plan-row__value--quote {
  font-style: italic;
  color: var(--color-gray-800);
}

.embed-plan-row__lift {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-success-600);
  background-color: var(--color-success-50);
  padding: 1px var(--space-2);
  border-radius: var(--radius-full);
}

.embed-plan-row__ai-badge {
  flex-shrink: 0;
}

.embed-plan-checklist {
  list-style: decimal;
  padding-left: var(--space-5);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.embed-plan-checklist li {
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  line-height: 1.5;
}

.embed-plan-enter-active,
.embed-plan-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.embed-plan-enter-from,
.embed-plan-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.cta-card {
  background: linear-gradient(135deg, var(--color-brand-600) 0%, var(--color-brand-700) 100%);
  border-color: transparent;
}

.cta-card__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-6);
}

.cta-card__title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: #fff;
  margin-bottom: var(--space-2);
}

.cta-card__description {
  font-size: var(--font-size-sm);
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.cta-card__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  background-color: #fff;
  color: var(--color-brand-700);
  font-size: var(--font-size-sm);
  font-weight: 700;
  border-radius: var(--radius-lg);
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: box-shadow var(--transition-fast), transform var(--transition-fast);
}

.cta-card__link:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-1px);
  text-decoration: none;
}

.cta-card__link svg {
  width: 1rem;
  height: 1rem;
}

.docs-cta {
  border: 1.5px solid var(--color-gray-200);
  border-radius: var(--radius-xl);
  background-color: #fff;
  padding: var(--space-5) var(--space-6);
}

.docs-cta__inner {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}

.docs-cta__icon {
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  flex-shrink: 0;
}

.docs-cta__icon svg {
  width: 100%;
  height: 100%;
}

.docs-cta__text {
  flex: 1;
}

.docs-cta__text strong {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-gray-800);
  margin-bottom: 2px;
}

.docs-cta__text p {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
}

.docs-cta__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background-color: #fff;
  color: var(--color-brand-600);
  font-size: var(--font-size-sm);
  font-weight: 600;
  border: 1.5px solid var(--color-brand-300);
  border-radius: var(--radius-lg);
  text-decoration: none;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background-color var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.docs-cta__link:hover {
  background-color: var(--color-brand-50);
  border-color: var(--color-brand-500);
  box-shadow: var(--shadow-sm);
  text-decoration: none;
}

.docs-cta__link svg {
  width: 0.875rem;
  height: 0.875rem;
}

.step-nav {
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-gray-200);
}

.step-nav__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.step-nav :deep(.base-btn) svg {
  width: 1.125rem;
  height: 1.125rem;
}

@media (max-width: 640px) {
  .step-header__title {
    font-size: var(--font-size-2xl);
  }

  .layout-card__details {
    grid-template-columns: 1fr;
  }

  .messaging-field {
    grid-template-columns: 1fr;
    gap: var(--space-1);
  }

  .ai-result-grid {
    grid-template-columns: 1fr;
  }

  .cta-card__content {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-card__link {
    width: 100%;
    justify-content: center;
  }

  .docs-cta__inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .docs-cta__link {
    width: 100%;
    justify-content: center;
  }

  .embed-plan-row {
    grid-template-columns: 1fr;
    gap: var(--space-1);
  }

  .step-nav__actions {
    flex-direction: column-reverse;
    width: 100%;
  }

  .step-nav__actions :deep(.base-btn) {
    width: 100%;
  }
}
</style>
