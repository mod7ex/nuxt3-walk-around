import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    meta: { title: 'Default title' },

    // router: { options: { } },

    css: ['@/assets/scss/_reset.scss'],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/scss/_variables.scss";`
                }
            }
        }
    }
})


/*
    @import "@/assets/scss/_variables.scss";
    @import "@/assets/scss/_mixins.scss";
    @import "@/assets/scss/_functions.scss";
    @import "@/assets/scss/_reset.scss";
    @import "@/assets/scss/_keyframes.scss";
*/



