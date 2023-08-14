import Main from '@/pages/Main'
import PostsPage from '@/pages/PostsPage'
import About from '@/pages/About'
import {createRouter, createWebHistory} from "vue-router"
const routers = [
	{
		path: '/',
		component: Main
	},
	{
		path: '/posts',
		component: PostsPage
	},
	{
		path: '/about',
		component: About
	}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers,
});

export default router;