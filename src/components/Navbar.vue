<template>
	<div class="navbar">
		<div @click="$router.push('/')">First blog 0.0</div>
		<div class="navbar__btns">
			<my-button @click="$router.push('/posts')">Посты</my-button>
			<my-button @click="$router.push('/about')">О сайте</my-button>
			<my-button @click="$router.push('/store')">Store</my-button>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss">
	.navbar{
		height: 50px;
		background: teal;
		box-shadow: 2px 2px 4px gray;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
</style>