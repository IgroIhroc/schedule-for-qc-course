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
const mapFullSchedule = (schedule, semesterDays, semesterClasses) => {
  if (stryMutAct_9fa48("6422")) {
    {}
  } else {
    stryCov_9fa48("6422");
    const parsedGroupList = schedule.map(stryMutAct_9fa48("6423") ? () => undefined : (stryCov_9fa48("6423"), ({
      group
    }) => group));
    const parsedResultArray = stryMutAct_9fa48("6424") ? ["Stryker was here"] : (stryCov_9fa48("6424"), []);
    semesterDays.forEach(day => {
      if (stryMutAct_9fa48("6425")) {
        {}
      } else {
        stryCov_9fa48("6425");
        const tempClassesArray = stryMutAct_9fa48("6426") ? ["Stryker was here"] : (stryCov_9fa48("6426"), []);
        semesterClasses.forEach(classItem => {
          if (stryMutAct_9fa48("6427")) {
            {}
          } else {
            stryCov_9fa48("6427");
            const tepmOddCardsArray = stryMutAct_9fa48("6428") ? ["Stryker was here"] : (stryCov_9fa48("6428"), []);
            const tempEvenCardsArray = stryMutAct_9fa48("6429") ? ["Stryker was here"] : (stryCov_9fa48("6429"), []);
            parsedGroupList.forEach(groupItem => {
              if (stryMutAct_9fa48("6430")) {
                {}
              } else {
                stryCov_9fa48("6430");
                const groupFull = schedule.find(stryMutAct_9fa48("6431") ? () => undefined : (stryCov_9fa48("6431"), groupFullIterate => stryMutAct_9fa48("6434") ? groupFullIterate.group.id !== groupItem.id : stryMutAct_9fa48("6433") ? false : stryMutAct_9fa48("6432") ? true : (stryCov_9fa48("6432", "6433", "6434"), groupFullIterate.group.id === groupItem.id)));
                const dayFull = groupFull.days.find(stryMutAct_9fa48("6435") ? () => undefined : (stryCov_9fa48("6435"), dayFullIterate => stryMutAct_9fa48("6438") ? dayFullIterate.day !== day : stryMutAct_9fa48("6437") ? false : stryMutAct_9fa48("6436") ? true : (stryCov_9fa48("6436", "6437", "6438"), dayFullIterate.day === day)));
                const classFull = dayFull.classes.find(stryMutAct_9fa48("6439") ? () => undefined : (stryCov_9fa48("6439"), dayFullIterable => stryMutAct_9fa48("6442") ? dayFullIterable.class.id !== classItem.id : stryMutAct_9fa48("6441") ? false : stryMutAct_9fa48("6440") ? true : (stryCov_9fa48("6440", "6441", "6442"), dayFullIterable.class.id === classItem.id)));
                tepmOddCardsArray.push(stryMutAct_9fa48("6443") ? {} : (stryCov_9fa48("6443"), {
                  group: groupItem,
                  card: classFull.weeks.odd
                }));
                tempEvenCardsArray.push(stryMutAct_9fa48("6444") ? {} : (stryCov_9fa48("6444"), {
                  group: groupItem,
                  card: classFull.weeks.even
                }));
              }
            });
            tempClassesArray.push(stryMutAct_9fa48("6445") ? {} : (stryCov_9fa48("6445"), {
              class: classItem,
              cards: stryMutAct_9fa48("6446") ? {} : (stryCov_9fa48("6446"), {
                odd: tepmOddCardsArray,
                even: tempEvenCardsArray
              })
            }));
          }
        });
        parsedResultArray.push(stryMutAct_9fa48("6447") ? {} : (stryCov_9fa48("6447"), {
          day,
          classes: tempClassesArray
        }));
      }
    });
    return stryMutAct_9fa48("6448") ? {} : (stryCov_9fa48("6448"), {
      parsedGroupList,
      parsedResultArray
    });
  }
};
export const makeFullSchedule = fullSchedule => {
  if (stryMutAct_9fa48("6449")) {
    {}
  } else {
    stryCov_9fa48("6449");
    const {
      schedule,
      semester
    } = fullSchedule;
    const groupsCount = stryMutAct_9fa48("6452") ? schedule?.length && 0 : stryMutAct_9fa48("6451") ? false : stryMutAct_9fa48("6450") ? true : (stryCov_9fa48("6450", "6451", "6452"), (stryMutAct_9fa48("6453") ? schedule.length : (stryCov_9fa48("6453"), schedule?.length)) || 0);
    const semesterDays = stryMutAct_9fa48("6456") ? semester?.semester_days && [] : stryMutAct_9fa48("6455") ? false : stryMutAct_9fa48("6454") ? true : (stryCov_9fa48("6454", "6455", "6456"), (stryMutAct_9fa48("6457") ? semester.semester_days : (stryCov_9fa48("6457"), semester?.semester_days)) || (stryMutAct_9fa48("6458") ? ["Stryker was here"] : (stryCov_9fa48("6458"), [])));
    const semesterClasses = stryMutAct_9fa48("6461") ? semester?.semester_classes && [] : stryMutAct_9fa48("6460") ? false : stryMutAct_9fa48("6459") ? true : (stryCov_9fa48("6459", "6460", "6461"), (stryMutAct_9fa48("6462") ? semester.semester_classes : (stryCov_9fa48("6462"), semester?.semester_classes)) || (stryMutAct_9fa48("6463") ? ["Stryker was here"] : (stryCov_9fa48("6463"), [])));
    let groupList = stryMutAct_9fa48("6464") ? ["Stryker was here"] : (stryCov_9fa48("6464"), []);
    let resultArray = stryMutAct_9fa48("6465") ? ["Stryker was here"] : (stryCov_9fa48("6465"), []);
    if (stryMutAct_9fa48("6468") ? false : stryMutAct_9fa48("6467") ? true : stryMutAct_9fa48("6466") ? isEmpty(schedule) : (stryCov_9fa48("6466", "6467", "6468"), !isEmpty(schedule))) {
      if (stryMutAct_9fa48("6469")) {
        {}
      } else {
        stryCov_9fa48("6469");
        const {
          parsedGroupList,
          parsedResultArray
        } = mapFullSchedule(schedule, semesterDays, semesterClasses);
        groupList = parsedGroupList;
        resultArray = parsedResultArray;
      }
    }
    return stryMutAct_9fa48("6470") ? {} : (stryCov_9fa48("6470"), {
      semester,
      schedule,
      semesterClasses,
      semesterDays,
      groupsCount,
      groupList,
      resultArray
    });
  }
};