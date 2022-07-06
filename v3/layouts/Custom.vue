<script setup>

let route = useRoute();

useHead({ title: `custom | ${route.meta.title}` })

</script>

<template>

    <div class="app-container">

        <the-header />

        <div id="body" class="content">
            <p class="custom"> Some ** custom ** layout </p>

            <slot />
        </div>

    </div>

</template>

<style lang="scss">
#body {
    padding: 1em;

    .custom {
        background-color: red; 
        margin-bottom: 5px;
        padding: 3px;
    }
}
</style>

