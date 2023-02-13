<script>
import UserNav from "../components/UserNav.vue"
import SearchTop from "../components/SearchTop.vue";
import SearchNode from "../components/SearchNode.vue";
export default{
  components:{UserNav,SearchTop,SearchNode},
  data() {
    return {
      schoolData:"",
      schoolName:""
    }
  },
  methods: {
        injectCounter(value) {
            this.schoolData = value;
        },
        schoolName1(value){
          this.schoolName = value;
        },
        fun(){
          alert(this.schoolName);
        }
    },
    
}
</script>
<template>
  <UserNav>欢迎来到高校查询~</UserNav>
  <SearchTop @injectCounter="injectCounter" @schoolName1="schoolName1"></SearchTop>
  <SearchNode :schoolData="schoolData" :schoolName="schoolName"></SearchNode>
</template>