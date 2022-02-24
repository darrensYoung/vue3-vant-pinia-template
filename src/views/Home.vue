<template>
    <div>hello vite+vue3</div>
    <div class="box"></div>
    <van-icon name="chat-o" />
    <HelloWorldVue />
</template>
<script setup>
import HelloWorldVue from '../components/HelloWorld.vue';
</script>
<style>
.box {
    width: 25px;
    height: 100px;
    background: red;
}
</style>