<template>
  <div class="centerx labelx">

   <form @submit.prevent="companyFormValue">
    <vs-input label="Company Code" placeholder="Company Code" v-model="company.company_code"/>
    <vs-input label="Company Name" placeholder="Company Name" v-model="company.name"/>
  
    <br>
    
    <button type="submit" class="btn btn-primary btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary">{{ buttontext }} Company</button>
   

  </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {

        return {
            loading: false,
            companies: {},
            buttontext : 'Add',
            error: null,
            company: {
                    
                    name: '',
                    company_code: ''
                },
            companyform : {},
            
           
        };
    },
    created() {
       this.getCompanies();
       let uri = `/api/companies/${this.$route.params.id}`;
       axios
        .get(uri).then((response) => {
          this.company = response.data.data;
        });

    },

    watch: {



    },

    mounted(){
      this.buttonvalue()

    },



    methods: {
         getCompanies() {
            this.error = this.companies = null;
            this.loading = true;
            axios
                .get('/api/companies')
                .then(response => {
                    this.loading = false;
                    this.companies = response.data;
                    
                });
        },

        addCompany() {
            this.error = this.companies = null;
            this.loading = true;
            axios
                .post('/api/company',this.company)
                .then(response => {

                    this.getCompanies();
                    
                })
                .then(data => {
                    this.getCompanies();
                })
                
                 .catch(err => console.log(err));

        },

        updateCompany() {
            let uri = `/api/company/${this.$route.params.id}`;
            axios
            .put(uri, this.company)
            .then((response) => {
            this.$router.push({name:'CompanyInfo'});
            });
        },

        companyFormValue: function(){
          if ("id" in this.$route.params) {
            this.buttontext = 'Update';
            this.updateCompany();
          } else {
            this.addCompany();
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


