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
import './StudentTable.scss';
import { isEmpty } from 'lodash';
import { CircularProgress } from '@material-ui/core';
import StudentsPage from '../../containers/Students/StudentsPage';
import { StudentsPageHead } from './StudentsPageHead';
import { NO_EXIST_STUDENTS_AT_GROUP } from '../../constants/translationLabels/formElements';
export const ShowStudentsOnGroupContent = props => {
  if (stryMutAct_9fa48("2857")) {
    {}
  } else {
    stryCov_9fa48("2857");
    const {
      students,
      loading
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2858") ? "" : (stryCov_9fa48("2858"), 'formElements'));
    if (stryMutAct_9fa48("2860") ? false : stryMutAct_9fa48("2859") ? true : (stryCov_9fa48("2859", "2860"), loading)) {
      if (stryMutAct_9fa48("2861")) {
        {}
      } else {
        stryCov_9fa48("2861");
        return <section className="louder-container">
                <CircularProgress />
            </section>;
      }
    }
    if (stryMutAct_9fa48("2863") ? false : stryMutAct_9fa48("2862") ? true : (stryCov_9fa48("2862", "2863"), isEmpty(students))) {
      if (stryMutAct_9fa48("2864")) {
        {}
      } else {
        stryCov_9fa48("2864");
        return <div className="empty-students-table">{t(NO_EXIST_STUDENTS_AT_GROUP)} </div>;
      }
    }
    return <span className="table-student-data">
            <StudentsPageHead t={t} students={students} />
            <StudentsPage students={students} {...props} />
        </span>;
  }
};