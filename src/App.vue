<template>
	<div>
		<PostForm
			@create ="createPost"
		/>
		<PostList 
			:posts="posts"
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
					id:2, 
					title: "title3", 
					description:'description'
				},
			],
		}
	},
	methods:{
		createPost(post){
			this.posts.push(post);
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
	
</style>