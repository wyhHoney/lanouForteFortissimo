import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)//全局使用ElementU
//添加vue-axios
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
Vue.config.productionTip = false;
//在登陆页面使用的验证码需要引入以下一段代码
axios.defaults.withCredentials = true;
//引入jquery
import $ from 'jquery'
import store from '../store/index'


//曾光
// Vue.use(Vuex);


new Vue({

  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
