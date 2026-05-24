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
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field } from 'redux-form';
import { FORM_TEACHER_LABEL } from '../../constants/translationLabels/formElements';
import { renderAutocompleteField } from '../../helper/renderAutocompleteField';
import { getTeacherFullName } from '../../helper/renderTeacher';
const TeachersList = props => {
  if (stryMutAct_9fa48("1864")) {
    {}
  } else {
    stryCov_9fa48("1864");
    const {
      teachers,
      handleChange
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1865") ? "" : (stryCov_9fa48("1865"), 'common'));
    return <Field name="teacher" component={stryMutAct_9fa48("1866") ? () => undefined : (stryCov_9fa48("1866"), values => renderAutocompleteField(values))} label={t(FORM_TEACHER_LABEL)} type="text" handleChange={() => {
      if (stryMutAct_9fa48("1867")) {
        {}
      } else {
        stryCov_9fa48("1867");
        handleChange(stryMutAct_9fa48("1868") ? "" : (stryCov_9fa48("1868"), 'group'), null);
        handleChange(stryMutAct_9fa48("1869") ? "" : (stryCov_9fa48("1869"), 'department'), null);
      }
    }} values={teachers} getOptionLabel={stryMutAct_9fa48("1870") ? () => undefined : (stryCov_9fa48("1870"), teacher => teacher ? getTeacherFullName(teacher) : stryMutAct_9fa48("1871") ? "Stryker was here!" : (stryCov_9fa48("1871"), ''))} className="schedule-form_teacher"></Field>;
  }
};
export default TeachersList;