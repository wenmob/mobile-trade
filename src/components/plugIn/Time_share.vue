<style>
  @import url('../../assets/css/self_style');
</style>
<template>
   <div class="tsar-container">
    <div class="tsar_d1" id="myChars1"></div>
   </div> 
</template>
<script>
import echarts from 'echarts'
import {getimeChart} from '../../utils/utools'
import {getStockDetails} from '../../utils/utools'
let vmt;
export default {
  data() {
    return {
      stockCode:"",
      option:undefined,
      ts_stock: {
         yesterdayPrice: 14.58, 
         upStr:15.32,
         downStr:13.86
      },  
      myChars1: undefined,
      dataTimes: [],
      datay: [],
      dataVolnum: [],
      dataJx: [],
      tems: {
          up: 0.05,
          line: 0.00,
          down: -0.05
      },
      updateCharts:undefined,
      updateHL: undefined,
      canHL: true,
    }
  },
  beforeDestroy() {
    vmt.myChars1 = undefined; 
    window.clearInterval(vmt.updateCharts);
    window.clearInterval(vmt.updateHL);
    vmt.updateCharts = undefined;
    vmt.updateHL = undefined;
    vmt.canHL = true;
  },
  mounted() {
   vmt = this;
   vmt.checkHaveStock();
   vmt.createX();
  },
  methods: {
    //创建时间列的x轴
    createX() {
       let h = 9;
       let m = 30;
       let t1 = "";
       let xx = [];
       for(let i = 0;i < 242; i++){
          if( m == 59){
            t1 = h + ":" + m;
            xx.push(t1);
            h++;
            m = 0;
          }else{
            if(m >= 10) {
              t1 = h + ":" + m;
              xx.push(t1);
              if(m == 30){
                if(h == 11) {
                  h = 13;
                  m = 0;
                }else{
                  m++;
                }
              }else{
               m++;
              }
            }else{
              t1 = h + ":0" + m;
              xx.push(t1);
              m++;
            }
             
          }
       }
       return xx;
       
    },
    //检查是否有股票传来
    checkHaveStock() {
        if(vmt.$route.query.stockCode){
           vmt.stockCode = vmt.$route.query.stockCode;
            getStockDetails(vmt.stockCode.toLowerCase(),function(data) {
                   let hq_str = eval("hq_str_"+vmt.stockCode.toLowerCase());
                   let stockD = hq_str.split(",");
                   vmt.ts_stock.yesterdayPrice = (stockD[2]*1).toFixed(2);
                      let b1 =Math.abs( (stockD[4]*1) - (stockD[2]*1) );
                      let b2 =Math.abs( (stockD[5]*1) - (stockD[2]*1) );
                      if(b1 > b2){
                        vmt.ts_stock.upStr = (stockD[4]*1).toFixed(2);
                        vmt.ts_stock.downStr = ((stockD[2]*1) - b1).toFixed(2);
                      }else{
                        vmt.ts_stock.upStr =  ((stockD[2]*1) + b2).toFixed(2);
                        vmt.ts_stock.downStr = (stockD[5]*1).toFixed(2);
                      }
                      vmt.tems.up = (vmt.ts_stock.upStr - vmt.ts_stock.yesterdayPrice) / vmt.ts_stock.yesterdayPrice;
                      vmt.tems.line = 0.00;
                      vmt.tems.down = (vmt.ts_stock.downStr - vmt.ts_stock.yesterdayPrice) / vmt.ts_stock.yesterdayPrice;
                      vmt.getterTimeChart(vmt.stockCode).then(vmt.startHL(vmt.stockCode));
                      
               })
      
        }
    },
    //更新最大值和最小值
    startHL(stockCode) {
      return new Promise(function(resolve,reject) {
      
       vmt.updateHL = self.setInterval(function() {
           if(vmt.canHL){
             vmt.canHL = false;
             getStockDetails(stockCode.toLowerCase(),function(data) {
                   let hq_str = eval("hq_str_"+vmt.stockCode.toLowerCase());
                   let stockD = hq_str.split(",");
                   vmt.ts_stock.yesterdayPrice = (stockD[2]*1).toFixed(2);
                      let b1 =Math.abs( (stockD[4]*1) - (stockD[2]*1) ) ;
                      let b2 =Math.abs( (stockD[5]*1) - (stockD[2]*1) );
                      if(b1 > b2){
                        vmt.ts_stock.upStr = (stockD[4]*1).toFixed(2);
                        vmt.ts_stock.downStr = ((stockD[2]*1) - b1).toFixed(2);
                      }else{
                        vmt.ts_stock.upStr =  ((stockD[2]*1) + b2).toFixed(2);
                        vmt.ts_stock.downStr = (stockD[5]*1).toFixed(2);
                      }
                      vmt.tems.up = (vmt.ts_stock.upStr - vmt.ts_stock.yesterdayPrice) / vmt.ts_stock.yesterdayPrice;
                      vmt.tems.line = 0.00;
                      vmt.tems.down = (vmt.ts_stock.downStr - vmt.ts_stock.yesterdayPrice) / vmt.ts_stock.yesterdayPrice;
                      let option = vmt.myChars1.getOption();
                      vmt.datay[vmt.datay.length - 1] = (stockD[3]*1).toFixed(2);
                      option.series[0].data = vmt.datay;
                      vmt.myChars1.setOption(option);
                      vmt.canHL = true;
               })
           }
       },1000);
      })
    },
    //创建第一个echarts
    createChartsA() {
       vmt.myChars1 = echarts.init(document.getElementById('myChars1'));
       vmt.option = {
           grid: [{
             top: '0%',  
             left: '98%',
             right: '98%',
             bottom: '88%',
             height: '73%'
            },{
             top: '76%',   
             left: '98%',
             right: '98%',
             bottom: '88%',
             height: '20%'
           }
         ],
           tooltip: {
            trigger:"axis",
            axisPointer: {
              type: 'cross'
            },
            formatter: function(a) {
              if(a[0].seriesName == "成交量"){
                return '时间：'+ a[0].axisValueLabel + '<br/>' +
                     '成交量：' + a[0].value;
              }else{
                return '时间：'+ a[0].axisValueLabel + '<br/>' +
                     '价格：' + a[0].data;
              }
               
            }
           },
        dataZoom: [
          {
            type: 'inside',
            realtime: true,
            start: 0,
            end: 100,
            zoomLock: true,
            xAxisIndex: [0, 1]
          }
          ],
           xAxis: [{
            type: 'category',
            data: vmt.dataTimes,
            scale: true,
            boundaryGap : false,
            axisLabel: {
                show: false,
                margin: 1,
                fontSize: 9
            },
            axisLine:{
               show: true, 
               onZero: false, 
               lineStyle:{
                 color: "rgba(170,175,189,1)"
               }  
             },
            splitLine: {
                show: false,
                lineStyle: {
                      // 使用深浅的间隔色
                         color: ['rgb(241,241,241)']
                 }   
            },
            axisTick: {show: false}//去掉刻度线
         },
         {
            gridIndex: 1, 
            type: 'category',
            data: vmt.dataTimes,
            scale: true,
            boundaryGap : false,
            axisLabel: {
                margin: 1,
                fontSize: 9,
                formatter: function(params) {
                   if(params == "9:30"){
                     return "9:30";
                   }else if(params == "11:30"){
                     return "11:30";
                   }else if(params == "14:59"){
                     return "14:59";
                   }else{
                     return "";
                   }
                }
            },
            axisLine:{
               show: true, 
               onZero: false, 
               lineStyle:{
                 color: "rgba(98,98,98,1)"
               },

             },
            splitLine: {
                show: false,
                lineStyle: {
                      // 使用深浅的间隔色
                         color: ['rgb(241,241,241)']
                 }   
            },
            axisTick: {show: false}//去掉刻度线
         }],
           yAxis: [{
            gridIndex: 0,
            name: '股票行情',    
            scale: true,
            show: false,
            splitLine: { show: true },
            min: vmt.ts_stock.downStr,
            max: vmt.ts_stock.upStr,
            splitArea: {
             show: true
            }
           },
           {
           gridIndex: 1,
           name: '成交量',
           scale: true,
           show: false,
           splitArea: {
            show: true
            }
           }
          ],
           series: [{
             name: '分时线',
             data: vmt.datay,
             type: 'line',
             smooth: 0,
             symbol:'none',
             itemStyle: {
               normal: {color: 'rgba(76,133,186,0.8)'}
             },
             xAxisIndex: 0,
             yAxisIndex: 0,
             areaStyle: {
                color:"rgba(214,225,245,0.8)"
             },
             lineStyle: {
                   width: 1
             }, 
             //标注线
             markLine: {
                symbol: 'pin',
                lineStyle: {
                   color: "rgba(255,77,77,1)",
                   type: 'dashed'
                },
                data: [
                  [
                     {
                       // 起点和终点的项会共用一个 name
                       name: '基线',
                       x:'0%',
                       y:'41%'
                     },
                     {
                       x:'100%',
                       y:'41%'
                     }
                   ]

                ]
             },
             //标注点
             markPoint: {
                data: [
                   {
                    name: vmt.tems.line.toFixed(2) + "%",
                    value: (vmt.tems.line*100).toFixed(2) + "%",
                    y: "39%",
                    x: "98%",
                    symbol: "pin",
                    symbolSize:1,
                    label: {
                        show: true,
                        color: "#1c1c1c",
                        position: "left"
                    },
                    itemStyle: {
                        color: "rgb(128, 128, 128)"
                    }
                   },
                   {
                    name: "+" + vmt.tems.up*100 +"%",
                    value: "+"+(vmt.tems.up*100).toFixed(2) + "%",
                    y: "2%",
                    x: "98%",
                    symbol: "pin",
                    symbolSize:1,
                    label: {
                        show: true,
                        color: "red",
                        position: "left"
                    },
                    itemStyle: {
                        color: "rgb(128, 128, 128)"
                    }
                   },
                   {
                    name: vmt.tems.down*100 + "%",
                    value: (vmt.tems.down*100).toFixed(2) + "%",
                    y: "71%",
                    x: "98%",
                    symbol: "pin",
                    symbolSize:1,
                    label: {
                        show: true,
                        color: "#5CB24F",
                        position: "left"
                    },
                    itemStyle: {
                        color: "rgb(128, 128, 128)"
                    }
                   },
                   {
                    name: vmt.ts_stock.upStr,
                    value: vmt.ts_stock.upStr,
                    y: "2%",
                    x: "1%",
                    symbol: "pin",
                    symbolSize:1,
                    label: {
                        show: true,
                        color: "red",
                        position: "right"
                    },
                    itemStyle: {
                         color: "rgb(128, 128, 128)"
                    }
                   },
                   {
                    name: vmt.ts_stock.yesterdayPrice,
                    value: vmt.ts_stock.yesterdayPrice,
                    y: "39%",
                    x: "1%",
                    symbol: "pin",
                    symbolSize:1,
                    label: {
                        show: true,
                        color: "#1c1c1c",
                        position: "right"
                    },
                    itemStyle: {
                         color: "rgb(128, 128, 128)"
                    }
                   },
                   {
                    name: vmt.ts_stock.downStr,
                    value: vmt.ts_stock.downStr,
                    y: "71%",
                    x: "1%",
                    symbol: "pin",
                    symbolSize:1,
                    label: {
                        show: true,
                        color: "#5CB24F",
                        position: "right"
                    },
                    itemStyle: {
                         color: "rgb(128, 128, 128)"
                    }
                   }
                    
                ]
             }     
           },
           //均线
           {
              name: '均线',
              xAxisIndex: 0,
              yAxisIndex: 0,
              type: 'line',
              data: vmt.dataJx,
              symbol:'none',
              itemStyle: {
               normal: {color: 'rgba(229,175,46,1)'}
              },
              lineStyle: {
                   width: 1
              }

           },
            {
                name: '成交量',
                xAxisIndex: 1,
                yAxisIndex: 1,
                type: 'bar',
                data: vmt.dataVolnum,
                markPoint: { 
                 symbol: 'arrow', 
                 symbolSize: 10,
                 symbolRotate:180,     
                 label: {
                    show: true,  
                    normal: {
                        formatter: function (param) {
                            return param != null ? param.value + "万" : '';
                        },
                        fontSize: 11,
                        color: '#1c1c1c',
                        position: 'right'
                    }
                 },
                 data: [
                   {
                        name: 'vol max',
                        type: 'max',
                        itemStyle: {
                         color: 'rgba(229,118,21, 0.9)'
                        }
                    }  
                 ]
                }
              }
           ]
       };
       vmt.myChars1.setOption(vmt.option);
    },
    //获取分时的数据
    getterTimeChart(stockCode) {
      return new Promise(function(resolve,reject) {
        
        getimeChart(stockCode.toLowerCase(),function(data) {
           let timeline = data.data.timeline.timeline; 
           vmt.dataTimes = vmt.createX();
           vmt.datay = [];
           vmt.dataVolnum = [];
           vmt.dataJx = [];
           let sset = new Set(vmt.dataTimes);
           for(let i = 0; i < timeline.length; i++){
             let s_ = timeline[i].values['' + 2 + ''] + '';
             let s_0 = s_.substring(0,s_.length - 5);
             let n_0 = Math.floor(s_0.length/2);
             let s_1 = s_0.substring(0,n_0) + ":" + s_0.substring(n_0,s_0.length); //获取时间段
             if(sset.has(s_1)){
                 let p_0 = (timeline[i].values['' + 4 + '']*1).toFixed(2); //获取当前价格
                 //  vmt.dataTimes.push(s_1)
                 let p_1 = (data.data.preclose*1).toFixed(2);
                 if(i != 0){
                   p_1 = (timeline[i-1].values['' + 4 + '']*1).toFixed(2);
                 }
                 vmt.datay.push(p_0);
                 let vol_0 = (timeline[i].values['' + 5 + ''] / 10000).toFixed(2);
                 let obj = {
                   value: vol_0,
                   itemStyle: {
                    color: p_0 > p_1 ? '#F70303' : '#0DB408',
                    borderColor: 'transparent',
                    borderWidth: 0.5
                   }
                }
                vmt.dataVolnum.push(obj); 
                //均线数据
                let jx = (timeline[i].values['' + 6 + '']*1).toFixed(2);
                vmt.dataJx.push(jx);
             }
            
           }
           vmt.createChartsA();
           vmt.resizeChart();
           vmt.startInvData(stockCode);
        })
      });
    },
    //动态更新数据
    startInvData(stockCode) {
      vmt.updateCharts = self.setInterval(function() {
           getimeChart(stockCode.toLowerCase(),function(data) {
           let timeline = data.data.timeline.timeline;
           vmt.dataTimes = vmt.createX();
           vmt.datay = [];
           vmt.dataVolnum = [];
           vmt.dataJx = [];
           let sset = new Set(vmt.dataTimes);
           for(let i = 0; i < timeline.length; i++){
             let s_ = timeline[i].values['' + 2 + ''] + '';
             let s_0 = s_.substring(0,s_.length - 5);
             let n_0 = Math.floor(s_0.length/2);
             let s_1 = s_0.substring(0,n_0) + ":" + s_0.substring(n_0,s_0.length); //获取时间段
             if(sset.has(s_1)){
                 let p_0 = (timeline[i].values['' + 4 + '']*1).toFixed(2); //获取价格
                 //  vmt.dataTimes.push(s_1);
                 let p_1 = 0;
                 if(i != 0){
                   p_1 = (timeline[i-1].values['' + 4 + '']*1).toFixed(2);
                 }
                 vmt.datay.push(p_0);
                 let vol_0 = (timeline[i].values['' + 5 + ''] / 10000).toFixed(2);
                 let obj = {
                   value: vol_0,
                   itemStyle: {
                     color: p_0 > p_1 ? '#F70303' : '#0DB408',
                     borderColor: p_0 > p_1 ? '#fff' : '#fff',
                     borderWidth: 0.5
                   }
                 }
                vmt.dataVolnum.push(obj);
                //均线数据
                let jx = (timeline[i].values['' + 6 + '']*1).toFixed(2);
                vmt.dataJx.push(jx);
             }   
           }
           let option = vmt.myChars1.getOption();
           option.xAxis[0].data = vmt.dataTimes;
           option.xAxis[1].data = vmt.dataTimes;
           option.series[0].data = vmt.datay;
           option.series[1].data = vmt.dataJx;
           option.series[2].data = vmt.dataVolnum;
           vmt.myChars1.setOption(option);
        })
      },60000);
    },
     //监听chart
   resizeChart() {
     let chart = vmt.myChars1;
     window.onresize = function() {
       chart.resize();
     }
   }
  }
}
</script>


