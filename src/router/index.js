import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import NotFound from '../components/NotFound.vue'
import OwnerList from '../components/owner/OwnerList.vue'
import OwnerDetails from '../components/owner/OwnerDetails.vue'
import OwnerCreate from '../components/owner/OwnerCreate.vue'
import OwnerUpdate from '../components/owner/OwnerUpdate.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/owner/list',
            name: 'OwnerList',
            component: OwnerList
        },
        {
            path: '/owner/create',
            name: 'OwnerCreate',
            component: OwnerCreate
        },
        {
            path: '/owner/update/:id',
            name: 'OwnerUpdate',
            component: OwnerUpdate
        },
        {
            path: 'owner/:id',
            name: 'OwnerDetails',
            component: OwnerDetails
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }

    ]
});