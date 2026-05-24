// @ts-nocheck
// frontend/src/components/GroupSchedulePage/SchedulePageForm.js
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
import { Button } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MdPlayArrow } from 'react-icons/md';
import { TEACHER_SCHEDULE_LABEL } from '../../constants/translationLabels/common';
import GroupsList from '../../containers/GroupSchedulePage/GroupsList';
import SemestersList from '../../containers/GroupSchedulePage/SemestersList';
import TeachersList from '../../containers/GroupSchedulePage/TeachersList';
import DepartmentsList from '../../containers/GroupSchedulePage/DepartmentsList';
const SchedulePageForm = props => {
  if (stryMutAct_9fa48("1791")) {
    {}
  } else {
    stryCov_9fa48("1791");
    const {
      handleSubmit,
      handleFormSubmit,
      pristine,
      submitting,
      change,
      initialize,
      semester,
      group,
      teacher,
      department
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1792") ? "" : (stryCov_9fa48("1792"), 'common'));
    useEffect(() => {
      if (stryMutAct_9fa48("1793")) {
        {}
      } else {
        stryCov_9fa48("1793");
        initialize(stryMutAct_9fa48("1794") ? {} : (stryCov_9fa48("1794"), {
          semester,
          group,
          teacher,
          department
        }));
      }
    }, stryMutAct_9fa48("1795") ? [] : (stryCov_9fa48("1795"), [semester, group, teacher, department]));
    return <form onSubmit={handleSubmit} className="schedule-form">
            <SemestersList handleSubmit={handleFormSubmit} />
            <GroupsList handleChange={change} />
            <TeachersList handleChange={change} />
            <DepartmentsList handleChange={change} />
            <Button variant="contained" color="primary" type="submit" disabled={stryMutAct_9fa48("1798") ? pristine && submitting : stryMutAct_9fa48("1797") ? false : stryMutAct_9fa48("1796") ? true : (stryCov_9fa48("1796", "1797", "1798"), pristine || submitting)} className="schedule-form_submit">
                <MdPlayArrow title={t(TEACHER_SCHEDULE_LABEL)} className="svg-btn" />
            </Button>
        </form>;
  }
};
export default SchedulePageForm;