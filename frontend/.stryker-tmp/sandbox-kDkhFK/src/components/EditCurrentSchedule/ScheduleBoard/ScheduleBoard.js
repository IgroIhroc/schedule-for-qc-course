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
import { isEmpty } from 'lodash';
import { setLoadingService } from '../../../services/loadingService';
import ScheduleBoardItem from '../../../containers/EditCurrentSchedule/ScheduleBoardItem';
import { actionType } from '../../../constants/actionTypes';
import './ScheduleBoard.scss';
const ScheduleBoard = props => {
  if (stryMutAct_9fa48("1372")) {
    {}
  } else {
    stryCov_9fa48("1372");
    const {
      lesson,
      isSelectedGroup,
      dragItemData,
      additionClassName,
      currentSemester,
      groupId,
      scheduleItems,
      openDialogWithData,
      t,
      checkScheduleItemAvailability
    } = props;
    const {
      classId,
      dayName,
      week
    } = lesson;
    const [className, setClassName] = useState(stryMutAct_9fa48("1373") ? "Stryker was here!" : (stryCov_9fa48("1373"), ''));
    const [boardFill, setBoardFill] = useState({});
    useEffect(() => {
      if (stryMutAct_9fa48("1374")) {
        {}
      } else {
        stryCov_9fa48("1374");
        setBoardFill(scheduleItems.find(stryMutAct_9fa48("1375") ? () => undefined : (stryCov_9fa48("1375"), item => stryMutAct_9fa48("1378") ? item.lesson.group.id === groupId && item.period.id === classId && item.dayOfWeek === dayName || item.evenOdd === week : stryMutAct_9fa48("1377") ? false : stryMutAct_9fa48("1376") ? true : (stryCov_9fa48("1376", "1377", "1378"), (stryMutAct_9fa48("1380") ? item.lesson.group.id === groupId && item.period.id === classId || item.dayOfWeek === dayName : stryMutAct_9fa48("1379") ? true : (stryCov_9fa48("1379", "1380"), (stryMutAct_9fa48("1382") ? item.lesson.group.id === groupId || item.period.id === classId : stryMutAct_9fa48("1381") ? true : (stryCov_9fa48("1381", "1382"), (stryMutAct_9fa48("1384") ? item.lesson.group.id !== groupId : stryMutAct_9fa48("1383") ? true : (stryCov_9fa48("1383", "1384"), item.lesson.group.id === groupId)) && (stryMutAct_9fa48("1386") ? item.period.id !== classId : stryMutAct_9fa48("1385") ? true : (stryCov_9fa48("1385", "1386"), item.period.id === classId)))) && (stryMutAct_9fa48("1388") ? item.dayOfWeek !== dayName : stryMutAct_9fa48("1387") ? true : (stryCov_9fa48("1387", "1388"), item.dayOfWeek === dayName)))) && (stryMutAct_9fa48("1390") ? item.evenOdd !== week : stryMutAct_9fa48("1389") ? true : (stryCov_9fa48("1389", "1390"), item.evenOdd === week))))));
      }
    }, stryMutAct_9fa48("1391") ? [] : (stryCov_9fa48("1391"), [scheduleItems]));
    const changeBoardStyle = (selectedClassName, notSelectedClassName, callBack = () => {}) => {
      if (stryMutAct_9fa48("1392")) {
        {}
      } else {
        stryCov_9fa48("1392");
        if (stryMutAct_9fa48("1395") ? false : stryMutAct_9fa48("1394") ? true : stryMutAct_9fa48("1393") ? isSelectedGroup : (stryCov_9fa48("1393", "1394", "1395"), !isSelectedGroup)) {
          if (stryMutAct_9fa48("1396")) {
            {}
          } else {
            stryCov_9fa48("1396");
            setClassName(notSelectedClassName);
          }
        } else {
          if (stryMutAct_9fa48("1397")) {
            {}
          } else {
            stryCov_9fa48("1397");
            setClassName(selectedClassName);
            callBack();
          }
        }
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("1398")) {
        {}
      } else {
        stryCov_9fa48("1398");
        changeBoardStyle(stryMutAct_9fa48("1399") ? "" : (stryCov_9fa48("1399"), 'possible'), stryMutAct_9fa48("1400") ? "Stryker was here!" : (stryCov_9fa48("1400"), ''));
      }
    }, stryMutAct_9fa48("1401") ? [] : (stryCov_9fa48("1401"), [isSelectedGroup]));
    const drop = e => {
      if (stryMutAct_9fa48("1402")) {
        {}
      } else {
        stryCov_9fa48("1402");
        if (stryMutAct_9fa48("1405") ? false : stryMutAct_9fa48("1404") ? true : stryMutAct_9fa48("1403") ? isSelectedGroup : (stryCov_9fa48("1403", "1404", "1405"), !isSelectedGroup)) {
          if (stryMutAct_9fa48("1406")) {
            {}
          } else {
            stryCov_9fa48("1406");
            e.preventDefault();
            return;
          }
        }
        const AddObj = stryMutAct_9fa48("1407") ? {} : (stryCov_9fa48("1407"), {
          // id: dragItemData.id,
          lessonId: dragItemData.id,
          dayOfWeek: dayName,
          periodId: classId,
          evenOdd: week,
          semesterId: currentSemester.id
        });
        checkScheduleItemAvailability(AddObj);
        setClassName(stryMutAct_9fa48("1408") ? "" : (stryCov_9fa48("1408"), 'possible'));
        setLoadingService(stryMutAct_9fa48("1409") ? false : (stryCov_9fa48("1409"), true));
        openDialogWithData(stryMutAct_9fa48("1410") ? {} : (stryCov_9fa48("1410"), {
          type: actionType.ADD,
          item: AddObj,
          groupId
        }));
      }
    };
    const dragOver = e => {
      if (stryMutAct_9fa48("1411")) {
        {}
      } else {
        stryCov_9fa48("1411");
        changeBoardStyle(stryMutAct_9fa48("1412") ? "" : (stryCov_9fa48("1412"), 'allow'), stryMutAct_9fa48("1413") ? "" : (stryCov_9fa48("1413"), 'not-allow'), stryMutAct_9fa48("1414") ? () => undefined : (stryCov_9fa48("1414"), () => e.preventDefault()));
      }
    };
    const dragLeave = e => {
      if (stryMutAct_9fa48("1415")) {
        {}
      } else {
        stryCov_9fa48("1415");
        changeBoardStyle(stryMutAct_9fa48("1416") ? "" : (stryCov_9fa48("1416"), 'possible'), stryMutAct_9fa48("1417") ? "Stryker was here!" : (stryCov_9fa48("1417"), ''), stryMutAct_9fa48("1418") ? () => undefined : (stryCov_9fa48("1418"), () => e.preventDefault()));
      }
    };
    return <>
            {(stryMutAct_9fa48("1419") ? isEmpty(boardFill) : (stryCov_9fa48("1419"), !isEmpty(boardFill))) ? <ScheduleBoardItem itemData={boardFill} t={t} openDialogWithData={openDialogWithData} /> : <div className={stryMutAct_9fa48("1420") ? `` : (stryCov_9fa48("1420"), `board ${additionClassName} ${className}`)} onDrop={drop} onDragOver={dragOver} onDragLeave={dragLeave}>
                    <p>{t(stryMutAct_9fa48("1421") ? `` : (stryCov_9fa48("1421"), `week_${stryMutAct_9fa48("1422") ? week.toUpperCase() : (stryCov_9fa48("1422"), week.toLowerCase())}_title`))}</p>
                </div>}
        </>;
  }
};
export default ScheduleBoard;
// export default React.memo(ScheduleBoard);