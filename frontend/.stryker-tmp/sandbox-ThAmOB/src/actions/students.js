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
export const createStudentSuccess = stryMutAct_9fa48("597") ? () => undefined : (stryCov_9fa48("597"), (() => {
  const createStudentSuccess = student => stryMutAct_9fa48("598") ? {} : (stryCov_9fa48("598"), {
    type: actionTypes.CREATE_STUDENT,
    student
  });
  return createStudentSuccess;
})());
export const showAllStudents = stryMutAct_9fa48("599") ? () => undefined : (stryCov_9fa48("599"), (() => {
  const showAllStudents = payload => stryMutAct_9fa48("600") ? {} : (stryCov_9fa48("600"), {
    type: actionTypes.SHOW_ALL_STUDENTS,
    payload
  });
  return showAllStudents;
})());
export const deleteStudentSuccess = stryMutAct_9fa48("601") ? () => undefined : (stryCov_9fa48("601"), (() => {
  const deleteStudentSuccess = id => stryMutAct_9fa48("602") ? {} : (stryCov_9fa48("602"), {
    type: actionTypes.DELETE_STUDENT,
    id
  });
  return deleteStudentSuccess;
})());
export const deleteAllStudentSuccess = stryMutAct_9fa48("603") ? () => undefined : (stryCov_9fa48("603"), (() => {
  const deleteAllStudentSuccess = students => stryMutAct_9fa48("604") ? {} : (stryCov_9fa48("604"), {
    type: actionTypes.DELETE_SELECTED_STUDENTS,
    students
  });
  return deleteAllStudentSuccess;
})());
export const selectStudentSuccess = stryMutAct_9fa48("605") ? () => undefined : (stryCov_9fa48("605"), (() => {
  const selectStudentSuccess = id => stryMutAct_9fa48("606") ? {} : (stryCov_9fa48("606"), {
    type: actionTypes.SET_STUDENT,
    id
  });
  return selectStudentSuccess;
})());
export const updateStudentSuccess = stryMutAct_9fa48("607") ? () => undefined : (stryCov_9fa48("607"), (() => {
  const updateStudentSuccess = student => stryMutAct_9fa48("608") ? {} : (stryCov_9fa48("608"), {
    type: actionTypes.UPDATE_STUDENT,
    student
  });
  return updateStudentSuccess;
})());
export const checkAllStudentsSuccess = stryMutAct_9fa48("609") ? () => undefined : (stryCov_9fa48("609"), (() => {
  const checkAllStudentsSuccess = (checkedStudents, checkedAll) => stryMutAct_9fa48("610") ? {} : (stryCov_9fa48("610"), {
    type: actionTypes.CHECK_ALL_STUDENTS,
    checkedStudents,
    checkedAll
  });
  return checkAllStudentsSuccess;
})());
export const getAllStudentsStart = stryMutAct_9fa48("611") ? () => undefined : (stryCov_9fa48("611"), (() => {
  const getAllStudentsStart = id => stryMutAct_9fa48("612") ? {} : (stryCov_9fa48("612"), {
    type: actionTypes.GET_ALL_STUDENTS,
    id
  });
  return getAllStudentsStart;
})());
export const submitStudentStart = stryMutAct_9fa48("613") ? () => undefined : (stryCov_9fa48("613"), (() => {
  const submitStudentStart = (data, groupId) => stryMutAct_9fa48("614") ? {} : (stryCov_9fa48("614"), {
    type: actionTypes.SUBMIT_STUDENT_FORM,
    data,
    groupId
  });
  return submitStudentStart;
})());
export const deleteStudentStart = stryMutAct_9fa48("615") ? () => undefined : (stryCov_9fa48("615"), (() => {
  const deleteStudentStart = id => stryMutAct_9fa48("616") ? {} : (stryCov_9fa48("616"), {
    type: actionTypes.DELETE_STUDENT_START,
    id
  });
  return deleteStudentStart;
})());
export const uploadStudentsToGroupStart = stryMutAct_9fa48("617") ? () => undefined : (stryCov_9fa48("617"), (() => {
  const uploadStudentsToGroupStart = (file, id) => stryMutAct_9fa48("618") ? {} : (stryCov_9fa48("618"), {
    type: actionTypes.UPLOAD_FILE_STUDENT_START,
    file,
    id
  });
  return uploadStudentsToGroupStart;
})());
export const moveStudentsToGroupStart = stryMutAct_9fa48("619") ? () => undefined : (stryCov_9fa48("619"), (() => {
  const moveStudentsToGroupStart = group => stryMutAct_9fa48("620") ? {} : (stryCov_9fa48("620"), {
    type: actionTypes.MOVE_STUDENTS_TO_GROUP_START,
    group
  });
  return moveStudentsToGroupStart;
})());