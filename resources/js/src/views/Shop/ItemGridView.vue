<!-- =========================================================================================
	File Name: ItemGridView.vue
	Description: Item Component - Grid VIew
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <!-- <div class="item-grid-view vx-row match-height">
        <div class="vx-col" :class="gridColumnWidth" v-for="item in products" :key="item.id"> -->

            <vx-card class="grid-view-item mb-base overflow-hidden" v-on="$listeners">

                <template slot="no-body">

                    <!-- ITEM IMAGE -->
                    <div class="item-img-container bg-white h-64 flex items-center justify-center mb-4 cursor-pointer" @click="navigate_to_detail_view">
                        <img :src="`/public/storage/${item.media[0].id}/${item.media[0].file_name}`" :alt="item.name" class="grid-view-img p-4" v-if="item.media[0]"/>
                        <div v-else> No Image to Display</div>
                    </div>
                    <div class="item-details px-4">

                         <!-- RATING & PRICE -->
                        <div class="flex justify-between items-center">
                            <div class="text-warning border border-solid border-warning flex py-1 px-2 rounded">
                                <feather-icon icon="StarIcon" svgClasses="h-4 w-4" />
                                <span class="text-sm mr-1">{{ item.prod_cat_fk }}</span> 
                            </div>
                            
                            <h6 class="font-bold">${{ item.price }}</h6>
                        </div>
                    

                        <!-- TITLE & DESCRIPTION -->
                        <div class="my-4">
                           <h6 class="truncate font-semibold mb-1 hover:text-primary cursor-pointer" @click="navigate_to_detail_view">{{ item.name }}</h6>
                           <p class="item-description truncate text-sm">{{ item.description }}</p>
                        </div>
                    </div>

                    <!-- SLOT: ACTION BUTTONS -->
                    <slot name="action-buttons" />
                </template>
            </vx-card>
       <!--  </div>
    </div> -->
</template>

<script>
export default{
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    methods: {
      navigate_to_detail_view() {
        this.$router.push({name: 'Shopecommerce-item-detail-view', params: {item_id: this.item.id }})
          .catch(() => {})
      }
    }
}
</script>

<style lang="scss" scoped>
.grid-view-item {
    .grid-view-img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        transition: .35s;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 4px 25px 0px rgba(0,0,0,.25);

        .grid-view-img{
            opacity: 0.9;
        }
    }
}
</style>
