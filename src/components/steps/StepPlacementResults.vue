<script setup lang="ts">
import type { OptimizationResult } from '@/types'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import ProgressBar from '@/components/ui/ProgressBar.vue'
import { IconStar } from '@/components/icons'
import {
  ZONE_LABELS,
  ZONE_ICONS,
  PRIORITY_BADGE,
  type PriorityKey,
} from '@/constants/placementLabels'
import { getScoreColor } from '@/utils/helpers'

interface Props {
  result: OptimizationResult
}

const props = defineProps<Props>()

defineEmits<{ next: []; back: [] }>()

function getPriorityBadge(priority: PriorityKey) {
  return PRIORITY_BADGE[priority] ?? PRIORITY_BADGE.optional
}
</script>

<template>
  <div class="step-placement-results">

    <div class="step-header">
      <h1 class="step-header__title">Your Placement Strategy</h1>
      <p class="step-header__subtitle">
        Based on your business type and goals, here's where to place your social proof widgets for maximum
        impact.
      </p>
    </div>

    <BaseCard padding="md" class="score-card">
      <div class="score-card__inner">
        <div class="score-card__text">
          <h2 class="score-card__title">Optimization Score</h2>
          <p class="score-card__description">
            How well-positioned your social proof strategy is for your stated goals.
          </p>
        </div>

        <div class="score-card__score">
          <span class="score-card__number">{{ result.overallScore }}</span>
          <span class="score-card__max">/100</span>
        </div>
      </div>

      <ProgressBar :value="result.overallScore" size="md" :color="getScoreColor(result.overallScore)"
        class="score-card__bar" />
    </BaseCard>

    <section class="step-section">
      <h2 class="step-section__label">Recommended Placements</h2>

      <div class="placement-list">
        <BaseCard v-for="(placement, index) in result.placements" :key="placement.zone" padding="md" :class="[
          'placement-card',
          { 'placement-card--primary': placement.priority === 'primary' }
        ]">
          <div class="placement-card__header">
            <div class="placement-card__title-row">

              <span class="placement-card__icon" aria-hidden="true">
                <component v-if="ZONE_ICONS[placement.zone]" :is="ZONE_ICONS[placement.zone]" />
              </span>

              <div class="placement-card__title-group">
                <div class="placement-card__title-line">

                  <h3 class="placement-card__title">
                    {{ ZONE_LABELS[placement.zone] ?? placement.zone }}
                  </h3>

                  <BaseBadge :variant="getPriorityBadge(placement.priority as PriorityKey).variant" :dot="true">
                    {{ getPriorityBadge(placement.priority as PriorityKey).label }}
                  </BaseBadge>

                  <span v-if="index === 0" class="placement-card__top-pick" aria-label="Top recommendation">
                    <IconStar class="placement-card__star" />
                    Top Pick
                  </span>

                </div>

                <p class="placement-card__rationale">
                  {{ placement.rationale }}
                </p>
              </div>

            </div>
          </div>

          <div class="placement-card__metrics">
            <div class="placement-card__lift">
              <span class="placement-card__lift-label">Expected lift</span>
              <span class="placement-card__lift-value">
                {{ placement.expectedLift }}
              </span>
            </div>

            <div class="placement-card__confidence">
              <span class="placement-card__confidence-label">Confidence</span>

              <div class="placement-card__confidence-bar">
                <ProgressBar :value="placement.score" size="sm" :color="getScoreColor(placement.score)" /> <span
                  class="placement-card__confidence-value">
                  {{ placement.score }}%
                </span>
              </div>
            </div>
          </div>

        </BaseCard>
      </div>
    </section>

    <div class="step-nav">
      <div class="step-nav__actions">
        <BaseButton variant="secondary" size="lg" @click="$emit('back')">
          Back
        </BaseButton>

        <BaseButton variant="primary" size="lg" @click="$emit('next')">
          See Layout & Messaging
        </BaseButton>
      </div>
    </div>

  </div>
</template>


<style scoped>
.step-placement-results {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
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

.score-card {
  background: linear-gradient(135deg, var(--color-brand-50) 0%, #fff 100%);
  border-color: var(--color-brand-200);
}

.score-card__inner {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.score-card__title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-800);
  margin-bottom: var(--space-1);
}

.score-card__description {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
}

.score-card__score {
  display: flex;
  align-items: baseline;
  gap: 2px;
  flex-shrink: 0;
}

.score-card__number {
  font-size: var(--font-size-4xl);
  font-weight: 800;
  color: var(--color-brand-600);
  line-height: 1;
}

.score-card__max {
  font-size: var(--font-size-lg);
  color: var(--color-gray-400);
  font-weight: 500;
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

.placement-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.placement-card {
  transition: box-shadow var(--transition-base);
}

.placement-card--primary {
  border-color: var(--color-brand-300);
  background: linear-gradient(135deg, var(--color-brand-50) 0%, #fff 60%);
}

.placement-card__header {
  margin-bottom: var(--space-4);
}

.placement-card__title-row {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.placement-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: #1e3a8a;
  flex-shrink: 0;
}

.placement-card__icon svg {
  width: 100%;
  height: 100%;
}

.placement-card__title-group {
  flex: 1;
  min-width: 0;
}

.placement-card__title-line {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
}

.placement-card__title {
  font-size: var(--font-size-base);
  font-weight: 700;
  color: var(--color-gray-900);
}

.placement-card__top-pick {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: #92400e;
  background-color: #fef3c7;
  padding: 2px var(--space-2);
  border-radius: var(--radius-full);
}

.placement-card__star {
  width: 0.9rem;
  height: 0.9rem;
  color: #facc15;
}

.placement-card__rationale {
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  line-height: 1.5;
}

.placement-card__metrics {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-gray-100);
}

.placement-card__lift,
.placement-card__confidence {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.placement-card__lift-label,
.placement-card__confidence-label {
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-gray-400);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.placement-card__lift-value {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-success-600);
}

.placement-card__confidence-bar {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.placement-card__confidence-bar :deep(.progress-bar) {
  flex: 1;
}

.placement-card__confidence-value {
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-gray-600);
  white-space: nowrap;
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

  .placement-card__metrics {
    grid-template-columns: 1fr;
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
