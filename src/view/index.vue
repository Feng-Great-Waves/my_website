<template>
  <div>
    <el-row class="row-content">
      <el-col v-for="(item,index) in HeaderTags" @click="switchData(item.tags)" :key="index" :span="4"><el-link :underline="false">{{ item.tags }}</el-link></el-col>
      <v-md-editor v-model="text" height="400px"></v-md-editor>
    </el-row>
    <hello-world/>

    <el-upload
        ref="image"
        class="upload-demo"
        list-type="picture-card"
        action="http://localhost:8108/article/share/publishshare"
        :limit="1"
        :auto-upload="false"
    >
  </el-upload>
    <el-button class="ml-3" type="success" @click="submitUpload">
      upload to server
    </el-button>
  </div>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld/index'
import {onMounted, ref,reactive} from "vue";
import {listTagHeader} from "@/api/tags";
const HeaderTags=ref([])
onMounted(async ()=>{
  const {data} = await listTagHeader();
  HeaderTags.value=data;
})
const share=reactive({
  author:'sentiment',
  tags:["1","2"],
  title:'11'
})
const text=ref('')
const switchData=(item)=>{
  console.log(item)
}
const image =ref()
const submitUpload=()=>{
  image.value.submit()
  fetch('http://localhost:8108/article/share/publishshare',{
    method:'post',
    body:"json="+JSON.stringify(share)
  })
}
</script>

<style scoped>
.row-content{
  text-align: center;
  margin-bottom: 30px;
}
</style>




