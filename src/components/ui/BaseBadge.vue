<script setup lang="ts">
import type { BadgeVariant } from '@/types'

interface Props {
  variant?: BadgeVariant
  dot?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  dot: false,
})
</script>

<template>
  <span :class="['base-badge', `base-badge--${props.variant}`]">
    <span v-if="props.dot" class="base-badge__dot" aria-hidden="true" />
    <slot />
  </span>
</template>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 2px var(--space-2);
  font-size: var(--font-size-xs);
  font-weight: 500;
  border-radius: var(--radius-full);
  white-space: nowrap;
  line-height: 1.5;
}

.base-badge__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: currentColor;
  flex-shrink: 0;
}

.base-badge--default {
  background-color: var(--color-gray-100);
  color: var(--color-gray-700);
}

.base-badge--success {
  background-color: var(--color-success-50);
  color: var(--color-success-600);
}

.base-badge--warning {
  background-color: var(--color-warning-50);
  color: #92400e;
}

.base-badge--info {
  background-color: var(--color-info-50);
  color: var(--color-brand-700);
}

.base-badge--muted {
  background-color: var(--color-gray-100);
  color: var(--color-gray-500);
}
</style>
