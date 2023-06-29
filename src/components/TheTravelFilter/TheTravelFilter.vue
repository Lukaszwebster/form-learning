<script setup>
const filterTabs = ref([
  {
    id: 1,
    label: 'Flight',
  },
  {
    id: 2,
    label: 'Hotel',
  },

])
const selectedTab = ref(1)
</script>

<template>
  <div class="absolute left-0 right-0 ml-[130px] mr-[130px] rounded-bl-[50px] rounded-br-[50px] rounded-tr-[50px] bg-white -bottom-80">
    <AppTabs :model-value="selectedTab" :tabs="filterTabs" @update:model-value="(value) => selectedTab = value">
      <template #1>
        <TheBoxCitiesSmall />
        <TheBoxDatesSmall />
        <button class="ml-[40px] rounded-[65px] bg-blue p-[3.125rem]">
          <img src="src/assets/Group 9.svg" alt="">
        </button>
      </template>
      <template #2>
        <TheBoxHotels />
      </template>
    </AppTabs>
  </div>
</template>
