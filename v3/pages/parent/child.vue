<script setup lang="ts">

definePageMeta({
  title: 'My child page',

  alias: 'fils',

  middleware: (to, from, next) => { // inline middleware
    console.log(to)
  },

  pageTransition: {
    name: 'child-tr',
    appear: true,
  },

});

</script>

<template>
    <div class="child">
        <h2>Child.vue file</h2>

        <p> Lorem ipsum dolor sit amet consectetur  </p>
        <p> this is the child.vue file  </p>

        <hr>

        <form-admin />
    </div>
</template>

<style lang="scss">
.child {
    border: 5px solid red;

    .forms-btn {
        display: flex; 
        align-items: center;
        justify-content: space-evenly;
        padding: 1em;

        button{
            padding: .3em .7em;
        }
    }
}

.child-tr-enter-active {
  transition: all 0.3s ease-out;
}

.child-tr-enter-from {
  transform: translateY(20px);
  opacity: 0;
}
</style>