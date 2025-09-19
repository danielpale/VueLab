<script setup>
import { useDisplay } from 'vuetify'

import logo from '@/assets/images/logo-light.svg'

const emit = defineEmits(['toggle-nav'])

const { smAndDown, mdAndUp } = useDisplay()
</script>

<template>
  <v-app-bar class="the-app-bar" elevation="0" :height="56">
    <base-section class="d-flex align-center justify-space-between py-0">
      <div class="the-app-bar__prepend">
        <div class="the-app-bar__logo">
          <v-img :src="logo" :height="36" :width="36" />
        </div>
        <div class="d-flex align-center ga-2">
          <base-btn
            v-if="smAndDown"
            rounded="0"
            size="36"
            variant="text"
            color="t-invert"
            @click="emit('toggle-nav')"
          >
            <v-icon icon="menu" />
          </base-btn>
          <h6 class="font-weight-bold ff-text">Todo App</h6>
        </div>
      </div>
      <div v-if="mdAndUp" class="the-app-bar__append">
        <div class="the-app-bar__nav"></div>
      </div>
    </base-section>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.the-app-bar {
  background: var(--clr-background-dark) !important;
  color: var(--clr-text-invert) !important;
  border-bottom-color: var(--clr-border-primary);
  border-bottom-style: solid;
  border-bottom-width: 1px;

  &__prepend {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  &__append {
    height: 100%;
    display: flex;
    gap: 16px;
    align-items: center;
  }

  &__nav {
    display: flex;
    height: 100%;
  }

  @media (width <= 960px) {
    &__prepend {
      width: 100%;
      flex-direction: row-reverse;
      justify-content: space-between;
    }
  }
}
</style>
