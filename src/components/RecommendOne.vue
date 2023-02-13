<script>
import axios from "axios"
import { NPagination, NSpace, NSpin } from "naive-ui";
export default {
    components: { NPagination, NSpace, NSpin },
    data() {
        return {
            schoolClass: ["公办", "民办", "独立院校", "中外合作办学", "内地与港澳台地区合作办学"],
            sClass: ["公办", "民办", "独立院校", "中外合作办学", "内地与港澳台地区合作办学"],
            baseClass: ["物理", "化学", "生物", "政治", "地理", "历史"],
            bClass: ["物理", "化学", "生物"], bStr: "",
            addr: "山东", position: 40032, mark: 397,

            tuijian: 0,
            tuijianNode: { "1": [], "2": [] },

            pageNum1: 1, pageNum2: 1, showV: 0,
        }
    },
    mounted() {
        this.getResult();
    },
    methods: {
        getResult() {
            this.$emit('schoolName1', this.node,);
            axios({
                method: 'GET',
                url: 'http://47.92.159.238:9001/recommend/result/',
                // url: 'http://127.0.0.1:8000/recommend/result/',
                params: { addr: this.addr, position: this.position, mark: this.mark, sClass: this.sClass, bClass: this.bClass }
            }).then((response) => {
                this.tuijianNode = eval("(" + response.data + ")");
            })
            this.showV = 1;
            function sleep(time) {
                return new Promise((resolve) => setTimeout(resolve, time));
            }

            sleep(2000).then(() => {
                this.showV = 2;
            })
        },
        fun1: function () {
            const span1 = document.getElementsByClassName("chongji")[0];
            const span2 = document.getElementsByClassName("wentuo")[0];
            span1.style.color = "#6777ef"
            span2.style.color = "black"
            this.tuijian = 0
        },
        fun2: function () {
            const span1 = document.getElementsByClassName("chongji")[0];
            const span2 = document.getElementsByClassName("wentuo")[0];
            span2.style.color = "#6777ef"
            span1.style.color = "black"
            this.tuijian = 1
        },
    },
}
</script>
<template>
    <div class="stuBase">
        <form target="hideIframe2">
            <div class="infoOne">
                省份：<input type="text" v-model="addr">
                *位次：<input type="text" v-model="position" required>
                *分数：<input type="text" v-model="mark" required>
            </div>
            <div class="infoTwo">
                选课：
                <ul>
                    <li v-for="item in baseClass" :key="item"><input v-model="bClass" type="checkbox" name="bc"
                            :value="item" :id="item"><label :for="item">{{ item }}</label>
                    </li>
                </ul>
            </div>
            <div class="infoTwo">
                性质：
                <ul>
                    <li v-for="item, index in schoolClass" :key="item"><input v-model="sClass" type="checkbox"
                            name="attr" :value="item" :id="item"><label :for="item">{{ item }}</label></li>
                </ul>
            </div>
            <div class="recSub">
                <button @click="getResult">提交信息</button>
            </div>
        </form>
        <iframe id="myIframe2" name="hideIframe2" style="display:none;"></iframe>
    </div>
    <div v-if="this.showV == 0" class="show0">
        暂无数据
    </div>
    <div v-if="this.showV == 1" class="jiazai">
        <n-space>
            <n-spin size="large" />
        </n-space>
    </div>
    <div v-if="this.showV == 2" class="recomResult">
        <div class="recomNav"><span @click="fun1" class="chongji" style="color: #6777ef;">可冲击</span><span @click="fun2"
                class="wentuo">较稳妥</span></div>
        <div class="recomNode">
            <div class="rnode1" v-show="tuijian == 0">
                <ul>
                    <li v-for="item in tuijianNode['1'].slice((pageNum1 - 1) * 10, (pageNum1) * 10)" :key="item">
                        <span>
                            冲
                        </span>
                        <span>
                            <h4>{{ item['sname'] }}</h4>
                            <span> {{ item['addr_1'] }} </span><span> {{ item['cclass'] }} </span><span>
                                院校代码：{{ item['sid_2'] }} </span>
                        </span>
                        <span>
                            <h4>{{ item['cname'] }}</h4>
                            <span> 学费：{{ item['ymoney'] }} </span><span> 专业代号：{{ item['cid_2'] }} </span><span>
                                招生人数：{{ item['pnum'] }} </span><div> 科目：{{ item['cneed'] }} </div>
                        </span>
                        <span>
                            <span>{{ item['cnames'] }}</span>
                        </span>
                    </li>
                </ul>
                <n-pagination style="background-color: white;" v-model:page="pageNum1"
                    :page-count="parseInt(tuijianNode['1'].length / 10) + 1" />

            </div>
            <div class="rnode1" v-show="tuijian == 1">
                <ul>
                    <li v-for="item in tuijianNode['2'].slice((pageNum2 - 1) * 10, (pageNum2) * 10)" :key="item">
                        <span style="background-color:#23c6c8">
                            稳
                        </span>
                        <span>
                            <h4>{{ item['sname'] }}</h4>
                            <span> {{ item['addr_1'] }} </span><span> {{ item['cclass'] }} </span><span>
                                院校代码：{{ item['sid_2'] }} </span>
                        </span>
                        <span>
                            <h4>{{ item['cname'] }}</h4>
                            <span> 学费：{{ item['ymoney'] }} </span><span> 专业代号：{{ item['cid_2'] }} </span><span>
                                招生人数：{{ item['pnum'] }} </span><div> 科目：{{ item['cneed'] }} </div>
                        </span>
                        <span>
                            <span>{{ item['cnames'] }}</span>
                        </span>
                    </li>
                </ul>
                <n-pagination style="background-color: white;" v-model:page="pageNum2"
                    :page-count="parseInt(tuijianNode['2'].length / 10) + 1" />
            </div>
        </div>
    </div>
