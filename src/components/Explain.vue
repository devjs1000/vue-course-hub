<template>
  <!-- component -->

  <section class="relative pt-12 bg-white py-10 p-border">
    <div class="items-center flex flex-wrap">
      <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
        <img
          alt="..."
          :src="image"
        />
      </div>
      <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
        <div class="md:pr-12">
          <div
            class="
             icon
            "
          >
            icon
          </div>
          <h3 class="text-3xl font-semibold">{{ heading }}</h3>
          <p >
            {{ subHeading }}
          </p>
          <ul class="list-none mt-6"></ul>
        </div>
        <button class="p-btn-s">{{action}}</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: String,
    heading: String,
    subHeading: String,
    action: String
  },
};
</script>

<style scoped>

p{
    @apply mt-4 text-lg leading-relaxed text-gray-500;
}

.icon{
    @apply text-pink-600
              p-3
              text-center
              inline-flex
              items-center
              justify-center
              w-16
              h-16
              mb-6
              shadow-lg
              rounded-full
              bg-pink-300
              mt-8;
}

img{
    @apply w-[20rem] h-[20rem] object-cover mx-auto rounded-lg shadow-lg;
}
</style>