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
export const setLoading = stryMutAct_9fa48("375") ? () => undefined : (stryCov_9fa48("375"), (() => {
  const setLoading = payload => stryMutAct_9fa48("376") ? {} : (stryCov_9fa48("376"), {
    type: actionTypes.SET_LOADING_INDICATOR,
    payload
  });
  return setLoading;
})());
export const setScheduleLoading = stryMutAct_9fa48("377") ? () => undefined : (stryCov_9fa48("377"), (() => {
  const setScheduleLoading = payload => stryMutAct_9fa48("378") ? {} : (stryCov_9fa48("378"), {
    type: actionTypes.SET_SCHEDULE_LOADING_INDICATOR,
    payload
  });
  return setScheduleLoading;
})());
export const setMainScheduleLoading = stryMutAct_9fa48("379") ? () => undefined : (stryCov_9fa48("379"), (() => {
  const setMainScheduleLoading = payload => stryMutAct_9fa48("380") ? {} : (stryCov_9fa48("380"), {
    type: actionTypes.SET_MAIN_SCHEDULE_LOADING_INDICATOR,
    payload
  });
  return setMainScheduleLoading;
})());
export const setSemesterLoading = stryMutAct_9fa48("381") ? () => undefined : (stryCov_9fa48("381"), (() => {
  const setSemesterLoading = payload => stryMutAct_9fa48("382") ? {} : (stryCov_9fa48("382"), {
    type: actionTypes.SET_SEMESTER_LOADING_INDICATOR,
    payload
  });
  return setSemesterLoading;
})());
export const setStudentsLoading = stryMutAct_9fa48("383") ? () => undefined : (stryCov_9fa48("383"), (() => {
  const setStudentsLoading = payload => stryMutAct_9fa48("384") ? {} : (stryCov_9fa48("384"), {
    type: actionTypes.SET_STUDENTS_LOADING_INDICATOR,
    payload
  });
  return setStudentsLoading;
})());
export const setRoomsLoading = stryMutAct_9fa48("385") ? () => undefined : (stryCov_9fa48("385"), (() => {
  const setRoomsLoading = payload => stryMutAct_9fa48("386") ? {} : (stryCov_9fa48("386"), {
    type: actionTypes.SET_ROOMS_LOADING_INDICATOR,
    payload
  });
  return setRoomsLoading;
})());
export const setAuthLoading = stryMutAct_9fa48("387") ? () => undefined : (stryCov_9fa48("387"), (() => {
  const setAuthLoading = payload => stryMutAct_9fa48("388") ? {} : (stryCov_9fa48("388"), {
    type: actionTypes.SET_AUTH_LOADING_INDICATOR,
    payload
  });
  return setAuthLoading;
})());
export const setScheduleOperationLoading = stryMutAct_9fa48("389") ? () => undefined : (stryCov_9fa48("389"), (() => {
  const setScheduleOperationLoading = payload => stryMutAct_9fa48("390") ? {} : (stryCov_9fa48("390"), {
    type: actionTypes.SET_SCHEDULE_OPERATION_LOADING,
    payload
  });
  return setScheduleOperationLoading;
})());