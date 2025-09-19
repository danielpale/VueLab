import BaseDivider from './base/BaseDivider.vue'
import BaseSection from './base/BaseSection.vue'

export function registerComponents(app) {
  app.component('base-divider', BaseDivider)
  app.component('base-section', BaseSection)
}
