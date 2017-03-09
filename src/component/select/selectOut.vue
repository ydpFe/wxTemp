<template>
    <div>
        <loading :loadingStatus="loadingStatus"></loading>
        <div class="borderTop marginTop_10">
            <template v-for="data in colorObj">
                <div class="selectMsg borderBottom fontSize_15" @click="setOut" :value="data.id">{{data.color_name}}</div>
            </template>
        </div>
            
        <router-link :to="{ name: 'defindOutColor'}" class="selectMsg paddingTop_20">
            <div class="fontSize_15">自定义颜色</div>
            <img src="../../assets/newIcon.png" class="selectIcon">
        </router-link>
    </div>
</template>

<script>
import loading from '../common/loading.vue'
export default{
    data(){
        return {
            colorObj:"",
            seriesId:"",
            loadingStatus:true
        }
    },
    components:{
        'loading':loading
    },
    mounted(){
        let apiHost = this.$store.state.APIHOST;
        this.seriesId=this.$store.state.seriesId;
        //获取外观颜色
        this.$http.get(apiHost+'/car/color_series_list',{params: {series_id: this.seriesId}}).then(res => {
            if (res.data.code === 0) {
                this.colorObj = res.data.data.out;
                this.loadingStatus=false;
            }  
        },(res => {}));
    },
    methods:{
        /**
         * 设置外观颜色
         * @param {object} event - DOM元素信息.
         */
        setOut(event){
            this.$store.commit('setOut',event.target.outerText);
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.fontSize_15{
    font-size:0.15rem;
    color:#333;
}
.marginTop_10{
    margin-top:0.1rem;
}
.paddingTop_20{
    margin-top:0.2rem;
}
.borderTop{
    border-top:#efefef 1px solid;
}
.borderBottom{
    border-bottom:#efefef 1px solid;
}
.selectMsg{
    display:flex;
    align-items: center;
    height:0.5rem;
    background:#fff;
    padding:0 0.16rem;
}
.selectIcon{
    width:0.08rem;
    height:0.13rem;
    margin-left: auto
}
a{
    color:#333;
}
</style>
