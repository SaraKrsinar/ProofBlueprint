<script setup lang="ts">
import { computed } from 'vue'
import type { GoalSelection, ConversionGoal, PlacementZone } from '@/types'
import { CONVERSION_GOAL_OPTIONS, PLACEMENT_ZONE_OPTIONS } from '@/data/options'
import SelectionCard from '@/components/ui/SelectionCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'

interface Props {
  modelValue: Readonly<GoalSelection>
  isValid: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:primaryGoal': [value: ConversionGoal]
  'toggle:secondaryGoal': [value: ConversionGoal]
  'update:currentPlacement': [value: PlacementZone | null]
  next: []
  back: []
}>()

const canAddSecondary = computed(
  () => props.modelValue.secondaryGoals.length < 2
)
</script>

<template>
  <div class="step-goal-selection">
    <div class="step-header">
      <h1 class="step-header__title">What do you want to achieve?</h1>
      <p class="step-header__subtitle">
        Choose your primary conversion goal. We'll build your entire strategy around it.
      </p>
    </div>

    <section class="step-section">
      <div class="step-section__header">
        <h2 class="step-section__label">
          Primary goal
          <span class="step-section__required" aria-label="required">*</span>
        </h2>
        <p class="step-section__hint">
          Pick the one that matters most right now.
        </p>
      </div>

      <div class="selection-grid selection-grid--1col">
        <SelectionCard v-for="option in CONVERSION_GOAL_OPTIONS" :key="option.value" :label="option.label"
          :description="option.description" :icon="option.icon" :selected="modelValue.primaryGoal === option.value"
          @select="emit('update:primaryGoal', option.value)" />
      </div>
    </section>

    <section class="step-section">
      <div class="step-section__header">
        <h2 class="step-section__label">
          Secondary goals
          <BaseBadge variant="muted">Optional · up to 2</BaseBadge>
        </h2>
        <p class="step-section__hint">
          These will enrich your recommendations without overriding your primary focus.
        </p>
      </div>

      <div class="selection-grid selection-grid--2col">
        <SelectionCard v-for="option in CONVERSION_GOAL_OPTIONS" :key="option.value" :label="option.label"
          :description="option.description" :icon="option.icon"
          :selected="modelValue.secondaryGoals.includes(option.value)" :disabled="option.value === modelValue.primaryGoal ||
            (
              !modelValue.secondaryGoals.includes(option.value) &&
              !canAddSecondary
            )
            " multi-select @select="emit('toggle:secondaryGoal', option.value)" />
      </div>

      <p v-if="!canAddSecondary" class="step-section__limit-note">
        Maximum 2 secondary goals selected. Deselect one to change.
      </p>
    </section>

    <section class="step-section">
      <div class="step-section__header">
        <h2 class="step-section__label">
          Where are you currently showing social proof?
          <BaseBadge variant="muted">Optional</BaseBadge>
        </h2>
        <p class="step-section__hint">
          Helps us identify gaps and avoid redundant recommendations.
        </p>
      </div>

      <div class="selection-grid selection-grid--3col">
        <SelectionCard v-for="option in PLACEMENT_ZONE_OPTIONS" :key="option.value" :label="option.label"
          :description="option.description" :selected="modelValue.currentPlacement === option.value" @select="
            emit(
              'update:currentPlacement',
              modelValue.currentPlacement === option.value
                ? null
                : option.value
            )
            " />
      </div>
    </section>

    <div class="step-nav">
      <div class="step-nav__actions">
        <BaseButton variant="secondary" size="lg" @click="emit('back')">
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clip-rule="evenodd" />
          </svg>
          Back
        </BaseButton>

        <BaseButton variant="primary" size="lg" :disabled="!isValid" @click="emit('next')">
          See Placement Strategy
          <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
              clip-rule="evenodd" />
          </svg>
        </BaseButton>
      </div>

      <p v-if="!isValid" class="step-nav__hint">
        Please select a primary goal to continue.
      </p>
    </div>
  </div>
</template>

<style scoped>
.step-goal-selection {
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

.step-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.step-section__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.step-section__label {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-700);
}

.step-section__required {
  color: #dc2626;
}

.step-section__hint {
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
}

.step-section__limit-note {
  font-size: var(--font-size-xs);
  color: var(--color-warning-500);
  font-weight: 500;
}

.selection-grid {
  display: grid;
  gap: var(--space-3);
}

.selection-grid--1col {
  grid-template-columns: 1fr;
}

.selection-grid--2col {
  grid-template-columns: repeat(2, 1fr);
}

.selection-grid--3col {
  grid-template-columns: repeat(3, 1fr);
}

.step-nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-gray-200);
}

.step-nav__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.step-nav__hint {
  font-size: var(--font-size-sm);
  color: var(--color-gray-400);
}

.step-nav :deep(.base-btn) svg {
  width: 1.125rem;
  height: 1.125rem;
}

@media (max-width: 640px) {
  .step-header__title {
    font-size: var(--font-size-2xl);
  }

  .selection-grid--2col,
  .selection-grid--3col {
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