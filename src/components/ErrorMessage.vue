<template>
  <transition name="fade">
    <div v-show="visible" class="error-message-box" :style="styleObject" :class="position">
      <div class="error-message-close-btn" @click="close">
        <close-svg/>
      </div>
      <div class="error-icon-aria">
        <template v-if="iconClass.length > 0">
          <i class="fa" :class="iconClass"></i>
        </template>
        <template v-else>
          <warn-svg/>
        </template>
      </div>
      <div class="error-message-aria">
        <p class="error-message-title">{{title}}</p>
        <p class="error-message-body">{{message}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
import WarnSvg from './Warn.vue'
import CloseSvg from './Close.vue'

export default {

  name: 'ERrorMessage',

  components: {
    'close-svg': CloseSvg,
    'warn-svg': WarnSvg
  },

  data () {
    return {
      index: NaN,
      id: '',
      title: 'Error',
      message: 'You got error.',
      visible: false,
      duration: 1000,
      position: 'top-right',
      iconClass: '',
      closed: false,
      timer: null,
      verticalOffset: 0
    }
  },

  computed: {
    styleObject () {
      switch (this.position) {
        case 'top-right':
          return {
            top: `${this.verticalOffset}px`,
            right: 0
          }
        case 'top-center':
          return {
            top: `${this.verticalOffset}px`,
            left: '50%',
            transform: 'translateX(-50%)'
          }
        case 'top-left':
          return {
            top: `${this.verticalOffset}px`,
            left: 0
          }
        case 'middle-right':
          return {
            'z-index': `${this.index}`,
            top: '50%',
            transform: 'translateY(-50%)',
            right: 0
          }
        case 'middle-center':
          return {
            'z-index': `${this.index}`,
            top: '50%',
            left: '50%',
            transform: 'translate3d(-50%, -50%, 0)'
          }
        case 'middle-left':
          return {
            'z-index': `${this.index}`,
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)'
          }
        case 'bottom-right':
          return {
            bottom: `${this.verticalOffset}px`,
            right: 0
          }
        case 'bottom-center':
          return {
            bottom: `${this.verticalOffset}px`,
            left: '50%',
            transform: 'translateX(-50%)'
          }
        case 'bottom-left':
          return {
            bottom: `${this.verticalOffset}px`,
            left: 0
          }
        default:
          return {
            top: `${this.verticalOffset}px`,
            right: 0
          }
      }
    }
  },

  watch: {
    closed (newVal) {
      if (newVal) {
        this.$el.addEventListener('transitionend', this.destroyElement)
      }
    }
  },

  mounted () {
    this.startTimer()
  },

  methods: {

    destroyElement () {
      this.$emit('onClose', this.index)
      this.$el.removeEventListener('transitionend', this.destroyElement)
      this.$destroy(true)
      this.$el.parentNode.removeChild(this.$el)
    },

    clearTimer () {
      clearTimeout(this.timer)
    },

    startTimer () {
      this.visible = true
      this.timer = setTimeout(() => {
        if (!this.closed) {
          this.close()
        }
      }, this.duration)
    },

    close () {
      this.closed = true
      this.visible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.error-message-box
  position: fixed
  z-index: 999999
  width: auto
  height: auto
  max-width: 90vw
  background-color: #fff
  border-color: red
  border-radius: 2px
  margin: 10px
  padding: .7em 1.4em
  font-size: 16px
  display: flex
  align-items: center
  transition: ease all .3s
  box-shadow:
    0 2px 2px 0 rgba(0,0,0,0.14),
    0 3px 1px -2px rgba(0,0,0,0.12),
    0 1px 5px 0 rgba(0,0,0,0.2)

  .error-message-close-btn
    position: absolute
    top: 4px
    right: 4px
    z-index: 10

  .error-icon-aria
    flex: 1 1 auto
    display: flex
    object
      fill: red
      svg
        fill: red
  .error-message-aria
    flex: 1 1 auto
    margin: 0 1.4em 0 1.4em
    margin: 0
    padding: 0
    .error-message-title
      margin: 0 10px
      padding: 0
      font-size: 1em
      font-weight: 500
      color: rgba(#000, .8)
    .error-message-body
      margin: 0 10px
      padding: 0
      font-size: .8em
      font-weight: 400
      color: rgba(#000, .7)

// fade
.fade-enter-active
.fade-leave-active
  transition: all .4s linear

.fade-enter
.fade-leave-to
  opacity: 0

.fade-enter
  transform: translateY(10px)

.fade-leave-to
  transform: translateY(-10px)
  margin-bottom: calc(-50% + 20px)

</style>
