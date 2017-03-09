<template>
    <div class="popop">{{title}}</div>
</template>

<script>

export default{
    props:['title']

}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
.popop{
    display: block;
    position: fixed;
    width: 3rem;
    height: 0.3rem;
    margin: 0 0.38rem;
    padding: 0 0.1rem;
    color: #fff;
    font-size: 0.13rem;
    line-height: 0.3rem;
    text-align: center;
    background: rgba(0,0,0,0.80);
    border-radius: 0.05rem;
}
</style>
