<script setup>

import SideBar from '../components/SideBar.vue'
import ProfileDashboard from '../components/ProfileDashboard.vue'
</script>

<template>
 
 <div class="flex">
<side-bar />
<router-view name="profile" />
 </div>
</template>

<script>
export default {

}
</script>

<style >
.p-border{
  @apply border border-[1px] border-slate-200;
}

</style>