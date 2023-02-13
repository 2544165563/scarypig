<script>
import axios from "axios";
import { NSpace, NTable, NGrid, NGi, NNumberAnimation, NIcon, NCard, NPagination, NButton, NButtonGroup } from "naive-ui";
import { Location, TimeSharp, Cafe, MapSharp, LibrarySharp } from "@vicons/ionicons5";
import { ref } from 'vue';
import * as  echarts from 'echarts';
export default {
  data() {
    return {
      schoolData2: "",
      schoolNames: "",
      schoolObj1: {},
      schoolObj2: {},
      schoolLogo: "",
      schoolPai: {},
      page: 1,
      echarts1: [['product', '2020', '2021']],
      echarts11: [['product', '2020', '2021']],
      echarts2: [[], []],
      qieEchart:1,
    }
  },
  watch: {
    schoolName(newValue) {
      this.schoolNames = newValue
      axios({
        method: 'GET',
        // url: "data/list.json",
        url: "http://47.92.159.238:9001/static/data/list.json",
      }).then((response) => {
        for (let i in response.data.data) {
          let schoolName = response.data.data[i].name;
          if (schoolName == this.schoolName) {
            this.schoolObj1 = response.data.data[i]
            axios({
              method: 'GET',
              url: "http://47.92.159.238:9001/static/data/info" + this.schoolObj1.id + ".json",
              // url: "data/info" + this.schoolObj1.id + ".json",
            }).then((response) => {
              this.schoolObj2 = response.data.data;
              this.schoolObj2.school_site = this.schoolObj2.school_site.replace(/\\/g, '');
            });
            axios({
              method: 'GET',
              url: 'http://47.92.159.238:9001/search/paiming/',
              // url: "http://127.0.0.1:8000/search/paiming/",
              params: { sname: this.schoolNames }
            }).then((response) => {
              this.schoolPai = eval("(" + response.data + ")");
            });
            break;
          }
        }
      });
    },
    schoolData1(newValue) {
      this.qieEchart = 1;
      this.echarts1 = [['product', '2020', '2021']];
      this.echarts11 = [['product', '2020', '2021']];
      if (!newValue) { newValue = [] }
      this.schoolData2 = eval(newValue)
      let score1, j, score2, scoreSum;
      let scoreDict = {};
      this.echarts1 = [['product', '2020', '2021']],
        this.echarts2 = [[], []]
      for (let i = 0; i < this.schoolData2.length; i++) {
        j = this.schoolData2[i];
        if (j[2] != 'None' && j[3] != 'None') {
          score1 = parseInt(j[2]);
          score2 = parseInt(j[3]);
          scoreSum = score1 + score2;
          this.echarts2[0].push(score1);
          this.echarts2[1].push(score2);
          scoreDict[scoreSum] = [j[0], score1, score2]
        }
      }

      let res1 = Object.keys(scoreDict).sort(function (a, b) { return b - a });
      for (let key in res1) {
        this.echarts1.push(scoreDict[res1[key]])
        if (this.echarts1.length == 6) { break; }
      }

      let res11 = Object.keys(scoreDict).sort(function (a, b) { return a - b });
      for (let key in res11) {
        this.echarts11.push(scoreDict[res11[key]])
        if (this.echarts11.length == 6) { break; }
      }
      this.drawLine();

      const numberAnimationInstRef = ref(null);
      numberAnimationInstRef.value?.play();
    }
  },
  computed: {
    schoolLogo: function () {
      this.schoolLogo = "https://static-data.gaokao.cn/upload/logo/" + this.schoolObj1.id + ".jpg"
      return this.schoolLogo
    }
  },
  props: ["schoolData1", "schoolName"],
  components: { NSpace, NPagination, NTable, NGrid, NGi, NNumberAnimation, NIcon, Location, TimeSharp, Cafe, MapSharp, NCard, LibrarySharp, NButton, NButtonGroup },
  methods: {
    difen(){
      this.qieEchart = 1;
      const c1 = document.getElementById('myChart1')
      
      let myChart1 = echarts.init(c1)
      myChart1.setOption({
        title: {
          text: '低分专业',

        },
        legend: {},
        tooltip: {},
        dataset: {
          source: this.echarts1
        },
        xAxis: { type: 'category', axisLabel: { interval: 0 }, },
        yAxis: {name:'位次'},
        series: [{ type: 'bar' }, { type: 'bar' },]
      });
      c1.removeAttribute("_echarts_instance_");
    },
    remen(){
      this.qieEchart = 2;
      const c11 = document.getElementById('myChart11')
      
      let myChart11 = echarts.init(c11)
      myChart11.setOption({
        title: {
          text: '热门专业',

        },
        legend: {},
        tooltip: {},
        dataset: {
          source: this.echarts11
        },
        xAxis: { type: 'category', axisLabel: { interval: 0 }, },
        yAxis: {name:'位次'},
        series: [{ type: 'bar' }, { type: 'bar' },]
      });
      c11.removeAttribute("_echarts_instance_");
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const c1 = document.getElementById('myChart1')
      const c11 = document.getElementById('myChart11')
      const c2 = document.getElementById('myChart2')
      
      let myChart1 = echarts.init(c1)
      let myChart2 = echarts.init(c2)

      // 绘制图表
      myChart1.setOption({
        title: {
          text: '低分专业',
        },
        legend: {},
        tooltip: {},
        dataset: {
          source: this.echarts1
        },
        xAxis: { type: 'category', axisLabel: { interval: 0 }, },
        yAxis: {name:'位次'},
        series: [{ type: 'bar' }, { type: 'bar' },]
      });
      c1.removeAttribute("_echarts_instance_");

      myChart2.setOption({
        title: [
          {
            text: '位次信息',
            left: 'left'
          },
        ],
        dataset: [
          {
            source: this.echarts2
          },
          {
            transform: {
              type: 'boxplot',
              config: { itemNameFormatter: '202{value}' }
            }
          },
          {
            fromDatasetIndex: 1,
            fromTransformResult: 1
          }
        ],
        tooltip: {
          trigger: 'item',
          axisPointer: {
            type: 'shadow'
          },

        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '15%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          nameGap: 30,
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            show: true,
          }
        },
        yAxis: {
          type: 'value',
          splitArea: {
            show: true
          },
        },
        series: [
          {
            name: 'boxplot',
            type: 'boxplot',
            datasetIndex: 1
          },
          {
            name: 'outlier',
            type: 'scatter',
            datasetIndex: 2
          }
        ]
      });
      c2.removeAttribute("_echarts_instance_");
    }
  }
}
</script>
<template>
  <div class="viewShow">
    <div class="schoolLogo">
      <img :src="schoolLogo" alt="">
      <div class="schoolInfo">
        <ul>
          <li class="schoolTitle">{{ schoolNames }}</li>
          <li><span>{{ schoolObj1.level }}</span><span>{{ schoolObj1.type }}</span><span>{{ schoolObj1.nature }}</span>
          </li>
          <li><span class="icomoon"></span> 地址：{{ schoolObj1.pro }}{{ schoolObj1.city }}</li>
          <li><span class="icomoon"></span> 官方网址：<a :href="schoolObj2.school_site">{{ schoolObj2.school_site }}</a>
          </li>
          <li><span class="icomoon"></span> 官方电话：{{ schoolObj2.phone }}</li>
        </ul>
      </div>
      <div class="schoolIntro">
        <h3>学校排行</h3>
        <ul>
          <li><span>软科</span>
            <div>
              <n-number-animation ref="numberAnimationInstRef" :from="0" :to="schoolPai.ruanke" />
            </div>
          </li>
          <li><span>校友会</span>
            <div>
              <n-number-animation ref="numberAnimationInstRef" :from="0" :to="schoolPai.xiaoyou" />
            </div>
          </li>
          <li><span>武书连</span>
            <div>
              <n-number-animation ref="numberAnimationInstRef" :from="0" :to="schoolPai.wushu" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="nodebox1">
      <n-grid x-gap="12" :cols="4">
        <n-gi>
          <div class="light-green">
            <div>
              <n-number-animation ref="numberAnimationInstRef" :from="0" :to="schoolObj2.num_doctor" /> <span>个</span>
            </div>
            <div><span>博</span>博士点</div>
          </div>
        </n-gi>
        <n-gi>
          <div class="green">
            <div>
              <n-number-animation ref="numberAnimationInstRef" :from="0" :to="schoolObj2.num_master" /> <span>个</span>
            </div>
            <div><span style="background-color: #007aff;">硕</span>硕士点</div>
          </div>
        </n-gi>
        <n-gi>
          <div class="light-green">
            <div>
              <n-number-animation ref="numberAnimationInstRef" :from="0" :to="schoolObj2.num_subject" /> <span>个</span>
            </div>
            <div><span style="background-color: #ff6602;">重</span>国家重点学科</div>
          </div>
        </n-gi>
        <n-gi>
          <div class="green">
            <div>
              <n-number-animation ref="numberAnimationInstRef" :from="0" :to="schoolObj2.gbh_num" /> <span>个</span>
            </div>
            <div><span style="background-color: #00b68e;">研</span>科研项目</div>
          </div>
        </n-gi>
      </n-grid>
    </div>
    <div class="qieButton">
      <n-space>
        <n-button-group>
          <n-button ghost @click = difen>
            低分
          </n-button>
          <n-button @click = remen>
            热门
          </n-button>
        </n-button-group>
      </n-space>
    </div>
    <div class="echartsBox">
      <div id="myChart1" v-show="qieEchart == 1"></div>
      <div id="myChart11" v-show="qieEchart == 2"></div>
      <div id="myChart2"></div>
    </div>
    <div class="schoolCurr">
      <n-space vertical>
        <n-table striped>
          <thead>
            <tr>
              <th>专业名称</th>
              <th>办学类型</th>
              <th>2020投档最底线</th>
              <th>2021投档最底线</th>
              <th>年收费</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="items in this.schoolData2.slice((page - 1) * 10, (page) * 10)" :key="items">
              <td v-for="item in items" :key="item">{{ item }}</td>
            </tr>
          </tbody>
        </n-table>
      </n-space>
      <n-pagination style="background-color: white;" v-model:page="page"
        :page-count="parseInt(schoolData2.length / 10) + 1" />
    </div>

    <div class="nodeinfo">
      <ul>
        <li>
          <n-icon size="15" color="#ff6200">
            <time-sharp />
          </n-icon>创建时间：{{ schoolObj2.create_date }}年
        </li>
        <li>
          <n-icon size="15" color="#00bd41">
            <map-sharp />
          </n-icon>占地面积（亩）：{{ schoolObj2.area }}
        </li>
        <li>
          <n-icon size="15" color="#060606">
            <cafe />
          </n-icon>隶属于：{{ schoolObj2.belong }}
        </li>
        <li>
          <n-icon size="15" color="#037bff">
            <location />
          </n-icon>学校地址：{{ schoolObj2.address }}
        </li>
      </ul>
      <div class="likeschool">
        <div>
          <n-icon size="15" color="#6777ef">
            <LibrarySharp />
          </n-icon>推荐院校
        </div>
        <ul>
          <li>
            <n-card title="" hoverable header-style="">
              <img style="width:50px;vertical-align: top;" src="https://static-data.gaokao.cn/upload/logo/420.jpg" />
              <div>
                <div>华中师范大学</div>
                普通本科 丨 师范类 丨 公办
              </div>
            </n-card>
          </li>
          <li>
            <n-card title="" hoverable header-style="">
              <img style="width:50px;vertical-align: top;" src="https://static-data.gaokao.cn/upload/logo/63.jpg" />
              <div>
                <div>合肥工业大学</div>
                普通本科 丨 理工类 丨 公办
              </div>
            </n-card>
          </li>
          <li>
            <n-card title="" hoverable header-style="">
              <img style="width:50px;vertical-align: top;" src="https://static-data.gaokao.cn/upload/logo/88.jpg" />
              <div>
                <div>中国民航大学</div>
                普通本科 丨 理工类 丨 公办
              </div>
            </n-card>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
