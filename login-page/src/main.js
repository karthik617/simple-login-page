import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'
import ProfilePage from './components/ProfilePage.vue'
import { createRouter,createWebHistory } from 'vue-router'

const app = createApp(App)

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/sign-in',component:SignIn,alias:'/',name:'sign-in'},
        {path:'/sign-up',component:SignUp,name:'sign-up'},
        {path:'/profile/',component:ProfilePage,name:'profile'}
    ]

})

app.use(router)
app.use(store)

app.mount('#app')
