<script setup>
import SideBtn from "./SideBtn.vue";
import SubHeading from "./SubHeading.vue";
</script>


<template>
  <!-- component -->

  <div
    class="
      overflow-y-auto overflow-x-hidden
      w-[20rem]
      border border-right-1 border-slate-100
      flex-grow
      h-screen
    "
  >
    <ul class="flex flex-col py-4 space-y-1">
      <sub-heading title="Menu" />
      <!-- menu things  -->
      <side-btn title="courses" path="/profile/courses" />
      <side-btn title="projects" path="/profile/projects" />
      <side-btn title="dashboard" path="/profile/dashboard" />

      <side-btn title="ask?" path="/profile/ask" />

      <sub-heading title="Settings" />

      <side-btn title="languages" path="/profile/settings/languages" />
      <side-btn title="edit profile" path="/profile/settings/edit-profile" />
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>