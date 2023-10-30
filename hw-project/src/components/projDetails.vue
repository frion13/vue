<template>
    <div>
       <HeaderComponent></HeaderComponent>
    
 <div class="content">
          <div class="banner-project"></div>
          <div class="project">
            
             <div class="project__article">
                <h2 class="project__title">Minimal Look Bedrooms</h2>
                <p class="project__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. 

In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
                </p>
                
                
             </div>
             <div>
                
             <img width="1200px" src="@/assets/img/Image.png" alt=""></div>
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
     components: {
       HeaderComponent, FooterComponent,
     }
     
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
  