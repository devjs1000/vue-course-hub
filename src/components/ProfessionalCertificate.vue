<script setup>
import certificate from "@/assets/certificates.svg";
</script>

<template>
  <div
    class="
      p-5 
      bg-white
      overflow-hidden
      flex
      justify-between
      w-full
    "
  >
    <img :src="certificate" alt="" class="p-ill" />

    <div class="mx-5 grid ">
      <h2 class="p-h1 w-[50vw] font-bold">
        Be future ready with
        <span class="p-text"> Our Professional Certificate </span>
      </h2>
      <h3 class="my-5">
        Validate your cloud expertise with an industry-recognized credential
        today. Get an industry-leading credential and validate your AWS Cloud
        skills. Validate Your Cloud Skill. Advance Your Career. Online AWS
        Certification
      </h3>
      <div>
      <button class="p-btn-s">Start the journey</button>
      <button class="p-btn-o">learn more</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>