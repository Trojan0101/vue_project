import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview.vue'
import ModuleLogs from '../views/ModuleLogs.vue'
import CombinedLogs from '../views/CombinedLogs.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
		path: '/',
		name: 'ModuleLogs',
		component: ModuleLogs
		},
		{
		path: '/modulelogs',
		name: 'ModuleLogs',
		component: ModuleLogs
		},
		{
		path: '/overview',
		name: 'Overview',
		component: Overview
		},
		{
		path: '/combinedlogs',
		name: 'CombinedLogs',
		component: CombinedLogs
		}
	]
})

export default router
