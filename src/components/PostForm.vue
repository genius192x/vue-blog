<template>
	<form @submit.prevent>
		<h3>Create post</h3>
		<input 
			v-model="post.title"
			class="input__create"
			type="text" 
			placeholder="Название"
		>
		<input 
			v-model="post.description"
			class="input__create" 
			type="text" 
			placeholder="Описание"
		>
		<button class="btn" @click="createPost">Create</button>
	</form>
</template>

<script>
export default{
	data(){
		return{
			post:{
				title: '',
				description: ''
			}
		}
	},
	methods: {
		createPost(){
			console.log(this.post.title);
			this.post.id = Date.now();
			this.$emit('create', this.post);
			this.post = {
				title: '',
				description:''

			}
		}
	}
}
</script>

<style lang="scss">
	
	.input{
		&__create{
			border: 1px solid teal;
			padding: 10px;
			margin-right: 15px;
			border-radius: 4px;
		}
	}
	.btn{
		border: 1px solid teal;
		padding: 10px;
		margin-right: 15px;
		border-radius: 4px;
		background: teal;
		color: white;
	}
</style>