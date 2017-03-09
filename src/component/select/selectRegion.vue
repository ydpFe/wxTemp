<template>
    <div>
        <ul class="provinceBox">
             <template v-for="(data,index) in dataList">
                <li :value="data.id" :class="{'checked':index==zIndex}" @click="setProvince(data,index)">{{data.name}}</li>
             </template>
        </ul>
        <ul class="cityBox" v-show="showCity==true">
            <template v-for="(data,index) in cityList">
                <li :value="data.id" :class="{'checked':index==cIndex}" @click="setCity(data,index)">{{data.name}}</li>
             </template>
        </ul>
    </div>
</template>

<script>

export default{
    data(){
        return {
            dataList:{},
            cityList:{},
            showCity:false,
            zIndex:"",
            cIndex:"",
            province:"",
            city:""
        }
    },
    created() {
        let apiHost = this.$store.state.APIHOST;
        //获取省市
        this.$http.get(apiHost+'/event/get_region').then(res => {
            if (res.data.code === 0) {
                this.dataList = res.data.data;
            }  
        },(res => {}));
    },
    methods:{
        /**
         * 选中省份
         * @param {object} data - 数据
         * @param {number} index - index值
         */
        setProvince(data,index){
            this.showCity=true;
            this.cityList=data.city;
            this.zIndex=index;
            this.province=data.name;
        },
        /**
         * 选中城市
         * @param {object} data - 数据
         * @param {number} index - index值
         */
        setCity(data,index){
            this.cIndex=index;
            this.city=data.name
            console.log(this.province+"  "+this.city)
            this.setRegion();
        },
        /**
         * 设置省份和城市
         */
        setRegion(){
            this.$store.commit('setRegion',{"province":this.province,"city":this.city});
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.provinceBox{
    /*margin-top:0.1rem;*/
    border-top:#efefef 1px solid;
    height:100vh;
    overflow:scroll;
    li{
        padding-left:0.16rem;
        height:0.5rem;
        background:#fff;
        color:#333;
        font-size:0.14rem;
        display: flex;
        flex: 1;
        align-items: center;
        border-bottom:#efefef 1px solid;
    }
    .checked{
        background:#f9f6f5;
    }
}
.cityBox{
    background: #FFFFFF;
    box-shadow: -2px 2px 5px 0 ;
    position:absolute;
    top:0;
    right:0;
    z-index:10;
    width:2.4rem;
    height:100vh;
    overflow:scroll;
    li{
        width:2.4rem;
        height:0.44rem;
        display: flex;
        flex: 1;
        padding-left:0.2rem;
        border-bottom:#efefef 1px solid;
        align-items: center;
        border-bottom:#efefef 1px solid;
    }
    .checked{
        background:#f9f6f5;
    }
}
a{
    color:#333;
}
</style>
