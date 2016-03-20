<template>
	<nav id="warp">
		<ul class="side">
			<side-item v-for="item in items" :gxr="gxr"></side-item>
		</ul>
		<div class="mainView">
			<router-view></router-view>
			<footer class="footer">
				<ul class="characterList">
					
				</ul>
			</footer>
		</div>
	</nav>
</template>
<script>
	import sideItem from './sideItem.vue';
	console.log(sideItem)
	export default{
		//组件
		components:{
			sideItem
		},
		data(){
			return {
				gxr:'1020',
				items:[1,2,3,4]
			}
		}

	}
</script>
<style lang="sass">
	*{
		box-sizing: border-box;
	}
	html,body,#warp{
		height: 100%;
	}
	ul,li,body{
		margin: 0;
		padding: 0;
	}
	ul{
		list-style: none;
	}

	.side{
		float:left;	
		width: 200px;
		height: 100%;
		background-color:green;
	}
	.mainView{
		overflow: auto;
		position:relative;
		height: 100%;
		padding-bottom: 100px;
	}
	.footer{
		position:absolute;
		bottom:0;
		width: 100%;
		height: 100px;
		background-color:yellow;
	}
</style>