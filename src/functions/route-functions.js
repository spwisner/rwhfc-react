import CredentialStore from '../flux/stores/CredentialStore.js';

const environmentUrlPath = function(path) {
  const environment = CredentialStore.getEnvironment();
  const githubPath = "/project-manager";
  let pathArr = [];
  if (environment === "development") {
    return path;
  } else {
    pathArr.push(githubPath);
    pathArr.push(path);
    return pathArr.join("");
  }
};

const redirectFunction = function(props, path) {
  const historyPath = environmentUrlPath(path);
  return props.history.push(historyPath);
};

// Used to create link path (e.g. with update)
const linkById = function(start_path, id, end_path) {
  let recordId;
  const idIsNan = isNaN(id);
  if (idIsNan) {
    recordId = id;
  } else {
    recordId = id.toString();
  }

  let finalUrl;
  if (end_path === undefined) {
    finalUrl = start_path + recordId;
  } else {
    finalUrl = start_path + recordId + end_path;
  }
  return finalUrl;
};

const safeGoBack = function(props, linkPath) {
  const history= props.history;
  if (history === undefined || history === null) {
    return redirectFunction(props, linkPath);
  } else if(isNaN(history.length) || history.length < 3) {
    return redirectFunction(props, linkPath);
  }

  return history.goBack();
};

// Will remove all falsy values: undefined, null, 0, false, NaN and "" (empty string)
const removeNonIntArrItems = function(actual) {
  const newArray = [];
  for (let i = 0; i < actual.length; i++) {
    const itemAsNum = parseInt(actual[i], 10);
    const isId = (!isNaN(itemAsNum));
    if (actual[i] && isId) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
};

// For the navigation to determine if to show milestones & tasks
const showMenuOption = function(categoryType) {
  const pathArr = removeNonIntArrItems(window.location.pathname.split("/"));
  const pathArrLength = pathArr.length;
  if ( categoryType === "milestones" && (pathArrLength > 0) ) {
    return true;
  } else if ( categoryType === "tasks" && (pathArrLength > 1) ) {
    return true;
  }
  return false;
};

const findNavIdByPath = function(categoryType) {
  const pathArr = removeNonIntArrItems(window.location.pathname.split("/"));
  const pathArrLength = pathArr.length;

  if (categoryType === "project" & (pathArrLength > 0)) {
    return pathArr[0];
  } else if (categoryType === "milestone" & (pathArrLength > 0)) {
    return pathArr[1];
  }

  return;
};

module.exports = {
  redirectFunction,
  linkById,
  safeGoBack,
  showMenuOption,
  findNavIdByPath,
  environmentUrlPath,
};
