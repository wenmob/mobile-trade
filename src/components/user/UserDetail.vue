<style>
   @import '../../assets/css/common.css';
   .userInfo{
		width:97%;
		background:#fff;
		padding-left:3%;
	}
	.userAbout{
		width:97%;
		background:#fff;
		padding-left:3%;
		margin-top:0.3rem;
	}
	.userContent p{
		margin:0;
		padding:0.4rem 3% 0.5rem 0;
		height:0.4rem;
		border-bottom:1px solid #eee;
	}
	.userContent p span:nth-of-type(1){
		float:left;
	}
	.userContent p span:nth-of-type(2){
		float:right;
	}
	.userContent p img{
		width:0.35rem;
		height:0.6rem;
	}
	.userContent button{
		width:90%;
		height:1.1rem;
		margin:1rem 5%;
		border:0;
		color:#fff;
		background:#F70303;
		border-radius:0.1rem;
		outline:0;
	}
</style>
<template>
   <div class='container'>
       <div class='userContent'>
            <div class="userInfo">
                <p v-if="userInfoData.orderNumber">
					<span>订单号</span>
					<span>{{userInfoData.orderNumber}}</span>
				</p>
				<p>
					<span>姓名</span>
					<span>{{userInfoData.name}}</span>
				</p>
                <p>
					<span>保证金</span>
					<span>{{userInfoData.bzj}}</span>
				</p>
                <p>
					<span>借款金额</span>
					<span>{{userInfoData.jkje}}</span>
				</p>
				<p>
					<span>平仓线</span>
					<span>{{userInfoData.closePositionLine}}</span>
				</p>
                <p>
					<span>警戒线</span>
					<span>{{userInfoData.warningLine}}</span>
				</p>
                <p>
					<span>状态</span>
					<span>{{userInfoData.isForbidBuyStr}}</span>
				</p>
                <button @click='backTrade'>返回交易</button>
			</div>
       </div> 
       <fot></fot>   
   </div>
</template>
<script>
   import fot from '@/components/plugin/Footer'
   import APIS from '@/utils/apis'
   import { getDomain } from '@/utils/auth'
   let vm;
   export default{
      data() {
          return {
             userInfoData:{
                id: "--",
                bzj: "--",
                jkje: "--",
                closePositionLine: "--",
                warningLine: "--",
                isForbidBuyStr: "--"
             }
          }
      },
      beforeDestroy() {
          vm = undefined;
      },
      components:{
			'fot':fot
	  },
      mounted() {
         vm = this;
         vm.userOfcont();
      },
      methods: {
        userOfcont(){
            APIS.userInfo().then(res => {
                if(res.code == 0){
                    let obj = res.data;
                    if(obj.isForbidBuy){
                        obj.isForbidBuyStr = "禁开仓"
                    }else{
                       obj.isForbidBuyStr = "正常" 
                    }
					vm.userInfoData = obj
				}
					
            }).catch(function(error){
				console.log(error)
		    })
        },
        backTrade() {
          let domain = getDomain();
          window.location.href = domain;
        }
      }
   }
</script>

