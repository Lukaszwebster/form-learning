<script setup>
import { useField } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
  value: {
    type: String,
    default: '',
  },
  secondary: {
    type: Boolean,
    default: false,
  },
})
const name = toRef(props, 'name')
const { value, handleChange, errorMessage, handleBlur, meta } = useField(name, undefined, { initialValue: props.value, syncVModel: true })
</script>

<template>
  <div>
    <label v-if="props.label" class="mb-[8px] ml-[40px] mt-[8px] block text-[14px] text-white" :for="name">{{ props.label }}</label>
    <input :id="name" class="h-[53px] w-[300px] border border-grayText rounded-10 bg-black px-[10px] text-white focus:border-yellow focus:outline-none" :class="props.secondary ? 'bg-white' : 'bg-black'" type="text" :value="value" :name="name" @input="handleChange" @blur="handleBlur">

    <p v-if="errorMessage" class="text-white">
      {{ errorMessage }}
    </p>
    <!-- <p class="text-white">
      {{ meta }}
    </p> -->
  </div>
</template>
