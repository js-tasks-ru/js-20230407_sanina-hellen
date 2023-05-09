/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
  let newArr = [];
  Object.entries(obj).forEach((item) => (
    fields.forEach(function(field) {
      if (item[0] == field) {
        newArr.push(item);
      }
    })
  ));

  return Object.fromEntries(newArr);
};
