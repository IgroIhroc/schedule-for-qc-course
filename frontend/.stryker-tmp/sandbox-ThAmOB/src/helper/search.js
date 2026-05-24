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
import { GROUPED } from '../constants/common';
export const search = (items, term, arr) => {
  if (stryMutAct_9fa48("6302")) {
    {}
  } else {
    stryCov_9fa48("6302");
    const termTmp = stryMutAct_9fa48("6303") ? term : (stryCov_9fa48("6303"), term.trim());
    if (stryMutAct_9fa48("6305") ? false : stryMutAct_9fa48("6304") ? true : (stryCov_9fa48("6304", "6305"), isEmpty(termTmp))) return items;
    return stryMutAct_9fa48("6306") ? items : (stryCov_9fa48("6306"), items.filter(item => {
      if (stryMutAct_9fa48("6307")) {
        {}
      } else {
        stryCov_9fa48("6307");
        if (stryMutAct_9fa48("6310") ? item.grouped || GROUPED.includes(termTmp.toLowerCase()) : stryMutAct_9fa48("6309") ? false : stryMutAct_9fa48("6308") ? true : (stryCov_9fa48("6308", "6309", "6310"), item.grouped && GROUPED.includes(stryMutAct_9fa48("6311") ? termTmp.toUpperCase() : (stryCov_9fa48("6311"), termTmp.toLowerCase())))) return stryMutAct_9fa48("6312") ? false : (stryCov_9fa48("6312"), true);
        for (let i = 0; stryMutAct_9fa48("6315") ? i >= arr.length : stryMutAct_9fa48("6314") ? i <= arr.length : stryMutAct_9fa48("6313") ? false : (stryCov_9fa48("6313", "6314", "6315"), i < arr.length); stryMutAct_9fa48("6316") ? i -= 1 : (stryCov_9fa48("6316"), i += 1)) {
          if (stryMutAct_9fa48("6317")) {
            {}
          } else {
            stryCov_9fa48("6317");
            let data = item[arr[i]];
            if (stryMutAct_9fa48("6319") ? false : stryMutAct_9fa48("6318") ? true : (stryCov_9fa48("6318", "6319"), arr[i].includes(stryMutAct_9fa48("6320") ? "" : (stryCov_9fa48("6320"), '.')))) {
              if (stryMutAct_9fa48("6321")) {
                {}
              } else {
                stryCov_9fa48("6321");
                const [objectName, property] = arr[i].split(stryMutAct_9fa48("6322") ? "" : (stryCov_9fa48("6322"), '.'));
                data = stryMutAct_9fa48("6323") ? item[objectName][property] : (stryCov_9fa48("6323"), item[objectName]?.[property]);
              }
            }
            if (stryMutAct_9fa48("6327") ? String(data).toLowerCase().indexOf(termTmp.toLowerCase()) <= -1 : stryMutAct_9fa48("6326") ? String(data).toLowerCase().indexOf(termTmp.toLowerCase()) >= -1 : stryMutAct_9fa48("6325") ? false : stryMutAct_9fa48("6324") ? true : (stryCov_9fa48("6324", "6325", "6326", "6327"), (stryMutAct_9fa48("6328") ? String(data).toUpperCase().indexOf(termTmp.toLowerCase()) : (stryCov_9fa48("6328"), String(data).toLowerCase().indexOf(stryMutAct_9fa48("6329") ? termTmp.toUpperCase() : (stryCov_9fa48("6329"), termTmp.toLowerCase())))) > (stryMutAct_9fa48("6330") ? +1 : (stryCov_9fa48("6330"), -1)))) return stryMutAct_9fa48("6331") ? false : (stryCov_9fa48("6331"), true);
          }
        }
        return stryMutAct_9fa48("6332") ? true : (stryCov_9fa48("6332"), false);
      }
    }));
  }
};