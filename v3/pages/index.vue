<script setup>

definePageMeta({
    title: 'My home page',
    alias: '/home'
});

let { $hello } = useNuxtApp(); // helpers

</script>

<template>
    <div class="home">
        <h2>Home page</h2>
        <h3> {{ $hello('Mourad') }} </h3>
        <br>
        <br>
        <h4> a random number from <code>useRandom</code> composable {{ useRandom() }} </h4>
        <br>
        <br>
        <h4> the number of milliseconds from the <code>useNow</code> composable {{ useNow() }} </h4>
        <br>
        <br>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ipsa ducimus dicta asperiores accusantium. Deleniti officiis expedita
            optio, ipsum labore exercitationem perferendis eius dolores. Omnis
            vero odit odio neque porro?
        </p>
    </div>
</template>