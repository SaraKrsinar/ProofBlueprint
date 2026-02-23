<script setup lang="ts">
interface Props {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
  selected?: boolean
  bordered?: boolean
}

withDefaults(defineProps<Props>(), {
  padding: 'md',
  hoverable: false,
  selected: false,
  bordered: true,
})
</script>

<template>
  <div :class="[
    'base-card',
    `base-card--pad-${padding}`,
    { 'base-card--hoverable': hoverable },
    { 'base-card--selected': selected },
    { 'base-card--bordered': bordered },
  ]">
    <slot />
  </div>
</template>

<style scoped>
.base-card {
  background-color: #fff;
  border-radius: var(--radius-xl);
  transition:
    box-shadow var(--transition-base),
    border-color var(--transition-base),
    transform var(--transition-base);
}

.base-card--bordered {
  border: 1.5px solid var(--color-gray-200);
}

.base-card--pad-none {
  padding: 0;
}

.base-card--pad-sm {
  padding: var(--space-4);
}

.base-card--pad-md {
  padding: var(--space-6);
}

.base-card--pad-lg {
  padding: var(--space-8);
}

.base-card--hoverable {
  cursor: pointer;
}

.base-card--hoverable:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--color-brand-200);
  transform: translateY(-1px);
}

.base-card--selected {
  border-color: var(--color-brand-500);
  box-shadow: 0 0 0 3px var(--color-brand-100);
  background-color: var(--color-brand-50);
}
</style>
