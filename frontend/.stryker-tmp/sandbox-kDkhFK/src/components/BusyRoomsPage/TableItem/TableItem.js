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
import { isEmpty } from 'lodash';
import Card from '@material-ui/core/Card';
import './TableItem.scss';
import { addClassDayBoard, getColorByFullness, removeClassDayBoard } from '../../../helper/schedule';
import { GroupTitle } from './GroupTitle';
const TableItem = props => {
  if (stryMutAct_9fa48("954")) {
    {}
  } else {
    stryCov_9fa48("954");
    const {
      classes,
      schedule,
      index,
      columnsSize
    } = props;
    const findItemInArray = (array, equalTo) => {
      if (stryMutAct_9fa48("955")) {
        {}
      } else {
        stryCov_9fa48("955");
        return array.find(stryMutAct_9fa48("956") ? () => undefined : (stryCov_9fa48("956"), classItem => stryMutAct_9fa48("959") ? classItem.class_id !== equalTo : stryMutAct_9fa48("958") ? false : stryMutAct_9fa48("957") ? true : (stryCov_9fa48("957", "958", "959"), classItem.class_id === equalTo)));
      }
    };
    return classes.map((scheduleClass, classIndex) => {
      if (stryMutAct_9fa48("960")) {
        {}
      } else {
        stryCov_9fa48("960");
        const classOdd = findItemInArray(schedule.classes[0].odd, scheduleClass.id);
        const classEven = findItemInArray(schedule.classes[0].even, scheduleClass.id);
        return (
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <section key={stryMutAct_9fa48("961") ? `` : (stryCov_9fa48("961"), `${index}_${classIndex.toString()}`)} onMouseOver={stryMutAct_9fa48("962") ? () => undefined : (stryCov_9fa48("962"), () => addClassDayBoard(schedule.day, scheduleClass.class_name))} onMouseOut={stryMutAct_9fa48("963") ? () => undefined : (stryCov_9fa48("963"), () => removeClassDayBoard(schedule.day, scheduleClass.class_name))} className={stryMutAct_9fa48("964") ? `` : (stryCov_9fa48("964"), `class-container responsive-table-column-${columnsSize}`)}>
                <div className="class-info-container">
                    <Card className={stryMutAct_9fa48("965") ? `` : (stryCov_9fa48("965"), `schedule-card class-info-data ${getColorByFullness(stryMutAct_9fa48("966") ? classOdd.lessons : (stryCov_9fa48("966"), classOdd?.lessons))}`)}>
                        <div className="group-list-container">
                            {(stryMutAct_9fa48("969") ? !classOdd && isEmpty(classOdd.lessons) : stryMutAct_9fa48("968") ? false : stryMutAct_9fa48("967") ? true : (stryCov_9fa48("967", "968", "969"), (stryMutAct_9fa48("970") ? classOdd : (stryCov_9fa48("970"), !classOdd)) || isEmpty(classOdd.lessons))) ? <> </> : <GroupTitle lessonArray={classOdd.lessons} />}
                        </div>
                    </Card>
                </div>

                <div className="class-info-container">
                    <Card className={stryMutAct_9fa48("971") ? `` : (stryCov_9fa48("971"), `schedule-card class-info-data ${getColorByFullness(stryMutAct_9fa48("972") ? classEven.lessons : (stryCov_9fa48("972"), classEven?.lessons))}`)}>
                        <div className="group-list-container">
                            {(stryMutAct_9fa48("975") ? !classEven && isEmpty(classEven.lessons) : stryMutAct_9fa48("974") ? false : stryMutAct_9fa48("973") ? true : (stryCov_9fa48("973", "974", "975"), (stryMutAct_9fa48("976") ? classEven : (stryCov_9fa48("976"), !classEven)) || isEmpty(classEven.lessons))) ? <> </> : <GroupTitle lessonArray={classEven.lessons} />}
                        </div>
                    </Card>
                </div>
            </section>
        );
      }
    });
  }
};
export default TableItem;