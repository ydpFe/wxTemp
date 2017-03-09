"use strict";
import Vue      from 'vue'
import Router   from 'vue-router'

const brandSearch = r => require.ensure([], () => r(require('../component/brand/brandSearch.vue')), 'brandSearch')
const importList = r => require.ensure([], () => r(require('../component/brand/importList.vue')), 'importList')
const carSeries = r => require.ensure([], () => r(require('../component/brand/carSeries.vue')), 'carSeries')
const carType = r => require.ensure([], () => r(require('../component/brand/carType.vue')), 'carType')
const mySearch = r => require.ensure([], () => r(require('../component/mySearch/mySearch.vue')), 'mySearch')
const searchDetail = r => require.ensure([], () => r(require('../component/searchDetail/searchDetail.vue')), 'searchDetail')
const publishSuccess = r => require.ensure([], () => r(require('../component/publishSuccess/publishSuccess.vue')), 'publishSuccess')
const defindOutColor = r => require.ensure([], () => r(require('../component/defined/defindOutColor.vue')), 'defindOutColor')
const defindInColor = r => require.ensure([], () => r(require('../component/defined/defindInColor.vue')), 'defindInColor')
const defindCarType = r => require.ensure([], () => r(require('../component/defined/defindCarType.vue')), 'defindCarType')
const selectIn = r => require.ensure([], () => r(require('../component/select/selectIn.vue')), 'selectIn')
const selectOut = r => require.ensure([], () => r(require('../component/select/selectOut.vue')), 'selectOut')
const selectRegion = r => require.ensure([], () => r(require('../component/select/selectRegion.vue')), 'selectRegion')
const onlineSearch = r => require.ensure([], () => r(require('../component/onlineSearch/onlineSearch.vue')), 'onlineSearch')
const error = r => require.ensure([], () => r(require('../component/error/error.vue')), 'error')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    { path: "/", component: brandSearch, name: "index", meta: {title: "选择品牌"}},
	{ path: "/importList", component: importList, name: "importList" },
	{ path: "/carSeries", component: carSeries, name: "carSeries", meta: {title: "选择车系"}},
	{ path: "/carType", component: carType, name: "carType", meta: {title: "选择车款"}},
	{ path:'/mySearch', component:mySearch, name:'mySearch', meta: {title: "我的寻车"}},
	{ path: "/searchDetail", component: searchDetail, name:'searchDetail' , meta: {title: "我的寻车"}},
	{ path: "/publishSuccess", component: publishSuccess, name:'publishSuccess' , meta: {title: "发布成功"}},
	{ path: "/selectIn", component: selectIn, name:'selectIn' , meta: {title: "选择内饰"}},
	{ path: "/selectOut", component: selectOut, name:'selectOut' , meta: {title: "选择外观"}},
	{ path: "/selectRegion", component: selectRegion, name:'selectRegion' , meta: {title: "上牌区域"}},
	{ path: "/defindCarType", component: defindCarType, name:'defindCarType' , meta: {title: "自定义车型"}},
	{ path: "/defindOutColor", component: defindOutColor, name:'defindOutColor' , meta: {title: "自定义外观"}},
	{ path: "/defindInColor", component: defindInColor, name:'defindInColor' , meta: {title: "自定义内饰"}},
	{ path: "/onlineSearch", component: onlineSearch, name:'onlineSearch' , meta: {title: "在线寻车"}},
	{ path: "*", component: error, name:'error' , meta: {title: "404"}}
  ]
})