<template>
    <div>
        <div class="overFlow">
            <div class="colorTitle">请输入外观颜色</div>
            <input type="text" class="colorInput" v-model="val"/>
            <div class="g-r-center colorBtn" :class="{'checkBtn':zIndex}" @click="setColor">确定完成</div>
        </div>
        <pop-up title="您还未输入外观颜色" class="topObj" v-show="error==true"></pop-up>
    </div>
</template>

<script>
import popUp from '../common/popUp.vue'//错误弹窗组件
export default{
    data(){
        return {
            val:"",
            zIndex:false,
            error:false
        }
    },
    components:{
        'pop-up':popUp
    },
    watch:{
        /**
         * 监听input的值
         */
        val(){
            if(this.val!=""){
                this.zIndex=true;
            }else{
                this.zIndex=false;
            }
        }
    },
    methods:{
        /**
         * 设置外观颜色
         */
        setColor(){
            if(this.zIndex==false){
                this.error=true;
                setTimeout(()=>{
                    this.error=false;
                },1500);
                return;
            }else{
                this.$store.commit('setOut',this.val);
                this.$router.go(-2)
            }
        }
    }
}
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
.colorTitle{
    padding:0 0.16rem;
    color:#333;
    margin-top:0.15rem;
}
.colorInput{
    width:100%;
    height:0.5rem;
    margin-top:0.05rem;
    background:#fff;
    border-top:#efefef 1px solid;
    border-bottom:#efefef 1px solid;
    text-indent:0.16rem;
    float:none;
}
.colorBtn{
    background: #FF7206;
    border-radius:0.04rem;
    width:3.56rem;
    height:0.44rem;
    margin:0 auto;
    color:#fff;
    margin-top:0.3rem;
    opacity:0.6
}
.overFlow{
    overflow:auto;
}
.checkBtn{
    background: #FF7206;
    border-radius: 4px;
    opacity:1;
}
.topObj{
    top:0.46rem;
}
</style>