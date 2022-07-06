import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
    linkActiveClass: 'link-active',

    linkExactActiveClass: 'link-exact-active',

/*
    // this example is commented out otherwise the app will keep reloading
    
    scrollBehavior: (to, from, savedPosition) => {
        // always scroll 10px above the element #some-el
        return {
            // could also be
            // el: document.getElementById('some-el'),
            el: '#some-el',
            top: -10,
        }
    },
*/
}