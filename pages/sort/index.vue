<template>
  <div class="sort">分类</div>
</template>


<script>
export default {
  head() {
    return {
      title: this.title
    }
  },
  data() {
    return {
      title: this.$route.name
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.sort {
}
</style>