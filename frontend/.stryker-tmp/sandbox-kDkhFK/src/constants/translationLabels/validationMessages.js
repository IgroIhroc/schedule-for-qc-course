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
export const LESS_THAN_FIELD_MESSAGE = stryMutAct_9fa48("4862") ? "" : (stryCov_9fa48("4862"), 'validationMessages:less_than_field_message');
export const BIGGER_THAN_FIELD_MESSAGE = stryMutAct_9fa48("4863") ? "" : (stryCov_9fa48("4863"), 'validationMessages:bigger_than_field_message');
export const REQUIRED_MESSAGE = stryMutAct_9fa48("4864") ? "" : (stryCov_9fa48("4864"), 'validationMessages:required_message');
export const BIGGER_THAN_ZERO_MESSAGE = stryMutAct_9fa48("4865") ? "" : (stryCov_9fa48("4865"), 'validationMessages:bigger_than_zero_message');
export const BIGGER_THAN_THIS_YEAR_MESSAGE = stryMutAct_9fa48("4866") ? "" : (stryCov_9fa48("4866"), 'validationMessages:bigger_than_this_year_message');
export const BIGGER_THAN_CHAR_MESSAGE = stryMutAct_9fa48("4867") ? "" : (stryCov_9fa48("4867"), 'validationMessages:bigger_than_char_message');
export const LESS_THAN_CHAR_MESSAGE = stryMutAct_9fa48("4868") ? "" : (stryCov_9fa48("4868"), 'validationMessages:less_than_char_message');
export const PASSWORD_MESSAGE = stryMutAct_9fa48("4869") ? "" : (stryCov_9fa48("4869"), 'validationMessages:password');
export const UNIQUE_ERROR_MESSAGE = stryMutAct_9fa48("4870") ? "" : (stryCov_9fa48("4870"), 'validationMessages:unique_error_message');
export const INTERSECT_TIME_ERROR_MESSAGE = stryMutAct_9fa48("4871") ? "" : (stryCov_9fa48("4871"), 'validationMessages:intersect_time_error_message');
export const EMAIL_MESSAGE = stryMutAct_9fa48("4872") ? "" : (stryCov_9fa48("4872"), 'validationMessages:email');
export const URL_MESSAGE = stryMutAct_9fa48("4873") ? "" : (stryCov_9fa48("4873"), 'validationMessages:url');