<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from '@/Layout/NavBar/index';
import InfoCard from '@/components/InfoCard/index';
</script>

<template>
    <div id="#app">
      <nav-bar/>
      <el-row class="main-content">
        <el-col :span="3">
        </el-col>
        <el-col :span="14">
          <router-view/>
        </el-col>
        <el-col :span="5">
          <info-card/>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
      <el-backtop :right="200" :bottom="50" />
      <div class="footer-content">
      Copyright © senTiment(2021-2022） 程序员天堂-热爱编程大自然的搬运工👻
    </div>
    </div>
</template>


<style>
.footer-content{
  margin-top: 100px;
  text-align: center;
  margin-bottom: 50px;
}
</style>
