// Import main css
import '~/assets/style/index.scss'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {

  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add a meta tag
  head.meta.push({
    name: 'Ezras Nashim',
    content: 'Bridging the gap for woman in Emergency Medical Care'
  })

  // Add a meta tag
  head.meta.push({
    name: 'keywords',
    content: 'ruchy freier,womans ambulance,ambulance,new york hatzola,boro park,hatzola,hatzola boro park,boro park hatzola,emergency ambulance,emergency medical care,'
  })
}

      

