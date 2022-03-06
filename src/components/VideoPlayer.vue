<template>
  <div
    class="
      flex
      max-w-sm
      w-full
      h-full
      bg-white
      shadow-md
      overflow-hidden
      mx-auto
    "
  >
    <div class="flex flex-col ">
      <div class="relative">
        <video class="w-screen" id="main-video">
          <source
            class=""
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
        <div class="absolute bottom-0 w-full bg-gradient-to-r from-black">
          <span class="text-white text-xs uppercase px-2">
            {{ title }}
          </span>
        </div>
      </div>
      <div>
        <div>
          <div class="relative h-1 bg-gray-200">
            <div
              class="absolute h-full bg-green-500 flex items-center justify-end"
              :style="{ width: progress }"
            >
              <div class="rounded-full w-3 h-3 bg-white shadow"></div>
            </div>
          </div>
        </div>
        <div
          class="flex justify-between text-xs font-medium text-gray-500 py-1"
        >
          <div>1:50</div>
          <div class="flex space-x-3 pt-5">
            <button class="focus:outline-none">
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10b981"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="19 20 9 12 19 4 19 20"></polygon>
                <line x1="5" y1="19" x2="5" y2="5"></line>
              </svg>
            </button>
            <button
              class="
                rounded-full
                w-8
                h-8
                flex
                items-center
                justify-center
                pl-0.5
                ring-2 ring-green-500
                focus:outline-none
              "
              @click="play"
            >
              <svg
                v-if="videoStatus"
                class="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10b981"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
            <button class="focus:outline-none">
              <svg
                class="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#10b981"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="5 4 15 12 5 20 5 4"></polygon>
                <line x1="19" y1="5" x2="19" y2="19"></line>
              </svg>
            </button>
          </div>
          <div>3:00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoStatus: false,
      progress: "45%",
      duration: 1,
      vall: "",
    };
  },
  props: {
    title: String,
  },
  methods: {
    play() {
      let video = document.getElementById("main-video");
      this.duration = video.duration;
      this.videoStatus = !this.videoStatus;
      console.log(video.currentTime);
      const updater = () => {
        let val = (video.currentTime * 100) / this.duration + "%";
        console.log(val);
        this.progress = val;
        if (val === "100%") {
          window.clearInterval(this.vall);
          this.videoStatus = false;
        }
      };
      if (this.videoStatus) {
        this.vall = setInterval(updater, 200);
        video.play();
      } else {
        video.pause();
        window.clearInterval(this.vall);
      }
    },
  },
};
</script>

<style>
</style>