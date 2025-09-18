<script setup>
defineProps({
  fluid: { type: Boolean, default: false },
  fullHeight: { type: Boolean, default: true },
})
</script>

<template>
  <div
    class="base-section"
    :class="{ 'base-section--fluid': fluid, 'base-section--full-height': fullHeight }"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-section {
  position: relative;
  padding: 16px;
  width: 100%;
  max-width: var(--base-max-width);
  margin: 0 auto;

  &--fluid {
    max-width: 100%;
  }

  &--full-height {
    height: 100%;
  }

  @media (width < 600px) {
    padding: 16px 8px;
  }
}
</style>
