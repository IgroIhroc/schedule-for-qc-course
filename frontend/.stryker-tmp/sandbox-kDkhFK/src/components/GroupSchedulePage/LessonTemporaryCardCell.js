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
import { isNil } from 'lodash';
import { COMMON_REGULAR_LESSON_LABEL, COMMON_VACATION_LABEL } from '../../constants/translationLabels/common';
import { getTeacherForSite, getTeacherWithShortPosition } from '../../helper/renderTeacher';
import { setLink } from '../../helper/setLInk';
import i18n from '../../i18n';
import { prepareLessonCardCell, prepareLessonSubCardCell } from '../../helper/prepareLessonCell';
import { places } from '../../constants/places';
import './GroupSchedulePage.scss';
const lessonTypeColors = stryMutAct_9fa48("1745") ? {} : (stryCov_9fa48("1745"), {
  seminar: stryMutAct_9fa48("1746") ? "" : (stryCov_9fa48("1746"), '#8E24AA'),
  lecture: stryMutAct_9fa48("1747") ? "" : (stryCov_9fa48("1747"), '#4a6cf7'),
  laboratory: stryMutAct_9fa48("1748") ? "" : (stryCov_9fa48("1748"), '#e08830'),
  practical: stryMutAct_9fa48("1749") ? "" : (stryCov_9fa48("1749"), '#0fa968')
});
const LessonTemporaryCardCell = props => {
  if (stryMutAct_9fa48("1750")) {
    {}
  } else {
    stryCov_9fa48("1750");
    const {
      card,
      place,
      day
    } = props;
    if (stryMutAct_9fa48("1752") ? false : stryMutAct_9fa48("1751") ? true : (stryCov_9fa48("1751", "1752"), isNil(card))) return stryMutAct_9fa48("1753") ? "Stryker was here!" : (stryCov_9fa48("1753"), '');
    const isOnline = stryMutAct_9fa48("1754") ? isNil(card.linkToMeeting) : (stryCov_9fa48("1754"), !isNil(card.linkToMeeting));
    if (stryMutAct_9fa48("1757") ? place === places.ONLINE || !isOnline : stryMutAct_9fa48("1756") ? false : stryMutAct_9fa48("1755") ? true : (stryCov_9fa48("1755", "1756", "1757"), (stryMutAct_9fa48("1759") ? place !== places.ONLINE : stryMutAct_9fa48("1758") ? true : (stryCov_9fa48("1758", "1759"), place === places.ONLINE)) && (stryMutAct_9fa48("1760") ? isOnline : (stryCov_9fa48("1760"), !isOnline)))) {
      if (stryMutAct_9fa48("1761")) {
        {}
      } else {
        stryCov_9fa48("1761");
        return stryMutAct_9fa48("1762") ? "Stryker was here!" : (stryCov_9fa48("1762"), '');
      }
    }
    if (stryMutAct_9fa48("1765") ? place === places.AUDITORY || isOnline : stryMutAct_9fa48("1764") ? false : stryMutAct_9fa48("1763") ? true : (stryCov_9fa48("1763", "1764", "1765"), (stryMutAct_9fa48("1767") ? place !== places.AUDITORY : stryMutAct_9fa48("1766") ? true : (stryCov_9fa48("1766", "1767"), place === places.AUDITORY)) && isOnline)) {
      if (stryMutAct_9fa48("1768")) {
        {}
      } else {
        stryCov_9fa48("1768");
        return stryMutAct_9fa48("1769") ? "Stryker was here!" : (stryCov_9fa48("1769"), '');
      }
    }
    const {
      temporary_schedule: tempSchedule,
      linkToMeeting
    } = card;
    const meetingLink = stryMutAct_9fa48("1772") ? linkToMeeting || setLink(card, place) : stryMutAct_9fa48("1771") ? false : stryMutAct_9fa48("1770") ? true : (stryCov_9fa48("1770", "1771", "1772"), linkToMeeting && setLink(card, place));
    const triangleColor = stryMutAct_9fa48("1775") ? lessonTypeColors[card.lessonType?.toLowerCase()] && '#757575' : stryMutAct_9fa48("1774") ? false : stryMutAct_9fa48("1773") ? true : (stryCov_9fa48("1773", "1774", "1775"), lessonTypeColors[stryMutAct_9fa48("1777") ? card.lessonType.toLowerCase() : stryMutAct_9fa48("1776") ? card.lessonType?.toUpperCase() : (stryCov_9fa48("1776", "1777"), card.lessonType?.toLowerCase())] || (stryMutAct_9fa48("1778") ? "" : (stryCov_9fa48("1778"), '#757575')));
    if (stryMutAct_9fa48("1780") ? false : stryMutAct_9fa48("1779") ? true : (stryCov_9fa48("1779", "1780"), tempSchedule)) {
      if (stryMutAct_9fa48("1781")) {
        {}
      } else {
        stryCov_9fa48("1781");
        const {
          vacation,
          date,
          subjectForSite,
          room
        } = tempSchedule;
        const roomLabel = room ? stryMutAct_9fa48("1782") ? `` : (stryCov_9fa48("1782"), `, ${room.name}`) : stryMutAct_9fa48("1783") ? "Stryker was here!" : (stryCov_9fa48("1783"), '');
        let inner = stryMutAct_9fa48("1784") ? `` : (stryCov_9fa48("1784"), `${date}\n\r`);
        stryMutAct_9fa48("1785") ? inner -= vacation ? `${i18n.t(COMMON_VACATION_LABEL)}` : `${getTeacherForSite(tempSchedule)}\n${subjectForSite}${roomLabel}` : (stryCov_9fa48("1785"), inner += vacation ? stryMutAct_9fa48("1786") ? `` : (stryCov_9fa48("1786"), `${i18n.t(COMMON_VACATION_LABEL)}`) : stryMutAct_9fa48("1787") ? `` : (stryCov_9fa48("1787"), `${getTeacherForSite(tempSchedule)}\n${subjectForSite}${roomLabel}`));
        const title = stryMutAct_9fa48("1788") ? `` : (stryCov_9fa48("1788"), `${i18n.t(COMMON_REGULAR_LESSON_LABEL)}\r${prepareLessonCardCell(card)}\r${prepareLessonSubCardCell(card, place)}\r`);
        return <>
                <p className="temporary-class" title={title}>
                    {inner}
                </p>
                {meetingLink}
            </>;
      }
    }
    return <div className="lesson-cell-wrapper">
            <div className="lesson-type-triangle" style={stryMutAct_9fa48("1789") ? {} : (stryCov_9fa48("1789"), {
        borderTopColor: triangleColor
      })} />
            <p className="lesson-teacher" title={i18n.t(stryMutAct_9fa48("1790") ? `` : (stryCov_9fa48("1790"), `common:day_of_week_${day}`))}>
                {getTeacherWithShortPosition(card.teacher)}
            </p>
            <p className="lesson-subject">
                {card.subjectForSite}
            </p>
            <p className="lesson-details">
                {prepareLessonSubCardCell(card, place)}
            </p>
            {meetingLink}
        </div>;
  }
};
export default LessonTemporaryCardCell;