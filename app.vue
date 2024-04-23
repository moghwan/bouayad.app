<template>
  <the-header/>
  <hero-section :image="imageExt"/>
  <feature-one :image=imageMobileFull :additional-classes="'w-[28rem] lg:ml-12'" />
  <feature-one :image=imageWeb :additional-classes="'w-[48rem] order-1 lg:ml-12 shadow-xl'" />
  <feature-zero/>
  <the-footer/>
</template>

<script setup>
import imageWeb from '@/assets/img/screenshots/web.png';
import imageExt from '@/assets/img/screenshots/ext.png';
import imageMobileFull from '@/assets/img/screenshots/mobile-full.png';
</script>

<style scoped>
</style>
