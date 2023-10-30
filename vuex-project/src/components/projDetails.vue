<template>
    <div>
       <HeaderComponent></HeaderComponent>
    
 <div class="content">
          <div class="banner-project"></div>
          <div class="project">
            
             <div class="project__article">
                <h2 class="project__title">{{content.title}}</h2>
                <p class="project__text">{{ content.text }}
                </p>
                
                
             </div>
   
          </div>
          
          
    </div>
 </div>
 <Swiper></Swiper>

 <FooterComponent></FooterComponent>
 
       </template>
          
      
    
       <script>
       
       
       
       import HeaderComponent from './header.vue';
       import FooterComponent from './footer.vue';
       import { mapState } from 'vuex';
       import Swiper from './swiperComp.vue';
 
 
 
   
   export default {
     name: 'BlogContent',
     components: {
       HeaderComponent, FooterComponent, Swiper,
     },
     computed: {
    ...mapState(['content']),
  },
     
   }
 
          
   
       
     
       
          
       </script>

<style lang="scss">

.banner-project {

  background: url('@/assets/img/ban-proj.jpg') center top no-repeat;
  height: 356px;
}

.project {
  padding-left: calc(50% - 400px);
  padding-right: calc(50% - 400px);
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  

  &__article{
    color: black;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
    padding-bottom: 21px;
    padding-left: 65px;
  }

  &__title {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
    color: black;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    padding-top: 30px;
  }

  

  &__text {
    color: black;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
    padding-bottom: 93px;
  }

  
}



</style>
  