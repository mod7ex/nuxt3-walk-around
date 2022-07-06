<script setup>

definePageMeta({
  title: 'My 0 parent page',
  
  keepalive: true,

  middleware: ['auth', (to, from, next) => { console.log(to.name) }],

  pageType: 'Guess' // custom meta data
})

</script>

<template>
    <div class="home">
        <h2>Parent.vue file</h2>

        <ul>
            <li><nuxt-link to="/parent" >parent</nuxt-link></li>
            <li><nuxt-link to="/parent/child" >child</nuxt-link></li>
            <li><nuxt-link to="/parent/son" >son</nuxt-link></li>
        </ul>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ipsa ducimus dicta asperiores accusantium. Deleniti officiis expedita
            optio, ipsum labore exercitationem perferendis eius dolores. Omnis
            vero odit odio neque porro?
        </p>

        <nuxt-page :page-key="$route.fullPath" />

        <div class="var-test">Lorem, ipsum dolor.</div>
    </div>
</template>

<style lang="scss">

.var-test {
    background-color: $primary;
    color: #eee;
}

</style>