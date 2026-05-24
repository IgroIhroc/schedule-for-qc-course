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
export const sortGroups = (groups, group, afterId) => {
  if (stryMutAct_9fa48("6352")) {
    {}
  } else {
    stryCov_9fa48("6352");
    let newGroups = groups;
    if (stryMutAct_9fa48("6354") ? false : stryMutAct_9fa48("6353") ? true : (stryCov_9fa48("6353", "6354"), afterId)) {
      if (stryMutAct_9fa48("6355")) {
        {}
      } else {
        stryCov_9fa48("6355");
        const afterGroupIndex = groups.findIndex(stryMutAct_9fa48("6356") ? () => undefined : (stryCov_9fa48("6356"), ({
          id
        }) => stryMutAct_9fa48("6359") ? id !== afterId : stryMutAct_9fa48("6358") ? false : stryMutAct_9fa48("6357") ? true : (stryCov_9fa48("6357", "6358", "6359"), id === afterId)));
        newGroups.splice(stryMutAct_9fa48("6360") ? afterGroupIndex - 1 : (stryCov_9fa48("6360"), afterGroupIndex + 1), 0, group);
      }
    } else {
      if (stryMutAct_9fa48("6361")) {
        {}
      } else {
        stryCov_9fa48("6361");
        newGroups = stryMutAct_9fa48("6362") ? [] : (stryCov_9fa48("6362"), [group, ...groups]);
      }
    }
    return newGroups;
  }
};