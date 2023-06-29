<script setup>
// w tym miejscu definiuje propsy w ktorych maja sie znalezc wartosci ktore beda w kartach
const props = defineProps({
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  date: {
    type: String,
  },
  duration: {
    type: String,
  },
  type: {
    type: String,
  },
  pictureUrl: {
    type: String,
  },
})
</script>

<template>
  <div class="max-w-[380px] w-full rounded-[50px] bg-white pb-[25px] pl-[27px] pr-[13px] pt-[21px]">
    <div class="flex gap-5">
      <img class="max-w-[18rem]" :src="props.pictureUrl" alt="">
      <!-- w tym miejscu wyswietlam propsy -->
      <p class="text-center tracking-[0.5625rem] text-black/50 write-vertical-right">
        {{ props.date }}
      </p>
    </div>
    <div class="mt-[1.25rem] flex gap-3 text-sm">
      <p class="rounded-[100px] bg-[#FCDDEC] px-[1rem] text-[#F178B6]">
        {{ props.type }}
      </p>
      <p class="text-black/50">
        {{ props.duration }}
      </p>
    </div>
    <p class="mt-[10px] text-[24px] font-600">
      {{ props.name }}
    </p>
    <div class="mt-[10px] flex items-center justify-between">
      <p class="text-[24px]">
        {{ props.price }}$<span class="text-[18px] text-black/50">/Person</span>
      </p>
      <AppButton class="mr-[27px] !px-[19px] !py-[13px] !text-[14px]" secondary>
        Book Now
      </AppButton>
    </div>
  </div>
</template>
