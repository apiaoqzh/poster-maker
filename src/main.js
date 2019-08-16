import Vue from 'vue'
import App from './App'
/* router & 历史栈 */
import { createRouter } from './router'
/* import rem.js for setting font-size */
import { setRem } from './utils/rem'
setRem(document, window)
let router = createRouter()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App),
  async created () {
  }
})
