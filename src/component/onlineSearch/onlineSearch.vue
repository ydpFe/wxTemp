<template>
    <div>
        <pop-up :title="titleMsg" class="topObj" v-show="error==true"></pop-up>
        <div class="overFlow">
            <div class="padding_16 flex borderBottom">
                <div class="fontStyle01">车型</div>
                <div @click="back">
                    <div class="flex padding_10">
                        <div class="titleStyle">{{carTitle}}</div>
                        <img src="../../assets/newIcon.png" class="selectIcon">
                    </div>
                    <div class="carMsg ellipsisObj">{{carMsg}}</div>
                </div>
            </div>
            <div class="padding_16 flex borderBottom h_44 center">
                <div class="fontStyle02">指导价</div>
                <div>{{price|priceFilter}}</div>
            </div>
        </div>
        <div class="overFlow marginTop_10 borderTop">
            <div class="padding_16 flex borderBottom h_44 center">
                <div class="fontStyle02">外观</div>
                <router-link :to="{ name: 'selectOut'}" class="flex widthStyle_232">
                    <div class="color_999">{{this.$store.state.selectOut}}</div>
                    <img src="../../assets/newIcon.png" class="selectIcon">
                </router-link>
            </div>
            <div class="padding_16 flex borderBottom h_44 center">
                <div class="fontStyle02">内饰</div>
                <router-link :to="{ name: 'selectIn'}" class="flex widthStyle_232">
                    <div class="color_999">{{this.$store.state.selectIn}}</div>
                    <img src="../../assets/newIcon.png" class="selectIcon">
                </router-link>
            </div>
        </div>
        <div class="overFlow marginTop_10 borderTop">
            <div class="padding_16 flex borderBottom h_44 center">
                <div class="fontStyle02">上牌地区</div>
                <router-link :to="{ name: 'selectRegion'}" class="flex widthStyle_232">
                    <div class="color_999">{{this.$store.state.province}}{{this.$store.state.city}}</div>
                    <img src="../../assets/newIcon.png" class="selectIcon">
                </router-link>
            </div>
            <div class="padding_16 flex h_44 center">
                <div class="fontStyle02">提车区域</div>
            </div>
            <div class="padding_16 flex">
                <ul class="flex flexWarp paddingBottom">
                    <li class="liStyle liBg" :class="{'check':zIndex==1}" @click="zIndex=1">不限</li>
                    <li class="liStyle liBg" :class="{'check':zIndex==2}" @click="zIndex=2">东区</li>
                    <li class="liStyle liBg" :class="{'check':zIndex==3}" @click="zIndex=3">南区</li>
                    <li class="liStyle liBg" :class="{'check':zIndex==4}" @click="zIndex=4">西区</li>
                    <li class="liStyle liBg" :class="{'check':zIndex==5}" @click="zIndex=5">小北</li>
                    <li class="liStyle liBg" :class="{'check':zIndex==6}" @click="zIndex=6">大北</li>
                </ul>
            </div>
        </div>
        <div class="overFlow marginTop_10 borderTop">
            <div class="padding_16 flex borderBottom h_44 center justContent">
                <div :class="{'checked':selectIndex==1}" @click="selectIndexFun(1)">优惠点数</div>
                <div :class="{'checked':selectIndex==2}" @click="selectIndexFun(2)">优惠万数</div>
                <div :class="{'checked':selectIndex==3}" @click="selectIndexFun(3)">加价万数</div>
                <div :class="{'checked':selectIndex==4}" @click="selectIndexFun(4)">直接报价</div>
            </div>
            <div class="padding_16 flex borderBottom h_60 center" v-if="selectIndex==1">
                <div class="color_999 w_73">优惠点数</div>
                <input type="text" class="inputStyle" placeholder="请输入优惠点数" v-model="inputVal" @blur="priceFilter">
            </div>
            <div class="padding_16 flex borderBottom h_60 center" v-if="selectIndex==2">
                <div class="color_999 w_73">优惠万数</div>
                <input type="text" class="inputStyle" placeholder="请输入优惠万数" v-model="inputVal" @blur="priceFilter">
            </div>
            <div class="padding_16 flex borderBottom h_60 center" v-if="selectIndex==3">
                <div class="color_999 w_73">加价万数</div>
                <input type="text" class="inputStyle" placeholder="请输入加价万数" v-model="inputVal" @blur="priceFilter">
            </div>
            <div class="padding_16 flex borderBottom h_60 center" v-if="selectIndex==4">
                <div class="color_999 w_73">期望行情</div>
                <input type="text" class="inputStyle" placeholder="请输入报价价格" v-model="inputVal" @blur="priceFilter">
            </div>
        </div>
        <div class="overFlow marginTop_10 borderTop">
            <div class="padding_16 flex h_44 center">
                <div class="fontStyle02">其他</div>
            </div>
            <div class="padding_16 flex">
                <ul class="flex flexWarp paddingBottom">
                    <li class="liStyle liBg"  value="0" @click="orderDom">现车</li>
                    <li class="liStyle liBg"  value="1" @click="orderDom">定金已收</li>
                    <li class="liStyle liBg"  value="2" @click="orderDom">店票</li>
                    <li class="liStyle liBg"  value="3" @click="orderDom">增值</li>
                    <li class="liStyle liBg"  value="4" @click="orderDom">手续随车</li>
                    <li class="liStyle liBg"  value="5" @click="orderDom">手续齐全</li>
                    <li class="liStyle liBg"  value="6" @click="orderDom">本地车源</li>
                    <li class="liStyle liBg"  value="7" @click="orderDom">户准寻车</li>
                    <li class="liStyle liBg"  value="8" @click="orderDom">不店保</li>
                </ul>
            </div>
        </div>
        <div class="overFlow marginTop_10 borderTop">
            <div class="padding_16 flex borderBottom h_44 center">
                <div class="fontStyle02">姓名</div>
                <input type="text" class="inputStyle02" placeholder="请输入您的姓名">
            </div>
            <div class="padding_16 flex borderBottom h_44 center">
                <div class="fontStyle02">手机号</div>
                <input type="text" class="inputStyle02" placeholder="请输入手机号">
            </div>
            <div class="padding_16 flex borderBottom h_44 center">
                <div class="fontStyle02">验证码</div>
                <div class="flex center">
                    <input type="text" class="inputStyle03" placeholder="请输入验证码">
                    <div class="getCode" @click="getCode">{{code}}{{time}}</div>
                </div>
            </div>
        </div>
        <div class="pushCarBtn g-r-center">发布寻车</div>
    </div>
