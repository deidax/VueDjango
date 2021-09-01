<template>
<v-container>
  <nav-bar/>
  <h1>This is Dashboard page</h1>
</v-container>
</template>

<script>
import NavBar from '../components/NavBar.vue'

  export default {
    name: 'Dashboard',

    components: {
      NavBar,
    },
  }
</script>NavBar