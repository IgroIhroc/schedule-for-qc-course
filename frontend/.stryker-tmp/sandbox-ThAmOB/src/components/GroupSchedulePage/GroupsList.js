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
import { isEmpty } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Field } from 'redux-form';
import { FORM_GROUP_LABEL } from '../../constants/translationLabels/formElements';
import { renderAutocompleteField } from '../../helper/renderAutocompleteField';
const GroupsList = props => {
  if (stryMutAct_9fa48("1737")) {
    {}
  } else {
    stryCov_9fa48("1737");
    const {
      handleChange,
      groups
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1738") ? "" : (stryCov_9fa48("1738"), 'common'));
    return <Field disabled={isEmpty(groups)} name="group" component={stryMutAct_9fa48("1739") ? () => undefined : (stryCov_9fa48("1739"), values => renderAutocompleteField(values))} label={t(FORM_GROUP_LABEL)} type="text" handleChange={() => {
      if (stryMutAct_9fa48("1740")) {
        {}
      } else {
        stryCov_9fa48("1740");
        handleChange(stryMutAct_9fa48("1741") ? "" : (stryCov_9fa48("1741"), 'teacher'), null);
        handleChange(stryMutAct_9fa48("1742") ? "" : (stryCov_9fa48("1742"), 'department'), null);
      }
    }} values={groups} getOptionLabel={stryMutAct_9fa48("1743") ? () => undefined : (stryCov_9fa48("1743"), group => group ? group.title : stryMutAct_9fa48("1744") ? "Stryker was here!" : (stryCov_9fa48("1744"), ''))} className="schedule-form_group"></Field>;
  }
};
export default GroupsList;