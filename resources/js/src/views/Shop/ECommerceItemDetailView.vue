<!-- =========================================================================================
  File Name: ECommerceItemDetail.vue
  Description: eCommerce Item Detail page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="item-detail-page">

  <!--  <vs-alert color="danger" title="Error Fetching Product Data" :active.sync="error_occured">
      <span>{{ error_msg }}. </span>
      <span>
        <span>Check </span><router-link :to="{name:'Shop'}" class="text-inherit underline">All Items</router-link>
      </span>
    </vs-alert> -->

    <vx-card v-if="product" :key="product.id">

      <template slot="no-body">

        <div class="item-content">
          

          <!-- Item Main Info -->

          <div  class="product-details p-6" style="border: none"  >
            <div id="capture" class="vx-row mt-6" style="position:relative;height:100%;width:100%" >
                <img style="border: none;max-width:100%;height:auto position:absolute" :src="`/storage/${product.media[0].id}/${product.media[0].file_name}`" :alt="product.name"  v-if="product.media[0]"/>
                <div v-else> No Image to Displays</div>

                <div>
                  <vue-draggable-resizable 
                  v-for="element in elements"
                  :key="element.id"
                  :resizable="true" 
                  :x="Number(element.x_coordinate)" 
                  :y="Number(element.y_coordinate)" 
                  :h="Number(element.height)"
                  :w="Number(element.width)"

                  :draggable="false"                  
                  
                  :style="{  width: Number(element.width) +'%', height: Number(element.height) +'%', left: Number(element.x_coordinate)+'%', top: Number(element.y_coordinate)+'%' }"        
                 >
                    <p v-bind:style="{fontSize:element.font_size+'px',color:element.font_color}" >{{ element.field }}</p>
                  </vue-draggable-resizable>

                </div>

          </div>

          <vs-divider />

          <div class="vx-row mt-6" style="" >
              
              <div class="vx-col md:w-2/5 w-full ">

                    <vs-table class="table">
                      <tbody>
                      
                        <tr v-for="(element, index) in elements ">


                            <!--<vs-td><input type="text" v-model="row.id"></vs-td>-->
                            <vs-td>{{element.field_name}}:</vs-td>

                            <vs-td>
                            <input v-if="element.field_type" 
                            :type="element.field_type" :name="element.field_name" 
                            :placeholder="element.field_name" 
                            v-model="element.field"
                            :key="`field-${label}`" >
                            </vs-td>

                          </tr>
                        </tbody>
                    </vs-table>

                
                   <!-- <img :src="`/storage/${product.media[0].id}/${product.media[0].file_name}`" :alt="product.name" class="responsive" v-if="product.media[0]"/>
                    <div v-else> No Image to Display</div> -->


                  <!--
                    UnComment Below line for true flow
                    <img :src="item_data.image" :alt="item_data.name" class="responsive">

                    Remove above img tag which is for demo purpose in actual flow
                  -->
              </div>

              <!-- Item Content -->
              <div class="vx-col md:w-3/5 w-full">

                <h3>{{ product.name }}</h3>

                <p class="my-2">
                <!--  <span>{{ item_data.brand }}</span>-->
                </p>
                <p class="flex items-center flex-wrap">
                  <span class="text-2xl leading-none font-medium text-primary mr-4 mt-2">${{ product.price }}</span>
                 <!--  <span class="pl-4 mr-2 mt-2 border border-solid d-theme-border-grey-light border-t-0 border-b-0 border-r-0"><star-rating :show-rating="false" :rating="item_data.rating" :star-size="20" read-only /></span>-->
                  <span class="cursor-pointer leading-none mt-2">424 ratings</span>
                </p>

                <vs-divider />

                <p>{{ product.description }}</p>

               <!-- <vs-list class="product-sales-meta-list px-0 pt-4">
                  <vs-list-item
                    v-if="item_data.free_shipping"
                    class="p-0 border-none"
                    title="Free Sheeping"
                    icon-pack="feather"
                    icon="icon-truck" />
                  <vs-list-item class="p-0 border-none" title="EMI options available" icon-pack="feather" icon="icon-dollar-sign"></vs-list-item>
                </vs-list>-->

                <vs-divider />

                <!-- Color -->
               <!-- <div class="vx-row">
                  <div class="vx-col w-full">
                    <span class="text-xl font-medium">Color</span>
                    <div class="flex flex-wrap items-center mt-2">
                      <div
                        :class="{'border-transparent': opt_color != color}"
                        class="color-radio rounded-full mx-1 border-2 border-solid cursor-pointer relative"
                        :style="itemColor({color: color, style: ['borderColor']})"
                        v-for="color in available_item_colors"
                        :key="color"
                        @click="opt_color=color">
                          <div class="h-6 w-6 rounded-full absolute" :style="itemColor({color: color, style: ['backgroundColor']})"></div>
                        </div>
                    </div>
                  </div>
                </div>
                 /Color -->

               <!-- <vs-divider />-->

                <!-- Quantity -->
                <div class="vx-row">

                  <div class="vx-col w-full">
                    <p class="my-2">

                      <span>Available</span>

                      <span class="mx-2">-</span>
                      <span class="text-success">In Stock</span>
                    </p>
                  </div>

                  <div class="vx-col w-full">
                    <div class="flex flex-wrap items-start mb-4">

                     <!-- Add To Cart Button -->
                      <vs-button
                        class="mr-4 mb-4"
                        icon-pack="feather"
                        icon="icon-shopping-cart"
                        v-if="!isInCart(product.id)"
                        @click="toggleItemInCart(product)">
                        ADD TO CART
                      </vs-button>

                      <vs-button
                        v-else
                        class="mr-4 mb-4"
                        icon-pack="feather"
                        icon="icon-shopping-cart"
                        @click="$router.push({name: 'ecommerce-checkout'}).catch(err => {})">
                        VIEW IN CART
                      </vs-button>
                     <!-- Add To Cart Button -->

                    <!-- <vs-button
                        v-else
                        class="mr-4 mb-4"
                        icon-pack="feather"
                        icon="icon-shopping-cart"
                        @click="$router.push({name: 'ecommerce-checkout'}).catch(err => {})">
                        VIEW IN CART
                      </vs-button>
                       /Add To Cart Button -->


                      <!-- Wishlist Button -->
                      <vs-button

                        key="filled"
                        class="mb-4"
                        icon-pack="feather"
                        icon="icon-heart"
                        color="danger"
                        v-on:click="downloadVisualReport()">
                        Save to Desktop
                      </vs-button> 

     

                    </div>
                  </div>
                </div>
                <!-- /Quantity -->

               <!-- <div class="vx-row">
                  <div class="vx-col flex flex-wrap items-center">
                    <vs-button class="mr-4" type="border" icon-pack="feather" color="#1551b1" icon="icon-facebook" radius></vs-button>
                    <vs-button class="mr-4" type="border" icon-pack="feather" color="#00aaff" icon="icon-twitter" radius></vs-button>
                    <vs-button class="mr-4" type="border" icon-pack="feather" color="#c4302b" icon="icon-youtube" radius></vs-button>
                    <vs-button class="mr-4" type="border" icon-pack="feather" color="#405DE6" icon="icon-instagram" radius></vs-button>
                  </div>
                </div>-->

              </div>

            </div>
          </div>


    
        </div>




      </template>
    </vx-card>
  </div>
