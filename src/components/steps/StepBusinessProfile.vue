<script setup lang="ts">
import type { BusinessProfile, BusinessType, VisitorRange } from '@/types'
import { BUSINESS_TYPE_OPTIONS, VISITOR_RANGE_OPTIONS } from '@/data/options'
import SelectionCard from '@/components/ui/SelectionCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseCard from '@/components/ui/BaseCard.vue'

interface Props {
  modelValue: Readonly<BusinessProfile>
  isValid: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:businessType': [value: BusinessType]
  'update:monthlyVisitors': [value: VisitorRange]
  'update:industry': [value: string]
  'update:websiteUrl': [value: string]
  next: []
}>()

function handleIndustryInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:industry', value)
}

function handleWebsiteUrlInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:websiteUrl', value)
}
</script>

<template>
  <div class="step-business-profile">
    <div class="step-header">
      <h1 class="step-header__title">Tell us about your business</h1>
      <p class="step-header__subtitle">
        We'll use this to tailor your social proof strategy to your specific context.
      </p>
    </div>

    <section class="step-section">
      <h2 class="step-section__label">
        What type of business do you run?
        <span class="step-section__required" aria-label="required">*</span>
      </h2>

      <div class="selection-grid selection-grid--2col">
        <SelectionCard v-for="option in BUSINESS_TYPE_OPTIONS" :key="option.value" :label="option.label"
          :description="option.description" :icon="option.icon" :selected="modelValue.businessType === option.value"
          @select="emit('update:businessType', option.value)" />
      </div>
    </section>

    <section class="step-section">
      <h2 class="step-section__label">
        How many monthly visitors does your website get?
        <span class="step-section__required" aria-label="required">*</span>
      </h2>

      <div class="selection-grid selection-grid--2col">
        <SelectionCard v-for="option in VISITOR_RANGE_OPTIONS" :key="option.value" :label="option.label"
          :selected="modelValue.monthlyVisitors === option.value"
          @select="emit('update:monthlyVisitors', option.value)" />
      </div>
    </section>

    <BaseCard padding="md" class="step-section__optional-fields">
      <h2 class="step-section__label step-section__label--sm">
        Optional: Help us personalize further
      </h2>

      <div class="form-row">
        <div class="form-field">
          <label for="industry" class="form-field__label">Industry</label>
          <input id="industry" type="text" class="form-field__input" placeholder="e.g. Fashion, B2B SaaS, Home Services"
            :value="modelValue.industry" @input="handleIndustryInput" />
        </div>

        <div class="form-field">
          <label for="website-url" class="form-field__label">Website URL</label>
          <input id="website-url" type="url" class="form-field__input" placeholder="https://yourwebsite.com"
            :value="modelValue.websiteUrl" @input="handleWebsiteUrlInput" />
        </div>
      </div>
    </BaseCard>

    <div class="step-nav">
      <BaseButton variant="primary" size="lg" :disabled="!isValid" @click="emit('next')">
        Continue to Goals
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clip-rule="evenodd" />
        </svg>
      </BaseButton>

      <p v-if="!isValid" class="step-nav__hint">
        Please select a business type and visitor range to continue.
      </p>
    </div>
  </div>
</template>

<style scoped>
.step-business-profile {
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

.step-section__label {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-gray-700);
}

.step-section__label--sm {
  font-size: var(--font-size-sm);
  margin-bottom: var(--space-4);
}

.step-section__required {
  color: #dc2626;
  margin-left: 2px;
}

.selection-grid {
  display: grid;
  gap: var(--space-3);
}

.selection-grid--2col {
  grid-template-columns: repeat(2, 1fr);
}

.step-section__optional-fields {
  background-color: var(--color-gray-50);
  border-color: var(--color-gray-200);
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.form-field__label {
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--color-gray-700);
}

.form-field__input {
  width: 100%;
  padding: var(--space-2) var(--space-3);
  font-size: var(--font-size-sm);
  font-family: var(--font-sans);
  color: var(--color-gray-800);
  background-color: #fff;
  border: 1.5px solid var(--color-gray-300);
  border-radius: var(--radius-lg);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  outline: none;
  height: 2.5rem;
}

.form-field__input::placeholder {
  color: var(--color-gray-400);
}

.form-field__input:focus {
  border-color: var(--color-brand-500);
  box-shadow: 0 0 0 3px var(--color-brand-100);
}

.step-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-3);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-gray-200);
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

  .selection-grid--2col {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }
}
</style>