ul {
  list-style: none;
}

a {
  color: white;
  text-decoration: none;
}

.viewShow {
  /* margin: 0px 20px; */
  width: 1300px;
}

.schoolLogo {
  background: url(../../assets/images/SearchBg.png) no-repeat 0 0;
  background-size: 100%;
}

.schoolLogo img {
  vertical-align: top;
  display: inline-block;
  width: 100px;
  height: 100px;
  margin: 5% 0 5% 5%;
  border-radius: 50%;
}

.schoolLogo img:hover {
  transition: all 10s linear;
  transform: rotate(3600deg);
}

.schoolInfo {
  display: inline-block;
  width: 40%;
  vertical-align: top;
}

.schoolInfo li {
  margin: 15px 0px;
}

.schoolInfo li:nth-child(2) span {
  padding: 10px;
  margin-right: 10px;
  border: 1px solid white;
  border-radius: 20px;
}

.schoolTitle {
  font-size: 25px;
}

.schoolIntro {
  width: 45%;
  display: inline-block;
  margin: 35px 0 0 0;
}

.schoolIntro h3 {
  display: inline-block;
  width: 5px;
  vertical-align: top;
}

.schoolIntro ul {
  display: inline;
  white-space: nowrap;
}

.schoolIntro li {
  display: inline-block;
  width: 120px;
  height: 100px;
  margin: 20px 20px 0 0;
  color: white;
  border: 1px solid white;
  border-radius: 15px;
  text-align: center;
}

