<script setup lang="ts">
interface Props {
  value: number
  label?: string
  showPercent?: boolean
  size?: 'sm' | 'md'
  color?: 'brand' | 'success' | 'warning'
}

withDefaults(defineProps<Props>(), {
  label: '',
  showPercent: false,
  size: 'md',
  color: 'brand',
})
</script>

<template>
  <div class="progress-bar">
    <div v-if="label || showPercent" class="progress-bar__header">
      <span v-if="label" class="progress-bar__label">{{ label }}</span>
      <span v-if="showPercent" class="progress-bar__percent">{{ value }}%</span>
    </div>
    <div :class="['progress-bar__track', `progress-bar__track--${size}`]" role="progressbar"
      :aria-valuenow="Math.min(100, Math.max(0, value))" aria-valuemin="0" aria-valuemax="100">
      <div :class="['progress-bar__fill', `progress-bar__fill--${color}`]"
        :style="{ width: `${Math.min(100, Math.max(0, value))}%` }" />
    </div>
  </div>
</template>

<style scoped>
.progress-bar {
  width: 100%;
}

.progress-bar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-2);
}

.progress-bar__label {
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  font-weight: 500;
}

.progress-bar__percent {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  font-weight: 600;
}

.progress-bar__track {
  width: 100%;
  background-color: var(--color-gray-200);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-bar__track--sm {
  height: 4px;
}

.progress-bar__track--md {
  height: 8px;
}

.progress-bar__fill {
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.progress-bar__fill--brand {
  background-color: var(--color-brand-500);
}

.progress-bar__fill--success {
  background-color: var(--color-success-500);
}

.progress-bar__fill--warning {
  background-color: var(--color-warning-500);
}
</style>
