<template>
  <div>
  <el-form :inline="true" :rules="rules" :model="shareComments" label-width="120px" class="demo-form-inline">
    <el-form-item label="作者">
      <el-input v-model="shareComments.author" />
    </el-form-item>
    <el-form-item label="邮箱" prop="mail">
      <el-input v-model="shareComments.mail" />
    </el-form-item>
    <el-form-item label="验证码">
      <el-input v-model="shareComments.type" />
    </el-form-item>
    <el-form-item style="text-align: center">
      <el-button type="primary">获取验证码</el-button>
    </el-form-item>
      <v-md-editor v-model="shareComments.comment"  height="400px"></v-md-editor>
    <el-form-item style="text-align: center">
      <el-button type="primary">发布评论</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script setup>
import {ref,reactive} from "vue";

const shareComments=reactive({
  author:'',
  mail:'',
  comment:'',
})
const rules = reactive({
  mail:[
    {
      required: true,
      message: 'Please input email address',
      trigger: 'blur',
    },
    {
      type: 'email',
      message: 'Please input correct email address',
      trigger: ['blur', 'change'],
    },
  ]
})
</script>

<style scoped>

</style>
