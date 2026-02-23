import { ref, computed } from 'vue'
import type { WizardStep } from '@/types'
import { STEP_DEFINITIONS } from '@/data/steps'

export function useSteps() {
    const currentStep = ref(1)
    const completedSteps = ref<Set<number>>(new Set())

    const totalSteps = STEP_DEFINITIONS.length

    const steps = computed<WizardStep[]>(() =>
        STEP_DEFINITIONS.map((def) => ({
            ...def,
            isCompleted: completedSteps.value.has(def.id),
            isActive: def.id === currentStep.value,
        }))
    )

    const currentStepData = computed(
        () => steps.value.find((s) => s.id === currentStep.value) ?? steps.value[0]
    )

    const isFirstStep = computed(() => currentStep.value === 1)
    const isLastStep = computed(() => currentStep.value === totalSteps)

    const progressPercent = computed(
        () => Math.round(((currentStep.value - 1) / (totalSteps - 1)) * 100)
    )

    function goToStep(step: number) {
        if (step >= 1 && step <= totalSteps) {
            currentStep.value = step
        }
    }

    function nextStep() {
        if (!isLastStep.value) {
            completedSteps.value.add(currentStep.value)
            currentStep.value++
        }
    }

    function prevStep() {
        if (!isFirstStep.value) {
            currentStep.value--
        }
    }

    function markStepComplete(stepId: number) {
        completedSteps.value.add(stepId)
    }

    function reset() {
        currentStep.value = 1
        completedSteps.value.clear()
    }

    return {
        currentStep,
        totalSteps,
        steps,
        currentStepData,
        isFirstStep,
        isLastStep,
        progressPercent,
        goToStep,
        nextStep,
        prevStep,
        markStepComplete,
        reset,
    }
}
