<template>
  <el-card shadow="never" class="box-card">
    <div slot="header" class="clearfix">
      <span>作者信息</span>
    </div>
    <div>
      <div class="text-center">
        <el-avatar :size="60" :src="circleUrl" />
      </div>
      <ul class="list-group list-group-striped">
        <li class="list-group-item">
          <svg-icon icon-class="user" />作者昵称
          <div class="pull-right">{{ 'senTiment' }}</div>
        </li>
        <li class="list-group-item">
          <svg-icon icon-class="phone" />联系方式
          <div class="pull-right">{{ '1271849646' }}</div>
        </li>
        <li class="list-group-item">
          <svg-icon icon-class="email" />作者邮箱
          <div class="pull-right">{{ '1271849646@qq.com' }}</div>
        </li>
      </ul>
    </div>
  </el-card>
  <el-card style="margin-top: 20px" shadow="never" class="box-card">
    <div class="block text-center">
      <el-carousel height="200px">
        <el-carousel-item v-for="(item,index) in image" :key="index">
          <el-image :src="item.value"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-card>
</template>

<script setup>
  import {ref} from "vue";
  const image=ref([
    {
      value:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.php.cn%2Fupload%2Farticle%2F000%2F000%2F194%2Fe0b620e4c488fc2f67b1eaed0922d59a.png&refer=http%3A%2F%2Fimg.php.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662040383&t=6f327e6ca18e37bcbe4031ebb2a18788'
    },
    {
      value:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-4cfd038a127cbe244c07366d32a46534_b.jpg&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662040388&t=293742c2061b8d07c03acfde9b26da27'
    },
    {
      value:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fupload.mobiletrain.org%2F2021%2F0425%2F1619320409314.jpg&refer=http%3A%2F%2Fupload.mobiletrain.org&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662040450&t=3154632cc30892a6fc2681f2b4897bad'
    }
  ])
  const circleUrl=ref('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi-1.lanrentuku.com%2F2020%2F11%2F5%2Fdef6ed04-6d34-402e-99c8-366266f627dd.png%3FimageView2%2F2%2Fw%2F500&refer=http%3A%2F%2Fi-1.lanrentuku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661751470&t=05eca2bb58c86a032ed430a0e8fa7ae6')
</script>

<style scoped>
.box-card{
  width: 280px;
  height: 265px;
  margin-left: 10px;
}
.text-center{
  text-align: center !important;
}
.list-group {
  padding-left: 0px;
  list-style: none;
}
.list-group-item{
  margin-top: 20px;
}
.pull-right{
  float: right;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
