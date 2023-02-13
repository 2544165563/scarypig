<script>
import { NSpace, NSpin, NIcon } from "naive-ui";
import { CloseCircle, CheckmarkCircle } from "@vicons/ionicons5";
export default {
  components: { NSpace, NSpin, CloseCircle, NIcon, CheckmarkCircle },
  data() {
    return {
      signIn: 1, tishierr: 0, errInfo: "", tureInfo: "",
      manageUser: 0,
      obj: {
        userName: "陌生人"
      },
      zhanghao: "student",
      mima: "123456",
      bgtf: 0,
      regUser: "", regPw: "", reRegpw: "",
    };
  },
  provide() {
    return { obj: this.obj };
  },
  methods: {
    cancel() {
      this.signIn = 0;
    },
    loginFun() {
      this.obj.userName = this.zhanghao;
      if (this.zhanghao == 'admin' && this.mima == '123456') {
        this.signIn = 3;
        this.manageUser = 2;
        function sleep(time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }

        sleep(1000).then(() => {
          this.signIn = 0;
        })
      } else if (this.zhanghao == 'student' && this.mima == '123456') {
        this.signIn = 3;
        this.manageUser = 1;
        function sleep(time) {
          return new Promise((resolve) => setTimeout(resolve, time));
        }

        sleep(1000).then(() => {
          this.signIn = 0;
        })
      }
      else {
        this.tishierr = 1;
        this.errInfo = "账户或密码错误"
      }
    },
    registerFun() {
      this.signIn = 2;
    },
    loginqie() {
      this.signIn = 1;
    },
    zhuce() {
      if (this.regUser != "admin" && this.regUser != "student") {
        if (this.regPw == this.reRegpw) {
          this.signIn = 1;
          this.tishierr = 2;
          this.tureInfo = "注册成功";
        }else{this.errInfo = "两次密码不一致";this.tishierr = 1;}
      } else { this.errInfo = "账户已被注册";this.tishierr = 1;}
    },
  },
}
</script>
<template>
  <div class="loginbg" v-show="signIn != 0">
    <div v-if="this.signIn == 3" class="jiazaiApp">
      <n-space>
        <n-spin size="large" />
      </n-space>
    </div>
    <div class="tishi" v-show="this.tishierr == 1">
      <n-icon size="15" color="red" style="vertical-align: bottom;">
        <CloseCircle />
      </n-icon> {{errInfo}}
    </div>
    <div class="tishi" v-show="this.tishierr == 2">
      <n-icon size="15" color="green" style="vertical-align: bottom;">
        <CheckmarkCircle />
      </n-icon> {{tureInfo}}
    </div>
    <div class="sign" v-show="signIn == 1">
      <div>Login</div>
      <form target="hideIframe3">
        <div class="signInfo">
          <div>
            <span>账号：</span><input type="text" required v-model="zhanghao">
          </div>
          <div>
            <span>密码：</span><input type="password" required v-model="mima">
          </div>
        </div>
        <div class="signSub">
          <button @click="loginFun">登录</button>
          <div>or</div>
          <button @click="registerFun">注册</button>
        </div>
        <div class="cancelButton" @click="cancel">取消</div>
      </form>
    </div>
    <div class="sign" v-show="signIn == 2">
      <div>Register</div>
      <form target="hideIframe3">
        <div class="signInfo">
          <div>
            <span>注册账号：</span><input type="text" required v-model="regUser">
          </div>
          <div>
            <span>注册密码：</span><input type="password" required v-model="regPw">
          </div>
          <div>
            <span>重复密码：</span><input type="password" required v-model="reRegpw">
          </div>
        </div>
        <div class="signSub">
          <button @click="loginqie">登录</button>
          <div>or</div>
          <button @click="zhuce">注册</button>
        </div>
        <div class="cancelButton" @click="cancel">取消</div>
      </form>
    </div>
  </div>
  <iframe id="myIframe3" name="hideIframe3" style="display:none;"></iframe>
  <nav v-if="manageUser == 1">
    <span>
      <div class="name">高考填报项目</div>
      <router-link to="/" class="icomoon"> 首页</router-link>
      <router-link to="/search" class="icomoon"> 高校查询</router-link>
      <router-link to="/recommend" class="icomoon"> 志愿填报</router-link>
      <!-- <router-link to="/compare" class="icomoon"> 关于</router-link> -->
    </span>
  </nav>
  <div class="view" v-if="manageUser == 1">
    <div class="navbar-bg"></div>
    <div class="bgtop1">
      <router-view></router-view>
    </div>
  </div>
  <nav v-if="manageUser == 2">
    <span>
      <div class="name">后台管理</div>
      <router-link to="/" class="icomoon"> 首页</router-link>
      <router-link to="/teacher" class="icomoon"> 咨询师管理</router-link>
      <router-link to="/student" class="icomoon"> 用户管理</router-link>
      <router-link to="/school" class="icomoon"> 高校管理</router-link>
    </span>
  </nav>
  <div class="view" v-if="manageUser == 2">
    <div class="navbar-bg"></div>
    <div class="bgtop1">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.jiazaiApp {
  margin: 300px 0 0 50%;
}

