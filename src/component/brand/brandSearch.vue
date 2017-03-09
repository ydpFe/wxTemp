 <template>
    <div class="container">
        <loading :loadingStatus="loadingStatus"></loading>
        <div class="hotBarnd">
            <title class="g-border-b">常用品牌</title>
            <ol class="g-border-b">
                <li v-for="brand in brandList.hot">
                    <router-link class="g-c-center" :to="{path: 'carSeries', query: {brandId: brand.id, channel:importType}}">
                        <img class="hot_banrd" v-lazy="brand.image_src" alt="" />
                        <span>{{brand.name}}</span>
                    </router-link>
                </li>
            </ol>
        </div>
        <div class="importBrand" v-if="!importType">
            <title class="g-border-b">平行进口车</title>
            <ol class="g-border-b">
                <li v-for="(carType,index) in carType">
                    <router-link class="g-c-center" :to="{path: 'importList', query: {typeId: index, name: encodeURIComponent(carType)}}">
                        <span>{{carType}}</span>
                    </router-link>
                </li>
            </ol>
            <title class="g-border-b">中规/国产</title>
        </div>
        <div class="allBarnd">
            <div class="box" v-for="brand in brandList.data">
                <title class="g-border-b" :ref="brand.alpha">{{brand.alpha}}</title>
                <ol>
                    <li class="g-border-b" v-for="list in brand.list">
                        <router-link class="g-r-center" :to="{path: 'carSeries', query: {brandId: list.id, channel:importType}}">
                            <img v-lazy="list.image_src" alt="" />
                            <span>{{list.name}}</span>
                        </router-link>
                    </li>
                </ol>
            </div>
            <ul ref="alphaBox" class="alphaBox g-c-center">
                <li ref="alphaList" v-for="brand in brandList.data" @click="alphaTouch(brand.alpha)">{{brand.alpha}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
"use strict";
import loading from '../common/loading.vue'
export default{
    props: ["importType"],
    data() {
        return {
            brandList: {},
            carType: {},
            loadingStatus: true
        }
    },
    created() {
        let apiHost = this.$store.state.APIHOST;

        //获取品牌
        this.$http.get(apiHost+'/car/new_brand_list',{params: {channel: this.importType}}).then(res => {
            if (res.data.code === 0) {
                this.brandList = res.data.data;
                this.loadingStatus = false;
            }  
        },(res => {}));

        //获取车辆类型
        this.$http.get(apiHost+'/car/car_type').then(res => {
            if (res.data.code === 0) {
                let data = res.data.data;

                for (let key in data) {
                    if (data[key] == "中东版") data[key] = "中东" 
                    if (data[key] == "墨西哥版") data[key] = "墨版"
                }
                this.carType = data;
            }
        },(res => {}));
    },
    updated() {
        if (typeof this.$refs.alphaList != "undefined") {
            let alphaBox = this.$refs.alphaBox,
                alphalist = this.$refs.alphaList,
                offsetHeight = alphalist[0].offsetHeight,
                startY, data = {};

            for (var i of alphalist ) {
                data[i.innerHTML] = i.offsetTop;
            }

            alphaBox.addEventListener('touchmove' ,(ev => {
                let clientY = ev.touches[0].clientY;

                ev.preventDefault();

                for (var i in data) {
                    if (clientY <= data[i] + offsetHeight) {
                        this.alphaTouch(i);
                        break;
                    }
                }
            }));
        }
    },
    methods: {
        alphaTouch(alpha) {
            let offsetTop = this.$refs[alpha][0].offsetTop;

            window.scrollTo(offsetTop,offsetTop);
        }
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

    .hotBarnd,.importBrand {
        ol {
            display: flex;
            background: #fff;
            font-size: 0.12rem;
            line-height: 0.12rem;
            li {
                flex: 1;
                &:first-child {
                    a {
                        border-left: none;
                    }
                }
               
            }
            a {
                padding: 0.09rem 0 0.07rem;
                color: #262626;
                border-left: 1px solid #efefef;
            }
            img {
                width: 0.4rem;
                padding-bottom: 0.07rem;
            }
        }
    }

    .importBrand {
        ol {
            font-size: 0.14rem;
            line-height: 0.2rem;
            li:first-child {
                span {
                    border-left: none;
                }
               
            }
            a {
                padding: 0.16rem 0 0.14rem;
                border-left: none;
            }
            span {
                text-align: center;
                width: 100%;
                border-left: 1px solid #efefef;
            }
        }
    }

    .allBarnd {
        ol {
            background: #fff;
            a{
                height: 0.5rem;
                color: #333;
                justify-content: flex-start;
                img {
                    width: 0.32rem;
                    margin: 0 0.16rem;
                }
            }
        }
        ul {
            position: fixed;
            top: 0;
            right: 0;
            z-index: 100;
            height: 100vh;
            width: 0.2rem;
            li {
                width: 0.2rem;
                height: 0.2rem;
                    line-height: 0.2rem;
                    text-align: center;
                color: #333;
            }
        }
    }
</style>
