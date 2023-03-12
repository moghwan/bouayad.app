// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/sass/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    routeRules: {
        '/web': { redirect: 'https://web.bouayad.app' },
        '/firefox': { redirect: 'https://addons.mozilla.org/en-US/firefox/addon/bouayadapp-%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B5%D8%B1%D9%8A%D8%A9/' },
        '/edge': { redirect: 'https://microsoftedge.microsoft.com/addons/detail/bouayadapp-%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B5/hjkanamopcgpejnjckfkocleokagaeak' },
        '/chrome': { redirect: 'https://chrome.google.com/webstore/detail/bouayadapp-%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B5%D8%B1%D9%8A/homjiaebdnpmepkeiiipamadbbpkgcij' },
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1.0',
            title: 'اليومية العصرية',
            meta: [
                { name: 'description', content: 'اليومية العصرية للحاج بوعياد هي يومية من التراث المغربي تحتوي على مجموعة من الاحاديث والآيات القرآنية اضافة الى فوائد طبية وأقوال مأثورة' },
                { name: 'msapplication-TileColor', content: '#1c6598' },
                { name: 'theme-color', content: '#1c6598' },
            ],
            link: [
                { rel: 'apple-touch-icon', sizes: '180x180' , href: '/apple-touch-icon.png' },
                { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'mask-icon', color: '#ffffff', href: '/safari-pinned-tab.svg' },
            ]
        }
    }
})
