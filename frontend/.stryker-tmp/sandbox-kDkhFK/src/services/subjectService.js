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
import { DISABLED_SUBJECTS_URL, SUBJECT_URL } from '../constants/axios';
import { SUBJECT_FORM } from '../constants/reduxForms';
import { addSubject, clearSubject, deleteSubject, selectSubject, setDisabledSubjects, showAllSubjects, updateSubject } from '../actions/index';
import i18n from '../i18n';
import { errorHandler, successHandler } from '../helper/handlerAxios';
import { resetFormHandler } from '../helper/formHelper';
import { BACK_END_SUCCESS_OPERATION, CREATED_LABEL, DELETED_LABEL, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { FORM_SUBJECT_LABEL } from '../constants/translationLabels/formElements';
export const selectSubjectService = stryMutAct_9fa48("8130") ? () => undefined : (stryCov_9fa48("8130"), (() => {
  const selectSubjectService = subjectId => store.dispatch(selectSubject(subjectId));
  return selectSubjectService;
})());
export const showAllSubjectsService = () => {
  if (stryMutAct_9fa48("8131")) {
    {}
  } else {
    stryCov_9fa48("8131");
    axios.get(SUBJECT_URL).then(response => {
      if (stryMutAct_9fa48("8132")) {
        {}
      } else {
        stryCov_9fa48("8132");
        store.dispatch(showAllSubjects(response.data));
      }
    }).catch(stryMutAct_9fa48("8133") ? () => undefined : (stryCov_9fa48("8133"), error => errorHandler(error)));
  }
};
export const getDisabledSubjectsService = () => {
  if (stryMutAct_9fa48("8134")) {
    {}
  } else {
    stryCov_9fa48("8134");
    axios.get(DISABLED_SUBJECTS_URL).then(res => {
      if (stryMutAct_9fa48("8135")) {
        {}
      } else {
        stryCov_9fa48("8135");
        store.dispatch(setDisabledSubjects(res.data));
      }
    }).catch(stryMutAct_9fa48("8136") ? () => undefined : (stryCov_9fa48("8136"), error => errorHandler(error)));
  }
};
export const updateSubjectService = data => {
  if (stryMutAct_9fa48("8137")) {
    {}
  } else {
    stryCov_9fa48("8137");
    return axios.put(SUBJECT_URL, data).then(response => {
      if (stryMutAct_9fa48("8138")) {
        {}
      } else {
        stryCov_9fa48("8138");
        store.dispatch(updateSubject(response.data));
        selectSubjectService(null);
        showAllSubjectsService();
        getDisabledSubjectsService();
        resetFormHandler(SUBJECT_FORM);
        successHandler(i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8139") ? {} : (stryCov_9fa48("8139"), {
          cardType: i18n.t(FORM_SUBJECT_LABEL),
          actionType: i18n.t(UPDATED_LABEL)
        })));
      }
    }).catch(stryMutAct_9fa48("8140") ? () => undefined : (stryCov_9fa48("8140"), error => errorHandler(error)));
  }
};
export const createSubjectService = data => {
  if (stryMutAct_9fa48("8141")) {
    {}
  } else {
    stryCov_9fa48("8141");
    axios.post(SUBJECT_URL, data).then(response => {
      if (stryMutAct_9fa48("8142")) {
        {}
      } else {
        stryCov_9fa48("8142");
        store.dispatch(addSubject(response.data));
        resetFormHandler(SUBJECT_FORM);
        successHandler(i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8143") ? {} : (stryCov_9fa48("8143"), {
          cardType: i18n.t(FORM_SUBJECT_LABEL),
          actionType: i18n.t(CREATED_LABEL)
        })));
      }
    }).catch(stryMutAct_9fa48("8144") ? () => undefined : (stryCov_9fa48("8144"), error => errorHandler(error)));
  }
};
export const handleSubjectService = stryMutAct_9fa48("8145") ? () => undefined : (stryCov_9fa48("8145"), (() => {
  const handleSubjectService = values => values.id ? updateSubjectService(values) : createSubjectService(values);
  return handleSubjectService;
})());
export const clearSubjectService = () => {
  if (stryMutAct_9fa48("8146")) {
    {}
  } else {
    stryCov_9fa48("8146");
    store.dispatch(clearSubject());
    resetFormHandler(SUBJECT_FORM);
  }
};
export const removeSubjectCardService = subjectId => {
  if (stryMutAct_9fa48("8147")) {
    {}
  } else {
    stryCov_9fa48("8147");
    axios.delete(stryMutAct_9fa48("8148") ? `` : (stryCov_9fa48("8148"), `${SUBJECT_URL}/${subjectId}`)).then(() => {
      if (stryMutAct_9fa48("8149")) {
        {}
      } else {
        stryCov_9fa48("8149");
        store.dispatch(deleteSubject(subjectId));
        getDisabledSubjectsService();
        successHandler(i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8150") ? {} : (stryCov_9fa48("8150"), {
          cardType: i18n.t(FORM_SUBJECT_LABEL),
          actionType: i18n.t(DELETED_LABEL)
        })));
      }
    }).catch(stryMutAct_9fa48("8151") ? () => undefined : (stryCov_9fa48("8151"), error => errorHandler(error)));
  }
};
export const setDisabledSubjectsService = subject => {
  if (stryMutAct_9fa48("8152")) {
    {}
  } else {
    stryCov_9fa48("8152");
    const bufferSubject = subject;
    bufferSubject.disable = stryMutAct_9fa48("8153") ? false : (stryCov_9fa48("8153"), true);
    updateSubjectService(bufferSubject);
  }
};
export const setEnabledSubjectsService = subject => {
  if (stryMutAct_9fa48("8154")) {
    {}
  } else {
    stryCov_9fa48("8154");
    const bufferSubject = subject;
    bufferSubject.disable = stryMutAct_9fa48("8155") ? true : (stryCov_9fa48("8155"), false);
    updateSubjectService(bufferSubject);
  }
};