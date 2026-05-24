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
import { connect } from 'react-redux';
import { getDefaultSemesterRequsted, selectFullSchedule, selectGroupSchedule, selectTeacherSchedule, selectDepartmentSchedule } from '../../actions/schedule';
import GroupSchedulePage from '../../components/GroupSchedulePage/GroupSchedulePage';
const mapStateToProps = stryMutAct_9fa48("5119") ? () => undefined : (stryCov_9fa48("5119"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5120") ? {} : (stryCov_9fa48("5120"), {
    defaultSemester: state.schedule.defaultSemester,
    scheduleType: state.schedule.scheduleType,
    loading: state.loadingIndicator.mainScheduleLoading,
    groupSchedule: state.schedule.groupSchedule,
    fullSchedule: state.schedule.fullSchedule,
    teacherSchedule: state.schedule.teacherSchedule,
    groupData: state.schedule.scheduleGroup,
    teacherData: state.schedule.scheduleTeacher,
    departmentData: state.schedule.scheduleDepartment,
    semesterData: state.schedule.scheduleSemester,
    semesters: state.schedule.semesters,
    notPublished: state.schedule.notPublished,
    notPublishedMessage: state.schedule.notPublishedMessage,
    isManager: stryMutAct_9fa48("5123") ? state.auth.role === 'ROLE_MANAGER' && state.auth.role === 'ROLE_ADMIN' : stryMutAct_9fa48("5122") ? false : stryMutAct_9fa48("5121") ? true : (stryCov_9fa48("5121", "5122", "5123"), (stryMutAct_9fa48("5125") ? state.auth.role !== 'ROLE_MANAGER' : stryMutAct_9fa48("5124") ? false : (stryCov_9fa48("5124", "5125"), state.auth.role === (stryMutAct_9fa48("5126") ? "" : (stryCov_9fa48("5126"), 'ROLE_MANAGER')))) || (stryMutAct_9fa48("5128") ? state.auth.role !== 'ROLE_ADMIN' : stryMutAct_9fa48("5127") ? false : (stryCov_9fa48("5127", "5128"), state.auth.role === (stryMutAct_9fa48("5129") ? "" : (stryCov_9fa48("5129"), 'ROLE_ADMIN')))))
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5130") ? () => undefined : (stryCov_9fa48("5130"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5131") ? {} : (stryCov_9fa48("5131"), {
    getDefaultSemester: stryMutAct_9fa48("5132") ? () => undefined : (stryCov_9fa48("5132"), () => dispatch(getDefaultSemesterRequsted())),
    getGroupSchedule: stryMutAct_9fa48("5133") ? () => undefined : (stryCov_9fa48("5133"), (semester, group) => dispatch(selectGroupSchedule(semester, group))),
    getTeacherSchedule: stryMutAct_9fa48("5134") ? () => undefined : (stryCov_9fa48("5134"), (semester, teacher) => dispatch(selectTeacherSchedule(semester, teacher))),
    getFullSchedule: stryMutAct_9fa48("5135") ? () => undefined : (stryCov_9fa48("5135"), semester => dispatch(selectFullSchedule(semester))),
    getDepartmentSchedule: stryMutAct_9fa48("5136") ? () => undefined : (stryCov_9fa48("5136"), (semester, department) => dispatch(selectDepartmentSchedule(semester, department)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(GroupSchedulePage);