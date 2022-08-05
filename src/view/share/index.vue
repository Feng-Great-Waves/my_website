<template>
  <el-card shadow="never" class="box-card">
    <router-link v-for="(item,index) in mock" :key="index" @click="click(item.id)" :to="'/s/'+item.id">
      <div class="share-item">
        <span>{{ item.author }}</span>
        <span>|</span>
        <span>{{ item.createTime }}</span>
        <span>|</span>
        <el-tag v-for="(tag,index) in item.tags" :key="index" type="warning">{{ tag }}</el-tag>
        <el-row class="share-content">
          <el-col :span="3"><img :src="item.cover" class="share-item-cover"></el-col>
          <el-col class="share-content-right" :span="21">
            <div class="share-content-title">{{ item.title }}</div>
            <span>{{ item.abstracts }}</span>
          </el-col>
        </el-row>
      </div>
    </router-link>
    <el-pagination
        style="margin-top: 20px;float: right"
        small
        background
        layout="prev, pager, next"
        :total="title"
        class="mt-4"
    />
  </el-card>
</template>

<script setup>
import '@/assets/css/share.css'
import {reactive, ref} from "vue";
import '@/assets/css/card.css'
import {listShare} from "@/api/share";

const mock=ref({})
const title = ref()
const queryParams = reactive({
  pageNum: 1,
  pageSize: 20,
})
const click=(id)=>{
  localStorage.setItem("shareId",id);
}
listShare(queryParams).then(res=> {
  mock.value=res.rows
  title.value=res.total
})
</script>

<style scoped>

</style>




