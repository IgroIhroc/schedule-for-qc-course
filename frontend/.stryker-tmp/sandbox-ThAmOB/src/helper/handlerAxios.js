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
import { handleSnackbarOpenService } from '../services/snackbarService';
import { snackbarTypes } from '../constants/snackbarTypes';
import i18n from '../i18n';
export const errorHandler = error => {
  if (stryMutAct_9fa48("5581")) {
    {}
  } else {
    stryCov_9fa48("5581");
    handleSnackbarOpenService(stryMutAct_9fa48("5582") ? false : (stryCov_9fa48("5582"), true), snackbarTypes.ERROR, error.response ? i18n.t(error.response.data.message, error.response.data.message) : stryMutAct_9fa48("5583") ? "" : (stryCov_9fa48("5583"), 'Error'));
  }
};
export const successHandler = message => {
  if (stryMutAct_9fa48("5584")) {
    {}
  } else {
    stryCov_9fa48("5584");
    handleSnackbarOpenService(stryMutAct_9fa48("5585") ? false : (stryCov_9fa48("5585"), true), snackbarTypes.SUCCESS, message);
  }
};
export const infoHandler = message => {
  if (stryMutAct_9fa48("5586")) {
    {}
  } else {
    stryCov_9fa48("5586");
    handleSnackbarOpenService(stryMutAct_9fa48("5587") ? false : (stryCov_9fa48("5587"), true), snackbarTypes.INFO, message);
  }
};