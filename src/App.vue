<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import { flexible } from "@/assets/js/flexible.js";
export default {
  name: 'App',
  beforeCreate() {
    let win = window;
    let lib =  window['lib'] || (window['lib'] = {});
    flexible(win,lib);
  },
  	mounted(){
  }
}
</script>

<style>
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px /* 0/16 */;
  width: 100%;
  height: 100%;
}
[data-dpr="1"] #app {
   font-size: 16px;
}
[data-dpr="2"] #app {
   font-size: 32px;
}
[data-dpr="3"] #app {
   font-size: 48px;
}
</style>
