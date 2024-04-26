<template>
  <the-header/>
  <hero-section :features=featuresHero :image="imageExt"/>
  <feature-one
      :subTitle="'الجديدة كليا'"
      :title="'على الويب'"
      :description="'الجديدة كليا على الويب'"
      :features=featuresWeb
      :image=imageWeb
      :additional-classes="'w-[48rem] order-1 lg:ml-12 shadow-xl'" />
  <feature-one
      :subTitle="'ببساطتها'"
      :title="'على الموبايل'"
      :description="'ببساطتها على الموبايل'"
      :features=featuresMobile
      :image=imageMobileFull
      :additional-classes="'w-[28rem] lg:ml-12'" />
  <feature-zero :features=featuresExt />
  <the-footer/>
</template>

<script setup>
import imageWeb from '@/assets/img/screenshots/web.png';
import imageExt from '@/assets/img/screenshots/ext.png';
import imageMobileFull from '@/assets/img/screenshots/mobile-full.png';
import { ArrowPathIcon, InboxIcon, CalendarDaysIcon, FingerPrintIcon, ClockIcon, DevicePhoneMobileIcon, CubeTransparentIcon } from '@heroicons/vue/24/outline'

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
    name: 'Push to deploy',
    description: 'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: InboxIcon,
  },
  {
    name: 'SSL certificates',
    description: 'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: ClockIcon,
  },
  {
    name: 'Simple queues',
    description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security',
    description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]
</script>

<style scoped>
</style>
