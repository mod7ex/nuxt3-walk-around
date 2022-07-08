import { parse } from 'cookie-es'
import type { Ref } from 'vue'

export const useNow = () => {
    return Date.now()
}

// https://v3.nuxtjs.org/guide/features/data-fetching#example-pass-on-cookies-from-server-side-api-calls-on-ssr-response
/*
export const fetchWithCookie = async (url: string, cookieName: string) => {
    const response = await $fetch.raw(url)

    if (process.server) {

      const cookies = Object.fromEntries(
        response.headers.get('set-cookie')?.split(',').map((a) => a.split('='))
      )
      if (cookieName in cookies) {
        useCookie(cookieName).value = cookies[cookieName]
      }
    }

    return response._data
}

// --------------------------------------------------------------------------------------------

export const fetchWithCookie = async (url: string, cookieName: string) => {
    const response = await $fetch.raw(url)

    if (process.server) {

        let cookies = response.headers.get('set-cookie')?.split(',');

        if(cookies) {
            for(let cookie of cookies) {
                if(cookie.startsWith(cookieName)) {
                    let entries = cookie.split('; ').map(item => item.split('='))
                    let firstItem = entries.shift()
                    useCookie(cookieName, Object.fromEntries(entries)).value = firstItem[1];
                    break;
                }
            }
        }
    }

    return response._data
}
*/
// Pass cookies from server to client on SSR
export const fetchWithCookie = async (url: string, cookieName: string) => {
    const response = await $fetch.raw(url)

    if (process.server) {

        let cookies = response.headers.get('set-cookie')?.split(',');

        if(cookies) {
            for(let cookie of cookies) {
                if(cookie.startsWith(cookieName)) {
                    let payload = parse(cookie)
                    let _value = payload[cookieName]
                    delete payload[cookieName]
                    useCookie(cookieName, payload).value = _value
                    break;
                }
            }
        }
    }

    return response._data
}

// ----------------------------------------------------------------------------------

export const useLocale = () => useState<string>('locale', () => useDefaultLocale())

export const useDefaultLocale = (fallback = 'en-US') => {
  const locale = ref(fallback)
  if (process.server) {
    const nuxtApp = useNuxtApp()
    const reqLocale = nuxtApp.ssrContext?.req.headers['accept-language']?.split(',')[0]
    if (reqLocale) locale.value = reqLocale
  } else if (process.client) {
    const navLang = navigator.language
    if (navLang) locale.value = navLang
  }
  return locale
}

export const useLocales = () => {
  const locale = useLocale()
  const locales = ref(['en-US','en-GB','ko-KR','zh-CN','ar-EG','fa-IR','ja-JP-u-ca-japanese']);
  if (!locales.value.includes(locale.value)) locales.value.unshift(locale.value)
  return locales
}

export const useLocaleDate = (date: Ref<Date> | Date, locale = useLocale()) => {
  return computed(() => new Intl.DateTimeFormat(locale.value, { dateStyle: 'full' }).format(unref(date)))
}
