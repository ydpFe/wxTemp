<template>
    <div>
        <div>
            <div class="successIconBox marginAuto"><img src="../../assets/publishSuccess.png" class="successIcon"></div>
            <p class="g-r-center success">发布成功</p>
            <p class="marginAuto successMsgText fontSize_15 g-r-center">工作人员会继续和您联系</p>
            <div class="successMsgBtn g-r-center marginAuto">继续发布</div>
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
.marginAuto{
    margin:0 auto;
}
.fontSize_15{
    font-size:0.15rem;
}
.successIconBox{
    width:0.8rem;
    height:0.8rem;
    margin-top:0.9rem;
}
.successIcon{
    width:0.8rem;
    height:0.8rem;
}
.success{
    font-size:0.2rem;
    color: #4A4A4A;
    margin-top:0.1rem;
}
.successMsgText{
    width:2.22rem;
    margin-top:0.1rem;
    color:#888;
}
.successMsgBtn{
    width:1.2rem;
    height:0.36rem;
    background: #FF7206;
    border-radius: 0.05rem;
    color:#fff;
    margin-top:0.2rem;
}
</style>
