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
export const navigationNames = stryMutAct_9fa48("4435") ? {} : (stryCov_9fa48("4435"), {
  TEACHER_LIST: stryMutAct_9fa48("4436") ? "" : (stryCov_9fa48("4436"), 'teachers'),
  GROUP_LIST: stryMutAct_9fa48("4437") ? "" : (stryCov_9fa48("4437"), 'groups'),
  CLASS_SCHEDULE_TITLE: stryMutAct_9fa48("4438") ? "" : (stryCov_9fa48("4438"), 'period'),
  ROOM_LIST: stryMutAct_9fa48("4439") ? "" : (stryCov_9fa48("4439"), 'rooms'),
  SUBJECT_PAGE: stryMutAct_9fa48("4440") ? "" : (stryCov_9fa48("4440"), 'subjects'),
  SEMESTER_PAGE: stryMutAct_9fa48("4441") ? "" : (stryCov_9fa48("4441"), 'semesters'),
  DEPARTMENTS: stryMutAct_9fa48("4442") ? "" : (stryCov_9fa48("4442"), 'departments'),
  LESSON_PAGE: stryMutAct_9fa48("4443") ? "" : (stryCov_9fa48("4443"), 'lessons'),
  MERGE_ROLE_PAGE: stryMutAct_9fa48("4444") ? "" : (stryCov_9fa48("4444"), 'users'),
  CHANGES: stryMutAct_9fa48("4445") ? "" : (stryCov_9fa48("4445"), 'changes'),
  SCHEDULE_PAGE: stryMutAct_9fa48("4446") ? "" : (stryCov_9fa48("4446"), 'schedules'),
  BUSY_ROOMS: stryMutAct_9fa48("4447") ? "" : (stryCov_9fa48("4447"), 'busy-rooms'),
  TEACHER_LESSONS: stryMutAct_9fa48("4448") ? "" : (stryCov_9fa48("4448"), 'teacher-lessons')
});