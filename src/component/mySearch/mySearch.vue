<template>
    <div>
        <!--<ul class="searchUl">
            <li>
                <div class="overFlow">
                    <div class="fl"><img src="../../assets/searchIcon01.png" class="iconStyle"></div>
                    <div class="searchTitle fl color_333">雪佛兰 迈锐宝 12.90万</div>
                    <div class="fr searchState" v-bind:style="colororg">进行中</div>
                </div>
                <div class="overFlow marginTop_5">
                    <div class="fl fontSize_14 color_333">2016款2.0L 手动一体 豪华版</div>
                    <div class="fr fontSize_14 color_333">卖江西南昌</div>
                </div>
                <div class="overFlow marginTop_5">
                    <div class="fl fontSize_14 color_333">美规/白/黑</div>
                    <div class="fr fontSize_14 opacity_5">2016/12/12 12:12</div>
                </div>
            </li> 
            <li>
                <div class="overFlow">
                    <div class="fl"><img src="../../assets/searchIcon02.png" class="iconStyle"></div>
                    <div class="searchTitle fl color_333">雪佛兰 迈锐宝 12.90万</div>
                    <div class="fr searchState" v-bind:style="color888">已关闭</div>
                </div>
                <div class="overFlow marginTop_5">
                    <div class="fl fontSize_14 color_333">2016款2.0L 手动一体 豪华版</div>
                    <div class="fr fontSize_14 color_333">卖江西南昌</div>
                </div>
                <div class="overFlow marginTop_5">
                    <div class="fl fontSize_14 color_333">美规/白/黑</div>
                    <div class="fr fontSize_14 opacity_5">2016/12/12 12:12</div>
                </div>
            </li>
        </ul>-->
        <div class="noMsgIconBox marginAuto"><img src="../../assets/searchIcon03.png" class="noMsgIcon"></div>
        <p class="marginAuto noMsgText fontSize_14">您还没有发布寻车信息</p>
        <div class="noMsgBtn g-r-center marginAuto">去发布寻车</div>
    </div>
</template>

<script>

export default{
    data(){
        return {
            color888:{
                color:'#888'
            },
            colororg:{
                color:'#FF7206'
            }
        }
    },
    created(){
        
    }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.overFlow{
    overflow:auto;
}
.fontSize_14{
    font-size:0.14rem;
}
.marginTop_5{
    margin-top:0.05rem;
}
.opacity_5{
    opacity: 0.5;
}
.color_333{
    color:#333;
}
.marginAuto{
    margin:0 auto;
}
.searchUl{
    li{
        padding:0 0.16rem;
        height:0.88rem;
        background:#fff;
        margin-top:0.1rem;
        .iconStyle{
            width:0.2rem;
            height:0.2rem;
            margin-top:0.09rem;
        }
        .searchTitle{
            font-size:0.16rem;
            margin:0.1rem 0 0 0.04rem;
        }
        .searchState{
            font-size: 0.14rem;
            margin-top:0.11rem;
        }
    }
}
.noMsgIconBox{
    width:1.73rem;
    height:0.49rem;
    margin-top:1.5rem;
}
.noMsgIcon{
    width:1.73rem;
    height:0.49rem;
}
.noMsgText{
    width:1.44rem;
    margin-top:0.15rem;
    color:#888;
}
.noMsgBtn{
    width:1.2rem;
    height:0.36rem;
    background: #FF7206;
    border-radius: 0.05rem;
    color:#fff;
    margin-top:0.2rem;
}
</style>
