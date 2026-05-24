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
import { isEqual, isNil } from 'lodash';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Card from '../share/Card/Card';
import i18n from '../i18n';
import { daysUppercase } from '../constants/schedule/days';
import './renderScheduleTable.scss';
import { FORM_GROUP_LABEL, GROUP_Y_LABEL } from '../constants/translationLabels/formElements';
import { EMPTY_SCHEDULE } from '../constants/translationLabels/common';
import LessonTemporaryCardCell from '../containers/GroupSchedulePage/LessonTemporaryCardCell';
import TeacherTemporaryCardCell from '../containers/GroupSchedulePage/TeacherTemporaryCardCell';
const shortid = require('shortid');
const transformSemesterDate = date => {
  if (stryMutAct_9fa48("5805")) {
    {}
  } else {
    stryCov_9fa48("5805");
    const [day, month, year] = date.split(stryMutAct_9fa48("5806") ? "" : (stryCov_9fa48("5806"), '/'));
    const endDateString = stryMutAct_9fa48("5807") ? `` : (stryCov_9fa48("5807"), `${month}/${day}/${year}`);
    return new Date(endDateString);
  }
};
export const checkSemesterEnd = semesterEndDate => {
  if (stryMutAct_9fa48("5808")) {
    {}
  } else {
    stryCov_9fa48("5808");
    const today = new Date();
    const endDate = transformSemesterDate(semesterEndDate);
    return stryMutAct_9fa48("5812") ? today - endDate <= 0 : stryMutAct_9fa48("5811") ? today - endDate >= 0 : stryMutAct_9fa48("5810") ? false : stryMutAct_9fa48("5809") ? true : (stryCov_9fa48("5809", "5810", "5811", "5812"), (stryMutAct_9fa48("5813") ? today + endDate : (stryCov_9fa48("5813"), today - endDate)) > 0);
  }
};
export const matchDayNumberSysytemToDayName = () => {
  if (stryMutAct_9fa48("5814")) {
    {}
  } else {
    stryCov_9fa48("5814");
    const now = new Date();
    return daysUppercase[stryMutAct_9fa48("5815") ? now.getDay() + 1 : (stryCov_9fa48("5815"), now.getDay() - 1)];
  }
};

// const getWeekNumber = (startScheduleDate, date) => {
//     const startDay = transformSemesterDate(startScheduleDate);
//
//     const numberOfDays = Math.floor((date - startDay) / numberOfMilisecondsInADay);
//     return Math.ceil((date.getDay() + 1 + numberOfDays) / numberOfDaysInAWeek);
// };

