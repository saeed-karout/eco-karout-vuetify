    <template>
       <v-app-bar elevation="8" flat data-aos="fade-down"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="3000"
     >

           <v-app-bar-title>
             <v-menu v-if="isMobile" >
                <template v-slot:activator="{ props }">
                  <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
                </template>

                <v-list>
               <v-list-item v-for="link in links" :key="link.name" :to="link.link" >
                  <v-list-item-content>
                         <v-list-item-title > {{ link.name }} <v-icon>{{ link.icon }}</v-icon></v-list-item-title>
                  </v-list-item-content>



          </v-list-item>
        </v-list>
              </v-menu>

               <v-btn @click="toggleTheme">

                   <v-icon icon="mdi-theme-light-dark" variant="text" />
               </v-btn>
               <v-btn to="/signUp" class="hidden-sm-and-down">

                   <v-icon icon="mdi-account" variant="text" />
               </v-btn>
               {{ $t('nameEco.name') }}

           </v-app-bar-title>




           <div class="hero-nav  hidden-sm-and-down">
              <v-btn to="/favorites" icon="mdi-heart"> </v-btn>
               <v-btn to="/" exact>{{ $t('appbar.Home') }}</v-btn>
               <v-btn to="/product">{{ $t('appbar.products') }}</v-btn>
               <v-btn to="/about">{{ $t('appbar.about') }}</v-btn>





           </div>
           <v-btn icon="" to="/cart" class="mx-2">
               <v-badge :content="cart.products.length" color="error" floating>
                   <v-icon size="small">mdi-cart-variant</v-icon>
               </v-badge>
           </v-btn>
           <v-btn icon="mdi-translate" class="mx-2" @click="changeLocale"></v-btn>





       </v-app-bar>


   </template>

   <script setup>
       import { ref, onMounted, onBeforeUnmount } from 'vue';
       import {useCartStore} from '@/store/cart';
       import {useTheme,useLocale} from 'vuetify';
       import i18n from '@/plugins/i18n';
       const theme = useTheme()
       const cart = useCartStore()
       const {current} = useLocale()
       const isMobile = ref(false);



       const links = ref([
  { name: 'Home', link: '/', icon: 'mdi-home', event:'exact'},
  { name: 'About', link: '/about', icon: 'mdi-information' },
  { name: 'Products', link: '/product', icon: 'mdi-package-variant' },
  { name: 'Carts', link: '/cart', icon: 'mdi-cart' },
  { name: 'My favorites', link: '/favorites', icon: 'mdi-heart' },
  { name: 'Login', link: '/login', icon: 'mdi-account' },
]);
       function toggleTheme() {
           theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
       }

       function changeLocale() {
           current.value = current.value === 'ar' ? 'en' : 'ar'
           i18n.global.locale = i18n.global.locale === 'ar' ? 'en' : 'ar'
       }



       // Update isMobile based on window width
function updateIsMobile() {
  isMobile.value = window.innerWidth <= 750;

}

// Attach event listeners
onMounted(() => {
  window.addEventListener('resize', updateIsMobile);
  updateIsMobile();
});

// Remove event listeners when the component is unmounted
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile);
});
   </script>















<!--
<template>

  <v-app-bar :elevation="8" rounded>


    <template >
        <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      </template>
   <v-app-bar-title><v-btn to="/">{{ $t('nameEco.name') }} </v-btn></v-app-bar-title>

   <template v-slot:append>
    <v-btn to="/favorites" icon="mdi-heart"> </v-btn>

    <v-btn icon="" to="/cart" class="mx-2">
               <v-badge :content="cart.products.length" color="error" floating>
                   <v-icon size="small">mdi-cart-variant</v-icon>
               </v-badge>
           </v-btn>



     <v-btn @click="toggleTheme">

        <v-icon icon="mdi-theme-light-dark" variant="text" />

    </v-btn>
    <v-btn icon="mdi-translate" class="mx-2" @click="changeLocale"></v-btn>
   </template>
 </v-app-bar>
</template>

<script setup>
import {useCartStore} from '@/store/cart';
import {useTheme,useLocale} from 'vuetify';
import i18n from '@/plugins/i18n';

const theme = useTheme()
const cart = useCartStore()
const {current} = useLocale()


function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

function changeLocale() {
    current.value = current.value === 'ar' ? 'en' : 'ar'
    i18n.global.locale = i18n.global.locale === 'ar' ? 'en' : 'ar'
}


</script> -->











<!--
<template>
   <v-app-bar elevation="8" flat data-aos="fade-down"
     data-aos-anchor-placement="center-bottom"
     data-aos-duration="3000"
     >
  <v-row >
    <v-col
      cols="12"


    >
      <v-card >

        <v-card-title >




          <v-menu>
            <template v-slot:activator="{ props }">
              <v-app-bar-nav-icon  v-bind="props"></v-app-bar-nav-icon>
            </template>

            <v-list>
              <v-list-item
              v-for="link in links" :key="link.name" :to="link.link"
              >
                <v-list-item-title>  {{ link.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <span class="text-h5">{{ $t('nameEco.name') }}</span>
        </v-card-title>


      </v-card>
    </v-col>
  </v-row>
 </v-app-bar>
</template>

 -->

<!--
 <template>
  <div>

    <v-app-bar elevation="8" flat data-aos="fade-down"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="3000"
    >
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-title>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-app-bar-nav-icon v-bind="props"></v-app-bar-nav-icon>
                </template>

                <v-list>
                  <v-list-item v-for="link in links" :key="link.name" :to="link.link">
                    <v-list-item-title>{{ link.name }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <span class="text-h5">{{ $t('nameEco.name') }}</span>
            </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">

        <template v-slot:>
        <v-btn @click="toggleTheme">

        <v-icon icon="mdi-theme-light-dark" variant="text" />
        </v-btn>
        <v-btn to="/signUp">

        <v-icon icon="mdi-account" variant="text" />
        </v-btn>
        </template>
      </v-col>
      </v-row>
    </v-app-bar>





  </div>
</template>




<script>
  export default {
    data: () => ({
      links: [{
                    name: 'Home',
                    link: '/'
                },
                {
                    name: 'About',
                    link: '/about'
                },
                {
                    name: 'products',
                    link: '/product'
                },
                {
                    name: 'carts',
                    link: '/cart'
                },



            ],
    }),


  }
</script> -->
