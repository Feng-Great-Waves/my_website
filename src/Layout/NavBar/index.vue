<template>
  <el-menu
      class="el-menu"
      mode="horizontal"
      active-text-color="#000000"
      :ellipsis="false"
      router="true"
      background-color="#fff"
      text-color="#000000"
      :tabBarStyle="{ borderBottom: 'unset' }"
  >
    <div class="flex-grow" />
    <el-image style="margin-left: 10px" src="./src/assets/logo.png"/>
    <el-menu-item index="/">Hello~World</el-menu-item>
    <el-menu-item index="/his">分 享</el-menu-item>
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
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
  text-decoration: none;
}
.el-menu{
  border: 0 !important;
  height: 64px;
}
</style>
