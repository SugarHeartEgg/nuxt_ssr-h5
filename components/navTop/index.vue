<template>
  <div class="nav_top">
    <div class="box">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      Toast('返回')
    },
    onClickRight() {
      Toast('按钮')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav_top {
  .box {
  }
}
</style>