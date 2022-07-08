<script setup>

definePageMeta({
    layout: 'custom',
    title: 'State Other',
});

const counter = useState('counter');

if(process.server) counter.value = 100000 ;

// const locales = useLocales()
// const locale = useLocale()
// const date = useLocaleDate(new Date('2016-10-26') /* NUXT_BIRTHDAY */)

</script>

<template>
    <div class="state">
        <h1>Counter: {{ counter }}</h1>

        <hr>
        <br> <br>

        <!--
            <p>locales : {{ locales }}</p>
            <p>locale : {{ locale }}</p>
            <p>date : {{ date }}</p>
        -->

    </div>
</template>