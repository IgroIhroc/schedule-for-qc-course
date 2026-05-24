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
export const handleTeacherStart = stryMutAct_9fa48("651") ? () => undefined : (stryCov_9fa48("651"), (() => {
  const handleTeacherStart = values => stryMutAct_9fa48("652") ? {} : (stryCov_9fa48("652"), {
    type: actionsType.HANDLE_TEACHER_START,
    values
  });
  return handleTeacherStart;
})());
export const addTeacherSuccess = stryMutAct_9fa48("653") ? () => undefined : (stryCov_9fa48("653"), (() => {
  const addTeacherSuccess = teacher => stryMutAct_9fa48("654") ? {} : (stryCov_9fa48("654"), {
    type: actionsType.ADD_TEACHER_SUCCESS,
    teacher
  });
  return addTeacherSuccess;
})());
export const addTeacherStart = stryMutAct_9fa48("655") ? () => undefined : (stryCov_9fa48("655"), (() => {
  const addTeacherStart = teacher => stryMutAct_9fa48("656") ? {} : (stryCov_9fa48("656"), {
    type: actionsType.ADD_TEACHER_START,
    teacher
  });
  return addTeacherStart;
})());
export const setTeacher = stryMutAct_9fa48("657") ? () => undefined : (stryCov_9fa48("657"), (() => {
  const setTeacher = teacher => stryMutAct_9fa48("658") ? {} : (stryCov_9fa48("658"), {
    type: actionsType.SET_TEACHER,
    teacher
  });
  return setTeacher;
})());
export const toggleTeacherStart = stryMutAct_9fa48("659") ? () => undefined : (stryCov_9fa48("659"), (() => {
  const toggleTeacherStart = (teacherId, disableStatus) => stryMutAct_9fa48("660") ? {} : (stryCov_9fa48("660"), {
    type: actionsType.TOOGLE_TEACHER_START,
    teacherId,
    disableStatus
  });
  return toggleTeacherStart;
})());
export const deleteTeacherSuccess = stryMutAct_9fa48("661") ? () => undefined : (stryCov_9fa48("661"), (() => {
  const deleteTeacherSuccess = (id, disableStatus) => stryMutAct_9fa48("662") ? {} : (stryCov_9fa48("662"), {
    type: actionsType.DELETE_TEACHER_SUCCESS,
    id,
    disableStatus
  });
  return deleteTeacherSuccess;
})());
export const deleteTeacherStart = stryMutAct_9fa48("663") ? () => undefined : (stryCov_9fa48("663"), (() => {
  const deleteTeacherStart = id => stryMutAct_9fa48("664") ? {} : (stryCov_9fa48("664"), {
    type: actionsType.DELETE_TEACHER_START,
    id
  });
  return deleteTeacherStart;
})());
export const selectTeacherCard = stryMutAct_9fa48("665") ? () => undefined : (stryCov_9fa48("665"), (() => {
  const selectTeacherCard = teacher => stryMutAct_9fa48("666") ? {} : (stryCov_9fa48("666"), {
    type: actionsType.SELECT_TEACHER,
    teacher
  });
  return selectTeacherCard;
})());
export const updateTeacherCardSuccess = stryMutAct_9fa48("667") ? () => undefined : (stryCov_9fa48("667"), (() => {
  const updateTeacherCardSuccess = teacher => stryMutAct_9fa48("668") ? {} : (stryCov_9fa48("668"), {
    type: actionsType.UPDATE_TEACHER_SUCCESS,
    teacher
  });
  return updateTeacherCardSuccess;
})());
export const updateTeacherCardStart = stryMutAct_9fa48("669") ? () => undefined : (stryCov_9fa48("669"), (() => {
  const updateTeacherCardStart = teacher => stryMutAct_9fa48("670") ? {} : (stryCov_9fa48("670"), {
    type: actionsType.UPDATE_TEACHER_START,
    teacher
  });
  return updateTeacherCardStart;
})());
export const showAllTeachersSuccess = stryMutAct_9fa48("671") ? () => undefined : (stryCov_9fa48("671"), (() => {
  const showAllTeachersSuccess = teachers => stryMutAct_9fa48("672") ? {} : (stryCov_9fa48("672"), {
    type: actionsType.SHOW_ALL_TEACHERS_SUCCESS,
    teachers
  });
  return showAllTeachersSuccess;
})());
export const showAllTeachersStart = stryMutAct_9fa48("673") ? () => undefined : (stryCov_9fa48("673"), (() => {
  const showAllTeachersStart = teachers => stryMutAct_9fa48("674") ? {} : (stryCov_9fa48("674"), {
    type: actionsType.SHOW_ALL_TEACHERS_START,
    teachers
  });
  return showAllTeachersStart;
})());
export const getTeacherWithoutAccountStart = stryMutAct_9fa48("675") ? () => undefined : (stryCov_9fa48("675"), (() => {
  const getTeacherWithoutAccountStart = teachers => stryMutAct_9fa48("676") ? {} : (stryCov_9fa48("676"), {
    type: actionsType.GET_TEACHERS_WITHOUT_ACCOUNT_START,
    teachers
  });
  return getTeacherWithoutAccountStart;
})());
export const getTeacherWithoutAccountSuccess = stryMutAct_9fa48("677") ? () => undefined : (stryCov_9fa48("677"), (() => {
  const getTeacherWithoutAccountSuccess = teachers => stryMutAct_9fa48("678") ? {} : (stryCov_9fa48("678"), {
    type: actionsType.GET_TEACHERS_WITHOUT_ACCOUNT_SUCCESS,
    teachers
  });
  return getTeacherWithoutAccountSuccess;
})());
export const getAllPublicTeachersByDepartmentStart = stryMutAct_9fa48("679") ? () => undefined : (stryCov_9fa48("679"), (() => {
  const getAllPublicTeachersByDepartmentStart = departmentId => stryMutAct_9fa48("680") ? {} : (stryCov_9fa48("680"), {
    type: actionsType.GET_ALL_PUBLIC_TEACHERS_BY_DEPARTMENT_START,
    departmentId
  });
  return getAllPublicTeachersByDepartmentStart;
})());
export const getAllTeachersByDepartmentId = stryMutAct_9fa48("681") ? () => undefined : (stryCov_9fa48("681"), (() => {
  const getAllTeachersByDepartmentId = teachers => stryMutAct_9fa48("682") ? {} : (stryCov_9fa48("682"), {
    type: actionsType.GET_TEACHERS_BY_DEPARTMENT,
    teachers
  });
  return getAllTeachersByDepartmentId;
})());
export const setDisabledTeachersSuccess = stryMutAct_9fa48("683") ? () => undefined : (stryCov_9fa48("683"), (() => {
  const setDisabledTeachersSuccess = teachers => stryMutAct_9fa48("684") ? {} : (stryCov_9fa48("684"), {
    type: actionsType.SET_DISABLED_TEACHERS_SUCCESS,
    teachers
  });
  return setDisabledTeachersSuccess;
})());
export const setDisabledTeachersStart = stryMutAct_9fa48("685") ? () => undefined : (stryCov_9fa48("685"), (() => {
  const setDisabledTeachersStart = teachers => stryMutAct_9fa48("686") ? {} : (stryCov_9fa48("686"), {
    type: actionsType.SET_DISABLED_TEACHERS_START,
    teachers
  });
  return setDisabledTeachersStart;
})());