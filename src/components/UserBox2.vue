<script>
export default {
  data() {
    return {
      hotSchool: ["香港大学", "山东女子学院", "山东建筑大学", "山东青年政治学院", "厦门大学", "济宁医学院", "南昌大学", "齐鲁工业大学", "聊城大学"],
      schoolUrl: ['https://www.hku.hk/', 'https://www.sdwu.edu.cn/', 'http://www.sdjzu.edu.cn', 'http://www.sdyu.edu.cn/', 'https://www.xmu.edu.cn/', 'http://www.jnmc.edu.cn/', 'http://www.ncu.edu.cn/', 'http://www.qlu.edu.cn/', 'http://www.lcu.edu.cn/'],
      schoolHeats: ["1234.jpg", "2609.jpg", "528.jpg", "2608.jpg", "102.jpg", "1238.jpg", "108.jpg", "547.jpg", "494.jpg"],
      schoolTag: ["综合类", "综合类", "理工类", "综合类", "综合类", "医药类", "综合类", "理工类", "综合类"]
    }
  },
  computed: {
    schoolHeats: function () {
      for (let index = 0; index < this.schoolHeats.length; index++) {
        this.schoolHeats[index] = "https://static-data.gaokao.cn/upload/logo/" + this.schoolHeats[index]
      }
      return this.schoolHeats
    }
  },
}
</script>
<template>
  <div class="hotCurr">
    <div><span style="color: #6777ef;">丨</span> 热门专业</div>
    <ul>
      <li><span>计算机专业</span><a href="https://baike.baidu.com/item/计算机科学与技术/663582"><img
            src="../assets/images/box2_1.png" alt=""></a></li>
      <div class="fourCurr">
        <li><span>金融学专业</span><a href="https://baike.baidu.com/item/金融学/24596941"><img src="../assets/images/box2_2.png"
              alt=""></a></li>
        <li><span>软件专业</span><a href="https://baike.baidu.com/item/软件开发工程师"><img src="../assets/images/box2_3.png"
              alt=""></a></li>
        <li><span>医学类专业</span><a href="https://baike.baidu.com/item/医学类专业"><img src="../assets/images/box2_4.png"
              alt=""></a></li>
        <li><span>师范类专业</span><a href="https://baike.baidu.com/item/师范类专业"><img src="../assets/images/box2_5.png"
              alt=""></a></li>
      </div>
    </ul>
  </div>
  <div class="hotSchool">
    <div><span style="color: #6777ef;">丨</span> 热门高校</div>
    <div>
      <ul class="schoolHeat">
        <li v-for="(item, index) in hotSchool" :key="item"><a :href="schoolUrl[index]"><span><img
                :src="schoolHeats[index]" alt=""></span>
            <div><span>{{ item }}</span><span>{{ schoolTag[index] }}</span></div>
          </a></li>
      </ul>
    </div>
  </div>
</template>
<style>
.hotCurr {
  display: inline-block;
  color: black;
  margin: 20px 10px 10px 30px;
  vertical-align: top;
}

.hotCurr div:first-child,
.hotSchool div:first-child {
  color: black;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0 10px 20px;
  border-bottom: 2px solid #6777ef;
  ;
}

.hotCurr ul {
  margin: 0;
  margin-right: 5px;
  margin-top: 10px;
  padding: 0;
  width: 565px;
  list-style: none;
}


.hotCurr ul li {
  display: inline-block;
  text-align: center;
  background-color: white;
  vertical-align: top;
  margin: 5px;
}

.hotCurr ul li:hover {
  transition: all 0.5s ease;
  transform: translateY(-3px);
  box-shadow: rgb(167, 162, 162) 0px 10px 10px 3px;
}

.hotCurr ul>li:first-child {
  height: 310px;
  width: 150px;
  background-color: white;
}

.hotCurr ul li span:first-child {
  margin-top: 20px;
  font-weight: bold;
  font-size: 15px;
}

.hotCurr ul>li:first-child span {
  margin-top: 80px;
}

.hotCurr ul>li:first-child img {
  width: 100px;
  margin-top: 30px;
}

.fourCurr {
  display: inline-block;
  width: 400px;
}

.fourCurr li {
  width: 190px;
  height: 150px;
}

.fourCurr li img {
  display: block;
  width: 60px;
  margin-top: 20px;
  margin-left: 65px;
}

.hotSchool {
  display: inline-block;
  margin: 20px 0 10px 10px;
}


.hotSchool ul {
  display: inline-block;
  width: 670px;
  height: 220px;
  margin: 0;
  padding: 0;
}

.schoolHeat img {
  width: 50px;
  vertical-align: bottom;
}

.schoolHeat li {
  display: inline-block;
  color: black;
  margin: 5px;
  width: 150px;
  height: 60px;
  padding: 20px 40px 20px 20px;
  background-color: white;
}

.schoolHeat li a {
  color: black;
}

.schoolHeat li div {
  display: inline-block;
  width: 50px;
}

.schoolHeat div span:nth-child(1) {
  font-weight: bold;
  text-align: center;
  width: 130px;
  white-space: nowrap;
}

.schoolHeat div span:nth-child(2) {
  margin-top: 10px;
  text-align: center;
  width: 130px;
  font-size: 10px;
  white-space: nowrap;
}

.schoolHeat li:hover {
  transition: all 0.5s ease;
  transform: translateY(-3px);
  box-shadow: rgb(167, 162, 162) 0px 10px 10px 3px;
}
</style>