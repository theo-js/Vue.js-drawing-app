<template>
  <Layout>
    <transition
      mode="out-in"
      :name="transitionName"
    >
      <router-view
        :key="$route.fullPath"
      >
      </router-view>
    </transition>
  </Layout>
</template>

<script>
import Layout from './components/layout'
export default {
  name: 'App',
  components: {
    Layout
  },
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route' (to, /*from*/) {
      //const toDepth = to.path.split('/').length
      //const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      this.transitionName = to.path === '/' ? 'slide-left' : 'slide-right'
    }
  }
}
</script>

<style scoped>
.slide-right-enter-active, .slide-right-leave-active {
  transition: .5s all ease;
  opacity: .25;
}
.slide-right-enter-from {
  transform: translate(100%);
}
.slide-right-leave-to {
  transform: translate(-100%);
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: .5s all ease;
  opacity: .25;
}
.slide-left-enter-from {
  transform: translate(-100%);
}
.slide-left-leave-to {
  transform: translate(100%);
}
</style>