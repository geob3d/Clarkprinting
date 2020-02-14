<template>

  <div id="data-list-list-view" class="data-list-container">
    <vx-card title="Multiple Selected" >

   <!--  <data-view-sidebar :isSidebarActive="addNewDataSidebar" @closeSidebar="toggleDataSidebar" :data="sidebarData" /> -->


    <vs-table multiple v-model="selected" @selected="handleSelected" :data="companies">

        <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

      
        <div class="flex flex-wrap-reverse items-center data-list-btn-container">

            <!-- ACTION - DROPDOWN -->
            <vs-dropdown vs-trigger-click class="dd-actions cursor-pointer mr-4 mb-4">

                <div class="p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full">
                <span class="mr-2">Actions</span>
                <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                </div>

                <vs-dropdown-menu>

                <vs-dropdown-item>
                    <span class="flex items-center">
                    <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Delete</span>
                    </span>
                </vs-dropdown-item>

                <vs-dropdown-item>
                    <span class="flex items-center">
                    <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Archive</span>
                    </span>
                </vs-dropdown-item>

                <vs-dropdown-item>
                    <span class="flex items-center">
                    <feather-icon icon="FileIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Print</span>
                    </span>
                </vs-dropdown-item>

                <vs-dropdown-item>
                    <span class="flex items-center">
                    <feather-icon icon="SaveIcon" svgClasses="h-4 w-4" class="mr-2" />
                    <span>Another Action</span>
                    </span>
                </vs-dropdown-item>

                </vs-dropdown-menu>
            </vs-dropdown>

            <!-- ACTION - DROPDOWN -->
             <div class="centerx ">
                <vs-button @click="popupActivo=true" color="primary" type="border" class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary" icon="add"> Add New</vs-button>
                <vs-popup class="holamundo"  title="Add New Company" :active.sync="popupActivo">
                    <company-add />
                </vs-popup>
            </div>

        </div>

            


            <!-- ITEMS PER PAGE -->
            <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
            <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ companies.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : companies.length }} of {{ queriedItems }}</span>
                <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            
            <vs-dropdown-menu>

                <vs-dropdown-item @click="itemsPerPage=4">
                <span>4</span>
                </vs-dropdown-item>
                <vs-dropdown-item @click="itemsPerPage=10">
                <span>10</span>
                </vs-dropdown-item>
                <vs-dropdown-item @click="itemsPerPage=15">
                <span>15</span>
                </vs-dropdown-item>
                <vs-dropdown-item @click="itemsPerPage=20">
                <span>20</span>
                </vs-dropdown-item>
            </vs-dropdown-menu>
            </vs-dropdown>
        </div>
      
        <template slot="thead">
            <vs-th>ID</vs-th>
            <vs-th sort-key="company_code">Company Code</vs-th>
            <vs-th sort-key="name">Name</vs-th>
            <vs-th>Create At</vs-th>
            <vs-th>Updated At</vs-th>
        </template>

        <template slot-scope="{data}">
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">

                <vs-td :data="data[indextr].id">
                    {{data[indextr].id}}
                </vs-td>

                <vs-td :data="data[indextr].company_code">
                    {{data[indextr].company_code}}
                </vs-td>

                <vs-td :data="data[indextr].name">
                    {{data[indextr].name}}
                </vs-td>

                <vs-td :data="data[indextr].created_at">
                    {{data[indextr].created_at}}
                </vs-td>

                <vs-td :data="data[indextr].updated_at">
                    {{data[indextr].updated_at}}
                </vs-td>
                
                <vs-td class="whitespace-no-wrap">



                  <router-link :to="{name: 'EditCompany', params: { id: tr.id }}">
                    <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-primary stroke-current"  />
                  </router-link>

                    <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.prevent="deleteCompanies(tr.id)" />
                 </vs-td>

            </vs-tr>
        </template>
    </vs-table>
    <br>

    </vx-card>

 </div>
</template>

<script>
import axios from 'axios'
import Prism from 'vue-prism-component'
import CompanyAdd from './CompanyAddSideBar'

    
export default {

    components: {
        Prism,
        CompanyAdd,
        
    },


    data() {
        return {
            popupActivo:false,

            selected: [],
            // Companies: [],
            itemsPerPage: 4,
            isMounted: false,
            
            // Data Sidebar
            addNewDataSidebar: false,
            sidebarData: {},
            companies: [],
          
        };
    },

    
    computed: {
      currentPage() {
        if(this.isMounted) {
          return this.$refs.table.currentx
        }
        return 0
      },
      companiesquery() {
        return this.$store.state.dataList.companies
      },
      queriedItems() {
        return this.$refs.table ? this.$refs.table.queriedResults.length : this.companies.length
      }
    },
    
    created() {
       this.getCompanies();
       let uri = `/api/companies/${this.$route.params.id}`;
          axios
            .get(uri)
            .then((response) => {
            this.companies = response.data.data;
         });
    
    },

    methods: {

        getCompanies() {
            this.error = this.companies = null;
            this.loading = true;
            var vm = this;
            axios
                .get('/api/companies')
                .then(response => {
                    console.log(response);
                    this.loading = false;
                    vm.companies = response.data.data; /// the data.data fixed the issue
                    
                });
        },

        handleSelected(tr) {
            this.$vs.notify({
                title: `Selected ${tr.company_code}`,
                text: `Company: ${tr.name}`
            })
        },
       // toggleDataSidebar(val=false) {
         //   this.addNewDataSidebar = val
        //},




        deleteCompanies(id){
          if (confirm(`Are you sure you want to delete Companies ${id}?`)){
          let uri = `/api/company/${id}`;
          axios
          .delete(uri)
          .then(response => {});
          this.getCompanies();
          }


        }


    }, //end//



     
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