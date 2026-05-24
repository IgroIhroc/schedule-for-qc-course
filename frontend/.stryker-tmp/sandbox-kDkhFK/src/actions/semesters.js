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
export const getAllSemestersSuccess = stryMutAct_9fa48("529") ? () => undefined : (stryCov_9fa48("529"), (() => {
  const getAllSemestersSuccess = semesters => stryMutAct_9fa48("530") ? {} : (stryCov_9fa48("530"), {
    type: actionTypes.SHOW_ALL_SEMESTERS_SUCCESS,
    semesters
  });
  return getAllSemestersSuccess;
})());
export const getAllSemestersStart = stryMutAct_9fa48("531") ? () => undefined : (stryCov_9fa48("531"), (() => {
  const getAllSemestersStart = () => stryMutAct_9fa48("532") ? {} : (stryCov_9fa48("532"), {
    type: actionTypes.GET_ALL_SEMESTERS_START
  });
  return getAllSemestersStart;
})());
export const getDisabledSemestersSuccess = stryMutAct_9fa48("533") ? () => undefined : (stryCov_9fa48("533"), (() => {
  const getDisabledSemestersSuccess = semesters => stryMutAct_9fa48("534") ? {} : (stryCov_9fa48("534"), {
    type: actionTypes.SET_DISABLED_SEMESTERS_SUCCESS,
    semesters
  });
  return getDisabledSemestersSuccess;
})());
export const getDisabledSemestersStart = stryMutAct_9fa48("535") ? () => undefined : (stryCov_9fa48("535"), (() => {
  const getDisabledSemestersStart = () => stryMutAct_9fa48("536") ? {} : (stryCov_9fa48("536"), {
    type: actionTypes.GET_DISABLED_SEMESTERS_START
  });
  return getDisabledSemestersStart;
})());
export const getArchivedSemestersSuccess = stryMutAct_9fa48("537") ? () => undefined : (stryCov_9fa48("537"), (() => {
  const getArchivedSemestersSuccess = semesters => stryMutAct_9fa48("538") ? {} : (stryCov_9fa48("538"), {
    type: actionTypes.SET_ARCHIVED_SEMESTERS_SUCCESS,
    semesters
  });
  return getArchivedSemestersSuccess;
})());
export const getArchivedSemesterByIdStart = stryMutAct_9fa48("539") ? () => undefined : (stryCov_9fa48("539"), (() => {
  const getArchivedSemesterByIdStart = semesterId => stryMutAct_9fa48("540") ? {} : (stryCov_9fa48("540"), {
    type: actionTypes.GET_ARCHIVE_SEMESTER_BY_ID_START,
    semesterId
  });
  return getArchivedSemesterByIdStart;
})());
export const createArchivedSemesterStart = stryMutAct_9fa48("541") ? () => undefined : (stryCov_9fa48("541"), (() => {
  const createArchivedSemesterStart = semesterId => stryMutAct_9fa48("542") ? {} : (stryCov_9fa48("542"), {
    type: actionTypes.CREATE_ARCHIVE_SEMESTER_START,
    semesterId
  });
  return createArchivedSemesterStart;
})());
export const getArchivedSemestersStart = stryMutAct_9fa48("543") ? () => undefined : (stryCov_9fa48("543"), (() => {
  const getArchivedSemestersStart = () => stryMutAct_9fa48("544") ? {} : (stryCov_9fa48("544"), {
    type: actionTypes.SET_ARCHIVED_SEMESTERS_START
  });
  return getArchivedSemestersStart;
})());
export const addSemesterSuccess = stryMutAct_9fa48("545") ? () => undefined : (stryCov_9fa48("545"), (() => {
  const addSemesterSuccess = item => stryMutAct_9fa48("546") ? {} : (stryCov_9fa48("546"), {
    type: actionTypes.ADD_SEMESTER_SUCCESS,
    item
  });
  return addSemesterSuccess;
})());
export const addSemesterStart = stryMutAct_9fa48("547") ? () => undefined : (stryCov_9fa48("547"), (() => {
  const addSemesterStart = item => stryMutAct_9fa48("548") ? {} : (stryCov_9fa48("548"), {
    type: actionTypes.ADD_SEMESTER_START,
    item
  });
  return addSemesterStart;
})());
export const deleteSemesterSuccess = stryMutAct_9fa48("549") ? () => undefined : (stryCov_9fa48("549"), (() => {
  const deleteSemesterSuccess = semesterId => stryMutAct_9fa48("550") ? {} : (stryCov_9fa48("550"), {
    type: actionTypes.DELETE_SEMESTER_SUCCESS,
    semesterId
  });
  return deleteSemesterSuccess;
})());
export const deleteSemesterStart = stryMutAct_9fa48("551") ? () => undefined : (stryCov_9fa48("551"), (() => {
  const deleteSemesterStart = semesterId => stryMutAct_9fa48("552") ? {} : (stryCov_9fa48("552"), {
    type: actionTypes.DELETE_SEMESTER_START,
    semesterId
  });
  return deleteSemesterStart;
})());
export const selectSemesterSuccess = stryMutAct_9fa48("553") ? () => undefined : (stryCov_9fa48("553"), (() => {
  const selectSemesterSuccess = semesterId => stryMutAct_9fa48("554") ? {} : (stryCov_9fa48("554"), {
    type: actionTypes.SELECT_SEMESTER_SUCCESS,
    semesterId
  });
  return selectSemesterSuccess;
})());
export const updateSemesterSuccess = stryMutAct_9fa48("555") ? () => undefined : (stryCov_9fa48("555"), (() => {
  const updateSemesterSuccess = semester => stryMutAct_9fa48("556") ? {} : (stryCov_9fa48("556"), {
    type: actionTypes.UPDATE_SEMESTER_SUCCESS,
    semester
  });
  return updateSemesterSuccess;
})());
export const updateSemesterStart = stryMutAct_9fa48("557") ? () => undefined : (stryCov_9fa48("557"), (() => {
  const updateSemesterStart = item => stryMutAct_9fa48("558") ? {} : (stryCov_9fa48("558"), {
    type: actionTypes.UPDATE_SEMESTER_START,
    item
  });
  return updateSemesterStart;
})());
export const updateSemesterByIdStartSuccess = stryMutAct_9fa48("559") ? () => undefined : (stryCov_9fa48("559"), (() => {
  const updateSemesterByIdStartSuccess = semesterId => stryMutAct_9fa48("560") ? {} : (stryCov_9fa48("560"), {
    type: actionTypes.UPDATE_SEMESTER_BY_ID_START_SUCCESS,
    semesterId
  });
  return updateSemesterByIdStartSuccess;
})());
export const moveToArchivedSemesterSuccess = stryMutAct_9fa48("561") ? () => undefined : (stryCov_9fa48("561"), (() => {
  const moveToArchivedSemesterSuccess = semesterId => stryMutAct_9fa48("562") ? {} : (stryCov_9fa48("562"), {
    type: actionTypes.MOVE_SEMESTER_TO_ARCHIVE_SUCCESS,
    semesterId
  });
  return moveToArchivedSemesterSuccess;
})());
export const clearSemesterSuccess = stryMutAct_9fa48("563") ? () => undefined : (stryCov_9fa48("563"), (() => {
  const clearSemesterSuccess = () => stryMutAct_9fa48("564") ? {} : (stryCov_9fa48("564"), {
    type: actionTypes.CLEAR_SEMESTER_SUCCESS
  });
  return clearSemesterSuccess;
})());
export const handleSemesterFormSubmitStart = stryMutAct_9fa48("565") ? () => undefined : (stryCov_9fa48("565"), (() => {
  const handleSemesterFormSubmitStart = values => stryMutAct_9fa48("566") ? {} : (stryCov_9fa48("566"), {
    type: actionTypes.HANDLE_SEMESTER_FORM_SUBMIT_START,
    values
  });
  return handleSemesterFormSubmitStart;
})());
export const setGroupsToSemesterStart = stryMutAct_9fa48("567") ? () => undefined : (stryCov_9fa48("567"), (() => {
  const setGroupsToSemesterStart = (semesterId, groups) => stryMutAct_9fa48("568") ? {} : (stryCov_9fa48("568"), {
    type: actionTypes.SET_GROUPS_TO_SEMESTER_START,
    semesterId,
    groups
  });
  return setGroupsToSemesterStart;
})());
export const copyLessonsFromSemesterStart = stryMutAct_9fa48("569") ? () => undefined : (stryCov_9fa48("569"), (() => {
  const copyLessonsFromSemesterStart = values => stryMutAct_9fa48("570") ? {} : (stryCov_9fa48("570"), {
    type: actionTypes.COPY_LESSONS_FROM_SEMESTER_START,
    values
  });
  return copyLessonsFromSemesterStart;
})());
export const setSemesterCopyStart = stryMutAct_9fa48("571") ? () => undefined : (stryCov_9fa48("571"), (() => {
  const setSemesterCopyStart = values => stryMutAct_9fa48("572") ? {} : (stryCov_9fa48("572"), {
    type: actionTypes.SET_SEMESTER_COPY_START,
    values
  });
  return setSemesterCopyStart;
})());
export const toggleSemesterVisibilityStart = stryMutAct_9fa48("573") ? () => undefined : (stryCov_9fa48("573"), (() => {
  const toggleSemesterVisibilityStart = semester => stryMutAct_9fa48("574") ? {} : (stryCov_9fa48("574"), {
    type: actionTypes.TOGGLE_SEMESTER_VISIBILITY_START,
    semester
  });
  return toggleSemesterVisibilityStart;
})());