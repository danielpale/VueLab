import { createPinia } from 'pinia'
import router from '@/router'
import vuetify from './vuetify'
import { registerComponents } from '@/components'

export function setup(app) {
  app.use(createPinia())
  app.use(router)
  app.use(vuetify)
  registerComponents(app)
}
