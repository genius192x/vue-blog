<template>
	<div>
		<h2>Page w posts</h2>
		<my-input
		v-model="searchQuery"
		placeholder="Search post"
		></my-input>
		<div class="app__buttons">
			<my-button 
				@click="showDialog">
				Create post
			</my-button>
			<my-select 
			v-model="selectedSort"
			:options="sortOptions"
			></my-select>
		</div>
		
		<my-dialog v-model:show="dialogVisible">
			<PostForm
				@create ="createPost"
			/>
		</my-dialog>
		<PostList 
			:posts="sortedAndSearchPosts"
			@remove="removePost"
			v-if="!isPostLoading"
		/>
		<div v-else>Идет загрузка</div>
		<div ref="observer" class="observer"></div>
		<!-- <div class="page__wrapper">
			<div 
			v-for="pageNumber in totalPage" 
			:key="pageNumber" 
			class="pageNumber"
			:class="{
				'current__page': page === pageNumber
			}"
			@click="changePage(pageNumber)"
			>{{ pageNumber }}</div>
		</div> -->
	</div>
</template>


<script>
import axios from 'axios';
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
	components:{
		PostForm, PostList
	},
	data(){
		return{
			posts:[],
			dialogVisible: false,
			isPostLoading: true,
			selectedSort: '',
			searchQuery: '',
			page: 1,
			limit: 15,
			totalPage: 8,
			sortOptions:[
				{
					value: 'title',
					name: 'По заголовку'
				},
				{
					value: 'body',
					name: 'По описанию'
				},
			]
		}
	},
	methods:{
		createPost(post){
			this.posts.push(post);
			this.dialogVisible = false
		},
		removePost(post){
			this.posts = this.posts.filter(p=> p.id !== post.id)
		},
		showDialog(){
			this.dialogVisible = true
		},
		// changePage(pageNumber){
		// 	this.page = pageNumber
		// },
		async fetchPost(){
			try{
				setTimeout( async()=>{
					this.isPostLoading = true;
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
						params: {
							_page: this.page,
							_limit: this.limit
						}
					});
					this.totalPage = Math.ceil(response.headers['x-total-count']/ this.limit) 
					this.posts = response.data;
					this.isPostLoading = false;
				}, 1000)
				
			} catch (e){
				alert('ошибка')
			}
		},
		async loadMorePosts(){
			try{
				setTimeout( async()=>{
					this.page += 1;
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
						params: {
							_page: this.page,
							_limit: this.limit
						}
					});
					this.totalPage = Math.ceil(response.headers['x-total-count']/ this.limit) 
					this.posts = [...this.posts, ...response.data];
				}, 1000)
				
			} catch (e){
				alert('ошибка')
			}
		}
	},
	mounted(){
		this.fetchPost();
		console.log(this.$refs.observer);
		let options = {
			rootMargin: "0px",
			threshold: 1.0,
		};
		const callback = (entires, observer) => {
			if (entires[0].isIntersecting && this.page < this.totalPage){
				this.loadMorePosts()
			}
		};
		let observer = new IntersectionObserver(callback, options);
		observer.observe(this.$refs.observer);
	},
	computed: {
		sortedPosts(){
			return[...this.posts].sort((post1,post2)=>{return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
			})
		},
		sortedAndSearchPosts(){
			return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
		}
	},
	watch:{
		// page(){
		// 	this.fetchPost()
		// }
	}
}

</script>

<style lang="scss">
	
	.app{
		padding: 10px;
	}
	.page__wrapper{
		display: flex;
		gap: 10px;
		margin-top: 25px;
	}
	.pageNumber{
		padding: 5px;
		border-radius: 5px;
		border: 1px solid #000;
	}
	.current__page{
		background: teal;
		color: white;
	}
	.observer{
		height: 50px;
		background:	teal;
		opacity: 0;
	}
</style>