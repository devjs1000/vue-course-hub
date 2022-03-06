<template>
  <!-- component -->
  <header>
    <div class="h-screen bg-gray-100 flex justify-center">
      <div class="py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
        <form action="">
          <div class="mb-6">
            <label for="name" class="block text-gray-800 font-bold"
              >Name:</label
            >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="username"
              class="
                            p-input

              "
            />
          </div>

          <div>
            <label for="email" class="block text-gray-800 font-bold"
              >Email:</label
            >
            <input
              type="text"
              name="email"
              id="email"
              placeholder="@email"
              class="
                             p-input

              "
            />

            <a
              href="#"
              class="
p-link
              "
              >Forget Password</a
            >
          </div>
          <button
            class="
              auth-btn
            "
            >Login</button
          >
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.auth-btn{
  @apply cursor-pointer
              py-2
              px-4
              block
              mt-6
              bg-red-500
              text-white
              font-bold
              w-full
              text-center
              rounded;
}
</style>