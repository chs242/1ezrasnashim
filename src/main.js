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

// These examples assume that the domain of the site is
// www.mydomain.com

// Set the path to '/' and track the page
var _hsq = window._hsq = window._hsq || [];
_hsq.push(['setPath', '/']);
_hsq.push(['trackPageView']);
// This will result in a view being recorded for
// http://www.mydomain.com/

// Set the path to '/contact-us' and track the page
var _hsq = window._hsq = window._hsq || [];
_hsq.push(['setPath', '/contact']);
_hsq.push(['trackPageView']);
// This will result in a view being recorded for
// http://www.mydomain.com/contact-us

// Set the path to '/blog/post?utm_campaign=my-campaign' and track the page
var _hsq = window._hsq = window._hsq || [];
_hsq.push(['setPath', '/about']);
_hsq.push(['trackPageView']);
// This will result in a view being recorded for
// http://www.mydomain.com/blog/post?utm_campaign=my-campaign

// Set the path to '/#/about-us' and track the page
var _hsq = window._hsq = window._hsq || [];
_hsq.push(['setPath', '/contact']);
_hsq.push(['trackPageView']);
// This will result in a view being recorded for
// http://www.mydomain.com/#/about-us

var _hsq = window._hsq = window._hsq || [];
_hsq.push(['setPath', '/donate']);
_hsq.push(['trackPageView']);

var _hsq = window._hsq = window._hsq || [];
_hsq.push(['setPath', '/endorsements']);
_hsq.push(['trackPageView']);

var _hsq = window._hsq = window._hsq || [];
_hsq.push(['setPath', '/news']);
_hsq.push(['trackPageView']);

var _hsq = window._hsq = window._hsq || [];
_hsq.push(['setPath', '/services']);
_hsq.push(['trackPageView']);

var _hsq = window._hsq = window._hsq || [];
_hsq.push(['setPath', '/testimonials']);
_hsq.push(['trackPageView']);

var _hsq = window._hsq = window._hsq || [];
_hsq.push(['setPath', '/volunteer']);
_hsq.push(['trackPageView']);

      

