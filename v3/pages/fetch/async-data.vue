<script setup lang="ts">

definePageMeta({
    title: 'Async data',
});

const { data: pageVists } = await useAsyncData('count', () => $fetch('/api/count'));

// use refreshNuxtData to clean cach and get new data
// const { data: pageVists } = await useAsyncData('count', () => $fetch('/api/count'), {initialCache: true})

const { data, pending, error, refresh } = await useAsyncData(
  'local-resolved-data',
  () => $fetch('https://api.nuxtjs.dev/mountains'),
  {
    lazy: true
  }
)

const { data: dt, pending: loading } = await useAsyncData(
  'mountains',
  () => Promise.resolve({data: 'data from the useAsyncData composable'}),
  {
    lazy: true
  }
)

</script>

<template>
    <div class="async-data">

    <div>
        <h3>page visits count {{ pageVists }}</h3> 
    </div>

    <br><br>
    <hr>
    <br><br>

    <div>
        <h3>{{ loading ? 'loading...' : 'request resolved' }}</h3>
        ---
        <p> {{ dt }} </p>
    </div>

    <br><br>
    <hr>
    <br><br>

    <div>
        <h3>{{ pending ? 'loading...' : 'request resolved' }}</h3>
        ---
        <p> {{ data }} </p>
    </div>

    </div>
</template>