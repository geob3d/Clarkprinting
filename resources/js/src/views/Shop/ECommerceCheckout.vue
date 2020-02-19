<!-- =========================================================================================
	File Name: ECommerceCheckout.vue
	Description: eCommerce Checkout page
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div id="ecommerce-checkout-demo">
        <form-wizard
            ref="checkoutWizard"
            color="rgba(var(--vs-primary), 1)"
            :title="null"
            :subtitle="null"
            :hide-buttons="true">

            <!-- tab 1 content -->
            <tab-content title="Cart" icon="feather icon-shopping-cart" class="mb-5">

                <!-- IF CART HAVE ITEMS -->
                <div class="vx-row" v-if="cartItems.length">

                    <!-- LEFT COL -->
                    <div class="vx-col lg:w-2/3 w-full relative">
                        <div class="items-list-view" v-for="(item, index) in cartItems" :key="item.objectID">
                            <item-list-view :item="item" class="mb-base">

                                <!-- SLOT: ITEM META -->
                                <template slot="item-meta">
                                    <h6
                                      class="item-name font-semibold mb-1 cursor-pointer hover:text-primary"
                                      @click="$router.push({name: 'ecommerce-item-detail-view', params: {item_id: item.objectID }}).catch(() => {})">{{ item.name }}</h6>
                                    <p class="text-success text-sm">In Stock</p>

                                    <p class="mt-4 font-bold text-sm">Quantity</p>
                                    <vs-input-number min="1" max="10" :value="item.quantity" @input="updateItemQuantity($event, index)" class="inline-flex" />

                                    <p class="font-medium text-grey mt-4">Delivery by, {{ item.delivery_date }}</p>
                                    <p class="text-success font-medium">{{ item.discount_in_percentage }}% off {{ item.offers_count }} offers Available</p>
                                </template>

                                <!-- SLOT: ACTION BUTTONS -->
                                <template slot="action-buttons">

                                    <!-- PRIMARY BUTTON: REMOVE -->
                                    <div class="item-view-primary-action-btn p-3 rounded-lg flex flex-grow items-center justify-center cursor-pointer mb-3" @click="removeItemFromCart(item)">
                                        <feather-icon icon="XIcon" svgClasses="h-4 w-4" />
                                        <span class="text-sm font-semibold ml-2">REMOVE</span>
                                    </div>

                                    <!-- SECONDARY BUTTON: MOVE-TO/VIEW-IN WISHLIST 
                                    <div class="item-view-secondary-action-btn bg-primary p-3 rounded-lg flex flex-grow items-center justify-center text-white cursor-pointer" @click="wishListButtonClicked(item)">
                                        <feather-icon icon="HeartIcon" :svgClasses="[{'text-white fill-current': isInWishList(item.objectID)}, 'h-4 w-4']" />
                                        <span class="text-sm font-semibold ml-2" v-if="isInWishList(item.objectID)">WISHLIST</span>
                                        <span class="text-sm font-semibold ml-2" v-else>WISHLIST</span>
                                    </div> -->
                                </template>
                            </item-list-view>
                        </div>
                    </div>

                    <!-- RIGHT COL -->
                    <div class="vx-col lg:w-1/3 w-full">
                        <vx-card>
                            <p class="text-grey mb-3">Options</p>
                            <div class="flex justify-between">
                                <span class="font-semibold">Coupons</span>
                                <span class="font-medium text-primary cursor-pointer">Apply</span>
                            </div>

                            <vs-divider />

                            <p class="font-semibold mb-3">Price Details</p>
                            <div class="flex justify-between mb-2">
                                <span class="text-grey">Total MRP</span>
                                <span>$598</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span class="text-grey">Bag Discount</span>
                                <span class="text-success">-25$</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span class="text-grey">Estimated Tax</span>
                                <span>$1.3</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span class="text-grey">EMI Eligibility</span>
                                <a href="#" class="text-primary">Details</a>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span class="text-grey">Delivery Charges</span>
                                <span class="text-success">Free</span>
                            </div>

                            <vs-divider />

                            <div class="flex justify-between font-semibold mb-3">
                                <span>Total</span>
                                <span>$574.3</span>
                            </div>

                            <vs-button class="w-full" @click="$refs.checkoutWizard.nextTab()">PLACE ORDER</vs-button>
                        </vx-card>
                    </div>
                </div>

                <!-- IF NO ITEMS IN CART -->
                <vx-card title="You don't have any items in your cart." v-else>
                    <vs-button @click="$router.push('/apps/eCommerce/shop').catch(() => {})">Browse Shop</vs-button>
                </vx-card>

            </tab-content>





        </form-wizard>
    </div>
