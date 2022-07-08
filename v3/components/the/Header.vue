<script setup lang="ts">
let clearCache = () => refreshNuxtData();
</script>

<template>

  <header id="app-header">
    <div class="head-inner">

      <h1><nuxt-link :to="{ name: 'index' }" >Site Name</nuxt-link></h1>

      <button @click="clearCache" >clear cache</button>

      <ul id="nav">
          <li><nuxt-link :to="{ name: 'parent' }"> parent </nuxt-link></li>
          <li><nuxt-link :to="{ name: 'work' }"> work </nuxt-link></li>
          <li><nuxt-link :to="{ name: 'about' }"> about </nuxt-link></li>
          <li><nuxt-link :to="{ name: 'fetch' }"> fetch </nuxt-link></li>
          <li><nuxt-link :to="{ name: 'state' }"> state </nuxt-link></li>
      </ul>

    </div>
  </header>

</template>

<style lang="scss">
#app-header {
    background-color: blue;
    color: white;

    .head-inner{
      padding: 1em;
      max-width: 1400px;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;

        ul#nav{
          display: flex;
          align-items: center;
          justify-items: space-between;
          li {
            margin: 0 1em;
            a {
              color: white;
            }
          }
        }
    }
}
</style>