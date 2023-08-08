<template>
	<div class="app">
		<h2>Page w posts</h2>
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
			:posts="sortedPosts"
			@remove="removePost"
			v-if="!isPostLoading"
		/>
		<div v-else>Идет загрузка</div>
	</div>
</template>


<script>
import axios from 'axios';
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'

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
		async fetchPost(){
			try{
				setTimeout( async()=>{
					const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
					this.posts = response.data;
					this.isPostLoading = false;
				}, 1000)
				
			} catch (e){
				alert('ошибка')
			}
		}
	},
	mounted(){
		this.fetchPost();
	},
	computed: {
		sortedPosts(){
			return[...this.posts].sort((post1,post2)=>{return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
			})
		}
	},
	watch:{

	}
}

</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.app{
		padding: 10px;
	}
</style>