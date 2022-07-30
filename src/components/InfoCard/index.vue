<template>
  <el-card shadow="never" class="box-card">
    <div slot="header" class="clearfix">
      <span>个人信息</span>
    </div>
    <div>
      <div class="text-center">
        <el-avatar :size="60" :src="circleUrl" />
      </div>
      <ul class="list-group list-group-striped">
        <li class="list-group-item">
          <svg-icon icon-class="user" />用户名称
          <div class="pull-right">{{ 'qq' }}</div>
        </li>
        <li class="list-group-item">
          <svg-icon icon-class="phone" />手机号码
          <div class="pull-right">{{ 'qq' }}</div>
        </li>
        <li class="list-group-item">
          <svg-icon icon-class="email" />用户邮箱
          <div class="pull-right">{{ 'qq' }}</div>
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script setup>
  import {ref} from "vue";
  const circleUrl=ref('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-1.lanrentuku.com%2F2020%2F11%2F5%2Fdef6ed04-6d34-402e-99c8-366266f627dd.png%3FimageView2%2F2%2Fw%2F500&refer=http%3A%2F%2Fi-1.lanrentuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661751470&t=05eca2bb58c86a032ed430a0e8fa7ae6')
</script>

<style scoped>
.box-card{
  width: 280px;
  height: 265px;
  background-color: #fff;
  margin-left: 10px;
  border: 0px !important;
}
.text-center{
  text-align: center !important;
}
.list-group {
  padding-left: 0px;
  list-style: none;
}
</style>
