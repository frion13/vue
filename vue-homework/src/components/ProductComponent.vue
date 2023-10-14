<template>
    <div>
      <div v-for="(product, index) in products" :key="index" class="product-details">
        <h2>{{ product.name }}</h2>
        <p>{{ formattedPrice(product) }}</p>
        <p>{{ product.available ? 'Available' : 'Out of stock' }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductDetails',
    data() {
      return {
        products: [
          {
            name: 'Product 1',
            price: 99.99, 
            available: true, 
          },
          {
            name: 'Product 2',
            price: 49.99, 
            available: false, 
          },
          {
            name: 'Product 3',
            price: 100, 
            available: true, 
          },
        ],
      };
    },
    computed: {
      formattedPrice() {
        return (product) => {
          return '$' + product.price.toFixed(2);
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .product-details {
    border: 1px solid red;
    display: flex;
    flex-direction: row;
    gap: 20px;
    
  }
  </style>
  