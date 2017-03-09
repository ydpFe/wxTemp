<template>
    <div class="container">
        <div class="overFlow">
            <div class="colorTitle">车型</div>
            <input type="text" class="colorInput" placeholder="请输入自定义车型" v-model="carType" />
            <div class="colorTitle">指导价（显示小数点后两位）</div>
            <input type="number" class="colorInput" placeholder="请输入指导价" v-model="price" />
            <div class="g-r-center colorBtn" :class="{'checkBtn': status}" @click="submit">确定完成</div>
        </div>
        <pop-up :title="title" v-show="msgStatus" class="topObj"></pop-up>
    </div>
    
</template>

<script>
import popUp from '../common/popUp.vue'
export default{
    data(){
        return {
            carType: "",
            price: null,
            status: false,
            msgStatus: false,
            title: ""
        }
    },
    watch: {
        carType() {
            this.status = (this.carType && this.price ? true : false);
        },
        price() {
            this.status = (this.carType && this.price ? true : false);
        }
    },
    methods: {
        submit() {
            if (this.carType && this.price) {

                if (this.price <= 0 || this.price > 3500) {
                    this.title = "请输入1~3500的价格";
                    this.msgStatus = true;
                    setTimeout(() => {
                        this.msgStatus = false;
                    },1000);
                } else {
                    this.$router.push({ path: 'onlineSearch', query: { seriesId: Number(this.$route.query.seriesId), title: this.$route.query.seriesName+encodeURIComponent(' '+this.carType),price: this.price }});
                }
            } else {
                this.title = (!this.carType ? "请输入自定义车型" : "请输入指导价")
                this.msgStatus = true;
                setTimeout(() => {
                    this.msgStatus = false;
                },1000);
            }
        }
    },
    components:{
        'pop-up':popUp
    },
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
    top: 25%;
}
</style>
