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
import '@testing-library/jest-dom/extend-expect';
const originalError = console.error;
console.error = (...args) => {
  if (stryMutAct_9fa48("8374")) {
    {}
  } else {
    stryCov_9fa48("8374");
    const msg = stryMutAct_9fa48("8377") ? args[0] && '' : stryMutAct_9fa48("8376") ? false : stryMutAct_9fa48("8375") ? true : (stryCov_9fa48("8375", "8376", "8377"), args[0] || (stryMutAct_9fa48("8378") ? "Stryker was here!" : (stryCov_9fa48("8378"), '')));

    // не валимо тести через jsdom / react / xhr помилки
    if (stryMutAct_9fa48("8381") ? typeof msg === 'string' || msg.includes('AggregateError') || msg.includes('XHR') : stryMutAct_9fa48("8380") ? false : stryMutAct_9fa48("8379") ? true : (stryCov_9fa48("8379", "8380", "8381"), (stryMutAct_9fa48("8383") ? typeof msg !== 'string' : stryMutAct_9fa48("8382") ? true : (stryCov_9fa48("8382", "8383"), typeof msg === (stryMutAct_9fa48("8384") ? "" : (stryCov_9fa48("8384"), 'string')))) && (stryMutAct_9fa48("8386") ? msg.includes('AggregateError') && msg.includes('XHR') : stryMutAct_9fa48("8385") ? true : (stryCov_9fa48("8385", "8386"), msg.includes(stryMutAct_9fa48("8387") ? "" : (stryCov_9fa48("8387"), 'AggregateError')) || msg.includes(stryMutAct_9fa48("8388") ? "" : (stryCov_9fa48("8388"), 'XHR')))))) {
      if (stryMutAct_9fa48("8389")) {
        {}
      } else {
        stryCov_9fa48("8389");
        return;
      }
    }
    originalError(...args);
  }
};