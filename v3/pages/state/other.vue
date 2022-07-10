<script setup>

definePageMeta({
    layout: 'custom',
    title: 'State Other',
});

const counter = useState('counter');

if(process.server) counter.value = 100000 ;

</script>

<template>
    <div class="state">
        <h1>Counter: {{ counter }}</h1>

        <hr>
        <br> <br>

    </div>
</template>