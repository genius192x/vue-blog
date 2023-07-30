<template>
	<div v-if="posts.length > 0">
		<h3>Post list</h3>
		<post-item 
		v-for="post in posts"
		:post="post"
		:key="post.id"
		@remove="$emit('remove',post)"
		/>
	</div>
	<h2 v-else="posts.length < 1">
		Post list is clear
	</h2>
</template>

<script>
import PostItem from './PostItem.vue';
export default{
	components: {PostItem},
	props: {
		posts: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss">
	
</style>