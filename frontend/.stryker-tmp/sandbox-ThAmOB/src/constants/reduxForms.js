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
export const LESSON_FORM = stryMutAct_9fa48("4466") ? "" : (stryCov_9fa48("4466"), 'lessonForm');
export const TEMPORARY_SCHEDULE_FORM = stryMutAct_9fa48("4467") ? "" : (stryCov_9fa48("4467"), 'temporaryScheduleForm');
export const TEMPORARY_SCHEDULE_VACATION_FORM = stryMutAct_9fa48("4468") ? "" : (stryCov_9fa48("4468"), 'temporaryScheduleVacationForm');
export const GROUP_FORM = stryMutAct_9fa48("4469") ? "" : (stryCov_9fa48("4469"), 'addGroup');
export const ROOM_FORM = stryMutAct_9fa48("4470") ? "" : (stryCov_9fa48("4470"), 'AddRoom');
export const ROOM_FORM_TYPE = stryMutAct_9fa48("4471") ? "" : (stryCov_9fa48("4471"), 'roomType');
export const FREE_ROOMS = stryMutAct_9fa48("4472") ? "" : (stryCov_9fa48("4472"), 'FREE_ROOMS');
export const TEACHER_FORM = stryMutAct_9fa48("4473") ? "" : (stryCov_9fa48("4473"), 'addTeacher');
export const STUDENT_FORM = stryMutAct_9fa48("4474") ? "" : (stryCov_9fa48("4474"), 'addStudent');
export const CLASS_FORM = stryMutAct_9fa48("4475") ? "" : (stryCov_9fa48("4475"), 'classForm');
export const LOGIN_FORM = stryMutAct_9fa48("4476") ? "" : (stryCov_9fa48("4476"), 'loginForm');
export const REGISTRATION_FORM = stryMutAct_9fa48("4477") ? "" : (stryCov_9fa48("4477"), 'registrationForm');
export const RESET_PASSWORD_FORM = stryMutAct_9fa48("4478") ? "" : (stryCov_9fa48("4478"), 'resetPasswordForm');
export const SUBJECT_FORM = stryMutAct_9fa48("4479") ? "" : (stryCov_9fa48("4479"), 'addSubject');
export const DEPARTMENT_FORM = stryMutAct_9fa48("4480") ? "" : (stryCov_9fa48("4480"), 'addDepartment');
export const SEMESTER_FORM = stryMutAct_9fa48("4481") ? "" : (stryCov_9fa48("4481"), 'addSemesterSuccess');
export const TEACHER_SCHEDULE_FORM = stryMutAct_9fa48("4482") ? "" : (stryCov_9fa48("4482"), 'teacherScheduleForm');
export const SCHEDULE_SEARCH_FORM = stryMutAct_9fa48("4483") ? "" : (stryCov_9fa48("4483"), 'SchedulePageForm');
export const PROFILE_FORM = stryMutAct_9fa48("4484") ? "" : (stryCov_9fa48("4484"), 'ProfilePage');
export const SEMESTER_COPY_FORM = stryMutAct_9fa48("4485") ? "" : (stryCov_9fa48("4485"), 'SemesterCopyForm');
export const COPY_LESSONS_FROM_SEMESTER_FORM = stryMutAct_9fa48("4486") ? "" : (stryCov_9fa48("4486"), 'CopyLessonsFromSemesterForm');