.loginbg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #f4f6f9;
  z-index: 1;
}

.tishi {
  position: absolute;
  top: 195px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  padding: 10px;
  font: normal bold 13px 'Microsoft Yahei';
  text-align: center;
  z-index: 1;
  border-radius: 10px;
}

.sign {
  position: fixed;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  width: 450px;
  padding-bottom: 30px;
  background-color: rgba(255, 255, 255);
  border-top: 2px solid #6777ef;
  border-radius: 10px;
}

.sign>div {
  margin: 20px 0 50px 50px;
  font: normal bold 20px 'Microsoft Yahei';
  color: #6777ef;
}

.sign input {
  width: 300px;
  height: 30px;
  border: 1px solid #e4e6fc;
  border-radius: 5px;
}

.signInfo>div {
  margin: 20px 0 0 50px;
}

.signInfo span {
  font: normal normal 12px 'Microsoft Yahei';
}

.signSub button {
  display: block;
  width: 310px;
  height: 40px;
  margin: 30px 0 30px 70px;
  color: white;
  border: 0px;
  border-radius: 5px;
}

.signSub button:nth-child(1) {
  background-color: #6273ee;
}

.signSub button:nth-child(3) {
  background-color: #0ea8ee;
}

.signSub div {
  margin-left: 215px;
  color: #98a7b5;
}

.cancelButton {
  cursor: default;
  margin-left: 210px;
  font-size: 15px;
  color: #98a7b5;
}


.icomoon {
  font-family: 'icomoon';
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.navbar-bg {
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  /* width: 100%; */
  transition: all 1s ease 0s;
  width: 1300px;
  height: 40px;
  background-color: #7785f1;
  z-index: -1;
}

.name {
  margin: 30px 0px;
  font-weight: bolder;
  text-align: center;
}

.bigBox {
  height: 600px;
  background-color: aliceblue;
}

nav {
  position: fixed;
  height: 693.600px;
  width: 170px;
  background: url("./assets/images/ACat.png") no-repeat scroll 0px 300px;
  background-size: 200px;
}

nav a {
  display: inline-block;
  text-decoration: none;
  padding: 15px 30px;
  font-weight: bold;
  font-size: 15px;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #7785f1;
  border-left: 5px solid #6777ef;
}

.view {
  position: absolute;
  left: 230px;
  width: 1300px;
  color: white;
  background-color: #f3f5f8;
  z-index: -2;
}



.bgtop1>div:not(:first-child) {
  transition: all 1s ease 0s;

}

.bgtop2>div:not(:first-child) {
  transition: all 1s ease 0s;
  transform: translateY(110px);
}

@font-face {
  font-family: 'icomoon';
  src: url('assets/fonts/icomoon.eot?i3frq8');
  src: url('assets/fonts/icomoon.eot?i3frq8#iefix') format('embedded-opentype'),
    url('assets/fonts/icomoon.ttf?i3frq8') format('truetype'),
    url('assets/fonts/icomoon.woff?i3frq8') format('woff'),
    url('assets/fonts/icomoon.svg?i3frq8#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
</style>