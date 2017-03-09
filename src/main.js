"use strict";
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueLazyload from 'vue-lazyload'
// import directives from './directives/directives'

import store        from './vuex/store'
import router       from './router/router'

Vue.use(VueResource)
Vue.use(VueLazyload, {
  error: 'dist/assets/image_error.png',
  loading: 'dist/assets/placeholder6_brand.png',
  filter:{
    webp ({ src,el }) {
    	let imgConfig, size = document.documentElement.clientWidth / 375;
        imgConfig = "?imageView2/2/q/90/interlace/1/w/" + ((el.className === "hot_banrd") ? parseInt(size * 40) : parseInt(size * 32));
          return src + imgConfig
      },
  },
  try: 3
})
// directives(Vue)

router.afterEach(to =>{document.title = to.meta.title})

const app = new Vue({
	store,
	router,
  	render: h => h(App)
}).$mount('#app');

