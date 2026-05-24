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
import { FORM_TEACHER_A_LABEL } from '../../../constants/translationLabels/formElements';
import NotFound from '../../../share/NotFound/NotFound';
import TeachersCard from './TeachersCard';
import './TeachersList.scss';
const TeachersList = props => {
  if (stryMutAct_9fa48("3668")) {
    {}
  } else {
    stryCov_9fa48("3668");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("3669") ? "" : (stryCov_9fa48("3669"), 'common'));
    const {
      visibleItems,
      ...rest
    } = props;
    if (stryMutAct_9fa48("3671") ? false : stryMutAct_9fa48("3670") ? true : (stryCov_9fa48("3670", "3671"), isEmpty(visibleItems))) {
      if (stryMutAct_9fa48("3672")) {
        {}
      } else {
        stryCov_9fa48("3672");
        return <NotFound name={t(FORM_TEACHER_A_LABEL)} />;
      }
    }
    return <div className="teachers-list-container">
            {visibleItems.map(teacherItem => {
        if (stryMutAct_9fa48("3673")) {
          {}
        } else {
          stryCov_9fa48("3673");
          return <TeachersCard teacherItem={teacherItem} key={teacherItem.id} {...rest} />;
        }
      })}
        </div>;
  }
};
export default TeachersList;