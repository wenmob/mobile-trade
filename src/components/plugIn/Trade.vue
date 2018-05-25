<style>
  .trade-container{
      position: relative;
      width: 100%;
      height: auto;
      background: #fff;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: 0.26rem;
      padding-bottom: 0.28rem;
      overflow: auto;
  }
  .tr-left{
      width: 62%;
      height: auto;
  }
  .tr-right{
      width: 38%;
      height: auto;
  }
  .tr-left-cont{
      position: relative;
      padding-left: .4125rem;
  }
 input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{
    -webkit-appearance: none !important;
 }
 .clearOne{
     display: inline-block;
     background-image: url("../../assets/img/clear.png");
     background-repeat: no-repeat;
     background-size: cover;
     width: 0.48rem;
     height: 0.47rem;
     cursor: pointer;
     position: absolute;
     top: 0.23rem;
     left: 5.41rem;
 }
  .inputOne{
     border: 0.03rem solid #F70303;
     border-radius: 0px;
     height: 0.63rem;
     width: 5.15rem;
     font-size: 0.42rem;
     padding-top: 0.1rem;
  }
  .inputTwo{
    margin-top: 0.30rem;
  }
  .inputTwo .btn1{
     background: #fff;
     border-radius: 0px;
     color: white;
     width: 1.0rem;
     height:0.91rem;
     background-image: url('../../assets/img/sub_x.png');
     background-size: 90% 94%;
     background-repeat: no-repeat;
     background-position: 0.05rem 0.05rem;
     float: left;
     cursor: pointer;
     border-top:0.03rem solid #F70303;
     border-left:0.03rem solid #F70303;
     border-bottom:0.03rem solid #F70303;
  }
  .inputTwo .btn1_lan{
    background: #fff;
     border-radius: 0px;
     color: white;
     width: 1.0rem;
     height:0.91rem;
     background-image: url('../../assets/img/sub_y.png');
     background-size: 90% 94%;
     background-repeat: no-repeat;
     background-position: 0.05rem 0.05rem;
     float: left;
     cursor: pointer;
     border-top:0.03rem solid #1298FF;
     border-left:0.03rem solid #1298FF;
     border-bottom:0.03rem solid #1298FF;
  }
  .inputTwo .inp1{
     border: 0.03rem solid #F70303;
     border-radius: 0px;
     width: 3.16rem;
     height: 0.635rem;
     font-size: 0.42rem;
     padding-top: 0.1rem;
     text-align: center;
     float: left;
  }
  .inputTwo .btn2{
     background: #fff;
     border-radius: 0px;
     color: white;
     width: 1.0rem;
     height:0.91rem;
     background-image: url('../../assets/img/add_x.png');
     background-size: 90% 94%;
     background-repeat: no-repeat;
     background-position: 0.05rem 0.05rem;
     float: left;
     cursor: pointer;
     border-top:0.03rem solid #F70303;
     border-right:0.03rem solid #F70303;
     border-bottom:0.03rem solid #F70303;
  }
  .inputTwo .btn2_lan{
     background: #fff;
     border-radius: 0px;
     color: white;
     width: 1.0rem;
     height:0.91rem;
     background-image: url('../../assets/img/add_y.png');
     background-size: 90% 94%;
     background-repeat: no-repeat;
     background-position: 0.05rem 0.05rem;
     float: left;
     cursor: pointer;
     border-top:0.03rem solid #1298FF;
     border-right:0.03rem solid #1298FF;
     border-bottom:0.03rem solid #1298FF;
  }
  .tlc-d1 {
     margin-top: 0.16rem;
     width: 5.58rem;
  }
  .tlc-d1 > span{
    display: inline-block;
    border: 1px solid #d6d6d6;
    padding: 2px 5px;
    border-radius: 2px;
    background-color: #f6f6f6;
  }
  .tlc-d1 .s1{
      font-size: 0.30rem;
      color: #2E2E2E;
      float: left;
      font-weight: 500;
  }
  .tlc-d1 .s2{
      font-size: 0.30rem;
      color: #2E2E2E;
      float: right;
      font-weight: 500;
  }
  .inputThree{
    margin-top: 0.16rem;
    width: 5.54rem;
    height: 0.87rem;
    border:0.03rem solid #F70303;
  }
  .inputThree .inp1{
     font-size: 0.42rem;
     padding-top: 0.16rem;
     width: 3.0rem;
     border-radius: 0px;
     float: left;
  }
  .inputThree .s1{
      float: right;
      font-size: 0.34rem;
      margin-top: 0.24rem;
      margin-right: 0.15rem;
  }
  .tlc-d2{
      margin-top: 0.24rem;
      width: 5.58rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
  }
  .tlc-d2 a{
      display: inline-block;
      border:0.03rem solid #E8E8E8;
      font-size: 0.34rem;
      color: #4A4A4A;
      padding: 0.12rem 0.20rem;
      border-radius: 0.1rem;
      background: #fff;
  }
  .sub-a{
      display: block;
      width: 5.58rem;
      background: #F70303;
      color: white;
      text-align: center;
      font-size: 0.48rem;
      margin-top: 0.26rem;
      border-radius: 0.1rem;
      height: 0.86rem;
      line-height: 0.86rem;
      cursor: pointer;
  }
  .tr-right-cont{
      padding-right: .4125rem;
  }
  .trd1{
    border:0.03rem solid #D2D2D2;
    height: 2.88rem;
  }
  .trd2{
     border:0.03rem solid #D2D2D2;
     height: 2.88rem;
     border-top-style: none;
  }
  .tr-mod{
    padding: 0.12rem 0.1rem;
  }
  .tr-mod .s1{
    font-size: 0.32rem;
    float: left;
    font-weight: 500;
  }
  .tr-mod .s2{
    font-size: 0.32rem;
    float: left;
    margin-left: 0.6rem;
    font-weight: 500;
  }
  .tr-mod .s3{
    font-size: 0.32rem;
    float: right;
    font-weight: 500;
  }
  .popMode{
      position: absolute;
      width: 5.57rem;
      height: 5.1rem;
      top: 0.91rem;
      left: 0.40rem;
      background-color:#fff;
      border:0.03rem solid #EAEAEA;
      border-top-style: none;
      overflow: auto;
  }
  .popMode-sp{
      display: block;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
      height: 0.7rem;
      line-height: 0.7rem;
      font-size: 0.34rem;
      overflow: hidden;
  }
  .popNb{
    padding: 0px 30px;
    line-height: 1;
  }
  .popNb span{
    font-size: 0.36rem;
  }
  .popNb .d1 p{
    float: left;
    width: 50%;
    text-align: left;
  }
  .popNb .d1 p span:first-child{
    display: inline-block;
  }
  .popNb .d1 p span:last-child{
    display: inline-block;
    color: #F70303;
  }
  .popNb .d2 p{
    float: left;
    width: 50%;
    text-align: left;
  }
  .popNb .d2 p span:last-child{
    display: inline-block;
    color: #F70303;
  }
  .popNb .d3 p{
    float: left;
    width: 50%;
    text-align: left;
  }
  .popNb .d3 p span:last-child{
    display: inline-block;
    color: #F70303;
  }
