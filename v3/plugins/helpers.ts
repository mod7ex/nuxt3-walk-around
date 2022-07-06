export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
            hello: (msg: string) => `Hello from helper plugin to --> ${msg}!`
        }
    }
})