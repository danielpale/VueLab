<script setup></script>

<template>
  <hr class="divider" />
</template>

<style lang="scss" scoped>
.divider {
  border-width: 2px;
  border-color: var(--clr-border-secondary);
  border-style: dashed;

  @media (width <= 960px) {
    border-width: 1px;
  }
}
</style>
