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
import * as actionTypes from '../actions/actionsType';
import { createLessonSuccess, deleteLessonCardSuccess, selectLessonCardSuccess, setLessonsCardsStart, setLessonTypesSuccess, setLoading, updateLessonCardSuccess } from '../actions';
import { setOpenErrorSnackbar, setOpenSuccessSnackbar } from '../actions/snackbar';
import { createErrorMessage, createMessage } from '../utils/sagaUtils';
import { DELETE, GET, POST, PUT } from '../constants/methods';
import { LESSON_FORM } from '../constants/reduxForms';
import { FORM_LESSON_LABEL } from '../constants/translationLabels/formElements';
import { COPY_LESSON_URL, LESSON_TYPES_URL, LESSON_URL } from '../constants/axios';
import { BACK_END_SUCCESS_OPERATION, COPIED_LABEL, CREATED_LABEL, DELETED_LABEL, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { axiosCall } from '../services/axios';
import { handleFormSubmit } from '../helper/handleFormSubmit';
export function* createLessonCard({
  values,
  groupId
}) {
  if (stryMutAct_9fa48("7515")) {
    {}
  } else {
    stryCov_9fa48("7515");
    try {
      if (stryMutAct_9fa48("7516")) {
        {}
      } else {
        stryCov_9fa48("7516");
        const {
          data
        } = yield call(axiosCall, LESSON_URL, POST, values);
        const dataForThisGroup = stryMutAct_9fa48("7517") ? data : (stryCov_9fa48("7517"), data.filter(stryMutAct_9fa48("7518") ? () => undefined : (stryCov_9fa48("7518"), item => stryMutAct_9fa48("7521") ? item.group.id !== groupId : stryMutAct_9fa48("7520") ? false : stryMutAct_9fa48("7519") ? true : (stryCov_9fa48("7519", "7520", "7521"), item.group.id === groupId))));
        yield put(createLessonSuccess(dataForThisGroup));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_LESSON_LABEL, CREATED_LABEL);
        yield put(reset(LESSON_FORM));
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7522")) {
        {}
      } else {
        stryCov_9fa48("7522");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* updateLesson({
  values,
  groupId
}) {
  if (stryMutAct_9fa48("7523")) {
    {}
  } else {
    stryCov_9fa48("7523");
    try {
      if (stryMutAct_9fa48("7524")) {
        {}
      } else {
        stryCov_9fa48("7524");
        const {
          groups,
          ...rest
        } = values;
        const request = stryMutAct_9fa48("7525") ? {} : (stryCov_9fa48("7525"), {
          ...rest,
          group: stryMutAct_9fa48("7526") ? {} : (stryCov_9fa48("7526"), {
            id: groupId
          })
        });
        const {
          data
        } = yield call(axiosCall, LESSON_URL, PUT, request);
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_LESSON_LABEL, UPDATED_LABEL);
        yield put(updateLessonCardSuccess(data));
        yield put(selectLessonCardSuccess(null));
        yield put(reset(LESSON_FORM));
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7527")) {
        {}
      } else {
        stryCov_9fa48("7527");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* handleLesson({
  payload
}) {
  if (stryMutAct_9fa48("7528")) {
    {}
  } else {
    stryCov_9fa48("7528");
    const {
      values,
      groupId
    } = payload;
    try {
      if (stryMutAct_9fa48("7529")) {
        {}
      } else {
        stryCov_9fa48("7529");
        yield call(handleFormSubmit(values, createLessonCard, updateLesson), stryMutAct_9fa48("7530") ? {} : (stryCov_9fa48("7530"), {
          values,
          groupId
        }));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7531")) {
        {}
      } else {
        stryCov_9fa48("7531");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* removeLessonCard({
  id
}) {
  if (stryMutAct_9fa48("7532")) {
    {}
  } else {
    stryCov_9fa48("7532");
    try {
      if (stryMutAct_9fa48("7533")) {
        {}
      } else {
        stryCov_9fa48("7533");
        const requestUrl = stryMutAct_9fa48("7534") ? `` : (stryCov_9fa48("7534"), `${LESSON_URL}/${id}`);
        yield call(axiosCall, requestUrl, DELETE);
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_LESSON_LABEL, DELETED_LABEL);
        yield put(deleteLessonCardSuccess(id));
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7535")) {
        {}
      } else {
        stryCov_9fa48("7535");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* copyLessonCard({
  payload
}) {
  if (stryMutAct_9fa48("7536")) {
    {}
  } else {
    stryCov_9fa48("7536");
    const {
      group,
      lesson
    } = payload;
    const groupList = group.map(groupItem => {
      if (stryMutAct_9fa48("7537")) {
        {}
      } else {
        stryCov_9fa48("7537");
        return groupItem.id;
      }
    });
    try {
      if (stryMutAct_9fa48("7538")) {
        {}
      } else {
        stryCov_9fa48("7538");
        const requestUrl = stryMutAct_9fa48("7539") ? `` : (stryCov_9fa48("7539"), `${COPY_LESSON_URL}?lessonId=${lesson.id}`);
        yield call(axiosCall, requestUrl, POST, groupList);
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_LESSON_LABEL, COPIED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7540")) {
        {}
      } else {
        stryCov_9fa48("7540");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* getLessonsByGroup({
  id
}) {
  if (stryMutAct_9fa48("7541")) {
    {}
  } else {
    stryCov_9fa48("7541");
    try {
      if (stryMutAct_9fa48("7542")) {
        {}
      } else {
        stryCov_9fa48("7542");
        yield put(setLoading(stryMutAct_9fa48("7543") ? false : (stryCov_9fa48("7543"), true)));
        const requestUrl = stryMutAct_9fa48("7544") ? `` : (stryCov_9fa48("7544"), `${LESSON_URL}?groupId=${Number(id)}`);
        const {
          data
        } = yield call(axiosCall, requestUrl, GET, id);
        yield put(setLessonsCardsStart(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7545")) {
        {}
      } else {
        stryCov_9fa48("7545");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7546")) {
        {}
      } else {
        stryCov_9fa48("7546");
        yield put(setLoading(stryMutAct_9fa48("7547") ? true : (stryCov_9fa48("7547"), false)));
      }
    }
  }
}
export function* getLessonTypes() {
  if (stryMutAct_9fa48("7548")) {
    {}
  } else {
    stryCov_9fa48("7548");
    try {
      if (stryMutAct_9fa48("7549")) {
        {}
      } else {
        stryCov_9fa48("7549");
        const {
          data
        } = yield call(axiosCall, LESSON_TYPES_URL, GET);
        yield put(setLessonTypesSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7550")) {
        {}
      } else {
        stryCov_9fa48("7550");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export default function* watchLessons() {
  if (stryMutAct_9fa48("7551")) {
    {}
  } else {
    stryCov_9fa48("7551");
    yield takeLatest(actionTypes.GET_LESSON_TYPES_START, getLessonTypes);
    yield takeLatest(actionTypes.GET_LESSONS_CARDS_START, getLessonsByGroup);
    yield takeLatest(actionTypes.COPY_LESSON_START, copyLessonCard);
    yield takeLatest(actionTypes.DELETE_LESSON_CARD_START, removeLessonCard);
    yield takeLatest(actionTypes.CREATE_LESSON_CARD_START, createLessonCard);
    yield takeLatest(actionTypes.UPDATE_LESSON_CARD_START, updateLesson);
    yield takeLatest(actionTypes.HANDLE_LESSON_CARD_START, handleLesson);
  }
}