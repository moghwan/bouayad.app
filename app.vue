<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100/10 dark:bg-gray-900 items-center sm:pt-0">
    <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
      <div class="pt-8 text-center">
        <p class="ff-arabic-style text-7xl text-gray-900 dark:text-gray-200">اليومية العصرية لبوعياد</p>
        <div class="links flex border-t-2 border-t-gray-900 dark:border-t-gray-200 border-dashed gap-4 justify-center pt-4 mt-4 mx-auto">
          <NuxtLink v-for="link in links" :to=link.url :class="!link.isPublished ? 'unpublished' : null">
            <WebIcon v-if="link.name === 'web'"/>
            <FirefoxIcon v-if="link.name === 'firefox'"/>
            <EdgeIcon v-if="link.name === 'edge'"/>
            <ChromeIcon v-if="link.name === 'chrome'"/>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WebIcon from '@/assets/svg/web.vue';
import FirefoxIcon from '@/assets/svg/browser-firefox.vue';
import EdgeIcon from '@/assets/svg/browser-edge.vue';
import ChromeIcon from '@/assets/svg/browser-chrome.vue';

const links = [
  {"name": "web",     "url": "https://web.bouayad.app",      "isPublished": true},
  {"name": "firefox", "url": "https://addons.mozilla.org/en-US/firefox/addon/bouayadapp-%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B5%D8%B1%D9%8A%D8%A9/",  "isPublished": true},
  {"name": "edge",    "url": "https://microsoftedge.microsoft.com/addons/detail/bouayadapp-%D8%A7%D9%84%D9%8A%D9%88%D9%85%D9%8A%D8%A9-%D8%A7%D9%84%D8%B9%D8%B5/hjkanamopcgpejnjckfkocleokagaeak",     "isPublished": true},
  {"name": "chrome",  "url": "#",   "isPublished": false},
];
</script>

<style scoped>
  .links {
    width: 80%;
  }
  .links .unpublished {
    filter: grayscale(100%);
    opacity: .6;
  }
  .links a svg {
    height: 4rem;
    width: auto;
  }
</style>