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
const uiReducer = (state = {}, action) => {
  if (stryMutAct_9fa48("7311")) {
    {}
  } else {
    stryCov_9fa48("7311");
    switch (action.type) {
      case stryMutAct_9fa48("7313") ? "" : (stryCov_9fa48("7313"), 'SNACKBAR_SUCCESS'):
        if (stryMutAct_9fa48("7312")) {} else {
          stryCov_9fa48("7312");
          return stryMutAct_9fa48("7314") ? {} : (stryCov_9fa48("7314"), {
            ...state,
            successSnackbarOpen: stryMutAct_9fa48("7315") ? false : (stryCov_9fa48("7315"), true),
            successSnackbarMessage: action.message
          });
        }
      case stryMutAct_9fa48("7317") ? "" : (stryCov_9fa48("7317"), 'SNACKBAR_CLEAR'):
        if (stryMutAct_9fa48("7316")) {} else {
          stryCov_9fa48("7316");
          return stryMutAct_9fa48("7318") ? {} : (stryCov_9fa48("7318"), {
            ...state,
            successSnackbarOpen: stryMutAct_9fa48("7319") ? true : (stryCov_9fa48("7319"), false),
            errorSnackbarOpen: stryMutAct_9fa48("7320") ? true : (stryCov_9fa48("7320"), false),
            infoSnackbarOpen: stryMutAct_9fa48("7321") ? true : (stryCov_9fa48("7321"), false)
          });
        }
      default:
        if (stryMutAct_9fa48("7322")) {} else {
          stryCov_9fa48("7322");
          return state;
        }
    }
  }
};
export default uiReducer;