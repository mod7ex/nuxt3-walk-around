<script setup>

let route = useRoute();

useHead({ title: `default | ${route.meta.title ?? 'Some default title' }` })

</script>

<template>

    <div class="app-container">

        <the-header />

        <div id="body" class="content">
            <p class="layout default"> Some default layout shared across all pages </p>

            <slot />
        </div>

    </div>

</template>

<style lang="scss">
#body {
    padding: 1em;

    .default {
        background-color: green; 
        padding: 3px;
        margin-bottom: 5px;
    }
}
</style>

