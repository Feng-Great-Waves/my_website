<template>
  <!-- 自定义初始化 / 校验等 -->
  <mi-captcha theme-color="#be6be0"
              init-action="v1/captcha/init"
              @init="initAfter"
              verify-action="v1/captcha/verification"/>
</template>

<script setup>
import {ref} from "vue";
const captcha = ref(null)



const initAfter = (res) => {

}

const reset = () => {
  console.log('reinitialize')
  captcha.value?.reset(false)
}
const logo = ref('http://vue.ruoyi.vip/static/img/logo.4eeb8a8e.png')
</script>

<style scoped>

</style>
