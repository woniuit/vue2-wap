<template>
  <div class="home">
    <div class="home_topheader">
      <div class="title">
        <div class="title_lf">
          <img src="@/assets/images/home/home_icon_logo.png" alt="" />
        </div>
        <div class="title_rt">
          <img src="@/assets/images/home/home_icon_search.png" alt="" />
          <img src="@/assets/images/home/hone_icon_share.png" alt="" />
        </div>
      </div>
      <div class="home_search">
        <van-field v-model="home_search" placeholder="请输入" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        home_search:""
      };
    },
    components: {  },
    watch: {},
    created() {
     
    },
    mounted() {},
    methods: {},
  };
</script>

<style scoped lang="less">
  .home {
    background: @commonbg;
    min-height: calc(100vh - 98px);
    width: @width;
    .home_topheader {
      height: 306px;
      width: @width;
      padding-top: 52px;
      box-sizing: border-box;
      background: linear-gradient(0deg, #00bbd3, #00c7b2);
      .title {
        width: @width;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 40px;
        margin-bottom: 64px;
        .title_rt {
          width: 120px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          img {
            width: 36px;
            height: 36px;
          }
        }
      }
      .home_search{
        width: @width;
        padding: 0 55px;
      }
    }
  }
</style>
