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
import { places } from '../constants/places';
import { COMMON_REGULAR_LESSON_LABEL, COMMON_VACATION_LABEL } from '../constants/translationLabels/common';
import i18n from '../i18n';
import { getTeacherFullName } from './renderTeacher';
export const prepareTeacherCardCell = card => {
  if (stryMutAct_9fa48("5616")) {
    {}
  } else {
    stryCov_9fa48("5616");
    let inner = stryMutAct_9fa48("5617") ? "Stryker was here!" : (stryCov_9fa48("5617"), '');
    if (stryMutAct_9fa48("5620") ? false : stryMutAct_9fa48("5619") ? true : stryMutAct_9fa48("5618") ? isNil(card) : (stryCov_9fa48("5618", "5619", "5620"), !isNil(card))) {
      if (stryMutAct_9fa48("5621")) {
        {}
      } else {
        stryCov_9fa48("5621");
        inner = card.subjectForSite;
      }
    }
    return inner;
  }
};
export const buildLessonWithRoom = (card, place) => {
  if (stryMutAct_9fa48("5622")) {
    {}
  } else {
    stryCov_9fa48("5622");
    const room = (stryMutAct_9fa48("5625") ? place === places.ONLINE : stryMutAct_9fa48("5624") ? false : stryMutAct_9fa48("5623") ? true : (stryCov_9fa48("5623", "5624", "5625"), place !== places.ONLINE)) ? card.room : stryMutAct_9fa48("5626") ? "Stryker was here!" : (stryCov_9fa48("5626"), '');
    let inner = stryMutAct_9fa48("5627") ? "Stryker was here!" : (stryCov_9fa48("5627"), '');
    inner += stryMutAct_9fa48("5628") ? `` : (stryCov_9fa48("5628"), `${prepareTeacherCardCell(card)}\n`);
    stryMutAct_9fa48("5629") ? inner -= room !== '' ? `(${i18n.t(`formElements:lesson_type_${card.lessonType.toLowerCase()}_label`)}, ${card.room})\n` : `${i18n.t(`formElements:lesson_type_${card.lessonType.toLowerCase()}_label`)}\n` : (stryCov_9fa48("5629"), inner += (stryMutAct_9fa48("5632") ? room === '' : stryMutAct_9fa48("5631") ? false : stryMutAct_9fa48("5630") ? true : (stryCov_9fa48("5630", "5631", "5632"), room !== (stryMutAct_9fa48("5633") ? "Stryker was here!" : (stryCov_9fa48("5633"), '')))) ? stryMutAct_9fa48("5634") ? `` : (stryCov_9fa48("5634"), `(${i18n.t(stryMutAct_9fa48("5635") ? `` : (stryCov_9fa48("5635"), `formElements:lesson_type_${stryMutAct_9fa48("5636") ? card.lessonType.toUpperCase() : (stryCov_9fa48("5636"), card.lessonType.toLowerCase())}_label`))}, ${card.room})\n`) : stryMutAct_9fa48("5637") ? `` : (stryCov_9fa48("5637"), `${i18n.t(stryMutAct_9fa48("5638") ? `` : (stryCov_9fa48("5638"), `formElements:lesson_type_${stryMutAct_9fa48("5639") ? card.lessonType.toUpperCase() : (stryCov_9fa48("5639"), card.lessonType.toLowerCase())}_label`))}\n`));
    return inner;
  }
};
export const prepareTeacherCardRegularCell = (card, place) => {
  if (stryMutAct_9fa48("5640")) {
    {}
  } else {
    stryCov_9fa48("5640");
    let inner = buildLessonWithRoom(card, place);
    inner += stryMutAct_9fa48("5641") ? `` : (stryCov_9fa48("5641"), `\n${card.group.title}\n`);
    return inner;
  }
};
export const buildGroupNumber = card => {
  if (stryMutAct_9fa48("5642")) {
    {}
  } else {
    stryCov_9fa48("5642");
    return stryMutAct_9fa48("5643") ? `` : (stryCov_9fa48("5643"), `${card.group.title}\n`);
  }
};
export const prepareTitleAndInner = options => {
  if (stryMutAct_9fa48("5644")) {
    {}
  } else {
    stryCov_9fa48("5644");
    const {
      cards,
      place
    } = options;
    let {
      title,
      inner
    } = options;
    cards.forEach(cardItem => {
      if (stryMutAct_9fa48("5645")) {
        {}
      } else {
        stryCov_9fa48("5645");
        const {
          temporary_schedule: tempSchedule
        } = cardItem;
        if (stryMutAct_9fa48("5648") ? false : stryMutAct_9fa48("5647") ? true : stryMutAct_9fa48("5646") ? tempSchedule : (stryCov_9fa48("5646", "5647", "5648"), !tempSchedule)) {
          if (stryMutAct_9fa48("5649")) {
            {}
          } else {
            stryCov_9fa48("5649");
            stryMutAct_9fa48("5650") ? inner -= buildGroupNumber(cardItem) : (stryCov_9fa48("5650"), inner += buildGroupNumber(cardItem));
          }
        } else {
          if (stryMutAct_9fa48("5651")) {
            {}
          } else {
            stryCov_9fa48("5651");
            const {
              vacation,
              date,
              teacher,
              room,
              subjectForSite
            } = tempSchedule;
            const roomLabel = room ? stryMutAct_9fa48("5652") ? `` : (stryCov_9fa48("5652"), `${subjectForSite}, ${room.name}\n`) : stryMutAct_9fa48("5653") ? `` : (stryCov_9fa48("5653"), `${subjectForSite}\n`);
            stryMutAct_9fa48("5654") ? inner -= vacation ? `${date}\n${i18n.t(COMMON_VACATION_LABEL)}\n` : `${date}\n${getTeacherFullName(teacher)}\n${roomLabel}` : (stryCov_9fa48("5654"), inner += vacation ? stryMutAct_9fa48("5655") ? `` : (stryCov_9fa48("5655"), `${date}\n${i18n.t(COMMON_VACATION_LABEL)}\n`) : stryMutAct_9fa48("5656") ? `` : (stryCov_9fa48("5656"), `${date}\n${getTeacherFullName(teacher)}\n${roomLabel}`));
          }
        }
        title += stryMutAct_9fa48("5657") ? `` : (stryCov_9fa48("5657"), `${i18n.t(COMMON_REGULAR_LESSON_LABEL)}\r${prepareTeacherCardRegularCell(cardItem, place)}\r`);
      }
    });
    return stryMutAct_9fa48("5658") ? {} : (stryCov_9fa48("5658"), {
      title,
      inner
    });
  }
};