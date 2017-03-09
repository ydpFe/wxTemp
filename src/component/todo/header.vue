<template>
  <div id="header">
    <a @click="jump">返回</a>
    <div>下面是state的几种使用方式</div>
    <div>{{this.$store.state.count}}</div>
    <div>{{countAlias}}</div>
    <div>{{num}}</div>
    <div>下面是getter的几种使用方式</div>
    <div>{{this.$store.getters.toDO}}</div>
    <div>{{toDO}}</div>
    <div @click="actionDispath">通过action触发mutations</div>
    <div @click="increment">通过mapAction触发mutations</div>
    <div @click="commit">通过commit触发mutations</div>
    <div @click="increment">通过mapMutations触发mutations</div>
  </div>
</template>

<script>

import { mapGetters, mapActions ,mapState,mapMutations} from 'vuex';
import axios from 'axios';
export default{
  computed: {
    ...mapState({
        countAlias: 'count',
      }),
    ...mapGetters([
      'toDO'
    ]),
      num(){
        return this.$store.state.count+"我的"
      }
  },
  created(){
    this.getMsg();
  },
  methods:{
    ...mapActions([
      'increment' 
    ]),
    ...mapMutations([
      'incrementNew'
    ]),
    //初始化数据
    getMsg(){
      axios.get('https://api.cyb.kuaiqiangche.com/event/source/activity_background')
        .then(function (response) {
          console.log(response.data.data.bgColor);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    jump(){
      this.$router.go(-1);
    },
    actionDispath(){
      this.$store.dispatch('increment');
    },
    commit(){
      this.$store.commit('incrementNew');
    },
    setState(){
      
    },
  }
}
</script>

<style lang='sass'>
#header{
    width:100%;
    height:auto;
    background:#f1f1f1;
}
</style>
