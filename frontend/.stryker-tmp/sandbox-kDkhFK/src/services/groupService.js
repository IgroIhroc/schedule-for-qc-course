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
import { store } from '../store';
import axios from '../helper/axios';
import { GROUP_URL } from '../constants/axios';
import { GROUP_FORM } from '../constants/reduxForms';
import { selectGroupSuccess, showAllGroupsSuccess, updateGroupSuccess } from '../actions/index';
import { errorHandler, successHandler } from '../helper/handlerAxios';
import i18n from '../i18n';
import { resetFormHandler } from '../helper/formHelper';
import { BACK_END_SUCCESS_OPERATION, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { FORM_GROUP_LABEL } from '../constants/translationLabels/formElements';
export const showAllGroupsService = () => {
  if (stryMutAct_9fa48("8089")) {
    {}
  } else {
    stryCov_9fa48("8089");
    axios.get(GROUP_URL).then(response => {
      if (stryMutAct_9fa48("8090")) {
        {}
      } else {
        stryCov_9fa48("8090");
        store.dispatch(showAllGroupsSuccess(response.data));
      }
    }).catch(stryMutAct_9fa48("8091") ? () => undefined : (stryCov_9fa48("8091"), error => errorHandler(error)));
  }
};
export const selectGroupService = groupId => {
  if (stryMutAct_9fa48("8092")) {
    {}
  } else {
    stryCov_9fa48("8092");
    store.dispatch(selectGroupSuccess(groupId));
  }
};
export const updateGroupService = data => {
  if (stryMutAct_9fa48("8093")) {
    {}
  } else {
    stryCov_9fa48("8093");
    return axios.put(GROUP_URL, data).then(response => {
      if (stryMutAct_9fa48("8094")) {
        {}
      } else {
        stryCov_9fa48("8094");
        store.dispatch(updateGroupSuccess(response.data));
        selectGroupService(null);
        // getDisabledGroupsService();
        // showAllGroupsService();
        resetFormHandler(GROUP_FORM);
        successHandler(i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8095") ? {} : (stryCov_9fa48("8095"), {
          cardType: i18n.t(FORM_GROUP_LABEL),
          actionType: i18n.t(UPDATED_LABEL)
        })));
      }
    }).catch(stryMutAct_9fa48("8096") ? () => undefined : (stryCov_9fa48("8096"), error => errorHandler(error)));
  }
};