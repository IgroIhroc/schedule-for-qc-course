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
import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';
import { LESSON_NO_LESSON_FOR_GROUP_LABEL } from '../../constants/translationLabels/common';
import LessonsList from './LessonsList/LessonsList';
import './LessonPage.scss';
const Lessons = props => {
  if (stryMutAct_9fa48("2245")) {
    {}
  } else {
    stryCov_9fa48("2245");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2246") ? "" : (stryCov_9fa48("2246"), 'common'));
    const {
      visibleItems,
      onClickOpen,
      onCopyLesson,
      groupId,
      group,
      loading,
      selectLessonCardSuccess
    } = props;
    if (stryMutAct_9fa48("2248") ? false : stryMutAct_9fa48("2247") ? true : (stryCov_9fa48("2247", "2248"), loading)) {
      if (stryMutAct_9fa48("2249")) {
        {}
      } else {
        stryCov_9fa48("2249");
        return <section className="centered-container">
                <CircularProgress />
            </section>;
      }
    }
    if (stryMutAct_9fa48("2252") ? isEmpty(visibleItems) || groupId : stryMutAct_9fa48("2251") ? false : stryMutAct_9fa48("2250") ? true : (stryCov_9fa48("2250", "2251", "2252"), isEmpty(visibleItems) && groupId)) {
      if (stryMutAct_9fa48("2253")) {
        {}
      } else {
        stryCov_9fa48("2253");
        return <h2 className="centered-container">
                {stryMutAct_9fa48("2254") ? t(LESSON_NO_LESSON_FOR_GROUP_LABEL) - group.title : (stryCov_9fa48("2254"), t(LESSON_NO_LESSON_FOR_GROUP_LABEL) + group.title)}
            </h2>;
      }
    }
    return <LessonsList lessons={visibleItems} onClickOpen={onClickOpen} onSelectLesson={selectLessonCardSuccess} onCopyLesson={onCopyLesson} />;
  }
};
export default Lessons;