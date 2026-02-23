<script setup lang="ts">
import type { Component } from 'vue'

interface Props {
  selected?: boolean
  icon?: Component
  label: string
  description?: string
  disabled?: boolean
  multiSelect?: boolean
}

withDefaults(defineProps<Props>(), {
  selected: false,
  description: '',
  disabled: false,
  multiSelect: false,
})

defineEmits<{ select: [] }>()
</script>

<template>
  <button type="button" :disabled="disabled" :class="[
    'selection-card',
    { 'selection-card--selected': selected },
    { 'selection-card--disabled': disabled },
    { 'selection-card--multi': multiSelect },
  ]" :aria-pressed="selected" @click="$emit('select')">
    <div v-if="icon" class="selection-card__icon" aria-hidden="true">
      <component :is="icon" />
    </div>
    <div class="selection-card__content">
      <span class="selection-card__label">{{ label }}</span>
      <span v-if="description" class="selection-card__description">{{ description }}</span>
    </div>
    <div class="selection-card__check" aria-hidden="true">
      <svg v-if="selected" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd" />
      </svg>
      <div v-else class="selection-card__check-empty" />
    </div>
  </button>
</template>

<style scoped>
.selection-card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  width: 100%;
  padding: var(--space-4);
  background-color: #fff;
  border: 1.5px solid var(--color-gray-200);
  border-radius: var(--radius-xl);
  cursor: pointer;
  text-align: left;
  transition:
    border-color var(--transition-fast),
    background-color var(--transition-fast),
    box-shadow var(--transition-fast),
    transform var(--transition-fast);
  font-family: var(--font-sans);
}

.selection-card:hover:not(:disabled) {
  border-color: var(--color-brand-300);
  background-color: var(--color-brand-50);
  transform: translateY(-1px);
  box-shadow: var(--shadow-sm);
}

.selection-card--selected {
  border-color: var(--color-brand-500);
  background-color: var(--color-brand-50);
  box-shadow: 0 0 0 3px var(--color-brand-100);
}

.selection-card--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.selection-card__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  color: #1e3a8a;
}

.selection-card__icon svg {
  width: 100%;
  height: 100%;
}

.selection-card__content {
  flex: 1;
  min-width: 0;
}

.selection-card__label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-gray-800);
  line-height: 1.4;
}

.selection-card__description {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  margin-top: 2px;
  line-height: 1.4;
}

.selection-card__check {
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: 1px;
  color: var(--color-brand-600);
}

.selection-card__check svg {
  width: 100%;
  height: 100%;
}

.selection-card__check-empty {
  width: 100%;
  height: 100%;
  border: 1.5px solid var(--color-gray-300);
  border-radius: 50%;
}

.selection-card--selected .selection-card__check-empty {
  border-color: var(--color-brand-500);
}
</style>
