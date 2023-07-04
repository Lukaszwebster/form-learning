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
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: null,
  },
})

const name = toRef(props, 'name')
const { value, handleChange, errorMessage, handleBlur, meta } = useField(name, undefined, { initialValue: props.modelValue || props.options[0].value, syncVModel: true, type: 'radio' })

function handleRadio(event) {
  handleChange(event.target.value)
}
</script>

<template>
  <fieldset>
    <legend v-if="props.label" class="mb-[8px] ml-[40px] mt-[8px] block text-[14px] text-white">
      {{ props.label }}
      {{ value }}
    </legend>
    <ul>
      <li v-for="item in props.options" :key="item.value">
        <label>
          <input :checked="item.value === value" :value="item.value" :name="name" type="radio" @change="handleRadio">
          {{ item.label }}
        </label>
      </li>
    </ul>
    <p v-if="errorMessage" class="text-white">
      {{ errorMessage }}
    </p>
  </fieldset>
</template>
