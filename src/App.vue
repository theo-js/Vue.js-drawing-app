<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<script>
import Layout from './components/layout'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>
