<template>
<div>

  <TopBar />
  <SideMenu/>

</div>
</template>

<script>
import { SideMenu, TopBar } from '@/layout/basic'
export default {
  name: 'index',
  components: {
    SideMenu,
    TopBar
  }
}
</script>

<style scoped>

</style>
