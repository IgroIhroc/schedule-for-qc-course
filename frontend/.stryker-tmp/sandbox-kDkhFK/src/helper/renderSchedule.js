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
import DownloadLink from '../components/DownloadLink/DownloadLink';
import { renderFullSchedule, renderGroupTable, renderWeekTable } from './renderScheduleTable';
import DepartmentSchedule from '../components/DepartmentSchedule/DepartmentSchedule';
import { getGroupScheduleTitle, getTeacherScheduleTitle, getDepartmentScheduleTitle } from '../utils/titlesUtil';
import SchedulePublishBanner from "../components/GroupSchedulePage/SchedulePublishBanner/SchedulePublishBanner";
import DepartmentDownloadLink from '../components/DownloadLink/DepartmentDownloadLink';
const emptySchedule = stryMutAct_9fa48("5696") ? () => undefined : (stryCov_9fa48("5696"), (() => {
  const emptySchedule = t => <p className="empty_schedule">{t(stryMutAct_9fa48("5697") ? "" : (stryCov_9fa48("5697"), 'common:empty_schedule'))}</p>;
  return emptySchedule;
})());
const renderSchedule = props => {
  if (stryMutAct_9fa48("5698")) {
    {}
  } else {
    stryCov_9fa48("5698");
    const {
      scheduleType,
      groupSchedule,
      fullSchedule,
      teacherSchedule,
      groupData,
      teacherData,
      semesterData,
      departmentData,
      notPublished,
      notPublishedMessage,
      isManager,
      t
    } = props;
    if (stryMutAct_9fa48("5700") ? false : stryMutAct_9fa48("5699") ? true : (stryCov_9fa48("5699", "5700"), notPublished)) {
      if (stryMutAct_9fa48("5701")) {
        {}
      } else {
        stryCov_9fa48("5701");
        return <div className="schedule-not-published">
                <h2>{stryMutAct_9fa48("5704") ? notPublishedMessage && t('common:schedule_not_published') : stryMutAct_9fa48("5703") ? false : stryMutAct_9fa48("5702") ? true : (stryCov_9fa48("5702", "5703", "5704"), notPublishedMessage || t(stryMutAct_9fa48("5705") ? "" : (stryCov_9fa48("5705"), 'common:schedule_not_published')))}</h2>
            </div>;
      }
    }
    const titleSuffix = isManager ? <SchedulePublishBanner /> : null;
    switch (scheduleType) {
      case stryMutAct_9fa48("5707") ? "" : (stryCov_9fa48("5707"), 'group'):
        if (stryMutAct_9fa48("5706")) {} else {
          stryCov_9fa48("5706");
          {
            if (stryMutAct_9fa48("5708")) {
              {}
            } else {
              stryCov_9fa48("5708");
              const {
                semester,
                group,
                oddArray,
                evenArray
              } = groupSchedule;
              if (stryMutAct_9fa48("5711") ? isEmpty(oddArray) || isEmpty(evenArray) : stryMutAct_9fa48("5710") ? false : stryMutAct_9fa48("5709") ? true : (stryCov_9fa48("5709", "5710", "5711"), isEmpty(oddArray) && isEmpty(evenArray))) return emptySchedule(t);
              return <>
                    <h1>
                        {getGroupScheduleTitle(semester, group)}
                        <DownloadLink entity="group" semesterId={semesterData.id} entityId={groupData.id} />
                        {titleSuffix}
                    </h1>
                    <h2>
                        <span className={(stryMutAct_9fa48("5714") ? getWeekParity(semester.startDay) % 2 !== 1 : stryMutAct_9fa48("5713") ? false : stryMutAct_9fa48("5712") ? true : (stryCov_9fa48("5712", "5713", "5714"), (stryMutAct_9fa48("5715") ? getWeekParity(semester.startDay) * 2 : (stryCov_9fa48("5715"), getWeekParity(semester.startDay) % 2)) === 1)) ? stryMutAct_9fa48("5716") ? "" : (stryCov_9fa48("5716"), "currentDay") : stryMutAct_9fa48("5717") ? "Stryker was here!" : (stryCov_9fa48("5717"), "")}>
                            {t(stryMutAct_9fa48("5718") ? "" : (stryCov_9fa48("5718"), 'common:odd_week'))}</span>
                    </h2>
                    {renderGroupTable(oddArray, stryMutAct_9fa48("5719") ? false : (stryCov_9fa48("5719"), true), semester)}
                    <h2>
                        <span className={(stryMutAct_9fa48("5722") ? getWeekParity(semester.startDay) % 2 !== 0 : stryMutAct_9fa48("5721") ? false : stryMutAct_9fa48("5720") ? true : (stryCov_9fa48("5720", "5721", "5722"), (stryMutAct_9fa48("5723") ? getWeekParity(semester.startDay) * 2 : (stryCov_9fa48("5723"), getWeekParity(semester.startDay) % 2)) === 0)) ? stryMutAct_9fa48("5724") ? "" : (stryCov_9fa48("5724"), "currentDay") : stryMutAct_9fa48("5725") ? "Stryker was here!" : (stryCov_9fa48("5725"), "")}>
                            {t(stryMutAct_9fa48("5726") ? "" : (stryCov_9fa48("5726"), 'common:even_week'))}</span>
                    </h2>
                    {renderGroupTable(evenArray, stryMutAct_9fa48("5727") ? true : (stryCov_9fa48("5727"), false), semester)}
                </>;
            }
          }
        }
      case stryMutAct_9fa48("5729") ? "" : (stryCov_9fa48("5729"), 'teacher'):
        if (stryMutAct_9fa48("5728")) {} else {
          stryCov_9fa48("5728");
          {
            if (stryMutAct_9fa48("5730")) {
              {}
            } else {
              stryCov_9fa48("5730");
              const {
                semester,
                teacher,
                odd,
                even
              } = teacherSchedule;
              if (stryMutAct_9fa48("5733") ? isEmpty(odd?.classes) || isEmpty(even?.classes) : stryMutAct_9fa48("5732") ? false : stryMutAct_9fa48("5731") ? true : (stryCov_9fa48("5731", "5732", "5733"), isEmpty(stryMutAct_9fa48("5734") ? odd.classes : (stryCov_9fa48("5734"), odd?.classes)) && isEmpty(stryMutAct_9fa48("5735") ? even.classes : (stryCov_9fa48("5735"), even?.classes)))) return emptySchedule(t);
              return <>
                    <h1>
                        {getTeacherScheduleTitle(semester, teacher)}
                        <DownloadLink entity="teacher" semesterId={semesterData.id} entityId={teacherData.id} />
                        {titleSuffix}
                    </h1>
                    <h2>
                        <span className={(stryMutAct_9fa48("5738") ? getWeekParity(semester.startDay) % 2 !== 1 : stryMutAct_9fa48("5737") ? false : stryMutAct_9fa48("5736") ? true : (stryCov_9fa48("5736", "5737", "5738"), (stryMutAct_9fa48("5739") ? getWeekParity(semester.startDay) * 2 : (stryCov_9fa48("5739"), getWeekParity(semester.startDay) % 2)) === 1)) ? stryMutAct_9fa48("5740") ? "" : (stryCov_9fa48("5740"), "currentDay") : stryMutAct_9fa48("5741") ? "Stryker was here!" : (stryCov_9fa48("5741"), "")}>
                            {t(stryMutAct_9fa48("5742") ? "" : (stryCov_9fa48("5742"), 'common:odd_week'))}</span>
                    </h2>
                    {renderWeekTable(odd)}
                    <h2>
                        <span className={(stryMutAct_9fa48("5745") ? getWeekParity(semester.startDay) % 2 !== 0 : stryMutAct_9fa48("5744") ? false : stryMutAct_9fa48("5743") ? true : (stryCov_9fa48("5743", "5744", "5745"), (stryMutAct_9fa48("5746") ? getWeekParity(semester.startDay) * 2 : (stryCov_9fa48("5746"), getWeekParity(semester.startDay) % 2)) === 0)) ? stryMutAct_9fa48("5747") ? "" : (stryCov_9fa48("5747"), "currentDay") : stryMutAct_9fa48("5748") ? "Stryker was here!" : (stryCov_9fa48("5748"), "")}>
                            {t(stryMutAct_9fa48("5749") ? "" : (stryCov_9fa48("5749"), 'common:even_week'))}</span>
                    </h2>
                    {renderWeekTable(even)}
                </>;
            }
          }
        }
      case stryMutAct_9fa48("5751") ? "" : (stryCov_9fa48("5751"), 'department'):
        if (stryMutAct_9fa48("5750")) {} else {
          stryCov_9fa48("5750");
          {
            if (stryMutAct_9fa48("5752")) {
              {}
            } else {
              stryCov_9fa48("5752");
              const {
                resultArray,
                semester
              } = fullSchedule;
              if (stryMutAct_9fa48("5754") ? false : stryMutAct_9fa48("5753") ? true : (stryCov_9fa48("5753", "5754"), isEmpty(resultArray))) return emptySchedule(t);
              return <>
                    <h1>
                        {getDepartmentScheduleTitle(semester, departmentData)}
                        <DepartmentDownloadLink departmentName={stryMutAct_9fa48("5755") ? departmentData.name : (stryCov_9fa48("5755"), departmentData?.name)} semesterDescription={stryMutAct_9fa48("5756") ? semester.description : (stryCov_9fa48("5756"), semester?.description)} semesterStartDay={stryMutAct_9fa48("5757") ? semester.startDay : (stryCov_9fa48("5757"), semester?.startDay)} semesterEndDay={stryMutAct_9fa48("5758") ? semester.endDay : (stryCov_9fa48("5758"), semester?.endDay)} />
                    </h1>
                    {stryMutAct_9fa48("5761") ? isManager || <div className="schedule-publish-banner-right">
                            <SchedulePublishBanner />
                        </div> : stryMutAct_9fa48("5760") ? false : stryMutAct_9fa48("5759") ? true : (stryCov_9fa48("5759", "5760", "5761"), isManager && <div className="schedule-publish-banner-right">
                            <SchedulePublishBanner />
                        </div>)}
                    <DepartmentSchedule fullSchedule={fullSchedule} departmentId={stryMutAct_9fa48("5762") ? departmentData.id : (stryCov_9fa48("5762"), departmentData?.id)} />
                </>;
            }
          }
        }
      case stryMutAct_9fa48("5764") ? "" : (stryCov_9fa48("5764"), 'full'):
        if (stryMutAct_9fa48("5763")) {} else {
          stryCov_9fa48("5763");
          {
            if (stryMutAct_9fa48("5765")) {
              {}
            } else {
              stryCov_9fa48("5765");
              const {
                resultArray
              } = fullSchedule;
              if (stryMutAct_9fa48("5767") ? false : stryMutAct_9fa48("5766") ? true : (stryCov_9fa48("5766", "5767"), isEmpty(resultArray))) {
                if (stryMutAct_9fa48("5768")) {
                  {}
                } else {
                  stryCov_9fa48("5768");
                  return emptySchedule(t);
                }
              }
              return <>
                    {/*{titleSuffix}*/}
                    {stryMutAct_9fa48("5771") ? isManager || <div className="schedule-publish-banner-right">
                            <SchedulePublishBanner />
                        </div> : stryMutAct_9fa48("5770") ? false : stryMutAct_9fa48("5769") ? true : (stryCov_9fa48("5769", "5770", "5771"), isManager && <div className="schedule-publish-banner-right">
                            <SchedulePublishBanner />
                        </div>)}
                    {renderFullSchedule(fullSchedule)}
                </>;
            }
          }
        }
      default:
        if (stryMutAct_9fa48("5772")) {} else {
          stryCov_9fa48("5772");
          return null;
        }
    }
  }
};
const getWeekParity = (startDate, currentDate = new Date()) => {
  if (stryMutAct_9fa48("5773")) {
    {}
  } else {
    stryCov_9fa48("5773");
    const semesterStart = startDate instanceof Date ? startDate : new Date(transformSemesterDate(startDate));
    const targetDate = currentDate instanceof Date ? currentDate : new Date(transformSemesterDate(currentDate));
    stryMutAct_9fa48("5774") ? semesterStart.setMinutes(0, 0, 0, 0) : (stryCov_9fa48("5774"), semesterStart.setHours(0, 0, 0, 0));
    stryMutAct_9fa48("5775") ? targetDate.setMinutes(0, 0, 0, 0) : (stryCov_9fa48("5775"), targetDate.setHours(0, 0, 0, 0));
    if (stryMutAct_9fa48("5779") ? targetDate >= semesterStart : stryMutAct_9fa48("5778") ? targetDate <= semesterStart : stryMutAct_9fa48("5777") ? false : stryMutAct_9fa48("5776") ? true : (stryCov_9fa48("5776", "5777", "5778", "5779"), targetDate < semesterStart)) return 0;

    // Get the day of the week for the semester start (0 = Sunday, 6 = Saturday)
    const startDay = semesterStart.getDay();

    // Find the first week boundary after semester start
    const firstWeekBoundary = new Date(semesterStart);
    if (stryMutAct_9fa48("5782") ? startDay !== 0 : stryMutAct_9fa48("5781") ? false : stryMutAct_9fa48("5780") ? true : (stryCov_9fa48("5780", "5781", "5782"), startDay === 0)) {
      if (stryMutAct_9fa48("5783")) {
        {}
      } else {
        stryCov_9fa48("5783");
        stryMutAct_9fa48("5784") ? firstWeekBoundary.setTime(semesterStart.getDate() + 7) : (stryCov_9fa48("5784"), firstWeekBoundary.setDate(stryMutAct_9fa48("5785") ? semesterStart.getDate() - 7 : (stryCov_9fa48("5785"), semesterStart.getDate() + 7)));
      }
    } else {
      if (stryMutAct_9fa48("5786")) {
        {}
      } else {
        stryCov_9fa48("5786");
        stryMutAct_9fa48("5787") ? firstWeekBoundary.setTime(semesterStart.getDate() + (7 - startDay)) : (stryCov_9fa48("5787"), firstWeekBoundary.setDate(stryMutAct_9fa48("5788") ? semesterStart.getDate() - (7 - startDay) : (stryCov_9fa48("5788"), semesterStart.getDate() + (stryMutAct_9fa48("5789") ? 7 + startDay : (stryCov_9fa48("5789"), 7 - startDay)))));
      }
    }
    if (stryMutAct_9fa48("5793") ? targetDate >= firstWeekBoundary : stryMutAct_9fa48("5792") ? targetDate <= firstWeekBoundary : stryMutAct_9fa48("5791") ? false : stryMutAct_9fa48("5790") ? true : (stryCov_9fa48("5790", "5791", "5792", "5793"), targetDate < firstWeekBoundary)) return 1;
    const diffTime = stryMutAct_9fa48("5794") ? targetDate + firstWeekBoundary : (stryCov_9fa48("5794"), targetDate - firstWeekBoundary);
    const diffDays = Math.floor(stryMutAct_9fa48("5795") ? diffTime * (1000 * 60 * 60 * 24) : (stryCov_9fa48("5795"), diffTime / (stryMutAct_9fa48("5796") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("5796"), (stryMutAct_9fa48("5797") ? 1000 * 60 / 60 : (stryCov_9fa48("5797"), (stryMutAct_9fa48("5798") ? 1000 / 60 : (stryCov_9fa48("5798"), 1000 * 60)) * 60)) * 24))));
    const additionalWeeks = stryMutAct_9fa48("5799") ? Math.floor(diffDays / 7) - 1 : (stryCov_9fa48("5799"), Math.floor(stryMutAct_9fa48("5800") ? diffDays * 7 : (stryCov_9fa48("5800"), diffDays / 7)) + 1);
    return stryMutAct_9fa48("5801") ? additionalWeeks - 1 : (stryCov_9fa48("5801"), additionalWeeks + 1);
  }
};
const transformSemesterDate = date => {
  if (stryMutAct_9fa48("5802")) {
    {}
  } else {
    stryCov_9fa48("5802");
    const [day, month, year] = date.split(stryMutAct_9fa48("5803") ? "" : (stryCov_9fa48("5803"), '/'));
    const endDateString = stryMutAct_9fa48("5804") ? `` : (stryCov_9fa48("5804"), `${month}/${day}/${year}`);
    return new Date(endDateString);
  }
};
export { renderSchedule };