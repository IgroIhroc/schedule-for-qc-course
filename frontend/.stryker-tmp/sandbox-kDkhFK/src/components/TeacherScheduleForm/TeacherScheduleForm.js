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
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './TeacherScheduleForm.scss';
import { MdPlayArrow, MdViewHeadline, MdViewModule } from 'react-icons/md';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import * as moment from 'moment';
import { greaterThanDate, lessThanDate, required } from '../../validation/validateFields';
import { TEACHER_SCHEDULE_FORM } from '../../constants/reduxForms';
import renderMonthPicker from '../../share/renderedFields/timeSemester';
import Card from '../../share/Card/Card';
import { CLASS_FROM_LABEL, CLASS_TO_LABEL } from '../../constants/translationLabels/formElements';
import { COMMON_BLOCK_VIEW, COMMON_LIST_VIEW, COMMON_SELECT_DATES_FOR_TEACHERS_SCHEDULE, FULL_SCHEDULE_LABEL } from '../../constants/translationLabels/common';
import { dateFormat } from '../../constants/formats';
import { setTeacherViewType } from '../../actions';
const TeacherScheduleForm = props => {
  if (stryMutAct_9fa48("3607")) {
    {}
  } else {
    stryCov_9fa48("3607");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("3608") ? "" : (stryCov_9fa48("3608"), 'formElements'));
    const {
      handleSubmit,
      initialize,
      setTypeOfTeacherView
    } = props;
    const isSchedule = stryMutAct_9fa48("3609") ? true : (stryCov_9fa48("3609"), false);
    // TODO check if it`s necessary here
    useEffect(() => {
      if (stryMutAct_9fa48("3610")) {
        {}
      } else {
        stryCov_9fa48("3610");
        initialize(stryMutAct_9fa48("3611") ? {} : (stryCov_9fa48("3611"), {
          startDay: moment(new Date(), dateFormat).format(dateFormat),
          endDay: moment(new Date(), dateFormat).add(7, stryMutAct_9fa48("3612") ? "" : (stryCov_9fa48("3612"), 'd')).format(dateFormat)
        }));
      }
    }, stryMutAct_9fa48("3613") ? [] : (stryCov_9fa48("3613"), [isSchedule]));
    return <Card additionClassName="form-card teacher-schedule-form">
            <form onSubmit={handleSubmit}>
                <div className="form-line-block">
                    <h2 className="form-title">{t(COMMON_SELECT_DATES_FOR_TEACHERS_SCHEDULE)}</h2>
                    <Field className="time-input" name="startDay" component={renderMonthPicker} label={stryMutAct_9fa48("3614") ? `` : (stryCov_9fa48("3614"), `${t(CLASS_FROM_LABEL)}:`)} validate={stryMutAct_9fa48("3615") ? [] : (stryCov_9fa48("3615"), [required, lessThanDate])} />
                    <Field className="time-input" name="endDay" component={renderMonthPicker} label={stryMutAct_9fa48("3616") ? `` : (stryCov_9fa48("3616"), `${t(CLASS_TO_LABEL)}:`)} validate={stryMutAct_9fa48("3617") ? [] : (stryCov_9fa48("3617"), [required, greaterThanDate])} />
                    <div className="form-buttons-container">
                        <Button className="buttons-style" type="submit" variant="contained" color="primary">
                            <MdPlayArrow title={t(FULL_SCHEDULE_LABEL)} className="svg-btn" />
                        </Button>
                        <Button className="view-type-icon first-view-type-button" variant="contained" color="secondary" title={t(COMMON_BLOCK_VIEW)} onClick={stryMutAct_9fa48("3618") ? () => undefined : (stryCov_9fa48("3618"), () => setTypeOfTeacherView(stryMutAct_9fa48("3619") ? "" : (stryCov_9fa48("3619"), 'blocks-view')))}>
                            <MdViewModule className="svg-btn" />
                        </Button>
                        <Button className="view-type-icon" variant="contained" color="secondary" title={t(COMMON_LIST_VIEW)} onClick={stryMutAct_9fa48("3620") ? () => undefined : (stryCov_9fa48("3620"), () => setTypeOfTeacherView(stryMutAct_9fa48("3621") ? "" : (stryCov_9fa48("3621"), 'list-view')))}>
                            <MdViewHeadline className="svg-btn" />
                        </Button>
                    </div>
                </div>
            </form>
        </Card>;
  }
};
const mapDispatchToProps = stryMutAct_9fa48("3622") ? () => undefined : (stryCov_9fa48("3622"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("3623") ? {} : (stryCov_9fa48("3623"), {
    setTypeOfTeacherView: stryMutAct_9fa48("3624") ? () => undefined : (stryCov_9fa48("3624"), type => dispatch(setTeacherViewType(type)))
  });
  return mapDispatchToProps;
})());
export default connect(null, mapDispatchToProps)(reduxForm(stryMutAct_9fa48("3625") ? {} : (stryCov_9fa48("3625"), {
  form: TEACHER_SCHEDULE_FORM
}))(TeacherScheduleForm));