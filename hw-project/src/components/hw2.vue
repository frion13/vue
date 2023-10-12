<template>
   <div>
      <HeaderComponent></HeaderComponent>
   
<div class="content">
         <div class="banner-blog"></div>
         <div>
            <h2 class="blog__title">Latest Post</h2>
         </div>
         <div class="blog">
            <img src="@/assets/img/Image.png" alt="">
            <div class="blog__article">
               <h2 class="blog__subtitle">Low Cost Latest Invented Interior Designing Ideas</h2>
               <p class="blog__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
                  maximus.posuere in.Contrary to popular belief.
                  Lorem Ipsum is not simply random text. It has roots in a piece of classica.
               </p>
               <div class="blog__date">
                  <p class="blog__date__text">26 December,2022 </p>
                  <a href="blog__date__dot"></a>
                  <img src="@/assets/img/art-news-dot-next.png" alt="">
               </div>
            </div>
         </div>
         <!-- — Реализовать страницу Blog (Домашнее задание 2).
            Что мы можем заметить в проекте, что часть "Articles & News" 
            повторяется. Как итог, вам необходимо создать блок Articles & News с помощью Vue.js,
             где данные для вёрстки будут храниться в массиве объектов и выводить на страницу с помощью
              цикла v-for.
             -->
         <section id="app" class="art__news">
            <h2 class="blog__title">Articles & News</h2>
            <div class="art__news__all__block">
               <article v-for="item in goods" :key="item.id" class="art__news__block center">
                  <div class="art__news__block__img">
                     <img :src="item.img" alt="">
                     <button class="art__news__bib">{{ item.title }}</button>
                  </div>
                  <div class="art__news__block__sub">
                     <p class="art__news__block__title">{{ item.subTitle }}</p>
                     <div class="art__news__date">
                        <p class="art__news__date__text">{{ item.date }}</p>
                        <a class="art__news__date__dot" :href="item.link"><img
                           src="@/assets/img/art-news-dot-next-cent.png" alt=""></a>

                     </div>
                  </div>
               </article>
               </div>
         </section>
         <div class="pagination">
         <a href="#" class="active">01</a>
         <a href="#">02</a>
         <a href="#">03</a>
         <a href="#"> &gt;</a>
      </div>
   </div>
</div>
<FooterComponent></FooterComponent>
      </template>
         
     
   
      <script>
      
      import HeaderComponent from './header.vue';
  import FooterComponent from './footer.vue';



  
  export default {
    name: 'BlogContent',
    data() {
                 return {
                     goods: [
                         { id: 1, img: require('@/assets/img/img-art-01.png'), title: "Kitchan Design", subTitle: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
                         { id: 2, img: require('@/assets/img/img-art-02.png'), title: "Living Design", subTitle: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
                         { id: 3, img: require('@/assets/img/img-art-03.png'), title: "Interior Design", subTitle: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' },
                         { id: 4, img: require('@/assets/img/img-art-04.png'), title: "Kitchan Design", subTitle: 'Let’s Get Solution For Building Construction Work', date: '26 December,2022' },
                         { id: 5, img: require('@/assets/img/img-art-05.png'), title: "Living Design", subTitle: 'Low Cost Latest Invented Interior Designing Ideas.', date: '22 December,2022' },
                         { id: 6, img: require('@/assets/img/img-art-06.png'), title: "Interior Design", subTitle: 'Best For Any Office & Business Interior Solution', date: '25 December,2022' },
                     ],
                 };
             },
    components: {
      HeaderComponent, FooterComponent,
    }
    
  }

         
  
      
    
      
         
      </script>
 