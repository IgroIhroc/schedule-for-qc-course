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
import { selectTeacherCard, setIsOpenConfirmDialog } from '../../actions';
import { getAllPublicSemestersStart, getCurrentSemesterRequsted, getDefaultSemesterRequsted, sendTeacherScheduleStart } from '../../actions/schedule';
import { getPublicClassScheduleStart } from '../../actions/classes';
import { getAllSemestersStart } from '../../actions/semesters';
import { deleteTeacherStart, handleTeacherStart, setDisabledTeachersStart, showAllTeachersStart, toggleTeacherStart } from '../../actions/teachers';
import TeachersPage from '../../components/TeachersPage/TeachersPage';
const mapStateToProps = stryMutAct_9fa48("5400") ? () => undefined : (stryCov_9fa48("5400"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5401") ? {} : (stryCov_9fa48("5401"), {
    enabledTeachers: state.teachers.teachers,
    disabledTeachers: state.teachers.disabledTeachers,
    defaultSemester: state.schedule.defaultSemester,
    semesters: state.schedule.semesters,
    departments: state.departments.departments,
    department: state.departments.department,
    isOpenConfirmDialog: state.dialog.isOpenConfirmDialog,
    teacher: state.teachers.teacher
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5402") ? () => undefined : (stryCov_9fa48("5402"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5403") ? {} : (stryCov_9fa48("5403"), {
    setOpenConfirmDialog: stryMutAct_9fa48("5404") ? () => undefined : (stryCov_9fa48("5404"), newState => dispatch(setIsOpenConfirmDialog(newState))),
    getAllSemestersItems: stryMutAct_9fa48("5405") ? () => undefined : (stryCov_9fa48("5405"), () => dispatch(getAllSemestersStart())),
    getCurrentSemester: stryMutAct_9fa48("5406") ? () => undefined : (stryCov_9fa48("5406"), () => dispatch(getCurrentSemesterRequsted())),
    getDefaultSemester: stryMutAct_9fa48("5407") ? () => undefined : (stryCov_9fa48("5407"), () => dispatch(getDefaultSemesterRequsted())),
    getAllPublicSemesters: stryMutAct_9fa48("5408") ? () => undefined : (stryCov_9fa48("5408"), () => dispatch(getAllPublicSemestersStart())),
    sendTeacherSchedule: stryMutAct_9fa48("5409") ? () => undefined : (stryCov_9fa48("5409"), data => dispatch(sendTeacherScheduleStart(data))),
    selectedTeacherCard: stryMutAct_9fa48("5410") ? () => undefined : (stryCov_9fa48("5410"), teacherCardId => dispatch(selectTeacherCard(teacherCardId))),
    deleteTeacher: stryMutAct_9fa48("5411") ? () => undefined : (stryCov_9fa48("5411"), id => dispatch(deleteTeacherStart(id))),
    showAllTeachers: stryMutAct_9fa48("5412") ? () => undefined : (stryCov_9fa48("5412"), () => dispatch(showAllTeachersStart())),
    getDisabledTeachers: stryMutAct_9fa48("5413") ? () => undefined : (stryCov_9fa48("5413"), () => dispatch(setDisabledTeachersStart())),
    handleTeacher: stryMutAct_9fa48("5414") ? () => undefined : (stryCov_9fa48("5414"), values => dispatch(handleTeacherStart(values))),
    getPublicClassSchedule: stryMutAct_9fa48("5415") ? () => undefined : (stryCov_9fa48("5415"), () => dispatch(getPublicClassScheduleStart())),
    toggleDisabledTeacher: stryMutAct_9fa48("5416") ? () => undefined : (stryCov_9fa48("5416"), (teacherId, isDisabled) => dispatch(toggleTeacherStart(teacherId, isDisabled)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(TeachersPage);