<script setup>
import littleSteps from '../assets/little-steps.svg'

</script>


<template>
  <div class="container uni-center grid-cols-2 grid-rows-3">
          <img :src="littleSteps" class="p-ill row-span-3" alt="">

    <h1 class="p-h1 font-bold">Executive learning</h1>
        <p>Little steps matter!!!</p>

    <div>
      <button class="p-btn-s">Get Started</button>
      <button class="p-btn-o">Live Demo</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style >
.p-h1 {
  @apply text-4xl text-slate-700;
}

.container {
  @apply h-[50vh];
}
.uni-center {
  @apply grid place-items-center;
}
.p-btn-o {
    @apply border border-[2px] border-red-400 px-4  py-2 mx-2 rounded-[.5rem] text-red-500;
}
.p-btn-s {
    @apply bg-red-400 px-4  py-2 mx-2 rounded-[.5rem]  text-slate-50;
}
.p-ill{
    @apply w-[20rem] h-[20rem] object-contain;
}

</style>