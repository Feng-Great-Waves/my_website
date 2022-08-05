<template>
  <div>
    <el-row class="row-content">
      <el-col v-for="(item,index) in HeaderTags" @click="switchData(item.tags)" :key="index" :span="4"><el-link :underline="false">{{ item.tags }}</el-link></el-col>
    </el-row>
    <hello-world/>
  </div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld/index'
import {onMounted, ref} from "vue";
import {listTagHeader} from "@/api/tags";
const HeaderTags=ref([])
onMounted(async ()=>{
  const {data} = await listTagHeader();
  HeaderTags.value=data;
})
const switchData=(item)=>{
  console.log(item)
}
</script>

<style scoped>
.row-content{
  text-align: center;
  margin-bottom: 30px;
}
</style>




