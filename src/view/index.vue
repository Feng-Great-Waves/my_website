<template>
  <div>
    <el-row class="row-content">
      <el-col v-for="(item,index) in HeaderTags" @click="switchData(item.tags)" :key="index" :span="4"><el-link :underline="false">{{ item.tags }}</el-link></el-col>
      <v-md-editor v-model="text" height="400px"></v-md-editor>
    </el-row>
    <hello-world/>
  </div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld/index'
import CaptCha from '@/components/CaptCha/index'
import {onMounted, ref,reactive} from "vue";
import {listTagHeader} from "@/api/tags";
const HeaderTags=ref([])
onMounted(async ()=>{
  const {data} = await listTagHeader();
  HeaderTags.value=data;
})
const text=ref('')
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




