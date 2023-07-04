<script setup>
import { Form } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

const { t } = useI18n()
function handleSubmit(values) {
  // console.log(values)
}
const genderSelectOptions = [{
  label: 'Male',
  value: 'M',
},
{
  label: 'Female',
  value: 'F',
},

]

const radioOptions = [{
  label: '1 month',
  value: '1m',
},
{
  label: '3 months',
  value: '3m',
},
{
  label: '1 week',
  value: '1w',
},

]

const schema = z.object({
  firstName: z.string().min(2, { message: 'too short name' }),
  lastName: z.string().min(2, { message: 'too short last name' }),
  email: z.string().email(2, { message: 'incorrect email' }),
  password: z.string().min(1, { message: 'password too short' }),
  repeatPassword: z.string().min(1),
  gender: z.object({
    label: z.string(),
    value: z.string(),
  }, { required_error: 'zaznacz opcje' }),
  regulations: z.boolean().refine(v => v === true, 'To pole jest wymagane'),
  noticePeriod: z.string(),

}).refine(data => data.password === data.repeatPassword, {
  message: 'Password dont match',
  path: ['repeatPassword'],
})
const selectedGender = ref()
</script>

<template>
  <div>
    <Form v-slot="{ values, errors }" :validation-schema="toTypedSchema(schema)" @submit="handleSubmit">
      <p class="text-white">
        Values: {{ values }}
      </p>
      <p class="text-white">
        Errors: {{ errors }}
      </p>
      <div class="mt-8 flex flex-col items-center justify-center">
        <!-- <Field class="border" name="firstName" />
        <ErrorMessage name="firstName" /> -->
        <AppInput name="firstName" label="First name" />
        <AppInput name="lastName" label="Last name" />
        <AppInput name="email" label="Email" />
        <div class="flex flex-col">
          <div class="flex gap-8">
            <AppInput name="password" label="Password" />
            <AppInput name="repeatPassword" label="Repeat password" />
            <AppInputSelect v-model="selectedGender" name="gender" :options="genderSelectOptions" label="Gender" />
          </div>
          <div class="mt-[20px] w-full flex items-center justify-between">
            {{ selectedGender }}
            <div class="flex gap-4">
              <input id="name" type="checkbox" name="privacy">
              <label class="text-[14px] text-white" for="name"><span class="text-grayText">I agree with the</span> Privacy Policy </label>
            </div>
            <AppButton type="submit">
              Submit
            </AppButton>
            <div class="flex gap-4">
              <AppInputCheckbox name="regulations" label="I agree" />

              <div class="flex items-center">
                <p>Wybierz kolor</p>
                <AppInputCheckbox name="blue" label="blue" />
                <AppInputCheckbox name="green" label="green" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 flex items-center justify-center">
        <AppInputRadioGroup name="noticePeriod" label="Długość okresu wypowiedzenia" :options="radioOptions" />
      </div>
    </Form>
  </div>
</template>
