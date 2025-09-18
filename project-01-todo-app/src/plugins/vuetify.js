import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import { aliases, custom } from './customIcons'

export const vuetify = createVuetify({
  icons: {
    defaultSet: 'custom',
    aliases,
    sets: {
      custom,
    },
  },
  theme: {
    themes: {
      light: {
        colors: {
          'background-light': '#F3F7F8',
          'background-dark': '#080b0d',

          'neutral-100': '#dfeaee',

          primary: '#F20505FF',
          secondary: '#F2E205',

          't-primary': '#080b0d',
          't-invert': '#f3f7f8',
          't-invert-secondary': '#c3d8de',
          't-secondary': '#3b5563',
        },
      },
    },
  },
  aliases: {
    BaseBtn: VBtn,
  },
  defaults: {
    BaseBtn: {
      rounded: 'pill',
      color: 'primary',
      variant: 'flat',
      style: 'text-transform: none; letter-spacing: 0;',
      class: 'fs-400',
    },
    VChip: {
      variant: 'elevated',
      class: 'fs-400',
      color: 'secondary',
    },
    VCard: {
      tile: true,
      flat: true,
    },
  },
})

export default vuetify
