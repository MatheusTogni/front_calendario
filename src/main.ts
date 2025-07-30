import { registerPlugins } from '@/plugins'
import vuetify from './plugins/vuetify'
import httpPlugin from "@/plugins/http";

import App from './App.vue'

import { createApp } from 'vue'

import 'unfonts.css'

const app = createApp(App)
createApp(App)
  .use(vuetify)
  .mount('#app')

app.use(httpPlugin);
registerPlugins(app)

app.mount('#app')
