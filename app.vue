<template>
  <the-header/>
  <hero-section :features=featuresHero :image="imageExt"/>
  <feature-one
      :subTitle="'الجديدة كليا'"
      :title="'على الويب'"
      :description="'الجديدة كليا على الويب'"
      :features=featuresWeb
      :image=imageWeb
      :textToRight="true"
      :additional-classes="'w-[48rem] order-1 lg:ml-12 shadow-xl'" />
  <feature-one
      :subTitle="'ببساطتها'"
      :title="'على الموبايل'"
      :description="'ببساطتها على الموبايل'"
      :features=featuresMobile
      :image=imageMobileFull
      :additional-classes="'w-[28rem] lg:ml-12'" />
  <feature-zero
      :title="'متاح على'"
      :features=featuresExt
  />
  <the-footer/>
</template>

<script setup>
import imageWeb from '@/assets/img/screenshots/web.png';
import imageExt from '@/assets/img/screenshots/ext.png';
import imageMobileFull from '@/assets/img/screenshots/mobile-full.png';
import { GlobeAltIcon, InboxIcon, CalendarDaysIcon, ClockIcon, DevicePhoneMobileIcon, CubeTransparentIcon } from '@heroicons/vue/24/outline'
import FirefoxOutline from '@/assets/svg/firefox-outline.vue';
import ChromeOutline from '@/assets/svg/chrome-outline.vue';
import EdgeOutline from '@/assets/svg/edge-outline.vue';

const featuresHero = {
    title: 'اليومية العصرية : من التراث المغربي',
    subtitle: '',
 stats: [
    // { name: 'mobile user', value: '490+' },
   { name: 'مستعمل على الموبايل', value: '490+' },
    // { name: 'desktop user', value: '120+' },
   { name: 'مستعمل على الويب', value: '120+' },
    // { name: 'active install on browsers', value: '90+' },
    { name: 'مستعمل على المتصفحات', value: '90+' },
  ]
}

const featuresWeb = [
  {
    // name: 'Showing random quotes daily',
    name: 'عرض اقتباسات يومية',
    icon: InboxIcon,
  },
  {
    // name: 'Showing prayer times for the day by selected city',
    name: 'أوقات الصلاة حسب المدينة المختارة',
    icon: ClockIcon,
  },
  {
    // name: 'Prayer times for current hijri month.',
    name: 'عرض تقويم الشهر الهجري الحالي',
    icon: CalendarDaysIcon,
  },
]

const featuresMobile = [
  {
    name: 'Progressive Web App',
    description: '',
    icon: CubeTransparentIcon,
  },
  {
    name: 'Android & iOS',
    icon: DevicePhoneMobileIcon,
  },
]

const featuresExt = [
  {
    name: 'Chrome Web Store',
    icon: ChromeOutline,
    bgColor: 'blue-600',
    link: '/chrome',
  },
  {
    name: 'Edge Add-ons',
    icon: EdgeOutline,
    bgColor: 'sky-600',
    link: '/edge',
  },
  {
    name: 'Firefox Add-ons',
    icon: FirefoxOutline,
    bgColor: 'cyan-500',
    link: '/firefox',
  },
  {
    name: 'Web / PWA',
    icon: DevicePhoneMobileIcon,
    bgColor: 'neutral-500',
    link: '/web',
  }
  ];
</script>

<style scoped>
</style>
