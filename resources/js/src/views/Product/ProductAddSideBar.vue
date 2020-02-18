<template>

  <div class="centerx labelx">
      <vs-tabs>

        <vs-tab label="Product Information">
          <div class="con-tab-ejemplo">
               <form @submit.prevent="productFormValue">


                <vs-input label="SKU" placeholder="SKU" v-model="product.sku"/>
                <vs-input label="Product Name" placeholder="Product Name" v-model="product.name"/>
                <br>
                <vs-textarea label="Product Description"  v-model="product.description"/>
                <vs-input label="Price" placeholder="Price" v-model="product.price"/>
                <vs-input label="Ordering Company" placeholder="Ordering Company" v-model="product.ordering_company_id_fk"/>  
                <vs-input label="Product Category" placeholder="Product Category" v-model="product.prod_cat_fk"/>

                <br>
                
                  <div class="row">
                      <div class="col-xs-12">
                          <el-upload
                                  drag
                                  class="upload-demo"
                                  action="uploadurl"
                                  :file-list="files"
                                  :show-file-list="false"
                                  :multiple="true"
                                  :http-request="uploadFile"
                                  :loading="fileIsUploading"
                                  style="display: inline-block; margin-right: 10px;">
                                  <i class="el-icon-upload" v-show="!fileIsUploading"></i>
                                  <i class="el-icon-loading" v-show="fileIsUploading" style="font-size: 67px;color: #c0c4cc;margin: 40px 0 16px;line-height: 50px;"></i>
                                  <div class="el-upload__text" v-show="!fileIsUploading">Upload Image Here </div>
                              </el-upload>
                      </div>
                  </div>              
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
            props: ['uploadurl'],
            files: [],
				    fileIsUploading: true,
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
      this.buttonvalue(),
      this.uploadFile(event)

    },


    methods: {
            
         getProducts() {
            this.error = this.products = null;
            this.loading = true;
            axios
                .get('/api/products')
                .then(response => {
                    console.log(this.$route.params.id)
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

        },

         uploadFile(event) {
                this.fileIsUploading = true;
                this.tableIsUploading = true;
				//let uploadurl = 'api/files/upload'
                const data = new FormData();
                data.append('file', event.file);
                axios.post(`/api/files/upload/${this.$route.params.id}`, data)
                        .then((response) => {
                            var responseData = response.data.data;
                            // send event back to parent file was uploaded and return file data
                            this.$emit('upload-success', {
                                'created_at': this.$route.params.id,
                                'created_at': responseData.created_at,
                                'name': responseData.name,
                                'mime_type': responseData.mime_type,
                                'size': responseData.size
                            });
                            this.fileIsUploading = false;
                        })
                        .catch((error) => {
                            this.fileIsUploading = false;
                            this.tableIsUploading = false;

                            this.$notify.error({
                                title: 'Error',
                                message: error.response.data.errors.message,
                            });
                        });
            }
        }
}
</script>



