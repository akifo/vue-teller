<template>
  <div class="markdown-body container">
    <h2>async/await</h2>
    <p class="btn" @click="clickedBtn">run all task(A, B, C, D)</p>
  </div>
</div>

</template>

<script>
import API from '../api'
import { Loading } from 'element-ui'

export default {

  name: 'TellerAsyncAwait',

  methods: {
    clickedBtn () {
      const loadingInstance = Loading.service({ fullscreen: true })
      this.handleTasks()
        .then(() => {
          this.$teller({
            type: 'success',
            title: 'Success',
            message: 'You are awesome!',
            iconClass: 'fa-check-circle-o'
          })
        })
        .catch(this.$teller)
        .then(() => {
          loadingInstance.close()
        })
    },
    handleTasks: async function () {
      await this.taskA()
      await this.taskB()
      await this.taskC()
      await this.taskD()
    },
    taskA () {
      console.log('taskA will be successful')
      return new Promise((resolve, reject) => {
        API({
          method: 'GET',
          url: '/posts/1'
        })
        .then(resolve)
        .catch(reject)
      })
    },
    taskB () {
      console.log('taskB will be successful')
      return new Promise((resolve, reject) => {
        API({
          method: 'GET',
          url: '/posts/1'
        })
        .then(resolve)
        .catch(reject)
      })
    },
    taskC () {
      console.log('taskC will be failed')
      return new Promise((resolve, reject) => {
        API({
          method: 'GET',
          url: '/poster/1'
        })
        .then(resolve)
        .catch(reject)
      })
    },
    taskD () {
      console.log('taskD will be successful, but never called')
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

