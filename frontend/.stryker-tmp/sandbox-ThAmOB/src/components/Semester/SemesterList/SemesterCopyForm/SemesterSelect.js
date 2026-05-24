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
import { Field } from 'redux-form';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import MenuItem from '@material-ui/core/MenuItem';
import SelectField from '../../../../share/renderedFields/select';
import './SemesterCopyForm.scss';
import { required } from '../../../../validation/validateFields';
import { FORM_SEMESTER_LABEL } from '../../../../constants/translationLabels/formElements';
const SemesterSelect = props => {
  if (stryMutAct_9fa48("2718")) {
    {}
  } else {
    stryCov_9fa48("2718");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2719") ? "" : (stryCov_9fa48("2719"), 'common'));
    const {
      semesterId,
      semesters
    } = props;
    const availableSemestersForCopy = stryMutAct_9fa48("2720") ? semesters : (stryCov_9fa48("2720"), semesters.filter(stryMutAct_9fa48("2721") ? () => undefined : (stryCov_9fa48("2721"), semester => stryMutAct_9fa48("2724") ? semester.id === semesterId : stryMutAct_9fa48("2723") ? false : stryMutAct_9fa48("2722") ? true : (stryCov_9fa48("2722", "2723", "2724"), semester.id !== semesterId))));
    if (stryMutAct_9fa48("2727") ? false : stryMutAct_9fa48("2726") ? true : stryMutAct_9fa48("2725") ? isEmpty(availableSemestersForCopy) : (stryCov_9fa48("2725", "2726", "2727"), !isEmpty(availableSemestersForCopy))) {
      if (stryMutAct_9fa48("2728")) {
        {}
      } else {
        stryCov_9fa48("2728");
        return <>
                <Field id="toSemesterId" name="toSemesterId" component={SelectField} label={t(FORM_SEMESTER_LABEL)} type="text" validate={stryMutAct_9fa48("2729") ? [] : (stryCov_9fa48("2729"), [required])} className="semester-copy-select">
                    <MenuItem value="" className="hidden" disabled />
                    {availableSemestersForCopy.map(stryMutAct_9fa48("2730") ? () => undefined : (stryCov_9fa48("2730"), semester => <MenuItem key={semester.id} value={semester.id}>
                            {semester.description}
                        </MenuItem>))}
                </Field>
            </>;
      }
    }
    return null;
  }
};
export default SemesterSelect;