<script setup>
const props = defineProps({
  secondary: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
})
</script>

<template>
  <!-- ostylowany button. Jesli bedzie mial wartosc secondary przyjmie inne style -->
  <button
    :type="props.type"
    class="h-[53px] w-[300px] rounded-[40px] text-[1.5rem] text-[16px] text-black hover:bg-teal-200"
    :class="props.secondary ? 'bg-blue text-blue' : 'bg-white bg-yellow'"
  >
    <slot />
  </button>
</template>
