/**
 * @description Return memory in an abbreviated format
 * @param {number} memory - Memory of device
 * @returns {string}
 */
exports.getMemoryInUnits = function (memory) {
  if (isNaN(memory) || memory <= 0 || memory > 10 ** 10) {
    throw new Error('Кривые данные');
  }
  if (memory < 10 ** 3) {
    return `${memory}Б`;
  } 
  if (memory < 10 ** 6) {
    return `${Math.floor(memory / 2 ** 10)}кБ`;
  }
  if (memory < 10 ** 9) {
    return `${Math.floor(memory / 2 ** 20)}МБ`;
  }
  if (memory < 10 ** 10) {
    return `${Math.floor(memory / 2 ** 30)}ГБ`;
  }
}
