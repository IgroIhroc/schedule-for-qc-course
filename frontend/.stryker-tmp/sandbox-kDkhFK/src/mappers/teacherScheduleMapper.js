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
import { isEmpty } from 'lodash';
import { filterClassesArray } from '../utils/sheduleUtils';
import { sortStrings } from '../utils/sortStrings';
const mapTeacherSchedule = days => {
  if (stryMutAct_9fa48("6506")) {
    {}
  } else {
    stryCov_9fa48("6506");
    const parsedEvenArray = stryMutAct_9fa48("6507") ? ["Stryker was here"] : (stryCov_9fa48("6507"), []);
    const parsedOddArray = stryMutAct_9fa48("6508") ? ["Stryker was here"] : (stryCov_9fa48("6508"), []);
    const parsedOddDays = stryMutAct_9fa48("6509") ? ["Stryker was here"] : (stryCov_9fa48("6509"), []);
    const parsedEvenDays = stryMutAct_9fa48("6510") ? ["Stryker was here"] : (stryCov_9fa48("6510"), []);
    const parsedOddClasses = stryMutAct_9fa48("6511") ? ["Stryker was here"] : (stryCov_9fa48("6511"), []);
    const parsedEvenClasses = stryMutAct_9fa48("6512") ? ["Stryker was here"] : (stryCov_9fa48("6512"), []);
    days.forEach(({
      day,
      even,
      odd
    }) => {
      if (stryMutAct_9fa48("6513")) {
        {}
      } else {
        stryCov_9fa48("6513");
        odd.classes.forEach(classItem => {
          if (stryMutAct_9fa48("6514")) {
            {}
          } else {
            stryCov_9fa48("6514");
            if (stryMutAct_9fa48("6518") ? parsedOddClasses.findIndex(oddClass => oddClass.id === classItem.class.id) >= 0 : stryMutAct_9fa48("6517") ? parsedOddClasses.findIndex(oddClass => oddClass.id === classItem.class.id) <= 0 : stryMutAct_9fa48("6516") ? false : stryMutAct_9fa48("6515") ? true : (stryCov_9fa48("6515", "6516", "6517", "6518"), parsedOddClasses.findIndex(stryMutAct_9fa48("6519") ? () => undefined : (stryCov_9fa48("6519"), oddClass => stryMutAct_9fa48("6522") ? oddClass.id !== classItem.class.id : stryMutAct_9fa48("6521") ? false : stryMutAct_9fa48("6520") ? true : (stryCov_9fa48("6520", "6521", "6522"), oddClass.id === classItem.class.id))) < 0)) {
              if (stryMutAct_9fa48("6523")) {
                {}
              } else {
                stryCov_9fa48("6523");
                parsedOddClasses.push(classItem.class);
              }
            }
            if (stryMutAct_9fa48("6527") ? parsedOddDays.indexOf(day) >= 0 : stryMutAct_9fa48("6526") ? parsedOddDays.indexOf(day) <= 0 : stryMutAct_9fa48("6525") ? false : stryMutAct_9fa48("6524") ? true : (stryCov_9fa48("6524", "6525", "6526", "6527"), parsedOddDays.indexOf(day) < 0)) {
              if (stryMutAct_9fa48("6528")) {
                {}
              } else {
                stryCov_9fa48("6528");
                parsedOddDays.push(day);
              }
            }
            if (stryMutAct_9fa48("6531") ? false : stryMutAct_9fa48("6530") ? true : stryMutAct_9fa48("6529") ? classItem.class.id in parsedOddArray : (stryCov_9fa48("6529", "6530", "6531"), !(classItem.class.id in parsedOddArray))) {
              if (stryMutAct_9fa48("6532")) {
                {}
              } else {
                stryCov_9fa48("6532");
                parsedOddArray[classItem.class.id] = stryMutAct_9fa48("6533") ? ["Stryker was here"] : (stryCov_9fa48("6533"), []);
              }
            }
            parsedOddArray[classItem.class.id].push(stryMutAct_9fa48("6534") ? {} : (stryCov_9fa48("6534"), {
              day,
              cards: classItem.lessons
            }));
          }
        });
        even.classes.forEach(classItem => {
          if (stryMutAct_9fa48("6535")) {
            {}
          } else {
            stryCov_9fa48("6535");
            if (stryMutAct_9fa48("6539") ? parsedEvenClasses.findIndex(evenClass => evenClass.id === classItem.class.id) >= 0 : stryMutAct_9fa48("6538") ? parsedEvenClasses.findIndex(evenClass => evenClass.id === classItem.class.id) <= 0 : stryMutAct_9fa48("6537") ? false : stryMutAct_9fa48("6536") ? true : (stryCov_9fa48("6536", "6537", "6538", "6539"), parsedEvenClasses.findIndex(stryMutAct_9fa48("6540") ? () => undefined : (stryCov_9fa48("6540"), evenClass => stryMutAct_9fa48("6543") ? evenClass.id !== classItem.class.id : stryMutAct_9fa48("6542") ? false : stryMutAct_9fa48("6541") ? true : (stryCov_9fa48("6541", "6542", "6543"), evenClass.id === classItem.class.id))) < 0)) {
              if (stryMutAct_9fa48("6544")) {
                {}
              } else {
                stryCov_9fa48("6544");
                parsedEvenClasses.push(classItem.class);
              }
            }
            if (stryMutAct_9fa48("6548") ? parsedEvenDays.indexOf(day) >= 0 : stryMutAct_9fa48("6547") ? parsedEvenDays.indexOf(day) <= 0 : stryMutAct_9fa48("6546") ? false : stryMutAct_9fa48("6545") ? true : (stryCov_9fa48("6545", "6546", "6547", "6548"), parsedEvenDays.indexOf(day) < 0)) {
              if (stryMutAct_9fa48("6549")) {
                {}
              } else {
                stryCov_9fa48("6549");
                parsedEvenDays.push(day);
              }
            }
            if (stryMutAct_9fa48("6552") ? false : stryMutAct_9fa48("6551") ? true : stryMutAct_9fa48("6550") ? classItem.class.id in parsedEvenArray : (stryCov_9fa48("6550", "6551", "6552"), !(classItem.class.id in parsedEvenArray))) {
              if (stryMutAct_9fa48("6553")) {
                {}
              } else {
                stryCov_9fa48("6553");
                parsedEvenArray[classItem.class.id] = stryMutAct_9fa48("6554") ? ["Stryker was here"] : (stryCov_9fa48("6554"), []);
              }
            }
            parsedEvenArray[classItem.class.id].push(stryMutAct_9fa48("6555") ? {} : (stryCov_9fa48("6555"), {
              day,
              cards: classItem.lessons
            }));
          }
        });
      }
    });
    const parsedOdd = stryMutAct_9fa48("6556") ? {} : (stryCov_9fa48("6556"), {
      days: parsedOddDays,
      classes: stryMutAct_9fa48("6557") ? filterClassesArray(parsedOddClasses) : (stryCov_9fa48("6557"), filterClassesArray(parsedOddClasses).sort(stryMutAct_9fa48("6558") ? () => undefined : (stryCov_9fa48("6558"), (a, b) => sortStrings(a.startTime, b.startTime)))),
      cards: parsedOddArray
    });
    const parsedEven = stryMutAct_9fa48("6559") ? {} : (stryCov_9fa48("6559"), {
      days: parsedEvenDays,
      classes: stryMutAct_9fa48("6560") ? filterClassesArray(parsedEvenClasses) : (stryCov_9fa48("6560"), filterClassesArray(parsedEvenClasses).sort(stryMutAct_9fa48("6561") ? () => undefined : (stryCov_9fa48("6561"), (a, b) => sortStrings(a.startTime, b.startTime)))),
      cards: parsedEvenArray
    });
    return stryMutAct_9fa48("6562") ? {} : (stryCov_9fa48("6562"), {
      parsedOdd,
      parsedEven
    });
  }
};
export const makeTeacherSchedule = teacherSchedule => {
  if (stryMutAct_9fa48("6563")) {
    {}
  } else {
    stryCov_9fa48("6563");
    const {
      semester,
      days,
      teacher
    } = teacherSchedule;
    let odd = {};
    let even = {};
    if (stryMutAct_9fa48("6566") ? false : stryMutAct_9fa48("6565") ? true : stryMutAct_9fa48("6564") ? isEmpty(days) : (stryCov_9fa48("6564", "6565", "6566"), !isEmpty(days))) {
      if (stryMutAct_9fa48("6567")) {
        {}
      } else {
        stryCov_9fa48("6567");
        const {
          parsedEven,
          parsedOdd
        } = mapTeacherSchedule(days);
        odd = parsedOdd;
        even = parsedEven;
      }
    }
    return stryMutAct_9fa48("6568") ? {} : (stryCov_9fa48("6568"), {
      teacher,
      semester,
      odd,
      even
    });
  }
};