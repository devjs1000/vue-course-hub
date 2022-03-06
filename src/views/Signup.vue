<template>
  <header>
    <div class="h-screen bg-gray-100 flex justify-center">
      <div class="py-6 px-8 h-[25rem] mt-20 bg-white rounded shadow-xl">
        <form action="">
          <div class="mb-6">
            <label for="name" class="block text-gray-800 font-bold"
              >Name:</label
            >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="your name"
              class="p-input"
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
              class="p-input"
            />
          </div>

          <div>
            <label for="password" class="block text-gray-800 font-bold"
              >Password:</label
            >
            <input
              type="text"
              name="password"
              id="password"
              placeholder="@password"
              class="p-input"
            />
          </div>
          <a href="#" class="p-link">Forget Password</a>

          <button class="auth-btn">Login</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
.p-input {
  @apply w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 focus:ring-blue-600;
}
.p-link {
  @apply text-sm
              font-normal
              text-gray-800
              hover:underline
              mt-2
              inline-block
              hover:text-red-600;
}
</style>