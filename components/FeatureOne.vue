<template>
  <div class="overflow-hidden bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <img :src="image" alt="Product screenshot" class="md:-ml-7 max-w-none rounded-xl ring-gray-400/10" :class="additionalClasses"/>
        <div class="lg:pr-8 lg:pt-4">
          <div class="lg:max-w-lg">
            <span class="mt-2 text-3xl font-bold tracking-tight text-[#1c6598] sm:text-5xl ff-arabic-style">
              <span class="text-gray-900">{{ subTitle }}</span>
              {{ title }}
            </span>
            <p class="mt-6 text-lg leading-8 text-gray-600">{{ description }}</p>
            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                <dt class="inline font-semibold text-gray-900">
                  <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                  {{ feature.name }}
                </dt>
                {{ ' ' }}
                <dd class="inline">{{ feature.description }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { image, additionalClasses, features, title, subTitle, description } = defineProps({
  title : {
    type: String,
    required: true
  },
  subTitle : {
    type: String,
    required: false,
    default: '',
  },
  description : {
    type: String,
    required: true
  },
  image : {
    type: String,
    required: true
  },
  additionalClasses : {
    type: String,
    required: false,
  },
  features : {
    type: Array,
    required: false,
    default: [],
  }
})

</script>