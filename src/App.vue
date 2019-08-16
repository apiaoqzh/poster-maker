<template>
  <div id="app">
    <router-view
        :key="$route.fullPath"
        class="app-view">
    </router-view>
  </div>
</template>

<script>
export default {
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
#app{
}
</style>

<style lang="scss">
@import './assets/css/index.scss';
</style>
