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
import './GroupSchedulePageTop.scss';
import Card from '../../../share/Card/Card';
import { GREETING_SCHEDULE_MESSAGE, GREETING_SCHEDULE_MESSAGE_HINT } from '../../../constants/translationLabels/common';
import SelectPlace from '../../../containers/GroupSchedulePage/SelectPlace';
import SchedulePageForm from '../../../containers/GroupSchedulePage/SchedulePageForm';
const GroupSchedulePageTop = props => {
  if (stryMutAct_9fa48("1735")) {
    {}
  } else {
    stryCov_9fa48("1735");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1736") ? "" : (stryCov_9fa48("1736"), 'common'));
    const {
      handleSubmit
    } = props;
    return <section className="schedule_page-container">
            <p>{t(GREETING_SCHEDULE_MESSAGE)}</p>
            <p>{t(GREETING_SCHEDULE_MESSAGE_HINT)}</p>
            <section className="schedule-form-buttons-container">
                <Card additionClassName="form-card schedule-form-card">
                    <SchedulePageForm onSubmit={handleSubmit} />
                </Card>
                <SelectPlace />
            </section>
        </section>;
  }
};
export default GroupSchedulePageTop;