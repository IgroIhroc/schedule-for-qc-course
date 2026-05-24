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
export const HOME_PAGE_LINK = stryMutAct_9fa48("4395") ? "" : (stryCov_9fa48("4395"), '/');
export const ADMIN_PAGE_LINK = stryMutAct_9fa48("4396") ? "" : (stryCov_9fa48("4396"), '/admin');
export const SCHEDULE_PAGE_LINK = stryMutAct_9fa48("4397") ? "" : (stryCov_9fa48("4397"), '/admin/schedules');
export const LOGIN_LINK = stryMutAct_9fa48("4398") ? "" : (stryCov_9fa48("4398"), '/login');
export const ACTIVATION_PAGE_LINK = stryMutAct_9fa48("4399") ? "" : (stryCov_9fa48("4399"), '/activation-page');
export const LOGOUT_LINK = stryMutAct_9fa48("4400") ? "" : (stryCov_9fa48("4400"), '/logout');
export const TEACHER_SCHEDULE_LINK = stryMutAct_9fa48("4401") ? "" : (stryCov_9fa48("4401"), '/teacher-schedule');
export const MY_PROFILE_LINK = stryMutAct_9fa48("4402") ? "" : (stryCov_9fa48("4402"), '/my-profile');
export const LESSON_PAGE_LINK = stryMutAct_9fa48("4403") ? "" : (stryCov_9fa48("4403"), '/admin/lessons');
export const TEACHER_LIST_LINK = stryMutAct_9fa48("4404") ? "" : (stryCov_9fa48("4404"), '/admin/teachers');
export const GROUP_LIST_LINK = stryMutAct_9fa48("4405") ? "" : (stryCov_9fa48("4405"), '/admin/groups');
export const GROUP_LIST_PARAM_LINK = stryMutAct_9fa48("4406") ? "" : (stryCov_9fa48("4406"), '/admin/groups/:id?/:action?');
export const GROUP_LINK = stryMutAct_9fa48("4407") ? "" : (stryCov_9fa48("4407"), '/group');
export const STUDENT_LINK = stryMutAct_9fa48("4408") ? "" : (stryCov_9fa48("4408"), '/student');
export const EDIT_LINK = stryMutAct_9fa48("4409") ? "" : (stryCov_9fa48("4409"), '/edit');
export const DELETE_LINK = stryMutAct_9fa48("4410") ? "" : (stryCov_9fa48("4410"), '/delete');
export const ADD_STUDENT_LINK = stryMutAct_9fa48("4411") ? "" : (stryCov_9fa48("4411"), '/add-student');
export const SET_DISABLE_LINK = stryMutAct_9fa48("4412") ? "" : (stryCov_9fa48("4412"), '/set-disable');
export const SHOW_STUDENTS_LINK = stryMutAct_9fa48("4413") ? "" : (stryCov_9fa48("4413"), '/show-students');
export const ID_PARAM_LINK = stryMutAct_9fa48("4414") ? "" : (stryCov_9fa48("4414"), '/:id');
export const ID_STUDENT_PARAM_LINK = stryMutAct_9fa48("4415") ? "" : (stryCov_9fa48("4415"), '/:idStudent');
export const CLASS_SCHEDULE_TITLE_LINK = stryMutAct_9fa48("4416") ? "" : (stryCov_9fa48("4416"), '/admin/period');
export const ROOM_LIST_LINK = stryMutAct_9fa48("4417") ? "" : (stryCov_9fa48("4417"), '/admin/rooms');
export const SUBJECT_PAGE_LINK = stryMutAct_9fa48("4418") ? "" : (stryCov_9fa48("4418"), '/admin/subjects');
export const BUST_ROOMS_LINK = stryMutAct_9fa48("4419") ? "" : (stryCov_9fa48("4419"), '/admin/busy-rooms');
export const SEMESTER_PAGE_LINK = stryMutAct_9fa48("4420") ? "" : (stryCov_9fa48("4420"), '/admin/semesters');
export const MARGE_ROLE_PAGE_LINK = stryMutAct_9fa48("4421") ? "" : (stryCov_9fa48("4421"), '/admin/users');
export const CHANGES_LINK = stryMutAct_9fa48("4422") ? "" : (stryCov_9fa48("4422"), '/admin/changes');
export const SCHEDULE_FOR_LINK = stryMutAct_9fa48("4423") ? "" : (stryCov_9fa48("4423"), '/schedule');
export const REGISTRATION_LINK = stryMutAct_9fa48("4424") ? "" : (stryCov_9fa48("4424"), '/registration');
export const RESET_PASSWORD_LINK = stryMutAct_9fa48("4425") ? "" : (stryCov_9fa48("4425"), '/reset-password');
export const DEPARTMENTS_LINK = stryMutAct_9fa48("4426") ? "" : (stryCov_9fa48("4426"), '/admin/departments');
export const TEACHER_LESSONS_LINK = stryMutAct_9fa48("4427") ? "" : (stryCov_9fa48("4427"), '/admin/teacher-lessons');