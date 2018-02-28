// Note: Must only be entered as an array of objects
// eg. arr = response.forms
const sortObjByStrVal = function (arr, objectKey) {
  arr.sort(function(a, b) {
    let nameA = a[objectKey].toUpperCase(); // ignore upper and lowercase
    let nameB = b[objectKey].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  return arr;
};

module.exports = {
  sortObjByStrVal,
};
