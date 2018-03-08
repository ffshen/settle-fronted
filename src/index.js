// import _ from 'lodash';
//test.remove
import Vue from 'vue'
import hello from './Hello'
// import btnArea from './component/BtnArea'
// import printTable from './component/PrintTable'
import settle from './component/Settle'
import weighing from './component/Weighing'
import VueResource from 'vue-resource'
import uikit from './uikit'
import 'uikit-css'

Vue.use(uikit)
Vue.use(VueResource)

new Vue({
    el: '#app',
    components: {
        // 'hello': hello,
        // 'btn-area': btnArea ,
        // 'print-table':printTable
        'settle': settle,
        'weighing': weighing
    }
})