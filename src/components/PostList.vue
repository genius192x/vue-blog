<template>
	<div v-if="posts.length > 0">
		<h3>Post list</h3>
			<TransitionGroup name="post-list">
				<post-item 
					v-for="post in posts"
					:post="post"
					:key="post.id"
					@remove="$emit('remove',post)"
				/>
			</TransitionGroup>
	
	</div>
	<h2 v-else="posts.length < 1">
		Post list is clear
	</h2>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
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
	.post-list-item {
		display: inline-block;
		margin-right: 10px;
	}
	.post-list-enter-active,
	.post-list-leave-active {
		transition: all 1s ease;
	}
	.post-list-enter-from{
		opacity: 0;
		transform: translateX(-100%);
	}
	.post-list-leave-to {
	opacity: 0;
	transform: translateX(100%);
	}
	.post-list-move {
	transition: transform 0.8s ease;
	}
</style>