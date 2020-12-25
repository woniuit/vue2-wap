<template>
  <div class="bottom-nav">
    <div class="nav-box">
      <router-link :class="[{ active: $route.path.includes('/home') }]" to="/">
        <img
          v-if="!$route.path.includes('/home')"
          src="@/assets/images/common/home_nav_home.png"
          alt=""
        />
        <img
          v-else
          src="@/assets/images/common/home_nav_home_current.png"
          alt=""
        />
        首页
      </router-link>
      <router-link
        :class="[{ active: $route.path.includes('/project') }]"
        to="/project"
      >
        <img
          v-if="!$route.path.includes('/project')"
          src="@/assets/images/common/home_nav_project.png"
          alt=""
        />
        <img
          v-else
          src="@/assets/images/common/home_nav_project_current.png"
          alt=""
        />
        项目</router-link
      >
      <router-link
        :class="[{ active: $route.path.includes('/member') }]"
        to="/member"
      >
        <img
          v-if="!$route.path.includes('/member')"
          src="@/assets/images/common/home_nav_team.png"
          alt=""
        />
        <img
          v-else
          src="@/assets/images/common/home_nav_team_current.png"
          alt=""
        />
        成员</router-link
      >
      <router-link
        :class="[{ active: $route.path.includes('/mine') }]"
        to="/mine"
      >
        <img
          v-if="!$route.path.includes('/mine')"
          src="@/assets/images/common/home_nav_my.png"
          alt=""
        />
        <img
          v-else
          src="@/assets/images/common/home_nav_my_current.png"
          alt=""
        />
        我的</router-link
      >
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    components: {},
    watch: {},
    created() {
      console.log(this.$route);
    },
    mounted() {},
    methods: {},
  };
</script>

<style scoped lang="less">
  .bottom-nav {
    height: 98px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    box-shadow: 0px -1px 0px 0px #dadada;
    background: #ffffff;
    z-index: 9999;
    .nav-box {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 0 70px;
      > a {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #a2a2a2;
        font-size: 22px;
        img{
          width: 48px;
          height: 48px;
        }
        &.active {
          color: @navactive;
        }
      }
    }
  }
</style>
