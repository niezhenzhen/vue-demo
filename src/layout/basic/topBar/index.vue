<template>
<div class="topBar">

</div>
</template>

<script>
export default {
  name: 'topBar',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
.topBar{
  height: 40px;
  background: forestgreen;
}
</style>
