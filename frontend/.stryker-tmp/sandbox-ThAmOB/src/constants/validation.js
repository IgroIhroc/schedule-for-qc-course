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
const validation = stryMutAct_9fa48("4878") ? {} : (stryCov_9fa48("4878"), {
  EMAIL: stryMutAct_9fa48("4886") ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[^A-Z]{2,4}$/i : stryMutAct_9fa48("4885") ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]$/i : stryMutAct_9fa48("4884") ? /^[A-Z0-9._%+-]+@[^A-Z0-9.-]+\.[A-Z]{2,4}$/i : stryMutAct_9fa48("4883") ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]\.[A-Z]{2,4}$/i : stryMutAct_9fa48("4882") ? /^[^A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i : stryMutAct_9fa48("4881") ? /^[A-Z0-9._%+-]@[A-Z0-9.-]+\.[A-Z]{2,4}$/i : stryMutAct_9fa48("4880") ? /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i : stryMutAct_9fa48("4879") ? /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i : (stryCov_9fa48("4879", "4880", "4881", "4882", "4883", "4884", "4885", "4886"), /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i),
  PASSWORD: stryMutAct_9fa48("4904") ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).$/ : stryMutAct_9fa48("4903") ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[^!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4902") ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4901") ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4900") ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4899") ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4898") ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4897") ? /^(?=.*\d)(?=.*[a-z])(?=.*[^A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4896") ? /^(?=.*\d)(?=.*[a-z])(?=.[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4895") ? /^(?=.*\d)(?=.*[a-z])(?!.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4894") ? /^(?=.*\d)(?=.*[^a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4893") ? /^(?=.*\d)(?=.[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4892") ? /^(?=.*\d)(?!.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4891") ? /^(?=.*\D)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4890") ? /^(?=.\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4889") ? /^(?!.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : stryMutAct_9fa48("4888") ? /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}/ : stryMutAct_9fa48("4887") ? /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/ : (stryCov_9fa48("4887", "4888", "4889", "4890", "4891", "4892", "4893", "4894", "4895", "4896", "4897", "4898", "4899", "4900", "4901", "4902", "4903", "4904"), /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?=.*[!@#$%^&*]).{8,}$/)
});
export { validation };