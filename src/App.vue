<script setup lang="ts">
import { computed, ref } from 'vue'

const height = ref<number>(0)
const weight = ref<number>(0)

const bmi = computed<string>(() => {
  return height.value != 0 && weight.value != 0
    ? `${(weight.value / Math.pow(height.value, 2)).toFixed(2)} kg/m²`
    : 'Type your height and weight'
})
</script>

<template>
  <main>
    <div class="content">
      <h1>BMI Calculator</h1>
      <section>
        <article>
          <p>
            BMI is the acronym for Body Mass Index, a parameter adopted by the World Health Organization to calculate the
            ideal weight of each person.
          </p>

          <p>
            The index is calculated as follows: the patient's weight is divided by their height squared. An individual is
            said to have normal weight when the BMI result is between 18.5 and 24.9.
          </p>

          <p>
            Want to find out your BMI? Enter your weight and height in the fields below and compare with the indexes in
            the
            table. Important: follow the examples and use dots as separators.
          </p>
        </article>
      </section>

      <form>
        <label for="height">Height</label>
        <input type="number" name="height" id="height" v-model="height">

        <label for="weight">Weight</label>
        <input type="number" name="weight" id="weight" v-model="weight">
      </form>

      <span>{{ bmi }}</span>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 20vw;
}

p {
  text-align: justify;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin: 0 0 .25em 0;
}

input[type="number"] {
  margin: 0 0 1em 0;
}

span {
  display: flex;
  align-self: center;
}
</style>
