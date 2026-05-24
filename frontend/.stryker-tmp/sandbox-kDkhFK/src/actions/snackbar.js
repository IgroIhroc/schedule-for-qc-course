// @ts-nocheck
function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import * as actionTypes from './actionsType';
import { snackbarTypes } from '../constants/snackbarTypes';
export const setOpenSnackbar = res => {
  if (stryMutAct_9fa48("575")) {
    {}
  } else {
    stryCov_9fa48("575");
    return stryMutAct_9fa48("576") ? {} : (stryCov_9fa48("576"), {
      type: actionTypes.SET_OPEN_SNACKBAR,
      result: res
    });
  }
};
export const setOpenInfoSnackbar = message => {
  if (stryMutAct_9fa48("577")) {
    {}
  } else {
    stryCov_9fa48("577");
    return stryMutAct_9fa48("578") ? {} : (stryCov_9fa48("578"), {
      type: actionTypes.SET_OPEN_SNACKBAR,
      result: stryMutAct_9fa48("579") ? {} : (stryCov_9fa48("579"), {
        isOpen: stryMutAct_9fa48("580") ? false : (stryCov_9fa48("580"), true),
        type: snackbarTypes.INFO,
        message
      })
    });
  }
};
export const setOpenSuccessSnackbar = message => {
  if (stryMutAct_9fa48("581")) {
    {}
  } else {
    stryCov_9fa48("581");
    return stryMutAct_9fa48("582") ? {} : (stryCov_9fa48("582"), {
      type: actionTypes.SET_OPEN_SNACKBAR,
      result: stryMutAct_9fa48("583") ? {} : (stryCov_9fa48("583"), {
        isOpen: stryMutAct_9fa48("584") ? false : (stryCov_9fa48("584"), true),
        type: snackbarTypes.SUCCESS,
        message
      })
    });
  }
};
export const setOpenErrorSnackbar = message => {
  if (stryMutAct_9fa48("585")) {
    {}
  } else {
    stryCov_9fa48("585");
    return stryMutAct_9fa48("586") ? {} : (stryCov_9fa48("586"), {
      type: actionTypes.SET_OPEN_SNACKBAR,
      result: stryMutAct_9fa48("587") ? {} : (stryCov_9fa48("587"), {
        isOpen: stryMutAct_9fa48("588") ? false : (stryCov_9fa48("588"), true),
        type: snackbarTypes.ERROR,
        message
      })
    });
  }
};