.schoolIntro li span {
  display: block;
  margin-top: 10px;
}

.schoolIntro li div {
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin-top: 5px;
}


.schoolCurr {
  display: inline-block;
  color: black;
  width: 70%;
  margin: 10px 30px 0 0;
  vertical-align: top;
}

.nodefanye span {
  width: 20px;
  height: 20px;
  padding: 5px 5px;
  text-align: center;
  line-height: 20px;
  background-color: #6777ef;
  color: white;
  border-radius: 5px;
}


.nodebox1 .n-grid {
  margin-top: 50px;
  color: black;
}

.nodebox1 .n-grid>div>div> :first-child {
  text-align: center;
  padding-top: 10px;
  font-size: 35px;
}

.nodebox1 .n-grid>div>div> :first-child>span {
  font-size: 10px;
  color: gray;
}

.nodebox1 .n-grid>div>div> :nth-child(2) {
  text-align: center;
}

.nodebox1 .n-grid>div>div> :nth-child(2)>span {
  color: white;
  padding: 3px 6px;
  border-radius: 5px;
  margin-right: 10px;
  background-color: red;
}

.nodebox1 .n-grid>div {
  height: 108px;
  background-color: white;
  box-shadow: 1px 1px 10px 1px #edededb3;
  border-radius: 5px;
}

