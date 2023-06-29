<script setup>
import { useField } from 'vee-validate'
import VueMultiselect from 'vue-multiselect'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
})
const attrs = useAttrs()
// console.log(attrs)

const name = toRef(props, 'name')
const { value, handleChange, errorMessage, handleBlur, meta } = useField(name, undefined, { initialValue: props.value, syncVModel: true })
</script>

<template>
  <div>
    <label v-if="props.label" class="mb-[8px] ml-[40px] mt-[8px] block text-[14px] text-white" :for="name">{{ props.label }}</label>
    <VueMultiselect :id="name" v-bind="attrs" :model-value="value" @update:model-value="handleChange" />
    <p v-if="errorMessage" class="text-white">
      {{ errorMessage }}
    </p>
  </div>
</template>
