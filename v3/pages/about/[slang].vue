<script setup lang="ts">

definePageMeta({ layout: 'custom' });

useHead({
    title: 'useHead',
    titleTemplate: (title: string) => `slang-title - ${title}`,

    viewport: 'width=device-width, initial-scale=1, maximum-scale=1',

    charset: 'utf-8',

    meta: [ { name: 'description', content: 'My amazing site.' } ],

    bodyAttrs: { class: 'body-test' },
})

</script>

<template>
    <div class="home">
        <Head>
            <Meta name="description" :content="'we can override that shit from template using the provided tags'" />
            <Style type="text/css" children="body { background-color: green; }" />
        </Head>

        <h2>About / Slang --> {{ $route.params.slang }} page</h2>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ipsa ducimus dicta asperiores accusantium. Deleniti officiis expedita
            optio, ipsum labore exercitationem perferendis eius dolores. Omnis
            vero odit odio neque porro?
        </p>
    </div>
</template>