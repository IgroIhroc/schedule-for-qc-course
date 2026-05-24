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
import './TableItem.scss';
export const GroupTitle = props => {
  if (stryMutAct_9fa48("949")) {
    {}
  } else {
    stryCov_9fa48("949");
    const {
      lessonArray
    } = props;
    return lessonArray.map(lesson => {
      if (stryMutAct_9fa48("950")) {
        {}
      } else {
        stryCov_9fa48("950");
        const subject = lesson.subject_for_site;
        const teacher = lesson.teacher_for_site;
        return lesson.groups.map((groupItem, index) => {
          if (stryMutAct_9fa48("951")) {
            {}
          } else {
            stryCov_9fa48("951");
            const hoverInfo = stryMutAct_9fa48("952") ? `` : (stryCov_9fa48("952"), `${teacher} / ${subject}`);
            return <span className="group-list" title={hoverInfo} key={stryMutAct_9fa48("953") ? `` : (stryCov_9fa48("953"), `${hoverInfo}-${groupItem.group_name}-${index.toString()}`)}>
                    {groupItem.group_name}
                </span>;
          }
        });
      }
    });
  }
};