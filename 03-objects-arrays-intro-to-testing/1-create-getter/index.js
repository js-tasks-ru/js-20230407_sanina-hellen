/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const fields = path;
  const arr = fields.split('.');

  return function (obj) {
    if (!obj) {
      return undefined;
    }

    return arr.reduce((accum, item) => accum ? accum[item] : undefined, obj);
  }
}