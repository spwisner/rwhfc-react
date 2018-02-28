// Used for last update timestamps
const convertTimeStampToStr = function(timestamp) {
  if (timestamp === null) {
    return null;
  } else {
    let timeStampArr = timestamp.split("");
    let year = timeStampArr[0] + timeStampArr[1] + timeStampArr[2] + timeStampArr[3];
    let month = timeStampArr[5] + timeStampArr[6];
    let day = timeStampArr[8] + timeStampArr[9];

    let formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
  }
};

const convertISODateToStr = function(isoStr) {
  if (isoStr === null) {
    return null;
  } else {
    const formattedDate = isoStr.slice(0,10);

    return formattedDate;
  }
};

// Used for radio button "string" booleans
const convertBoolTextToBool = function(boolStr){
  if (boolStr === "true") {
    return true;
  } else if (boolStr === "false") {
    return false;
  }

  // To catch error:
  return console.error('convertBoolTextToBool: not a boolean string argument');
};

module.exports = {
  convertTimeStampToStr,
  convertBoolTextToBool,
  convertISODateToStr,
};
