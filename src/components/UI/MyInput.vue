<template>
	<input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
	name: 'my-input',
	props: {
		modelValue: [String, Number]
	},
	methods:{
		updateInput(event){
			this.$emit('update:modelValue', event.target.value)
		}
	}
}
</script>

<style lang="scss">
.input {
	height: 30px;
	@media (max-width: 768px){
		width: 100%;
	}
    &__create {
        border: 1px solid teal;
        padding: 10px;
        margin-right: 15px;
        border-radius: 4px;
    }
}
</style>