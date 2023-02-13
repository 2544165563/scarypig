<script>
import { FlameOutline } from "@vicons/ionicons5";
import { NIcon } from "naive-ui";
export default {
  components: { FlameOutline,NIcon },
  data() {
    return {
      urls: ['https://gaokao.eol.cn/shan_dong/dongtai/202207/t20220720_2238750.shtml', 'https://gaokao.eol.cn/shan_dong/dongtai/202207/t20220720_2238750.shtml', 'https://gaokao.eol.cn/shan_dong/dongtai/202207/t20220720_2238745.shtml', 'https://gaokao.eol.cn/shan_dong/dongtai/202207/t20220706_2236316.shtml?proId=37', 'https://gaokao.eol.cn/shan_dong/dongtai/202206/t20220629_2234835.shtml', 'https://gaokao.eol.cn/shan_dong/dongtai/202206/t20220628_2234632.shtml'],
      urlNames: ['山东：2022年普通类常规批第一次志愿投档情况表', '山东：2022年体育类常规批第一次志愿投档情况表', '山东：2022年艺术类本科批统考第一次志愿投档情况表', '山东：2022年高考各批次录取时间安排', '山东：2022年提前批第1次志愿填报有关注意事项', '山东：2022夏季高普通类志愿填报问答']
    }
  },
}
</script>
<template>
  <div class="rubb">
    <div class="rubbTitle">
      <n-icon size="20" color="red" style="vertical-align: top;">
        <FlameOutline />
      </n-icon> 高考资讯
    </div>
    <ul class="lb">
      <li v-for="(item, index) in urls" :key="index"><a :href="item">{{ urlNames[index] }}</a></li>
    </ul>
  </div>

</template>
<style>
.rubb {
  display: inline-block;
  width: 100%;
  margin-left: 20px;
  vertical-align: top;
  background-color: #f3f5f8;
}

.rubbTitle {
  color: black;
  font-weight: bold;
  background-color: #f3f5f8;
  margin-left: 30px;
}

.lb {
  display: inline-block;
  margin: 0 10px 0 50px;
  padding: 0;
  list-style: none;
}

.lb li {
  display: inline-block;
  width: 30%;
  margin: 5px 5px;
  padding: 0;
}

.lb a {
  display: inline-block;
  color: rgb(0, 0, 0);
  width: 100%;
  padding: 5px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
}

.lb a:hover {
  background-color: #6777ef;
  transition: all 0.5s ease;
}
</style>