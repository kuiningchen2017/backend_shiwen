<template>
    <div class="wrapper">
        <VHeader></VHeader>
        <VSidebar></VSidebar>
        <div class="content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
import VHeader from '../Header/header.vue'
import VSidebar from '../Sidebar/Sidebar.vue'
export default {
  name: 'home',
  data () {
    return {}
  },
  components: {
    VHeader,
    VSidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
