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
export const sortRooms = (rooms, room, afterId) => {
  if (stryMutAct_9fa48("6363")) {
    {}
  } else {
    stryCov_9fa48("6363");
    let newRooms = rooms;
    if (stryMutAct_9fa48("6365") ? false : stryMutAct_9fa48("6364") ? true : (stryCov_9fa48("6364", "6365"), afterId)) {
      if (stryMutAct_9fa48("6366")) {
        {}
      } else {
        stryCov_9fa48("6366");
        const afterRoomIndex = rooms.findIndex(stryMutAct_9fa48("6367") ? () => undefined : (stryCov_9fa48("6367"), ({
          id
        }) => stryMutAct_9fa48("6370") ? id !== afterId : stryMutAct_9fa48("6369") ? false : stryMutAct_9fa48("6368") ? true : (stryCov_9fa48("6368", "6369", "6370"), id === afterId)));
        newRooms.splice(stryMutAct_9fa48("6371") ? afterRoomIndex - 1 : (stryCov_9fa48("6371"), afterRoomIndex + 1), 0, room);
      }
    } else {
      if (stryMutAct_9fa48("6372")) {
        {}
      } else {
        stryCov_9fa48("6372");
        newRooms = stryMutAct_9fa48("6373") ? [] : (stryCov_9fa48("6373"), [room, ...rooms]);
      }
    }
    return newRooms;
  }
};