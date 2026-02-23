<script setup lang="ts">
import type { WizardStep } from '@/types'
import ProgressBar from '@/components/ui/ProgressBar.vue'

interface Props {
  steps: WizardStep[]
  currentStep: number
  progressPercent: number
}

defineProps<Props>()
</script>

<template>
  <div class="step-layout">
    <div class="step-layout__progress-section">
      <div class="step-layout__step-indicators">
        <div v-for="step in steps" :key="step.id" :class="[
          'step-indicator',
          { 'step-indicator--active': step.isActive },
          { 'step-indicator--completed': step.isCompleted },
        ]">
          <div class="step-indicator__circle">
            <svg v-if="step.isCompleted" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clip-rule="evenodd" />
            </svg>
            <span v-else>{{ step.id }}</span>
          </div>
          <span class="step-indicator__label">{{ step.label }}</span>
        </div>
      </div>
      <ProgressBar :value="progressPercent" size="sm" color="brand" class="step-layout__progress-bar" />
    </div>

    <div class="step-layout__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.step-layout {
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
}

.step-layout__progress-section {
  margin-bottom: var(--space-10);
}

.step-layout__step-indicators {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: var(--space-4);
  gap: var(--space-2);
}

.step-layout__progress-bar {
  margin-top: var(--space-2);
}

.step-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  flex: 1;
  min-width: 0;
}

.step-indicator__circle {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-sm);
  font-weight: 600;
  border: 2px solid var(--color-gray-300);
  background-color: #fff;
  color: var(--color-gray-400);
  transition:
    background-color var(--transition-base),
    border-color var(--transition-base),
    color var(--transition-base);
  flex-shrink: 0;
}

.step-indicator__circle svg {
  width: 1rem;
  height: 1rem;
}

.step-indicator__label {
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-gray-400);
  text-align: center;
  line-height: 1.3;
  transition: color var(--transition-base);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.step-indicator--active .step-indicator__circle {
  border-color: var(--color-brand-500);
  background-color: var(--color-brand-500);
  color: #fff;
}

.step-indicator--active .step-indicator__label {
  color: var(--color-brand-600);
  font-weight: 600;
}

.step-indicator--completed .step-indicator__circle {
  border-color: var(--color-success-500);
  background-color: var(--color-success-500);
  color: #fff;
}

.step-indicator--completed .step-indicator__label {
  color: var(--color-success-600);
}

.step-layout__content {
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .step-layout {
    padding: var(--space-6) var(--space-4);
  }

  .step-indicator__label {
    display: none;
  }

  .step-layout__step-indicators {
    justify-content: center;
    gap: var(--space-4);
  }

  .step-indicator {
    flex: 0 0 auto;
  }
}
</style>
