<script setup lang="ts">

definePageMeta({
  layout: 'custom',
});

const router = useRouter();
const type = ref(1);

function navigate() {
  return navigateTo({
    name: 'work-jobs',
    query: { type: type.value }
  })
}

</script>

<template>
    <div class="home">
        <h2>Work / Index page</h2>

        <button @click="navigate">move to jobs</button>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ipsa ducimus dicta asperiores accusantium. Deleniti officiis expedita
            optio, ipsum labore exercitationem perferendis eius dolores. Omnis
            vero odit odio neque porro?
        </p>
    </div>
</template>