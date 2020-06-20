<template>
  <div class="login">
    <div class="bgi_image_box">
      <div class="back_icon_box">
        <i class="back_icon iconfont icon-fanhui"></i>
      </div>
      <div class="bgi_image">
        <img class="son_image" src="~assets/images/login/login_bgi.png" />
      </div>
    </div>

    <div class="user_message">
      <user-message :isShowLogin="true"></user-message>
    </div>

    <div class="divider_box">
      <van-divider
        :style="{ color: '#ffffff', borderColor: '#ffffff', padding: '0 38px' }"
      >Third-party account login</van-divider>
    </div>

    <div class="footer">
      <div class="left_button" @click="handleFaceBook">
        <van-image class="left_icon" :src="facebook"></van-image>
        <div class="text">Facebook</div>
      </div>
      <div class="right_button" @click="handleGoogleAuth">
        <van-image class="right_icon" :src="google"></van-image>
        <div class="text">Google</div>
      </div>
    </div>
  </div>
</template>

<script>
import userMessage from './userMessage'

import facebook from '~/assets/images/login/facebook.png'
import google from '~/assets/images/login/google.png'

export default {
  layout: 'newtam',
  head: {
    script: [
      {
        id: 'facebook-jssdk',
        src: 'https://connect.facebook.net/en_US/sdk.js'
      },
      {
        async: true,
        src: 'https://apis.google.com/js/platform.js'
      }
    ]
  },
  components: {
    userMessage
  },
  data() {
    return {
      facebook: facebook,
      google: google
    }
  },
  mounted() {
    this.codeSubmit()
  },
  methods: {
    async codeSubmit() {
      let result = await this.$axios.$post('/customer/sendPhoneCode', {
        phone: '18925790439'
      })
      console.log(result)
    },
    handleFaceBook() {
      this.$router.push({ name: 'mine-login-bindLogin' })
    },
    handleGoogleAuth() {
      this.$router.push({ name: 'mine-login-bindLogin' })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  min-height: 100vh;
  background: linear-gradient(#e75a60, #e84a51);
  .bgi_image_box {
    .back_icon_box {
      position: relative;
      .back_icon {
        position: absolute;
        top: 6px;
        left: 6px;
        padding: 5px;
        font-size: 21px;
        color: #ffffff;
      }
    }
    .bgi_image {
      display: flex;
      justify-content: center;
      .son_image {
        width: 300px;
        height: 300px;
      }
    }
  }
  .user_message {
    width: 337px;
    height: 264px;
    margin: 0 auto;
    margin-top: -12px;
    border-radius: 5px;
    box-shadow: #cbcdd2 0px 0px 10px;
    background: #ffffff;
    .content_box {
    }
  }

  .footer {
    display: flex;
    justify-content: space-evenly;
    .left_button {
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 20px;
      background: #ffffff;
      .left_icon {
        width: 18px;
        height: 18px;
        margin-right: 3px;
      }
      .text {
        font-size: 13px;
        color: #5383ec;
      }
    }
    .right_button {
      width: 100px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 20px;
      background: #ffffff;
      .right_icon {
        width: 18px;
        height: 18px;
        margin-right: 3px;
      }
      .text {
        font-size: 13px;
        color: #5383ec;
      }
    }
  }
}
</style>