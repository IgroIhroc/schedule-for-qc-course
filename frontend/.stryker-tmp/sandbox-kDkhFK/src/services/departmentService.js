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
import axios from '../helper/axios';
import { DEPARTMENT_URL } from '../constants/axios';
import { store } from '../store';
import { resetFormHandler } from '../helper/formHelper';
import { DEPARTMENT_FORM } from '../constants/reduxForms';
import { errorHandler, successHandler } from '../helper/handlerAxios';
import i18n from '../i18n';
import { addDepartment, clearDepartmentForm, deleteDepartment, getAllDepartments, getDepartItemById, getDisabledDepartments, setDisabledDepartment, setEnabledDepartment, updateDepart } from '../actions/departments';
import { BACK_END_SUCCESS_OPERATION, CREATED_LABEL, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { FORM_DEPARTMENT_LABEL } from '../constants/translationLabels/formElements';
export const createDepartmentService = data => {
  if (stryMutAct_9fa48("8059")) {
    {}
  } else {
    stryCov_9fa48("8059");
    axios.post(DEPARTMENT_URL, data).then(response => {
      if (stryMutAct_9fa48("8060")) {
        {}
      } else {
        stryCov_9fa48("8060");
        store.dispatch(addDepartment(response.data));
        resetFormHandler(DEPARTMENT_FORM);
        successHandler(i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8061") ? {} : (stryCov_9fa48("8061"), {
          cardType: i18n.t(FORM_DEPARTMENT_LABEL),
          actionType: i18n.t(CREATED_LABEL)
        })));
      }
    }).catch(stryMutAct_9fa48("8062") ? () => undefined : (stryCov_9fa48("8062"), error => errorHandler(error)));
  }
};
export const getAllDepartmentsService = () => {
  if (stryMutAct_9fa48("8063")) {
    {}
  } else {
    stryCov_9fa48("8063");
    axios.get(DEPARTMENT_URL).then(response => {
      if (stryMutAct_9fa48("8064")) {
        {}
      } else {
        stryCov_9fa48("8064");
        store.dispatch(getAllDepartments(response.data));
      }
    }).catch(stryMutAct_9fa48("8065") ? () => undefined : (stryCov_9fa48("8065"), error => errorHandler(error)));
  }
};
export const getDisabledDepartmentsService = () => {
  if (stryMutAct_9fa48("8066")) {
    {}
  } else {
    stryCov_9fa48("8066");
    axios.get(stryMutAct_9fa48("8067") ? `` : (stryCov_9fa48("8067"), `${DEPARTMENT_URL}/disabled`)).then(response => {
      if (stryMutAct_9fa48("8068")) {
        {}
      } else {
        stryCov_9fa48("8068");
        store.dispatch(getDisabledDepartments(response.data));
      }
    }).catch(stryMutAct_9fa48("8069") ? () => undefined : (stryCov_9fa48("8069"), error => errorHandler(error)));
  }
};
export const setDisabledDepartmentService = data => {
  if (stryMutAct_9fa48("8070")) {
    {}
  } else {
    stryCov_9fa48("8070");
    axios.put(stryMutAct_9fa48("8071") ? `` : (stryCov_9fa48("8071"), `${DEPARTMENT_URL}`), data).then(response => {
      if (stryMutAct_9fa48("8072")) {
        {}
      } else {
        stryCov_9fa48("8072");
        store.dispatch(setDisabledDepartment(response.data));
      }
    }).catch(stryMutAct_9fa48("8073") ? () => undefined : (stryCov_9fa48("8073"), error => errorHandler(error)));
  }
};
export const setEnabledDepartmentService = data => {
  if (stryMutAct_9fa48("8074")) {
    {}
  } else {
    stryCov_9fa48("8074");
    axios.put(stryMutAct_9fa48("8075") ? `` : (stryCov_9fa48("8075"), `${DEPARTMENT_URL}`), data).then(response => {
      if (stryMutAct_9fa48("8076")) {
        {}
      } else {
        stryCov_9fa48("8076");
        store.dispatch(setEnabledDepartment(response.data));
      }
    }).catch(stryMutAct_9fa48("8077") ? () => undefined : (stryCov_9fa48("8077"), error => errorHandler(error)));
  }
};
export const updateDepartmentService = data => {
  if (stryMutAct_9fa48("8078")) {
    {}
  } else {
    stryCov_9fa48("8078");
    axios.put(stryMutAct_9fa48("8079") ? `` : (stryCov_9fa48("8079"), `${DEPARTMENT_URL}`), data).then(response => {
      if (stryMutAct_9fa48("8080")) {
        {}
      } else {
        stryCov_9fa48("8080");
        store.dispatch(updateDepart(response.data));
        resetFormHandler(DEPARTMENT_FORM);
        successHandler(i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8081") ? {} : (stryCov_9fa48("8081"), {
          cardType: i18n.t(FORM_DEPARTMENT_LABEL),
          actionType: i18n.t(UPDATED_LABEL)
        })));
      }
    }).catch(stryMutAct_9fa48("8082") ? () => undefined : (stryCov_9fa48("8082"), error => errorHandler(error)));
  }
};
export const deleteDepartmentsService = id => {
  if (stryMutAct_9fa48("8083")) {
    {}
  } else {
    stryCov_9fa48("8083");
    axios.delete(stryMutAct_9fa48("8084") ? `` : (stryCov_9fa48("8084"), `${DEPARTMENT_URL}/${id}`)).then(response => {
      if (stryMutAct_9fa48("8085")) {
        {}
      } else {
        stryCov_9fa48("8085");
        store.dispatch(deleteDepartment(response.data));
      }
    }).catch(stryMutAct_9fa48("8086") ? () => undefined : (stryCov_9fa48("8086"), error => errorHandler(error)));
  }
};
export const clearDepartment = () => {
  if (stryMutAct_9fa48("8087")) {
    {}
  } else {
    stryCov_9fa48("8087");
    store.dispatch(clearDepartmentForm());
    resetFormHandler(DEPARTMENT_FORM);
  }
};
export const getDepartmentByIdService = id => {
  if (stryMutAct_9fa48("8088")) {
    {}
  } else {
    stryCov_9fa48("8088");
    store.dispatch(getDepartItemById(Number(id)));
  }
};