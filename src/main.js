import { createApp } from 'vue'
import App from './App'
import components from './components/UI'
import routes from './router/index'
import store from './store'

const app = createApp(App)

components.forEach(component => {
	app.component(component.name, component)
})

app
.use(routes)
.use(store)
.mount('#app')
