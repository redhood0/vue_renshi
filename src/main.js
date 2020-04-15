import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/iconfont/iconfont.css'
import 'core-js/modules/es.promise'
import 'core-js/modules/es.array.iterator'

import $axios from 'axios'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
