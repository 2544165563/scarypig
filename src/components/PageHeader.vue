<script>
import { NGi, NStatistic, NBreadcrumb, NBreadcrumbItem, NSpace, NButton, NAvatar, NPageHeader, NDropdown, NGrid, NDrawer, NDrawerContent } from "naive-ui";
import { ref } from "vue";
import HouTai from "./houTai.vue";
export default {
  data() {
    return {
      shengfen:'山东',
      shengInfo:{"北京":[44958,599,484],"天津":[56764,892,716],"河北":[297622,1867 ,934 ],"山西":[93503,1497 ,899 ],"内蒙古":[74716,1364 ,805 ],"辽宁":[135352,1246 ,845 ],"吉林":[82199,1241 ,834 ],"黑龙江":[115233,1324 ,894 ],"上海":[44839,607 ,496 ],"江苏":[164578,1337 ,865 ],"浙江":[268996,1326 ,877 ],"安徽":[286062,1877 ,987 ],"福建":[138789,1391 ,870 ],"江西":[258559,1758 ,965 ],"山东":[594771,1650 ,992 ],"河南":[509762,1828 ,1012 ],"湖北":[202382,1400 ,890 ],"湖南":[254970,1667 ,952 ],"广东":[399216,1451 ,930 ],"广西":[226035,1710 ,946 ],"海南":[55945,1154 ,704 ],"重庆":[112556,1515 ,834 ],"四川":[284600,2006 ,1020 ],"贵州":[215043,2075 ,971 ],"云南":[175123,1772 ,966 ],"西藏":[175123,1772 ,966 ],"陕西":[166456,1354 ,883 ],"甘肃":[113402,1659 ,923 ],"青海":[113402,1070  ,693  ],"宁夏":[41899,892,716],"新疆":[41899,1274 ,843 ]}
    }
  },
  components: { NGi, NStatistic, NBreadcrumb, NBreadcrumbItem, NSpace, NButton, NAvatar, NPageHeader, NDropdown, NGrid, NDrawer, NDrawerContent, HouTai },
  methods: {
    qieShengfen(values){
        this.shengfen = values.value;
    }
  },
  setup() {
    const showOuterRef = ref(false);
    return {
      showOuter: showOuterRef,
      doShowOuter() {
        showOuterRef.value = true;
      },
    };
  }

};
</script>
<template>
  <n-page-header subtitle="让你更了解自己">
    <n-grid :cols="5">
      <n-gi>
        <n-statistic label="高校数量" value="3012 所" />
      </n-gi>
      <n-gi>
        <n-statistic label="报考人数" value="1193 万" />
      </n-gi>
      <n-gi>
        <n-statistic label="考生" :value="shengInfo[shengfen][0]" style="display: inline-block;"/> <span style="font-size: 25px;font-weight: normal;">名</span>
      </n-gi>
      <n-gi>
        <n-statistic label="填报院校" :value="shengInfo[shengfen][1]" style="display: inline-block;"/> <span style="font-size: 25px;font-weight: normal;">所</span>
      </n-gi>
      <n-gi>
        <n-statistic label="填报专业" :value="shengInfo[shengfen][2]" style="display: inline-block;"/> <span style="font-size: 25px;font-weight: normal;">个</span>
      </n-gi>
    </n-grid>
    <template #title>
      <a href="#" style="text-decoration: none; color: inherit">Voluntary RP</a>
    </template>
    <template #avatar>
      <n-avatar src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg" />
    </template>
    <template #extra>
      <n-space>
        <n-button @click="doShowOuter">
          {{shengfen}}
        </n-button>
        <n-drawer v-model:show="showOuter" :width="200">
          <n-drawer-content title="省份">
            <HouTai @qieShengfen="qieShengfen"></HouTai>
          </n-drawer-content>
        </n-drawer>


        <n-dropdown :options="options" placement="bottom-start">
          <n-button :bordered="false" style="padding: 0 4px">
            ···
          </n-button>
        </n-dropdown>
      </n-space>
    </template>
    <template #footer>
      截止到 2022 年 8 月 20 日
    </template>
  </n-page-header>
</template>