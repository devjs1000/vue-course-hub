<template>
  <div class="ml-3 inline-flex rounded-md shadow">
    <a
      target="_blank"
      :href="url"
      class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium leading-6 text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none"
      >Learn more</a
    >
  </div>
</template>


<script>
export default {
  setup() {
    
  },
  props:{
    url:String
  }
}
</script>
