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
import { isNil } from 'lodash';
import { places } from '../constants/places';
import { getTeacherWithShortPosition } from './renderTeacher';
import i18n from '../i18n';
export const prepareLessonCardCell = card => {
  if (stryMutAct_9fa48("5591")) {
    {}
  } else {
    stryCov_9fa48("5591");
    let inner = stryMutAct_9fa48("5592") ? "Stryker was here!" : (stryCov_9fa48("5592"), '');
    if (stryMutAct_9fa48("5595") ? false : stryMutAct_9fa48("5594") ? true : stryMutAct_9fa48("5593") ? isNil(card) : (stryCov_9fa48("5593", "5594", "5595"), !isNil(card))) {
      if (stryMutAct_9fa48("5596")) {
        {}
      } else {
        stryCov_9fa48("5596");
        inner = stryMutAct_9fa48("5597") ? `` : (stryCov_9fa48("5597"), `${getTeacherWithShortPosition(card.teacher)}\n${card.subjectForSite}\n`);
      }
    }
    return inner;
  }
};
export const prepareLessonSubCardCell = (card, place) => {
  if (stryMutAct_9fa48("5598")) {
    {}
  } else {
    stryCov_9fa48("5598");
    let inner = stryMutAct_9fa48("5599") ? "Stryker was here!" : (stryCov_9fa48("5599"), '');
    if (stryMutAct_9fa48("5602") ? false : stryMutAct_9fa48("5601") ? true : stryMutAct_9fa48("5600") ? isNil(card) : (stryCov_9fa48("5600", "5601", "5602"), !isNil(card))) {
      if (stryMutAct_9fa48("5603")) {
        {}
      } else {
        stryCov_9fa48("5603");
        const room = (stryMutAct_9fa48("5606") ? place === places.ONLINE : stryMutAct_9fa48("5605") ? false : stryMutAct_9fa48("5604") ? true : (stryCov_9fa48("5604", "5605", "5606"), place !== places.ONLINE)) ? card.room : stryMutAct_9fa48("5607") ? "Stryker was here!" : (stryCov_9fa48("5607"), '');
        inner = i18n.t(stryMutAct_9fa48("5608") ? `` : (stryCov_9fa48("5608"), `formElements:lesson_type_${stryMutAct_9fa48("5609") ? card.lessonType.toUpperCase() : (stryCov_9fa48("5609"), card.lessonType.toLowerCase())}_label`));
        if (stryMutAct_9fa48("5612") ? room === '' : stryMutAct_9fa48("5611") ? false : stryMutAct_9fa48("5610") ? true : (stryCov_9fa48("5610", "5611", "5612"), room !== (stryMutAct_9fa48("5613") ? "Stryker was here!" : (stryCov_9fa48("5613"), '')))) {
          if (stryMutAct_9fa48("5614")) {
            {}
          } else {
            stryCov_9fa48("5614");
            inner = stryMutAct_9fa48("5615") ? `` : (stryCov_9fa48("5615"), `(${inner}, ${card.room.name})`);
          }
        }
      }
    }
    return inner;
  }
};