</template>

<script>
import axios from 'axios'
import jspdf from 'jspdf'
import html2canvas from 'html2canvas'
import html2canvas2 from 'vue-html2canvas'
import VueDraggableResizable from 'vue-draggable-resizable'
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import algoliasearch from 'algoliasearch/lite'
import StarRating from 'vue-star-rating'
import 'instantsearch.css/themes/algolia-min.css';
import { mapGetters } from 'vuex'



export default{
  components: {
    swiper,
    swiperSlide,
    StarRating
  },
  data() {
    return {
    elements:[],
    product: {},
    products: {},
      algolia_index: algoliasearch(
        'latency',
        '6be0576ff61c053d5f9a3225e2a90f76'
      ).initIndex("instant_search"),

      item_data: null,
      error_occured: false,
      error_msg: "",


      // Below is data which is common in any item
      // Algolia's dataSet don't provide this kind of data. So, here's dummy data for demo
      available_item_colors: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
      opt_color: "#7367F0",
      is_hearted: false,


    }
  },
  computed: {
    item_qty() {
      const item = this.$store.getters['eCommerce/getCartItem'](this.product.id)
      return Object.keys(item).length ? item.quantity : 1
    },
    itemColor() {
      return (obj) => {
        let style_obj = {}

        obj.style.forEach(p => { style_obj[p] = obj.color })

        return style_obj
      }
    },
    isInWishList() {
        //return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
    },
    isInCart() {
      return (itemId) => this.$store.getters['eCommerce/isInCart'](itemId)
    },
  },

  mounted() {
    this.element();

  },
  methods: {

    
    element() {
      this.error = this.elements = null;
      axios
        .get(`/api/imageCordianates/${this.$route.params.item_id}`) 
        .then(response => {
            console.log(response);
            this.loading = false;
            this.elements = response.data.data;
        });
    },


      
    getProducts() {
        this.error = this.products = null;
        this.loading = true;
        axios
            .get('/api/products')
            .then(response => {
                console.log(response);
                this.loading = false;
                this.products = response.data;
                    
            });
        },
      getSingleProduct (){
          this.getProducts();
          let uri = `/api/products/${this.$route.params.item_id}`;
          axios
            .get(uri).then((response) => {
                console.log(response)
                
                this.product = response.data.data;
        });
      },

      downloadVisualReport () {



  
          html2canvas((document.querySelector("#capture")), {
            width: 1200,
            height: 1200
          }).then(function(canvas) {
            var image = canvas.toDataURL("image/png").replace("image/png","image/octet-stream00.png");
            console.log(image)
            window.location.href =image;
    });
 
        // html2canvas(document.querySelector("#capture")).then(canvas => {
        // document.body.appendChild(canvas)
        // var image = canvas.toDataURL("image/png").replace("image/png","image/octet-stream00");
        // console.log(image)
        // window.location.href =image;
    //});

      },
    select: function(targetId) {
    targetId = event.currentTarget.id;
     this.selectedItem =  targetId;
    //console.log(this.selectedItem); // returns 'foo'
    //alert("Hello! I am an alert box!!");

    },

    onResize: function (x, y, width, height) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
    },
    onDrag: function (x, y) {
      this.x = x
      this.y = y

    },




    toggleItemInWishList(item) {
      this.$store.dispatch('eCommerce/toggleItemInWishList', item)
    },
    toggleItemInCart(item) {
      this.$store.dispatch('eCommerce/toggleItemInCart', item)
    },
    fetch_item_details(id) {
        
      this.algolia_index.getObject(id, (err, content) => {
        if(err) {
          this.error_occured = true
          this.error_msg = err.message
          console.error(err);
        }else {
          this.item_data = content
        }
      })

    }
  },
  created() {
    this.fetch_item_details(this.$route.params.item_id);
    this.getProducts ();
    this.getSingleProduct();


  }
}
</script>

<style lang="scss">

//@import "@/assets/scss/vuexy/_variables.scss";

#item-detail-page {
  .color-radio {
    height: 2.28rem;
    width: 2.28rem;

    > div {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .item-features {
    background-color: #f7f7f7;

    .theme-dark & {
      //background-color: $theme-dark-secondary-bg;
    }
  }

  .product-sales-meta-list {
    .vs-list--icon {
      padding-left: 0;
    }
  }

  .related-product-swiper {
      // padding-right: 2rem;
      // padding-left: 2rem;

    .swiper-wrapper {
      padding-bottom: 2rem;

      > .swiper-slide {
        background-color: #f7f7f7;
        box-shadow: 0 4px 18px 0 rgba(0,0,0,0.1), 0 5px 12px 0 rgba(0,0,0,0.08) !important;

        .theme-dark & {
         // background-color: $theme-light-dark-bg;
        }
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      transform: scale(.5);
      filter: hue-rotate(40deg);
    }

    .swiper-button-next {
      right: 0
    }

    .swiper-button-prev {
      left: 0;
    }
  }
}
</style>
