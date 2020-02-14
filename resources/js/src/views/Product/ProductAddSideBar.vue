<template>

  <div class="centerx labelx">
      <vs-tabs>

        <vs-tab label="Product Information">
          <div class="con-tab-ejemplo">
               <form @submit.prevent="productFormValue">


                <vs-input label="SKU" placeholder="SKU" v-model="product.sku"/>
                <vs-input label="Product Name" placeholder="Product Name" v-model="product.name"/>
                <vs-input label="Product Description" placeholder="Product Description" v-model="product.description"/>
                <vs-input label="Price" placeholder="Price" v-model="product.price"/>
                <vs-input label="Ordering Company" placeholder="Ordering Company" v-model="product.ordering_company_id_fk"/>
                <vs-input label="Product Category" placeholder="Product Category" v-model="product.prod_cat_fk"/>
                <input id="productImg" type="file" class="form-control" name="productImg" >

                <br>
                
                <button type="submit" class="btn btn-primary btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary">{{ buttontext }} Product</button>
              
               </form>

          </div>
        </vs-tab>

        <vs-tab label="Product Attribute">

          <product-attr />
  
        </vs-tab>

      </vs-tabs>

  </div>
</template>

<script>
import axios from 'axios';
import ProductAttr from './ProductAttributeForm'

export default {

    components: {
        
        ProductAttr,
    },

    data() {

        return {
            loading: false,
            products: {},
            buttontext : 'Add',
            error: null,
            product: {
                    
                    sku: '',
                    name: '',
                    description: '',
                    price: '',
                    ordering_company_id_fk: '',
                    prod_cat_fk: '',
                    prodimage:'',
                },
            productform : {},
            
           
        };
    },
    created() {
       this.getProducts();
       let uri = `/api/products/${this.$route.params.id}`;
       axios
        .get(uri).then((response) => {
        console.log(response)
          this.product = response.data.data;
        });

    },

    watch: {



    },

    mounted(){
      this.buttonvalue()

    },


    methods: {
            
         getProducts() {
            this.error = this.products = null;
            this.loading = true;
            axios
                .get('/api/products')
                .then(response => {
                    this.loading = false;
                    this.products = response.data;
                    
                });
        },

        addProduct() {
            this.error = this.products = null;
            this.loading = true;
            axios
                .post('/api/product',this.product)
                .then(response => {

                    this.getProducts();

                })
                .then(data => {
                    this.getProducts();
                })

                 .catch(err => console.log(err));

        },

        

        updateProduct() {
            let uri = `/api/product/${this.$route.params.id}`;
            axios
            .put(uri, this.product)
            .then((response) => {
            this.$router.push({name:'ProductInfo'});
            });
            
        },

        productFormValue: function(){
          if ("id" in this.$route.params) {
            this.buttontext = 'Update';
            this.updateProduct();
          } else {
            this.addProduct();
          };
        },

         //For the Dynamic Button
        buttonvalue (){
          if ("id" in this.$route.params) {
            this.buttontext = 'Update'
          } else {
            this.buttontext
          };

        }



    }
}
</script>



