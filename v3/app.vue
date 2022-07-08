<script setup lang="ts">
/*
`useRequestHeaders` is only for SSR in browser it will give an empty object
*/
console.log('all headers', useRequestHeaders()) 
console.log('cookie headers', useRequestHeaders(['cookie'])) 
</script>

<template>

  <div>
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>

</template> 