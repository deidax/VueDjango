const routes = [
    {
        path: '/',
        component: () => import('../views/Login.vue'),
        name: 'login',
        meta:{
            guestOnly:true
        }
    },
    {
        path:'/dashboard',
        component: () => import('../views/Dashboard.vue'),
        name:'dashboard',
        meta:{
          authOnly:true
        }
    },
]




export default routes;