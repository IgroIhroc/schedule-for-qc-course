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
import './BusyRoomsTable.scss';
import TableItem from '../TableItem/TableItem';
import ScheduleDaySidebar from '../../ScheduleTable/ScheduleDaySidebar/ScheduleDaySidebar';
import { ROOM_LIST_TITLE } from '../../../constants/translationLabels/common';
const BusyRoomsTable = props => {
  if (stryMutAct_9fa48("923")) {
    {}
  } else {
    stryCov_9fa48("923");
    const {
      busyRooms,
      days,
      classes,
      columnsSize
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("924") ? "" : (stryCov_9fa48("924"), 'common'));
    return <section className="busy-rooms-table-container">
            <ScheduleDaySidebar title={t(ROOM_LIST_TITLE)} days={days} classes={classes} />
            <section className="view-rooms">
                {busyRooms.map(stryMutAct_9fa48("925") ? () => undefined : (stryCov_9fa48("925"), busyRoom => <div className="busy-room-section" key={busyRoom.room_id}>
                        <span title={busyRoom.room_type} className={stryMutAct_9fa48("926") ? `` : (stryCov_9fa48("926"), `busy-room-title responsive-table-column-${columnsSize} schedule-card sticky-container`)}>
                            {busyRoom.room_name}
                        </span>
                        {busyRoom.schedules.map((schedule, index) => {
            if (stryMutAct_9fa48("927")) {
              {}
            } else {
              stryCov_9fa48("927");
              return days.includes(schedule.day) ? <TableItem key={stryMutAct_9fa48("928") ? index.toString() - busyRoom.room_id : (stryCov_9fa48("928"), index.toString() + busyRoom.room_id)} index={stryMutAct_9fa48("929") ? index.toString() - busyRoom.room_id : (stryCov_9fa48("929"), index.toString() + busyRoom.room_id)} classes={classes} schedule={schedule} columnsSize={columnsSize} /> : null;
            }
          })}
                    </div>))}
            </section>
        </section>;
  }
};
export default BusyRoomsTable;