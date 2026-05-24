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
import { get } from 'lodash';
import { FULL, GROUP, TEACHER, DEPARTMENT } from '../constants/scheduleTypes';
export const getScheduleType = values => {
  if (stryMutAct_9fa48("5558")) {
    {}
  } else {
    stryCov_9fa48("5558");
    if (stryMutAct_9fa48("5561") ? false : stryMutAct_9fa48("5560") ? true : stryMutAct_9fa48("5559") ? values : (stryCov_9fa48("5559", "5560", "5561"), !values)) return FULL;
    const group = get(values, stryMutAct_9fa48("5562") ? "" : (stryCov_9fa48("5562"), 'group'));
    const teacher = get(values, stryMutAct_9fa48("5563") ? "" : (stryCov_9fa48("5563"), 'teacher'));
    const department = get(values, stryMutAct_9fa48("5564") ? "" : (stryCov_9fa48("5564"), 'department'));
    if (stryMutAct_9fa48("5566") ? false : stryMutAct_9fa48("5565") ? true : (stryCov_9fa48("5565", "5566"), get(group, stryMutAct_9fa48("5567") ? "" : (stryCov_9fa48("5567"), 'id')))) {
      if (stryMutAct_9fa48("5568")) {
        {}
      } else {
        stryCov_9fa48("5568");
        return GROUP;
      }
    }
    if (stryMutAct_9fa48("5570") ? false : stryMutAct_9fa48("5569") ? true : (stryCov_9fa48("5569", "5570"), get(teacher, stryMutAct_9fa48("5571") ? "" : (stryCov_9fa48("5571"), 'id')))) {
      if (stryMutAct_9fa48("5572")) {
        {}
      } else {
        stryCov_9fa48("5572");
        return TEACHER;
      }
    }
    if (stryMutAct_9fa48("5574") ? false : stryMutAct_9fa48("5573") ? true : (stryCov_9fa48("5573", "5574"), get(department, stryMutAct_9fa48("5575") ? "" : (stryCov_9fa48("5575"), 'id')))) {
      if (stryMutAct_9fa48("5576")) {
        {}
      } else {
        stryCov_9fa48("5576");
        return DEPARTMENT;
      }
    }
    return FULL;
  }
};