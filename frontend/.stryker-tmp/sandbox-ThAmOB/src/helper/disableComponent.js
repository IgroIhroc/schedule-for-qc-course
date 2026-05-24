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
import { isEmpty, isNil } from 'lodash';
import { CANCEL_BUTTON_TITLE, CLEAR_BUTTON_LABEL } from '../constants/translationLabels/formElements';
export const setDisableButton = (pristine, submitting, id) => {
  if (stryMutAct_9fa48("5513")) {
    {}
  } else {
    stryCov_9fa48("5513");
    if (stryMutAct_9fa48("5516") ? !pristine && !isNil(id) : stryMutAct_9fa48("5515") ? false : stryMutAct_9fa48("5514") ? true : (stryCov_9fa48("5514", "5515", "5516"), (stryMutAct_9fa48("5517") ? pristine : (stryCov_9fa48("5517"), !pristine)) || (stryMutAct_9fa48("5518") ? isNil(id) : (stryCov_9fa48("5518"), !isNil(id))))) {
      if (stryMutAct_9fa48("5519")) {
        {}
      } else {
        stryCov_9fa48("5519");
        return stryMutAct_9fa48("5520") ? true : (stryCov_9fa48("5520"), false);
      }
    }
    return stryMutAct_9fa48("5521") ? false : (stryCov_9fa48("5521"), true);
  }
};
export const getClearOrCancelTitle = (id, t) => {
  if (stryMutAct_9fa48("5522")) {
    {}
  } else {
    stryCov_9fa48("5522");
    return (stryMutAct_9fa48("5525") ? id !== undefined : stryMutAct_9fa48("5524") ? false : stryMutAct_9fa48("5523") ? true : (stryCov_9fa48("5523", "5524", "5525"), id === undefined)) ? t(CLEAR_BUTTON_LABEL) : t(CANCEL_BUTTON_TITLE);
  }
};
export const setDisabledSaveButtonSemester = (pristine, submitting, semester, selectedGroups) => {
  if (stryMutAct_9fa48("5526")) {
    {}
  } else {
    stryCov_9fa48("5526");
    if (stryMutAct_9fa48("5529") ? !isEmpty(semester) || semester.id : stryMutAct_9fa48("5528") ? false : stryMutAct_9fa48("5527") ? true : (stryCov_9fa48("5527", "5528", "5529"), (stryMutAct_9fa48("5530") ? isEmpty(semester) : (stryCov_9fa48("5530"), !isEmpty(semester))) && semester.id)) {
      if (stryMutAct_9fa48("5531")) {
        {}
      } else {
        stryCov_9fa48("5531");
        const beginGroups = semester.semester_groups.map(stryMutAct_9fa48("5532") ? () => undefined : (stryCov_9fa48("5532"), item => item.id));
        const restGroups = selectedGroups.map(stryMutAct_9fa48("5533") ? () => undefined : (stryCov_9fa48("5533"), item => item.id));
        const newGroups = stryMutAct_9fa48("5534") ? restGroups : (stryCov_9fa48("5534"), restGroups.filter(stryMutAct_9fa48("5535") ? () => undefined : (stryCov_9fa48("5535"), group => stryMutAct_9fa48("5536") ? beginGroups.includes(group) : (stryCov_9fa48("5536"), !beginGroups.includes(group)))));
        const deleteGroups = stryMutAct_9fa48("5537") ? beginGroups : (stryCov_9fa48("5537"), beginGroups.filter(stryMutAct_9fa48("5538") ? () => undefined : (stryCov_9fa48("5538"), group => stryMutAct_9fa48("5539") ? restGroups.includes(group) : (stryCov_9fa48("5539"), !restGroups.includes(group)))));
        const isChosenGroup = stryMutAct_9fa48("5542") ? (isEmpty(semester.semester_groups) || !isEmpty(newGroups)) && !isEmpty(deleteGroups) : stryMutAct_9fa48("5541") ? false : stryMutAct_9fa48("5540") ? true : (stryCov_9fa48("5540", "5541", "5542"), (stryMutAct_9fa48("5544") ? isEmpty(semester.semester_groups) && !isEmpty(newGroups) : stryMutAct_9fa48("5543") ? false : (stryCov_9fa48("5543", "5544"), isEmpty(semester.semester_groups) || (stryMutAct_9fa48("5545") ? isEmpty(newGroups) : (stryCov_9fa48("5545"), !isEmpty(newGroups))))) || (stryMutAct_9fa48("5546") ? isEmpty(deleteGroups) : (stryCov_9fa48("5546"), !isEmpty(deleteGroups))));
        return stryMutAct_9fa48("5549") ? !isChosenGroup || pristine || submitting : stryMutAct_9fa48("5548") ? false : stryMutAct_9fa48("5547") ? true : (stryCov_9fa48("5547", "5548", "5549"), (stryMutAct_9fa48("5550") ? isChosenGroup : (stryCov_9fa48("5550"), !isChosenGroup)) && (stryMutAct_9fa48("5552") ? pristine && submitting : stryMutAct_9fa48("5551") ? true : (stryCov_9fa48("5551", "5552"), pristine || submitting)));
      }
    }
    return stryMutAct_9fa48("5555") ? pristine && submitting : stryMutAct_9fa48("5554") ? false : stryMutAct_9fa48("5553") ? true : (stryCov_9fa48("5553", "5554", "5555"), pristine || submitting);
  }
};