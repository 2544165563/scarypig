<template>
  <div>{{qiesheng}}</div>
     <n-data-table
    :columns="columns"
    :data="data"
    :pagination="pagination"
    :bordered="false"
  />
</template>
<script>
import { h } from "vue";
import { ref } from "vue"
import { NButton, NDataTable } from "naive-ui";


const createColumns = ({
  play
}) => {
  return [
    {
      title: "省份",
      key: "no"
    },
    {
      title: "操作",
      key: "actions",
      render(row) {
        return h(NButton, {
          strong: true,
          tertiary: true,
          size: "small",
          onClick: () => play(row)
        }, { default: () => "选择" });
      }
    }
  ];
};

const data = [{no:"北京"},{no:"天津"},{no:"河北"},{no:"山西"},{no:"内蒙古"},{no:"辽宁"},{no:"吉林"},{no:"黑龙江"},{no:"上海"},{no:"江苏"},{no:"浙江"},{no:"安徽"},{no:"福建"},{no:"江西"},{no:"山东"},{no:"河南"},{no:"湖北"},{no:"湖南"},{no:"广东"},{no:"广西"},{no:"海南"},{no:"重庆"},{no:"四川"},{no:"贵州"},{no:"云南"},{no:"西藏"},{no:"陕西"},{no:"甘肃"},{no:"青海"},{no:"宁夏"},{no:"新疆"}
];

export default({
    components:{NDataTable},
    data() {
      return {
        shengfen:'demo',
      }
    },
  setup(props,context) {
    const qiesheng = ref('山东');
    function play(row){
      qiesheng.value = row.no;
      context.emit('qieShengfen',qiesheng)
    }
    return {
      data,
      columns: createColumns({
        play
      }),
      qiesheng,
      pagination: false
    };

  }
});
</script>