<template>
  <el-card shadow="never" class="box-card">
    <el-descriptions style="text-align: center" title="关于作者">
      <el-descriptions-item label="作者名称">{{ share.author }}</el-descriptions-item>
      <el-descriptions-item label="发布时间">{{ share.createTime }}</el-descriptions-item>
      <el-descriptions-item label="类型">
        <el-tag v-for="(item,index) in share.tags" :key="index" size="small">{{ item }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="游览量"
      ><el-icon style="margin-left: 5px;margin-top: 4px"><View /></el-icon> {{ share.tourNum }}</el-descriptions-item
      >
    </el-descriptions>
    <div class="share-item"><h4>文章</h4></div>
    <v-md-preview :text="share.details"></v-md-preview>
  </el-card>
  <el-card v-loading="loading" :element-loading-spinner="svg" element-loading-svg-view-box="-10, -10, 50, 50" style="margin-top: 10px" shadow="never" class="box-card">
    <div class="share-item">{{ '评论中心' }}</div>
    <div v-for="(item,index) in comments" :key="index" class="comment-content">
      <el-row>
        <el-col :span="2">
          <el-avatar :size="50" :src="circleUrl" />
        </el-col>
        <el-col style="margin-top: 10px" :span="20">{{ item.comments }}</el-col>
      </el-row>
    </div>
    <el-form :model="shareComments" label-width="120px">
      <com-ment/>
<!--      <el-input v-model="shareComments.comments" type="textarea" placeholder="请输入评论"/>-->
<!--      <el-button style="float: right;width: 200px;margin-top: 20px;margin-bottom: 20px" @click="postComments" type="primary" size="mini">发布</el-button>-->
    </el-form>
  </el-card>

</template>

<script setup>
import '@/assets/css/share.css'
import ComMent from '@/components/ComMent/index'
import {onMounted, ref,reactive} from "vue";
import '@/assets/css/card.css'
import {selectShare} from "@/api/share";
import {addShareComments, listShareComments} from "@/api/shareComments";
import {ElMessage} from "element-plus";
const loading=ref(true)
const share=ref([])
const comments=ref([])
const svg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
const shareComments = reactive({
  shareId:'',
  comments:''
})
const circleUrl=ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
onMounted(async ()=>{
  const {data} =await selectShare(localStorage.getItem("shareId"))
  share.value=data
  await getShareComments()
  loading.value=false
})

const getShareComments=async () => {
  const response = await listShareComments(localStorage.getItem("shareId"))
  comments.value = response.data
}

const postComments= async ()=>{
  shareComments.shareId=localStorage.getItem("shareId")
  const {code}=await addShareComments(shareComments)
  if(code===200){
    ElMessage({
      message: '评论成功',
      type: 'success',
    })
    shareComments.comments=''
    await getShareComments()
  }else {
    ElMessage({
      message: '评论过于频繁',
      type: 'error',
    })
  }
}
</script>

<style scoped>
.comment-content{
  margin: 20px 100px 30px 100px;
}
</style>
