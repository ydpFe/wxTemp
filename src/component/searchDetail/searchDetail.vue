<template>
    <div>
        <div class="sdBoxTitle borderBottom">
            <div class="name">宝马三系</div>
            <div class="sdFlex paddingTop_5">
                <div class="fontSize_14 msg ellipsisObj">2016款2.0L 手动一体111111111111111</div>
                <div class="price opacity_5">指导价:33.58万元</div>
            </div>
        </div>
        <div class="sdCenter borderTop">
            <div class="sdFlex borderBottom padding_16">
                <div class="fontSize_14 padding_12 opacity_5 width_102">外观内饰</div>
                <div class="fontSize_14 padding_12">幻影黑/黑棕</div>
            </div>
            <div class="sdFlex borderBottom padding_16">
                <div class="fontSize_14 padding_12 opacity_5 width_102">上牌地区</div>
                <div class="fontSize_14 padding_12">杭州</div>
            </div>
            <div class="sdFlex borderBottom padding_16">
                <div class="fontSize_14 padding_12 opacity_5 width_102">提车区域</div>
                <div class="fontSize_14 padding_12">东区</div>
            </div>
            <div class="sdFlex borderBottom padding_16">
                <div class="fontSize_14 padding_12 opacity_5 width_102">期望行情</div>
                <div class="fontSize_14 padding_12 color_org">33.68万/优惠33.68万</div>
            </div>
            <div class="borderBottom padding_16 paddingBottom_5">
                <div class="fontSize_14 opacity_5 padding_12">其他</div>
                <div class="sdFlex flexWarp">
                    <div class="sdOrder">现车</div>
                    <div class="sdOrder">定金已收</div>
                    <div class="sdOrder">店票</div>
                    <div class="sdOrder">手续随车</div>
                    <div class="sdOrder">本地车源</div>
                    <div class="sdOrder">户准寻车</div>
                </div>
            </div>
        </div>
        <div class="sdCenter borderTop">
            <div class="sdFlex borderBottom padding_16">
                <div class="fontSize_14 padding_12 opacity_5 width_102">姓名</div>
                <div class="fontSize_14 padding_12">代用名</div>
            </div>
            <div class="sdFlex borderBottom padding_16">
                <div class="fontSize_14 padding_12 opacity_5 width_102">手机号</div>
                <div class="fontSize_14 padding_12">18968996613</div>
            </div>
        </div>
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
    }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
$background_fff:#fff;
$color_333:#333;
$fontSize_20:0.2rem;
.sdBoxTitle{
    height:0.7rem;
    background:$background_fff;
    padding:0 0.16rem;
    .name{
        padding-top:0.1rem;
        font-size:$fontSize_20;
        color:$color_333;
    }
    .msg{
        color:#5f5f5f;
        width:1.82rem;
    }
    .price{
        padding-left:0.3rem;
        color:$color_333;
    }
}
.flexWarp{
    flex-wrap:wrap;
}
.sdOrder{
    display:flex;
    width:1.1rem;
    height:0.4rem;
    background:#FFE3CD;
    color:#FF7206;
    align-items: center;
    justify-content: center;
    margin:0 0.02rem 0.1rem 0.02rem;
    border-radius:0.04rem;
}
.color_org{
    color: #FF7206;
}
.sdCenter{
    overflow:auto;
    margin-top:0.09rem;
    background:$background_fff;
}
.sdFlex{
    display:flex;
}
.fontSize_14{
    font-size:0.14rem;
}
.paddingTop_5{
    padding-top:0.08rem;
}
.paddingBottom_5{
    padding-bottom:0.05rem!important;
}
.ellipsisObj {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.opacity_5{
    opacity: 0.5;
}
.padding_12{
    padding:0.12rem 0;
}
.padding_16{
    padding:0 0.16rem;
}
.width_102{
    width:1.02rem;
}
.borderBottom{
    border-bottom:#efefef 1px solid;
}
.borderTop{
    border-top:#efefef 1px solid;
}
</style>
