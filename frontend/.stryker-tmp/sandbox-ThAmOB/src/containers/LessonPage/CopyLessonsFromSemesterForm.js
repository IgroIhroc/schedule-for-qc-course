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
import { COPY_LESSONS_FROM_SEMESTER_FORM } from '../../constants/reduxForms';
import CopyLessonsFromSemesterForm from '../../components/LessonsPage/CopyLessonsFromSemesterForm/CopyLessonsFromSemesterForm';
const mapStateToProps = stryMutAct_9fa48("5165") ? () => undefined : (stryCov_9fa48("5165"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5166") ? {} : (stryCov_9fa48("5166"), {
    semesters: state.semesters.semesters,
    currentSemester: state.schedule.currentSemester
  });
  return mapStateToProps;
})());
export default connect(mapStateToProps)(reduxForm(stryMutAct_9fa48("5167") ? {} : (stryCov_9fa48("5167"), {
  form: COPY_LESSONS_FROM_SEMESTER_FORM
}))(CopyLessonsFromSemesterForm));