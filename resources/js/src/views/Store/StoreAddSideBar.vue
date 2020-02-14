<template>
  <div class="centerx ">

   <form @submit.prevent="storeFormValue">

     <vs-divider>
       Company Information
     </vs-divider>

    <!-- Dropdown for Companies  -->
    <vs-select
      
      class="selectExample"
      label="Company Name"
      v-model="store.company_id_fk"
      >
      <vs-select-item  :key="index" :value="item.id" :text="item.name" v-for="(item,index) in companies" />
    </vs-select>

    <!-- Dropdown for Banners  -->
    <vs-select
      
      class="selectExample"
      label="Banner Name"
      v-model="store.banner_id_fk"
      >
      <vs-select-item  :key="index" :value="item.id" :text="item.name" v-for="(item,index) in banners" />
    </vs-select>

     <vs-divider>
       Store Information
     </vs-divider>
    <!-- Chain Number  -->
    <vs-input label="Customer No." placeholder="Customer No." v-model="store.customer_no"/>

    <!-- Name -->
    <vs-input label="Store Name" placeholder="Store Name" v-model="store.name"/>

    <!-- Corporate Office Flag -->
    <!-- <vs-input label="Cop" placeholder="Store Name" v-model="store.name"/>-->

    <vs-switch v-model="store.corporate_office">
        <span slot ="on"> On </span>
        <span slot ="off"> Off </span>
    
    </vs-switch>
     
     <vs-divider>
       Store Contact Information
     </vs-divider>

     <vs-row>
       <vs-col vs-type="flex"  vs-w=12>

          <!-- Address -->
          <vs-input  v-model="store.address" label="Address" placeholder="Address"/> 

       </vs-col>
     </vs-row>



     <!-- City -->
    <vs-input label="City" placeholder="City" v-model="store.city"/>

     <!-- Zip Code -->
    <vs-input label="Zip Code" placeholder="Zip Code" v-model="store.zip_code"/>

    <!-- Phone -->
    <vs-input label="Phone" placeholder="Phone" v-model="store.phone"/>
  
    <br>
    
    <button type="submit" class="btn btn-primary btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary">{{ buttontext }} Store</button>
   

  </form>
  </div>
</template>

<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect';


export default {

    components: {Multiselect},
    data() {


        return {
            loading: false,
            stores: {},
            buttontext : 'Add',
            error: null,
            store: {
                    
                    company_id_fk: '',
                    banner_id_fk: '',
                    customer_no: '',
                    corporate_office: '',
                    address: '',
                    city: '',
                    state: '',
                    corporate_office: '',
                    zip_code: '',
                    phone: '',

                },
            storeform : {},
            companies:[],
            banners:[],

            corporateSwitch:true,

           
        };
    },
    created() {
       this.getstores();
       let uri = `/api/stores/${this.$route.params.id}`;
       axios
        .get(uri).then((response) => {
          this.store = response.data.data;
        });
        this.companydropdown;
    },

    watch: {
    },

    mounted(){
      this.buttonvalue(),
      this.companydropdown() 
      this.bannerDropdown() 

    },

    methods: {
         getstores() {
            this.error = this.stores = null;
            this.loading = true;
            axios
                .get('/api/stores')
                .then(response => {
                    this.loading = false;
                    this.stores = response.data;
                    
                });
        },

        addstore() {
            this.error = this.stores = null;
            this.loading = true;
            axios
                .post('/api/store',this.store)
                .then(response => {

                    this.getstores();
                    
                })
                .then(data => {
                    this.getstores();
                })
                
                 .catch(err => console.log(err));

        },

        updatestore() {
            let uri = `/api/store/${this.$route.params.id}`;
            axios
            .put(uri, this.store)
            .then((response) => {
            this.$router.push({name:'storeInfo'});
            });
        },

        storeFormValue: function(){
          if ("id" in this.$route.params) {
            console.log(`${this.$route.params.id}`);
            this.updatestore();
            
          } else {
           console.log("myMessage");
            this.addstore();
          };
        },

        //For the Dynamic Button
        buttonvalue () {  
          if ("id" in this.$route.params) {
            this.buttontext = 'Update'
          } else {
            this.buttontext
          };

        },

        //For the Company Dropdown
        companydropdown() {
            this.error = this.companies = null;
            this.loading = true;
            var vm = this;
            axios
                .get('/api/companies')
                .then(response => {
                    //console.log(response);
                    this.loading = false;
                    vm.companies = response.data.data; /// the data.data fixed the issue
                    
              });

        },

        //For the Banner Dropdown
        bannerDropdown() {
            this.error = this.banners = null;
            this.loading = true;
            var vm = this;
            axios
                .get('/api/banners')
                .then(response => {
                    //console.log(response);
                    this.loading = false;
                    vm.banners = response.data.data; /// the data.data fixed the issue
                    
              });

        },



    }
}
</script>




