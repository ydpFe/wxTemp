<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div v-if="text">我是true</div>
    <h2>{{text==10?100:1}}</h2>
    <div v-show="msg==1">1111</div> 
    <div v-bind:class="classObj">我是计算属性</div>
    <div>{{$store.state.count}}</div>
    <div @click="increment" class="btn">点击我</div>
    <router-link to="/headertop">Go to Foo</router-link>
    <div @click="setData">点击我</div>
    <ul>
      <li v-for="(data,index) in msg02">
        {{parentsName}}-{{index}}-{{data.name}}
      </li>
    </ul>
    <input type="checkbox" id="checkbox" v-model="checked" @click="setData($event)">
    <label for="checkbox">{{ checked }}</label>
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <div>Checked names: {{ checkedNames }}</div>

    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <div>Picked: {{ picked }}</div>
    <select v-model="selected" multiple>
      <option value='01'>A</option>
      <option value='02'>B</option>
      <option value='03'>C</option>
    </select>
    <div>Selected: {{ selected }}</div>
    <input v-model.lazy="message"/>
    <div>input输入值为:{{message}}</div>
    <input v-model.number="message02"/>
    <div>input输入值为:{{message02}}</div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {


  data () {
    return {
      msg: '来自麦浪XPEKI',
      text:false,
      checked:false,
      message:'',
      message02:'',
      checkedNames:[],
      selected:[],
      isActive: 0,
      picked:[],
      error: null,
      parentsName:'我是',
      msg02:[
      {name:'foo'},
      {name:'bar'}
      ]
    }
  },
  computed:{
    classObj:function(){
      return {
        active: this.isActive==0,
        'text-danger': this.isActive && !this.error,
      }
    }
  },
  methods:{
    ...mapActions([
      'increment' 
    ]),
    setData(event){
      this.$router.push('/app/headertop')
    },
    messageChange(){
      console.log('11')
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  
  h1,
  h2 {
    font-weight: normal;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: inline-block;
    margin: 0 10px;
  }
  
  a {
    color: #42b983;
  }
  
  .btn {
    width: 170px;
    height: 40px;
    background: green;
    margin: 0 auto;
    color: #fff;
    line-height: 40px;
    margin-top: 20px;
    cursor: pointer;
  }
</style>