<script>
import UserNav from "../components/UserNav.vue";
import SInformation from "@/components/SInformation.vue";
import UserBox2 from "@/components/UserBox2.vue";
import Swiper from "@/components/Swiper.vue";
import PageHeader from "@/components/PageHeader.vue";
import { NMessageProvider } from "naive-ui";

export default {
  components: { UserNav, SInformation, UserBox2, Swiper, PageHeader,NMessageProvider },

  methods: {
    qiandao() {
      alert("暂未开放")
    }
  },
}
</script>

<template >
  <UserNav></UserNav>
  <!-- <div class="homeTitle">
    <span>首页</span>
    <span @click="qiandao">每日签到</span>
  </div> -->

    <div class="homeBox1">
       <n-message-provider>
        <PageHeader></PageHeader>
      </n-message-provider>
    </div>
    <div class="homeBox2">
      <Swiper></Swiper>
    </div>
    <div class="box3">
      <SInformation></SInformation>
    </div>
    <div class="box2">
      <UserBox2></UserBox2>
    </div>

</template>
<style>
span {
  display: inline-block;
}

.homeTitle {
  margin: 30px 30px 0 30px;
  width: 1240px;
  height: 70px;
  background-color: rgb(255, 255, 255);
  color: #34395e;
}

.homeTitle span {
  display: inline-block;
  height: 70px;
}

.homeTitle span:nth-child(1) {
  height: 70px;
  margin-left: 20px;
  line-height: 70px;
  font-size: 20px;
  font-weight: bold;
}

.homeTitle span:nth-child(2) {
  position: relative;
  left: 1050px;
  height: 30px;
  width: 100px;
  text-align: center;
  line-height: 30px;
  background: #6777ef;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 10px;
}

.homeBox1 {
  margin: 30px 30px 0 30px;
  /* width: 90%; */
  width: 1240px;
  color: #34395e;
  font-weight: bold;
  background-color: #f3f5f8;
}

.homeBox2 {
  margin: 10px 30px 0 30px;
  /* width: 90%; */
  width: 1240px;
  color: #34395e;
  font-weight: bold;
  background-color: #f3f5f8;
}

.box3 {
  margin: 20px 50px 0 10px;
}
</style>
