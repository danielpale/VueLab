<script setup>
import { nextTick, ref, useTemplateRef, watch } from 'vue'

const props = defineProps({
  id: String,
  title: String,
  creationDate: [String, Object],
  completionDate: [String, Object],
  completed: Boolean,
})
const emit = defineEmits(['on-complete', 'on-decomplete', 'on-delete', 'on-update'])

const check = ref(props.completed)
const readonly = ref(false)
const editing = ref(false)
const inputRef = useTemplateRef('input')

watch(check, (value) => {
  const event = value ? 'on-complete' : 'on-decomplete'
  readonly.value = true
  setTimeout(() => {
    emit(event, props.id)
  }, 300)
})

function handleEdit() {
  if (props.completed) return
  editing.value = true
  nextTick(() => {
    inputRef.value.focus()
  })
}
function handleCancelEdit() {
  editing.value = false
}
function handleUpdate() {
  if (inputRef.value.value.trim() === '') handleCancelEdit()
  emit('on-update', props.id, inputRef.value.value)
  handleCancelEdit()
}
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
    <v-text-field
      v-if="editing"
      :model-value="title"
      ref="input"
      class="h-100"
      variant="plain"
      density="compact"
      hide-details
      @blur="handleUpdate"
    />
    <p v-else class="list-item__title text-t-primary" @click="handleEdit">{{ title }}</p>
    <base-btn
      rounded="0"
      variant="text"
      size="32"
      :color="completed ? 'border-secondary' : 'primary'"
      v-tooltip:top="{ text: 'Eliminar', contentClass: 'rounded-0 bg-background-dark' }"
      @click="emit('on-delete', id)"
    >
      <v-icon icon="close_small" />
    </base-btn>
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

  &__title {
    height: 100%;
    max-height: 32px;
    display: flex;
    align-items: center;
    flex-grow: 1;
    cursor: text;
    position: relative;
    padding-left: 4px;

    &:hover:not(.list-item--completed .list-item__title) {
      background: rgba(242, 5, 5, 0.04);
    }
  }
}

.list-item--completed {
  border-color: var(--clr-border-secondary);
  & .list-item__title {
    color: var(--clr-text-secondary) !important;
    text-decoration-line: line-through;
    text-decoration-color: var(--clr-border-primary);
    cursor: default;
  }
}
</style>

<style lang="scss">
.v-checkbox .v-selection-control__input::before {
  border-radius: 0;
}
</style>
