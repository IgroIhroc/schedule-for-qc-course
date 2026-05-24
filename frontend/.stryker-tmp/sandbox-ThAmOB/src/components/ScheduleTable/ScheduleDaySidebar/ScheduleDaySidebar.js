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
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import './ScheduleDaySidebar.scss';
const ScheduleDaySidebar = props => {
  if (stryMutAct_9fa48("2575")) {
    {}
  } else {
    stryCov_9fa48("2575");
    const {
      title,
      days,
      classes
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2576") ? "" : (stryCov_9fa48("2576"), 'common'));
    const getDayColour = index => {
      if (stryMutAct_9fa48("2577")) {
        {}
      } else {
        stryCov_9fa48("2577");
        return (stryMutAct_9fa48("2578") ? index * 2 : (stryCov_9fa48("2578"), index % 2)) ? stryMutAct_9fa48("2579") ? "" : (stryCov_9fa48("2579"), 'dark-blue-day') : stryMutAct_9fa48("2580") ? "" : (stryCov_9fa48("2580"), 'blue-day');
      }
    };
    return <aside className="day-classes-aside">
            <div className="schedule-card day-sidebar-title">{title}</div>
            {days.map(stryMutAct_9fa48("2581") ? () => undefined : (stryCov_9fa48("2581"), (day, index) => <div className="cards-container day-container" key={day}>
                    <span className={stryMutAct_9fa48("2582") ? `` : (stryCov_9fa48("2582"), `${getDayColour(index)} schedule-day card`)}>
                        {t(stryMutAct_9fa48("2583") ? `` : (stryCov_9fa48("2583"), `day_of_week_${day}`))}
                    </span>
                    <div className="class-section">
                        {classes.map(stryMutAct_9fa48("2584") ? () => undefined : (stryCov_9fa48("2584"), classScheduler => <Fragment key={classScheduler.id}>
                                <div className="day-section">
                                    <p className={stryMutAct_9fa48("2585") ? `` : (stryCov_9fa48("2585"), `day-line ${day}-${classScheduler.class_name}`)}></p>
                                    <span id={stryMutAct_9fa48("2586") ? `` : (stryCov_9fa48("2586"), `${day}-${classScheduler.class_name}`)} className="schedule-card schedule-class">
                                        {classScheduler.class_name}
                                    </span>
                                    <p className={stryMutAct_9fa48("2587") ? `` : (stryCov_9fa48("2587"), `day-line ${day}-${classScheduler.class_name}`)}></p>
                                </div>
                            </Fragment>))}
                    </div>
                </div>))}
        </aside>;
  }
};
export default ScheduleDaySidebar;