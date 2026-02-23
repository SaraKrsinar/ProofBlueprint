<script setup lang="ts">
defineProps<{
    size?: number | string
}>()
</script>

<template>
    <svg :width="size || 32" :height="size || 32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="8" fill="#2563eb" />
        <path d="M8 22L14 10L20 18L24 14" stroke="white" stroke-width="2.8" stroke-linecap="round"
            stroke-linejoin="round" />
        <circle cx="24" cy="14" r="2" fill="#60a5fa" />
    </svg>
</template>