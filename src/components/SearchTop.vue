<script>
import axios from "axios"
export default {
    inject:["obj"],
    data() {
        return {
            collegeInfo:["山东大学","123"],
            opt:['学校','专业'],
            optValue:"学校",
            node:"山东大学",
        }
    },
    methods:{
    getData() {
            this.$emit('schoolName1',this.node,);
            axios({
                method: 'GET',
                url: 'http://47.92.159.238:9001/SearchData/'+this.optValue+"/"+this.node+"/",
                // url: 'http://127.0.0.1:8000/SearchData/'+this.optValue+"/"+this.node+"/",
            }).then((response) => {
                this.$emit('injectCounter',response["data"],);
            })
        },
    },
    mounted() {
        this.getData();
    },
}
</script>
<template>
    <div class="search">
        <form target="hideIframe1">
            <select name="s" v-model="optValue">
                <option v-for="item in opt" :key="item" :value="item" selected="selected">{{item}}</option>
            </select>
            <input type="text" required placeholder="山东大学" v-model="node">
            <button @click="getData" class="icomoon"></button>
        </form>
        <iframe id="myIframe1" name="hideIframe1" style="display:none;"></iframe>
    </div>
</template>
<style>
.search {
    margin: 40px 0;
    width: 1300px;
    text-align: center;
}

.search select{
    vertical-align: top;
    outline: 0;
    height: 54px;
    padding-left: 20px;
    border: 1px solid skyblue;
    border-right-color: white;
    border-radius: 30px 0 0 30px;
}
.search input {
    vertical-align: top;
    height: 50px;
    width: 500px;
    padding-left: 30px;
    border: 1px solid skyblue;
    border-right-color: white;
    border-left-color: white;
    outline: 0;
}

.search button {
    background-color: white;
    border-radius: 0px 30px 30px 0px;
    width: 50PX;
    height: 54px;
    padding-right: 20px;
    border: 1px solid skyblue;
    border-left-color: white;
    font-size: 25PX;
}

.search button:active {
    color:#6777ef;
}
</style>