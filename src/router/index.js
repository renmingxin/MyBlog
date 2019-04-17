import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'main',
			component: () => import('@/page/Main'),
			children: [
				{ path: 'map', name: 'map', component: () => import('@/page/Map') },
				{ path: 'about', name: 'about', component: () => import('@/page/About') },
				{ path: 'message', name: 'message', component: () => import('@/page/Message') },
			]
		},
	]
})
