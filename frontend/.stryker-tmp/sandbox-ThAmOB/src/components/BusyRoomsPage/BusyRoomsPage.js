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
import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useTranslation } from 'react-i18next';
import { get } from 'lodash';
import './BusyRoomsPage.scss';
import BusyRoomsTable from './BustRoomsTable/BusyRoomsTable';
import { COMMON_TABLE_COLUMNS_SIZE } from '../../constants/translationLabels/common';
import { columnSizeArray } from '../../constants/schedule/schedule';
const BusyRoomsPage = props => {
  if (stryMutAct_9fa48("930")) {
    {}
  } else {
    stryCov_9fa48("930");
    const {
      currentSemester,
      getAllScheduleItems,
      busyRooms,
      getBusyRooms,
      getClassScheduleList,
      setScheduleLoading,
      scheduleLoading
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("931") ? "" : (stryCov_9fa48("931"), 'common'));
    const [columnsSize, setColumnsSize] = useState(stryMutAct_9fa48("934") ? localStorage.getItem('roomsTableColumnsSize') && 'base' : stryMutAct_9fa48("933") ? false : stryMutAct_9fa48("932") ? true : (stryCov_9fa48("932", "933", "934"), localStorage.getItem(stryMutAct_9fa48("935") ? "" : (stryCov_9fa48("935"), 'roomsTableColumnsSize')) || (stryMutAct_9fa48("936") ? "" : (stryCov_9fa48("936"), 'base'))));
    useEffect(() => {
      if (stryMutAct_9fa48("937")) {
        {}
      } else {
        stryCov_9fa48("937");
        setScheduleLoading(stryMutAct_9fa48("938") ? false : (stryCov_9fa48("938"), true));
        getBusyRooms();
        getAllScheduleItems();
        getClassScheduleList();
      }
    }, stryMutAct_9fa48("939") ? ["Stryker was here"] : (stryCov_9fa48("939"), []));
    const handleChange = ({
      target
    }) => {
      if (stryMutAct_9fa48("940")) {
        {}
      } else {
        stryCov_9fa48("940");
        setColumnsSize(target.value);
        localStorage.setItem(stryMutAct_9fa48("941") ? "" : (stryCov_9fa48("941"), 'roomsTableColumnsSize'), target.value);
      }
    };
    const days = currentSemester.semester_days;
    const classes = currentSemester.semester_classes;
    return <section className="schedule-card busy-rooms-control-panel">
            {(stryMutAct_9fa48("944") ? scheduleLoading && !get(busyRooms[0], 'schedules') : stryMutAct_9fa48("943") ? false : stryMutAct_9fa48("942") ? true : (stryCov_9fa48("942", "943", "944"), scheduleLoading || (stryMutAct_9fa48("945") ? get(busyRooms[0], 'schedules') : (stryCov_9fa48("945"), !get(busyRooms[0], stryMutAct_9fa48("946") ? "" : (stryCov_9fa48("946"), 'schedules')))))) ? <CircularProgress className="loading-circle" /> : <>
                    <div className="table-size-container">
                        <FormControl component="div" className="radio-control">
                            <FormLabel component="legend">{stryMutAct_9fa48("947") ? `` : (stryCov_9fa48("947"), `${t(COMMON_TABLE_COLUMNS_SIZE)}:`)}</FormLabel>
                            <RadioGroup aria-label="gender" className="radio-group" value={columnsSize} onChange={handleChange}>
                                {columnSizeArray.map(stryMutAct_9fa48("948") ? () => undefined : (stryCov_9fa48("948"), item => <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={t(item.label)} />))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <BusyRoomsTable days={days} t={t} columnsSize={columnsSize} classes={classes} busyRooms={busyRooms} />
                </>}
        </section>;
  }
};
export default BusyRoomsPage;