import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase';

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyD11AE4T6bMF2p_HRF1WLjpDusr3Z8P1Do",
  authDomain: "training-53585.firebaseapp.com",
  databaseURL: "https://training-53585.firebaseio.com",
  projectId: "training-53585",
  storageBucket: "training-53585.appspot.com",
  messagingSenderId: "649189057763",
  appId: "1:649189057763:web:422e60142ab5110d7991d6"
};

new Vue({
  router,
  render: h => h(App),
  created() {
    firebase.initializeApp(firebaseConfig);
  }
}).$mount('#app');
