import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

// 创建一个对象来保存应用启动时的初始状态
const state = {
  APIHOST: "https://api.cyb.kuaiqiangche.com",
  importBrandID: null,
  selectOut:"请选择",//选择外观
  selectIn:"请选择",//选择内饰颜色
  province:"请选择",//上牌省份
  city:"",//上牌城市
  seriesId:"",//车款ID
}

const actions = {
  getImportBrandId (context){
    console.log('1')
    context.commit('setImportBrandId')
  }
}
const getters = {
  
}

// 创建一个对象存储一系列我们接下来要写的 mutation 函数
const mutations = {
  // mutation 的第一个参数是当前的 state
  // 你可以在函数里修改 state
  setImportBrandId (id) {
    state.importBrandID = id;
  },
  //设置 在线寻车 的数据为默认
  setDefault(state){
    state.selectOut="请选择";
    state.selectIn="请选择";
    state.province="请选择";
    state.city="";
    state.seriesId="";
  },
  //设置外观
  setOut(state,msg){
    state.selectOut=msg;
  },
  //设置内饰颜色
  setIn(state,msg){
    state.selectIn=msg;
  },
  //设置上牌区域
  setRegion(state,region){
    state.province=region.province+" ";
    state.city=region.city;
  },
  //设置车款ID
  setSeriesId(state,msg){
    state.seriesId=msg;
  }
}

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})