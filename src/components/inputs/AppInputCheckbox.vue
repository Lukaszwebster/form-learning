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
    type: Boolean,
    default: true,
  },
  modelValue: {
    type: null,
  },

})
const name = toRef(props, 'name')
const { value, handleChange, errorMessage, handleBlur, meta, checked } = useField(name, undefined, { initialValue: props.modelValue, syncVModel: true, type: 'checkbox', uncheckedValue: false, checkedValue: props.value })
</script>

<template>
  <div>
    <label v-if="props.label" class="mb-[8px] ml-[40px] mt-[8px] block text-[14px] text-white" :for="name"> <input type="checkbox" :checked="checked" @change="handleChange">{{ props.label }}

    </label>

    <p v-if="errorMessage" class="text-white">
      {{ errorMessage }}
    </p>
    <!-- <p class="text-white">
        {{ meta }}
      </p> -->
  </div>
</template>
