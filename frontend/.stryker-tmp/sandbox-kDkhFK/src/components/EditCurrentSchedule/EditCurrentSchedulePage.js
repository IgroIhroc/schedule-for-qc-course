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
import { useTranslation } from 'react-i18next';
import './EditCurrentSchedule.scss';
import ScheduleLessonsList from '../../containers/EditCurrentSchedule/ScheduleLessonsList';
import Schedule from '../../containers/EditCurrentSchedule/Schedule';
import { SCHEDULE_TITLE, USE_PC } from '../../constants/translationLabels/common';
import { EDIT_SCHEDULE_MIN_WINDOW_SIZE } from '../../constants/windowSizes';
const SchedulePage = props => {
  if (stryMutAct_9fa48("1252")) {
    {}
  } else {
    stryCov_9fa48("1252");
    const {
      groupId,
      itemGroupId,
      scheduleItems,
      getEnabledGroups,
      scheduleLoading,
      setScheduleLoading,
      getAllLessonsByGroup,
      getAllScheduleItems,
      clearScheduleItems,
      getClassScheduleList,
      currentSemester,
      getListOfRooms
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1253") ? "" : (stryCov_9fa48("1253"), 'common'));
    document.title = t(SCHEDULE_TITLE);
    const [dragItemData, setDragItemData] = useState({});
    const [isHiddenSchedule, setIsHiddenSchedule] = useState(stryMutAct_9fa48("1254") ? true : (stryCov_9fa48("1254"), false));
    const days = stryMutAct_9fa48("1257") ? currentSemester.semester_days && [] : stryMutAct_9fa48("1256") ? false : stryMutAct_9fa48("1255") ? true : (stryCov_9fa48("1255", "1256", "1257"), currentSemester.semester_days || (stryMutAct_9fa48("1258") ? ["Stryker was here"] : (stryCov_9fa48("1258"), [])));
    const classes = stryMutAct_9fa48("1261") ? currentSemester.semester_classes && [] : stryMutAct_9fa48("1260") ? false : stryMutAct_9fa48("1259") ? true : (stryCov_9fa48("1259", "1260", "1261"), currentSemester.semester_classes || (stryMutAct_9fa48("1262") ? ["Stryker was here"] : (stryCov_9fa48("1262"), [])));
    const allLessons = stryMutAct_9fa48("1263") ? ["Stryker was here"] : (stryCov_9fa48("1263"), []);
    const handleResize = () => {
      if (stryMutAct_9fa48("1264")) {
        {}
      } else {
        stryCov_9fa48("1264");
        if (stryMutAct_9fa48("1268") ? window.innerWidth >= EDIT_SCHEDULE_MIN_WINDOW_SIZE : stryMutAct_9fa48("1267") ? window.innerWidth <= EDIT_SCHEDULE_MIN_WINDOW_SIZE : stryMutAct_9fa48("1266") ? false : stryMutAct_9fa48("1265") ? true : (stryCov_9fa48("1265", "1266", "1267", "1268"), window.innerWidth < EDIT_SCHEDULE_MIN_WINDOW_SIZE)) {
          if (stryMutAct_9fa48("1269")) {
            {}
          } else {
            stryCov_9fa48("1269");
            setIsHiddenSchedule(stryMutAct_9fa48("1270") ? false : (stryCov_9fa48("1270"), true));
          }
        } else {
          if (stryMutAct_9fa48("1271")) {
            {}
          } else {
            stryCov_9fa48("1271");
            setIsHiddenSchedule(stryMutAct_9fa48("1272") ? true : (stryCov_9fa48("1272"), false));
          }
        }
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("1273")) {
        {}
      } else {
        stryCov_9fa48("1273");
        window.addEventListener(stryMutAct_9fa48("1274") ? "" : (stryCov_9fa48("1274"), 'resize'), handleResize);
        handleResize();
        return () => {
          if (stryMutAct_9fa48("1275")) {
            {}
          } else {
            stryCov_9fa48("1275");
            window.removeEventListener(stryMutAct_9fa48("1276") ? "" : (stryCov_9fa48("1276"), 'resize'), handleResize);
          }
        };
      }
    }, stryMutAct_9fa48("1277") ? ["Stryker was here"] : (stryCov_9fa48("1277"), []));
    days.forEach((day, outerIndex) => {
      if (stryMutAct_9fa48("1278")) {
        {}
      } else {
        stryCov_9fa48("1278");
        classes.forEach((classNumber, index) => {
          if (stryMutAct_9fa48("1279")) {
            {}
          } else {
            stryCov_9fa48("1279");
            allLessons.push(stryMutAct_9fa48("1280") ? {} : (stryCov_9fa48("1280"), {
              dayName: day,
              classId: classNumber.id,
              className: classNumber.class_name,
              week: stryMutAct_9fa48("1281") ? "" : (stryCov_9fa48("1281"), 'ODD'),
              id: stryMutAct_9fa48("1282") ? `` : (stryCov_9fa48("1282"), `${index}-${outerIndex}`)
            }), stryMutAct_9fa48("1283") ? {} : (stryCov_9fa48("1283"), {
              dayName: day,
              classId: classNumber.id,
              className: classNumber.class_name,
              week: stryMutAct_9fa48("1284") ? "" : (stryCov_9fa48("1284"), 'EVEN'),
              id: stryMutAct_9fa48("1285") ? `` : (stryCov_9fa48("1285"), `${index}-${outerIndex}`)
            }));
          }
        });
      }
    });
    useEffect(() => {
      if (stryMutAct_9fa48("1286")) {
        {}
      } else {
        stryCov_9fa48("1286");
        setScheduleLoading(stryMutAct_9fa48("1287") ? false : (stryCov_9fa48("1287"), true));
        getAllScheduleItems();
        getEnabledGroups();
        getListOfRooms();
        getClassScheduleList();
      }
    }, stryMutAct_9fa48("1288") ? ["Stryker was here"] : (stryCov_9fa48("1288"), []));
    useEffect(() => {
      if (stryMutAct_9fa48("1289")) {
        {}
      } else {
        stryCov_9fa48("1289");
        if (stryMutAct_9fa48("1291") ? false : stryMutAct_9fa48("1290") ? true : (stryCov_9fa48("1290", "1291"), groupId)) {
          if (stryMutAct_9fa48("1292")) {
            {}
          } else {
            stryCov_9fa48("1292");
            getAllLessonsByGroup(groupId);
          }
        }
      }
    }, stryMutAct_9fa48("1293") ? [] : (stryCov_9fa48("1293"), [groupId]));
    const handleClearSchedule = () => {
      if (stryMutAct_9fa48("1294")) {
        {}
      } else {
        stryCov_9fa48("1294");
        if (stryMutAct_9fa48("1296") ? false : stryMutAct_9fa48("1295") ? true : (stryCov_9fa48("1295", "1296"), currentSemester.id)) {
          if (stryMutAct_9fa48("1297")) {
            {}
          } else {
            stryCov_9fa48("1297");
            clearScheduleItems(currentSemester.id);
            if (stryMutAct_9fa48("1299") ? false : stryMutAct_9fa48("1298") ? true : (stryCov_9fa48("1298", "1299"), groupId)) {
              if (stryMutAct_9fa48("1300")) {
                {}
              } else {
                stryCov_9fa48("1300");
                getAllLessonsByGroup(groupId);
              }
            }
          }
        }
      }
    };
    if (stryMutAct_9fa48("1302") ? false : stryMutAct_9fa48("1301") ? true : (stryCov_9fa48("1301", "1302"), isHiddenSchedule)) {
      if (stryMutAct_9fa48("1303")) {
        {}
      } else {
        stryCov_9fa48("1303");
        return <section className="for-phones-and-tablets schedule-card">
                <h1>{t(USE_PC)}</h1>
            </section>;
      }
    }
    return <>
            <section className="schedule-control-panel">
                <section className="schedule-card schedule-table ">
                    {scheduleLoading ? <CircularProgress className="loading-circle" /> : <>
                            <Schedule dragItemData={dragItemData} groupId={groupId} currentSemester={currentSemester} itemGroupId={itemGroupId} items={scheduleItems} t={t} allLessons={allLessons} />
                        </>}
                </section>
                <aside className="schedule-card lesson-list">
                    <ScheduleLessonsList setDragItemData={setDragItemData} items={scheduleItems} handleClearSchedule={handleClearSchedule} groupId={groupId} t={t} classScheduler={currentSemester.semester_classes} />
                </aside>
            </section>
        </>;
  }
};
export default SchedulePage;