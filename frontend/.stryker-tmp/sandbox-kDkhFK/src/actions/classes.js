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
export const classFormHandler = stryMutAct_9fa48("267") ? () => undefined : (stryCov_9fa48("267"), (() => {
  const classFormHandler = item => stryMutAct_9fa48("268") ? {} : (stryCov_9fa48("268"), {
    type: actionTypes.CLASS_FORM_HANDLER,
    item
  });
  return classFormHandler;
})());
export const addClassScheduleStart = stryMutAct_9fa48("269") ? () => undefined : (stryCov_9fa48("269"), (() => {
  const addClassScheduleStart = item => stryMutAct_9fa48("270") ? {} : (stryCov_9fa48("270"), {
    type: actionTypes.ADD_CLASS_SCHEDULE_START,
    item
  });
  return addClassScheduleStart;
})());
export const addClassScheduleSuccess = stryMutAct_9fa48("271") ? () => undefined : (stryCov_9fa48("271"), (() => {
  const addClassScheduleSuccess = classSchedule => stryMutAct_9fa48("272") ? {} : (stryCov_9fa48("272"), {
    type: actionTypes.ADD_CLASS_SCHEDULE_SUCCESS,
    classSchedule
  });
  return addClassScheduleSuccess;
})());
export const getClassScheduleListStart = stryMutAct_9fa48("273") ? () => undefined : (stryCov_9fa48("273"), (() => {
  const getClassScheduleListStart = () => stryMutAct_9fa48("274") ? {} : (stryCov_9fa48("274"), {
    type: actionTypes.GET_CLASS_SCHEDULE_LIST_START
  });
  return getClassScheduleListStart;
})());
export const getClassScheduleListSuccess = stryMutAct_9fa48("275") ? () => undefined : (stryCov_9fa48("275"), (() => {
  const getClassScheduleListSuccess = classScheduler => stryMutAct_9fa48("276") ? {} : (stryCov_9fa48("276"), {
    type: actionTypes.GET_CLASS_SCHEDULE_LIST_SUCCESS,
    classScheduler
  });
  return getClassScheduleListSuccess;
})());
export const getClassScheduleByIdStart = stryMutAct_9fa48("277") ? () => undefined : (stryCov_9fa48("277"), (() => {
  const getClassScheduleByIdStart = id => stryMutAct_9fa48("278") ? {} : (stryCov_9fa48("278"), {
    type: actionTypes.GET_CLASS_SCHEDULE_BY_ID_START,
    id
  });
  return getClassScheduleByIdStart;
})());
export const getClassScheduleByIdSuccess = stryMutAct_9fa48("279") ? () => undefined : (stryCov_9fa48("279"), (() => {
  const getClassScheduleByIdSuccess = id => stryMutAct_9fa48("280") ? {} : (stryCov_9fa48("280"), {
    type: actionTypes.GET_CLASS_SCHEDULE_BY_ID_SUCCESS,
    id
  });
  return getClassScheduleByIdSuccess;
})());
export const deleteClassScheduleStart = stryMutAct_9fa48("281") ? () => undefined : (stryCov_9fa48("281"), (() => {
  const deleteClassScheduleStart = id => stryMutAct_9fa48("282") ? {} : (stryCov_9fa48("282"), {
    type: actionTypes.DELETE_CLASS_SCHEDULE_START,
    id
  });
  return deleteClassScheduleStart;
})());
export const deleteClassScheduleSuccess = stryMutAct_9fa48("283") ? () => undefined : (stryCov_9fa48("283"), (() => {
  const deleteClassScheduleSuccess = id => stryMutAct_9fa48("284") ? {} : (stryCov_9fa48("284"), {
    type: actionTypes.DELETE_CLASS_SCHEDULE_SUCCESS,
    id
  });
  return deleteClassScheduleSuccess;
})());
export const updateClassScheduleStart = stryMutAct_9fa48("285") ? () => undefined : (stryCov_9fa48("285"), (() => {
  const updateClassScheduleStart = item => stryMutAct_9fa48("286") ? {} : (stryCov_9fa48("286"), {
    type: actionTypes.UPDATE_CLASS_SCHEDULE_START,
    item
  });
  return updateClassScheduleStart;
})());
export const updateClassScheduleSuccess = stryMutAct_9fa48("287") ? () => undefined : (stryCov_9fa48("287"), (() => {
  const updateClassScheduleSuccess = classSchedule => stryMutAct_9fa48("288") ? {} : (stryCov_9fa48("288"), {
    type: actionTypes.UPDATE_CLASS_SCHEDULE_SUCCESS,
    classSchedule
  });
  return updateClassScheduleSuccess;
})());
export const clearClassScheduleStart = stryMutAct_9fa48("289") ? () => undefined : (stryCov_9fa48("289"), (() => {
  const clearClassScheduleStart = () => stryMutAct_9fa48("290") ? {} : (stryCov_9fa48("290"), {
    type: actionTypes.CLEAR_CLASS_SCHEDULE_START
  });
  return clearClassScheduleStart;
})());
export const clearClassScheduleSuccess = stryMutAct_9fa48("291") ? () => undefined : (stryCov_9fa48("291"), (() => {
  const clearClassScheduleSuccess = () => stryMutAct_9fa48("292") ? {} : (stryCov_9fa48("292"), {
    type: actionTypes.CLEAR_CLASS_SCHEDULE_SUCCESS
  });
  return clearClassScheduleSuccess;
})());
export const getPublicClassScheduleStart = stryMutAct_9fa48("293") ? () => undefined : (stryCov_9fa48("293"), (() => {
  const getPublicClassScheduleStart = () => stryMutAct_9fa48("294") ? {} : (stryCov_9fa48("294"), {
    type: actionTypes.GET_PUBLIC_CLASS_SCHEDULE_LIST_START
  });
  return getPublicClassScheduleStart;
})());
export const getPublicClassScheduleSuccess = stryMutAct_9fa48("295") ? () => undefined : (stryCov_9fa48("295"), (() => {
  const getPublicClassScheduleSuccess = classScheduler => stryMutAct_9fa48("296") ? {} : (stryCov_9fa48("296"), {
    type: actionTypes.GET_PUBLIC_CLASS_SCHEDULE_LIST_SUCCESS,
    classScheduler
  });
  return getPublicClassScheduleSuccess;
})());