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
import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './GroupSchedulePage.scss';
import { CircularProgress } from '@material-ui/core';
import { get } from 'lodash';
import { getDataFromParams } from '../../utils/urlUtils';
import GroupSchedulePageTop from './GroupSchedulePageTop/GroupSchedulePageTop';
import { SCHEDULE_FOR_LINK } from '../../constants/links';
import { renderSchedule } from '../../helper/renderSchedule';
import { getScheduleType } from '../../helper/getScheduleType';
import { getAllDepartmentsService } from '../../services/departmentService';
const createSubmitValues = stryMutAct_9fa48("1673") ? () => undefined : (stryCov_9fa48("1673"), (() => {
  const createSubmitValues = (semester, group, teacher, department) => stryMutAct_9fa48("1674") ? {} : (stryCov_9fa48("1674"), {
    semester,
    group: stryMutAct_9fa48("1675") ? {} : (stryCov_9fa48("1675"), {
      id: group
    }),
    teacher: stryMutAct_9fa48("1676") ? {} : (stryCov_9fa48("1676"), {
      id: teacher
    }),
    department: stryMutAct_9fa48("1677") ? {} : (stryCov_9fa48("1677"), {
      id: department
    })
  });
  return createSubmitValues;
})());
const GroupSchedulePage = props => {
  if (stryMutAct_9fa48("1678")) {
    {}
  } else {
    stryCov_9fa48("1678");
    const history = useHistory();
    const location = useLocation();
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1679") ? "" : (stryCov_9fa48("1679"), 'common'));
    const {
      defaultSemester,
      scheduleType,
      loading,
      getDefaultSemester,
      getGroupSchedule,
      getTeacherSchedule,
      getFullSchedule,
      getDepartmentSchedule,
      groupSchedule,
      teacherSchedule,
      fullSchedule
    } = props;
    useEffect(() => {
      if (stryMutAct_9fa48("1680")) {
        {}
      } else {
        stryCov_9fa48("1680");
        getDefaultSemester();
        getAllDepartmentsService();
      }
    }, stryMutAct_9fa48("1681") ? [] : (stryCov_9fa48("1681"), [getDefaultSemester]));
    useEffect(() => {
      if (stryMutAct_9fa48("1682")) {
        {}
      } else {
        stryCov_9fa48("1682");
        if (stryMutAct_9fa48("1685") ? !loading || scheduleType : stryMutAct_9fa48("1684") ? false : stryMutAct_9fa48("1683") ? true : (stryCov_9fa48("1683", "1684", "1685"), (stryMutAct_9fa48("1686") ? loading : (stryCov_9fa48("1686"), !loading)) && scheduleType)) {
          if (stryMutAct_9fa48("1687")) {
            {}
          } else {
            stryCov_9fa48("1687");
            const timer = setTimeout(() => {
              if (stryMutAct_9fa48("1688")) {
                {}
              } else {
                stryCov_9fa48("1688");
                const currentDayElement = document.querySelector(stryMutAct_9fa48("1689") ? "" : (stryCov_9fa48("1689"), '.currentDay'));
                if (stryMutAct_9fa48("1691") ? false : stryMutAct_9fa48("1690") ? true : (stryCov_9fa48("1690", "1691"), currentDayElement)) {
                  if (stryMutAct_9fa48("1692")) {
                    {}
                  } else {
                    stryCov_9fa48("1692");
                    currentDayElement.scrollIntoView(stryMutAct_9fa48("1693") ? {} : (stryCov_9fa48("1693"), {
                      behavior: stryMutAct_9fa48("1694") ? "" : (stryCov_9fa48("1694"), 'smooth'),
                      block: stryMutAct_9fa48("1695") ? "" : (stryCov_9fa48("1695"), 'center'),
                      inline: stryMutAct_9fa48("1696") ? "" : (stryCov_9fa48("1696"), 'nearest')
                    }));
                  }
                }
              }
            }, 100);
            return stryMutAct_9fa48("1697") ? () => undefined : (stryCov_9fa48("1697"), () => clearTimeout(timer));
          }
        }
      }
    }, stryMutAct_9fa48("1698") ? [] : (stryCov_9fa48("1698"), [loading, scheduleType, groupSchedule, teacherSchedule, fullSchedule]));
    const scheduleActions = stryMutAct_9fa48("1699") ? {} : (stryCov_9fa48("1699"), {
      group: values => {
        if (stryMutAct_9fa48("1700")) {
          {}
        } else {
          stryCov_9fa48("1700");
          const {
            semester,
            group
          } = values;
          getGroupSchedule(semester.id, group.id);
        }
      },
      teacher: values => {
        if (stryMutAct_9fa48("1701")) {
          {}
        } else {
          stryCov_9fa48("1701");
          const {
            semester,
            teacher
          } = values;
          getTeacherSchedule(semester.id, teacher.id);
        }
      },
      full: values => {
        if (stryMutAct_9fa48("1702")) {
          {}
        } else {
          stryCov_9fa48("1702");
          const {
            semester
          } = values;
          getFullSchedule(semester.id);
        }
      },
      department: values => {
        if (stryMutAct_9fa48("1703")) {
          {}
        } else {
          stryCov_9fa48("1703");
          const {
            semester,
            department
          } = values;
          getDepartmentSchedule(semester.id, department.id);
        }
      }
    });
    const handleSubmit = values => {
      if (stryMutAct_9fa48("1704")) {
        {}
      } else {
        stryCov_9fa48("1704");
        const {
          semester,
          group,
          teacher,
          department
        } = values;
        const groupPath = get(group, stryMutAct_9fa48("1705") ? "" : (stryCov_9fa48("1705"), 'id')) ? stryMutAct_9fa48("1706") ? `` : (stryCov_9fa48("1706"), `&group=${group.id}`) : stryMutAct_9fa48("1707") ? "Stryker was here!" : (stryCov_9fa48("1707"), '');
        const teacherPath = get(teacher, stryMutAct_9fa48("1708") ? "" : (stryCov_9fa48("1708"), 'id')) ? stryMutAct_9fa48("1709") ? `` : (stryCov_9fa48("1709"), `&teacher=${teacher.id}`) : stryMutAct_9fa48("1710") ? "Stryker was here!" : (stryCov_9fa48("1710"), '');
        const departmentPath = get(department, stryMutAct_9fa48("1711") ? "" : (stryCov_9fa48("1711"), 'id')) ? stryMutAct_9fa48("1712") ? `` : (stryCov_9fa48("1712"), `&department=${department.id}`) : stryMutAct_9fa48("1713") ? "Stryker was here!" : (stryCov_9fa48("1713"), '');
        const typeOfSchedule = getScheduleType(values);
        scheduleActions[typeOfSchedule](values);
        history.push(stryMutAct_9fa48("1714") ? `` : (stryCov_9fa48("1714"), `${SCHEDULE_FOR_LINK}?semester=${semester.id}${groupPath}${teacherPath}${departmentPath}`));
      }
    };
    const getSchedule = () => {
      if (stryMutAct_9fa48("1715")) {
        {}
      } else {
        stryCov_9fa48("1715");
        const {
          semester,
          group,
          teacher,
          department
        } = getDataFromParams(location);
        if (stryMutAct_9fa48("1718") ? false : stryMutAct_9fa48("1717") ? true : stryMutAct_9fa48("1716") ? semester : (stryCov_9fa48("1716", "1717", "1718"), !semester)) {
          if (stryMutAct_9fa48("1719")) {
            {}
          } else {
            stryCov_9fa48("1719");
            handleSubmit(createSubmitValues(defaultSemester, group, teacher, department));
          }
        } else {
          if (stryMutAct_9fa48("1720")) {
            {}
          } else {
            stryCov_9fa48("1720");
            handleSubmit(createSubmitValues(stryMutAct_9fa48("1721") ? {} : (stryCov_9fa48("1721"), {
              id: Number(semester)
            }), group, teacher, department));
          }
        }
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("1722")) {
        {}
      } else {
        stryCov_9fa48("1722");
        if (stryMutAct_9fa48("1724") ? false : stryMutAct_9fa48("1723") ? true : (stryCov_9fa48("1723", "1724"), defaultSemester.id)) {
          if (stryMutAct_9fa48("1725")) {
            {}
          } else {
            stryCov_9fa48("1725");
            getSchedule();
          }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }
    }, stryMutAct_9fa48("1726") ? [] : (stryCov_9fa48("1726"), [defaultSemester]));
    const getTop = stryMutAct_9fa48("1727") ? () => undefined : (stryCov_9fa48("1727"), (() => {
      const getTop = () => stryMutAct_9fa48("1730") ? scheduleType !== 'archived' || <GroupSchedulePageTop scheduleType={scheduleType} handleSubmit={handleSubmit} /> : stryMutAct_9fa48("1729") ? false : stryMutAct_9fa48("1728") ? true : (stryCov_9fa48("1728", "1729", "1730"), (stryMutAct_9fa48("1732") ? scheduleType === 'archived' : stryMutAct_9fa48("1731") ? true : (stryCov_9fa48("1731", "1732"), scheduleType !== (stryMutAct_9fa48("1733") ? "" : (stryCov_9fa48("1733"), 'archived')))) && <GroupSchedulePageTop scheduleType={scheduleType} handleSubmit={handleSubmit} />);
      return getTop;
    })());
    return <>
            {getTop()}
            {loading ? <section className="centered-container">
                    <CircularProgress />
                </section> : renderSchedule(stryMutAct_9fa48("1734") ? {} : (stryCov_9fa48("1734"), {
        ...props,
        t
      }))}
        </>;
  }
};
export default GroupSchedulePage;