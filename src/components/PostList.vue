<template>
	<div class="post" v-for="post in posts">
		<div class="post__title"><strong>Название:</strong>{{ post.title }}</div>
		<div class="post__description"><strong>Описание:</strong>{{ post.description }}</div>
	</div>
</template>

<script>
export default{
	props: {
		posts: {
			type: Array,
			required: true
		}
	}
}
</script>

<style lang="scss">
	.post{
		margin: 10px;
		padding: 20px;
		border: 2px solid teal;
		border-radius: 4px;
		max-width: 300px;
		&__title{
			font-size: 24px;
		}
	}
</style>