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
        <el-col :span="3"></el-col>
        <el-col :span="14">
          <router-view/>
        </el-col>
        <el-col :span="5">
          <info-card/>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </div>
</template>


<style>

</style>
