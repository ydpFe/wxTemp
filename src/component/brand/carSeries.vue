<template>
	<div class="container">
        <loading :loadingStatus="loadingStatus"></loading>
        <div class="box" v-for="carSeries in carSeries">
            <title class="g-border-b">{{carSeries.name}}</title>
            <router-link class="g-border-b" v-for="list in carSeries.list" :to="{path: 'carType', query: {seriesId: list.car_series_id,seriesName: encodeURIComponent(list.title),channel: channel}}">
                <span>{{list.title}}</span>
            </router-link>
        </div>
        <div class="box">
            <router-link class="g-border-b" v-for="list in carSeries_imp" :to="{path: 'carType', query: {seriesId: list.car_series_id,seriesName: encodeURIComponent(list.title),channel: channel}}">
                <span>{{list.title}}</span>
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
            carSeries: [],
            carSeries_imp: [],
            loadingStatus: true,
            channel: 1
        }
    },
    created() {
        let apiHost = this.$store.state.APIHOST,
            barndId = Number(this.$route.query.brandId),
            channel = Number(this.$route.query.channel),
            data = (isNaN(channel)) ? {brand_id: barndId} : {brand_id: barndId, channel: channel};

            this.channel = (isNaN(channel)) ? 1 : channel;

        //获取车系
        this.$http.get(apiHost+ (isNaN(channel) ? '/car/new_series_list' : '/car/new_imp_series_list'),{params: data}).then(res => {
            if (res.data.code === 0) {
                if (isNaN(channel)) {
                    this.carSeries = res.data.data.data;
                } else {
                    this.carSeries_imp = res.data.data.data;
                }

                this.loadingStatus = false;
            }
        },(res => {}));
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

    .box {
        a {
            display: block;
            width: 100%;
            height: 0.5rem;
            padding-left: 0.16rem;
            line-height: 0.5rem;
            color: #333;
            background: #fff;
        }
    }
</style>