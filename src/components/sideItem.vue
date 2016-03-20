<template>
	<li class="sideItem">
		<a href="#">
			<span class="name">XXXX{{gxr}}</span>
			<img src="#">
		</a>
	</li>
</template>
<style lang="sass">
	.sideItem{
		background-color:red;
		.name{
			color:green;
		}
	}
</style>
<script >
	export default{
		name:'sideItem',
		props:{
			gxr:String
		},
		computed:{

		}
	}
</script>