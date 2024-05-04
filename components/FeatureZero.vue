<template>
  <div class="bg-white pb-24 sm:pb-32 pt-6 sm:pt-8">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-[#1c6598] sm:text-2xl ff-arabic-style">{{ subtitle }}</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-[#1c6598] sm:text-6xl ff-arabic-style">{{ title }}</p>
        <p class="mt-6 text-lg leading-8 text-gray-600">{{ description }}</p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-6xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
          <NuxtLink
              v-for="feature in features"
              :key="feature.name"
              class="relative pl-6 content-center flex gap-6 items-center border-t-[#4ca4e2] border-l-[#4ca4e2] border-b-[#1c6598] border-r-[#1c6598] border-2 p-4 rounded-br-3xl rounded-tl-3xl bg-zinc-50 hover:bg-[#1c6598] hover:border-t-zinc-900 hover:border-l-zinc-900 hover:border-b-zinc-200 hover:border-r-zinc-200 hover:gap-5 transition-all hover:text-white duration-300 ease-in-out shadow-zinc-400 shadow-sm hover:shadow-md hover:drop-shadow-xl"
              target="_blank"
              :to=feature.link
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-lg" :class="`bg-[${feature.bgColor}]`">
              <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <span class="font-bold">
              {{ feature.name }}
            </span>
          </NuxtLink>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const { features, title, subtitle, description } = defineProps({
  title: {
    type: String,
    required: false
  },
  subtitle: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  features: {
    type: Array,
    required: false,
    default: [],
  }
})
</script>