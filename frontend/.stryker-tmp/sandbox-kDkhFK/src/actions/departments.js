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
export const addDepartment = res => {
  if (stryMutAct_9fa48("297")) {
    {}
  } else {
    stryCov_9fa48("297");
    return stryMutAct_9fa48("298") ? {} : (stryCov_9fa48("298"), {
      type: actionTypes.ADD_DEPARTMENT,
      result: res
    });
  }
};
export const getAllDepartments = res => {
  if (stryMutAct_9fa48("299")) {
    {}
  } else {
    stryCov_9fa48("299");
    return stryMutAct_9fa48("300") ? {} : (stryCov_9fa48("300"), {
      type: actionTypes.GET_ALL_DEPARTMENTS,
      result: res
    });
  }
};
export const getDisabledDepartments = res => {
  if (stryMutAct_9fa48("301")) {
    {}
  } else {
    stryCov_9fa48("301");
    return stryMutAct_9fa48("302") ? {} : (stryCov_9fa48("302"), {
      type: actionTypes.GET_DISABLED_DEPARTMENTS,
      result: res
    });
  }
};
export const setDisabledDepartment = res => {
  if (stryMutAct_9fa48("303")) {
    {}
  } else {
    stryCov_9fa48("303");
    return stryMutAct_9fa48("304") ? {} : (stryCov_9fa48("304"), {
      type: actionTypes.SET_DISABLED_DEPARTMENT,
      result: res
    });
  }
};
export const setEnabledDepartment = res => {
  if (stryMutAct_9fa48("305")) {
    {}
  } else {
    stryCov_9fa48("305");
    return stryMutAct_9fa48("306") ? {} : (stryCov_9fa48("306"), {
      type: actionTypes.SET_ENABLED_DEPARTMENT,
      result: res
    });
  }
};
export const clearDepartmentForm = () => {
  if (stryMutAct_9fa48("307")) {
    {}
  } else {
    stryCov_9fa48("307");
    return stryMutAct_9fa48("308") ? {} : (stryCov_9fa48("308"), {
      type: actionTypes.CLEAR_DEPARTMENT_FORM
    });
  }
};
export const deleteDepartment = res => {
  if (stryMutAct_9fa48("309")) {
    {}
  } else {
    stryCov_9fa48("309");
    return stryMutAct_9fa48("310") ? {} : (stryCov_9fa48("310"), {
      type: actionTypes.DELETE_DEPARTMENT,
      result: res
    });
  }
};
export const getDepartItemById = res => {
  if (stryMutAct_9fa48("311")) {
    {}
  } else {
    stryCov_9fa48("311");
    return stryMutAct_9fa48("312") ? {} : (stryCov_9fa48("312"), {
      type: actionTypes.GET_DEPARTMENT_BY_ID,
      result: res
    });
  }
};
export const updateDepart = res => {
  if (stryMutAct_9fa48("313")) {
    {}
  } else {
    stryCov_9fa48("313");
    return stryMutAct_9fa48("314") ? {} : (stryCov_9fa48("314"), {
      type: actionTypes.UPDATE_DEPARTMENT,
      result: res
    });
  }
};