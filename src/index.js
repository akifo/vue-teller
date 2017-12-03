import Vue from 'vue'
import ErrorHMessageComponent from './components/ErrorMessage.vue'
import analyzeProps from './util/analyz-props'

const ErrorMessageConstructor = Vue.extend(ErrorHMessageComponent)
const inBrowser = typeof window !== 'undefined'
const GUTTER = 15

const instances = []
const defaultOptions = {
  title: 'title',
  message: 'message',
  duration: 3000,
  position: 'top-right',
  iconClass: ''
}
const userOptions = {}

const Teller = function (options) {
  if (Vue.prototype.$isServer) return

  const instance = new ErrorMessageConstructor()
  Object.assign(instance.$data, defaultOptions, userOptions, analyzeProps(options))
  instance.vm = instance.$mount()

  instance.$on('onClose', index => {
    const removedHeight = instance.$el.offsetHeight
    instances.splice(index, 1)
    instances
      .filter(i => i.position === instance.position)
      .forEach(i => {
        if (i.index >= instance.index) {
          i.verticalOffset -= removedHeight + GUTTER
          i.index--
        }
      })
  })

  document.body.appendChild(instance.vm.$el)

  let verticalOffset = 0
  instances.filter(i => i.position === instance.position).forEach(i => {
    verticalOffset += i.$el.offsetHeight + GUTTER
  })
  instance.verticalOffset = verticalOffset
  instance.index = instances.length
  instances.push(instance)
  return instance
}

Teller.init = function (options) {
  Object.assign(userOptions, options)
}

const install = (Vue, opsions) => {
  if (Teller.install.installed) return

  Object.defineProperty(Vue.prototype, '$teller', {
    get () { return Teller }
  })
}

Teller.install = install
Teller.version = '__VERSION__'

if (inBrowser && window.Vue) {
  window.Vue.use(Teller)
}

export default Teller
