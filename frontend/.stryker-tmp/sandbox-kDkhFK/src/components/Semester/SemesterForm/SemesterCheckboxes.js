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
import { useTranslation } from 'react-i18next';
import { createClasslabel } from '../../../utils/formUtils';
import renderCheckboxField from '../../../share/renderedFields/checkbox';
const SetSemesterCheckboxes = props => {
  if (stryMutAct_9fa48("2588")) {
    {}
  } else {
    stryCov_9fa48("2588");
    const {
      checked,
      method,
      name,
      classScheduler
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2589") ? "" : (stryCov_9fa48("2589"), 'formElements'));
    const setCheckedHandler = (event, item, prevChecked, setSchecked) => {
      if (stryMutAct_9fa48("2590")) {
        {}
      } else {
        stryCov_9fa48("2590");
        const changedItem = stryMutAct_9fa48("2591") ? {} : (stryCov_9fa48("2591"), {
          [item]: event.target.checked
        });
        setSchecked(stryMutAct_9fa48("2592") ? {} : (stryCov_9fa48("2592"), {
          ...prevChecked,
          ...changedItem
        }));
      }
    };
    const checkboxes = Object.keys(checked);
    return checkboxes.map(item => {
      if (stryMutAct_9fa48("2593")) {
        {}
      } else {
        stryCov_9fa48("2593");
        return <Field key={item} name={stryMutAct_9fa48("2594") ? `` : (stryCov_9fa48("2594"), `${name}${item}`)} label={(stryMutAct_9fa48("2598") ? name.indexOf('semester_days_markup_') < 0 : stryMutAct_9fa48("2597") ? name.indexOf('semester_days_markup_') > 0 : stryMutAct_9fa48("2596") ? false : stryMutAct_9fa48("2595") ? true : (stryCov_9fa48("2595", "2596", "2597", "2598"), name.indexOf(stryMutAct_9fa48("2599") ? "" : (stryCov_9fa48("2599"), 'semester_days_markup_')) >= 0)) ? t(stryMutAct_9fa48("2600") ? `` : (stryCov_9fa48("2600"), `common:day_of_week_${item}`)) : createClasslabel(classScheduler, item)} labelPlacement="end" component={renderCheckboxField} defaultValue={checked[item]} checked={checked[item]} onChange={e => {
          if (stryMutAct_9fa48("2601")) {
            {}
          } else {
            stryCov_9fa48("2601");
            setCheckedHandler(e, item, checked, method);
          }
        }} color="primary" />;
      }
    });
  }
};
export default SetSemesterCheckboxes;