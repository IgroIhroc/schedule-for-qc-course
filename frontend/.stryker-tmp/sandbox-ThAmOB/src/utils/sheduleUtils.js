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
import { isEmpty } from 'lodash';
const getScheduleByType = stryMutAct_9fa48("8847") ? () => undefined : (stryCov_9fa48("8847"), (() => {
  const getScheduleByType = (entityId, semesterId) => ({});
  return getScheduleByType;
})());
const isNotReadySchedule = stryMutAct_9fa48("8848") ? () => undefined : (stryCov_9fa48("8848"), (() => {
  const isNotReadySchedule = (schedule, loading) => stryMutAct_9fa48("8851") ? isEmpty(schedule) || !loading : stryMutAct_9fa48("8850") ? false : stryMutAct_9fa48("8849") ? true : (stryCov_9fa48("8849", "8850", "8851"), isEmpty(schedule) && (stryMutAct_9fa48("8852") ? loading : (stryCov_9fa48("8852"), !loading)));
  return isNotReadySchedule;
})());
const filterClassesArray = inputArray => {
  if (stryMutAct_9fa48("8853")) {
    {}
  } else {
    stryCov_9fa48("8853");
    return stryMutAct_9fa48("8854") ? inputArray : (stryCov_9fa48("8854"), inputArray.filter((item, index, array) => {
      if (stryMutAct_9fa48("8855")) {
        {}
      } else {
        stryCov_9fa48("8855");
        const resIndex = array.findIndex(stryMutAct_9fa48("8856") ? () => undefined : (stryCov_9fa48("8856"), findItem => stryMutAct_9fa48("8859") ? findItem.id !== item.id : stryMutAct_9fa48("8858") ? false : stryMutAct_9fa48("8857") ? true : (stryCov_9fa48("8857", "8858", "8859"), findItem.id === item.id)));
        return stryMutAct_9fa48("8862") ? resIndex !== index : stryMutAct_9fa48("8861") ? false : stryMutAct_9fa48("8860") ? true : (stryCov_9fa48("8860", "8861", "8862"), resIndex === index);
      }
    }));
  }
};
export { getScheduleByType, isNotReadySchedule, filterClassesArray };