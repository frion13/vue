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
  import HeaderComponent from './header.vue';
  import ArticleComponent from './article.vue';
  import FooterComponent from './footer.vue';



  
  export default {
    name: 'BlogDetails',
    components: {
      HeaderComponent, ArticleComponent, FooterComponent,
  
  
    }
  }
  </script>
  