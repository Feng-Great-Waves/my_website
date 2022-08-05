<template>
  <el-menu
      class="el-menu"
      mode="horizontal"
      active-text-color="#409eff"
      :ellipsis="false"
      router="true"
      background-color="#fff"
      text-color="#71777c"
      :tabBarStyle="{ borderBottom: 'unset' }"
  >
    <el-image style="background-color: #ffffff" :src="src"/>
    <div class="flex-grow"></div>
    <el-menu-item style="border-bottom: none;font-size: 18px;" index="/">Hello·World</el-menu-item>
    <el-menu-item style="border-bottom: none;font-size: 18px;" index="/share">分享</el-menu-item>
    <el-menu-item style="border-bottom: none;font-size: 18px;" index="/q&a">问答</el-menu-item>
    <el-menu-item style="border-bottom: none;font-size: 18px;" index="/wms">仓库</el-menu-item>
  </el-menu>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {love} from '@/utils/click'
onMounted(
    ()=>love()
)
const src=ref('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0153c2598042ba0000002129e0ce23.gif&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661852437&t=1267170baaead7031cfd06927b478cc0')
</script>

<style>
.flex-grow {
  flex-grow: 0.1;
}
.el-menu-item:hover {
  background: #ffffff !important;
  color: #409eff !important;
}
.el-submenu__title:hover {
  background: #ffffff !important;
  color: #409eff !important;
}
.el-menu-item.is-active {
  background: #ffffff !important;
  color: #409eff !important;
  border-bottom: none;
}
.el-submenu__title.is-active {
  background: #ffffff !important;
  color: #409eff !important;
}
.el-menu{
  border: 0 !important;
  height: 64px;
}
</style>
