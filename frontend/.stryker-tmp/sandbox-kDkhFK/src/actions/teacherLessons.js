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
import * as actionsType from './actionsType';
export const getLessonsByTeacherStart = stryMutAct_9fa48("635") ? () => undefined : (stryCov_9fa48("635"), (() => {
  const getLessonsByTeacherStart = teacherId => stryMutAct_9fa48("636") ? {} : (stryCov_9fa48("636"), {
    type: actionsType.GET_LESSONS_BY_TEACHER_START,
    teacherId
  });
  return getLessonsByTeacherStart;
})());
export const getLessonsByTeacherSuccess = stryMutAct_9fa48("637") ? () => undefined : (stryCov_9fa48("637"), (() => {
  const getLessonsByTeacherSuccess = (lessons, teacher) => stryMutAct_9fa48("638") ? {} : (stryCov_9fa48("638"), {
    type: actionsType.GET_LESSONS_BY_TEACHER_SUCCESS,
    lessons,
    teacher
  });
  return getLessonsByTeacherSuccess;
})());
export const updateLessonLinkStart = stryMutAct_9fa48("639") ? () => undefined : (stryCov_9fa48("639"), (() => {
  const updateLessonLinkStart = (lessonId, link) => stryMutAct_9fa48("640") ? {} : (stryCov_9fa48("640"), {
    type: actionsType.UPDATE_LESSON_LINK_START,
    lessonId,
    link
  });
  return updateLessonLinkStart;
})());
export const updateLessonLinkSuccess = stryMutAct_9fa48("641") ? () => undefined : (stryCov_9fa48("641"), (() => {
  const updateLessonLinkSuccess = lesson => stryMutAct_9fa48("642") ? {} : (stryCov_9fa48("642"), {
    type: actionsType.UPDATE_LESSON_LINK_SUCCESS,
    lesson
  });
  return updateLessonLinkSuccess;
})());
export const clearTeacherLessons = stryMutAct_9fa48("643") ? () => undefined : (stryCov_9fa48("643"), (() => {
  const clearTeacherLessons = () => stryMutAct_9fa48("644") ? {} : (stryCov_9fa48("644"), {
    type: actionsType.CLEAR_TEACHER_LESSONS
  });
  return clearTeacherLessons;
})());
export const setTeacherLessonsLoading = stryMutAct_9fa48("645") ? () => undefined : (stryCov_9fa48("645"), (() => {
  const setTeacherLessonsLoading = loading => stryMutAct_9fa48("646") ? {} : (stryCov_9fa48("646"), {
    type: actionsType.SET_TEACHER_LESSONS_LOADING,
    loading
  });
  return setTeacherLessonsLoading;
})());
export const updateLessonsLinkStart = stryMutAct_9fa48("647") ? () => undefined : (stryCov_9fa48("647"), (() => {
  const updateLessonsLinkStart = linkData => stryMutAct_9fa48("648") ? {} : (stryCov_9fa48("648"), {
    type: actionsType.UPDATE_LESSONS_LINK_START,
    linkData
  });
  return updateLessonsLinkStart;
})());
export const updateLessonsLinkSuccess = stryMutAct_9fa48("649") ? () => undefined : (stryCov_9fa48("649"), (() => {
  const updateLessonsLinkSuccess = lessons => stryMutAct_9fa48("650") ? {} : (stryCov_9fa48("650"), {
    type: actionsType.UPDATE_LESSONS_LINK_SUCCESS,
    lessons
  });
  return updateLessonsLinkSuccess;
})());