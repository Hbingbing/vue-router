import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import helloWorldChild from '@/components/helloWorldChild'
import HelloWorlda from '@/a/HelloWorld'
import helloWorldChilda from '@/a/helloWorldChild'
import HelloWorldb from '@/b/HelloWorld'
import HelloWorldc from '@/c/HelloWorld'
import arouter from '@/router/arouter'
console.log(arouter)
Vue.use(Router)
var a = [{
    path: 'children',
    name: 'helloWorldChild',
    component: helloWorldChilda
}]
console.log(a)
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    }, {
        path: '/a/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorlda,
        children: arouter
    }, , {
        path: '/b/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorldb
    }, , {
        path: '/c/HelloWorld',
        name: 'HelloWorld',
        component: HelloWorldc
    }]
})