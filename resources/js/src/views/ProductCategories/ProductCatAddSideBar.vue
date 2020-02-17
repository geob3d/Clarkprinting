<template>
  <div class="centerx labelx">

   <form @submit.prevent="productCatFormValue">
    <vs-input label="Company Name" placeholder="Company Name" v-model="prodCategory.name"/>
    <br>
    <vs-textarea label="Company Code"  width="50%" placeholder="Company Code" v-model="prodCategory.description"/>
  
    <br>
    
    <button type="submit" class="btn btn-primary btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary">{{ buttontext }} Product Category</button>
   

  </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {

        return {
            loading: false,
            prodCategories: {},
            buttontext : 'Add',
            error: null,
            prodCategory: {
                    
                    name: '',
                    description: ''
                },
            prodCategoryform : {},
            
           
        };
    },
    created() {
       this.getProdCategories();
       let uri = `/api/product/categories/${this.$route.params.id}`;
       axios
        .get(uri).then((response) => {
          this.prodCategory  = response.data.data;
        });

    },

    watch: {



    },

    mounted(){
      this.buttonvalue()

    },



    methods: {
         getProdCategories() {
            this.error = this.prodCategories = null;
            this.loading = true;
            axios
                .get('/api/product/categories')
                .then(response => {
                    this.loading = false;
                    this.prodCategories = response.data;
                    
                });
        },

        addProdCategory() {
            this.error = this.prodCategories = null;
            this.loading = true;
            axios
                .post('/api/company',this.prodCategory)
                .then(response => {

                    this.getProdCategories();
                    
                })
                .then(data => {
                    this.getProdCategories();
                })
                
                 .catch(err => console.log(err));

        },

        updateProdCategory() {
            let uri = `/api/product/category/${this.$route.params.id}`;
            axios
            .put(uri, this.prodCategory)
            .then((response) => {
            this.$router.push({name:'ProductCategoryInfo'});
            });
        },

        productCatFormValue: function(){
          if ("id" in this.$route.params) {
            this.buttontext = 'Update';
            this.updateProdCategory();
          } else {
            this.addProdCategory();
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


