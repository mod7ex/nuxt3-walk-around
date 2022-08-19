<script setup>

definePageMeta({
    layout: 'custom',
    title: 'Error component',
})

let errorHandler = (x) => {
    console.log('AN error happened here ==> ', x);
}

</script>

<template>
    <div class="error">
        <nuxt-error-boundry @error="errorHandler">
            <err />

            <template #error="{ error }">
                <p>An error occurred: {{ error }}</p>
            </template>
        </nuxt-error-boundry>
    </div>
</template>