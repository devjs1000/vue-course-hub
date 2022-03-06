<template>
  <div
    class="
    p-2
      w-[20rem]
      h-[20rem]
      mx-4
      shadow
      rounded-[.5rem]
      bg-white
      flex flex-wrap
    "
  >
    <img :src="image" class="rounded-[.5rem]" alt="" />

    <h2 class="p-pad text-2xl text-white font-semibold p-text">
      {{ name }}
    </h2>
    <div class="flex items-center">
      <span v-for="tag in tags" :key="tag" class="bg-slate-100 mx-1 px-2 rounded-full text-slate-700">{{ tag }} </span>
    </div>
    <p class="h-[rem] p-mar overflow-auto w-full">
      {{ about }}
    </p>
    
    <button class="text-slate-500 px-4">{{price}} rs</button>
    <button class="p-btn-s h-[2.5rem] flex items-center ">learn more</button>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: Number,
    about: String,
    tags: Array,
    category: String,
    image: String,
  },
};
</script>

<style>
.p-pad {
  @apply px-4 py-2;
}

.p-mar {
  @apply mx-4 my-2;
}
.p-bg {
  @apply bg-red-400;
}
.p-text {
  @apply text-red-500;
}
</style>