<script setup lang="ts">

definePageMeta({
  layout: 'custom',
});

</script>

<template>
    <div class="home">
        <h2>About / Slang --> {{ $route.params.slang }} page</h2>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ipsa ducimus dicta asperiores accusantium. Deleniti officiis expedita
            optio, ipsum labore exercitationem perferendis eius dolores. Omnis
            vero odit odio neque porro?
        </p>
    </div>
</template>