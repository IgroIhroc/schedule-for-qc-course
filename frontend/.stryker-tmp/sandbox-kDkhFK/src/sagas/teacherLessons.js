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
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { axiosCall } from '../services/axios';
import { GET, PUT } from '../constants/methods';
import { LESSON_URL } from '../constants/axios';
import { BACK_END_SUCCESS_OPERATION, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { FORM_LESSON_LABEL } from '../constants/translationLabels/formElements';
import { createErrorMessage, createMessage } from '../utils/sagaUtils';
import { setOpenErrorSnackbar, setOpenSuccessSnackbar } from '../actions/snackbar';
import * as actionTypes from '../actions/actionsType';
import { getLessonsByTeacherSuccess, setTeacherLessonsLoading, updateLessonsLinkSuccess } from '../actions/teacherLessons';
export function* getLessonsByTeacher({
  teacherId
}) {
  if (stryMutAct_9fa48("7974")) {
    {}
  } else {
    stryCov_9fa48("7974");
    try {
      if (stryMutAct_9fa48("7975")) {
        {}
      } else {
        stryCov_9fa48("7975");
        yield put(setTeacherLessonsLoading(stryMutAct_9fa48("7976") ? false : (stryCov_9fa48("7976"), true)));
        const state = yield select();
        const teacher = state.teachers.teachers.find(stryMutAct_9fa48("7977") ? () => undefined : (stryCov_9fa48("7977"), t => stryMutAct_9fa48("7980") ? t.id !== teacherId : stryMutAct_9fa48("7979") ? false : stryMutAct_9fa48("7978") ? true : (stryCov_9fa48("7978", "7979", "7980"), t.id === teacherId)));
        const requestUrl = stryMutAct_9fa48("7981") ? `` : (stryCov_9fa48("7981"), `${LESSON_URL}/teacher?teacherId=${teacherId}`);
        const {
          data
        } = yield call(axiosCall, requestUrl, GET);
        yield put(getLessonsByTeacherSuccess(data, teacher));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7982")) {
        {}
      } else {
        stryCov_9fa48("7982");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
        yield put(setTeacherLessonsLoading(stryMutAct_9fa48("7983") ? true : (stryCov_9fa48("7983"), false)));
      }
    }
  }
}
export function* updateLessonsLink({
  linkData
}) {
  if (stryMutAct_9fa48("7984")) {
    {}
  } else {
    stryCov_9fa48("7984");
    try {
      if (stryMutAct_9fa48("7985")) {
        {}
      } else {
        stryCov_9fa48("7985");
        const requestUrl = stryMutAct_9fa48("7986") ? `` : (stryCov_9fa48("7986"), `${LESSON_URL}/link`);
        yield call(axiosCall, requestUrl, PUT, linkData);
        const message = createMessage(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("7989") ? FORM_LESSON_LABEL && 'Посилання' : stryMutAct_9fa48("7988") ? false : stryMutAct_9fa48("7987") ? true : (stryCov_9fa48("7987", "7988", "7989"), FORM_LESSON_LABEL || (stryMutAct_9fa48("7990") ? "" : (stryCov_9fa48("7990"), 'Посилання'))), UPDATED_LABEL);
        const state = yield select();
        const teacherId = stryMutAct_9fa48("7991") ? state.teacherLessons.selectedTeacher.id : (stryCov_9fa48("7991"), state.teacherLessons.selectedTeacher?.id);
        if (stryMutAct_9fa48("7993") ? false : stryMutAct_9fa48("7992") ? true : (stryCov_9fa48("7992", "7993"), teacherId)) {
          if (stryMutAct_9fa48("7994")) {
            {}
          } else {
            stryCov_9fa48("7994");
            const lessonsUrl = stryMutAct_9fa48("7995") ? `` : (stryCov_9fa48("7995"), `${LESSON_URL}/teacher?teacherId=${teacherId}`);
            const {
              data
            } = yield call(axiosCall, lessonsUrl, GET);
            yield put(updateLessonsLinkSuccess(data));
          }
        }
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7996")) {
        {}
      } else {
        stryCov_9fa48("7996");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export default function* watchTeacherLessons() {
  if (stryMutAct_9fa48("7997")) {
    {}
  } else {
    stryCov_9fa48("7997");
    yield takeLatest(actionTypes.GET_LESSONS_BY_TEACHER_START, getLessonsByTeacher);
    yield takeLatest(actionTypes.UPDATE_LESSONS_LINK_START, updateLessonsLink);
  }
}