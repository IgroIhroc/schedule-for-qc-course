// @ts-nocheck
// frontend/src/containers/GroupSchedulePage/DepartmentsList.js
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
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field } from 'redux-form';
import { renderAutocompleteField } from '../../helper/renderAutocompleteField';
import { FORM_DEPARTMENT_TEACHERS_LABEL } from '../../constants/translationLabels/formElements';
const DepartmentsList = props => {
  if (stryMutAct_9fa48("5109")) {
    {}
  } else {
    stryCov_9fa48("5109");
    const {
      departments,
      handleChange
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("5110") ? "" : (stryCov_9fa48("5110"), 'common'));
    return <Field name="department" component={stryMutAct_9fa48("5111") ? () => undefined : (stryCov_9fa48("5111"), values => renderAutocompleteField(values))} label={t(FORM_DEPARTMENT_TEACHERS_LABEL)} type="text" handleChange={() => {
      if (stryMutAct_9fa48("5112")) {
        {}
      } else {
        stryCov_9fa48("5112");
        handleChange(stryMutAct_9fa48("5113") ? "" : (stryCov_9fa48("5113"), 'group'), null);
        handleChange(stryMutAct_9fa48("5114") ? "" : (stryCov_9fa48("5114"), 'teacher'), null);
      }
    }} values={departments} getOptionLabel={stryMutAct_9fa48("5115") ? () => undefined : (stryCov_9fa48("5115"), department => department ? department.name : stryMutAct_9fa48("5116") ? "Stryker was here!" : (stryCov_9fa48("5116"), ''))} className="schedule-form_department" />;
  }
};
const mapStateToProps = stryMutAct_9fa48("5117") ? () => undefined : (stryCov_9fa48("5117"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5118") ? {} : (stryCov_9fa48("5118"), {
    departments: state.departments.departments
  });
  return mapStateToProps;
})());
export default connect(mapStateToProps)(DepartmentsList);