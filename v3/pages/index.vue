<script setup>

definePageMeta({
    title: 'My home page',
    alias: '/home'
});

let { $hello } = useNuxtApp(); // helpers

const cookie = useCookie('my-cookie');
// const cookie = useCookie('my-cookie', {httpOnly: true});

cookie.value = 'lorem cookie'

let changeCookie = () => {
    cookie.value = 'my-cookie ' + Date.now() // it will change if httpOnly is false
}

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

        <br><br>
        <hr>
        <br><br>
        
        <p>this is the cookie --> {{ cookie }}</p>

        <button @click="changeCookie">Set a random cookie</button>
    </div>
</template>