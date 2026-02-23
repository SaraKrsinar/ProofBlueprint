<script setup lang="ts">
import { IconLogo } from '@/components/icons'
</script>


<template>
  <header class="app-header">
    <div class="app-header__inner">
      <div class="app-header__brand">
        <div class="app-header__logo" aria-hidden="true">
          <IconLogo :size="32" />
        </div>
        <div class="app-header__brand-text">
          <span class="app-header__product-name"> ProofBlueprint</span>
        </div>
      </div>
      <div class="app-header__actions">
        <a href="https://embedsocial.com" target="_blank" rel="noopener noreferrer" class="app-header__link">
          embedsocial.com
          <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path
              d="M6.22 8.72a.75.75 0 001.06 1.06l5.22-5.22v1.69a.75.75 0 001.5 0v-3.5a.75.75 0 00-.75-.75h-3.5a.75.75 0 000 1.5h1.69L6.22 8.72z" />
            <path
              d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 007 4H4.75A2.75 2.75 0 002 6.75v4.5A2.75 2.75 0 004.75 14h4.5A2.75 2.75 0 0012 11.25V9a.75.75 0 00-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5z" />
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-gray-200);
}

.app-header__inner {
  max-width: 900px;
  margin: 0 auto;
  padding: var(--space-4) var(--space-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app-header__brand {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.app-header__logo {
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
}

.app-header__logo svg {
  width: 100%;
  height: 100%;
}

.app-header__brand-text {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.app-header__product-name {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-gray-900);
  line-height: 1.2;
}

.app-header__powered-by {
  font-size: var(--font-size-xs);
  color: var(--color-gray-400);
  line-height: 1.2;
}

.app-header__actions {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.app-header__link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  font-size: var(--font-size-xs);
  font-weight: 500;
  color: var(--color-gray-500);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.app-header__link:hover {
  color: var(--color-brand-600);
  text-decoration: none;
}

.app-header__link svg {
  width: 0.875rem;
  height: 0.875rem;
}
</style>
