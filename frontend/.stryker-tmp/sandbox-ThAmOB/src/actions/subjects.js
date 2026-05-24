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
export const showAllSubjects = res => {
  if (stryMutAct_9fa48("621")) {
    {}
  } else {
    stryCov_9fa48("621");
    return stryMutAct_9fa48("622") ? {} : (stryCov_9fa48("622"), {
      type: actionTypes.SHOW_ALL_SUBJECTS,
      result: res
    });
  }
};
export const setDisabledSubjects = res => {
  if (stryMutAct_9fa48("623")) {
    {}
  } else {
    stryCov_9fa48("623");
    return stryMutAct_9fa48("624") ? {} : (stryCov_9fa48("624"), {
      type: actionTypes.SET_DISABLED_SUBJECTS,
      result: res
    });
  }
};
export const addSubject = res => {
  if (stryMutAct_9fa48("625")) {
    {}
  } else {
    stryCov_9fa48("625");
    return stryMutAct_9fa48("626") ? {} : (stryCov_9fa48("626"), {
      type: actionTypes.ADD_SUBJECT,
      result: res
    });
  }
};
export const deleteSubject = res => {
  if (stryMutAct_9fa48("627")) {
    {}
  } else {
    stryCov_9fa48("627");
    return stryMutAct_9fa48("628") ? {} : (stryCov_9fa48("628"), {
      type: actionTypes.DELETE_SUBJECT,
      result: res
    });
  }
};
export const selectSubject = res => {
  if (stryMutAct_9fa48("629")) {
    {}
  } else {
    stryCov_9fa48("629");
    return stryMutAct_9fa48("630") ? {} : (stryCov_9fa48("630"), {
      type: actionTypes.SELECT_SUBJECT,
      result: res
    });
  }
};
export const updateSubject = res => {
  if (stryMutAct_9fa48("631")) {
    {}
  } else {
    stryCov_9fa48("631");
    return stryMutAct_9fa48("632") ? {} : (stryCov_9fa48("632"), {
      type: actionTypes.UPDATE_SUBJECT,
      result: res
    });
  }
};
export const clearSubject = () => {
  if (stryMutAct_9fa48("633")) {
    {}
  } else {
    stryCov_9fa48("633");
    return stryMutAct_9fa48("634") ? {} : (stryCov_9fa48("634"), {
      type: actionTypes.CLEAR_SUBJECT
    });
  }
};