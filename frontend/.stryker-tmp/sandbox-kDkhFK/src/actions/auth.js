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
import { TOKEN_BEGIN } from '../constants/tokenBegin';
export const authUser = stryMutAct_9fa48("235") ? () => undefined : (stryCov_9fa48("235"), (() => {
  const authUser = payload => stryMutAct_9fa48("236") ? {} : (stryCov_9fa48("236"), {
    type: actionTypes.AUTH_USER,
    payload
  });
  return authUser;
})());
export const authAutoLogout = stryMutAct_9fa48("237") ? () => undefined : (stryCov_9fa48("237"), (() => {
  const authAutoLogout = expirationTime => stryMutAct_9fa48("238") ? {} : (stryCov_9fa48("238"), {
    type: actionTypes.AUTH_USER_AUTO_LOGOUT,
    expirationTime
  });
  return authAutoLogout;
})());
export const registerUser = stryMutAct_9fa48("239") ? () => undefined : (stryCov_9fa48("239"), (() => {
  const registerUser = payload => stryMutAct_9fa48("240") ? {} : (stryCov_9fa48("240"), {
    type: actionTypes.REGISTER_USER,
    payload
  });
  return registerUser;
})());
export const resetUserPassword = stryMutAct_9fa48("241") ? () => undefined : (stryCov_9fa48("241"), (() => {
  const resetUserPassword = payload => stryMutAct_9fa48("242") ? {} : (stryCov_9fa48("242"), {
    type: actionTypes.RESET_USER_PASSWORD,
    payload
  });
  return resetUserPassword;
})());
export const activateUser = stryMutAct_9fa48("243") ? () => undefined : (stryCov_9fa48("243"), (() => {
  const activateUser = payload => stryMutAct_9fa48("244") ? {} : (stryCov_9fa48("244"), {
    type: actionTypes.ACTIVATE_USER,
    payload
  });
  return activateUser;
})());
export const logout = stryMutAct_9fa48("245") ? () => undefined : (stryCov_9fa48("245"), (() => {
  const logout = () => stryMutAct_9fa48("246") ? {} : (stryCov_9fa48("246"), {
    type: actionTypes.AUTH_USER_LOGOUT
  });
  return logout;
})());
export const authCheckState = () => {
  if (stryMutAct_9fa48("247")) {
    {}
  } else {
    stryCov_9fa48("247");
    const token = localStorage.getItem(stryMutAct_9fa48("248") ? "" : (stryCov_9fa48("248"), 'token'));
    if (stryMutAct_9fa48("251") ? token || !token.includes(TOKEN_BEGIN) : stryMutAct_9fa48("250") ? false : stryMutAct_9fa48("249") ? true : (stryCov_9fa48("249", "250", "251"), token && (stryMutAct_9fa48("252") ? token.includes(TOKEN_BEGIN) : (stryCov_9fa48("252"), !token.includes(TOKEN_BEGIN))))) {
      if (stryMutAct_9fa48("253")) {
        {}
      } else {
        stryCov_9fa48("253");
        return stryMutAct_9fa48("254") ? {} : (stryCov_9fa48("254"), {
          type: actionTypes.AUTH_USER_LOGOUT
        });
      }
    }
    const role = localStorage.getItem(stryMutAct_9fa48("255") ? "" : (stryCov_9fa48("255"), 'userRole'));
    return stryMutAct_9fa48("256") ? {} : (stryCov_9fa48("256"), {
      type: actionTypes.AUTH_USER_CHECK_STATE,
      token,
      role
    });
  }
};
export const activateSuccess = stryMutAct_9fa48("257") ? () => undefined : (stryCov_9fa48("257"), (() => {
  const activateSuccess = response => stryMutAct_9fa48("258") ? {} : (stryCov_9fa48("258"), {
    type: actionTypes.ACTIVATE_USER_SUCCESS,
    response
  });
  return activateSuccess;
})());
export const resetUserPasswordSuccess = stryMutAct_9fa48("259") ? () => undefined : (stryCov_9fa48("259"), (() => {
  const resetUserPasswordSuccess = response => stryMutAct_9fa48("260") ? {} : (stryCov_9fa48("260"), {
    type: actionTypes.RESET_USER_PASSWORD_SUCCESS,
    response
  });
  return resetUserPasswordSuccess;
})());
export const registerUserSuccess = stryMutAct_9fa48("261") ? () => undefined : (stryCov_9fa48("261"), (() => {
  const registerUserSuccess = response => stryMutAct_9fa48("262") ? {} : (stryCov_9fa48("262"), {
    type: actionTypes.REGISTER_USER_SUCCESS,
    response
  });
  return registerUserSuccess;
})());
export const authSuccess = stryMutAct_9fa48("263") ? () => undefined : (stryCov_9fa48("263"), (() => {
  const authSuccess = response => stryMutAct_9fa48("264") ? {} : (stryCov_9fa48("264"), {
    type: actionTypes.AUTH_USER_SUCCESS,
    response
  });
  return authSuccess;
})());
export const setAuthError = stryMutAct_9fa48("265") ? () => undefined : (stryCov_9fa48("265"), (() => {
  const setAuthError = error => stryMutAct_9fa48("266") ? {} : (stryCov_9fa48("266"), {
    type: actionTypes.SET_AUTH_ERROR,
    error
  });
  return setAuthError;
})());