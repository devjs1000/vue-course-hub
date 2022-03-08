<script setup>
const props = defineProps({
  title: String,
  openText:String
});

const emit = defineEmits(["open", "close"]);
</script>

<template>
  <div>
    <button
      class="btn"
      @click="
        () => {
          $emit('open');
          openModal();
        }
      "
    >
    {{openText}}
    </button>
    <div class="modal hidden overflow-hidden" ref="modal">
      <div class="title">{{ title }}</div>
      <slot />
      <div class="title flex absolute w-[calc(100%-2rem)] justify-end bottom-0">
        <button
          class="btn "
          @click="
            () => {
              $emit('close');
              closeModal();
            }
          "
        >
          close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      let md = this.$refs["modal"];
      console.log(md);
      md?.classList.toggle("hidden");
    },
     closeModal() {
      let md = this.$refs["modal"];
      console.log(md);
      md?.classList.toggle("hidden");
    }
  },
};
</script>

<style scoped>
.modal {
  @apply w-[calc(100%-4rem)] z-[1]  h-[calc(100vh-4rem)] bg-white shadow-lg px-4 py-2 rounded-[1rem] fixed left-[2rem] top-[2rem];
}
.btn {
  @apply bg-green-500 text-white hover:bg-green-400 my-2 rounded-[.5rem]  px-4 py-1 text-xl;
}

.title {
  @apply text-2xl text-center text-slate-700 font-bold pb-2 mb-2  border-b-[1px];
}
</style>