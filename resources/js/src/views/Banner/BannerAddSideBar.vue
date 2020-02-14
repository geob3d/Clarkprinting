<template>
  <div class="centerx labelx">

   <form @submit.prevent="bannerFormValue">
    <!-- <vs-input label="Company Name" placeholder="Company Name" v-model="banner.company_id"/>  -->

    <!-- Dropdown for Companies  -->
    
    <vs-select
      
      class="selectExample"
      label="Company Name"
      v-model="banner.company_id"
      >
      <vs-select-item  :key="index" :value="item.id" :text="item.name" v-for="(item,index) in companies" />
   
    </vs-select>




    <!-- Chain Number  -->
    <vs-input label="Chain No." placeholder="Chain No." v-model="banner.chain_no"/>
    <!-- Name  -->
    <vs-input label="Banner Name" placeholder="Name" v-model="banner.name"/>

    <br>

    <button type="submit" class="btn btn-primary btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary">{{ buttontext }} Banner</button>

  </form>
  </div>
</template>

<script>
import axios from 'axios';
import Multiselect from 'vue-multiselect';


export default {

    components: {
      Multiselect
    },

    data() {


        return {
            loading: false,
            banners: {},
            buttontext : 'Add',
            error: null,
            banner: {
                    
                    company_id: '',
                    chain_no: '',
                    name: '',

                },
            bannerform : {},
            companies:[],

           
        };
    },
    created() {
       this.getbanners();
       let uri = `/api/banners/${this.$route.params.id}`;
       axios
        .get(uri).then((response) => {
          this.banner = response.data.data;
        });
        this.companydropdown;
    },

    watch: {
    },

    mounted(){
      this.buttonvalue(),
      this.companydropdown() 

    },

    methods: {
         getbanners() {
            this.error = this.banners = null;
            this.loading = true;
            axios
                .get('/api/banners')
                .then(response => {
                    this.loading = false;
                    this.banners = response.data;
                    
                });
        },

        addbanner() {
            this.error = this.banners = null;
            this.loading = true;
            axios
                .post('/api/banner',this.banner)
                .then(response => {

                    this.getbanners();
                    
                })
                .then(data => {
                    this.getbanners();
                })
                
                 .catch(err => console.log(err));

        },

        updatebanner() {
            let uri = `/api/banner/${this.$route.params.id}`;
            axios
            .put(uri, this.banner)
            .then((response) => {
            this.$router.push({name:'bannerInfo'});
            });
        },

        bannerFormValue: function(){
          if ("id" in this.$route.params) {
            console.log(`${this.$route.params.id}`);
            this.updatebanner();
            
          } else {
           console.log("myMessage");
            this.addbanner();
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

    }
}
</script>


