<template>
  <div class="error" v-if="error.statusCode == '404'">
    <h2>404</h2>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>