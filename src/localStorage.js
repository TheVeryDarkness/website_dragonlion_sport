export { get, set, remove }
var get, set, remove
var buffer = {}
if (!window.sessionStorage) { console.log('Local storage not supported.') }
if (window.sessionStorage) {
  const storage = sessionStorage
  get = function (key) {
    return storage.getItem(key)
  }
  set = function (key, value) {
    storage.setItem(key, value)
  }
  remove = function (key) {
    storage.removeItem(key)
  }
} else {
  get = function (key) {
    return buffer[key]
  }
  set = function (key, value) {
    buffer[key] = value
  }
  remove = function (key) {
    delete buffer[key]
  }
}
