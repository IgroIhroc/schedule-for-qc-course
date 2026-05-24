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
import { reset } from 'redux-form';
import { isEmpty } from 'lodash';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { axiosCall } from '../services/axios';
import { DEPARTMENT_URL, DISABLED_TEACHERS_URL, PUBLIC_TEACHER_URL, TEACHER_URL, TEACHERS_WITHOUT_ACCOUNT_URL } from '../constants/axios';
import { BACK_END_SUCCESS_OPERATION, CREATED_LABEL, DELETED_LABEL, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { TEACHER_FORM } from '../constants/reduxForms';
import { DELETE, GET, POST, PUT } from '../constants/methods';
import { FORM_TEACHER_A_LABEL } from '../constants/translationLabels/formElements';
import { createErrorMessage, createMessage } from '../utils/sagaUtils';
import { deleteTeacherSuccess, setDisabledTeachersSuccess, setLoading, showAllTeachersSuccess } from '../actions';
import { setOpenErrorSnackbar, setOpenSuccessSnackbar } from '../actions/snackbar';
import * as actionTypes from '../actions/actionsType';
import { addTeacherSuccess, getAllTeachersByDepartmentId, getTeacherWithoutAccountSuccess, selectTeacherCard, updateTeacherCardSuccess } from '../actions/teachers';
import { handleFormSubmit } from '../helper/handleFormSubmit';
export function* getEnabledTeachers() {
  if (stryMutAct_9fa48("7998")) {
    {}
  } else {
    stryCov_9fa48("7998");
    try {
      if (stryMutAct_9fa48("7999")) {
        {}
      } else {
        stryCov_9fa48("7999");
        yield put(setLoading(stryMutAct_9fa48("8000") ? false : (stryCov_9fa48("8000"), true)));
        const {
          data
        } = yield call(axiosCall, TEACHER_URL, GET);
        yield put(showAllTeachersSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("8001")) {
        {}
      } else {
        stryCov_9fa48("8001");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("8002")) {
        {}
      } else {
        stryCov_9fa48("8002");
        yield put(setLoading(stryMutAct_9fa48("8003") ? true : (stryCov_9fa48("8003"), false)));
      }
    }
  }
}
export function* getDisabledTeachers() {
  if (stryMutAct_9fa48("8004")) {
    {}
  } else {
    stryCov_9fa48("8004");
    try {
      if (stryMutAct_9fa48("8005")) {
        {}
      } else {
        stryCov_9fa48("8005");
        const {
          data
        } = yield call(axiosCall, DISABLED_TEACHERS_URL, GET);
        yield put(setDisabledTeachersSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("8006")) {
        {}
      } else {
        stryCov_9fa48("8006");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* removeTeacher({
  id
}) {
  if (stryMutAct_9fa48("8007")) {
    {}
  } else {
    stryCov_9fa48("8007");
    try {
      if (stryMutAct_9fa48("8008")) {
        {}
      } else {
        stryCov_9fa48("8008");
        const requestUrl = stryMutAct_9fa48("8009") ? `` : (stryCov_9fa48("8009"), `${TEACHER_URL}/${id}`);
        yield call(axiosCall, requestUrl, DELETE);
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_TEACHER_A_LABEL, DELETED_LABEL);
        yield put(deleteTeacherSuccess(id));
        yield call(getDisabledTeachers);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("8010")) {
        {}
      } else {
        stryCov_9fa48("8010");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* createTeacher({
  teacher
}) {
  if (stryMutAct_9fa48("8011")) {
    {}
  } else {
    stryCov_9fa48("8011");
    const results = stryMutAct_9fa48("8012") ? {} : (stryCov_9fa48("8012"), {
      ...teacher
    });
    if (stryMutAct_9fa48("8015") ? isEmpty(teacher.department) && !teacher.department?.id : stryMutAct_9fa48("8014") ? false : stryMutAct_9fa48("8013") ? true : (stryCov_9fa48("8013", "8014", "8015"), isEmpty(teacher.department) || (stryMutAct_9fa48("8016") ? teacher.department?.id : (stryCov_9fa48("8016"), !(stryMutAct_9fa48("8017") ? teacher.department.id : (stryCov_9fa48("8017"), teacher.department?.id)))))) {
      if (stryMutAct_9fa48("8018")) {
        {}
      } else {
        stryCov_9fa48("8018");
        delete results.department;
      }
    }
    try {
      if (stryMutAct_9fa48("8019")) {
        {}
      } else {
        stryCov_9fa48("8019");
        const {
          data
        } = yield call(axiosCall, TEACHER_URL, POST, results);
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_TEACHER_A_LABEL, CREATED_LABEL);
        yield put(addTeacherSuccess(data));
        yield put(reset(TEACHER_FORM));
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("8020")) {
        {}
      } else {
        stryCov_9fa48("8020");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* updateTeacher({
  teacher
}) {
  if (stryMutAct_9fa48("8021")) {
    {}
  } else {
    stryCov_9fa48("8021");
    const result = stryMutAct_9fa48("8022") ? {} : (stryCov_9fa48("8022"), {
      ...teacher
    });
    if (stryMutAct_9fa48("8025") ? isEmpty(teacher.department) && !teacher.department?.id : stryMutAct_9fa48("8024") ? false : stryMutAct_9fa48("8023") ? true : (stryCov_9fa48("8023", "8024", "8025"), isEmpty(teacher.department) || (stryMutAct_9fa48("8026") ? teacher.department?.id : (stryCov_9fa48("8026"), !(stryMutAct_9fa48("8027") ? teacher.department.id : (stryCov_9fa48("8027"), teacher.department?.id)))))) {
      if (stryMutAct_9fa48("8028")) {
        {}
      } else {
        stryCov_9fa48("8028");
        delete result.department;
      }
    }
    try {
      if (stryMutAct_9fa48("8029")) {
        {}
      } else {
        stryCov_9fa48("8029");
        const {
          data
        } = yield call(axiosCall, TEACHER_URL, PUT, result);
        yield put(updateTeacherCardSuccess(data));
        yield call(getEnabledTeachers);
        yield call(getDisabledTeachers);
        yield put(selectTeacherCard(null));
        yield put(reset(TEACHER_FORM));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_TEACHER_A_LABEL, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("8030")) {
        {}
      } else {
        stryCov_9fa48("8030");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
function* toggleDisabledTeacher({
  teacherId,
  disableStatus
}) {
  if (stryMutAct_9fa48("8031")) {
    {}
  } else {
    stryCov_9fa48("8031");
    try {
      if (stryMutAct_9fa48("8032")) {
        {}
      } else {
        stryCov_9fa48("8032");
        const state = yield select();
        const {
          teachers,
          disabledTeachers
        } = state.teachers;
        const teacher = (stryMutAct_9fa48("8033") ? [] : (stryCov_9fa48("8033"), [...teachers, ...disabledTeachers])).find(stryMutAct_9fa48("8034") ? () => undefined : (stryCov_9fa48("8034"), item => stryMutAct_9fa48("8037") ? item.id !== teacherId : stryMutAct_9fa48("8036") ? false : stryMutAct_9fa48("8035") ? true : (stryCov_9fa48("8035", "8036", "8037"), item.id === teacherId)));
        yield call(updateTeacher, stryMutAct_9fa48("8038") ? {} : (stryCov_9fa48("8038"), {
          teacher: stryMutAct_9fa48("8039") ? {} : (stryCov_9fa48("8039"), {
            ...teacher,
            disable: stryMutAct_9fa48("8040") ? disableStatus : (stryCov_9fa48("8040"), !disableStatus)
          })
        }));
        yield put(deleteTeacherSuccess(teacherId, disableStatus));
      }
    } catch (error) {
      if (stryMutAct_9fa48("8041")) {
        {}
      } else {
        stryCov_9fa48("8041");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* handleTeacher({
  values
}) {
  if (stryMutAct_9fa48("8042")) {
    {}
  } else {
    stryCov_9fa48("8042");
    try {
      if (stryMutAct_9fa48("8043")) {
        {}
      } else {
        stryCov_9fa48("8043");
        yield call(handleFormSubmit(values, createTeacher, updateTeacher), stryMutAct_9fa48("8044") ? {} : (stryCov_9fa48("8044"), {
          teacher: values
        }));
      }
    } catch (error) {
      if (stryMutAct_9fa48("8045")) {
        {}
      } else {
        stryCov_9fa48("8045");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* getAllPublicTeachers() {
  if (stryMutAct_9fa48("8046")) {
    {}
  } else {
    stryCov_9fa48("8046");
    try {
      if (stryMutAct_9fa48("8047")) {
        {}
      } else {
        stryCov_9fa48("8047");
        const {
          data
        } = yield call(axiosCall, PUBLIC_TEACHER_URL);
        yield put(showAllTeachersSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("8048")) {
        {}
      } else {
        stryCov_9fa48("8048");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* getTeachersWithoutAccount() {
  if (stryMutAct_9fa48("8049")) {
    {}
  } else {
    stryCov_9fa48("8049");
    try {
      if (stryMutAct_9fa48("8050")) {
        {}
      } else {
        stryCov_9fa48("8050");
        const {
          data
        } = yield call(axiosCall, TEACHERS_WITHOUT_ACCOUNT_URL, GET);
        yield put(getTeacherWithoutAccountSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("8051")) {
        {}
      } else {
        stryCov_9fa48("8051");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* getAllPublicTeachersByDepartment({
  departmentId
}) {
  if (stryMutAct_9fa48("8052")) {
    {}
  } else {
    stryCov_9fa48("8052");
    const requestUrl = stryMutAct_9fa48("8053") ? `` : (stryCov_9fa48("8053"), `${DEPARTMENT_URL}/${departmentId}/${TEACHER_URL}`);
    try {
      if (stryMutAct_9fa48("8054")) {
        {}
      } else {
        stryCov_9fa48("8054");
        const {
          data
        } = yield call(axiosCall, requestUrl);
        yield put(getAllTeachersByDepartmentId(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("8055")) {
        {}
      } else {
        stryCov_9fa48("8055");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export default function* watchTeachers() {
  if (stryMutAct_9fa48("8056")) {
    {}
  } else {
    stryCov_9fa48("8056");
    yield takeLatest(actionTypes.DELETE_TEACHER_START, removeTeacher);
    yield takeLatest(actionTypes.SHOW_ALL_TEACHERS_START, getEnabledTeachers);
    yield takeLatest(actionTypes.SET_DISABLED_TEACHERS_START, getDisabledTeachers);
    yield takeLatest(actionTypes.GET_TEACHERS_WITHOUT_ACCOUNT_START, getTeachersWithoutAccount);
    yield takeLatest(actionTypes.ADD_TEACHER_START, createTeacher);
    yield takeLatest(actionTypes.UPDATE_TEACHER_START, updateTeacher);
    yield takeLatest(actionTypes.HANDLE_TEACHER_START, handleTeacher);
    yield takeLatest(actionTypes.TOOGLE_TEACHER_START, toggleDisabledTeacher);
    yield takeLatest(actionTypes.GET_ALL_PUBLIC_TEACHERS_START, getAllPublicTeachers);
    yield takeLatest(actionTypes.GET_ALL_PUBLIC_TEACHERS_BY_DEPARTMENT_START, getAllPublicTeachersByDepartment);
  }
}