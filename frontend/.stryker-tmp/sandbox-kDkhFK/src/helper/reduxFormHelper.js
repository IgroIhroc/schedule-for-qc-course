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
import { getTeacherForSite } from './renderTeacher';
export const setValueToTeacherForSiteHandler = (teachers, id, setValue) => {
  if (stryMutAct_9fa48("5659")) {
    {}
  } else {
    stryCov_9fa48("5659");
    const teacher = teachers.find(stryMutAct_9fa48("5660") ? () => undefined : (stryCov_9fa48("5660"), teacherItem => stryMutAct_9fa48("5663") ? teacherItem.id !== +id : stryMutAct_9fa48("5662") ? false : stryMutAct_9fa48("5661") ? true : (stryCov_9fa48("5661", "5662", "5663"), teacherItem.id === (stryMutAct_9fa48("5664") ? -id : (stryCov_9fa48("5664"), +id)))));
    if (stryMutAct_9fa48("5667") ? false : stryMutAct_9fa48("5666") ? true : stryMutAct_9fa48("5665") ? teacher : (stryCov_9fa48("5665", "5666", "5667"), !teacher)) setValue(stryMutAct_9fa48("5668") ? "" : (stryCov_9fa48("5668"), 'teacherForSite'), stryMutAct_9fa48("5669") ? "Stryker was here!" : (stryCov_9fa48("5669"), ''));else setValue(stryMutAct_9fa48("5670") ? "" : (stryCov_9fa48("5670"), 'teacherForSite'), getTeacherForSite(teacher));
  }
};
export const setValueToSubjectForSiteHandler = (subjects, subjectId, setValue) => {
  if (stryMutAct_9fa48("5671")) {
    {}
  } else {
    stryCov_9fa48("5671");
    const subject = subjects.find(stryMutAct_9fa48("5672") ? () => undefined : (stryCov_9fa48("5672"), subjectItem => stryMutAct_9fa48("5675") ? subjectItem.id !== +subjectId : stryMutAct_9fa48("5674") ? false : stryMutAct_9fa48("5673") ? true : (stryCov_9fa48("5673", "5674", "5675"), subjectItem.id === (stryMutAct_9fa48("5676") ? -subjectId : (stryCov_9fa48("5676"), +subjectId)))));
    if (stryMutAct_9fa48("5679") ? false : stryMutAct_9fa48("5678") ? true : stryMutAct_9fa48("5677") ? subject : (stryCov_9fa48("5677", "5678", "5679"), !subject)) return setValue(stryMutAct_9fa48("5680") ? "" : (stryCov_9fa48("5680"), 'subjectForSite'), stryMutAct_9fa48("5681") ? "Stryker was here!" : (stryCov_9fa48("5681"), ''));
    return setValue(stryMutAct_9fa48("5682") ? "" : (stryCov_9fa48("5682"), 'subjectForSite'), subject.name);
  }
};