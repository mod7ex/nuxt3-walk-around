<script setup lang="ts">

definePageMeta({
  layout: 'custom',
});

</script>

<template>
    <div class="home">
        <h2>About page index.vue</h2>
        <br>
        <br>
        <h3>
            {{ 'the i18n plugin has translated this from english --> french ' + $translate('greetings.hello') }}
        </h3>
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