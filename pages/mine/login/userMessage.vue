<template>
  <div class="user_message">
    <div class="user_phone">
      <div class="area_code">
        <div class="son_code" @click="onShowAreaCode">
          <div class="son_code_left">+{{countryNum}}</div>
          <div class="son_code_right">
            <i class="iconfont icon-xiala"></i>
            <i class="small_color"></i>
          </div>
        </div>
      </div>
      <van-field
        class="phone_input iconfont"
        type="tel"
        maxlength="11"
        icon-prefix="icon"
        v-model="phone"
        :right-icon="phoneChange"
        :placeholder="placeholdermessage"
      />
    </div>
    <div class="phone_error_message" v-if="!isShowAreaCode">
      <div class="content">Please enter the correct phone number</div>
    </div>

    <div class="user_code" v-if="!isShowAreaCode">
      <van-field
        class="code_input iconfont"
        type="number"
        maxlength="6"
        icon-prefix="icon"
        placeholder="Verification Code"
        :right-icon="phoneChange"
      />
      <van-button class="code_button" plain hairline color="#e84a52">SEND</van-button>
    </div>
    <div class="code_error_message" v-if="!isShowAreaCode">
      <div class="content">Please enter correct verify code</div>
    </div>

    <div class="footer" v-if="!isShowAreaCode">
      <van-button
        v-if="isShowLogin"
        :class="[countryNum ? 'yes_button' :'no_button']"
        @click="onLogin"
      >Login</van-button>
      <van-button
        v-if="isShowConfirm"
        :class="[countryNum ? 'yes_button' :'no_button']"
        @click="onConfirm"
      >Confirm</van-button>
    </div>

    <div class="select_area_code" v-if="isShowAreaCode">
      <select-area-code @emitAreaCode="changeAreaCode"></select-area-code>
    </div>
  </div>
</template>

<script>
import selectAreaCode from './selectAreaCode'
export default {
  components: {
    selectAreaCode
  },
  props: {
    isShowLogin: {
      type: Boolean,
      default: false
    },
    isShowConfirm: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      phone: '',
      password: '',
      countryNum: '60',

      isShowAreaCode: false
    }
  },
  computed: {
    placeholdermessage() {
      if (this.countryNum == '60') {
        return 'e.g. 010 999 9999'
      } else if (this.countryNum == '86') {
        return 'Phone Number'
      }
    },
    phoneChange() {
      // 记得换成 手机号对错
      if (this.countryNum == '60') {
        return 'zhengque'
      } else {
        return 'jinggao'
      }
    }
  },
  methods: {
    onShowAreaCode() {
      this.isShowAreaCode = true
    },
    changeAreaCode(AreaValue) {
      this.countryNum = AreaValue.value
      this.isShowAreaCode = false
    },
    async onLogin() {
      this.$axios
        .$post('/customer/login', {
          username: '18925790439',
          password: '888888'
        })
        .then(res => {
          console.log(res)
          this.$cookies.set('token', res.token)
        })
      this.$router.replace({ name: 'home' })
    },
    onConfirm() {
      this.$router.replace({ name: 'home' })
    }
  }
}
</script>

<style lang="scss" scoped>
.user_message {
  padding: 30px 37px;
  .user_phone {
    display: flex;
    align-items: center;
    // height: 30px;
    // border-bottom: 1px solid #9a9a9a;
    &:after {
      content: '';
      width: 70%;
      height: 1px;
      margin-top: 12px;
      position: absolute;
      box-sizing: border-box;
      pointer-events: none;
      background-color: #9a9a9a;
    }
    .area_code {
      .son_code {
        display: flex;
        align-items: center;
        .son_code_left {
          font-size: 19px;
          margin-right: 3px;
        }
        .son_code_right {
          display: flex;
          align-items: center;
          position: relative;
          .icon-xiala {
            font-size: 13px;
            margin-right: 5px;
          }
          .small_color {
            content: '';
            width: 2px;
            height: 16px;
            position: absolute;
            right: 0;
            background: #9a9a9a;
          }
        }
      }
    }
    .phone_input {
      margin: 0;
      padding: 0;
      padding-left: 10px;
      // font-size: 19px;
      ::v-deep .van-cell__value {
        .van-field__body {
          .van-field__right-icon {
            .icon-jinggao {
              font-size: 20px;
              color: #e94950;
            }
            .icon-zhengque {
              font-size: 20px;
              color: #84d082;
            }
          }
        }
      }
    }
  }
  .phone_error_message {
    width: 100%;
    height: 15px;
    margin: 5px 8px;
    .content {
      font-size: 13px;
      color: #e84a52;
    }
  }

  .user_code {
    margin-top: 30px;
    display: flex;
    align-items: flex-end;
    &:after {
      content: '';
      width: 70%;
      height: 1px;
      margin-top: 5px;
      position: absolute;
      box-sizing: border-box;
      pointer-events: none;
      background-color: #9a9a9a;
    }
    .code_input {
      flex: 1;
      margin: 0;
      padding: 0;
      // font-size: 19px;
      ::v-deep .van-cell__value {
        .van-field__body {
          .van-field__right-icon {
            .icon-jinggao {
              font-size: 20px;
              color: #e94950;
            }
            .icon-zhengque {
              font-size: 20px;
              color: #84d082;
            }
          }
        }
      }
    }
    .code_button {
      width: 83px;
      height: 39px;
      margin: 0;
      font-size: 19px;
    }
  }
  .code_error_message {
    width: 100%;
    height: 15px;
    margin: 10px 10px;
    .content {
      font-size: 13px;
      color: #e84a52;
    }
  }

  .footer {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 264px;
    height: 49px;
    border-radius: 5px;
    box-shadow: #cbcdd2 0px 0px 5px;
    .yes_button {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      color: #ffffff;
      background: #e84a51;
      border-radius: 5px;
    }
    .no_button {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      color: #666666;
      background: #aaaaaa;
      border-radius: 5px;
    }
  }
}
</style>