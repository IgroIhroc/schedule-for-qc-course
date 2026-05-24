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
import { navigationNames } from './navigation';
import { BUSY_ROOMS_TITLE, CLASS_SCHEDULE_TITLE, COMMON_SCHEDULE_TITLE, DEPARTMENTS_TITLE, GROUP_LIST_TITLE, LESSON_PAGE_TITLE, ROOM_LIST_TITLE, SEMESTER_PAGE_TITLE, SUBJECT_PAGE_TITLE, TEACHER_LESSONS_TITLE, TEACHER_LIST_TITLE } from './translationLabels/common';
export const general = stryMutAct_9fa48("4449") ? [] : (stryCov_9fa48("4449"), [stryMutAct_9fa48("4450") ? {} : (stryCov_9fa48("4450"), {
  name: navigationNames.CLASS_SCHEDULE_TITLE,
  title: CLASS_SCHEDULE_TITLE
}), stryMutAct_9fa48("4451") ? {} : (stryCov_9fa48("4451"), {
  name: navigationNames.DEPARTMENTS,
  title: DEPARTMENTS_TITLE
}), stryMutAct_9fa48("4452") ? {} : (stryCov_9fa48("4452"), {
  name: navigationNames.GROUP_LIST,
  title: GROUP_LIST_TITLE
}), stryMutAct_9fa48("4453") ? {} : (stryCov_9fa48("4453"), {
  name: navigationNames.ROOM_LIST,
  title: ROOM_LIST_TITLE
}), stryMutAct_9fa48("4454") ? {} : (stryCov_9fa48("4454"), {
  name: navigationNames.SUBJECT_PAGE,
  title: SUBJECT_PAGE_TITLE
}), stryMutAct_9fa48("4455") ? {} : (stryCov_9fa48("4455"), {
  name: navigationNames.SEMESTER_PAGE,
  title: SEMESTER_PAGE_TITLE
}), stryMutAct_9fa48("4456") ? {} : (stryCov_9fa48("4456"), {
  name: navigationNames.TEACHER_LIST,
  title: TEACHER_LIST_TITLE
})]);
export const tabsComponents = stryMutAct_9fa48("4457") ? [] : (stryCov_9fa48("4457"), [stryMutAct_9fa48("4458") ? {} : (stryCov_9fa48("4458"), {
  name: navigationNames.LESSON_PAGE,
  title: LESSON_PAGE_TITLE
}), stryMutAct_9fa48("4459") ? {} : (stryCov_9fa48("4459"), {
  name: navigationNames.SCHEDULE_PAGE,
  title: COMMON_SCHEDULE_TITLE
}), // { name: navigationNames.MERGE_ROLE_PAGE, title: MERGE_ROLE_PAGE_TITLE },
stryMutAct_9fa48("4460") ? {} : (stryCov_9fa48("4460"), {
  name: navigationNames.TEACHER_LESSONS,
  title: TEACHER_LESSONS_TITLE
}), // { name: navigationNames.CHANGES, title: CHANGES_TITLE },
stryMutAct_9fa48("4461") ? {} : (stryCov_9fa48("4461"), {
  name: navigationNames.BUSY_ROOMS,
  title: BUSY_ROOMS_TITLE
})]);