</style>
<template>
  <div class="trade-container">
    <div class="tr-left">
        <div class="tr-left-cont">
          <input class="inputOne" :placeholder="strOne" :style="type == 0?'border:0.03rem solid #F70303':'border:0.03rem solid #1298FF'" v-model="subform.stockStr" @input="searchStock()" @focus="inputOneFocus" @blur="inputOneBlur"/>
          <a class="clearOne" v-show="isClear" @click="clearBtn"></a>
          <div class="inputTwo">
              <input type="button" :class="type == 0? 'btn1' : 'btn1_lan'" @click="sub"/>
              <input type="text" class="inp1" :placeholder="type == 0 ? '买入价': '卖出价'" :style="type == 0?'border:0.03rem solid #F70303':'border:0.03rem solid #1298FF'" v-model="subform.price" onkeyup="value=value.replace(/[^\d\.]/g,'')" onblur="value=value.replace(/[^\d\.]/g,'')" @blur="BuyOrSale"/>
              <input type="button" :class="type == 0? 'btn2' : 'btn2_lan'" :style="type == 0?'border-color: #F70303':'border-color: #1298FF'" @click="addSum"/>
              <div style="clear:both"></div>
          </div>
          <div class="tlc-d1">
            <span class="s1" @click="die">跌停 <span style="color:#17B73B">{{downStr}}</span></span>
            <span class="s2" @click="zhang">涨停 <span style="color:red">{{upStr}}</span></span>
            <div style="clear:both"></div>
          </div>
          <div class="inputThree" :style="type == 0?'border:0.03rem solid #F70303':'border:0.03rem solid #1298FF'">
              <input type="number" pattern="[0-9]*" class="inp1" :placeholder="type == 0 ? '买入量': '卖出量'" v-model="subform.number" @blur="filling"/>
              <span class="s1">{{type == 0? "可买"+canBuyStock+"股":"可卖"+canBuyStock+"股"}}</span>
              <div style="clear:both"></div>
          </div>
          <div class="tlc-d2">
            <a v-for="pos in posParts" :style="pos.aStyle" @click="posClick(pos.val)" >{{pos.name}}</a>
          </div>
          <a class="sub-a" :style="type == 0 ? 'background: #F70303;':'background-color: #1298FF'" @click="handIng">{{type == 0 ? '买入' : '卖出'}}</a>
          <!--搜索框-->
          <div class="popMode" v-show="popIsShow">
              <span class="popMode-sp" v-for="(popArray,index) in popArrays" :style="index==0?'background-color:#298BD8;color:white':''" @click.self="startShowBuySale(popArray.stockCode,popArray.stockName)">{{popArray.stockCode + " - " + popArray.stockName}}</span>
          </div>
        </div>
    </div>
    <div class="tr-right">
        <div class="tr-right-cont">
         <div class="trd1">
           <div class="tr-mod" @click="setAssign(posRig[29])">
               <span class="s1">卖5</span>
               <span class="s2" :style="styleStatus(posRig[29],posRig[2])">{{posRig[29]==""||posRig[29]==undefined?"--":(posRig[29]*1).toFixed(2)}}</span>
               <span class="s3">{{posRig[28]==""||posRig[28]==undefined?"--":Math.round(posRig[28]/100)}}</span>
               <div style="clear:both"></div>
            </div>
            <div class="tr-mod" @click="setAssign(posRig[27])">
               <span class="s1">卖4</span>
               <span class="s2" :style="styleStatus(posRig[27],posRig[2])">{{posRig[27]==""||posRig[27]==undefined?"--":(posRig[27]*1).toFixed(2)}}</span>
               <span class="s3">{{posRig[26]==""||posRig[26]==undefined?"--":Math.round(posRig[26]/100)}}</span>
               <div style="clear:both"></div>
            </div>
            <div class="tr-mod" @click="setAssign(posRig[25])">
               <span class="s1">卖3</span>
               <span class="s2" :style="styleStatus(posRig[25],posRig[2])">{{posRig[25]==""||posRig[25]==undefined?"--":(posRig[25]*1).toFixed(2)}}</span>
               <span class="s3">{{posRig[24]==""||posRig[24]==undefined?"--":Math.round(posRig[24]/100)}}</span>
               <div style="clear:both"></div>
            </div>
            <div class="tr-mod" @click="setAssign(posRig[23])">
               <span class="s1">卖2</span>
               <span class="s2" :style="styleStatus(posRig[23],posRig[2])">{{posRig[23]==""||posRig[23]==undefined?"--":(posRig[23]*1).toFixed(2)}}</span>
               <span class="s3">{{posRig[22]==""||posRig[22]==undefined?"--":Math.round(posRig[22]/100)}}</span>
               <div style="clear:both"></div>
            </div>
            <div class="tr-mod" @click="setAssign(posRig[21])">
               <span class="s1">卖1</span>
               <span class="s2" :style="styleStatus(posRig[21],posRig[2])">{{posRig[21]==""||posRig[21]==undefined?"--":(posRig[21]*1).toFixed(2)}}</span>
               <span class="s3">{{posRig[20]==""||posRig[20]==undefined?"--":Math.round(posRig[20]/100)}}</span>
               <div style="clear:both"></div>
            </div>
         </div>
         <div class="trd2">
            <div class="tr-mod" @click="setAssign(posRig[11])">
               <span class="s1">买1</span>
               <span class="s2" :style="styleStatus(posRig[11],posRig[2])">{{posRig[11]==""||posRig[11]==undefined?"--":(posRig[11]*1).toFixed(2)}}</span>
               <span class="s3">{{posRig[10]==""||posRig[10]==undefined?"--":Math.round(posRig[10]/100)}}</span>
               <div style="clear:both"></div>
            </div>
            <div class="tr-mod" @click="setAssign(posRig[13])">
               <span class="s1">买2</span>
               <span class="s2" :style="styleStatus(posRig[13],posRig[2])">{{posRig[13]==""||posRig[13]==undefined?"--":(posRig[13]*1).toFixed(2)}}</span>
               <span class="s3">{{posRig[12]==""||posRig[12]==undefined?"--":Math.round(posRig[12]/100)}}</span>
               <div style="clear:both"></div>
            </div>
            <div class="tr-mod" @click="setAssign(posRig[15])">
               <span class="s1">买3</span>
               <span class="s2" :style="styleStatus(posRig[15],posRig[2])">{{posRig[15]==""||posRig[15]==undefined?"--":(posRig[15]*1).toFixed(2)}}</span>
               <span class="s3">{{posRig[14]==""||posRig[14]==undefined?"--":Math.round(posRig[14]/100)}}</span>
               <div style="clear:both"></div>
            </div>
            <div class="tr-mod" @click="setAssign(posRig[17])">
               <span class="s1">买4</span>
               <span class="s2" :style="styleStatus(posRig[17],posRig[2])">{{posRig[17]==""||posRig[17]==undefined?"--":(posRig[17]*1).toFixed(2)}}</span>
               <span class="s3">{{posRig[16]==""||posRig[16]==undefined?"--":Math.round(posRig[16]/100)}}</span>
               <div style="clear:both"></div>
            </div>
            <div class="tr-mod" @click="setAssign(posRig[19])">
               <span class="s1">买5</span>
               <span class="s2" :style="styleStatus(posRig[19],posRig[2])">{{posRig[19]==""||posRig[19]==undefined?"--":(posRig[19]*1).toFixed(2)}}</span>
               <span class="s3">{{posRig[18]==""||posRig[18]==undefined?"--":Math.round(posRig[18]/100)}}</span>
               <div style="clear:both"></div>
            </div>
         </div>
        </div>
    </div>
  </div>
