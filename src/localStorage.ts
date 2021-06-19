export { get, set, remove };
var get: (key: string) => string | null,
  set: (key: string, value: string) => void,
  remove: (key: string) => void;
var buffer: { [key: string]: string | null } = {};
if (!window.sessionStorage) {
  console.log("Local storage not supported.");
}
if (window.sessionStorage) {
  const storage = sessionStorage;
  get = function (key) {
    const res = storage.getItem(key);
    return res;
  };
  set = function (key, value) {
    storage.setItem(key, value);
  };
  remove = function (key) {
    storage.removeItem(key);
  };
} else {
  get = function (key) {
    return buffer[key];
  };
  set = function (key, value) {
    buffer[key] = value;
  };
  remove = function (key) {
    delete buffer[key];
  };
}
