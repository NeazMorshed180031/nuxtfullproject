<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4 flex justify-between">
        <NuxtLink to="/" class="font-bold">Nuxt Dojo</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products" class="btn">Merch</NuxtLink></li>
          <li><NuxtLink to="/login" class="btn bg-red-700" @click="logout">Logout</NuxtLink></li>
   
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
  </div>
</template>


<style scoped>
  .router-link-exact-active {
    color: #eff5f3;
  }
</style>
<script setup>
function logout(){
console.log('Hello')
localStorage.removeItem('userinfo')
}

</script>
