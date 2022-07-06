import {Plugin} from 'vue-demi'

const i18n: Plugin = {
    install: (app, options: object) => {
        app.config.globalProperties.$translate = (key: string): string => {
            return key.split('.').reduce((o, i) => {
                if (o) return o[i]
            }, options)
        }
    }
}

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(i18n, {
        greetings: {
            hello: 'Bonjour!'
        }
    })
})