<template>
<form @submit.prevent>
    <h3>Create post</h3>
    <my-input 
		v-model.trim="post.title" 
		class="input__create"
		type="text" 
		placeholder="Название">
	</my-input>
    <my-input
		v-model.trim="post.body" 
		class="input__create" 
		type="text" 
		placeholder="Описание">

	</my-input>
    <my-button 
		class="btn" 
		@click="createPost">
		Create
	</my-button>
</form>
</template>

<script>
import MyButton from '@/components/UI/MyButton'
export default {
    components: {
        MyButton
    },
    data() {
        return {
            post: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post);
            this.post = {
                title: '',
                description: ''
            }
        }
    }
}
</script>

<style lang="scss">

</style>
