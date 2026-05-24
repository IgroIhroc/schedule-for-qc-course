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
import { cloneDeep, isEmpty } from 'lodash';
import { daysObject } from '../constants/schedule/days';
const transformClassDays = classDay => {
  if (stryMutAct_9fa48("6471")) {
    {}
  } else {
    stryCov_9fa48("6471");
    const lessons = stryMutAct_9fa48("6472") ? ["Stryker was here"] : (stryCov_9fa48("6472"), []);
    Object.entries(classDay.cards).forEach(pair => {
      if (stryMutAct_9fa48("6473")) {
        {}
      } else {
        stryCov_9fa48("6473");
        const [key, value] = pair;
        value.day = key;
        lessons.push(value);
      }
    });
    return stryMutAct_9fa48("6474") ? {} : (stryCov_9fa48("6474"), {
      class: classDay.class,
      lessons
    });
  }
};
const transformParityArray = stryMutAct_9fa48("6475") ? () => undefined : (stryCov_9fa48("6475"), (() => {
  const transformParityArray = array => array.map(transformClassDays);
  return transformParityArray;
})());
const mapGroupSchedule = schedule => {
  if (stryMutAct_9fa48("6476")) {
    {}
  } else {
    stryCov_9fa48("6476");
    const prepOddArray = stryMutAct_9fa48("6477") ? ["Stryker was here"] : (stryCov_9fa48("6477"), []);
    const prepEvenArray = stryMutAct_9fa48("6478") ? ["Stryker was here"] : (stryCov_9fa48("6478"), []);
    const {
      days,
      group
    } = schedule[0];
    days.forEach(({
      classes
    }) => {
      if (stryMutAct_9fa48("6479")) {
        {}
      } else {
        stryCov_9fa48("6479");
        classes.forEach(classItem => {
          if (stryMutAct_9fa48("6480")) {
            {}
          } else {
            stryCov_9fa48("6480");
            if (stryMutAct_9fa48("6482") ? false : stryMutAct_9fa48("6481") ? true : (stryCov_9fa48("6481", "6482"), classItem.weeks.even)) {
              if (stryMutAct_9fa48("6483")) {
                {}
              } else {
                stryCov_9fa48("6483");
                prepEvenArray[classItem.class.id] = stryMutAct_9fa48("6484") ? {} : (stryCov_9fa48("6484"), {
                  class: classItem.class,
                  cards: cloneDeep(daysObject)
                });
              }
            }
            if (stryMutAct_9fa48("6486") ? false : stryMutAct_9fa48("6485") ? true : (stryCov_9fa48("6485", "6486"), classItem.weeks.odd)) {
              if (stryMutAct_9fa48("6487")) {
                {}
              } else {
                stryCov_9fa48("6487");
                prepOddArray[classItem.class.id] = stryMutAct_9fa48("6488") ? {} : (stryCov_9fa48("6488"), {
                  class: classItem.class,
                  cards: cloneDeep(daysObject)
                });
              }
            }
          }
        });
      }
    });
    days.forEach(({
      classes,
      day
    }) => {
      if (stryMutAct_9fa48("6489")) {
        {}
      } else {
        stryCov_9fa48("6489");
        classes.forEach(classItem => {
          if (stryMutAct_9fa48("6490")) {
            {}
          } else {
            stryCov_9fa48("6490");
            if (stryMutAct_9fa48("6492") ? false : stryMutAct_9fa48("6491") ? true : (stryCov_9fa48("6491", "6492"), classItem.weeks.even)) {
              if (stryMutAct_9fa48("6493")) {
                {}
              } else {
                stryCov_9fa48("6493");
                prepEvenArray[classItem.class.id].cards[day].card = classItem.weeks.even;
              }
            }
            if (stryMutAct_9fa48("6495") ? false : stryMutAct_9fa48("6494") ? true : (stryCov_9fa48("6494", "6495"), classItem.weeks.odd)) {
              if (stryMutAct_9fa48("6496")) {
                {}
              } else {
                stryCov_9fa48("6496");
                prepOddArray[classItem.class.id].cards[day].card = classItem.weeks.odd;
              }
            }
          }
        });
      }
    });
    const parsedOddArray = transformParityArray(prepOddArray);
    const parsedEvenArray = transformParityArray(prepEvenArray);
    return stryMutAct_9fa48("6497") ? {} : (stryCov_9fa48("6497"), {
      parsedOddArray,
      parsedEvenArray,
      parsedGroup: group
    });
  }
};
export const makeGroupSchedule = groupSchedule => {
  if (stryMutAct_9fa48("6498")) {
    {}
  } else {
    stryCov_9fa48("6498");
    const {
      semester,
      schedule
    } = groupSchedule;
    let evenArray = stryMutAct_9fa48("6499") ? ["Stryker was here"] : (stryCov_9fa48("6499"), []);
    let oddArray = stryMutAct_9fa48("6500") ? ["Stryker was here"] : (stryCov_9fa48("6500"), []);
    let group = {};
    if (stryMutAct_9fa48("6503") ? false : stryMutAct_9fa48("6502") ? true : stryMutAct_9fa48("6501") ? isEmpty(schedule) : (stryCov_9fa48("6501", "6502", "6503"), !isEmpty(schedule))) {
      if (stryMutAct_9fa48("6504")) {
        {}
      } else {
        stryCov_9fa48("6504");
        const {
          parsedOddArray,
          parsedEvenArray,
          parsedGroup
        } = mapGroupSchedule(schedule);
        evenArray = parsedEvenArray;
        oddArray = parsedOddArray;
        group = parsedGroup;
      }
    }
    return stryMutAct_9fa48("6505") ? {} : (stryCov_9fa48("6505"), {
      semester,
      oddArray,
      evenArray,
      group
    });
  }
};