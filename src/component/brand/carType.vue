<template>
	<div class="container">
        <loading :loadingStatus="loadingStatus"></loading>
        <div class="box" v-for="carType in carType">
            <title class="g-border-b">{{carType.year}}款</title>
            <router-link class="g-border-b" v-for="list in carType.list" :to="{path: 'onlineSearch', query: {seriesId: car_series_id,title: seriesName+encodeURIComponent(list.title.replace(RegExp(list.title.replace(/([^\s]+)\s.*/, '$1')),'')),price: list.price}}">
                <span class="g-overflow-hidden">{{list.title}}</span>
                <b v-if="list.price > 0">{{list.price}}万</b>
            </router-link>
        </div>
        <div class="customType box">
            <router-link :to="{path: 'defindCarType',query: {seriesId: car_series_id,seriesName: seriesName}}">
                <span>自定义车型</span>
            </router-link>
        </div>
    </div>
</template>

<script>
"use strict";
import loading from '../common/loading.vue'
export default {
    data() {
        return {
            carType: [],
            car_series_id: null,
            loadingStatus: true
        }
    },
    created() {
        let apiHost = this.$store.state.APIHOST,
            seriesId= this.car_series_id = Number(this.$route.query.seriesId),
            channel = Number(this.$route.query.channel),
            data = {series_id: seriesId, channel: channel};

        this.seriesName = this.$route.query.seriesName;

        //获取车框
        this.$http.get(apiHost+'/car/new_type_list',{params: data}).then(res => {
            if (res.data.code === 0) {
                this.carType = res.data.data.data;
                this.loadingStatus = false;
            }
        },(res => {}));
    },
    mounted(){
        this.$store.commit('setDefault');
    },
    components: {
        "loading": loading,
    }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    title {
        display: block;
        height: 0.3rem;
        padding-left: 0.16rem;
        line-height: 0.3rem;
        font-size: 0.13rem;
        color: #999;
    }

    .container {
        padding-bottom: 0.5rem;
    }

    .box {
        a {
            display: flex;
            width: 100%;
            height: 0.5rem;
            padding-left: 0.16rem;
            line-height: 0.5rem;
            color: #333;
            background: #fff;
            span{
                display: block;
                width: 70%;
            }
            b{
                display: block;
                width: 30%;
                padding-right: 0.13rem;
                text-align: right;
                font-weight: normal;
                color: #999;
            }
        }
    }

    .customType {
        position: fixed;
        bottom: 0;
        z-index: 100;
        width: 100%;
        a {
            box-shadow: 0 1px 10px 0 rgba(255,113,6,0.38);
            background: url("../../assets/app_arrow_orange.png") 95.7% 50% no-repeat #fff;
            background-size: 0.08rem auto;
        }
    }
</style>