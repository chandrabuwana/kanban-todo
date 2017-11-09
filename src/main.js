import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.use(VueFire)
Vue.use(firebase)

Vue.config.productionTip = false

  var config = {
    apiKey: "AIzaSyCxTKfEOi2N7BjCfQK8S_-hS2lmbRYASlU",
    authDomain: "coba-38738.firebaseapp.com",
    databaseURL: "https://coba-38738.firebaseio.com",
    projectId: "coba-38738",
    storageBucket: "coba-38738.appspot.com",
    messagingSenderId: "1023111052949"
    };
  const firebaseApp = firebase.initializeApp(config);
  Vue.prototype.$db = firebaseApp.database()
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
