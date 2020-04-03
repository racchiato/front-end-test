/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('navigation-bar', require('./components/Navbar.vue').default);
Vue.component('login-bar', require('./components/LoginBar.vue').default);
Vue.component('main-header', require('./components/MainHeader.vue').default);
Vue.component('php-features', require('./components/PHPFeatures.vue').default);
Vue.component('hosting-packages', require('./components/HostingPackages.vue').default);
Vue.component('php-limit', require('./components/PHPLimit.vue').default);
Vue.component('hosting-features', require('./components/HostingFeatures.vue').default);
Vue.component('laravel-support', require('./components/LaravelSupport.vue').default);
Vue.component('php-modules', require('./components/PHPModules.vue').default);
Vue.component('linux-hosting', require('./components/LinuxHosting.vue').default);
Vue.component('share-bar', require('./components/ShareBar.vue').default);
Vue.component('help-support', require('./components/HelpSupport.vue').default);
Vue.component('main-footer', require('./components/MainFooter.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
