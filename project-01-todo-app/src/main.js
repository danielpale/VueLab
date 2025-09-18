import { createApp } from 'vue'
import App from './App.vue'

import { setup } from './plugins'

// import './main.css'

const app = createApp(App)

setup(app)

app.mount('#app')
