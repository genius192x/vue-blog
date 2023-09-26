import Main from '@/pages/Main'
import PostsPage from '@/pages/PostsPage'
import About from '@/pages/About'
import PostIdPage from '@/pages/PostIdPage'
import PostsPageWithStroe from '@/pages/PostsPageWithStroe'
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
	},
	{
		path: '/posts/:id',
		component: PostIdPage
	},
	{
		path: '/store',
		component: PostsPageWithStroe
	}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routers,
});

export default router;