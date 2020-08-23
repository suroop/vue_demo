import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "../views/About";
import Contact from "../views/Contact";
import Help from "../views/Help";
Vue.use(VueRouter);
export default new VueRouter({
  routes:[
    {
      path:'/about',
      component:About,
      /*children:[
        {

        },
        {

        },
      ]*/
    },
    {
      path:'/help',
      component:Help
    },
    {
      path:'/contact',
      component:Contact
    },
    /*{
      path:'./',
      redirect:''
    }*/
  ]
});
