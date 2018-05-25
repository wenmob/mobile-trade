<style>
  .numeric-container{
      position: fixed;
      width: 100%;
      height: 5.2rem;
      background-color: white;
      left: 0px;
      bottom: 0rem;
      z-index: 6000;    
  }
  .numeric-control{
      padding: 0rem 0.20rem;
      height: 0.873rem;
      background:#DBDBDB;
      border-bottom-style: none;
  }
  .numeric-control .btn{
      background-color:transparent;
      color: #2764EA;
      font-size: 0.4rem;
      width: 1.2rem;
      height: 0.86rem;
      float: right;
      cursor: pointer;
  }
  .numeric-table{
      width: 100%;
      border-collapse: collapse;
  }
  .numeric-table td{
      border:0.03rem solid #ccc;
      height: 1rem;
  }
  .numeric-btn{
      display: inline-block;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: 0.40rem;
      background-color: white;
  }
  .numeric-btn1{
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: white;
    background-image: url('../../assets/img/delete.png');
    background-repeat: no-repeat;
    background-size: 0.6rem;
    background-position: 50%;
  }
  .upShow-enter-active{
     animation: bounce-in .5s;
     -webkit-animation: bounce-in .5s;
  }
  .upShow-leave-active{
     animation: bounce-out .5s;
     -webkit-animation: bounce-out .5s;
  }
 
  @keyframes bounce-in {
    0% {
        bottom: -5.2rem;
    }
    25% {
        bottom: -3.9rem;
    }
    50% {
       bottom: -2.6rem; 
    }
    75% {
       bottom: -1.3rem; 
    }
    100% {
       bottom: 0rem; 
    }
  }
  @keyframes bounce-out {
    0% {
        bottom: 0rem;
    }
    25% {
        bottom: -1.3rem;
    }
    50% {
       bottom:-2.6rem; 
    }
    75% {
       bottom:-3.9rem; 
    }
    100% {
       bottom: -5.2rem; 
    }
  }
</style>

<template>
   <transition name="upShow">
   <div class="numeric-container" v-show="canvaShow">
      <div class="numeric-control">
         <input type="button" class="btn" value="完成" @click="canvaClick"/>
      </div> 
      <table class="numeric-table">
          <tr>
              <td><input type="button" class="numeric-btn" value="1"/></td>
              <td><input type="button" class="numeric-btn" value="2"/></td>
              <td><input type="button" class="numeric-btn" value="3"/></td>
          </tr>
          <tr>
              <td><input type="button" class="numeric-btn" value="4"/></td>
              <td><input type="button" class="numeric-btn" value="5"/></td>
              <td><input type="button" class="numeric-btn" value="6"/></td>
          </tr>
          <tr>
              <td><input type="button" class="numeric-btn" value="7"/></td>
              <td><input type="button" class="numeric-btn" value="8"/></td>
              <td><input type="button" class="numeric-btn" value="9"/></td>
          </tr>
          <tr>
              <td><input type="button" class="numeric-btn" value="."/></td>
              <td><input type="button" class="numeric-btn" value="0"/></td>
              <td><input type="button" class="numeric-btn1" value=""/></td>
          </tr>
      </table>
   </div>
   </transition> 
</template>
<script>
export default {
   data() {
       return{
           canvaShow: false
       }
   },
   methods: {
     canvaClick(){
      let _this = this;
       _this.canvaShow = false;
    }
   }
   
}
</script>

