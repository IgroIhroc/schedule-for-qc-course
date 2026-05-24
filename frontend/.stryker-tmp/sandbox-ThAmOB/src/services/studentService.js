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
import { STUDENT_URL } from '../constants/axios';
import { store } from '../store';
import { resetFormHandler } from '../helper/formHelper';
import { STUDENT_FORM } from '../constants/reduxForms';
import { errorHandler, successHandler } from '../helper/handlerAxios';
import i18n from '../i18n';
import { createStudentSuccess, deleteStudentSuccess, selectStudentSuccess, showAllStudents, updateStudentSuccess } from '../actions/students';
import { BACK_END_SUCCESS_OPERATION, CREATED_LABEL, DELETED_LABEL, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { FORM_STUDENT_LABEL } from '../constants/translationLabels/formElements';
export const createStudentService = data => {
  if (stryMutAct_9fa48("8105")) {
    {}
  } else {
    stryCov_9fa48("8105");
    axios.post(STUDENT_URL, data).then(response => {
      if (stryMutAct_9fa48("8106")) {
        {}
      } else {
        stryCov_9fa48("8106");
        store.dispatch(createStudentSuccess(response.data));
        resetFormHandler(STUDENT_FORM);
        successHandler(i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8107") ? {} : (stryCov_9fa48("8107"), {
          cardType: i18n.t(FORM_STUDENT_LABEL),
          actionType: i18n.t(CREATED_LABEL)
        })));
      }
    }).catch(stryMutAct_9fa48("8108") ? () => undefined : (stryCov_9fa48("8108"), error => errorHandler(error)));
  }
};
export const getAllStudentsByGroupId = groupId => {
  if (stryMutAct_9fa48("8109")) {
    {}
  } else {
    stryCov_9fa48("8109");
    axios.get(STUDENT_URL).then(response => {
      if (stryMutAct_9fa48("8110")) {
        {}
      } else {
        stryCov_9fa48("8110");
        const result = stryMutAct_9fa48("8111") ? response.data : (stryCov_9fa48("8111"), response.data.filter(stryMutAct_9fa48("8112") ? () => undefined : (stryCov_9fa48("8112"), ({
          group
        }) => stryMutAct_9fa48("8115") ? group.id !== groupId : stryMutAct_9fa48("8114") ? false : stryMutAct_9fa48("8113") ? true : (stryCov_9fa48("8113", "8114", "8115"), group.id === groupId))));
      }
    }).catch(stryMutAct_9fa48("8116") ? () => undefined : (stryCov_9fa48("8116"), error => errorHandler(error)));
  }
};
export const getAllStudentsService = () => {
  if (stryMutAct_9fa48("8117")) {
    {}
  } else {
    stryCov_9fa48("8117");
    axios.get(STUDENT_URL).then(response => {
      if (stryMutAct_9fa48("8118")) {
        {}
      } else {
        stryCov_9fa48("8118");
        store.dispatch(showAllStudents(response.data));
      }
    }).catch(stryMutAct_9fa48("8119") ? () => undefined : (stryCov_9fa48("8119"), error => errorHandler(error)));
  }
};
export const deleteStudentService = student => {
  if (stryMutAct_9fa48("8120")) {
    {}
  } else {
    stryCov_9fa48("8120");
    axios.delete(stryMutAct_9fa48("8121") ? `` : (stryCov_9fa48("8121"), `${STUDENT_URL}/${student.id}`)).then(() => {
      if (stryMutAct_9fa48("8122")) {
        {}
      } else {
        stryCov_9fa48("8122");
        store.dispatch(deleteStudentSuccess(student.id));
        getAllStudentsByGroupId(student.group.id);
        successHandler(i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8123") ? {} : (stryCov_9fa48("8123"), {
          cardType: i18n.t(FORM_STUDENT_LABEL),
          actionType: i18n.t(DELETED_LABEL)
        })));
      }
    }).catch(stryMutAct_9fa48("8124") ? () => undefined : (stryCov_9fa48("8124"), error => errorHandler(error)));
  }
};
export const selectStudentService = stryMutAct_9fa48("8125") ? () => undefined : (stryCov_9fa48("8125"), (() => {
  const selectStudentService = studentId => store.dispatch(selectStudentSuccess(studentId));
  return selectStudentService;
})());
export const updateStudentService = data => {
  if (stryMutAct_9fa48("8126")) {
    {}
  } else {
    stryCov_9fa48("8126");
    return axios.put(STUDENT_URL, data).then(response => {
      if (stryMutAct_9fa48("8127")) {
        {}
      } else {
        stryCov_9fa48("8127");
        store.dispatch(updateStudentSuccess(response.data));
        selectStudentService(null);
        getAllStudentsByGroupId(data.prevGroup.id);
        resetFormHandler(STUDENT_FORM);
        successHandler(i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8128") ? {} : (stryCov_9fa48("8128"), {
          cardType: i18n.t(FORM_STUDENT_LABEL),
          actionType: i18n.t(UPDATED_LABEL)
        })));
      }
    }).catch(stryMutAct_9fa48("8129") ? () => undefined : (stryCov_9fa48("8129"), error => errorHandler(error)));
  }
};