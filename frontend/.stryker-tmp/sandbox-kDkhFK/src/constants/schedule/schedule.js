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
import { COMMON_TABLE_COLUMNS_SIZE_BASE, COMMON_TABLE_COLUMNS_SIZE_LARGE, COMMON_TABLE_COLUMNS_SIZE_SMALL } from '../translationLabels/common';
export const columnSizeArray = stryMutAct_9fa48("4514") ? [] : (stryCov_9fa48("4514"), [stryMutAct_9fa48("4515") ? {} : (stryCov_9fa48("4515"), {
  value: stryMutAct_9fa48("4516") ? "" : (stryCov_9fa48("4516"), 'sm'),
  label: COMMON_TABLE_COLUMNS_SIZE_SMALL
}), stryMutAct_9fa48("4517") ? {} : (stryCov_9fa48("4517"), {
  value: stryMutAct_9fa48("4518") ? "" : (stryCov_9fa48("4518"), 'base'),
  label: COMMON_TABLE_COLUMNS_SIZE_BASE
}), stryMutAct_9fa48("4519") ? {} : (stryCov_9fa48("4519"), {
  value: stryMutAct_9fa48("4520") ? "" : (stryCov_9fa48("4520"), 'lg'),
  label: COMMON_TABLE_COLUMNS_SIZE_LARGE
})]);