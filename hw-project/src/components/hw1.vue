<template>
    <div>
        <HeaderComponent></HeaderComponent>
  
    <div class="content">
        <div class="banner">
            <div class="banner__info">
                <h1 class="banner__title">Let Your Home Be Unique</h1>
                <p class="banner__text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
                <button class="banner__but">Get Started
                    <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887" stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="catalog">
            <h2 class="catalog__title">Follow Our Projects</h2>
            <p class="catalog__text">It is a long established fact that a reader will be distracted by the of readable <br> content of page lookings at its layouts points.</p>
            <div class="catalog__all__products">
                <div class="catalog__products">
                    <img src="@/assets/img/product-01.png" alt="">
                    <div class="catalog__info">
                        <div class="catalog__title__sub">
                            <h2 class="catalog__prod__title">Modern Kitchan</h2>
                            <p class="catalog__prod__sub__title">Decor / Artchitecture</p>
                        </div>
                        <a href="#"><img src="@/assets/img/dot-next.png" alt=""></a>
                    </div>
                </div>
                <div class="catalog__products">
                    <img src="@/assets/img/product-02.png" alt="">
                    <div class="catalog__info">
                        <div class="catalog__title__sub">
                            <h2 class="catalog__prod__title">Modern Kitchan</h2>
                            <p class="catalog__prod__sub__title">Decor / Artchitecture</p>
                        </div>
                        <a href="#"><img src="@/assets/img/dot-next.png" alt=""></a>
                    </div>
                </div>
                <div class="catalog__products">
                    <img src="@/assets/img/product-03.png" alt="">
                    <div class="catalog__info">
                        <div class="catalog__title__sub">
                            <h2 class="catalog__prod__title">Modern Kitchan</h2>
                            <p class="catalog__prod__sub__title">Decor / Artchitecture</p>
                        </div>
                        <a href="#"><img src="@/assets/img/dot-next.png" alt=""></a>
                    </div>
                </div>
                <div class="catalog__products">
                    <img src="@/assets/img/product-04.png" alt="">
                    <div class="catalog__info">
                        <div class="catalog__title__sub">
                            <h2 class="catalog__prod__title">Modern Kitchan</h2>
                            <p class="catalog__prod__sub__title">Decor / Artchitecture</p>
                        </div>
                        <a href="#"><img src="@/assets/img/dot-next.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="all__counter">
            <div class="counter">
                <div class="counter__block">
                    <p class="counter__num">12</p>
                    <p class="counter__text">Years Of Experiance</p>
                </div>
                <hr>
                <div class="counter__block">
                    <p class="counter__num">85</p>
                    <p class="counter__text">Success Project</p>
                </div>
                <hr>
                <div class="counter__block">
                    <p class="counter__num">15</p>
                    <p class="counter__text">Active Project</p>
                </div>
                <hr>
                <div class="counter__block">
                    <p class="counter__num">95</p>
                    <p class="counter__text">Happy CUstomers</p>
                </div>
            </div>
        </div>
        <section class="art__news">
            <h2 class="art__news__title">Articles & News</h2>
            <p class="art__news__text">It is a long established fact that a reader will be distracted by the of readable content <br> of a page when lookings at its layouts the points of using.</p>
            <div class="art__news__all__block">
                <article class="art__news__block">
                    <div class="art__news__block__img">
                        <img src="@/assets/img/img-art-01.png" alt="">
                        <button class="art__news__bib">Kitchan Design</button>
                    </div>
                    <div class="art__news__block__sub">
                        <p class="art__news__block__title">Let’s Get Solution For <br> Building Construction <br> Work</p>
                        <div class="art__news__date">
                            <p class="art__news__date__text">26 December,2022</p>
                            <a class="art__news__date__dot" href="#"><img src="@/assets/img/art-news-dot-next.png" alt=""></a>
                        </div>
                    </div>
                </article>
                <article class="art__news__block center">
                    <div class="art__news__block__img">
                        <img src="@/assets/img/img-art-02.png" alt="">
                        <button class="art__news__bib">Living Design</button>
                    </div>
                    <div class="art__news__block__sub">
                        <p class="art__news__block__title">Low Cost Latest Invented<br> Interior Designing<br> Ideas.</p>
                        <div class="art__news__date">
                            <p class="art__news__date__text">22 December,2022</p>
                            <a class="art__news__date__dot" href="#"><img src="@/assets/img/art-news-dot-next-cent.png" alt=""></a>
                        </div>
                    </div>
                </article>
                <article class="art__news__block">
                    <div class="art__news__block__img">
                        <img src="@/assets/img/img-art-03.png" alt="">
                        <button class="art__news__bib">Interior Design</button>
                    </div>
                    <div class="art__news__block__sub">
                        <p class="art__news__block__title">Best For Any Office &<br> Business Interior<br> Solution</p>
                        <div class="art__news__date">
                            <p class="art__news__date__text">25 December,2022</p>
                            <a class="art__news__date__dot" href="#"><img src="@/assets/img/art-news-dot-next.png" alt=""></a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    </div>
    <FooterComponent></FooterComponent>
</div>

</template>
<script>

  import HeaderComponent from './header.vue';
  import FooterComponent from './footer.vue';



  
  export default {
    name: 'FirstPage',
    components: {
      HeaderComponent, FooterComponent,
  
  
    }
  }

</script>
   

   
 