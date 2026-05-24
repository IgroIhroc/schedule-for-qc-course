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
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import './TeacherSchedule.scss';
import TeacherScheduleForm from '../TeacherScheduleForm/TeacherScheduleForm';
import { renderTeacherRangeSchedule } from '../../helper/renderScheduleTable';
import { TEACHER_SCHEDULE_FORM } from '../../constants/reduxForms';
import { getTeacherRangeScheduleStart } from '../../actions/schedule';
const TeacherSchedule = props => {
  if (stryMutAct_9fa48("3599")) {
    {}
  } else {
    stryCov_9fa48("3599");
    const {
      schedule,
      viewTeacherScheduleResults,
      clearForm,
      getTeacherRangeSchedule
    } = props;
    return <>
            <TeacherScheduleForm onSubmit={getTeacherRangeSchedule} onReset={stryMutAct_9fa48("3600") ? () => undefined : (stryCov_9fa48("3600"), () => clearForm(TEACHER_SCHEDULE_FORM))} />
            <section>{renderTeacherRangeSchedule(schedule, viewTeacherScheduleResults)}</section>
        </>;
  }
};
const mapStateToProps = stryMutAct_9fa48("3601") ? () => undefined : (stryCov_9fa48("3601"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("3602") ? {} : (stryCov_9fa48("3602"), {
    loading: state.loadingIndicator.loading,
    schedule: state.schedule.teacherRangeSchedule,
    viewTeacherScheduleResults: state.schedule.viewTeacherScheduleResults
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("3603") ? () => undefined : (stryCov_9fa48("3603"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("3604") ? {} : (stryCov_9fa48("3604"), {
    clearForm: stryMutAct_9fa48("3605") ? () => undefined : (stryCov_9fa48("3605"), formName => dispatch(reset(formName))),
    getTeacherRangeSchedule: stryMutAct_9fa48("3606") ? () => undefined : (stryCov_9fa48("3606"), values => dispatch(getTeacherRangeScheduleStart(values)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(TeacherSchedule);