</template>
<script>
import APIS from '@/utils/apis'
import { getStock,getBuyAndSale } from '@/utils/utools'
import Numeric from '@/components/plugIn/Numeric'
import { setStatuc } from '@/utils/request'
export default {
  data() {
      return {
        currentPosNum:0,
        onceInput2:true,
        isClear: false,
        currentN: 1, //当前是什么仓 全 1/2 1/3
        type:0, //对界面是买入、卖出
        popIsShow: false, //弹出框的显示及隐藏
        strOne: "股票代码/名称首字母",
        downStr: 0, //跌停
        upStr: 0,  //涨停
        yesterPrice: 0,
        payStr: "--",
        styleStatus:(p1,p2) =>{ //对右边状态的把控 p1是当前值 p2是昨天收盘价
           if(p1 > p2){
               return "color:red"
           }else if(p1 < p2){
               if(p1 == 0){
                   return "color:#363636"
               }
               return "color:#17B73B"
           }else{
               return "color:#363636"
           }
        },
        popArrays: [], //弹出框显示股票的数据
        subform: { //提交的form表单
          stockStr: '',
          stockCode: '',
          stockName: '',
          number: "",
          price: ""
        },
        posParts: [
            {val:1, name: "全仓", aStyle: "color:#4A4A4A; background:#fff"},
            {val:1/2, name:"半仓", aStyle: "color:#4A4A4A; background:#fff"},
            {val:1/3, name:"1/3仓",aStyle: "color:#4A4A4A; background:#fff"},
            {val:1/4, name:"1/4仓",aStyle: "color:#4A4A4A; background:#fff"}
        ],
        posRig:[],//右边买入 卖出
        myPrice: 0,//我所拥有的余额
        canBuyStock: '--',//可买卖的股票
        isSubmit1: false, //判断是否可以提交
        isSubmit2: false, //判断是否可以提交
        isSubmit3: false, //判断是否可以提交
        showBuySale: undefined, //循环遍历
        startInput:false,
        canbs:true,//循环的问题
        canBuyNum:[

        ],
        totalAssets: 0,
        warningLine: 0
      }

  },
  components: {
     "numeric": Numeric
  },
 beforeDestroy() {
    this.isSubmit1 = false;
    this.isSubmit2 = false;
    this.isSubmit3 = false;
    this.stopShowBuySale();
 },
  mounted() {
    this.checkQuery();
  },
  methods: {
      //输入股票代码的输入框获取焦点
     inputOneFocus() {
        let _this = this;
        _this.isClear = true;
      },
     //输入股票代码的输入框失去焦点
     inputOneBlur() {
        let _this = this;
        _this.isClear = false;
     },
     //刚进界面的时候对type的判断
     initPos() {
        let _this = this;
        if(_this.type == 0){
          _this.posParts[0].aStyle = "color:#4A4A4A;background:#fff";
        }else{
          _this.posParts[0].aStyle = "color:#4A4A4A;background:#fff";
        }
     },
     //点击全仓 半仓 1/3仓的效果
     posClick(n) {
        let _this = this;
        _this.currentN = n;
         if(_this.subform.canBuyStock == "--"){
              _this.isSubmit3 = false;
              return;
           }
         _this.subform.number = _this.scalerNumber(_this.canBuyStock);
         if(_this.subform.number*1 == 0) {
            _this.isSubmit3 = false;
            return;
         }
         _this.isSubmit3 = true;
     },

    //获取股票的信息
    haveStock(key) {
      let _this = this;
      _this.popArrays = [];
      let date1 = new Date().getTime();
      getStock(date1,key,() => {
          let suggestdata = eval("suggestdata_"+date1);
          if(suggestdata==undefined||suggestdata==""){
              _this.popIsShow = false;
              _this.isSubmit1 = false;
              return;
          }
          let arr = suggestdata.split(";");
        //   console.log(arr);
          //不是11的不要
          arr.forEach(elem => {
             let arr1 = elem.split(",");
             if(arr1[1] == 11){
                 _this.popIsShow = true;
                 let obj = {
                     stockCode: arr1[3],
                     stockName: arr1[4]
                 }
                _this.popArrays.push(obj);
             }

          })
      })
    },
    //获取买入、卖出的接口
    haveTrade(stockCode,stockName) {
      let _this = this;
       getBuyAndSale(stockCode,function() {
           let hq_str = eval("hq_str_"+stockCode);
           _this.posRig = hq_str.split(",");
           //_this.subform.stockStr = stockCode+ "-" + _this.posRig[0];
           // _this.subform.price =  parseFloat(_this.posRig[3]).toFixed(2);
           if(stockName.substring(1,3) == "ST"){
              _this.downStr = (Math.round((parseFloat(_this.posRig[2])*0.95)*100)/100).toFixed(2);
              _this.upStr = (Math.round((parseFloat(_this.posRig[2])*1.05)*100)/100).toFixed(2);
           }else{
             _this.downStr = (Math.round((parseFloat(_this.posRig[2])*0.9)*100)/100).toFixed(2);
             _this.upStr = (Math.round((parseFloat(_this.posRig[2])*1.1)*100)/100).toFixed(2);
           }
           _this.yesterPrice = parseFloat(_this.posRig[2]).toFixed(2);
           if(_this.onceInput2){
               _this.onceInput2 = false;
               _this.subform.price = parseFloat(_this.posRig[3]).toFixed(2);
               _this.changeStockNum();
               _this.isSubmit2 = true;
           }
        //    _this.changeStockNum();
          if(_this.type == 1) {
              _this.saleNumber(stockCode);
          }
          _this.canbs = true;
       })

    },
    //输入股票代码的输入框的清除按钮
    clearBtn() {
      let _this = this;
      _this.subform.stockStr = "";
      _this.subform.stockCode = "";
      _this.haveStock(_this.subform.stockStr);
    //   _this.haveTrade(_this.subform.stockCode);
      _this.stopShowBuySale();
      _this.posRig = [];
      _this.downStr = 0;
      _this.upStr = 0;
      _this.subform.price = "";
      _this.isSubmit1 = false;
      _this.isSubmit2 = false;

    },
    //给点击右边给买入 卖出赋值
    setAssign(d){
        let _this = this;
        if(d*1 == 0){
            _this.isSubmit2 = false;
            return;
        }
        _this.subform.price =  parseFloat(d).toFixed(2);
        _this.changeStockNum();
        _this.isSubmit2 = true;
    },
    //创建不停调取买入、卖出的接口的方法
    startShowBuySale(stockCode,stockName) {
       let _this = this;
       _this.subform.stockStr = stockCode.substring(2,stockCode.length) + "-" + stockName;
       _this.subform.stockName = stockName;
       _this.subform.stockCode = stockCode;
       _this.popIsShow = false;
       _this.isSubmit1 = true;
       _this.onceInput2 = true;
       if(_this.showBuySale != undefined){
         _this.stopShowBuySale();
        }
        _this.showBuySale = self.setInterval(() => {
          if(_this.canbs){
            _this.canbs = false;
            _this.haveTrade(stockCode,stockName);
          }

        },1000);
    },
    //停止调取买入、卖出的接口的方法
    stopShowBuySale(){
      let _this = this;
      window.clearInterval(_this.showBuySale);
      _this.showBuySale = undefined;

    },
     //判断是否有stockCode传来
     checkQuery() {
         let _this = this;
         if(_this.$route.query.stockCode){
          _this.startShowBuySale(_this.$route.query.stockCode,_this.$route.query.stockName);
         }
     },
     //减
     sub() {
       let _this = this;
       let nn = (parseFloat(_this.subform.price) - 0.01).toFixed(2);
       if( (nn - _this.downStr) < 0 ){
           return;
       }
       _this.subform.price = nn;
       _this.changeStockNum();
       _this.isSubmit2 = true;
     },
     //加
     addSum() {
        let _this = this;
        let nn = (parseFloat(_this.subform.price) + 0.01).toFixed(2);
        if( (nn - _this.upStr) >  0 ){
         return;
        }
       _this.subform.price = nn;
       _this.changeStockNum();
       _this.isSubmit2 = true;
     },
     //搜索的功能
     searchStock(){
         let _this = this;
         let k = _this.subform.stockStr;
         _this.haveStock(k);
     },
     //输入的买入和卖出的限制
     BuyOrSale() {
        let _this = this;
        if( (_this.subform.price*1 - _this.downStr*1) < 0 ){
            _this.isSubmit2 = false;
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '低于跌停的金额',
              time: 3000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
            if(_this.type == 0){
                _this.canBuyStock = "--";
                _this.subform.number = "";
            }
            return;
        }

        if( (_this.subform.price*1 - _this.upStr*1) > 0 ){
            _this.isSubmit2 = false;
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '超出涨停金额',
              time: 3000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
            if(_this.type == 0){
               _this.canBuyStock = "--";
               _this.subform.number = "";
            }
            return;
        }
        _this.changeStockNum();
        _this.isSubmit2 = true;
     },
     //对买入量和卖出量的修改
     changeStockNum() {
         let _this = this;
        //  _this.subform.number = undefined;
         if(_this.subform.price == ""){
           _this.isSubmit2 = false;
           return;
         }
         if(_this.type == 0) {
             if(_this.myPrice*1 == 0 || _this.subform.price*1 == 0){
             _this.isSubmit2 = false;
             return;
             }
            _this.canBuyStock = parseInt(_this.myPrice/parseFloat(_this.subform.price)/100)*100;
            // _this.subform.number = _this.scalerNumber(_this.canBuyStock);
            _this.isSubmit2 = true;
            // _this.isSubmit3 = true;
         }
      },
      //卖出量
      saleNumber(stockCode) {
         let _this = this;
         if(_this.canBuyNum.length == 0) {
             _this.canBuyStock = "--";
             _this.isSubmit3 = false;
             return;
         }
         _this.canBuyStock = 0;
         _this.canBuyNum.forEach(elem => {
             if(elem.stockCodeFull == stockCode.toUpperCase()) {
                 _this.canBuyStock = elem.numberCanUse;
             }
         })
      },
      //对数量进行的处理方法
      scalerNumber(price) {
          let _this = this;
          if(price == "--"){
              return;
          }
          return parseInt((price*_this.currentN)/100)*100;
      },
      //买入、卖出输入的问题
      filling() {
        let _this = this;
        if(_this.subform.number*1 > _this.canBuyStock*1){
            _this.isSubmit3 = false;
            let str1 = _this.type == 0 ?"买入量超出可买股的数量":"卖出量超出可卖出股票的数量";
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: str1,
              time: 3000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
            return;
        }

        if(_this.subform.number < 100){
           _this.isSubmit3 = false;
           let str1 = _this.type == 0 ?"买入量不可少于100股":"卖出量不可少于100股";
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: str1,
              time: 3000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
            return;
        }

        if(_this.subform.number*1 > 100){
            if(_this.subform.number*1%100 != 0){
               _this.isSubmit3 = false;
               let str1 = _this.type == 0 ?"买入量必须是100的整数倍":"卖出量必须是100的整数倍";
               _this.$layer.toast({
                  icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                  content: str1,
                  time: 3000 // 自动消失时间 toast类型默认消失时间为2000毫秒
               })
               return;
            }
        }
        _this.isSubmit3 = true;
      },
      //点击跌停的效果
      die() {
       let _this = this;
       if(_this.downStr == 0){
           _this.isSubmit2 = false;
           return;
       }
       _this.subform.price = _this.downStr;
       _this.changeStockNum();
       _this.isSubmit2 = true;
      },
      //点击涨停的效果
      zhang() {
       let _this = this;
       if(_this.upStr == 0){
            _this.isSubmit2 = false;
           return;
       }
      _this.subform.price = _this.upStr;
      _this.changeStockNum();
      _this.isSubmit2 = true;
      },
      //买入/卖出
      handIng() {
          let _this = this;
          setStatuc(0);
//        console.log(_this.isSubmit1 + "---" + _this.isSubmit2 + "---" + _this.isSubmit3);
          let stocknumber = _this.stockPosition.has(_this.subform.stockCode)? _this.stockPosition.get(_this.subform.stockCode) : 0;
          if(_this.subform.stockStr != "" && _this.subform.price != "" && _this.subform.number != "" && _this.isSubmit1 == true && _this.isSubmit2 == true && _this.isSubmit3 == true){
               if(_this.type == 0){
                 _this.$layer.dialog({
                   title: ['委托买入确认','font-size:0.40rem'], // 第一个是标题内容  第二个是标题栏的style(可以为空)
                   content: '<div class="d1"><p><span>证券名称：</span><span>'+_this.subform.stockName+'</span></p><p><span>证券代码：</span><span>'+_this.subform.stockCode+'</span></p></div>' +
                            '<div class="d2"><p><span>委托价格：</span><span>'+_this.subform.price+'</span></p><p><span>委托数量：</span><span>'+_this.subform.number+'</span></p></div>' +
                            '<div class="d3"><p><span>当前持仓：</span><span>'+stocknumber+'</span></p><p><span>预计金额：</span><span>'+(_this.subform.number*_this.subform.price).toFixed(2)+'</span></p></div>',
                   contentClass: 'popNb',
                   btn: ['取消','确定']
                 }).then(res => {
                    let position = res === 0 ? 'left' : 'right';
                    if(position == 'right'){
                      APIS.buySubmit(_this.subform.stockCode,_this.subform.price,_this.subform.number).then( result => {
                        if(result.code == 0){
                          _this.$layer.toast({
                            icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                            content: '提交成功',
                            time: 3000 // 自动消失时间 toast类型默认消失时间为2000毫秒
                          })
                        }else{
                          _this.$layer.toast({
                            icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                            content: result.msg,
                            time: 3000 // 自动消失时间 toast类型默认消失时间为2000毫秒
                          })
                        }
                      }).catch( err => {
                        console.log(err);
                      })
                    }
                 })
               }else{
                 _this.$layer.dialog({
                   title: ['委托卖出确认','font-size:0.40rem;'], // 第一个是标题内容  第二个是标题栏的style(可以为空)
                   content: '<div class="d1"><p><span>证券名称：</span><span style="color: #1298FF">'+_this.subform.stockName+'</span></p><p><span>证券代码：</span><span style="color: #1298FF;">'+_this.subform.stockCode+'</span></p></div>' +
                   '<div class="d2"><p><span>委托价格：</span><span style="color: #1298FF">'+_this.subform.price+'</span></p><p><span>委托数量：</span><span style="color: #1298FF">'+_this.subform.number+'</span></p></div>' +
                   '<div class="d3"><p><span>当前持仓：</span><span style="color: #1298FF">'+stocknumber+'</span></p><p><span>预计金额：</span><span style="color: #1298FF">'+(_this.subform.number*_this.subform.price).toFixed(2)+'</span></p></div>',
                   contentClass: 'popNb',
                   btn: ['取消','确定']
                 }).then(res => {
                   let position = res === 0 ? 'left' : 'right';
                   if(position == 'right') {
                     APIS.saleSubmit(_this.subform.stockCode,_this.subform.price,_this.subform.number).then( result => {
                       if(result.code == 0){
                         _this.$layer.toast({
                           icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                           content: '提交成功',
                           time: 3000// 自动消失时间 toast类型默认消失时间为2000毫秒
                         })
                       }else{
                         _this.$layer.toast({
                           icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                           content: result.msg,
                           time: 3000 // 自动消失时间 toast类型默认消失时间为2000毫秒
                         })
                       }
                     }).catch( err => {
                       console.log(err);
                     })
                   }
                 })
               }
          }else{
               _this.$layer.toast({
                    icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                    content: '提交失败，请检查输入的内容是否正确',
                    time: 3000 // 自动消失时间 toast类型默认消失时间为2000毫秒
             })
          }
      }


  }

}
</script>
