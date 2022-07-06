declare module '#app' {
    interface PageMeta {
        pageType?: string
    }

    interface NuxtApp {
        $hello (msg: string): string
    }
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $hello (msg: string): string // this is for helpers (plugins)
        $translate: (key: string) => string // this is for plugins
    }
}
  
// It is always important to ensure you import/export something when augmenting a type
export {}