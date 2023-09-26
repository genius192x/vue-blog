<template>
	<div class="post">
		<div class="post__content">
			<div class="post__title"><strong>Название:</strong>{{ post.title }}</div>
			<div class="post__body"><strong>Описание:</strong>{{ post.body }}</div>
		</div>
		<div class="post__buttons">
			<my-button
				@click="$emit('remove', post)"
			>Delete</my-button>
			<my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>
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
		padding: 10px;
		border: 2px solid teal;
		border-radius: 4px;
		// max-width: 300px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media (min-width: 768px){
			padding: 20px;
		}
		&__content{
			text-align: left;
		}
		&__buttons{
			margin-left: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
		}
		&__title{
			@media (min-width: 768px){
				  font-size: 24px;
			}
			font-size: 16px;
		}
		&__body{
			@media (min-width: 768px){
				  font-size: 26px;
			}
			font-size: 14px;
		}
	}
</style>