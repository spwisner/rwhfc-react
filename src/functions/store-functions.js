import validationFunctions from './validation-functions.js';

const deleteObjectInArray = function(id, data) {
  for(let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
        data.splice(i, 1);
        break;
    }
  }

  return data;
};

// Used For Set Record By Id In Store
const getObjectInArray = function(id, data) {
  const arrayIsEmpty = validationFunctions.arrayIsEmpty(data);
  if (arrayIsEmpty) {
    return [];
  } else {
    let returnObj = {};
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        returnObj = data[i];
        return returnObj;
      }
    }
  }
};

const replaceObjInArr = function(dataObj, dataArr) {
  let finalArr = [];
  let dataObjId = dataObj.id;

  for (let i = 0; i < dataArr.length; i++) {
    if (dataObjId === dataArr[i].id) {
      finalArr.push(dataObj);
    } else {
      finalArr.push(dataArr[i]);
    }
  }

  return finalArr;
};

const assignDefaultOpen = function(string) {
  const projectIndexDefault = (string === "ProjectCreate" || string === "ProjectShow" || string === "MemberHome" || string === "ProjectDelete");
  const projectShowDefault = (string === "MilestoneIndex" || string === "ProjectUpdate");
  const milestoneIndexDefault = (string === "MilestoneCreate" || string === "MilestoneDelete" || string === "MilestoneShow");
  const milestoneShowDefault = (string === "MilestoneUpdate" || string === "TaskIndex");
  const taskIndexDefault = (string === "TaskCreate" || string === "TaskShow" || string === "TaskDelete");
  const taskShowDefault = (string === "TaskUpdate");

  if (projectIndexDefault) {
    return "1";
  } else if (projectShowDefault) {
    return "2";
  } else if (milestoneIndexDefault) {
    return "3";
  } else if (milestoneShowDefault) {
    return "4";
  } else if (taskIndexDefault) {
    return "5";
  } else if (taskShowDefault) {
    return "6";
  }
};

module.exports = {
  deleteObjectInArray,
  getObjectInArray,
  replaceObjInArr,
  assignDefaultOpen,
};
