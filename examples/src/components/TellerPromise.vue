<template>
  <div class="markdown-body container">
    <h2>Promise</h2>
    <p class="btn" @click="clickedBtnA">Task A</p>
    <p class="btn" @click="clickedBtnB">Task B</p>
  </div>
</div>

</template>

<script>
import API from '../api'

export default {

  name: 'TellerPromise',

  methods: {
    clickedBtnA () {
      this.taskA()
      .then(() => {
        this.$teller({
          type: 'success',
          title: 'Success',
          message: 'You are awesome!',
          iconClass: 'fa-check-circle-o'
        })
      })
      .catch(this.$teller)
    },
    clickedBtnB () {
      this.taskB()
      .then(() => {
        this.$teller({
          type: 'success',
          title: 'Success',
          message: 'You are awesome!',
          iconClass: 'fa-check-circle-o'
        })
      })
      .catch(this.$teller)
    },
    taskA () {
      return new Promise((resolve, reject) => {
        API({
          method: 'GET',
          url: '/poster/1'
        })
        .then(resolve)
        .catch(reject)
      })
    },
    taskB () {
      return new Promise((resolve, reject) => {
        API({
          method: 'GET',
          url: '/posts/1'
        })
        .then(resolve)
        .catch(reject)
      })
    }
  }
}
</script>

<style lang="stylus">
</style>

