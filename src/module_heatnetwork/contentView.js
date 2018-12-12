import xhwsClient from '../common/util';
import moment from 'moment';
class ContentView extends ht.graph.GraphView {
    constructor() {
        super();
        ht.Default.xhrLoad('displays/热网.json', text => {
            var json = ht.Default.parse(text);
            var dm = new ht.DataModel();
            if (json.title) document.title = json.title;
            dm.deserialize(json);
            this.setDataModel(dm);
            this.addEvent();
            this.getRealTimeData();
            this.fitContent(true, 0);
            this.echart_1();
        });
    }

    getRealTimeData() {
    	var notifyReceiver = new XinhuaWebSocketNotify();
        setInterval(() => {
            this.updateData(notifyReceiver.datas);
        }, 1000)
        xhwsClient.connect('ws://116.247.77.92:32101/htWebSocket', notifyReceiver);
    }
    prettyNumber(d, num) {
    	return parseFloat(d).toFixed(num === undefined ? 2 : num);
    }
    // 日供热量和室外平均温度对比
    echart_1() {
        let dm = this.dm();
        let echart_1 = dm.getDataByTag('echart_1');
        // mock
        let series = [
          {
            "color": "rgb(224,118,25)",
            "name": "最高气温",
            "type": "line",
            "data": [
              11,
              11,
              15,
              13,
              12,
              13,
              10
            ],
            "markPoint": {
              "data": [
                {
                  "type": "max",
                  "name": "最大值"
                },
                {
                  "type": "min",
                  "name": "最小值"
                }
              ]
            },
            "markLine": {
              "data": [
                {
                  "type": "average",
                  "name": "平均值"
                }
              ]
            }
          },
          {
            "color": "rgba(27,85,245,0.6)",
            "name": "最低气温",
            "type": "line",
            "data": [
              1,
              -2,
              2,
              5,
              3,
              2,
              0
            ],
            "markPoint": {
              "data": [
                {
                  "name": "周最低",
                  "value": -2,
                  "xAxis": 1,
                  "yAxis": -1.5
                }
              ]
            },
            "markLine": {
              "data": [
                {
                  "type": "average",
                  "name": "平均值"
                },
                [
                  {
                    "symbol": "none",
                    "x": "90%",
                    "yAxis": "max"
                  },
                  {
                    "symbol": "circle",
                    "label": {
                      "normal": {
                        "position": "start",
                        "formatter": "最大值"
                      }
                    },
                    "type": "max",
                    "name": "最高点"
                  }
                ]
              ]
            }
          }
        ];
        echart_1.a('series', series);
    }
    updateData(d) {
        if (!d) return;
        let dm = this.dm();
        let prettyNumber = this.prettyNumber;
        //瞬时流量
        let flow = dm.getDataByTag('flow');
        // 瞬时热量
        let heat = dm.getDataByTag('heat');
        // 累计热量
        let sumheat = dm.getDataByTag('sumheat');
        // 供水温度
        let waterIn = dm.getDataByTag('waterIn');
        // 回水温度
        let waterOut = dm.getDataByTag('waterOut');
        // 供水压力
        let pressIn = dm.getDataByTag('pressIn');
        // 回水压力
        let pressOut = dm.getDataByTag('pressOut');

        // 供暖天数
        let warmday = dm.getDataByTag('warmday');
        // 当前日期
        let curDate = dm.getDataByTag('curDate');
        //报警
        let alarm = dm.getDataByTag('alarm');

        flow.s('text', prettyNumber(d[0].low32))
        heat.s('text', prettyNumber(d[1].low32))
        sumheat.s('text', prettyNumber(d[0].low32))
        waterIn.s('text', prettyNumber(d[1].low32))
        waterOut.s('text', prettyNumber(d[0].low32))
        pressIn.s('text', prettyNumber(d[1].low32))
        pressOut.s('text', prettyNumber(d[0].low32))
        warmday.s('text', prettyNumber(d[0].low32, 0))
        curDate.s('text', moment().format('YYYY-MM-DD hh:mm:ss'));
        alarm.a('table.dataSource', [
          {
            "orderType": d[0].low32,
            "orderId": d[0].low32,
            "orderTime": d[0].low32
          },
          {
            "orderType": d[0].low32,
            "orderId": d[0].low32,
            "orderTime": d[0].low32
          },
          {
            "orderType": d[0].low32,
            "orderId": d[0].low32,
            "orderTime": d[0].low32
          },
          {
            "orderType": d[0].low32,
            "orderId": d[0].low32,
            "orderTime": d[0].low32
          },
          {
            "orderType": d[0].low32,
            "orderId": d[0].low32,
            "orderTime": d[0].low32
          },
          {
            "orderType": d[0].low32,
            "orderId": d[0].low32,
            "orderTime": d[0].low32
          }
        ]);
    }
    addEvent() {
        let gv = this;
        // 选中边框为0
        gv.getSelectWidth = function() { return 0; };
        // 禁止鼠标缩放
        gv.handleScroll = function() {};
        // 禁止 touch 下双指缩放
        gv.handlePinch = function() {};
        // 禁止平移
        gv.setPannable(false);
        // 禁止框选
        gv.setRectSelectable(false);
        // 隐藏滚动条
        gv.setScrollBarVisible(false);
        // 禁止图元移动
        gv.setMovableFunc(function() { return false; });
    }

}

export default new ContentView();