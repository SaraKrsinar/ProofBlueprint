import { AI_CONTENT_MATRIX, FALLBACK_ENHANCEMENT } from '@/data/aiContent'
import type { AIEnhancementState, BusinessType, ConversionGoal, OptimizationResult } from '@/types'
import { appendToneRationale } from '@/utils/helpers'
import { ref, readonly } from 'vue'

const SIMULATED_DELAY_MS = 1800

export function useAIEnhancement() {
    const state = ref<AIEnhancementState>({
        result: null,
        isLoading: false,
        hasRun: false,
    })

    async function enhance(
        optimizationResult: OptimizationResult,
        businessType: BusinessType | null,
        primaryGoal: ConversionGoal | null
    ): Promise<void> {
        if (state.value.isLoading) return

        state.value = {
            result: null,
            isLoading: true,
            hasRun: false,
        }

        await new Promise<void>((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS))

        const content =
            businessType && primaryGoal
                ? AI_CONTENT_MATRIX[businessType][primaryGoal]
                : FALLBACK_ENHANCEMENT

        const tone = optimizationResult.messaging.tone

        state.value = {
            result: {
                ...content,
                conversionRationale: appendToneRationale(
                    content.conversionRationale,
                    tone
                ),
            },
            isLoading: false,
            hasRun: true,
        }
    }

    function reset() {
        state.value = { result: null, isLoading: false, hasRun: false }
    }

    return {
        aiState: readonly(state),
        enhance,
        reset,
    }
}
