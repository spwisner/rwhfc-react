// Generates object to be inserted as dropdown options
const dropdownLinkBtnObj = function() {
  let tempObj;
  let finalArr = [];
  for (let i = 0; i < arguments.length; i++) {
    tempObj = {
      id: null,
      text: "",
      link: ""
    };

    if (i % 2) {
      tempObj.id = finalArr.length + 1;
      tempObj.text = arguments[i-1];
      tempObj.link = arguments[i];
      finalArr.push(tempObj);
    }
  }
  return finalArr;
};

module.exports = {
  dropdownLinkBtnObj,
};
