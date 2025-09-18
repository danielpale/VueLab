import { createPinia } from 'pinia'
import router from '@/router'

export function setup(app) {
  app.use(createPinia())
  app.use(router)
}
