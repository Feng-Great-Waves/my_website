<template>
  <el-menu
      class="el-menu"
      style="height: 64px"
      mode="horizontal"
      active-text-color="#ffc9c7"
      :ellipsis="false"
      router="true"
      background-color="#e6f3f9"
      :tabBarStyle="{ borderBottom: 'unset' }"
  >
    <div class="flex-grow" />
    <el-image style="margin-left: 10px" src="./src/assets/logo.png"/>
    <el-menu-item index="/">Hello~World</el-menu-item>
    <el-menu-item index="/his">主 页</el-menu-item>
  </el-menu>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {love} from '@/utils/click'
onMounted(
    ()=>love()
)
</script>

<style>
.flex-grow {
  flex-grow: 0.1;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
.el-menu{
  border: 0 !important;
}
</style>
