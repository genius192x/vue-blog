<template>
	<navbar></navbar>
	<div class="app">
		<router-view></router-view>
	</div>
</template>


<script>

import Navbar from '@/components/Navbar'
export default {
	components:{
		Navbar
	}
}

</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.app{
		padding: 10px;
	}
	.page__wrapper{
		display: flex;
		gap: 10px;
		margin-top: 25px;
	}
	.pageNumber{
		padding: 5px;
		border-radius: 5px;
		border: 1px solid #000;
	}
	.current__page{
		background: teal;
		color: white;
	}
	.observer{
		height: 50px;
		background:	teal;
		opacity: 0;
	}
</style>