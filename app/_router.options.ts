import type { RouterOptions } from '@nuxt/schema';
import app from '../app.vue'
export default <RouterOptions>{
    routes: (_routes) => [
        {
            path: '/',
            name: 'home',
            component: () => app,
        },
        {
            path: '/firefox',
            name: 'firefox',
            redirect: to => { window.location.href = "https://addons.mozilla.org/en-US/firefox/addon/bouayadapp-%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B5%D8%B1%D9%8A%D8%A9/" },
        },
        // {
        //     path: '/chrome',
        //     name: 'chrome',
        //     redirect: to => { window.location.href = "" },
        // },
        {
            path: '/edge',
            name: 'edge',
            redirect: to => { window.location.href = "https://microsoftedge.microsoft.com/addons/detail/bouayadapp-%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B5/hjkanamopcgpejnjckfkocleokagaeak" },
        },
        {
            path: '/web',
            name: 'web',
            redirect: to => { window.location.href = "https://web.bouayad.app" },
        }
    ],
};