<style>
	.footerContainer{
		position:fixed;
		bottom:0;
		z-index:3000;
		width:100%;
		height:1.25rem;
		background:#fff;
		border-top:1px solid #eee;
	}
	.footerContainer ul{
		padding:0;
		display:flex;
		justify-content: space-around;
		margin:0;
		height:100%;
	}
	.footerContainer li{
		list-style:none;
	}
	.router-link-exact-active{
	    color:#e83030;
	}
	
	.footerContainer p{
		margin:0;
		padding-top:0.15rem;
		text-align:center;
	}
	.footerContainer p:nth-of-type(1){
		font-size:20px;
		
		margin-top:0.15rem;
	}
	.footerContainer p:nth-of-type(2){
		font-size:13px;
		padding-top:0.06rem;
	}
	.footerContainer .fotImg{
		width:0.58rem;
		height:0.38rem;
		margin-left:0.1rem;
		background-size:0.55rem,0.5rem;
	}
	.fotImg1{
		background:url(../../assets/img/T-01.png) no-repeat;
	}
	.fotImg2{
		background:url(../../assets/img/T-02.png) no-repeat;
	}
	.fotImg3{
		background:url(../../assets/img/T-03.png) no-repeat;
	}
	.footerContainer .router-link-exact-active .fotImg{
	    color:#AF282D;
	    background-position-y:-0.525rem;
	}
</style>
<template>
	<div class="footerContainer" id='footerContainer' v-if='fotShow'>
		<ul>
			<router-link to='/oneself' tag='li'>
				<p class='fotImg fotImg1'></p>
				<p>自选</p>
			</router-link>
			<router-link :to='ItemPath' tag='li'>
				<p class='fotImg fotImg2'></p>
				<p>交易</p>
			</router-link>
			<router-link :to='userPath' tag='li'>
				<p class='fotImg fotImg3'></p>
				<p>我的</p>
			</router-link>
		</ul>
	</div>

</template>

<script>
	import { getDomain } from '@/utils/auth'
	export default{
		data(){
			return{
				ItemPath:'/',
				userPath: '/user',
				fotShow:true,
				pathArr:["/","/sale","/repeal","/history","/position"]
			}
		},
		mounted(){
			let comDomain = getDomain()
			if(comDomain){
			  this.userPath = '/user/userDetail';
			}else{
			  this.userPath = '/user'
			}

			if(this.pathArr.indexOf(this.$route.path) != -1){
				this.ItemPath = this.$route.path
			}
		},
		/*底部不跳转的情况下路由的改变(即在交易的情况下选择：买入，卖出...)时执行*/
		watch:{
			$route:function(newVal){
				// console.log(newVal)
				if(this.pathArr.indexOf(newVal.fullPath) != -1){
					this.ItemPath = this.$route.path
				}
			}
		}
	}
</script>
