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
import i18n from '../i18n';
import { FORM_GROUP_LABEL, FORM_STUDENT_LABEL } from '../constants/translationLabels/formElements';
import { BACK_END_ACTION_SUCCESS, BACK_END_SUCCESS_OPERATION } from '../constants/translationLabels/serviceMessages';
import { GROUP, STUDENT } from '../constants/names';
export const createErrorMessage = stryMutAct_9fa48("8811") ? () => undefined : (stryCov_9fa48("8811"), (() => {
  const createErrorMessage = ({
    response
  }) => response ? i18n.t(response.data.message) : stryMutAct_9fa48("8812") ? "" : (stryCov_9fa48("8812"), 'Error');
  return createErrorMessage;
})());
export const createMessage = stryMutAct_9fa48("8813") ? () => undefined : (stryCov_9fa48("8813"), (() => {
  const createMessage = (message, cardTypeMessage, actionTypeMessage) => i18n.t(message, stryMutAct_9fa48("8814") ? {} : (stryCov_9fa48("8814"), {
    cardType: i18n.t(cardTypeMessage),
    actionType: i18n.t(actionTypeMessage)
  }));
  return createMessage;
})());
export const createDynamicMessage = (typeMessage, message) => {
  if (stryMutAct_9fa48("8815")) {
    {}
  } else {
    stryCov_9fa48("8815");
    switch (typeMessage) {
      case GROUP:
        if (stryMutAct_9fa48("8816")) {} else {
          stryCov_9fa48("8816");
          return i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8817") ? {} : (stryCov_9fa48("8817"), {
            cardType: i18n.t(FORM_GROUP_LABEL),
            actionType: i18n.t(message)
          }));
        }
      case STUDENT:
        if (stryMutAct_9fa48("8818")) {} else {
          stryCov_9fa48("8818");
          return i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8819") ? {} : (stryCov_9fa48("8819"), {
            cardType: i18n.t(FORM_STUDENT_LABEL),
            actionType: i18n.t(message)
          }));
        }
      default:
        if (stryMutAct_9fa48("8820")) {} else {
          stryCov_9fa48("8820");
          return i18n.t(BACK_END_ACTION_SUCCESS, stryMutAct_9fa48("8821") ? {} : (stryCov_9fa48("8821"), {
            actionType: i18n.t(message)
          }));
        }
    }
  }
};