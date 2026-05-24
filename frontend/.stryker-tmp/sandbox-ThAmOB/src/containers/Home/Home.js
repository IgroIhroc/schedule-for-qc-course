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
import React, { Fragment, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import GroupSchedulePage from '../GroupSchedulePage/GroupSchedulePage';
import { getPublicClassScheduleStart } from '../../actions/classes';
import { HOME_TITLE } from '../../constants/translationLabels/common';
const HomePage = props => {
  if (stryMutAct_9fa48("5158")) {
    {}
  } else {
    stryCov_9fa48("5158");
    const {
      getClassScheduleList
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("5159") ? "" : (stryCov_9fa48("5159"), 'common'));
    useEffect(() => {
      if (stryMutAct_9fa48("5160")) {
        {}
      } else {
        stryCov_9fa48("5160");
        getClassScheduleList();
      }
    }, stryMutAct_9fa48("5161") ? ["Stryker was here"] : (stryCov_9fa48("5161"), []));
    return <Fragment>
            <h1>{t(HOME_TITLE)}</h1>
            <GroupSchedulePage scheduleType="default" />
        </Fragment>;
  }
};
const mapDispatchToProps = stryMutAct_9fa48("5162") ? () => undefined : (stryCov_9fa48("5162"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5163") ? {} : (stryCov_9fa48("5163"), {
    getClassScheduleList: stryMutAct_9fa48("5164") ? () => undefined : (stryCov_9fa48("5164"), () => dispatch(getPublicClassScheduleStart()))
  });
  return mapDispatchToProps;
})());
export default connect(null, mapDispatchToProps)(HomePage);