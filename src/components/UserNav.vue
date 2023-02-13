<script>
import { ref } from "vue";
import { NCalendar,NIcon } from "naive-ui";
import { isYesterday, addDays } from "date-fns/esm";
import { CalendarOutline } from "@vicons/ionicons5";
export default {
  setup() {
    return {
      value: ref(addDays(Date.now(), 1).valueOf()),
      isDateDisabled(timestamp) {
        if (isYesterday(timestamp)) {
          return true;
        }
        return false;
      }
    };
  },
  components:{NCalendar,CalendarOutline,NIcon},
  inject: ["obj"],
  data() {
    return {
      userName: "陌生人",
      today: '',
      rilishow:false,
    }
  },
  mounted() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    month = (month > 9) ? month : ("0" + month);
    day = (day < 10) ? ("0" + day) : day;
    this.today = year + "-" + month + "-" + day;
  },
  methods: {
    rili() {
      this.rilishow = !this.rilishow;
    }
  },
}
</script>
<template>
  <div class="box">
    <span @click="rili">
      <n-icon size="15" color="white">
            <CalendarOutline />
          </n-icon> {{ today }}
    </span>
    <div v-show="rilishow" class="riliF"><n-calendar v-model:value="value" #="{ year, month, date }" :is-date-disabled="isDateDisabled"
        @update:value="handleUpdateValue">
        {{ year }}-{{ month }}-{{ date }}
      </n-calendar></div>
    <span class="userInfo icomoon"> Hi,{{ obj.userName }}</span>
  </div>
</template>

<style>
.box {
  display: flex;
  flex-wrap: wrap;
  width: 1240px;
  height: 40px;
  margin: 0px 30px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.box span:first-child {
  cursor: pointer;
}

.riliF {
  position: absolute;
  left: 10px;
  top: 40px;
  z-index: 1;
}
.n-calendar {
  height: 500px;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
}
</style>