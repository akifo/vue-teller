let seed = 0

const getName = function (err) {
  return (
    isString(err)
      ? 'Error'
      : isError(err)
        ? err.name
        : isPlainObject(err) && err.title
          ? err.title
          : 'Error'
  )
}

const getMessage = function (err) {
  return (
    isString(err)
      ? err
      : isError(err)
        ? err.message
        : isPlainObject(err) && err.message
          ? err.message
          : 'Error'
  )
}

const isString = function (v) {
  return typeof v === 'string'
}

const isError = function (v) {
  return v instanceof Error
}

// const isObject = function (obj) {
//   return obj !== null && typeof obj === 'object'
// }

/**
 * Get the raw type string of a value e.g. [object Object]
 */
const _toString = Object.prototype.toString

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
const isPlainObject = function (obj) {
  return _toString.call(obj) === '[object Object]'
}

const analyzeProps = function (props) {
  const options = {}
  options.id = 'vue-teller-no-' + seed++
  options.title = getName(props)
  options.message = getMessage(props)
  if (isPlainObject(props)) {
    if (props.duration) options.duration = props.duration
    if (props.position) options.position = props.position
    if (props.iconClass) options.iconClass = props.iconClass
  }
  return options
}

export default analyzeProps
