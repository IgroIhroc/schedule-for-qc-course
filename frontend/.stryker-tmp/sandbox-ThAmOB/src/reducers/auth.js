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
import * as actionTypes from '../actions/actionsType';
import axios from '../helper/axios';
const initialState = stryMutAct_9fa48("6569") ? {} : (stryCov_9fa48("6569"), {
  token: null,
  role: null,
  error: null,
  activationError: null
});
const reducer = (state = initialState, action) => {
  if (stryMutAct_9fa48("6570")) {
    {}
  } else {
    stryCov_9fa48("6570");
    const {
      response
    } = action;
    switch (action.type) {
      case actionTypes.AUTH_USER_CHECK_STATE:
        if (stryMutAct_9fa48("6571")) {} else {
          stryCov_9fa48("6571");
          if (stryMutAct_9fa48("6573") ? false : stryMutAct_9fa48("6572") ? true : (stryCov_9fa48("6572", "6573"), action.token)) {
            if (stryMutAct_9fa48("6574")) {
              {}
            } else {
              stryCov_9fa48("6574");
              axios.defaults.headers.common.Authorization = action.token;
            }
          }
          return stryMutAct_9fa48("6575") ? {} : (stryCov_9fa48("6575"), {
            ...state,
            token: action.token,
            role: action.role
          });
        }
      case actionTypes.AUTH_USER_SUCCESS:
        if (stryMutAct_9fa48("6576")) {} else {
          stryCov_9fa48("6576");
          return stryMutAct_9fa48("6577") ? {} : (stryCov_9fa48("6577"), {
            ...state,
            token: response.token,
            role: response.role,
            error: null
          });
        }
      case actionTypes.AUTH_USER_ERROR:
        if (stryMutAct_9fa48("6578")) {} else {
          stryCov_9fa48("6578");
          return stryMutAct_9fa48("6579") ? {} : (stryCov_9fa48("6579"), {
            ...state,
            response,
            error: stryMutAct_9fa48("6580") ? {} : (stryCov_9fa48("6580"), {
              login: action.error
            })
          });
        }
      case actionTypes.AUTH_USER_LOGOUT:
        if (stryMutAct_9fa48("6581")) {} else {
          stryCov_9fa48("6581");
          delete axios.defaults.headers.common.Authorization;
          localStorage.removeItem(stryMutAct_9fa48("6582") ? "" : (stryCov_9fa48("6582"), 'token'));
          localStorage.removeItem(stryMutAct_9fa48("6583") ? "" : (stryCov_9fa48("6583"), 'expirationDate'));
          localStorage.removeItem(stryMutAct_9fa48("6584") ? "" : (stryCov_9fa48("6584"), 'userRole'));
          return stryMutAct_9fa48("6585") ? {} : (stryCov_9fa48("6585"), {
            ...state,
            response: null,
            token: null,
            error: null,
            role: null
          });
        }
      case actionTypes.REGISTER_USER_SUCCESS:
      case actionTypes.ACTIVATE_USER_SUCCESS:
        if (stryMutAct_9fa48("6586")) {} else {
          stryCov_9fa48("6586");
          return stryMutAct_9fa48("6587") ? {} : (stryCov_9fa48("6587"), {
            ...state,
            response
          });
        }
      case actionTypes.REGISTER_USER_ERROR:
        if (stryMutAct_9fa48("6588")) {} else {
          stryCov_9fa48("6588");
          return stryMutAct_9fa48("6589") ? {} : (stryCov_9fa48("6589"), {
            ...state,
            error: stryMutAct_9fa48("6590") ? {} : (stryCov_9fa48("6590"), {
              registration: stryMutAct_9fa48("6591") ? {} : (stryCov_9fa48("6591"), {
                reg: action.error
              })
            })
          });
        }
      case actionTypes.RESET_USER_PASSWORD_SUCCESS:
        if (stryMutAct_9fa48("6592")) {} else {
          stryCov_9fa48("6592");
          return stryMutAct_9fa48("6593") ? {} : (stryCov_9fa48("6593"), {
            ...state,
            resetPasswordResponse: response
          });
        }
      case actionTypes.RESET_USER_PASSWORD_ERROR:
        if (stryMutAct_9fa48("6594")) {} else {
          stryCov_9fa48("6594");
          return stryMutAct_9fa48("6595") ? {} : (stryCov_9fa48("6595"), {
            ...state,
            error: action.error
          });
        }
      case actionTypes.ACTIVATE_USER_ERROR:
        if (stryMutAct_9fa48("6596")) {} else {
          stryCov_9fa48("6596");
          return stryMutAct_9fa48("6597") ? {} : (stryCov_9fa48("6597"), {
            ...state,
            activationError: action.error
          });
        }
      case actionTypes.SET_AUTH_ERROR:
        if (stryMutAct_9fa48("6598")) {} else {
          stryCov_9fa48("6598");
          return stryMutAct_9fa48("6599") ? {} : (stryCov_9fa48("6599"), {
            ...state,
            error: action.error
          });
        }
      default:
        if (stryMutAct_9fa48("6600")) {} else {
          stryCov_9fa48("6600");
          return state;
        }
    }
  }
};
export default reducer;