export const getWeekParity = (startDate, currentDate = new Date()) => {
  if (stryMutAct_9fa48("5816")) {
    {}
  } else {
    stryCov_9fa48("5816");
    const semesterStart = startDate instanceof Date ? startDate : new Date(transformSemesterDate(startDate));
    const targetDate = currentDate instanceof Date ? currentDate : new Date(transformSemesterDate(currentDate));
    stryMutAct_9fa48("5817") ? semesterStart.setMinutes(0, 0, 0, 0) : (stryCov_9fa48("5817"), semesterStart.setHours(0, 0, 0, 0));
    stryMutAct_9fa48("5818") ? targetDate.setMinutes(0, 0, 0, 0) : (stryCov_9fa48("5818"), targetDate.setHours(0, 0, 0, 0));
    if (stryMutAct_9fa48("5822") ? targetDate >= semesterStart : stryMutAct_9fa48("5821") ? targetDate <= semesterStart : stryMutAct_9fa48("5820") ? false : stryMutAct_9fa48("5819") ? true : (stryCov_9fa48("5819", "5820", "5821", "5822"), targetDate < semesterStart)) return 0;

    // Get the day of the week for the semester start (0 = Sunday, 6 = Saturday)
    const startDay = semesterStart.getDay();

    // Find the first week boundary after semester start
    const firstWeekBoundary = new Date(semesterStart);
    if (stryMutAct_9fa48("5825") ? startDay !== 0 : stryMutAct_9fa48("5824") ? false : stryMutAct_9fa48("5823") ? true : (stryCov_9fa48("5823", "5824", "5825"), startDay === 0)) {
      if (stryMutAct_9fa48("5826")) {
        {}
      } else {
        stryCov_9fa48("5826");
        stryMutAct_9fa48("5827") ? firstWeekBoundary.setTime(semesterStart.getDate() + 7) : (stryCov_9fa48("5827"), firstWeekBoundary.setDate(stryMutAct_9fa48("5828") ? semesterStart.getDate() - 7 : (stryCov_9fa48("5828"), semesterStart.getDate() + 7)));
      }
    } else {
      if (stryMutAct_9fa48("5829")) {
        {}
      } else {
        stryCov_9fa48("5829");
        stryMutAct_9fa48("5830") ? firstWeekBoundary.setTime(semesterStart.getDate() + (7 - startDay)) : (stryCov_9fa48("5830"), firstWeekBoundary.setDate(stryMutAct_9fa48("5831") ? semesterStart.getDate() - (7 - startDay) : (stryCov_9fa48("5831"), semesterStart.getDate() + (stryMutAct_9fa48("5832") ? 7 + startDay : (stryCov_9fa48("5832"), 7 - startDay)))));
      }
    }
    if (stryMutAct_9fa48("5836") ? targetDate >= firstWeekBoundary : stryMutAct_9fa48("5835") ? targetDate <= firstWeekBoundary : stryMutAct_9fa48("5834") ? false : stryMutAct_9fa48("5833") ? true : (stryCov_9fa48("5833", "5834", "5835", "5836"), targetDate < firstWeekBoundary)) return 1;
    const diffTime = stryMutAct_9fa48("5837") ? targetDate + firstWeekBoundary : (stryCov_9fa48("5837"), targetDate - firstWeekBoundary);
    const diffDays = Math.floor(stryMutAct_9fa48("5838") ? diffTime * (1000 * 60 * 60 * 24) : (stryCov_9fa48("5838"), diffTime / (stryMutAct_9fa48("5839") ? 1000 * 60 * 60 / 24 : (stryCov_9fa48("5839"), (stryMutAct_9fa48("5840") ? 1000 * 60 / 60 : (stryCov_9fa48("5840"), (stryMutAct_9fa48("5841") ? 1000 / 60 : (stryCov_9fa48("5841"), 1000 * 60)) * 60)) * 24))));
    const additionalWeeks = stryMutAct_9fa48("5842") ? Math.floor(diffDays / 7) - 1 : (stryCov_9fa48("5842"), Math.floor(stryMutAct_9fa48("5843") ? diffDays * 7 : (stryCov_9fa48("5843"), diffDays / 7)) + 1);
    return stryMutAct_9fa48("5844") ? additionalWeeks - 1 : (stryCov_9fa48("5844"), additionalWeeks + 1);
  }
};
const printWeekNumber = startScheduleDate => {
  if (stryMutAct_9fa48("5845")) {
    {}
  } else {
    stryCov_9fa48("5845");
    const date = new Date();
    return getWeekParity(startScheduleDate, date);
  }
};
export function isWeekOdd(num) {
  if (stryMutAct_9fa48("5846")) {
    {}
  } else {
    stryCov_9fa48("5846");
    return stryMutAct_9fa48("5849") ? num % 2 !== 1 : stryMutAct_9fa48("5848") ? false : stryMutAct_9fa48("5847") ? true : (stryCov_9fa48("5847", "5848", "5849"), (stryMutAct_9fa48("5850") ? num * 2 : (stryCov_9fa48("5850"), num % 2)) === 1);
  }
}
const renderClassCell = classItem => {
  if (stryMutAct_9fa48("5851")) {
    {}
  } else {
    stryCov_9fa48("5851");
    return stryMutAct_9fa48("5852") ? `` : (stryCov_9fa48("5852"), `${classItem.class_name}\n\r\n\r${classItem.startTime} - ${classItem.endTime}`);
  }
};
export const renderGroupDayClass = (classDay, isOddWeek, semesterDays, currentWeekType, currentDay) => {
  if (stryMutAct_9fa48("5853")) {
    {}
  } else {
    stryCov_9fa48("5853");
    return <TableRow key={shortid.generate()}>
            <TableCell className=" lesson groupLabelCell">
                {renderClassCell(classDay.class)}
            </TableCell>
            {classDay.lessons.map(({
        day,
        card
      }) => {
        if (stryMutAct_9fa48("5854")) {
          {}
        } else {
          stryCov_9fa48("5854");
          let className = stryMutAct_9fa48("5855") ? "" : (stryCov_9fa48("5855"), 'lesson ');
          if (stryMutAct_9fa48("5858") ? currentDay === day || currentWeekType === isOddWeek : stryMutAct_9fa48("5857") ? false : stryMutAct_9fa48("5856") ? true : (stryCov_9fa48("5856", "5857", "5858"), (stryMutAct_9fa48("5860") ? currentDay !== day : stryMutAct_9fa48("5859") ? true : (stryCov_9fa48("5859", "5860"), currentDay === day)) && (stryMutAct_9fa48("5862") ? currentWeekType !== isOddWeek : stryMutAct_9fa48("5861") ? true : (stryCov_9fa48("5861", "5862"), currentWeekType === isOddWeek)))) {
            if (stryMutAct_9fa48("5863")) {
              {}
            } else {
              stryCov_9fa48("5863");
              className += stryMutAct_9fa48("5864") ? "" : (stryCov_9fa48("5864"), ' currentDay');
            }
          }
          return stryMutAct_9fa48("5867") ? semesterDays.includes(day) || <TableCell key={shortid.generate()} className={className}>
                            <LessonTemporaryCardCell card={card} day={day} />
                        </TableCell> : stryMutAct_9fa48("5866") ? false : stryMutAct_9fa48("5865") ? true : (stryCov_9fa48("5865", "5866", "5867"), semesterDays.includes(day) && <TableCell key={shortid.generate()} className={className}>
                            <LessonTemporaryCardCell card={card} day={day} />
                        </TableCell>);
        }
      })}
        </TableRow>;
  }
};
export const renderScheduleGroupHeader = stryMutAct_9fa48("5868") ? () => undefined : (stryCov_9fa48("5868"), (() => {
  const renderScheduleGroupHeader = days => <TableHead>
        <TableRow>
            <TableCell className="groupLabelCell"></TableCell>
            {days.map(stryMutAct_9fa48("5869") ? () => undefined : (stryCov_9fa48("5869"), day => <TableCell key={shortid.generate()}>{i18n.t(stryMutAct_9fa48("5870") ? `` : (stryCov_9fa48("5870"), `day_of_week_${day}`))}</TableCell>))}
        </TableRow>
    </TableHead>;
  return renderScheduleGroupHeader;
})());
export const renderGroupTable = (classes, isOdd, semester) => {
  if (stryMutAct_9fa48("5871")) {
    {}
  } else {
    stryCov_9fa48("5871");
    const currentWeekType = isWeekOdd(printWeekNumber(semester.startDay));
    const currentDay = checkSemesterEnd(semester.endDay) ? stryMutAct_9fa48("5872") ? "Stryker was here!" : (stryCov_9fa48("5872"), '') : matchDayNumberSysytemToDayName();
    return <TableContainer>
            <Table aria-label="sticky table">
                {stryMutAct_9fa48("5875") ? semester || renderScheduleGroupHeader(semester.semester_days) : stryMutAct_9fa48("5874") ? false : stryMutAct_9fa48("5873") ? true : (stryCov_9fa48("5873", "5874", "5875"), semester && renderScheduleGroupHeader(semester.semester_days))}
                <TableBody>
                    {classes.map(classDay => {
            if (stryMutAct_9fa48("5876")) {
              {}
            } else {
              stryCov_9fa48("5876");
              if (stryMutAct_9fa48("5878") ? false : stryMutAct_9fa48("5877") ? true : (stryCov_9fa48("5877", "5878"), classDay)) {
                if (stryMutAct_9fa48("5879")) {
                  {}
                } else {
                  stryCov_9fa48("5879");
                  return renderGroupDayClass(classDay, isOdd, semester.semester_days, currentWeekType, currentDay);
                }
              }
              return null;
            }
          })}
                </TableBody>
            </Table>
        </TableContainer>;
  }
};
export const renderGroupCells = (groups, isOdd, weekType, isCurrentDay, dayName) => {
  if (stryMutAct_9fa48("5880")) {
    {}
  } else {
    stryCov_9fa48("5880");
    const prepareGroups = groupsArray => {
      if (stryMutAct_9fa48("5881")) {
        {}
      } else {
        stryCov_9fa48("5881");
        // TODO map => reduce
        return groupsArray.map((group, groupIndex) => {
          if (stryMutAct_9fa48("5882")) {
            {}
          } else {
            stryCov_9fa48("5882");
            const {
              card
            } = group;
            let colspan = 1;
            let rowspan = 1;
            let classname = stryMutAct_9fa48("5883") ? "" : (stryCov_9fa48("5883"), 'lesson');
            if (stryMutAct_9fa48("5886") ? weekType === isOdd || isCurrentDay : stryMutAct_9fa48("5885") ? false : stryMutAct_9fa48("5884") ? true : (stryCov_9fa48("5884", "5885", "5886"), (stryMutAct_9fa48("5888") ? weekType !== isOdd : stryMutAct_9fa48("5887") ? true : (stryCov_9fa48("5887", "5888"), weekType === isOdd)) && isCurrentDay)) {
              if (stryMutAct_9fa48("5889")) {
                {}
              } else {
                stryCov_9fa48("5889");
                classname += stryMutAct_9fa48("5890") ? "" : (stryCov_9fa48("5890"), ' currentDay');
              }
            }
            if (stryMutAct_9fa48("5893") ? card !== null || card.skip_render === 1 : stryMutAct_9fa48("5892") ? false : stryMutAct_9fa48("5891") ? true : (stryCov_9fa48("5891", "5892", "5893"), (stryMutAct_9fa48("5895") ? card === null : stryMutAct_9fa48("5894") ? true : (stryCov_9fa48("5894", "5895"), card !== null)) && (stryMutAct_9fa48("5897") ? card.skip_render !== 1 : stryMutAct_9fa48("5896") ? true : (stryCov_9fa48("5896", "5897"), card.skip_render === 1)))) {
              if (stryMutAct_9fa48("5898")) {
                {}
              } else {
                stryCov_9fa48("5898");
                return null;
              }
            }
            if (stryMutAct_9fa48("5901") ? card !== null || card.weekly_render === 1 : stryMutAct_9fa48("5900") ? false : stryMutAct_9fa48("5899") ? true : (stryCov_9fa48("5899", "5900", "5901"), (stryMutAct_9fa48("5903") ? card === null : stryMutAct_9fa48("5902") ? true : (stryCov_9fa48("5902", "5903"), card !== null)) && (stryMutAct_9fa48("5905") ? card.weekly_render !== 1 : stryMutAct_9fa48("5904") ? true : (stryCov_9fa48("5904", "5905"), card.weekly_render === 1)))) {
              if (stryMutAct_9fa48("5906")) {
                {}
              } else {
                stryCov_9fa48("5906");
                rowspan = 2;
                classname += stryMutAct_9fa48("5907") ? "" : (stryCov_9fa48("5907"), ' weekly');
              }
            }
            for (let i = stryMutAct_9fa48("5908") ? groupIndex - 1 : (stryCov_9fa48("5908"), groupIndex + 1); stryMutAct_9fa48("5911") ? i >= groups.length : stryMutAct_9fa48("5910") ? i <= groups.length : stryMutAct_9fa48("5909") ? false : (stryCov_9fa48("5909", "5910", "5911"), i < groups.length); stryMutAct_9fa48("5912") ? i -= 1 : (stryCov_9fa48("5912"), i += 1)) {
              if (stryMutAct_9fa48("5913")) {
                {}
              } else {
                stryCov_9fa48("5913");
                const {
                  card: tempCard
                } = groups[i];
                if (stryMutAct_9fa48("5916") ? group && card !== null && groups[i] && tempCard !== null || isEqual(card, tempCard) : stryMutAct_9fa48("5915") ? false : stryMutAct_9fa48("5914") ? true : (stryCov_9fa48("5914", "5915", "5916"), (stryMutAct_9fa48("5918") ? group && card !== null && groups[i] || tempCard !== null : stryMutAct_9fa48("5917") ? true : (stryCov_9fa48("5917", "5918"), (stryMutAct_9fa48("5920") ? group && card !== null || groups[i] : stryMutAct_9fa48("5919") ? true : (stryCov_9fa48("5919", "5920"), (stryMutAct_9fa48("5922") ? group || card !== null : stryMutAct_9fa48("5921") ? true : (stryCov_9fa48("5921", "5922"), group && (stryMutAct_9fa48("5924") ? card === null : stryMutAct_9fa48("5923") ? true : (stryCov_9fa48("5923", "5924"), card !== null)))) && groups[i])) && (stryMutAct_9fa48("5926") ? tempCard === null : stryMutAct_9fa48("5925") ? true : (stryCov_9fa48("5925", "5926"), tempCard !== null)))) && isEqual(card, tempCard))) {
                  if (stryMutAct_9fa48("5927")) {
                    {}
                  } else {
                    stryCov_9fa48("5927");
                    tempCard.skip_render = 1;
                    stryMutAct_9fa48("5928") ? colspan -= 1 : (stryCov_9fa48("5928"), colspan += 1);
                    classname += stryMutAct_9fa48("5929") ? "" : (stryCov_9fa48("5929"), ' grouped');
                  }
                } else {
                  if (stryMutAct_9fa48("5930")) {
                    {}
                  } else {
                    stryCov_9fa48("5930");
                    break;
                  }
                }
              }
            }
            return stryMutAct_9fa48("5931") ? {} : (stryCov_9fa48("5931"), {
              card,
              classname,
              rowspan,
              colspan
            });
          }
        });
      }
    };
    const resultGroups = prepareGroups(groups);
    return resultGroups.map(group => {
      if (stryMutAct_9fa48("5932")) {
        {}
      } else {
        stryCov_9fa48("5932");
        if (stryMutAct_9fa48("5935") ? false : stryMutAct_9fa48("5934") ? true : stryMutAct_9fa48("5933") ? group : (stryCov_9fa48("5933", "5934", "5935"), !group)) return null;
        const {
          card,
          colspan,
          rowspan,
          classname
        } = group;
        return <TableCell key={shortid.generate()} colSpan={colspan} rowSpan={rowspan} className={classname}>
                <LessonTemporaryCardCell card={card} day={dayName} />
            </TableCell>;
      }
    });
  }
};
export const renderScheduleHeader = stryMutAct_9fa48("5936") ? () => undefined : (stryCov_9fa48("5936"), (() => {
  const renderScheduleHeader = groups => <TableHead>
        <TableRow>
            <TableCell className="groupLabelCell" colSpan={3}>
                {i18n.t(GROUP_Y_LABEL)}
            </TableCell>
            {groups.map(stryMutAct_9fa48("5937") ? () => undefined : (stryCov_9fa48("5937"), group => <TableCell key={shortid.generate()}>{group}</TableCell>))}
        </TableRow>
    </TableHead>;
  return renderScheduleHeader;
})());
export const renderFirstDayFirstClassFirstCardLine = (dayName, classItem, groups, classesCount, currentWeekType, currentDay) => {
  if (stryMutAct_9fa48("5938")) {
    {}
  } else {
    stryCov_9fa48("5938");
    let dayClassName = stryMutAct_9fa48("5939") ? "" : (stryCov_9fa48("5939"), 'dayNameCell ');
    const classClassName = stryMutAct_9fa48("5940") ? "" : (stryCov_9fa48("5940"), 'classNameCell ');
    const isCurrentDay = stryMutAct_9fa48("5943") ? dayName !== currentDay : stryMutAct_9fa48("5942") ? false : stryMutAct_9fa48("5941") ? true : (stryCov_9fa48("5941", "5942", "5943"), dayName === currentDay);
    let oddWeekClass = stryMutAct_9fa48("5944") ? "Stryker was here!" : (stryCov_9fa48("5944"), '');
    let evenWeekClass = stryMutAct_9fa48("5945") ? "Stryker was here!" : (stryCov_9fa48("5945"), '');
    if (stryMutAct_9fa48("5947") ? false : stryMutAct_9fa48("5946") ? true : (stryCov_9fa48("5946", "5947"), isCurrentDay)) {
      if (stryMutAct_9fa48("5948")) {
        {}
      } else {
        stryCov_9fa48("5948");
        dayClassName += stryMutAct_9fa48("5949") ? "" : (stryCov_9fa48("5949"), ' currentDay');
        if (stryMutAct_9fa48("5951") ? false : stryMutAct_9fa48("5950") ? true : (stryCov_9fa48("5950", "5951"), currentWeekType)) {
          if (stryMutAct_9fa48("5952")) {
            {}
          } else {
            stryCov_9fa48("5952");
            oddWeekClass = stryMutAct_9fa48("5953") ? "" : (stryCov_9fa48("5953"), ' currentDay');
          }
        } else {
          if (stryMutAct_9fa48("5954")) {
            {}
          } else {
            stryCov_9fa48("5954");
            evenWeekClass = stryMutAct_9fa48("5955") ? "" : (stryCov_9fa48("5955"), ' currentDay');
          }
        }
      }
    }
    if (stryMutAct_9fa48("5958") ? groups.even.length <= 2 && groups.odd.length <= 2 : stryMutAct_9fa48("5957") ? false : stryMutAct_9fa48("5956") ? true : (stryCov_9fa48("5956", "5957", "5958"), (stryMutAct_9fa48("5961") ? groups.even.length > 2 : stryMutAct_9fa48("5960") ? groups.even.length < 2 : stryMutAct_9fa48("5959") ? false : (stryCov_9fa48("5959", "5960", "5961"), groups.even.length <= 2)) || (stryMutAct_9fa48("5964") ? groups.odd.length > 2 : stryMutAct_9fa48("5963") ? groups.odd.length < 2 : stryMutAct_9fa48("5962") ? false : (stryCov_9fa48("5962", "5963", "5964"), groups.odd.length <= 2)))) {
      if (stryMutAct_9fa48("5965")) {
        {}
      } else {
        stryCov_9fa48("5965");
        dayClassName += stryMutAct_9fa48("5966") ? "" : (stryCov_9fa48("5966"), ' minHeightDouble');
      }
    }
    return <React.Fragment key={shortid.generate()}>
            <TableRow>
                <TableCell rowSpan={stryMutAct_9fa48("5967") ? classesCount / 2 : (stryCov_9fa48("5967"), classesCount * 2)} className={dayClassName}>
                    <span className="dayName">
                        <b>{i18n.t(stryMutAct_9fa48("5968") ? `` : (stryCov_9fa48("5968"), `common:day_of_week_${dayName}`))}</b>
                    </span>
                </TableCell>
                <TableCell className={classClassName} rowSpan={2}>
                    {renderClassCell(classItem)}
                </TableCell>
                <TableCell className={stryMutAct_9fa48("5969") ? `` : (stryCov_9fa48("5969"), `${stryMutAct_9fa48("5970") ? classClassName - oddWeekClass : (stryCov_9fa48("5970"), classClassName + oddWeekClass)} subClassName`)}>1</TableCell>
                {renderGroupCells(groups.odd, stryMutAct_9fa48("5971") ? false : (stryCov_9fa48("5971"), true), currentWeekType, isCurrentDay, dayName)}
            </TableRow>
            <TableRow>
                <TableCell className={stryMutAct_9fa48("5972") ? `` : (stryCov_9fa48("5972"), `${stryMutAct_9fa48("5973") ? classClassName - evenWeekClass : (stryCov_9fa48("5973"), classClassName + evenWeekClass)} subClassName`)}>
                    2
                </TableCell>
                {renderGroupCells(groups.even, stryMutAct_9fa48("5974") ? true : (stryCov_9fa48("5974"), false), currentWeekType, isCurrentDay, dayName)}
            </TableRow>
        </React.Fragment>;
  }
};
export const renderFirstDayOtherClassFirstCardLine = (dayName, classItem, groups, currentWeekType, currentDay) => {
  if (stryMutAct_9fa48("5975")) {
    {}
  } else {
    stryCov_9fa48("5975");
    const classClassName = stryMutAct_9fa48("5976") ? "" : (stryCov_9fa48("5976"), 'classNameCell ');
    const isCurrentDay = stryMutAct_9fa48("5979") ? dayName !== currentDay : stryMutAct_9fa48("5978") ? false : stryMutAct_9fa48("5977") ? true : (stryCov_9fa48("5977", "5978", "5979"), dayName === currentDay);
    let oddWeekClass = stryMutAct_9fa48("5980") ? "Stryker was here!" : (stryCov_9fa48("5980"), '');
    let evenWeekClass = stryMutAct_9fa48("5981") ? "Stryker was here!" : (stryCov_9fa48("5981"), '');
    if (stryMutAct_9fa48("5983") ? false : stryMutAct_9fa48("5982") ? true : (stryCov_9fa48("5982", "5983"), isCurrentDay)) {
      if (stryMutAct_9fa48("5984")) {
        {}
      } else {
        stryCov_9fa48("5984");
        if (stryMutAct_9fa48("5986") ? false : stryMutAct_9fa48("5985") ? true : (stryCov_9fa48("5985", "5986"), currentWeekType)) {
          if (stryMutAct_9fa48("5987")) {
            {}
          } else {
            stryCov_9fa48("5987");
            oddWeekClass = stryMutAct_9fa48("5988") ? "" : (stryCov_9fa48("5988"), ' currentDay');
          }
        } else {
          if (stryMutAct_9fa48("5989")) {
            {}
          } else {
            stryCov_9fa48("5989");
            evenWeekClass = stryMutAct_9fa48("5990") ? "" : (stryCov_9fa48("5990"), ' currentDay');
          }
        }
      }
    }
    return <React.Fragment key={shortid.generate()}>
            <TableRow>
                <TableCell className={classClassName} rowSpan={2}>
                    {renderClassCell(classItem)}
                </TableCell>
                <TableCell className={stryMutAct_9fa48("5991") ? `` : (stryCov_9fa48("5991"), `${stryMutAct_9fa48("5992") ? classClassName - oddWeekClass : (stryCov_9fa48("5992"), classClassName + oddWeekClass)} subClassName`)}>1</TableCell>
                {renderGroupCells(groups.odd, stryMutAct_9fa48("5993") ? false : (stryCov_9fa48("5993"), true), currentWeekType, isCurrentDay, dayName)}
            </TableRow>
            <TableRow>
                <TableCell className={stryMutAct_9fa48("5994") ? `` : (stryCov_9fa48("5994"), `${stryMutAct_9fa48("5995") ? classClassName - evenWeekClass : (stryCov_9fa48("5995"), classClassName + evenWeekClass)} subClassName`)}>
                    2
                </TableCell>
                {renderGroupCells(groups.even, stryMutAct_9fa48("5996") ? true : (stryCov_9fa48("5996"), false), currentWeekType, isCurrentDay, dayName)}
            </TableRow>
        </React.Fragment>;
  }
};
export const renderDay = (dayName, dayItem, semesterClassesCount, currentWeekType, currentDay) => {
  if (stryMutAct_9fa48("5997")) {
    {}
  } else {
    stryCov_9fa48("5997");
    return dayItem.map((classItem, classIndex) => {
      if (stryMutAct_9fa48("5998")) {
        {}
      } else {
        stryCov_9fa48("5998");
        if (stryMutAct_9fa48("6001") ? classIndex !== 0 : stryMutAct_9fa48("6000") ? false : stryMutAct_9fa48("5999") ? true : (stryCov_9fa48("5999", "6000", "6001"), classIndex === 0)) {
          if (stryMutAct_9fa48("6002")) {
            {}
          } else {
            stryCov_9fa48("6002");
            return renderFirstDayFirstClassFirstCardLine(dayName, classItem.class, classItem.cards, semesterClassesCount, currentWeekType, currentDay);
          }
        }
        return renderFirstDayOtherClassFirstCardLine(dayName, classItem.class, classItem.cards, currentWeekType, currentDay);
      }
    });
  }
};
export const renderScheduleFullHeader = stryMutAct_9fa48("6003") ? () => undefined : (stryCov_9fa48("6003"), (() => {
  const renderScheduleFullHeader = groupList => <TableHead>
        <TableRow>
            <TableCell colSpan={3}>{i18n.t(FORM_GROUP_LABEL)}</TableCell>
            {groupList.map(stryMutAct_9fa48("6004") ? () => undefined : (stryCov_9fa48("6004"), ({
        title
      }) => <TableCell key={shortid.generate()} className="groupLabelCell">
                    {title}
                </TableCell>))}
        </TableRow>
    </TableHead>;
  return renderScheduleFullHeader;
})());
const renderScheduleDays = (resultArray, semesterClasses, currentWeekType, currentDay) => {
  if (stryMutAct_9fa48("6005")) {
    {}
  } else {
    stryCov_9fa48("6005");
    return resultArray.map(({
      day,
      classes
    }) => {
      if (stryMutAct_9fa48("6006")) {
        {}
      } else {
        stryCov_9fa48("6006");
        return renderDay(day, classes, stryMutAct_9fa48("6009") ? semesterClasses.length && 0 : stryMutAct_9fa48("6008") ? false : stryMutAct_9fa48("6007") ? true : (stryCov_9fa48("6007", "6008", "6009"), semesterClasses.length || 0), currentWeekType, currentDay);
      }
    });
  }
};
export const renderFullSchedule = fullResultSchedule => {
  if (stryMutAct_9fa48("6010")) {
    {}
  } else {
    stryCov_9fa48("6010");
    const {
      semester,
      groupList,
      semesterClasses,
      resultArray
    } = fullResultSchedule;
    const {
      startDay,
      description,
      endDay
    } = semester;
    const scheduleTitle = stryMutAct_9fa48("6011") ? `` : (stryCov_9fa48("6011"), `[${getWeekParity(startDay)} ${i18n.t(stryMutAct_9fa48("6012") ? `` : (stryCov_9fa48("6012"), `week_label`))}] ${(stryMutAct_9fa48("6013") ? "" : (stryCov_9fa48("6013"), '\u00A0')).repeat(5)} ${description} (${startDay}-${endDay})`);
    const currentWeekType = isWeekOdd(printWeekNumber(startDay));
    const currentDay = checkSemesterEnd(endDay) ? stryMutAct_9fa48("6014") ? "Stryker was here!" : (stryCov_9fa48("6014"), '') : matchDayNumberSysytemToDayName();
    return <>
            <h1>{scheduleTitle}</h1>
            <TableContainer>
                <Table aria-label="sticky table">
                    {renderScheduleFullHeader(groupList)}
                    <TableBody>
                        {renderScheduleDays(resultArray, semesterClasses, currentWeekType, currentDay)}
                    </TableBody>
                </Table>
            </TableContainer>
        </>;
  }
};
const renderTeacherClassCell = cards => {
  if (stryMutAct_9fa48("6015")) {
    {}
  } else {
    stryCov_9fa48("6015");
    let teacherLessonAddCellClass = stryMutAct_9fa48("6016") ? "Stryker was here!" : (stryCov_9fa48("6016"), '');
    if (stryMutAct_9fa48("6019") ? cards === undefined : stryMutAct_9fa48("6018") ? false : stryMutAct_9fa48("6017") ? true : (stryCov_9fa48("6017", "6018", "6019"), cards !== undefined)) {
      if (stryMutAct_9fa48("6020")) {
        {}
      } else {
        stryCov_9fa48("6020");
        if (stryMutAct_9fa48("6024") ? cards.cards.length <= 1 : stryMutAct_9fa48("6023") ? cards.cards.length >= 1 : stryMutAct_9fa48("6022") ? false : stryMutAct_9fa48("6021") ? true : (stryCov_9fa48("6021", "6022", "6023", "6024"), cards.cards.length > 1)) {
          if (stryMutAct_9fa48("6025")) {
            {}
          } else {
            stryCov_9fa48("6025");
            cards.cards.forEach((card, cardIndex) => {
              if (stryMutAct_9fa48("6026")) {
                {}
              } else {
                stryCov_9fa48("6026");
                if (stryMutAct_9fa48("6029") ? cards.cards[cardIndex + 1] || card.room !== cards.cards[cardIndex + 1].room : stryMutAct_9fa48("6028") ? false : stryMutAct_9fa48("6027") ? true : (stryCov_9fa48("6027", "6028", "6029"), cards.cards[stryMutAct_9fa48("6030") ? cardIndex - 1 : (stryCov_9fa48("6030"), cardIndex + 1)] && (stryMutAct_9fa48("6032") ? card.room === cards.cards[cardIndex + 1].room : stryMutAct_9fa48("6031") ? true : (stryCov_9fa48("6031", "6032"), card.room !== cards.cards[stryMutAct_9fa48("6033") ? cardIndex - 1 : (stryCov_9fa48("6033"), cardIndex + 1)].room)))) {
                  if (stryMutAct_9fa48("6034")) {
                    {}
                  } else {
                    stryCov_9fa48("6034");
                    teacherLessonAddCellClass += stryMutAct_9fa48("6035") ? "" : (stryCov_9fa48("6035"), 'intersection-on-schedule');
                  }
                }
              }
            });
          }
        }
      }
    }
    const cardsProp = stryMutAct_9fa48("6038") ? cards || cards.cards : stryMutAct_9fa48("6037") ? false : stryMutAct_9fa48("6036") ? true : (stryCov_9fa48("6036", "6037", "6038"), cards && cards.cards);
    return <TableCell key={shortid.generate()} className={stryMutAct_9fa48("6039") ? `` : (stryCov_9fa48("6039"), `lesson ${teacherLessonAddCellClass}`)}>
            <TeacherTemporaryCardCell cards={cardsProp} />
        </TableCell>;
  }
};
const renderClassRow = stryMutAct_9fa48("6040") ? () => undefined : (stryCov_9fa48("6040"), (() => {
  const renderClassRow = (classItem, days, scheduleRow) => <TableRow key={shortid.generate()}>
        <TableCell className="lesson groupLabelCell">{renderClassCell(classItem)}</TableCell>
        {days.map(dayName => {
      if (stryMutAct_9fa48("6041")) {
        {}
      } else {
        stryCov_9fa48("6041");
        if (stryMutAct_9fa48("6043") ? false : stryMutAct_9fa48("6042") ? true : (stryCov_9fa48("6042", "6043"), scheduleRow)) {
          if (stryMutAct_9fa48("6044")) {
            {}
          } else {
            stryCov_9fa48("6044");
            return renderTeacherClassCell(scheduleRow.find(stryMutAct_9fa48("6045") ? () => undefined : (stryCov_9fa48("6045"), item => stryMutAct_9fa48("6048") ? item.day !== dayName : stryMutAct_9fa48("6047") ? false : stryMutAct_9fa48("6046") ? true : (stryCov_9fa48("6046", "6047", "6048"), item.day === dayName))));
          }
        }
        return null;
      }
    })}
    </TableRow>;
  return renderClassRow;
})());
export const renderWeekTable = schedule => {
  if (stryMutAct_9fa48("6049")) {
    {}
  } else {
    stryCov_9fa48("6049");
    const {
      days,
      classes,
      cards
    } = schedule;
    return <TableContainer>
            <Table aria-label="sticky table">
                {renderScheduleGroupHeader(days)}
                <TableBody>
                    {classes.map(classItem => {
            if (stryMutAct_9fa48("6050")) {
              {}
            } else {
              stryCov_9fa48("6050");
              return renderClassRow(classItem, days, cards[classItem.id]);
            }
          })}
                </TableBody>
            </Table>
        </TableContainer>;
  }
};
const renderLessonsFirstLine = lessonItem => {
  if (stryMutAct_9fa48("6051")) {
    {}
  } else {
    stryCov_9fa48("6051");
    return <>
            <TableCell>{lessonItem.lesson.subject_for_site}</TableCell>
            <TableCell>{lessonItem.lesson.group_name}</TableCell>
            <TableCell>{lessonItem.lesson.room.name}</TableCell>
        </>;
  }
};
const renderLessonsRestLines = lessons => {
  if (stryMutAct_9fa48("6052")) {
    {}
  } else {
    stryCov_9fa48("6052");
    if (stryMutAct_9fa48("6055") ? lessons.length !== 1 : stryMutAct_9fa48("6054") ? false : stryMutAct_9fa48("6053") ? true : (stryCov_9fa48("6053", "6054", "6055"), lessons.length === 1)) {
      if (stryMutAct_9fa48("6056")) {
        {}
      } else {
        stryCov_9fa48("6056");
        return null;
      }
    }
    let lessonClassName = stryMutAct_9fa48("6057") ? "Stryker was here!" : (stryCov_9fa48("6057"), '');
    lessonClassName = stryMutAct_9fa48("6058") ? "" : (stryCov_9fa48("6058"), 'groupped');
    lessons.forEach((lessonItem, lessonIndex) => {
      if (stryMutAct_9fa48("6059")) {
        {}
      } else {
        stryCov_9fa48("6059");
        if (stryMutAct_9fa48("6062") ? lessons[lessonIndex + 1] || lessonItem.lesson.subject_for_site !== lessons[lessonIndex + 1].lesson.subject_for_site || lessonItem.lesson.room.id !== lessons[lessonIndex + 1].lesson.room.id : stryMutAct_9fa48("6061") ? false : stryMutAct_9fa48("6060") ? true : (stryCov_9fa48("6060", "6061", "6062"), lessons[stryMutAct_9fa48("6063") ? lessonIndex - 1 : (stryCov_9fa48("6063"), lessonIndex + 1)] && (stryMutAct_9fa48("6065") ? lessonItem.lesson.subject_for_site !== lessons[lessonIndex + 1].lesson.subject_for_site && lessonItem.lesson.room.id !== lessons[lessonIndex + 1].lesson.room.id : stryMutAct_9fa48("6064") ? true : (stryCov_9fa48("6064", "6065"), (stryMutAct_9fa48("6067") ? lessonItem.lesson.subject_for_site === lessons[lessonIndex + 1].lesson.subject_for_site : stryMutAct_9fa48("6066") ? false : (stryCov_9fa48("6066", "6067"), lessonItem.lesson.subject_for_site !== lessons[stryMutAct_9fa48("6068") ? lessonIndex - 1 : (stryCov_9fa48("6068"), lessonIndex + 1)].lesson.subject_for_site)) || (stryMutAct_9fa48("6070") ? lessonItem.lesson.room.id === lessons[lessonIndex + 1].lesson.room.id : stryMutAct_9fa48("6069") ? false : (stryCov_9fa48("6069", "6070"), lessonItem.lesson.room.id !== lessons[stryMutAct_9fa48("6071") ? lessonIndex - 1 : (stryCov_9fa48("6071"), lessonIndex + 1)].lesson.room.id)))))) {
          if (stryMutAct_9fa48("6072")) {
            {}
          } else {
            stryCov_9fa48("6072");
            lessonClassName = stryMutAct_9fa48("6073") ? "" : (stryCov_9fa48("6073"), 'overlap');
          }
        }
      }
    });
    return lessons.map((lessonItem, lessonIndex) => {
      if (stryMutAct_9fa48("6074")) {
        {}
      } else {
        stryCov_9fa48("6074");
        if (stryMutAct_9fa48("6077") ? lessonIndex !== 0 : stryMutAct_9fa48("6076") ? false : stryMutAct_9fa48("6075") ? true : (stryCov_9fa48("6075", "6076", "6077"), lessonIndex === 0)) {
          if (stryMutAct_9fa48("6078")) {
            {}
          } else {
            stryCov_9fa48("6078");
            return null;
          }
        }
        return <TableRow className={lessonClassName} key={shortid.generate()}>
                <TableCell>{lessonItem.lesson.subject_for_site}</TableCell>
                <TableCell>{lessonItem.lesson.group_name}</TableCell>
                <TableCell>{lessonItem.lesson.room.name}</TableCell>
            </TableRow>;
      }
    });
  }
};
const renderFirstLineTable = classItem => {
  if (stryMutAct_9fa48("6079")) {
    {}
  } else {
    stryCov_9fa48("6079");
    return <TableRow key={shortid.generate()}>
            <TableCell rowSpan={classItem.lessons.length}>
                {stryMutAct_9fa48("6080") ? `` : (stryCov_9fa48("6080"), `${classItem.class.class_name} ( ${classItem.class.startTime} - ${classItem.class.endTime})`)}
            </TableCell>
            {renderLessonsFirstLine(classItem.lessons[0])}
        </TableRow>;
  }
};
export const renderTeacherRangeDay = schedule => {
  if (stryMutAct_9fa48("6081")) {
    {}
  } else {
    stryCov_9fa48("6081");
    if (stryMutAct_9fa48("6083") ? false : stryMutAct_9fa48("6082") ? true : (stryCov_9fa48("6082", "6083"), schedule)) {
      if (stryMutAct_9fa48("6084")) {
        {}
      } else {
        stryCov_9fa48("6084");
        return <TableContainer key={shortid.generate()}>
                <Table aria-label="sticky table">
                    <TableBody>
                        {schedule.map(classItem => {
                if (stryMutAct_9fa48("6085")) {
                  {}
                } else {
                  stryCov_9fa48("6085");
                  return <React.Fragment key={shortid.generate()}>
                                    {renderFirstLineTable(classItem)}
                                    {renderLessonsRestLines(classItem.lessons)}
                                </React.Fragment>;
                }
              })}
                    </TableBody>
                </Table>
            </TableContainer>;
      }
    }
    return null;
  }
};
export const renderTeacherRangeSchedule = (schedule, viewTeacherScheduleResults) => {
  if (stryMutAct_9fa48("6086")) {
    {}
  } else {
    stryCov_9fa48("6086");
    if (stryMutAct_9fa48("6088") ? false : stryMutAct_9fa48("6087") ? true : (stryCov_9fa48("6087", "6088"), isNil(schedule))) return null;
    if (stryMutAct_9fa48("6091") ? schedule.length !== 0 : stryMutAct_9fa48("6090") ? false : stryMutAct_9fa48("6089") ? true : (stryCov_9fa48("6089", "6090", "6091"), schedule.length === 0)) {
      if (stryMutAct_9fa48("6092")) {
        {}
      } else {
        stryCov_9fa48("6092");
        return i18n.t(EMPTY_SCHEDULE);
      }
    }
    return schedule.map(dayItem => {
      if (stryMutAct_9fa48("6093")) {
        {}
      } else {
        stryCov_9fa48("6093");
        const startDay = transformSemesterDate(dayItem.date);
        return <Card additionClassName={stryMutAct_9fa48("6094") ? `` : (stryCov_9fa48("6094"), `${viewTeacherScheduleResults} form-card teacher-schedule-day-card`)} key={shortid.generate()}>
                <h3>{stryMutAct_9fa48("6095") ? `` : (stryCov_9fa48("6095"), `${dayItem.date} ( ${i18n.t(stryMutAct_9fa48("6096") ? `` : (stryCov_9fa48("6096"), `day_of_week_${stryMutAct_9fa48("6097") ? startDay.getDay() - 1 : (stryCov_9fa48("6097"), startDay.getDay() + 1)}`))} )`)}</h3>
                {renderTeacherRangeDay(dayItem.schedule)}
            </Card>;
      }
    });
  }
};
describe(stryMutAct_9fa48("6098") ? "" : (stryCov_9fa48("6098"), 'renderScheduleTable helpers'), () => {
  if (stryMutAct_9fa48("6099")) {
    {}
  } else {
    stryCov_9fa48("6099");
    test(stryMutAct_9fa48("6100") ? "" : (stryCov_9fa48("6100"), 'checkSemesterEnd returns true for past date'), () => {
      if (stryMutAct_9fa48("6101")) {
        {}
      } else {
        stryCov_9fa48("6101");
        expect(checkSemesterEnd(stryMutAct_9fa48("6102") ? "" : (stryCov_9fa48("6102"), '01/01/2000'))).toBe(stryMutAct_9fa48("6103") ? false : (stryCov_9fa48("6103"), true));
      }
    });
    test(stryMutAct_9fa48("6104") ? "" : (stryCov_9fa48("6104"), 'checkSemesterEnd returns false for future date'), () => {
      if (stryMutAct_9fa48("6105")) {
        {}
      } else {
        stryCov_9fa48("6105");
        const future = stryMutAct_9fa48("6106") ? "" : (stryCov_9fa48("6106"), '12/12/2999');
        expect(checkSemesterEnd(future)).toBe(stryMutAct_9fa48("6107") ? true : (stryCov_9fa48("6107"), false));
      }
    });
    test(stryMutAct_9fa48("6108") ? "" : (stryCov_9fa48("6108"), 'isWeekOdd returns true for odd numbers'), () => {
      if (stryMutAct_9fa48("6109")) {
        {}
      } else {
        stryCov_9fa48("6109");
        expect(isWeekOdd(1)).toBe(stryMutAct_9fa48("6110") ? false : (stryCov_9fa48("6110"), true));
        expect(isWeekOdd(3)).toBe(stryMutAct_9fa48("6111") ? false : (stryCov_9fa48("6111"), true));
      }
    });
    test(stryMutAct_9fa48("6112") ? "" : (stryCov_9fa48("6112"), 'isWeekOdd returns false for even numbers'), () => {
      if (stryMutAct_9fa48("6113")) {
        {}
      } else {
        stryCov_9fa48("6113");
        expect(isWeekOdd(2)).toBe(stryMutAct_9fa48("6114") ? true : (stryCov_9fa48("6114"), false));
        expect(isWeekOdd(4)).toBe(stryMutAct_9fa48("6115") ? true : (stryCov_9fa48("6115"), false));
      }
    });
    test(stryMutAct_9fa48("6116") ? "" : (stryCov_9fa48("6116"), 'getWeekParity returns number >= 0'), () => {
      if (stryMutAct_9fa48("6117")) {
        {}
      } else {
        stryCov_9fa48("6117");
        const result = getWeekParity(stryMutAct_9fa48("6118") ? "" : (stryCov_9fa48("6118"), '01/01/2020'));
        expect(typeof result).toBe(stryMutAct_9fa48("6119") ? "" : (stryCov_9fa48("6119"), 'number'));
      }
    });
    test(stryMutAct_9fa48("6120") ? "" : (stryCov_9fa48("6120"), 'getWeekParity handles date objects'), () => {
      if (stryMutAct_9fa48("6121")) {
        {}
      } else {
        stryCov_9fa48("6121");
        const start = new Date(stryMutAct_9fa48("6122") ? "" : (stryCov_9fa48("6122"), '2020-01-01'));
        const result = getWeekParity(start, new Date());
        expect(typeof result).toBe(stryMutAct_9fa48("6123") ? "" : (stryCov_9fa48("6123"), 'number'));
      }
    });
  }
});