// import _ from 'lodash';
//test.remove
import Vue from 'vue'
import hello from './Hello'
import btnArea from './component/BtnArea'
import printTable from './component/PrintTable'
import VueResource from 'vue-resource'
import uikit from './uikit'
import 'uikit-css'

Vue.use(uikit)
Vue.use(VueResource)

new Vue({
    el: '#app',
    components: {
        'hello': hello,
        'btn-area': btnArea ,
        'print-table':printTable
    },
    data () {
        return {
            "foo":"bar",
            "printItems" : [
                {
                    "name":"奶茶",
                    "size":"大杯",
                    "ice":"加冰",
                    "sugar":"加奶",
                    "add":"珍珠",
                    "price":"1.00",
                },
                {
                    "name":"普洱",
                    "size":"小杯",
                    "ice":"小冰",
                    "sugar":"飞奶",
                    "add":"啫喱",
                    "price":"4.00",
                }
            ]
        }
    },
    mounted: function () {
        this.$http.get("https://api.ffshen.xyz/settle/items/")
                     .then((data) => {
                              console.log(data)
                             this.printItems = data.body;
                         })
    },
    methods : {
        clearPrintData:function () {
            this.printItems = [] ;
        },
        messageFormBtnArea:function (str) {
            console.log("get message."+str)
        },
        confirm : function () {
            this.$ui.confirm('您确认要删除以下的数据吗？', {
                "labels":{
                    "cancel":"取消",
                    "ok":"确定"
                }
            },() => {
                // 这里编写对数据进行删除的代码
                console.info("callback" + this.foo)
            })
        }

    }
})