<template>
  <div class="relative isolate overflow-hidden py-24 sm:py-32">

    <img :src="image" alt="Hero image" class="absolute inset-0 -z-10 w-full object-cover object-right md:object-center"  />
    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[8/6] w-[68.5625rem] bg-gradient-to-tr from-[#1c6598] to-[#1c6598] opacity-30" style="clip-path: polygon(79.39% 44.71%, 85.05% 38.64%, 99.96% 40.88%, 91.79% 25.14%, 58% 28.62%, 49.25% 33.84%, 60.38% 42.59%, 57.14% 54.12%, 47.5% 58.3%, 45.2% 34.5%, 38.17% 47.65%, 0.1% 22.9%, 17.9% 33%, 29.33% 65.25%, 76.19% 62.45%, 88.14% 62.94%)" />
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0 ff-arabic-style">
        <p class="mt-6 text-lg leading-8 text-gray-600">{{ subtitle }}</p>
        <h2 class="text-4xl tracking-tight text-gray-700 sm:text-6xl">{{ title }}</h2>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div v-if="links" class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-700 sm:grid-cols-2 md:flex lg:gap-x-10">
          <a v-for="link in links" :key="link.name" :href="link.href">{{ link.name }} <span aria-hidden="true">&rarr;</span></a>
        </div>
        <dl class="mt-16 grid grid-cols-2 sm:mt-20 sm:grid-cols-4 lg:grid-cols-6">
          <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-slate-500">{{ stat.name }}</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-slate-500">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const { image, features } = defineProps({
  image : {
    type: String,
    required: true
  },
  features : {
    type: Object,
    required: true
  },
})

const { title, subtitle, links, stats } = features ;

</script>