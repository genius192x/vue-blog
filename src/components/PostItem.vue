<template>
	<div class="post">
		<div>
			<div class="post__title"><strong>Название:</strong>{{ post.title }}</div>
			<div class="post__description"><strong>Описание:</strong>{{ post.description }}</div>
		</div>
		<div class="post__buttons">
			<my-button
				@click="$emit('remove', post)"
			>Delete</my-button>
		</div>
	</div>
</template>

<script>
import MyButton from '@/components/UI/MyButton'
	export default {
		components: {MyButton},
		props:{
			post:{
				type: Object,
				required: true,
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
		display: flex;
		align-items: center;
		justify-content: space-between;
		&__title{
			font-size: 24px;
		}
	}
</style>