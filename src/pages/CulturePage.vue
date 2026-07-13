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
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
    <nav class="fixed top-4 right-4 flex bg-white/80 rounded-full px-8 py-2 shadow-lg z-50">
      <button
        v-for="item in navItems"
        :key="item.path"
        @click="router.push(item.path)"
        class="px-8 py-2 rounded-full text-blue-600 font-bold text-lg transition-all duration-300 hover:bg-green-200"
        :class="{ 'text-green-600 font-extrabold': item.path === '/culture' }"
      >
        {{ item.name }}
      </button>
    </nav>
    <div class="container mx-auto px-4 pt-20">
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">灵石文化</h1>
    </div>
  </div>
</template>
