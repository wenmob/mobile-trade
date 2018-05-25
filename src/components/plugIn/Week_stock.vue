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
import {calculateMA, splitData, getNumbers} from '../../assets/js/testData'
import {getWeekChart} from '../../utils/utools'
let vmt;
let data0;
export default {
  data() {
      return {
        stockCode: "",  
        myChars1: undefined,
        ds_color: {
           upColor: '#fff',
           upBorderColor: '#DF312D',
           downColor: '#0DB408',
           downBorderColor:'#0DB408'
        }
      }
  },
  beforeDestroy() {
    vmt.myChars1 = undefined;
    data0 = undefined;
  },
  mounted() {
    vmt = this;
    vmt.checkHaveStock();
  },
  methods: {
    //检查是否有股票传来
    checkHaveStock() {
        if(vmt.$route.query.stockCode){
           vmt.stockCode = vmt.$route.query.stockCode;
        //    vm.childrenData();
           vmt.getterWeekChart(vmt.stockCode);
        }
    },
   //创建第一个charts   
   createdCharts1() {
       vmt.myChars1 = echarts.init(document.getElementById('myChars1'));
       vmt.myChars1.setOption({
          tooltip: {
            trigger: 'axis',
            confine: true,
            axisPointer: {
            type: 'cross'
            },
            formatter: (a) =>{
              //最低 最高 开盘 收盘 成交量 成交额
              if(a[0].seriesName == "成交量"){
                return '时间：'+ a[0].axisValueLabel + '<br/>' + 
                       '成交量：' + a[0].value;
              }else{
                let shu1 = a[0].data;
                let open = (shu1[1]*1).toFixed(2);
                let close = (shu1[2]*1).toFixed(2);
                let highest = (shu1[4]*1).toFixed(2);
                let lowest = (shu1[3]*1).toFixed(2);
                let volnumber = (shu1[5]*1) + "万";
                return '日期：' + a[0].axisValueLabel + '<br/>' +
                     '开盘：' + open + '<br/>' +
                     '收盘：' + close + '<br/>' +
                     '最高：' + highest + '<br/>' +
                     '最低：' + lowest + '<br/>' +
                     '成交量：' + volnumber
                }
            }
          },
         legend: { 
           data: [{name:'MA5',textStyle:{color:"rgba(0,152,255,0.8)",fontSize:10}}, {name:'MA10',textStyle:{color:"rgba(17,17,17,0.8)",fontSize:10}},{name:'MA20',textStyle:{color:"rgba(255,66,0,0.8)",fontSize:10}},{name:'MA30',textStyle:{color:"rgba(5,137,6,0.8)",fontSize:10}}],
           formatter: function (name) {
              switch (name) {
                  case 'MA5':
                      return name + ': ' + calculateMA(data0,5)[159]
                      break;
                  case 'MA10':
                      return name + ': ' + calculateMA(data0,10)[159]
                      break;
                  case 'MA20':
                      return name + ': ' + calculateMA(data0,20)[159]
                      break;
                  case 'MA30':
                      return name + ': ' + calculateMA(data0,30)[159]
                      break;         
                  default:
                      break;
              }
           },
           itemWidth:0,
           itemHeight: 0
         },
         grid: [{
          top: '13%',   
          left: '98%',
          right: '98%',
          bottom: '88%',
          height: '60%'
         },{
          top: '76%',   
          left: '98%',
          right: '98%',
          bottom: '88%',
          height: '20%'
         }
         ],
          xAxis: [{
            type: 'category',
            data: data0.categoryData,
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
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax',
            axisTick: {show: false}//去掉刻度线
         },
         {
            gridIndex: 1, 
            type: 'category',
            data: data0.categoryData,
            scale: true,
            boundaryGap : false,
            axisLabel: {
                margin: 1,
                fontSize: 9 
            },
            axisLine:{
               show: true, 
               onZero: false, 
               lineStyle:{
                 color: "rgba(98,98,98,1)"
               }
             },
            splitLine: {
                show: false,
                lineStyle: {
                      // 使用深浅的间隔色
                         color: ['rgb(241,241,241)']
                 }   
            },
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax',
            axisTick: {show: false}//去掉刻度线
         }],
          yAxis: [{
           gridIndex: 0,
           name: '股票行情',    
           scale: true,
           show: false,
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
         dataZoom: [
          {
            type: 'inside',
            realtime: true,
            start: 70,
            end: 100,
            minValueSpan: 22,
            maxValueSpan: 100,
            xAxisIndex: [0, 1]
          }
          ],
          series: [
              {
               name: '周K',
               type: 'candlestick',
               data: data0.values,
               yAxisIndex: 0,
               barWidth: '86%',
               itemStyle: {
                normal: {
                    color: vmt.ds_color.upColor,
                    color0: vmt.ds_color.downColor,
                    borderColor: vmt.ds_color.upBorderColor,
                    borderColor0: vmt.ds_color.downBorderColor
                }
               },
                markPoint: {
                symbolSize: 44,   
                label: {
                    normal: {
                        formatter: function (param) {
                            return param != null ? (param.value*1).toFixed(2) : '';
                        },
                        fontSize: 8
                    }
                },
                data: [
                    {
                        name: 'highest value',
                        type: 'max',
                        valueDim: 'highest',
                        itemStyle: {
                         color: 'rgba(229,118,21, 0.9)'
                        }
                    },
                    {
                        name: 'lowest value',
                        type: 'min',
                        valueDim: 'lowest',
                        itemStyle: {
                         color: 'rgba(0,7,255, 0.9)'
                        }
                    }
                ],
                tooltip: {
                    confine: true,
                    formatter: function (param) {
                        return param.name + '<br>' + (param.data.coord || '');
                    }
                }
               }
              },
              {
               name: 'MA5',
               type: 'line',
               data: calculateMA(data0,5),
               yAxisIndex: 0,
               symbol:'none',
               smooth: 0,
               itemStyle: {
                normal: {color:"rgba(0,152,255,0.8)"}
               },
               lineStyle: {
                   width: 1
               }   
              },
              {
               name: 'MA10',
               type: 'line',
               data: calculateMA(data0,10),
               yAxisIndex: 0,
               symbol:'none',
               smooth: 0,
               itemStyle: {
                normal: {color:"rgba(17,17,17,0.8)"}
               },
               lineStyle: {
                   width: 1
               }   
              },
              {
               name: 'MA20',
               type: 'line',
               data: calculateMA(data0,20),
               yAxisIndex: 0,
               symbol:'none',
               smooth: 0,
               itemStyle: {
                normal: {
                    color:"rgba(255,66,0,0.8)",
                    borderWidth:0
                }
               },
               lineStyle: {
                   width: 1
               }    
              },
              {
               name: 'MA30',
               type: 'line',
               data: calculateMA(data0,30),
               yAxisIndex: 0,
               symbol:'none',
               smooth: 0,
               itemStyle: {
                normal: {color:"rgba(5,137,6,0.8)"}
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
                data: getNumbers(data0.values),
                barMinWidth: 5,
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
       })
   },
   //获取数据
   getterWeekChart(stockCode) {
       
       getWeekChart(stockCode.toLowerCase(),function (data) {
           let kLine = data.data;
           let rawData = [];
           for(let i = (kLine.length - 1); i >= 0; i--){
               let rds = [];
               let dataStr0 = kLine[i].values['' + 1 +''] + '';
               let dataStr1 = dataStr0.substring(0,4) + "/" + dataStr0.substring(4,6) + "/" + dataStr0.substring(6,8);
               rds.push(dataStr1);
               let open = kLine[i].values['' + 3 +''].values['' + 3 + '']; 
               rds.push(open);
               let close = kLine[i].values['' + 3 +''].values['' + 6 + ''];
               rds.push(close);
               let lowest = kLine[i].values['' + 3 +''].values['' + 5 + ''];
               rds.push(lowest);
               let highest =  kLine[i].values['' + 3 +''].values['' + 4 + ''];
               rds.push(highest);
               let volnumber = ((kLine[i].values['' + 3 +''].values['' + 7 + ''])/10000).toFixed(2);
               rds.push(volnumber);
               rawData.push(rds);
            }
           data0 = splitData(rawData);
           vmt.createdCharts1();
           vmt.resizeChart();
          })
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


