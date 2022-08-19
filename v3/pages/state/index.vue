<script setup>

definePageMeta({
    layout: 'custom',
    title: 'State',
});

const counter = useState('counter', () => Math.round(Math.random() * 1000));

const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26') /* NUXT_BIRTHDAY */)

</script>

<template>
    <div class="state">
        <nuxt-link :to="{ name: 'state-other' }">move to other</nuxt-link>

        <br> <br>

        <h1>Counter: {{ counter }}</h1>

        <n-button @click="counter++"> + </n-button>

        <n-button @click="counter--"> - </n-button>

        <hr>
        <br> <br>

        <p>locales : {{ locales }}</p>
        <p>locale : {{ locale }}</p>
        <p>date : {{ date }}</p>

    </div>
</template>