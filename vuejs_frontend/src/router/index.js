import VueRouter from 'vue-router';
import routes from  './routes';
import store from '../store/index';


const router = new VueRouter({
    mode: 'history',
    routes
})

function isAuth() {
    return store.getters['Auth/isAuth']
}
  
  router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authOnly)) {
      
      if (!isAuth()) {
        next({
          path: "/",
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    } else if (to.matched.some(record => record.meta.guestOnly)) {
      
      if (isAuth()) {
        next({
          path: "/dashboard",
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
    } else {
      next(); // make sure to always call next()!
    }
  });

export default router;