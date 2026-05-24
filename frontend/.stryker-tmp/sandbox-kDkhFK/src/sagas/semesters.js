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
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { reset } from 'redux-form';
import * as actionTypes from '../actions/actionsType';
import { setLoading } from '../actions/loadingIndicator';
import { setOpenErrorSnackbar, setOpenSuccessSnackbar } from '../actions/snackbar';
import { addSemesterSuccess, deleteSemesterSuccess, getAllSemestersSuccess, getArchivedSemestersSuccess, moveToArchivedSemesterSuccess, selectSemesterSuccess, updateSemesterSuccess } from '../actions/semesters';
import { getFullScheduleSuccess, setScheduleType } from '../actions/schedule';
import { axiosCall } from '../services/axios';
import i18n from '../i18n';
import { ARCHIVE_SEMESTER, ARCHIVED_SEMESTERS_URL, DEFAULT_SEMESTER_URL, DISABLED_SEMESTERS_URL, LESSONS_FROM_SEMESTER_COPY_URL, SEMESTER_COPY_URL, SEMESTERS_URL } from '../constants/axios';
import { ARCHIVED_LABEL, BACK_END_SUCCESS_OPERATION, COPIED_LABEL, CREATED_LABEL, DELETED_LABEL, SEMESTER_SERVICE_IS_ACTIVE, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { FORM_LESSON_LABEL, FORM_SEMESTER_LABEL } from '../constants/translationLabels/formElements';
import { SEMESTER_FORM } from '../constants/reduxForms';
import { createErrorMessage, createMessage } from '../utils/sagaUtils';
import { handleFormSubmit } from '../helper/handleFormSubmit';
import { DELETE, POST, PUT } from '../constants/methods';
const getSemestersState = stryMutAct_9fa48("7803") ? () => undefined : (stryCov_9fa48("7803"), (() => {
  const getSemestersState = state => state.semesters.semesters;
  return getSemestersState;
})());
export function* getAllSemestersItems() {
  if (stryMutAct_9fa48("7804")) {
    {}
  } else {
    stryCov_9fa48("7804");
    try {
      if (stryMutAct_9fa48("7805")) {
        {}
      } else {
        stryCov_9fa48("7805");
        yield put(setLoading(stryMutAct_9fa48("7806") ? false : (stryCov_9fa48("7806"), true)));
        const {
          data
        } = yield call(axiosCall, SEMESTERS_URL);
        yield put(getAllSemestersSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7807")) {
        {}
      } else {
        stryCov_9fa48("7807");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7808")) {
        {}
      } else {
        stryCov_9fa48("7808");
        yield put(setLoading(stryMutAct_9fa48("7809") ? true : (stryCov_9fa48("7809"), false)));
      }
    }
  }
}
export function* getDisabledSemestersItems() {
  if (stryMutAct_9fa48("7810")) {
    {}
  } else {
    stryCov_9fa48("7810");
    try {
      if (stryMutAct_9fa48("7811")) {
        {}
      } else {
        stryCov_9fa48("7811");
        yield put(setLoading(stryMutAct_9fa48("7812") ? false : (stryCov_9fa48("7812"), true)));
        const {
          data
        } = yield call(axiosCall, DISABLED_SEMESTERS_URL);
        yield put(getAllSemestersSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7813")) {
        {}
      } else {
        stryCov_9fa48("7813");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7814")) {
        {}
      } else {
        stryCov_9fa48("7814");
        yield put(setLoading(stryMutAct_9fa48("7815") ? true : (stryCov_9fa48("7815"), false)));
      }
    }
  }
}
export function* getArchivedSemestersItems() {
  if (stryMutAct_9fa48("7816")) {
    {}
  } else {
    stryCov_9fa48("7816");
    try {
      if (stryMutAct_9fa48("7817")) {
        {}
      } else {
        stryCov_9fa48("7817");
        yield put(setLoading(stryMutAct_9fa48("7818") ? false : (stryCov_9fa48("7818"), true)));
        const {
          data
        } = yield call(axiosCall, ARCHIVED_SEMESTERS_URL);
        yield put(getArchivedSemestersSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7819")) {
        {}
      } else {
        stryCov_9fa48("7819");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7820")) {
        {}
      } else {
        stryCov_9fa48("7820");
        yield put(setLoading(stryMutAct_9fa48("7821") ? true : (stryCov_9fa48("7821"), false)));
      }
    }
  }
}
export function* setGroupsToSemester({
  semesterId,
  groups
}) {
  if (stryMutAct_9fa48("7822")) {
    {}
  } else {
    stryCov_9fa48("7822");
    try {
      if (stryMutAct_9fa48("7823")) {
        {}
      } else {
        stryCov_9fa48("7823");
        const groupIds = groups.map(stryMutAct_9fa48("7824") ? () => undefined : (stryCov_9fa48("7824"), item => item.id));
        const requestUrl = stryMutAct_9fa48("7825") ? `` : (stryCov_9fa48("7825"), `${SEMESTERS_URL}/${semesterId}/groups`);
        const {
          data
        } = yield call(axiosCall, requestUrl, PUT, groupIds);
        yield put(updateSemesterSuccess(data));
        yield put(selectSemesterSuccess(null));
        yield put(reset(SEMESTER_FORM));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_SEMESTER_LABEL, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7826")) {
        {}
      } else {
        stryCov_9fa48("7826");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* deleteSemesterItem({
  semesterId
}) {
  if (stryMutAct_9fa48("7827")) {
    {}
  } else {
    stryCov_9fa48("7827");
    try {
      if (stryMutAct_9fa48("7828")) {
        {}
      } else {
        stryCov_9fa48("7828");
        const semesters = yield select(getSemestersState);
        const semester = semesters.find(stryMutAct_9fa48("7829") ? () => undefined : (stryCov_9fa48("7829"), item => stryMutAct_9fa48("7832") ? item.id !== semesterId : stryMutAct_9fa48("7831") ? false : stryMutAct_9fa48("7830") ? true : (stryCov_9fa48("7830", "7831", "7832"), item.id === semesterId)));
        if (stryMutAct_9fa48("7834") ? false : stryMutAct_9fa48("7833") ? true : (stryCov_9fa48("7833", "7834"), semester.currentSemester)) {
          if (stryMutAct_9fa48("7835")) {
            {}
          } else {
            stryCov_9fa48("7835");
            const message = i18n.t(SEMESTER_SERVICE_IS_ACTIVE);
            yield put(setOpenErrorSnackbar(message));
          }
        } else {
          if (stryMutAct_9fa48("7836")) {
            {}
          } else {
            stryCov_9fa48("7836");
            const requestUrl = stryMutAct_9fa48("7837") ? `` : (stryCov_9fa48("7837"), `${SEMESTERS_URL}/${semesterId}`);
            yield call(axiosCall, requestUrl, DELETE);
            yield put(deleteSemesterSuccess(semesterId));
            const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_SEMESTER_LABEL, DELETED_LABEL);
            yield put(setOpenSuccessSnackbar(message));
          }
        }
      }
    } catch (error) {
      if (stryMutAct_9fa48("7838")) {
        {}
      } else {
        stryCov_9fa48("7838");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* updateSemesterItem({
  values
}) {
  if (stryMutAct_9fa48("7839")) {
    {}
  } else {
    stryCov_9fa48("7839");
    try {
      if (stryMutAct_9fa48("7840")) {
        {}
      } else {
        stryCov_9fa48("7840");
        const {
          data
        } = yield call(axiosCall, SEMESTERS_URL, PUT, values);
        yield put(updateSemesterSuccess(data));
        yield put(selectSemesterSuccess(null));
        yield put(reset(SEMESTER_FORM));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_SEMESTER_LABEL, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7841")) {
        {}
      } else {
        stryCov_9fa48("7841");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* addSemesterItem({
  values
}) {
  if (stryMutAct_9fa48("7842")) {
    {}
  } else {
    stryCov_9fa48("7842");
    try {
      if (stryMutAct_9fa48("7843")) {
        {}
      } else {
        stryCov_9fa48("7843");
        const {
          data
        } = yield call(axiosCall, SEMESTERS_URL, POST, values);
        yield put(addSemesterSuccess(data));
        yield put(reset(SEMESTER_FORM));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_SEMESTER_LABEL, CREATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7844")) {
        {}
      } else {
        stryCov_9fa48("7844");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
function* setPreviousDefaultSemesterToFalse({
  values
}) {
  if (stryMutAct_9fa48("7845")) {
    {}
  } else {
    stryCov_9fa48("7845");
    const semesters = yield select(getSemestersState);
    const oldDefaultSemester = stryMutAct_9fa48("7846") ? {} : (stryCov_9fa48("7846"), {
      ...semesters.find(stryMutAct_9fa48("7847") ? () => undefined : (stryCov_9fa48("7847"), semesterItem => stryMutAct_9fa48("7850") ? semesterItem.defaultSemester || semesterItem.id !== values.id : stryMutAct_9fa48("7849") ? false : stryMutAct_9fa48("7848") ? true : (stryCov_9fa48("7848", "7849", "7850"), semesterItem.defaultSemester && (stryMutAct_9fa48("7852") ? semesterItem.id === values.id : stryMutAct_9fa48("7851") ? true : (stryCov_9fa48("7851", "7852"), semesterItem.id !== values.id)))))
    });
    if (stryMutAct_9fa48("7855") ? values.defaultSemester || oldDefaultSemester : stryMutAct_9fa48("7854") ? false : stryMutAct_9fa48("7853") ? true : (stryCov_9fa48("7853", "7854", "7855"), values.defaultSemester && oldDefaultSemester)) {
      if (stryMutAct_9fa48("7856")) {
        {}
      } else {
        stryCov_9fa48("7856");
        oldDefaultSemester.defaultSemester = stryMutAct_9fa48("7857") ? true : (stryCov_9fa48("7857"), false);
        yield put(updateSemesterSuccess(oldDefaultSemester));
      }
    }
  }
}
function* setPreviousCurrentSemesterToFalse({
  values
}) {
  if (stryMutAct_9fa48("7858")) {
    {}
  } else {
    stryCov_9fa48("7858");
    const semesters = yield select(getSemestersState);
    const oldCurrentSemester = stryMutAct_9fa48("7859") ? {} : (stryCov_9fa48("7859"), {
      ...semesters.find(stryMutAct_9fa48("7860") ? () => undefined : (stryCov_9fa48("7860"), semesterItem => stryMutAct_9fa48("7863") ? semesterItem.currentSemester || semesterItem.id !== values.id : stryMutAct_9fa48("7862") ? false : stryMutAct_9fa48("7861") ? true : (stryCov_9fa48("7861", "7862", "7863"), semesterItem.currentSemester && (stryMutAct_9fa48("7865") ? semesterItem.id === values.id : stryMutAct_9fa48("7864") ? true : (stryCov_9fa48("7864", "7865"), semesterItem.id !== values.id)))))
    });
    if (stryMutAct_9fa48("7868") ? values.currentSemester || oldCurrentSemester : stryMutAct_9fa48("7867") ? false : stryMutAct_9fa48("7866") ? true : (stryCov_9fa48("7866", "7867", "7868"), values.currentSemester && oldCurrentSemester)) {
      if (stryMutAct_9fa48("7869")) {
        {}
      } else {
        stryCov_9fa48("7869");
        oldCurrentSemester.currentSemester = stryMutAct_9fa48("7870") ? true : (stryCov_9fa48("7870"), false);
        yield put(updateSemesterSuccess(oldCurrentSemester));
      }
    }
  }
}
export function* handleSemesterFormSubmit({
  values
}) {
  if (stryMutAct_9fa48("7871")) {
    {}
  } else {
    stryCov_9fa48("7871");
    try {
      if (stryMutAct_9fa48("7872")) {
        {}
      } else {
        stryCov_9fa48("7872");
        yield call(handleFormSubmit(values, addSemesterItem, updateSemesterItem), stryMutAct_9fa48("7873") ? {} : (stryCov_9fa48("7873"), {
          values
        }));
        yield call(setPreviousCurrentSemesterToFalse, stryMutAct_9fa48("7874") ? {} : (stryCov_9fa48("7874"), {
          values
        }));
        yield call(setPreviousDefaultSemesterToFalse, stryMutAct_9fa48("7875") ? {} : (stryCov_9fa48("7875"), {
          values
        }));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7876")) {
        {}
      } else {
        stryCov_9fa48("7876");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* setDefaultSemesterById({
  semesterId
}) {
  if (stryMutAct_9fa48("7877")) {
    {}
  } else {
    stryCov_9fa48("7877");
    try {
      if (stryMutAct_9fa48("7878")) {
        {}
      } else {
        stryCov_9fa48("7878");
        const semesters = yield select(getSemestersState);
        const oldDefaultSemester = stryMutAct_9fa48("7879") ? {} : (stryCov_9fa48("7879"), {
          ...semesters.find(stryMutAct_9fa48("7880") ? () => undefined : (stryCov_9fa48("7880"), semesterItem => stryMutAct_9fa48("7883") ? semesterItem.defaultSemester || semesterItem.id !== semesterId : stryMutAct_9fa48("7882") ? false : stryMutAct_9fa48("7881") ? true : (stryCov_9fa48("7881", "7882", "7883"), semesterItem.defaultSemester && (stryMutAct_9fa48("7885") ? semesterItem.id === semesterId : stryMutAct_9fa48("7884") ? true : (stryCov_9fa48("7884", "7885"), semesterItem.id !== semesterId)))))
        });
        if (stryMutAct_9fa48("7887") ? false : stryMutAct_9fa48("7886") ? true : (stryCov_9fa48("7886", "7887"), oldDefaultSemester)) {
          if (stryMutAct_9fa48("7888")) {
            {}
          } else {
            stryCov_9fa48("7888");
            oldDefaultSemester.defaultSemester = stryMutAct_9fa48("7889") ? true : (stryCov_9fa48("7889"), false);
            yield put(updateSemesterSuccess(oldDefaultSemester));
          }
        }
        const requestUrl = stryMutAct_9fa48("7890") ? `` : (stryCov_9fa48("7890"), `${DEFAULT_SEMESTER_URL}?semesterId=${semesterId}`);
        const {
          data
        } = yield call(axiosCall, requestUrl, PUT);
        yield put(updateSemesterSuccess(data));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_SEMESTER_LABEL, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7891")) {
        {}
      } else {
        stryCov_9fa48("7891");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* toggleSemesterVisibility({
  semester
}) {
  if (stryMutAct_9fa48("7892")) {
    {}
  } else {
    stryCov_9fa48("7892");
    try {
      if (stryMutAct_9fa48("7893")) {
        {}
      } else {
        stryCov_9fa48("7893");
        yield call(axiosCall, SEMESTERS_URL, PUT, semester);
        yield put(deleteSemesterSuccess(semester.id));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_SEMESTER_LABEL, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7894")) {
        {}
      } else {
        stryCov_9fa48("7894");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* semesterCopy({
  values
}) {
  if (stryMutAct_9fa48("7895")) {
    {}
  } else {
    stryCov_9fa48("7895");
    try {
      if (stryMutAct_9fa48("7896")) {
        {}
      } else {
        stryCov_9fa48("7896");
        const requestUrl = stryMutAct_9fa48("7897") ? `` : (stryCov_9fa48("7897"), `${SEMESTER_COPY_URL}?fromSemesterId=${values.fromSemesterId}&toSemesterId=${values.toSemesterId}`);
        yield call(axiosCall, requestUrl, POST);
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_SEMESTER_LABEL, COPIED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7898")) {
        {}
      } else {
        stryCov_9fa48("7898");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* createArchiveSemester({
  semesterId
}) {
  if (stryMutAct_9fa48("7899")) {
    {}
  } else {
    stryCov_9fa48("7899");
    try {
      if (stryMutAct_9fa48("7900")) {
        {}
      } else {
        stryCov_9fa48("7900");
        const requestUrl = stryMutAct_9fa48("7901") ? `` : (stryCov_9fa48("7901"), `${ARCHIVE_SEMESTER}/${semesterId}`);
        yield call(axiosCall, requestUrl, POST);
        yield put(moveToArchivedSemesterSuccess(semesterId));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_SEMESTER_LABEL, ARCHIVED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7902")) {
        {}
      } else {
        stryCov_9fa48("7902");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* getArchivedSemesterById({
  semesterId
}) {
  if (stryMutAct_9fa48("7903")) {
    {}
  } else {
    stryCov_9fa48("7903");
    try {
      if (stryMutAct_9fa48("7904")) {
        {}
      } else {
        stryCov_9fa48("7904");
        yield put(setScheduleType(stryMutAct_9fa48("7905") ? "" : (stryCov_9fa48("7905"), 'archived')));
        const requestUrl = stryMutAct_9fa48("7906") ? `` : (stryCov_9fa48("7906"), `${ARCHIVE_SEMESTER}/${semesterId}`);
        const {
          data
        } = yield call(axiosCall, requestUrl);
        yield put(getFullScheduleSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7907")) {
        {}
      } else {
        stryCov_9fa48("7907");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* CopyLessonsFromSemester({
  values
}) {
  if (stryMutAct_9fa48("7908")) {
    {}
  } else {
    stryCov_9fa48("7908");
    try {
      if (stryMutAct_9fa48("7909")) {
        {}
      } else {
        stryCov_9fa48("7909");
        const requestUrl = stryMutAct_9fa48("7910") ? `` : (stryCov_9fa48("7910"), `${LESSONS_FROM_SEMESTER_COPY_URL}?fromSemesterId=${values.fromSemesterId}&toSemesterId=${values.toSemesterId}`);
        yield call(axiosCall, requestUrl, POST);
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_LESSON_LABEL, COPIED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7911")) {
        {}
      } else {
        stryCov_9fa48("7911");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* watchSemester() {
  if (stryMutAct_9fa48("7912")) {
    {}
  } else {
    stryCov_9fa48("7912");
    yield takeLatest(actionTypes.GET_ALL_SEMESTERS_START, getAllSemestersItems);
    yield takeLatest(actionTypes.GET_DISABLED_SEMESTERS_START, getDisabledSemestersItems);
    yield takeLatest(actionTypes.SET_ARCHIVED_SEMESTERS_START, getArchivedSemestersItems);
    yield takeLatest(actionTypes.GET_ARCHIVE_SEMESTER_BY_ID_START, getArchivedSemesterById);
    yield takeEvery(actionTypes.SET_GROUPS_TO_SEMESTER_START, setGroupsToSemester);
    yield takeEvery(actionTypes.DELETE_SEMESTER_START, deleteSemesterItem);
    yield takeEvery(actionTypes.UPDATE_SEMESTER_START, updateSemesterItem);
    yield takeEvery(actionTypes.ADD_SEMESTER_START, addSemesterItem);
    yield takeLatest(actionTypes.UPDATE_SEMESTER_BY_ID_START_SUCCESS, setDefaultSemesterById);
    yield takeEvery(actionTypes.SET_SEMESTER_COPY_START, semesterCopy);
    yield takeEvery(actionTypes.CREATE_ARCHIVE_SEMESTER_START, createArchiveSemester);
    yield takeEvery(actionTypes.COPY_LESSONS_FROM_SEMESTER_START, CopyLessonsFromSemester);
    yield takeEvery(actionTypes.HANDLE_SEMESTER_FORM_SUBMIT_START, handleSemesterFormSubmit);
    yield takeEvery(actionTypes.TOGGLE_SEMESTER_VISIBILITY_START, toggleSemesterVisibility);
  }
}