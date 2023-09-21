// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css: ["bootstrap/dist/css/bootstrap.min.css"],

  modules: ['@nuxtjs/tailwindcss'],
  app:{
    head:{
      title:'Nuxt Dojo',
      meta:[
        {
          name:'description',content:'Everything about Nuxt'
        }
      ],
      link:[
        {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }

})
