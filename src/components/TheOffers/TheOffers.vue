<script setup>
import SeaImage from '~/assets/unsplash_7uXn7nudorc.jpg'
import ShoreImage from '~/assets/unsplash_HUk2W9fa-Jw.jpg'
import MountainImage from '~/assets/unsplash_Yui5vfKHuzs.jpg'

const tabs = ref([
  {
    id: 1,
    label: 'Team',
  },
  {
    id: 2,
    label: 'Couple',
  },
  {
    id: 3,
    label: 'Family',
  },
])
const teamCards = ref([
  {
    id: 1,
    name: 'Loga Sea',
    price: '700',
    type: 'Relax',
    date: '14 FEB 2022',
    duration: '3 Days, 3 Nights',
    pictureUrl: SeaImage,
  },
  {
    id: 2,
    name: 'Ansgar Scheffold',
    price: '400',
    type: 'Adventure',
    date: '18 JUN 2022',
    duration: '4 Days, 3 Nights',
    pictureUrl: ShoreImage,
  },
  {
    id: 3,
    name: 'Lona X',
    price: '340',
    type: 'Relax',
    date: '14 FEB 2022',
    duration: '3 Days, 3 Nights',
    pictureUrl: MountainImage,
  },
])

const selectedTab = ref(1)
</script>

<template>
  <div class="mt-[385px]">
    <h2 class="text-center text-[48px] font-600">
      Special Upcoming Offers
    </h2>
    <!-- <AppTabs /> -->
    <div class="mt-[40px] flex justify-center gap-[20px]">
      <!-- <AppOffersCard v-for="item in teamCards" :key="item.id" :name="item.name" :price="item.price" :type="item.type" :date="item.date" :duration="item.duration" :picture-url="item.pictureUrl" /> -->
      <AppOffersCard v-for="item in teamCards" :key="item.id" v-bind="item" />
    </div>
  </div>
</template>
