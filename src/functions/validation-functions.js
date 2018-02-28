// Validations

const validateEmail = function(email) {
  // eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const numInRange = function between(x, min, max) {
  return x >= min && x <= max;
};

const validateIsPercentage = function(submission) {
  const isInRange = numInRange(submission, 0, 100);
  if (isInRange) {
    return true;
  } else {
    return false;
  }
};

// Accepts any number of arguments -> To permit testing of all fields in a form
const emptyString = function() {
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length === 0 || !arguments[i].trim()) {
      return true;
    }
  }

  return false;
};

// Only considers arrays in form []
const arrayIsEmpty = function(arr) {
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
};

const objectIsEmpty = function(obj) {
  let hasOwnProperty = Object.prototype.hasOwnProperty;

    if (obj == null) { // jshint ignore:line
    	return true;
    }

    if (obj.length > 0) {
    	return false;
    }
    if (obj.length === 0)  {
    	return true;
    }

    if (typeof obj !== "object") {
    	return true;
    }

    for (let key in obj) {
        if (hasOwnProperty.call(obj, key)) {
       	 return false;
        }
    }

    return true;
};

module.exports = {
  validateEmail,
  emptyString,
  objectIsEmpty,
  arrayIsEmpty,
  validateIsPercentage,
};
