<style>
	@import '../../assets/css/common.css';
	.aboutContent{
		width:97%;
		background:#fff;
		padding-left:3%;
	}
	.aboutContent p{
		margin:0;
		padding:0.4rem 3% 0.5rem 0;
		height:0.4rem;
		border-bottom:1px solid #eee;
	}
	.aboutContent p span:nth-of-type(1){
		float:left;
	}
	.aboutContent p span:nth-of-type(2){
		float:right;
	}
</style>
<template>
	<div class="container">
		<div class="aboutContent" v-if='aboutInfoData'>
			<p>
				<span>当前版本</span>
				<span>{{aboutInfoData.version}}</span>
			</p>
			<p style='border:0;'>
				<span>运营商</span>
				<span>{{aboutInfoData.merchantInfo.siteName}}</span>
			</p>
		</div>
	</div>
</template>

<script>
	import APIS from '@/utils/apis'
	let vm;
	export default{
		data(){
			return {
				aboutInfoData:undefined
			}
		},
		mounted(){
			vm = this;
			vm.aboutInfo()
		},
		methods:{
			aboutInfo(){
				APIS.aboutInfo()
				.then(function(res){
					// console.log(res)
					if(res.code != 0){
						return
					}
					vm.aboutInfoData = res.data
				})
				.catch(function(error){
					console.log(error)
				})
			}
		}
	}
</script>
