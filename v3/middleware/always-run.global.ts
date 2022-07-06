export default defineNuxtRouteMiddleware((to) => {
    console.log('get ready we\'re going to ', to.name);
})
  