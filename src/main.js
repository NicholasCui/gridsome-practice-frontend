// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/css/global.css'
import Header from '~/layouts/Header.vue'
import Footer from '~/layouts/Footer.vue'
import Container from '~/layouts/Container.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('MyHeader', Header)
  Vue.component('MyFooter', Footer)
  Vue.component('Container', Container)
  Vue.mixin({
    data() {
      return {
        BASE_URL: 'http://192.144.227.227:1337'
      }
    }
  })
}
