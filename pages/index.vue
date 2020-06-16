<template>
  <div class="container">
    <div>
      <!-- <logo /> -->
      <div class="box">
        <div>测试px2 是否有用</div>
        <div>测试px2 是否有用</div>
        <div>测试px2 是否有用</div>
        <div class="son">
          <van-button>tick</van-button>
          <van-button type="warning">tick</van-button>
        </div>
      </div>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  async asyncData(context) {
    let res = await context.$axios.post('/customer-service/customer/login', {
      password: '888888',
      username: '18925790439'
    })
    console.log(res)
  },
  mounted() {
    // this.getDataList()
  },
  methods: {
    async getDataList() {
      let res = await this.$axios.get('/mobile/queryAllBanner')
      console.log(res)
    }
  }
}
</script>


<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .son {
      width: 375px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      ::v-deep .van-button {
        width: 100px;
        height: 40px;
      }
    }
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
