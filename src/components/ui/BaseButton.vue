<script setup lang="ts">
import type { ButtonVariant, ButtonSize } from '@/types'

interface Props {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  type: 'button',
  fullWidth: false,
})

const emit = defineEmits<{ click: [event: MouseEvent] }>()

function handleClick(event: MouseEvent) {
  if (props.disabled || props.loading) return
  emit('click', event)
}</script>

<template>
  <button :type="props.type" :disabled="props.disabled || props.loading" :class="[
    'base-btn',
    `base-btn--${props.variant}`,
    `base-btn--${props.size}`,
    { 'base-btn--full': props.fullWidth },
    { 'base-btn--loading': props.loading },
  ]" @click="handleClick">
    <span v-if="props.loading" class="base-btn__spinner" aria-hidden="true" />
    <slot />
  </button>
</template>

<style scoped>
.base-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  font-family: var(--font-sans);
  font-weight: 500;
  border: 1.5px solid transparent;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    color var(--transition-fast),
    box-shadow var(--transition-fast),
    opacity var(--transition-fast);
  white-space: nowrap;
  user-select: none;
  text-decoration: none;
}

.base-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

.base-btn--sm {
  padding: var(--space-2) var(--space-3);
  font-size: var(--font-size-sm);
  height: 2rem;
}

.base-btn--md {
  padding: var(--space-2) var(--space-5);
  font-size: var(--font-size-sm);
  height: 2.5rem;
}

.base-btn--lg {
  padding: var(--space-3) var(--space-6);
  font-size: var(--font-size-base);
  height: 3rem;
}

.base-btn--full {
  width: 100%;
}

.base-btn--loading {
  opacity: 0.8;
  cursor: progress;
}

.base-btn--primary {
  background-color: var(--color-brand-600);
  color: #fff;
  border-color: var(--color-brand-600);
}

.base-btn--primary:hover:not(:disabled) {
  background-color: var(--color-brand-700);
  border-color: var(--color-brand-700);
  box-shadow: var(--shadow-md);
}

.base-btn--secondary {
  background-color: #fff;
  color: var(--color-gray-700);
  border-color: var(--color-gray-300);
}

.base-btn--secondary:hover:not(:disabled) {
  background-color: var(--color-gray-50);
  border-color: var(--color-gray-400);
}

.base-btn--ghost {
  background-color: transparent;
  color: var(--color-brand-600);
  border-color: transparent;
}

.base-btn--ghost:hover:not(:disabled) {
  background-color: var(--color-brand-50);
}

.base-btn--danger {
  background-color: #fff;
  color: #dc2626;
  border-color: #fca5a5;
}

.base-btn--danger:hover:not(:disabled) {
  background-color: #fef2f2;
  border-color: #dc2626;
}

.base-btn__spinner {
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
  flex-shrink: 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
