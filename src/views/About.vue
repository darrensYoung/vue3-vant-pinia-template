<template>
    <div>
        Hello about {{ counter.count }}
        <button @click="add">加</button>
        <ws type="primary">222</ws>
    </div>
</template>
<script setup>
// import { onMounted, ref, getCurrentInstance } from 'vue';
// import { login } from '@/api'
import { useCounterStore } from '@/store/counter.js'
import { Toast } from 'vant';
// const internalInstance = getCurrentInstance()
// console.log(internalInstance)
// const http = internalInstance.appContext.config.globalProperties.axios // 挂载全局的axios
const counter = useCounterStore()
let add = () => {
    // counter.increment()
    counter.$patch({ count: counter.count + 1 })
}
Toast("提示内容");

// or using an action instead
// counter.increment()
// onMounted(() => {
//     login().then(res => {
//         console.log(res)
//     })
// })
</script>
