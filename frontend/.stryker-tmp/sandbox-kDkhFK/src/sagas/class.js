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
import { call, put, takeLatest } from 'redux-saga/effects';
import { axiosCall } from '../services/axios';
import * as actionTypes from '../actions/actionsType';
import { CLASS_URL, PUBLIC_CLASSES_URL } from '../constants/axios';
import { CLASS_FORM } from '../constants/reduxForms';
import { addClassScheduleSuccess, clearClassScheduleSuccess, deleteClassScheduleSuccess, getClassScheduleByIdSuccess, getClassScheduleListSuccess, getPublicClassScheduleSuccess, updateClassScheduleSuccess } from '../actions/classes';
import { setLoading } from '../actions';
import { DELETE, GET, POST, PUT } from '../constants/methods';
import { setOpenErrorSnackbar, setOpenSuccessSnackbar } from '../actions/snackbar';
import { BACK_END_SUCCESS_OPERATION, CREATED_LABEL, DELETED_LABEL, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { FORM_CLASS_LABEL } from '../constants/translationLabels/formElements';
import { createErrorMessage, createMessage } from '../utils/sagaUtils';
export function* getClassScheduleList() {
  if (stryMutAct_9fa48("7417")) {
    {}
  } else {
    stryCov_9fa48("7417");
    try {
      if (stryMutAct_9fa48("7418")) {
        {}
      } else {
        stryCov_9fa48("7418");
        const response = yield call(axiosCall, CLASS_URL, GET);
        yield put(getClassScheduleListSuccess(response.data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7419")) {
        {}
      } else {
        stryCov_9fa48("7419");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7420")) {
        {}
      } else {
        stryCov_9fa48("7420");
        yield put(setLoading(stryMutAct_9fa48("7421") ? true : (stryCov_9fa48("7421"), false)));
      }
    }
  }
}
export function* getPublicClassScheduleList() {
  if (stryMutAct_9fa48("7422")) {
    {}
  } else {
    stryCov_9fa48("7422");
    try {
      if (stryMutAct_9fa48("7423")) {
        {}
      } else {
        stryCov_9fa48("7423");
        const response = yield call(axiosCall, PUBLIC_CLASSES_URL, GET);
        yield put(getPublicClassScheduleSuccess(response.data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7424")) {
        {}
      } else {
        stryCov_9fa48("7424");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7425")) {
        {}
      } else {
        stryCov_9fa48("7425");
        yield put(setLoading(stryMutAct_9fa48("7426") ? true : (stryCov_9fa48("7426"), false)));
      }
    }
  }
}
export function* updateClassSchedule({
  item
}) {
  if (stryMutAct_9fa48("7427")) {
    {}
  } else {
    stryCov_9fa48("7427");
    try {
      if (stryMutAct_9fa48("7428")) {
        {}
      } else {
        stryCov_9fa48("7428");
        const response = yield call(axiosCall, CLASS_URL, PUT, item);
        yield put(updateClassScheduleSuccess(response.data));
        yield put(reset(CLASS_FORM));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_CLASS_LABEL, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7429")) {
        {}
      } else {
        stryCov_9fa48("7429");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* addClassSchedule({
  item
}) {
  if (stryMutAct_9fa48("7430")) {
    {}
  } else {
    stryCov_9fa48("7430");
    try {
      if (stryMutAct_9fa48("7431")) {
        {}
      } else {
        stryCov_9fa48("7431");
        const response = yield call(axiosCall, CLASS_URL, POST, item);
        yield put(addClassScheduleSuccess(response.data));
        yield put(reset(CLASS_FORM));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_CLASS_LABEL, CREATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7432")) {
        {}
      } else {
        stryCov_9fa48("7432");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* classFormHandler({
  item
}) {
  if (stryMutAct_9fa48("7433")) {
    {}
  } else {
    stryCov_9fa48("7433");
    try {
      if (stryMutAct_9fa48("7434")) {
        {}
      } else {
        stryCov_9fa48("7434");
        if (stryMutAct_9fa48("7436") ? false : stryMutAct_9fa48("7435") ? true : (stryCov_9fa48("7435", "7436"), item.id)) {
          if (stryMutAct_9fa48("7437")) {
            {}
          } else {
            stryCov_9fa48("7437");
            yield call(updateClassSchedule, stryMutAct_9fa48("7438") ? {} : (stryCov_9fa48("7438"), {
              item
            }));
          }
        } else {
          if (stryMutAct_9fa48("7439")) {
            {}
          } else {
            stryCov_9fa48("7439");
            yield call(addClassSchedule, stryMutAct_9fa48("7440") ? {} : (stryCov_9fa48("7440"), {
              item
            }));
          }
        }
      }
    } catch (error) {
      if (stryMutAct_9fa48("7441")) {
        {}
      } else {
        stryCov_9fa48("7441");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* getClassScheduleById({
  id
}) {
  if (stryMutAct_9fa48("7442")) {
    {}
  } else {
    stryCov_9fa48("7442");
    try {
      if (stryMutAct_9fa48("7443")) {
        {}
      } else {
        stryCov_9fa48("7443");
        yield put(getClassScheduleByIdSuccess(id));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7444")) {
        {}
      } else {
        stryCov_9fa48("7444");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* deleteClassSchedule({
  id
}) {
  if (stryMutAct_9fa48("7445")) {
    {}
  } else {
    stryCov_9fa48("7445");
    try {
      if (stryMutAct_9fa48("7446")) {
        {}
      } else {
        stryCov_9fa48("7446");
        yield call(axiosCall, stryMutAct_9fa48("7447") ? `` : (stryCov_9fa48("7447"), `${CLASS_URL}/${id}`), DELETE);
        yield put(deleteClassScheduleSuccess(id));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_CLASS_LABEL, DELETED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7448")) {
        {}
      } else {
        stryCov_9fa48("7448");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* clearClassSchedule() {
  if (stryMutAct_9fa48("7449")) {
    {}
  } else {
    stryCov_9fa48("7449");
    try {
      if (stryMutAct_9fa48("7450")) {
        {}
      } else {
        stryCov_9fa48("7450");
        yield put(clearClassScheduleSuccess());
        yield put(reset(CLASS_FORM));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7451")) {
        {}
      } else {
        stryCov_9fa48("7451");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export default function* watchClasses() {
  if (stryMutAct_9fa48("7452")) {
    {}
  } else {
    stryCov_9fa48("7452");
    yield takeLatest(actionTypes.GET_CLASS_SCHEDULE_BY_ID_START, getClassScheduleById);
    yield takeLatest(actionTypes.GET_CLASS_SCHEDULE_LIST_START, getClassScheduleList);
    yield takeLatest(actionTypes.GET_PUBLIC_CLASS_SCHEDULE_LIST_START, getPublicClassScheduleList);
    yield takeLatest(actionTypes.CLASS_FORM_HANDLER, classFormHandler);
    yield takeLatest(actionTypes.ADD_CLASS_SCHEDULE_START, addClassSchedule);
    yield takeLatest(actionTypes.UPDATE_CLASS_SCHEDULE_START, updateClassSchedule);
    yield takeLatest(actionTypes.DELETE_CLASS_SCHEDULE_START, deleteClassSchedule);
    yield takeLatest(actionTypes.CLEAR_CLASS_SCHEDULE_START, clearClassSchedule);
  }
}