<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navItems = [
  { name: '首页', path: '/' },
  { name: '寻光团队', path: '/team' },
  { name: '琢石纪事', path: '/chronicles' },
  { name: '灵石文化', path: '/culture' },
  { name: '山海传音', path: '/voice' },
]

const currentPath = ''
</script>

<template>
  <div class="min-h-screen relative">
    <img 
      src="@/assets/2FFE719FFBEE0B741F111AFE8590520C.png" 
      alt="背景"
      class="absolute inset-0 w-full h-full object-cover object-top"
    />
    <div class="absolute inset-0 bg-black/10"></div>
    <div class="relative z-10 flex flex-col items-center justify-center min-h-screen">
      <nav class="absolute top-4 right-4 flex bg-white/80 rounded-full px-8 py-2 shadow-lg">
        <button
          v-for="item in navItems"
          :key="item.path"
          @click="router.push(item.path)"
          class="px-8 py-2 rounded-full text-blue-600 font-bold text-lg transition-all duration-300 hover:bg-green-200"
          :class="{ 'text-green-600 font-extrabold': item.path === '/' }"
        >
          {{ item.name }}
        </button>
      </nav>
    </div>
  </div>
</template>
