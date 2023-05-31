<script setup lang="ts">
import { computed, ref } from 'vue'

const height = ref<number>(0)
const weight = ref<number>(0)

const bmi = computed<string>(() => {
  return height.value != 0 && weight.value != 0
    ? `Your BMI is ${(weight.value / Math.pow(height.value, 2)).toFixed(2)} kg/m²`
    : 'Type your height and weight'
})
</script>

<template>
  <main>
    <h1>BMI Calculator</h1>
    <form>
      <label for="height">Height</label>
      <input type="number" name="height" id="height" v-model="height" min="0">

      <label for="weight">Weight</label>
      <input type="number" name="weight" id="weight" v-model="weight" min="0">
    </form>
    <span>{{ bmi }}</span>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.5rem;
}

h1 {
  color: var(--main-title);
}

p {
  text-align: justify;
}

form {
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding: 1em;
  border-radius: .5em;
  background-color: var(--form-background);
}

label {
  margin: 0 0 .25em 0;
  color: var(--input-label);
}

input[type="number"] {
  margin: 0 0 1em 0;
  border: none;
  border-bottom: solid var(--input-border) 1px;
  appearance: textfield;
  background-color: var(--input-bg);
  color: var(--input-text);
  font-size: 1.5rem;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"]:focus {
  outline: none;
}

span {
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: var(--span-bg);
  color: var(--span-txt);
  padding: 1em;
  border-radius: 100rem;
  font-weight: bold;
}
</style>
