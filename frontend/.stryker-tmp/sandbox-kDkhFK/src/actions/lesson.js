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
import * as actionTypes from './actionsType';
export const createLessonSuccess = stryMutAct_9fa48("349") ? () => undefined : (stryCov_9fa48("349"), (() => {
  const createLessonSuccess = result => stryMutAct_9fa48("350") ? {} : (stryCov_9fa48("350"), {
    type: actionTypes.CREATE_LESSON_CARD_SUCCESS,
    result
  });
  return createLessonSuccess;
})());
export const getLessonsByGroupStart = stryMutAct_9fa48("351") ? () => undefined : (stryCov_9fa48("351"), (() => {
  const getLessonsByGroupStart = id => stryMutAct_9fa48("352") ? {} : (stryCov_9fa48("352"), {
    type: actionTypes.GET_LESSONS_CARDS_START,
    id
  });
  return getLessonsByGroupStart;
})());
export const setLessonsCardsStart = stryMutAct_9fa48("353") ? () => undefined : (stryCov_9fa48("353"), (() => {
  const setLessonsCardsStart = result => stryMutAct_9fa48("354") ? {} : (stryCov_9fa48("354"), {
    type: actionTypes.SET_LESSONS_CARDS_START,
    result
  });
  return setLessonsCardsStart;
})());
export const getLessonTypesStart = stryMutAct_9fa48("355") ? () => undefined : (stryCov_9fa48("355"), (() => {
  const getLessonTypesStart = () => stryMutAct_9fa48("356") ? {} : (stryCov_9fa48("356"), {
    type: actionTypes.GET_LESSON_TYPES_START
  });
  return getLessonTypesStart;
})());
export const setLessonTypesSuccess = stryMutAct_9fa48("357") ? () => undefined : (stryCov_9fa48("357"), (() => {
  const setLessonTypesSuccess = result => stryMutAct_9fa48("358") ? {} : (stryCov_9fa48("358"), {
    type: actionTypes.SET_LESSON_TYPES_SUCCESS,
    result
  });
  return setLessonTypesSuccess;
})());
export const deleteLessonCardSuccess = stryMutAct_9fa48("359") ? () => undefined : (stryCov_9fa48("359"), (() => {
  const deleteLessonCardSuccess = id => stryMutAct_9fa48("360") ? {} : (stryCov_9fa48("360"), {
    type: actionTypes.DELETE_LESSON_CARD_SUCCESS,
    id
  });
  return deleteLessonCardSuccess;
})());
export const deleteLessonCardStart = stryMutAct_9fa48("361") ? () => undefined : (stryCov_9fa48("361"), (() => {
  const deleteLessonCardStart = id => stryMutAct_9fa48("362") ? {} : (stryCov_9fa48("362"), {
    type: actionTypes.DELETE_LESSON_CARD_START,
    id
  });
  return deleteLessonCardStart;
})());
export const selectLessonCardSuccess = stryMutAct_9fa48("363") ? () => undefined : (stryCov_9fa48("363"), (() => {
  const selectLessonCardSuccess = cardId => stryMutAct_9fa48("364") ? {} : (stryCov_9fa48("364"), {
    type: actionTypes.SELECT_LESSON_CARD_SUCCESS,
    cardId
  });
  return selectLessonCardSuccess;
})());
export const updateLessonCardSuccess = stryMutAct_9fa48("365") ? () => undefined : (stryCov_9fa48("365"), (() => {
  const updateLessonCardSuccess = result => stryMutAct_9fa48("366") ? {} : (stryCov_9fa48("366"), {
    type: actionTypes.UPDATE_LESSON_CARD_SUCCESS,
    result
  });
  return updateLessonCardSuccess;
})());
export const copyLessonCardStart = stryMutAct_9fa48("367") ? () => undefined : (stryCov_9fa48("367"), (() => {
  const copyLessonCardStart = payload => stryMutAct_9fa48("368") ? {} : (stryCov_9fa48("368"), {
    type: actionTypes.COPY_LESSON_START,
    payload
  });
  return copyLessonCardStart;
})());
export const handleLessonStart = stryMutAct_9fa48("369") ? () => undefined : (stryCov_9fa48("369"), (() => {
  const handleLessonStart = payload => stryMutAct_9fa48("370") ? {} : (stryCov_9fa48("370"), {
    type: actionTypes.HANDLE_LESSON_CARD_START,
    payload
  });
  return handleLessonStart;
})());
export const selectGroupId = stryMutAct_9fa48("371") ? () => undefined : (stryCov_9fa48("371"), (() => {
  const selectGroupId = id => stryMutAct_9fa48("372") ? {} : (stryCov_9fa48("372"), {
    type: actionTypes.SELECT_GROUP_ID,
    id
  });
  return selectGroupId;
})());
export const setUniqueError = stryMutAct_9fa48("373") ? () => undefined : (stryCov_9fa48("373"), (() => {
  const setUniqueError = result => stryMutAct_9fa48("374") ? {} : (stryCov_9fa48("374"), {
    type: actionTypes.SET_UNIQUE_ERROR,
    result
  });
  return setUniqueError;
})());