/**
 * @description Get data array from json-file whith path name
 * @async
 * @param {string} path name of json-file
 * @returns {object} device data array
 */
exports.getData = function (path) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', path, true)
    xhr.onload = () => {
      const data = JSON.parse(xhr.responseText)
      resolve(data)
    }
    xhr.onerror = () => reject()
    xhr.send(null)
  })
}
