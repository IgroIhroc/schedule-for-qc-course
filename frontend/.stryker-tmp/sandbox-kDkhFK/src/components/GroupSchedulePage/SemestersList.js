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
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Field } from 'redux-form';
import { FORM_SEMESTER_LABEL } from '../../constants/translationLabels/formElements';
import { renderAutocompleteField } from '../../helper/renderAutocompleteField';
const SemestersList = props => {
  if (stryMutAct_9fa48("1836")) {
    {}
  } else {
    stryCov_9fa48("1836");
    const {
      semesters,
      getAllGroups,
      defaultSemester
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1837") ? "" : (stryCov_9fa48("1837"), 'common'));
    useEffect(() => {
      if (stryMutAct_9fa48("1838")) {
        {}
      } else {
        stryCov_9fa48("1838");
        if (stryMutAct_9fa48("1841") ? defaultSemester || defaultSemester.id : stryMutAct_9fa48("1840") ? false : stryMutAct_9fa48("1839") ? true : (stryCov_9fa48("1839", "1840", "1841"), defaultSemester && defaultSemester.id)) {
          if (stryMutAct_9fa48("1842")) {
            {}
          } else {
            stryCov_9fa48("1842");
            getAllGroups(defaultSemester.id);
          }
        }
      }
    }, stryMutAct_9fa48("1843") ? [] : (stryCov_9fa48("1843"), [defaultSemester, getAllGroups]));
    if (stryMutAct_9fa48("1846") ? semesters || semesters.length > 1 : stryMutAct_9fa48("1845") ? false : stryMutAct_9fa48("1844") ? true : (stryCov_9fa48("1844", "1845", "1846"), semesters && (stryMutAct_9fa48("1849") ? semesters.length <= 1 : stryMutAct_9fa48("1848") ? semesters.length >= 1 : stryMutAct_9fa48("1847") ? true : (stryCov_9fa48("1847", "1848", "1849"), semesters.length > 1)))) {
      if (stryMutAct_9fa48("1850")) {
        {}
      } else {
        stryCov_9fa48("1850");
        return <Field name="semester" component={stryMutAct_9fa48("1851") ? () => undefined : (stryCov_9fa48("1851"), values => renderAutocompleteField(values))} label={t(FORM_SEMESTER_LABEL)} type="text" handleChange={value => {
          if (stryMutAct_9fa48("1852")) {
            {}
          } else {
            stryCov_9fa48("1852");
            if (stryMutAct_9fa48("1855") ? false : stryMutAct_9fa48("1854") ? true : stryMutAct_9fa48("1853") ? isEmpty(value) : (stryCov_9fa48("1853", "1854", "1855"), !isEmpty(value))) getAllGroups(value.id);
          }
        }} values={semesters} getOptionLabel={stryMutAct_9fa48("1856") ? () => undefined : (stryCov_9fa48("1856"), semester => semester ? semester.description : stryMutAct_9fa48("1857") ? "Stryker was here!" : (stryCov_9fa48("1857"), ''))} className="schedule-form_semester" />;
      }
    }
    if (stryMutAct_9fa48("1860") ? semesters || semesters.length === 1 : stryMutAct_9fa48("1859") ? false : stryMutAct_9fa48("1858") ? true : (stryCov_9fa48("1858", "1859", "1860"), semesters && (stryMutAct_9fa48("1862") ? semesters.length !== 1 : stryMutAct_9fa48("1861") ? true : (stryCov_9fa48("1861", "1862"), semesters.length === 1)))) {
      if (stryMutAct_9fa48("1863")) {
        {}
      } else {
        stryCov_9fa48("1863");
        return <p className="schedule-form_semester">{semesters[0].description}</p>;
      }
    }
    return null;
  }
};
export default SemestersList;