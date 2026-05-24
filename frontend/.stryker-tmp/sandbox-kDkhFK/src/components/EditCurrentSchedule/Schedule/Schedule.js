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
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import ScheduleBoard from '../../../containers/EditCurrentSchedule/ScheduleBoard';
import ScheduleDialog from '../../../containers/Dialogs/ScheduleDialog';
import ScheduleDaySidebar from '../../ScheduleTable/ScheduleDaySidebar/ScheduleDaySidebar';
import { CircularProgress } from '@material-ui/core';
import './Schedule.scss';
import { COMMON_GROUP_TITLE, NO_CURRENT_SEMESTER } from '../../../constants/translationLabels/common';
import { actionType } from '../../../constants/actionTypes';
import { addClassDayBoard, removeClassDayBoard } from '../../../helper/schedule';
import { setScheduleOperationLoading } from "../../../actions/loadingIndicator";

// Width of a single group column in pixels
const COLUMN_WIDTH = 150;
const Schedule = props => {
  if (stryMutAct_9fa48("1304")) {
    {}
  } else {
    stryCov_9fa48("1304");
    const {
      groups,
      dragItemData,
      groupId,
      currentSemester,
      allLessons,
      selectedGroupById,
      getLessonsByGroupId,
      addItemsToSchedule,
      editRoomItemToSchedule,
      scheduleOperationLoading,
      setScheduleOperationLoading,
      t
    } = props;
    const [isOpenScheduleDialog, setIsOpenScheduleDialog] = useState(stryMutAct_9fa48("1305") ? true : (stryCov_9fa48("1305"), false));
    const [dialogScheduleData, setDialogScheduleData] = useState(null);
    const [containerWidth, setContainerWidth] = useState(1000);
    const containerRef = useRef(null);
    const listRef = useRef(null);
    const days = currentSemester.semester_days;
    const classes = currentSemester.semester_classes;

    // Update container width on mount and window resize
    useEffect(() => {
      if (stryMutAct_9fa48("1306")) {
        {}
      } else {
        stryCov_9fa48("1306");
        const updateWidth = () => {
          if (stryMutAct_9fa48("1307")) {
            {}
          } else {
            stryCov_9fa48("1307");
            if (stryMutAct_9fa48("1309") ? false : stryMutAct_9fa48("1308") ? true : (stryCov_9fa48("1308", "1309"), containerRef.current)) {
              if (stryMutAct_9fa48("1310")) {
                {}
              } else {
                stryCov_9fa48("1310");
                setContainerWidth(containerRef.current.clientWidth);
              }
            }
          }
        };

        // Delay initial measurement to ensure DOM is ready
        const timer = setTimeout(updateWidth, 100);
        window.addEventListener(stryMutAct_9fa48("1311") ? "" : (stryCov_9fa48("1311"), 'resize'), updateWidth);
        return () => {
          if (stryMutAct_9fa48("1312")) {
            {}
          } else {
            stryCov_9fa48("1312");
            clearTimeout(timer);
            window.removeEventListener(stryMutAct_9fa48("1313") ? "" : (stryCov_9fa48("1313"), 'resize'), updateWidth);
          }
        };
      }
    }, stryMutAct_9fa48("1314") ? [] : (stryCov_9fa48("1314"), [currentSemester]));

    // Scroll to selected group when groupId changes
    useEffect(() => {
      if (stryMutAct_9fa48("1315")) {
        {}
      } else {
        stryCov_9fa48("1315");
        if (stryMutAct_9fa48("1318") ? groupId || listRef.current : stryMutAct_9fa48("1317") ? false : stryMutAct_9fa48("1316") ? true : (stryCov_9fa48("1316", "1317", "1318"), groupId && listRef.current)) {
          if (stryMutAct_9fa48("1319")) {
            {}
          } else {
            stryCov_9fa48("1319");
            const groupIndex = groups.findIndex(stryMutAct_9fa48("1320") ? () => undefined : (stryCov_9fa48("1320"), g => stryMutAct_9fa48("1323") ? g.id !== groupId : stryMutAct_9fa48("1322") ? false : stryMutAct_9fa48("1321") ? true : (stryCov_9fa48("1321", "1322", "1323"), g.id === groupId)));
            if (stryMutAct_9fa48("1326") ? groupIndex === -1 : stryMutAct_9fa48("1325") ? false : stryMutAct_9fa48("1324") ? true : (stryCov_9fa48("1324", "1325", "1326"), groupIndex !== (stryMutAct_9fa48("1327") ? +1 : (stryCov_9fa48("1327"), -1)))) {
              if (stryMutAct_9fa48("1328")) {
                {}
              } else {
                stryCov_9fa48("1328");
                listRef.current.scrollToItem(groupIndex, stryMutAct_9fa48("1329") ? "" : (stryCov_9fa48("1329"), 'center'));
              }
            }
          }
        }
      }
    }, stryMutAct_9fa48("1330") ? [] : (stryCov_9fa48("1330"), [groupId, groups]));
    const openScheduleDialogWithData = data => {
      if (stryMutAct_9fa48("1331")) {
        {}
      } else {
        stryCov_9fa48("1331");
        setDialogScheduleData(data);
        setIsOpenScheduleDialog(stryMutAct_9fa48("1332") ? false : (stryCov_9fa48("1332"), true));
      }
    };

    // Handle schedule item update or creation
    const handleChangeSchedule = (roomId, actionData) => {
      if (stryMutAct_9fa48("1333")) {
        {}
      } else {
        stryCov_9fa48("1333");
        const {
          item,
          type
        } = actionData;
        setIsOpenScheduleDialog(stryMutAct_9fa48("1334") ? true : (stryCov_9fa48("1334"), false));
        setScheduleOperationLoading(stryMutAct_9fa48("1335") ? false : (stryCov_9fa48("1335"), true));
        if (stryMutAct_9fa48("1338") ? type !== actionType.UPDATED : stryMutAct_9fa48("1337") ? false : stryMutAct_9fa48("1336") ? true : (stryCov_9fa48("1336", "1337", "1338"), type === actionType.UPDATED)) {
          if (stryMutAct_9fa48("1339")) {
            {}
          } else {
            stryCov_9fa48("1339");
            editRoomItemToSchedule(stryMutAct_9fa48("1340") ? {} : (stryCov_9fa48("1340"), {
              itemId: item.id,
              roomId
            }));
          }
        } else {
          if (stryMutAct_9fa48("1341")) {
            {}
          } else {
            stryCov_9fa48("1341");
            addItemsToSchedule(stryMutAct_9fa48("1342") ? {} : (stryCov_9fa48("1342"), {
              ...item,
              roomId
            }));
          }
        }
        selectedGroupById(actionData.groupId);
        getLessonsByGroupId(actionData.groupId);
      }
    };
    const handleClose = () => {
      if (stryMutAct_9fa48("1343")) {
        {}
      } else {
        stryCov_9fa48("1343");
        setIsOpenScheduleDialog(stryMutAct_9fa48("1344") ? true : (stryCov_9fa48("1344"), false));
      }
    };

    // Memoized column renderer for virtualized list
    const GroupColumn = useCallback(({
      index,
      style
    }) => {
      if (stryMutAct_9fa48("1345")) {
        {}
      } else {
        stryCov_9fa48("1345");
        const group = groups[index];
        const isSelectedGroup = stryMutAct_9fa48("1348") ? group.id !== groupId : stryMutAct_9fa48("1347") ? false : stryMutAct_9fa48("1346") ? true : (stryCov_9fa48("1346", "1347", "1348"), group.id === groupId);
        const isLoading = stryMutAct_9fa48("1351") ? isSelectedGroup || scheduleOperationLoading : stryMutAct_9fa48("1350") ? false : stryMutAct_9fa48("1349") ? true : (stryCov_9fa48("1349", "1350", "1351"), isSelectedGroup && scheduleOperationLoading);
        return <div style={style} key={stryMutAct_9fa48("1352") ? `` : (stryCov_9fa48("1352"), `group-${group.id}`)} className={stryMutAct_9fa48("1353") ? `` : (stryCov_9fa48("1353"), `group-section ${isSelectedGroup ? stryMutAct_9fa48("1354") ? "" : (stryCov_9fa48("1354"), 'selected-group') : stryMutAct_9fa48("1355") ? "Stryker was here!" : (stryCov_9fa48("1355"), '')} ${isLoading ? stryMutAct_9fa48("1356") ? "" : (stryCov_9fa48("1356"), 'loading') : stryMutAct_9fa48("1357") ? "Stryker was here!" : (stryCov_9fa48("1357"), '')}`)} id={stryMutAct_9fa48("1358") ? `` : (stryCov_9fa48("1358"), `group-${group.id}`)}>
                {stryMutAct_9fa48("1361") ? isLoading || <div className="column-loading-overlay">
                        <CircularProgress size={40} />
                    </div> : stryMutAct_9fa48("1360") ? false : stryMutAct_9fa48("1359") ? true : (stryCov_9fa48("1359", "1360", "1361"), isLoading && <div className="column-loading-overlay">
                        <CircularProgress size={40} />
                    </div>)}
                <span className="group-title schedule-card sticky-container">
                {group.title}
            </span>
                {allLessons.map(stryMutAct_9fa48("1362") ? () => undefined : (stryCov_9fa48("1362"), lesson => <div key={stryMutAct_9fa48("1363") ? `` : (stryCov_9fa48("1363"), `${group.id}-${lesson.id}-${lesson.week}`)} className="board-container" onMouseOver={stryMutAct_9fa48("1364") ? () => undefined : (stryCov_9fa48("1364"), () => addClassDayBoard(lesson.dayName, lesson.className))} onMouseOut={stryMutAct_9fa48("1365") ? () => undefined : (stryCov_9fa48("1365"), () => removeClassDayBoard(lesson.dayName, lesson.className))}>
                        <ScheduleBoard lesson={lesson} groupId={group.id} currentSemester={currentSemester} openDialogWithData={openScheduleDialogWithData} dragItemData={dragItemData} t={t} isSelectedGroup={isSelectedGroup} additionClassName="schedule-card schedule-board" />
                    </div>))}
            </div>;
      }
    }, stryMutAct_9fa48("1366") ? [] : (stryCov_9fa48("1366"), [groups, groupId, allLessons, currentSemester, dragItemData, t, scheduleOperationLoading]));
    const BOARD_CONTAINER_HEIGHT = 114; // Must match .board-container height in ScheduleBoard.scss
    const GROUP_TITLE_HEIGHT = 50;
    const listHeight = stryMutAct_9fa48("1367") ? allLessons.length * BOARD_CONTAINER_HEIGHT - GROUP_TITLE_HEIGHT : (stryCov_9fa48("1367"), (stryMutAct_9fa48("1368") ? allLessons.length / BOARD_CONTAINER_HEIGHT : (stryCov_9fa48("1368"), allLessons.length * BOARD_CONTAINER_HEIGHT)) + GROUP_TITLE_HEIGHT);
    return <>
            {stryMutAct_9fa48("1371") ? isOpenScheduleDialog || <ScheduleDialog itemData={dialogScheduleData} open={isOpenScheduleDialog} t={t} handleChangeSchedule={handleChangeSchedule} onClose={handleClose} /> : stryMutAct_9fa48("1370") ? false : stryMutAct_9fa48("1369") ? true : (stryCov_9fa48("1369", "1370", "1371"), isOpenScheduleDialog && <ScheduleDialog itemData={dialogScheduleData} open={isOpenScheduleDialog} t={t} handleChangeSchedule={handleChangeSchedule} onClose={handleClose} />)}
            {currentSemester.id ? <>
                    <ScheduleDaySidebar days={days} title={t(COMMON_GROUP_TITLE)} classes={classes} />
                    <section className="groups-section" ref={containerRef}>
                        <List ref={listRef} layout="horizontal" height={listHeight} width={containerWidth} itemCount={groups.length} itemSize={COLUMN_WIDTH}>
                            {GroupColumn}
                        </List>
                    </section>
                </> : <h2 className="no-current-semester">{t(NO_CURRENT_SEMESTER)}</h2>}
        </>;
  }
};
export default Schedule;