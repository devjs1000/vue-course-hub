<script setup>
import Search from './Search.vue'
import Modal from './Modal.vue'
</script>

<template>
  <header class="bg-white shadow" v-if="$route.meta.title">
   <nav>
    <div class="">
      <div class="flex justify-between h-16 px-10 shadow items-center">
        <div class="flex items-center space-x-8">
          <h1 class="text-xl lg:text-2xl font-bold cursor-pointer">XcitEdu</h1>
          <div class="hidden md:flex justify-around space-x-4">
            <router-link to="/" class="hover:text-blue-600 text-gray-700">Home</router-link>
            <router-link to="/about" class="hover:text-blue-600 text-gray-700">About</router-link>
            <router-link to="/courses" class="hover:text-blue-600 text-gray-700">Courses</router-link>
            <router-link to="/profile" class="hover:text-blue-600 text-gray-700">Profile</router-link>
          </div>
        </div>
        <div class="flex space-x-4 items-center">
          <modal title="Modal" openText="open modal" @open="modalOpen">hey</modal>
          <search label="search"/>
          <router-link to="/login" class="text-gray-800 text-sm p-btn-o">LOGIN</router-link>
          <router-link to="/signup" class="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-700 text-sm">SIGNUP</router-link>
        </div>
      </div>
    </div>
  </nav>
  </header>
</template>

<script>
export default {

  methods:{
    modalOpen(){
      console.log('modal is open');
    }
  }
};
</script>

<style>
</style>