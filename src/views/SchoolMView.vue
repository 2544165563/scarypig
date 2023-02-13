<template >
    <UserNav></UserNav>
    <div>
        <n-table :bordered="false" :single-line="false">
            <thead>
                <tr>
                    <th>学校名称</th>
                    <th>学校地址</th>
                    <th>学校官网</th>
                    <th>学校电话</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="items in this.schoolInfo2.slice((page - 1) * 10, (page) * 10)" :key="items">
                    <td>{{items.name}}</td>
                    <td>{{items.address}}</td>
                    <td><a :href="items.school_site">{{items.school_site}}</a></td>
                    <td>{{items.phone}}</td>
                </tr>
            </tbody>
        </n-table>
        <n-pagination style="background-color: white;" v-model:page="page"
        :page-count="parseInt(schoolInfo2.length / 10) + 1" />
    </div>
</template>
<script>
import UserNav from "../components/UserNav.vue";
import axios from "axios";
import { NTable,NPagination } from "naive-ui";
export default {
    data() {
        return {
            schoolInfo1: {}, schoolInfo2: [],page: 1,
        }
    },
    components: { UserNav,NTable,NPagination },
    created() {
        axios({
            method: 'GET',
            // url: "data/list.json",
            url: "http://47.92.159.238:9001/static/data/list.json",
        }).then((response) => {
            for (let i in response.data.data) {
                this.schoolInfo1 = response.data.data[i]
                console.log(this.schoolInfo1.id);
                axios({
                    method: 'GET',
                    url: "http://47.92.159.238:9001/static/data/info" + this.schoolInfo1.id + ".json",
                    // url: "data/info" + this.schoolInfo1.id + ".json",
                }).then((response) => {
                    console.log(response.data.data);
                    response.data.data.school_site = response.data.data.school_site.replace(/\\/g, '');
                    this.schoolInfo2.push(response.data.data)
                    // this.schoolInfo2.school_site = this.schoolInfo2.school_site.replace(/\\/g, '');
                });
            }
        });
    },
}
</script>

    
    