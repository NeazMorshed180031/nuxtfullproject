<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products">
        <ProductCard :products="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
  //  fetch the products
  const { data: products } = await useFetch('https://fakestoreapi.com/products')
  const router = useRouter()
  definePageMeta({
    layout: "products",
  })
  useHead({
    title:'Nuxt Dojo|Merch',
    meta:[
      {name:'description',content:'Nuxt 3 Merch'}
    ]
  })


 onMounted(() => {
    let user = localStorage.getItem('userinfo')
    if (!user) {
      router.push('/login')
    }
})
</script>