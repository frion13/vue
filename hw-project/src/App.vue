<template>
  <BlogDetails/>
  <FirstPage/>
  <BlogContent/>

  
</template>

<script>
import BlogDetails from './components/hw3.vue'
import FirstPage from './components/hw1.vue'
import BlogContent from './components/hw2.vue'
import '@/assets/style/style.scss';



export default {
  name: 'App',
  components: {
  BlogDetails, FirstPage, BlogContent
  }
}
</script>

<style lang="scss">
@import "@/assets/style/style.scss"
</style>
