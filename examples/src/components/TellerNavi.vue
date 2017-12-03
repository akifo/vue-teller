<template>
  <div>
    <el-menu :default-active="activeTab" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="Basic">Basic</el-menu-item>
      <el-menu-item index="Promise">Promise</el-menu-item>
      <el-menu-item index="AsyncAwait">async/await</el-menu-item>
    </el-menu>
  </div>
</div>

</template>

<script>
export default {

  name: 'TellerHeader',

  data () {
    return {
      activeTab: 'Basic'
    }
  },

  mounted () {
    this.activeTab = this.$route.name
  },

  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({ name: key })
    }
  }

}
</script>

<style lang="stylus">
</style>
