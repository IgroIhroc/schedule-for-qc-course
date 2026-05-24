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
import { get } from 'lodash';
import { getTeacherWithPosition } from '../helper/renderTeacher';
const getSemesterTitle = semester => {
  if (stryMutAct_9fa48("8864")) {
    {}
  } else {
    stryCov_9fa48("8864");
    if (stryMutAct_9fa48("8867") ? false : stryMutAct_9fa48("8866") ? true : stryMutAct_9fa48("8865") ? semester : (stryCov_9fa48("8865", "8866", "8867"), !semester)) return stryMutAct_9fa48("8868") ? "Stryker was here!" : (stryCov_9fa48("8868"), '');
    const {
      description,
      startDay,
      endDay
    } = semester;
    return stryMutAct_9fa48("8869") ? `` : (stryCov_9fa48("8869"), `${description} (${startDay}-${endDay}) : `);
  }
};
const getGroupScheduleTitle = (semester, group) => {
  if (stryMutAct_9fa48("8870")) {
    {}
  } else {
    stryCov_9fa48("8870");
    const semesterTitle = getSemesterTitle(semester);
    return group ? stryMutAct_9fa48("8871") ? semesterTitle - get(group, 'title', '') : (stryCov_9fa48("8871"), semesterTitle + get(group, stryMutAct_9fa48("8872") ? "" : (stryCov_9fa48("8872"), 'title'), stryMutAct_9fa48("8873") ? "Stryker was here!" : (stryCov_9fa48("8873"), ''))) : semesterTitle;
  }
};
const getTeacherScheduleTitle = (semester, teacher) => {
  if (stryMutAct_9fa48("8874")) {
    {}
  } else {
    stryCov_9fa48("8874");
    const semesterTitle = getSemesterTitle(semester);
    return teacher ? stryMutAct_9fa48("8875") ? semesterTitle - getTeacherWithPosition(teacher) : (stryCov_9fa48("8875"), semesterTitle + getTeacherWithPosition(teacher)) : semesterTitle;
  }
};
const getDepartmentScheduleTitle = (semester, department) => {
  if (stryMutAct_9fa48("8876")) {
    {}
  } else {
    stryCov_9fa48("8876");
    const semesterTitle = getSemesterTitle(semester);
    return department ? stryMutAct_9fa48("8877") ? semesterTitle - department.name : (stryCov_9fa48("8877"), semesterTitle + department.name) : semesterTitle;
  }
};
export { getSemesterTitle, getGroupScheduleTitle, getTeacherScheduleTitle, getDepartmentScheduleTitle };