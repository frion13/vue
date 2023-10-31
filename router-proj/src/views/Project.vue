<template>
    <div>
      <HeaderComponent />
      <div class="project__details">
    <div class="title">
      <h1>Our Project</h1>
      <h4>Home / Project</h4>
    </div>
    <img class="img_banner" :src="require('@/assets/img/projbanner.png')" />
  </div>



  <div class="but">
    
 
  <div class="buttons__check">
    
  
  <button class="button__checked"  v-for="(tag, index) in Tags" :key="index" @click="clickTag(tag)">{{ tag }}</button>
</div>
</div>
  
  <div class="masonry">
      <VueMasonry>
        <CardComponent :cards="displayItems" />
  
      </VueMasonry>
    </div>
  


      <FooterComponent />
    </div>
  
  

  </template>
  
  <script>
  import CardComponent from "@/components/CardComponent.vue";
  import HeaderComponent from '@/components/header.vue';
  import FooterComponent from '@/components/footer.vue';
  import { VueMasonry } from "vue-masonry-css";
  
  export default {
    name: "ProjectComponent",
    data() {
      return {
        cards: [
          {
            title: "Minimal Bedroom",
            text: "Decor / Artchitecture",
            tag: "BedRoom",
            img: require('@/assets/img/card_prod.png'),
           
          },
          {
            title: "Modern Bedroom",
            text: "Decor / Artchitecture",
            tag: "BedRoom",
            img: require('@/assets/img/card_prod1.png'),
           
          },
          {
            title: "Classic Minimal Bathroom",
            text: "Decor / Artchitecture",
            tag: "Bathroom",
            img: require('@/assets/img/card_prod2.png'),
          
          },
          {
            title: "Modern Bathroom",
            text: "Decor / Artchitecture",
            tag: "Bathroom",
            img: require('@/assets/img/card_prod3.png'),
          
          },
          {
            title: "Minimal Bathroom",
            text: "Decor / Artchitecture",
            tag: "Bathroom",
            img: require('@/assets/img/card_prod4.png'),
          },
          {
            title: "Minimal Bathroom",
            text: "Decor / Artchitecture",
            tag: "Bathroom",
            img: require('@/assets/img/card_prod5.png'),
          },
          {
            title: "Minimal Kitchen",
            text: "Decor / Artchitecture",
            tag: "Kitchen",
            img: require('@/assets/img/card_prod5.png'),
          },
          {
            title: "Minimal Kitchen",
            text: "Decor / Artchitecture",
            tag: "Kitchen",
            img: require('@/assets/img/card_prod7.png'),
        
          },
          {
            title: "Classic Minimal Kitchen",
            text: "Decor / Artchitecture",
            tag: "Kitchen",
            img: require('@/assets/img/card_prod.png'),
          },
          {
            title: "Classic Minimal Kitchen",
            text: "Decor / Artchitecture",
            tag: "Kitchen",
            img: require('@/assets/img/card_prod1.png'),
            
          },
        ],
        Tags: ["Kitchen", "Bathroom", "BedRoom"],
        filterItem: [],
        isButtonClicked: false, 

        
      };
    },
    components: {
      CardComponent,
      HeaderComponent,
      FooterComponent,
     
    },
    computed: {
      displayItems() {
        return this.isButtonClicked ? this.filterItem : this.cards;
            },
      
      
    },
    methods: {
      clickTag(tag) {
      this.filterCards(tag);
    },
    filterCards(tag) {
      if (tag) {
        this.isButtonClicked = true;
        this.filterItem = this.cards.filter((item) => item.tag === tag);
      } else {
        this.isButtonClicked = false;
        this.filterItem = [];
      }
    },
    },
  }
  </script>
  
  <style lang="scss">

    
.project__details {
  position: relative;
  text-align: center;
  margin-bottom: 100px;
}
.img_banner {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.title {
  position: absolute;
  top: 86%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #060606; /* Цвет, который вы хотите использовать для заголовка */
  text-align: center;
  background-color: white; /* Цвет фона прямоугольника */
  border-radius: 30px 30px 0 0; /* Закругление верхних углов */
  display: inline-block;
  width: 500px;
  height: 96px;
  padding: 20px;
}

/* Стили для h1 и h4, если необходимо */
.title h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.title h4 {
  font-size: 18px;
}
  
    .center {
      padding-left: calc(50% - (1200px / 2));
      padding-right: calc(50% - (1200px / 2));
    }
  
    a {
      text-decoration: none;
    }
    .button__checked {
      border: none;
      padding: 26px 66px;
      color: #292f36;
      text-align: center;
      font-family: Jost;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 125%; /* 22.5px */
      letter-spacing: 0.36px;
      border-radius: 18px;
      background: #ffffff;
      &:hover {
        color: #fff;
        background: #cda274;
      }
    }


  .masonry {
    column-count: 2;
    column-gap: 2px;
   

  
}

.masonry__brick {
  display: inline-block; // важно!
	width: 100%;           // важно!
	margin-bottom: 1em; 
}

.proj__block {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}


.but {
  display: flex;
  justify-content: center
}
.buttons__check {
  display: flex;
  justify-content: center;
  border: 1px solid #CDA274 ;
  width: fit-content;
  border-radius: 30px;
  padding: 10px;
  margin-bottom: 40px;


}


  
  </style>