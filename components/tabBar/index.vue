<template>
  <div class="tab_bar">
    <van-tabbar v-model="active" active-color="#e84a51" class="iconfont">
      <van-tabbar-item icon-prefix="icon" icon="shouyemianxing" name="home" to="/home">Home</van-tabbar-item>
      <van-tabbar-item icon-prefix="icon" icon="fenleimianxing" name="sort" to="/sort">Sort</van-tabbar-item>
      <van-tabbar-item icon-prefix="icon" icon="VIPxianxing" name="vip" to="/vip">Vip</van-tabbar-item>
      <van-tabbar-item
        icon-prefix="icon"
        icon="gouwuchemianxing"
        badge="5"
        name="cart"
        to="/shoppingCart"
      >Cart</van-tabbar-item>
      <van-tabbar-item icon-prefix="icon" icon="wodemianxing" name="my" to="/mine">Me</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'home'
    }
  }
}
</script>