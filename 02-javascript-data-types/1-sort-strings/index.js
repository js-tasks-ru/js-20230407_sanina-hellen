/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let newArr = [...arr];

  if (param == 'asc') {
    newArr.sort(function (a, b) {
      return a.localeCompare(b, ['ru', 'en'], { caseFirst: 'upper' });
    });
  } else {
    newArr.sort(function (a, b) {
      return b.localeCompare(a, ['ru', 'en']);
    });
  }

  return newArr;
}
