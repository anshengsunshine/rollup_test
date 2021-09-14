import Hello from './components/Hello.vue'

function install(Vue) {
    Vue.component(Hello.name, Hello)
}

export {install} 