</template>
<style>
.stuBase ul {
    margin: 0;
    padding: 0;
    display: inline-block;
    list-style: none;
}

.stuBase li {
    display: inline-block;
}

.stuBase {
    /* margin: 10px; */
    color: black;
    border: 2px solid #eeeeee;
    background-color: rgba(255, 255, 255);
}


.infoOne {
    margin: 20px;
    white-space: nowrap;
}

.infoOne input {
    margin-right: 50px;
}

.infoTwo {
    display: inline-block;
    margin: 20px;
    width: 80%;
    white-space: nowrap;
}

.infoTwo li {
    margin-right: 30px;
}

.infoTwo li input {
    width: 0;
}

.infoTwo li label {
    padding: 5px;
}

.infoTwo li input:checked~label {
    background-color: #23c5c8;
    color: white;
    border-radius: 10px;
}

.recSub {
    display: inline-block;
}

.recSub button {
    margin: 5px 0 5px 20px;
    background-color: white;
    font-size: 16px;
    width: 100px;
    height: 30px;
    border-width: 1px;
    border-color: #23c6c8;
    border-radius: 5px;
}

.recomResult {
    color: black;
}

.recomNav span {
    display: inline-block;
    padding: 20px;
    margin-left: 20px;
    background-color: #ffffff;
    border: 1px solid #eee;
}

.recomNode {
    margin: 0 10px 10px 10px;
    /* background-color: #ffffff; */
}

.recomNode ul {
    list-style: none;
    margin: 0;
    padding: 0;
    background-color: #ffffff;
}

.rnode1>ul>li {
    border: 1px solid #e8e8e8;
    margin: 5px 0;
}


.rnode1>ul>li>span:first-child {
    background-color: #ff6161;
    display: inline-block;
    color: white;
    width: 50px;
    height: 50px;
    margin: 30px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    vertical-align: top;
}

.rnode1>ul>li>span {
    display: inline-block;
    width: 300px;
    margin-left: 10px;
    vertical-align: top;
}

.rnode1>ul>li>span>span{
    color: gray;
    font-size: 10px;
}

.rnode1>ul>li>span>div {
     color: gray;
    font-size: 10px;
    margin-left: 5px;
}


.rnode1>ul>li>span:last-child>span {
    display: inline-block;
    color: black;
    margin-top: 20%;
    width: 400px;
    transform: translateY(-50%);
    font-size: 10px;
}

.rnode1 h4 {
    margin: 20px 0 0 10px;
    height: 40px;
}

.rnode1 h4~span {
    margin: 0 5px;
}

.jiazai{
    width: 100px;
    height: 400px;
    margin-top: 100px;
    margin-left: 50%;
    transform: translateX(-50%);
}

.show0 {
    text-align: center;
    margin-top: 100px;
    height: 350px;
    color: #808080;
}
</style>