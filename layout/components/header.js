Vue.component('header-component', {
    template: ` <header>
    <div class="header">
        <div class="header__logo">
            <a href="#"><img src="images/logo.jpg" alt=""></a>
        </div>
        <div class="header__menu">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
    </div>
</header>`
  })
  
  var app = new Vue({
    el: '#header-component'
  })


