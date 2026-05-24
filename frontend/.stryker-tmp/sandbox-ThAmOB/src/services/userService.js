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
import { store } from '../store';
import { MERGE_USER_AND_TEACHER_URL, UPDATE_USER_PROFILE, USER_PROFILE, USERS_URL } from '../constants/axios';
import { setTeacher, setUser, setUsers } from '../actions/index';
import i18n from '../i18n';
import { setLoadingService } from './loadingService';
import { getTeachersWithoutAccount } from './teacherService';
import { errorHandler, successHandler } from '../helper/handlerAxios';
import { BACK_END_SUCCESS_OPERATION, SUCCESSFULLY_MERGED } from '../constants/translationLabels/serviceMessages';
import { FORM_TEACHER_LABEL, FORM_USER_LABEL } from '../constants/translationLabels/formElements';
export const getUsersService = () => {
  if (stryMutAct_9fa48("8238")) {
    {}
  } else {
    stryCov_9fa48("8238");
    axios.get(USERS_URL).then(response => {
      if (stryMutAct_9fa48("8239")) {
        {}
      } else {
        stryCov_9fa48("8239");
        store.dispatch(setUsers(response.data));
      }
    }).catch(stryMutAct_9fa48("8240") ? () => undefined : (stryCov_9fa48("8240"), error => errorHandler(error)));
  }
};
export const getUserProfile = () => {
  if (stryMutAct_9fa48("8241")) {
    {}
  } else {
    stryCov_9fa48("8241");
    axios.get(USER_PROFILE).then(response => {
      if (stryMutAct_9fa48("8242")) {
        {}
      } else {
        stryCov_9fa48("8242");
        store.dispatch(setUser(response.data));
        if (stryMutAct_9fa48("8244") ? false : stryMutAct_9fa48("8243") ? true : (stryCov_9fa48("8243", "8244"), response.data.teacher_name)) {
          if (stryMutAct_9fa48("8245")) {
            {}
          } else {
            stryCov_9fa48("8245");
            store.dispatch(setTeacher(stryMutAct_9fa48("8246") ? {} : (stryCov_9fa48("8246"), {
              id: 15,
              name: response.data.teacher_name,
              surname: response.data.teacher_surname,
              patronymic: response.data.teacher_patronymic,
              position: response.data.teacher_position
            })));
          }
        }
      }
    }).catch(stryMutAct_9fa48("8247") ? () => undefined : (stryCov_9fa48("8247"), error => errorHandler(error)));
  }
};
export const updateUserPassword = values => {
  if (stryMutAct_9fa48("8248")) {
    {}
  } else {
    stryCov_9fa48("8248");
    axios.put(UPDATE_USER_PROFILE, stryMutAct_9fa48("8249") ? {} : (stryCov_9fa48("8249"), {
      current_password: values.current_password,
      new_password: values.new_password
    })).then(response => {
      if (stryMutAct_9fa48("8250")) {
        {}
      } else {
        stryCov_9fa48("8250");
        store.dispatch(setUser(response.data));
        successHandler(i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8251") ? {} : (stryCov_9fa48("8251"), {
          cardType: i18n.t(FORM_TEACHER_LABEL),
          actionType: i18n.t(stryMutAct_9fa48("8252") ? "" : (stryCov_9fa48("8252"), 'serviceMessages:updated'))
        })));
      }
    }).catch(stryMutAct_9fa48("8253") ? () => undefined : (stryCov_9fa48("8253"), error => errorHandler(error)));
  }
};
export const updateUserTeacher = values => {
  if (stryMutAct_9fa48("8254")) {
    {}
  } else {
    stryCov_9fa48("8254");
    axios.put(UPDATE_USER_PROFILE, stryMutAct_9fa48("8255") ? {} : (stryCov_9fa48("8255"), {
      teacher_name: values.name,
      teacher_surname: values.surname,
      teacher_patronymic: values.patronymic,
      teacher_position: values.position
    })).then(response => {
      if (stryMutAct_9fa48("8256")) {
        {}
      } else {
        stryCov_9fa48("8256");
        store.dispatch(setUser(response.data));
        store.dispatch(setTeacher(stryMutAct_9fa48("8257") ? {} : (stryCov_9fa48("8257"), {
          id: 15,
          name: response.data.teacher_name,
          surname: response.data.teacher_surname,
          patronymic: response.data.teacher_patronymic,
          position: response.data.teacher_position
        })));
        successHandler(i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8258") ? {} : (stryCov_9fa48("8258"), {
          cardType: i18n.t(FORM_USER_LABEL),
          actionType: i18n.t(stryMutAct_9fa48("8259") ? "" : (stryCov_9fa48("8259"), 'serviceMessages:updated'))
        })));
      }
    }).catch(stryMutAct_9fa48("8260") ? () => undefined : (stryCov_9fa48("8260"), error => errorHandler(error)));
  }
};
export const mergeUserAndTeacherService = mergeObj => {
  if (stryMutAct_9fa48("8261")) {
    {}
  } else {
    stryCov_9fa48("8261");
    axios.put(MERGE_USER_AND_TEACHER_URL, mergeObj).then(() => {
      if (stryMutAct_9fa48("8262")) {
        {}
      } else {
        stryCov_9fa48("8262");
        getTeachersWithoutAccount(); // replace in future to saga from teachers
        getUsersService();
        setLoadingService(stryMutAct_9fa48("8263") ? true : (stryCov_9fa48("8263"), false));
        successHandler(i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8264") ? {} : (stryCov_9fa48("8264"), {
          cardType: i18n.t(FORM_USER_LABEL),
          actionType: i18n.t(SUCCESSFULLY_MERGED)
        })));
      }
    }).catch(error => {
      if (stryMutAct_9fa48("8265")) {
        {}
      } else {
        stryCov_9fa48("8265");
        setLoadingService(stryMutAct_9fa48("8266") ? true : (stryCov_9fa48("8266"), false));
        errorHandler(error);
      }
    });
  }
};