</template>

<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
const ItemListView = () => import('./ItemListView.vue')

export default {
    data() {
        return {

            // TAB 2
            fullName: "",
            mobileNum: "",
            pincode: "",
            houseNum: "",
            area: "",
            landmark: "",
            city: "",
            state: "",
            addressType: 1,
            addressTypeOptions: [
                { text: 'Home', value: 1 },
                { text: 'Office', value: 2 },
            ],

            // TAB 3
            paymentMethod: "debit-card",
            cvv: '',
        }
    },
    computed: {
        cartItems() {
            return this.$store.state.eCommerce.cartItems.slice().reverse();
        },
        isInWishList() {
            return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
        },
    },
    methods: {

        // TAB 1
        removeItemFromCart(item) {
            if(confirm('Are you sure that you want to remove the item from the cart? '))
            this.$store.dispatch('eCommerce/toggleItemInCart', item)
        },
        wishListButtonClicked(item) {
            // Toggle in Wish List
            if (this.isInWishList(item.objectID)) this.$router.push('/apps/eCommerce/wish-list').catch(() => {})
            else {
                this.toggleItemInWishList(item)
                this.removeItemFromCart(item)
            }
        },
        toggleItemInWishList(item) {
            this.$store.dispatch('eCommerce/toggleItemInWishList', item)
        },
        updateItemQuantity(event, index) {
            const itemIndex = Math.abs(index + 1 - this.cartItems.length)
            this.$store.dispatch("eCommerce/updateItemQuantity", { quantity: event, index: itemIndex })
        },

        // TAB 2
        submitNewAddressForm() {
            return new Promise(() => {
                this.$validator.validateAll('add-new-address').then(result => {
                    if (result) {
                        // if form have no errors
                        this.$refs.checkoutWizard.nextTab()
                    } else {
                        this.$vs.notify({
                            title: 'Error',
                            text: 'Please enter valid details',
                            color: 'warning',
                            iconPack: 'feather',
                            icon: 'icon-alert-circle'
                        })
                    }
                })
            })
        },

        // TAB 3
        makePayment() {
            return new Promise(() => {
                this.$validator.validateAll('cvv-form').then(result => {
                    if (result) {
                        // if form have no errors
                        this.$vs.notify({
                            title: 'Success',
                            text: 'Payment received successfully',
                            color: 'success',
                            iconPack: 'feather',
                            icon: 'icon-check'
                        })
                    } else {
                        this.$vs.notify({
                            title: 'Error',
                            text: 'Please enter valid details',
                            color: 'warning',
                            iconPack: 'feather',
                            icon: 'icon-alert-circle'
                        })
                    }
                })
            })
        }
    },
    components: {
        ItemListView,
        FormWizard,
        TabContent
    }
}
</script>

<style lang="scss" scoped>
#ecommerce-checkout-demo {
    .item-view-primary-action-btn {
        color: #2c2c2c !important;
        background-color: #f6f6f6;
    }

    .item-name {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;
    }

    .vue-form-wizard {
        padding-bottom: 0;

        ::v-deep .wizard-header {
            padding: 0;
        }

        ::v-deep .wizard-tab-content {
            padding-right: 0;
            padding-left: 0;
            padding-bottom: 0;

            .wizard-tab-container{
              margin-bottom: 0 !important;
            }
        }
    }
}
</style>
