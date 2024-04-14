<template>
  <div class="relative isolate overflow-hidden py-24 sm:py-32">
<!--    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />-->

    <div class="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
      <div class="aspect-[8/6] w-[68.5625rem] bg-gradient-to-tr from-[#1c6598] to-[#1c6598] opacity-30" style="clip-path: polygon(79.39% 44.71%, 85.05% 38.64%, 99.96% 40.88%, 91.79% 25.14%, 58% 28.62%, 49.25% 33.84%, 60.38% 42.59%, 57.14% 54.12%, 47.5% 58.3%, 45.2% 34.5%, 38.17% 47.65%, 0.1% 22.9%, 17.9% 33%, 29.33% 65.25%, 76.19% 62.45%, 88.14% 62.94%)" />
    </div>
    <div class="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
      <div class="aspect-[8/6] w-[68.5625rem] bg-gradient-to-tr from-[#1c6598] to-[#1c6598] opacity-40" style="clip-path: polygon(78.38% 77.77%, 99.45% 67.68%, 60.2% 62.4%, 52.4% 68.1%, 48.23% 79.93%, 36.34% 96.51%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 99.35% 98.79%)" />
    </div>

    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 class="text-4xl font-bold tracking-tight text-gray-700 sm:text-6xl">Work with us</h2>
        <p class="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
      </div>
      <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
        <div class="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-gray-700 sm:grid-cols-2 md:flex lg:gap-x-10">
          <a v-for="link in links" :key="link.name" :href="link.href">{{ link.name }} <span aria-hidden="true">&rarr;</span></a>
        </div>
        <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="stat in stats" :key="stat.name" class="flex flex-col-reverse">
            <dt class="text-base leading-7 text-gray-600">{{ stat.name }}</dt>
            <dd class="text-2xl font-bold leading-9 tracking-tight text-gray-700">{{ stat.value }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
]
const stats = [
  { name: 'Offices worldwide', value: '12' },
  { name: 'Full-time colleagues', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]
</script>