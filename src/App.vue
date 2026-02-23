<script setup lang="ts">
import { useSteps } from '@/composables/useSteps'
import { useOptimizer } from '@/composables/useOptimizer'
import { useRecommendations } from '@/composables/useRecommendations'
import AppHeader from '@/components/layout/AppHeader.vue'
import StepLayout from '@/components/layout/StepLayout.vue'
import StepBusinessProfile from '@/components/steps/StepBusinessProfile.vue'
import StepGoalSelection from '@/components/steps/StepGoalSelection.vue'
import StepPlacementResults from '@/components/steps/StepPlacementResults.vue'
import StepOptimizationPlan from '@/components/steps/StepOptimizationPlan.vue'

const { currentStep, steps, progressPercent, nextStep, prevStep, reset: resetSteps } = useSteps()

const {
  businessProfile,
  goalSelection,
  setBusinessType,
  setMonthlyVisitors,
  setIndustry,
  setWebsiteUrl,
  setPrimaryGoal,
  toggleSecondaryGoal,
  setCurrentPlacement,
  isStep1Valid,
  isStep2Valid,
  reset: resetOptimizer,
} = useOptimizer()

const { result } = useRecommendations(businessProfile, goalSelection)

function handleRestart() {
  resetOptimizer()
  resetSteps()
}

</script>

<template>
  <div class="app">
    <AppHeader />
    <main class="app__main">
      <StepLayout :steps="steps" :current-step="currentStep" :progress-percent="progressPercent">
        <Transition name="step" mode="out-in">
          <StepBusinessProfile v-if="currentStep === 1" :model-value="businessProfile" :is-valid="isStep1Valid()"
            @update:business-type="setBusinessType" @update:monthly-visitors="setMonthlyVisitors"
            @update:industry="setIndustry" @update:website-url="setWebsiteUrl" @next="nextStep" />

          <StepGoalSelection v-else-if="currentStep === 2" :model-value="goalSelection" :is-valid="isStep2Valid()"
            @update:primary-goal="setPrimaryGoal" @toggle:secondary-goal="toggleSecondaryGoal"
            @update:current-placement="setCurrentPlacement" @next="nextStep" @back="prevStep" />

          <StepPlacementResults v-else-if="currentStep === 3 && result" :result="result" @next="nextStep"
            @back="prevStep" />

          <StepOptimizationPlan v-else-if="currentStep === 4 && result" :result="result"
            :business-profile="businessProfile" :goal-selection="goalSelection" @back="prevStep"
            @restart="handleRestart" />
        </Transition>
      </StepLayout>
    </main>
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-50);
}

.app__main {
  flex: 1;
  padding-bottom: var(--space-16);
}
</style>
