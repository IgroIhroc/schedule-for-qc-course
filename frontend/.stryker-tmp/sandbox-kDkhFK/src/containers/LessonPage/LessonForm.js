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
import { reduxForm } from 'redux-form';
import { selectGroupSuccess, selectLessonCardSuccess, setUniqueError } from '../../actions';
import LessonForm from '../../components/LessonsPage/LessonForm/LessonForm';
import { LESSON_FORM } from '../../constants/reduxForms';
const mapStateToProps = stryMutAct_9fa48("5168") ? () => undefined : (stryCov_9fa48("5168"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5169") ? {} : (stryCov_9fa48("5169"), {
    lesson: state.lesson.lesson,
    groups: state.groups.groups,
    group: state.groups.group,
    isUniqueError: state.lesson.uniqueError,
    groupId: state.lesson.groupId,
    subjects: state.subjects.subjects,
    lessonTypes: state.lesson.lessonTypes,
    teachers: state.teachers.teachers,
    currentSemester: state.schedule.currentSemester
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5170") ? () => undefined : (stryCov_9fa48("5170"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5171") ? {} : (stryCov_9fa48("5171"), {
    selectLessonCardSuccess: stryMutAct_9fa48("5172") ? () => undefined : (stryCov_9fa48("5172"), lessonCardId => dispatch(selectLessonCardSuccess(lessonCardId))),
    setUniqueError: stryMutAct_9fa48("5173") ? () => undefined : (stryCov_9fa48("5173"), isUniqueError => dispatch(setUniqueError(isUniqueError))),
    selectGroupSuccess: stryMutAct_9fa48("5174") ? () => undefined : (stryCov_9fa48("5174"), id => dispatch(selectGroupSuccess(id)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(stryMutAct_9fa48("5175") ? {} : (stryCov_9fa48("5175"), {
  form: LESSON_FORM
}))(LessonForm));