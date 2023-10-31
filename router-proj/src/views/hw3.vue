<template>
    <div>
      <HeaderComponent></HeaderComponent>
  
      <div class="blog__details">
        <img :src="require('@/assets/img/Banner1.jpg')">
      </div>
  
      <ArticleComponent></ArticleComponent>
  
      <FooterComponent></FooterComponent>
    </div>
  </template>
  
  <script>
 import HeaderComponent from '@/components/header.vue';
      import FooterComponent from '@/components/footer.vue';
  import ArticleComponent from '@/components/article.vue';




  
  export default {
    name: 'BlogDetails',
    components: {
      HeaderComponent, ArticleComponent, FooterComponent,
  
  
    }
  }
  </script>
  