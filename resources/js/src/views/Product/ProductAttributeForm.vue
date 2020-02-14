
<template>
<div >

<vs-table >

<template >

<vs-tr :key="indextr" v-for="(comp, indextr) in companies">

    <template slot="thead">
        <vs-th>ID</vs-th>
          

    </template>
    <vs-td>
        {{comp.name}} : {{comp.id}}
    </vs-td>

          <template class="expand-user" slot="expand">
            <div class="con-expand-users w-full">

              <vs-list :key="indextr" v-for="(item, indextr) in productattrs" >

                <vs-list-item > 
                    <div >
                      <vs-tr v-if="item.ordering_company_id_fk == comp.id">      

                        <vs-td >
                            <span v-if="item.editmode">
                              <vs-input label="Company Name" placeholder="Company Name" v-model="item.ordering_company_id_fk"/>
                            </span>
                            <span v-else>{{ item.ordering_company_id_fk }}</span>
                        </vs-td>

                        <vs-td >
                            <span v-if="item.editmode">
                              <vs-input label="Company Name" placeholder="Company Name" v-model="item.Banner_ID_fk"/>
                            </span>
                            <span v-else>{{ item.Banner_ID_fk }}</span>
                        </vs-td>

                        <vs-td >
                            <span v-if="item.editmode">
                              <vs-input label="Company Name" placeholder="Company Name" v-model="item.Dept_ID_fk"/>
                            </span>
                            <span v-else>{{ item.Dept_ID_fk }}</span>
                        </vs-td>

                        <vs-td >
                          <span v-if="!item.editmode"><button @click="edit(item)">Edit</button></span>
                          <span v-else><button @click="save(item)">Save</button></span>
                        </vs-td>

                      </vs-tr>
                    </div>
                </vs-list-item>

              </vs-list>
            </div>
          </template>

  </vs-tr>

</template>

</vs-table>
{{ productattrs }}
 </div>
</template>

<script>
import axios from 'axios';
import { stringify } from 'querystring';
import 'vue-good-table/dist/vue-good-table.css';
import { VueGoodTable } from 'vue-good-table';
import _ from 'lodash'



export default {

    components: {

      VueGoodTable,
 
      },

    data() {

        return {
            loading: false,
            productattrs: {},
            buttontext : 'Add',
            error: null,
            companies: {},

            singleProdAttr:{

            },
            attrClick: {
                edit: true,
                save:false,
            },
      
        };
    },

    watch: {



    },

    mounted(){
      
      

    },

    computed:{



    },

    methods: {

        getProductAttrs() {
           //let uri = `/api/product/${this.$route.params.id}`;
            this.error = this.productattrs = null;
            let prodId = this.$route.params.id;
            this.loading = true;
            axios
                .get('/api/product/attributes')
                .then(response => {
                   console.log('The id is: ' + this.$route.params.id);
                 //   console.log(uri);
                    //this.loading = false;s
                    this.productattrs = response.data.data;
                    let product = response.data.data
                    this.productattrs = product.filter(product => product.Prod_ID_fk == prodId)

                     console.log(product)

                      
                });
        },

        getSingleProdAttr() {
          let uri = `product/attribute/`;
            axios
            .put(uri, this.singleProdAttr)
            .then((response) => {
              this.singleProdAttr = response.data
          
          });


        },
        
        
        //For the Company Dropdown
        companylist() {
            this.error = this.companies = null;
            this.loading = true;
            axios
                .get('/api/companies')
                .then(response => {
                    
                    this.loading = false;
                    this.companies = response.data.data; /// the data.data fixed the issue
                    console.log(response);
                    
              });

        },

        edit :function(obj){
          this.$set(obj, 'editmode', true);
          //this.$set(obj, this.edit, this.attrClick);
          
        },
      save : function(obj){
        this.$set(obj, 'editmode', false);
        //this.$set(obj,this.save, this.attrClick);
        


      },

        updateProductAttr(id) {

        },

    },

    created() {
      this.getProductAttrs();
      this.getSingleProdAttr();
      this.companylist();
      //this.edit();
      //this.save();

    },



    
}
</script>


<style lang="scss">
#data-list-list-view {
  .vs-con-table {

    /*
      Below media-queries is fix for responsiveness of action buttons
      Note: If you change action buttons or layout of this page, Please remove below style
    */
    @media (max-width: 689px) {
      .vs-table--search {
        margin-left: 0;
        max-width: unset;
        width: 100%;

        .vs-table--search-input {
          width: 100%;
        }
      }
    }

    @media (max-width: 461px) {
      .items-per-page-handler {
        display: none;
      }
    }

    @media (max-width: 341px) {
      .data-list-btn-container {
        width: 100%;

        .dd-actions,
        .btn-add-new {
          width: 100%;
          margin-right: 0 !important;
        }
      }
    }

    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 20px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>