.nodeinfo {
  display: inline-block;
  margin: 10px 30px 0 0;
  width: 25%;
  color: black;
}

.nodeinfo ul {
  margin: 0;
  padding: 10px 0;
  background-color: white;
}

.nodeinfo .n-icon {
  margin-right: 10px;
}

.nodeinfo ul li {
  margin: 20px 0 20px 30px;
  font-size: 10px;
}

.likeschool ul li,
.likeschool ul {
  margin: 5px 0;
  padding: 0;
}

.likeschool {
  background-color: white;
}

.likeschool>div {
  margin: 20px 0 0 10px;
  padding: 5px;
}

.n-card {
  margin: 0;
  max-width: 350px;
  max-height: 150px;
}

.n-card__content>div {
  display: inline-block;
  margin-left: 15px;
}

.echartsBox>div {
  display: inline-block;
}

#myChart1 {
  width: 700px;
  height: 400px;
  margin: 50px 0 30px 0px;
  background-color: white;
  padding: 30px 0 0 0;
}

#myChart11 {
  width: 700px;
  height: 400px;
  margin: 50px 0 30px 0px;
  background-color: white;
  padding: 30px 0 0 0;
}

#myChart2 {
  width: 525px;
  height: 400px;
  margin: 50px 0 30px 30px;
  padding: 30px 0 0 10px;
  background-color: white;
}

.qieButton {
  position: absolute;
  z-index: 1;
  left: 44%;
  margin-top: 60px;
}
</style>