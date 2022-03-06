<template>

  <div class="uni-center grid-cols-1 sm:grid-cols-2 my-10 lg:grid-cols-3 xl:grid-cols-4">
    <div
     v-for="category in data" :key="category"
      class="
        max-w-sm
        bg-white
        border-1 border-gray-100 m-5
        p-6
        rounded-md
        tracking-wide
        shadow-lg
        w-[20rem]
      "
    >
      <div id="header" class="flex items-center mb-4">
          
        <img
          alt="avatar"
          class="w-20 h-20 object-cover rounded-full border-2 border-gray-300"
          :src="category.image"
        />
        <div id="header-text" class="leading-5 ml-6 sm">
          <h4 id="name" class="text-xl font-semibold">{{category.category}}</h4>
          <h5 id="job" class="font-semibold text-blue-600 ">600+ courses</h5>
        </div>
      </div>
      <div id="text-slate-700">
          {{category.about}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style>
</style>