<script setup lang="ts">

let count = ref<number>(0);

definePageMeta({
    title: 'Fetch',
});

const { data, pending, error, refresh } = await useFetch('https://api.nuxtjs.dev/mountains', {
    key: 'lorem',
    lazy: true, // true --> no blocking, false --> waits for data before loading the page
    default: () => 'the default content before the request resolves',
    watch: [count],
    initialCache: true, // cache the request
    transform: <T extends {title: string}>(data: T[]) => data.map(({title}) => title)
});

</script>

<template>
    <div class="home">
        <nuxt-link :to="{ name: 'fetch-async-data' }">Async data</nuxt-link>
        <hr>
        <br>
        <h2>Fetch (useFetch) - page</h2>
        <button @click="refresh">refresh data</button>
        <button @click="count++">increase count</button>
        <hr>
        <br>
            {{ pending ? 'loading...' : 'ready' }}
        <br>
        <br>
            <p>Error ==> {{ error }}</p>
        <br>
        <br>
            <div>
                the data after applying the transform function{{ data }}
            </div>
    </div>
</template>