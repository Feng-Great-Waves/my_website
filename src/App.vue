<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import NavBar from '@/Layout/NavBar/index';
import InfoCard from '@/components/InfoCard/index';
</script>

<template>
    <div id="#app">
      <nav-bar/>
      <el-row>
        <el-col :span="6"><info-card/></el-col>
        <el-col :span="12">
          <router-view/>
        </el-col>
        <el-col :span="6">
          <div class="grid-content ep-bg-purple"/>
        </el-col>
      </el-row>
    </div>
</template>


<style>

</style>
