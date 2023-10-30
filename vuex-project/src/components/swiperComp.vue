<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#black',
      '--swiper-pagination-color': '#fff',
    }"
    :zoom="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="swiper-zoom-container">
        <img src="@/assets/img/proj.png" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="@/assets/img/banner.png" />
      </div> </swiper-slide
    ><swiper-slide>
      <div class="swiper-zoom-container">
        <img src="@/assets/img/banner.png" />
      </div> </swiper-slide
    >
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/zoom';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';


  // import required modules
  import { Zoom, Navigation, Pagination } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Zoom, Navigation, Pagination],
      };
    },
  };
</script>
