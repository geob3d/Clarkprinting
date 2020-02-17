/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
              {
                path: '/',
                name: 'home',
                component: () => import('./views/Home.vue')
              },
              {
                path: '/page2',
                name: 'page-2',
                component: () => import('./views/Page2.vue')
              },
              {
                path: '/CompanyInfo',
                name: 'CompanyInfo',
                component: () => import('./views/Company/CompanyIndex.vue'),
              },
              {
                path: '/edit/Company/:id',
                name: 'EditCompany',
                component: () => import('./views/Company/CompanyAddSideBar.vue'),
              },
              {
                path: '/BannerInfo',
                name: 'BannerInfo',
                component: () => import('./views/Banner/BannerIndex.vue'),
              },
              {
                path: '/edit/Banner/:id',
                name: 'EditBanner',
                component: () => import('./views/Banner/BannerAddSideBar.vue'),
              },
              {
                path: '/StoreInfo',
                name: 'StoreInfo',
                component: () => import('./views/Store/StoreIndex.vue'),
              },
              {
                path: '/edit/Store/:id',
                name: 'EditStore',
                component: () => import('./views/Store/StoreAddSideBar.vue'),
              },
              {
                path: '/ProductInfo',
                name: 'ProductInfo',
                component: () => import('./views/Product/ProductIndex.vue'),
              },
              {
                path: '/edit/Product/:id',
                name: 'EditProduct',
                component: () => import('./views/Product/ProductAddSideBar.vue'),
              },
              {
                path: '/ProductAttributeInfo',
                name: 'ProductAttributeInfo',
                component: () => import('./views/ProductAttribute/ProductAttributeIndex.vue'),
              },
              {
                path: '/edit/ProductAttribute/:id',
                name: 'EditProduct',
                component: () => import('./views/ProductAttribute/ProductAttributeAddSideBar.vue'),

              },
              {
                path: '/MainShop',
                name: 'Shop',
                component: () => import('./views/shop/MainEcommerceShop.vue'),
                
              },
              {
                path: '/ProductDetails/:item_id',
                name: 'Shopecommerce-item-detail-view',
                component: () => import('./views/shop/ECommerceItemDetailView.vue'),
                
              },
              {
                path: '/Checkout',
                name: 'ecommerce-checkout',
                component: () => import('./views/shop/ECommerceCheckout.vue'),
                
              },
              {
                path: '/ProductCategoryInfo',
                name: 'ProductCategoryInfo',
                component: () => import('./views/ProductCategories/ProductCatIndex.vue'),
              },
              {
                path: '/edit/ProductCategory/:id',
                name: 'EditProductCategory',
                component: () => import('./views/ProductCategories/ProductCatAddSideBar.vue'),
              },

            ],
        },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
              {
                path: '/pages/login',
                name: 'page-login',
                component: () => import('@/views/pages/Login.vue')
              },
              {
                path: '/pages/error-404',
                name: 'page-error-404',
                component: () => import('@/views/pages/Error404.vue')
              },
              
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
