export default defineNuxtRouteMiddleware((to) => {
    let bool = !!(Math.floor(Math.random() * 10) & 1)
    console.log('is the user logged in ? --> ', bool);
})
  