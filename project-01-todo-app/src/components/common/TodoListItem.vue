<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  id: String,
  title: String,
  creationDate: [String, Object],
  completionDate: [String, Object],
  completed: Boolean,
})
const emit = defineEmits(['on-complete', 'on-decomplete'])

const check = ref(props.completed)
const readonly = ref(false)

watch(check, (value) => {
  const event = value ? 'on-complete' : 'on-decomplete'
  readonly.value = true
  setTimeout(() => {
    emit(event, props.id)
  }, 500)
})
</script>

<template>
  <v-card class="list-item bg-transparent" :class="{ 'list-item--completed': completed }">
    <v-checkbox
      v-model="check"
      hide-details
      density="compact"
      :color="completed ? 'border-secondary' : 'primary'"
      :ripple="false"
      :readonly="readonly"
    />
    <p class="list-item__title text-t-primary">{{ title }}</p>
  </v-card>
</template>

<style lang="scss" scoped>
.list-item {
  padding: 0px 8px;
  border-width: 1px;
  border-color: var(--clr-border-primary);
  border-style: solid;
  display: flex;
  align-items: center;
  gap: 8px;

  &--completed {
    border-color: var(--clr-border-secondary);
    & > .list-item__title {
      color: var(--clr-text-secondary) !important;
      text-decoration-line: line-through;
      text-decoration-color: var(--clr-border-primary);
    }
  }
}
</style>

<style lang="scss">
.v-checkbox .v-selection-control__input::before {
  border-radius: 0;
}
</style>
