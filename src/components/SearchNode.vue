<script>
import NodeSpec from "./SearchNode/NodeSpec.vue";
import NodeCollege from "./SearchNode/NodeCollege.vue";
import NodeNull from "./SearchNode/NodeNull.vue";
import { NSpace, NSpin } from "naive-ui";
export default {
  data() {
    return {
      orshow: 0,
      // schoolData1:this.schoolData
    };
  },
  props: ["schoolData", "schoolName"],
  components: { NodeSpec, NodeCollege, NodeNull, NSpace, NSpin },
  watch: {
    schoolData(newValue) {
      this.orshow = 4;
      function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
      }

      sleep(500).then(() => {
        this.orshow = 1;
      })
      if(!newValue){
        sleep(500).then(() => {
        this.orshow = 0;
      })
      }
    }
  }
}
</script>
<template>
  <!-- <button @click="fun">demo1</button> -->
  <NodeNull v-show="orshow == 0"></NodeNull>
  <NodeCollege :schoolData1="this.schoolData" :schoolName="schoolName" v-show="orshow == 1"></NodeCollege>
  <NodeSpec v-show="orshow == 2"></NodeSpec>
  <div v-show="orshow == 4" class="jiazaisn">
    <n-space>
      <n-spin size="large" />
    </n-space>
  </div>
</template>
<style>
.jiazaisn {
  width: 100px;
  height: 450px;
  margin-top: 100px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>