</template>

<script>
import popUp from '../common/popUp.vue'//错误弹窗组件
export default{
    data(){
        return {
            price:"",//指导价
            zIndex:1,//设置提车区域 默认选中
            orderIndex:[],//设置其他
            selectIndex:1,//设置优惠默认选中 1优惠点数  2优惠万数  3加价万数   4直接报价
            code:"获取验证码",//验证码MSG
            time:"",//时间
            type:false,//获取验证码flag
            inputVal:"",//优惠
            error:false,//true弹窗错误提示框
            titleMsg:"",//弹窗title内容
            seriesId:"",//车款ID
            carTitle:"",//car titile
            carMsg:""//car 详细

        }
    },
    components:{
        'pop-up':popUp
    },
    filters:{
        discountPoints(val){
            console.log(type)
        },
        priceFilter(val){
            return val+"万"
        }
    },
    watch:{
        /**
         * 监听input的值
         */
        inputVal(){
            if(this.selectIndex==1){
                if(parseFloat(this.inputVal)<parseFloat(0) || parseFloat(this.inputVal)>parseFloat(80)){
                    this.error=true;//显示弹窗
                    this.setTime();//消失弹窗
                    this.titleMsg="输入的值请大于0且小于80";
                    this.inputVal=""
                }
            }
            if(this.selectIndex==2){
                let limit=parseFloat(this.price)*0.8;
                let max=parseFloat(limit).toFixed(1);
                if(parseFloat(this.inputVal)<parseFloat(0) || parseFloat(this.inputVal)>max){
                    this.error=true;//显示弹窗
                    this.setTime();//消失弹窗
                    this.titleMsg="输入的值请大于0且小于"+max;
                    this.inputVal=""
                }
            }
            if(this.selectIndex==3){
                let limit=parseFloat(this.price);
                if(parseFloat(this.inputVal)<parseFloat(0) || parseFloat(this.inputVal)>limit){
                    this.error=true;//显示弹窗
                    this.setTime();//消失弹窗
                    this.titleMsg="输入的值请大于0且小于"+limit;
                    this.inputVal=""
                }
            }
            if(this.selectIndex==4){
                let min=parseFloat(parseFloat(this.price)*0.2).toFixed(1);
                let max=parseFloat(parseFloat(this.price)*2).toFixed(1);
                if(parseFloat(this.inputVal) > max){
                    this.error=true;//显示弹窗
                    this.setTime();//消失弹窗
                    this.titleMsg="输入的值请大于"+min+"且小于"+max;
                    this.inputVal=""
                }
            }
            
        }
    },
    mounted(){
        this.price=this.$route.query.price;
        let msg=decodeURIComponent(this.$route.query.title);
        let index=msg.indexOf(" ");
        this.carTitle=msg.substring(0,index);
        this.carMsg=msg.substring(index,msg.length);
        this.$store.commit('setSeriesId',this.$route.query.seriesId);
    },
    methods:{
        /**
         * 其他-多选
         * @param {object} event - DOM元素信息.
         */
        orderDom(event){
            let val=event.target.value;
            if(this.orderIndex.indexOf(val)!=-1){
                let code=this.orderIndex.indexOf(val);
                this.orderIndex.splice(code,1);
                 event.target.className=" liStyle liBg"
            }else{
                this.orderIndex.push(val);
                event.target.className=" liStyle liBg check"
            }
        },
        /**
         * 设置重新发送验证码
         */
        getCode(){
            if(this.type==false){
                this.code="重新发送"
                this.time=60;
                this.type=true;
                let int=setInterval(()=>{
                    this.time=this.time-1;
                    if(this.time==0){
                        this.code="获取验证码"
                        this.time="";
                        this.type=false;
                        clearInterval(int);
                    }
                },1000)
            } 
        },
        setTime(){
            setTimeout(()=>{
                this.error=false;
            },2000);
        },
        priceFilter(){
            if(this.inputVal==''){
                return;
            }
            if(this.selectIndex==4){
                let min=parseFloat(parseFloat(this.price)*0.2).toFixed(1);
                let max=parseFloat(parseFloat(this.price)*2).toFixed(1);
                if(parseFloat(this.inputVal) < min){
                    this.error=true;//显示弹窗
                    this.setTime();//消失弹窗
                    this.titleMsg="输入的值请大于"+min+"且小于"+max;
                    this.inputVal=""
                    return;
                }
            }
            if(this.selectIndex==3){
                let msg=parseFloat(this.inputVal).toFixed(2);
                this.inputVal=msg;
                return;
            }
            let msg=parseFloat(this.inputVal).toFixed(1);
            this.inputVal=msg;
        },
        commit(){
            this.$store.commit('setDefault');
        },
        selectIndexFun(type){
            this.selectIndex=type;
            this.inputVal="";
        },
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
$color_999:#999;
.widthStyle_232{
    width:2.32rem;
}
.color_999{
    color:$color_999;
}
.marginTop_10{
    margin-top:0.1rem;
}
.paddingBottom{
    padding-bottom:0.1rem;
}
.flexWarp{
    flex-wrap:wrap;
}
.h_44{
    height:0.44rem;
}
.h_60{
    height:0.6rem;
}
.pushCarBtn{
    margin:0.3rem 0.16rem 0.1rem 0.16rem;
    height:0.44rem;
    background: #FF7206;
    border-radius:0.04rem;
    font-size:0.15rem;
    color:#fff;
}
.getCode{
    width:1rem;
    height:0.32rem;
    background: #FF7206;
    border-radius:0.05rem;
    margin-left:auto;
    color:#fff;
    display:flex;
    align-items: center;
    justify-content: center;
}
.liStyle{
    width:1.08rem;
    height:0.4rem;
    display:flex;
    margin:0 0.03rem 0.1rem 0.03rem;
    border-radius: 0.04rem;
    align-items: center;
    justify-content: center;
}
.inputStyle{
    width:2.7rem;
    height:0.4rem;
    background: #F4F4F4;
    border-radius: 0.04rem;
    text-indent:0.1rem;
}
.inputStyle02{
    width:2.57rem;
    height:0.4rem;
    background: #fff;
    border:none;
}
.inputStyle03{
    width:1.43rem;
    height:0.4rem;
    background: #fff;
    border:none;
}
.w_73{
    width:0.7rem;
}
.liBg{
    background: #F2F2F2;
    color:#333;
}
.check{
    background: #FFE3CD;
    color: #FF7206;
}
.checked{
    color: #FF7206;
}
.fontStyle01{
    width:1.02rem;
    font-size:0.14rem;
    color:#999;
    padding-top:0.12rem;
}
.fontStyle02{
    font-size:0.14rem;
    color:#999;
    width:1.02rem;
}
.padding_10{
    padding-top:0.1rem;
}
.selectIcon{
    width:0.08rem;
    height:0.13rem;
    margin-left: auto
}
.carMsg{
    font-size:0.14rem;
    color:#5f5f5f;
    padding:0.03rem 0 0.12rem 0;
    width:2.32rem;
}
.titleStyle{
    font-size:0.18rem;
    color:#333;
}
.flex{
    display:flex;
}
.overFlow{
    overflow: auto;
}
.padding_16{
    padding:0 0.16rem;
    background:#fff;
}
.borderTop{
    border-top:#efefef 1px solid;
}
.borderBottom{
    border-bottom:#efefef 1px solid;
}
.ellipsisObj {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.center {
    align-items: center;
}
.justContent{
    justify-content:space-between;
}
a{
    color:#333;
}
.topObj{
    top:2.8rem;
}
</style>
