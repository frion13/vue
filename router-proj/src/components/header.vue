<template>:
<header>
    <div class="header">
        <div class="header__logo">
            <a href="#"><img src="@/assets/img/logo.jpg" alt=""></a>
        </div>
        <div class="header__menu">
            <nav>
                
    <router-link to="/">Home</router-link> 
    <router-link to="/project">Project</router-link>
    <router-link to="/blog">Blog</router-link>
    <router-link to="/NotFound">Articles</router-link>
  </nav>
        </div>
    </div>
</header>
</template>
  
<script>

export default {
  name: 'HeaderComponent',
}

</script>


