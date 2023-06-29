<script setup>
import { RouterView } from 'vue-router'

const { t } = useI18n()

const navItems = computed(() => [
  {
    id: 1,
    label: t('button.review'),
  },
  {
    id: 2,
    label: t('button.tips'),
  },
  {
    id: 3,
    label: t('button.alerts'),
  },
  {
    id: 4,
    label: t('button.blog'),
  },
])
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>
