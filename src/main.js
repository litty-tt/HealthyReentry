import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import axios from 'axios';

Vue.prototype.$api = axios.create();

import { Auth0Plugin } from "./auth";

async function main() {

  let resp = await this.$api.get('/api/auth0-secrets');
  let secrets = resp.data;
  let domain = secrets.AUTH0_DOMAIN;
  let clientId = secrets.AUTH0_CLIENT_ID;

  Vue.use(Auth0Plugin, {
    domain,
    clientId
  });
  
  Vue.config.productionTip = false;
  
  new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
  });

}


main();