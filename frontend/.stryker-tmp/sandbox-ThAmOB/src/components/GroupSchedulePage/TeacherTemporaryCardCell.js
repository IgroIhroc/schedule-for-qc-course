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
import { isNil } from 'lodash';
import React from 'react';
import { COMMON_REGULAR_LESSON_LABEL, COMMON_VACATION_LABEL } from '../../constants/translationLabels/common';
import { buildLessonWithRoom, prepareTeacherCardRegularCell, prepareTitleAndInner } from '../../helper/prepareTeacherCell';
import { setLink } from '../../helper/setLInk';
import i18n from '../../i18n';
import { getLessonTypeColor } from '../../constants/lessonTypeColors';
const TeacherTemporaryCardCell = props => {
  if (stryMutAct_9fa48("1872")) {
    {}
  } else {
    stryCov_9fa48("1872");
    const {
      cards,
      place
    } = props;
    if (stryMutAct_9fa48("1875") ? false : stryMutAct_9fa48("1874") ? true : stryMutAct_9fa48("1873") ? cards : (stryCov_9fa48("1873", "1874", "1875"), !cards)) {
      if (stryMutAct_9fa48("1876")) {
        {}
      } else {
        stryCov_9fa48("1876");
        return stryMutAct_9fa48("1877") ? "Stryker was here!" : (stryCov_9fa48("1877"), '');
      }
    }
    let inner = stryMutAct_9fa48("1878") ? "Stryker was here!" : (stryCov_9fa48("1878"), '');
    let title = stryMutAct_9fa48("1879") ? "Stryker was here!" : (stryCov_9fa48("1879"), '');
    if (stryMutAct_9fa48("1882") ? cards.length !== 1 : stryMutAct_9fa48("1881") ? false : stryMutAct_9fa48("1880") ? true : (stryCov_9fa48("1880", "1881", "1882"), cards.length === 1)) {
      if (stryMutAct_9fa48("1883")) {
        {}
      } else {
        stryCov_9fa48("1883");
        if (stryMutAct_9fa48("1885") ? false : stryMutAct_9fa48("1884") ? true : (stryCov_9fa48("1884", "1885"), isNil(cards[0]))) {
          if (stryMutAct_9fa48("1886")) {
            {}
          } else {
            stryCov_9fa48("1886");
            return stryMutAct_9fa48("1887") ? "Stryker was here!" : (stryCov_9fa48("1887"), '');
          }
        }
        const card = cards[0];
        const {
          temporary_schedule: tempSchedule,
          linkToMeeting
        } = card;
        const meetingLink = stryMutAct_9fa48("1890") ? linkToMeeting || setLink(card, place) : stryMutAct_9fa48("1889") ? false : stryMutAct_9fa48("1888") ? true : (stryCov_9fa48("1888", "1889", "1890"), linkToMeeting && setLink(card, place));
        const triangleColor = getLessonTypeColor(card.lessonType);
        if (stryMutAct_9fa48("1893") ? false : stryMutAct_9fa48("1892") ? true : stryMutAct_9fa48("1891") ? tempSchedule : (stryCov_9fa48("1891", "1892", "1893"), !tempSchedule)) {
          if (stryMutAct_9fa48("1894")) {
            {}
          } else {
            stryCov_9fa48("1894");
            return <>
                    <div className="lesson-type-triangle" style={stryMutAct_9fa48("1895") ? {} : (stryCov_9fa48("1895"), {
                borderTopColor: triangleColor
              })} />
                    {prepareTeacherCardRegularCell(card, place)}
                    {meetingLink}
                </>;
          }
        }
        const {
          date,
          room,
          vacation,
          subjectForSite
        } = tempSchedule;
        const roomLabel = tempSchedule.room ? stryMutAct_9fa48("1896") ? `` : (stryCov_9fa48("1896"), `(${subjectForSite}, ${room.name})\n`) : stryMutAct_9fa48("1897") ? `` : (stryCov_9fa48("1897"), `${subjectForSite}\n`);
        inner = stryMutAct_9fa48("1898") ? `` : (stryCov_9fa48("1898"), `${date}\n`);
        stryMutAct_9fa48("1899") ? inner -= vacation ? `${i18n.t(COMMON_VACATION_LABEL)}` : `${roomLabel}` : (stryCov_9fa48("1899"), inner += vacation ? stryMutAct_9fa48("1900") ? `` : (stryCov_9fa48("1900"), `${i18n.t(COMMON_VACATION_LABEL)}`) : stryMutAct_9fa48("1901") ? `` : (stryCov_9fa48("1901"), `${roomLabel}`));
        title = stryMutAct_9fa48("1902") ? `` : (stryCov_9fa48("1902"), `${i18n.t(COMMON_REGULAR_LESSON_LABEL)}\r${prepareTeacherCardRegularCell(card, place)}`);
        return <>
                <div className="lesson-type-triangle" style={stryMutAct_9fa48("1903") ? {} : (stryCov_9fa48("1903"), {
            borderTopColor: triangleColor
          })} />
                <p className="temporary-class" title={title}>
                    {inner}
                    {meetingLink}
                </p>
            </>;
      }
    }
    const card = cards[0];
    const triangleColor = getLessonTypeColor(card.lessonType);
    stryMutAct_9fa48("1904") ? inner -= buildLessonWithRoom(card, place) : (stryCov_9fa48("1904"), inner += buildLessonWithRoom(card, place));
    const {
      title: resTitle,
      inner: resInner
    } = prepareTitleAndInner(stryMutAct_9fa48("1905") ? {} : (stryCov_9fa48("1905"), {
      title,
      inner,
      cards,
      place
    }));
    return <>
            <div className="lesson-type-triangle" style={stryMutAct_9fa48("1906") ? {} : (stryCov_9fa48("1906"), {
        borderTopColor: triangleColor
      })} />
            <p className="temporary-class" title={resTitle}>
                {resInner}
                {stryMutAct_9fa48("1909") ? card.linkToMeeting || setLink(card, place) : stryMutAct_9fa48("1908") ? false : stryMutAct_9fa48("1907") ? true : (stryCov_9fa48("1907", "1908", "1909"), card.linkToMeeting && setLink(card, place))}
            </p>
        </>;
  }
};
export default TeacherTemporaryCardCell;