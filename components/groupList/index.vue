<template>
  <div class="group_list">
    <div class="box">
      <van-list v-model="loading" :finished="finished">
        <slot />
      </van-list>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      loading: false,
      finished: true
    }
  }
}
</script>


<style lang="scss" scoped>
.group_list {
  .box {
    width: 100%;
  }
}
</style>