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
const initialState = stryMutAct_9fa48("7296") ? {} : (stryCov_9fa48("7296"), {
  temporarySchedules: stryMutAct_9fa48("7297") ? ["Stryker was here"] : (stryCov_9fa48("7297"), []),
  temporarySchedule: {},
  vacation: {},
  schedulesAndTemporarySchedules: stryMutAct_9fa48("7298") ? ["Stryker was here"] : (stryCov_9fa48("7298"), []),
  teacherId: null,
  changedScheduleId: null
});
const reducer = (state = initialState, action) => {
  if (stryMutAct_9fa48("7299")) {
    {}
  } else {
    stryCov_9fa48("7299");
    switch (action.type) {
      case actionTypes.SET_TEMPORARY_SCHEDULES:
        if (stryMutAct_9fa48("7300")) {} else {
          stryCov_9fa48("7300");
          return stryMutAct_9fa48("7301") ? {} : (stryCov_9fa48("7301"), {
            ...state,
            temporarySchedules: action.result
          });
        }
      case actionTypes.SET_SCHEDULES_AND_TEMPORARY_SCHEDULES:
        if (stryMutAct_9fa48("7302")) {} else {
          stryCov_9fa48("7302");
          return stryMutAct_9fa48("7303") ? {} : (stryCov_9fa48("7303"), {
            ...state,
            schedulesAndTemporarySchedules: action.result
          });
        }
      case actionTypes.SELECT_TEMPORARY_SCHEDULE:
        if (stryMutAct_9fa48("7304")) {} else {
          stryCov_9fa48("7304");
          return stryMutAct_9fa48("7305") ? {} : (stryCov_9fa48("7305"), {
            ...state,
            temporarySchedule: action.result
          });
        }
      case actionTypes.SELECT_VACATION:
        if (stryMutAct_9fa48("7306")) {} else {
          stryCov_9fa48("7306");
          return stryMutAct_9fa48("7307") ? {} : (stryCov_9fa48("7307"), {
            ...state,
            vacation: action.result
          });
        }
      case actionTypes.SELECT_TEACHER_ID:
        if (stryMutAct_9fa48("7308")) {} else {
          stryCov_9fa48("7308");
          return stryMutAct_9fa48("7309") ? {} : (stryCov_9fa48("7309"), {
            ...state,
            teacherId: action.result
          });
        }
      default:
        if (stryMutAct_9fa48("7310")) {} else {
          stryCov_9fa48("7310");
          return state;
        }
    }
  }
};
export default reducer;