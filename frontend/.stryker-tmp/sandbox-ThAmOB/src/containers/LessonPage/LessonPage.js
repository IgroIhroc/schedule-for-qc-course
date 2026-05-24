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
import '../../components/LessonsPage/LessonPage.scss';
import LessonPage from '../../components/LessonsPage/LessonPage';
import { copyLessonCardStart, deleteLessonCardStart, getEnabledGroupsStart, getLessonsByGroupStart, getLessonTypesStart, selectGroupId, selectGroupSuccess, selectLessonCardSuccess, setIsOpenConfirmDialog, setUniqueError } from '../../actions';
import { setOpenErrorSnackbar } from '../../actions/snackbar';
import { copyLessonsFromSemesterStart, getAllSemestersStart } from '../../actions/semesters';
import { handleLessonStart } from '../../actions/lesson';
import { showAllTeachersStart } from '../../actions/teachers';
const mapStateToProps = stryMutAct_9fa48("5178") ? () => undefined : (stryCov_9fa48("5178"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5179") ? {} : (stryCov_9fa48("5179"), {
    lessons: state.lesson.lessons,
    lessonTypes: state.lesson.lessonTypes,
    groupId: state.lesson.groupId,
    isUniqueError: state.lesson.uniqueError,
    teachers: state.teachers.teachers,
    groups: state.groups.groups,
    group: state.groups.group,
    subjects: state.subjects.subjects,
    loading: state.loadingIndicator.loading,
    semesters: state.semesters.semesters,
    currentSemester: state.schedule.currentSemester,
    isOpenConfirmDialog: state.dialog.isOpenConfirmDialog
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5180") ? () => undefined : (stryCov_9fa48("5180"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5181") ? {} : (stryCov_9fa48("5181"), {
    getEnabledGroupsStart: stryMutAct_9fa48("5182") ? () => undefined : (stryCov_9fa48("5182"), () => dispatch(getEnabledGroupsStart())),
    getLessonsByGroupStart: stryMutAct_9fa48("5183") ? () => undefined : (stryCov_9fa48("5183"), groupId => dispatch(getLessonsByGroupStart(groupId))),
    getLessonTypesStart: stryMutAct_9fa48("5184") ? () => undefined : (stryCov_9fa48("5184"), () => dispatch(getLessonTypesStart())),
    deleteLessonCardStart: stryMutAct_9fa48("5185") ? () => undefined : (stryCov_9fa48("5185"), lessonId => dispatch(deleteLessonCardStart(lessonId))),
    copyLessonCardStart: stryMutAct_9fa48("5186") ? () => undefined : (stryCov_9fa48("5186"), (group, lesson) => dispatch(copyLessonCardStart(group, lesson))),
    selectLessonCardSuccess: stryMutAct_9fa48("5187") ? () => undefined : (stryCov_9fa48("5187"), lessonCardId => dispatch(selectLessonCardSuccess(lessonCardId))),
    setOpenErrorSnackbar: stryMutAct_9fa48("5188") ? () => undefined : (stryCov_9fa48("5188"), message => dispatch(setOpenErrorSnackbar(message))),
    setUniqueError: stryMutAct_9fa48("5189") ? () => undefined : (stryCov_9fa48("5189"), value => dispatch(setUniqueError(value))),
    setOpenConfirmDialog: stryMutAct_9fa48("5190") ? () => undefined : (stryCov_9fa48("5190"), newState => dispatch(setIsOpenConfirmDialog(newState))),
    copyLessonsFromSemester: stryMutAct_9fa48("5191") ? () => undefined : (stryCov_9fa48("5191"), values => dispatch(copyLessonsFromSemesterStart(values))),
    handleLesson: stryMutAct_9fa48("5192") ? () => undefined : (stryCov_9fa48("5192"), (values, groupId) => dispatch(handleLessonStart(values, groupId))),
    selectByGroupId: stryMutAct_9fa48("5193") ? () => undefined : (stryCov_9fa48("5193"), groupId => dispatch(selectGroupId(groupId))),
    selectGroupSuccess: stryMutAct_9fa48("5194") ? () => undefined : (stryCov_9fa48("5194"), id => dispatch(selectGroupSuccess(id))),
    showAllTeachers: stryMutAct_9fa48("5195") ? () => undefined : (stryCov_9fa48("5195"), () => dispatch(showAllTeachersStart())),
    getAllSemesters: stryMutAct_9fa48("5196") ? () => undefined : (stryCov_9fa48("5196"), () => dispatch(getAllSemestersStart()))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(LessonPage);