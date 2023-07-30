<template>
	<div class="app">
		<h2>Page w posts</h2>
		<my-button 
			@click="showDialog">
			Create post
		</my-button>
		<my-dialog v-model:show="dialogVisible">
			<PostForm
				@create ="createPost"
			/>
		</my-dialog>
		<PostList 
			:posts="posts"
			@remove="removePost"
		/>
		
	</div>
</template>


<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
export default {
	components:{
		PostForm, PostList
	},
	data(){
		return{
			posts:[
				{
					id:1, 
					title: "title1", 
					description:'description'
				},
				{
					id:2, 
					title: "title2", 
					description:'description'
				},
				{
					id:3, 
					title: "title3", 
					description:'description'
				},
			],
			dialogVisible: false
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
		}
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