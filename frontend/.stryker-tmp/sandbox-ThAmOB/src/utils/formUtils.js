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
import { daysUppercase } from '../constants/schedule/days';
import i18n from '../i18n';
import { SEMESTER_SERVICE_NOT_AS_BEGIN_OR_END } from '../constants/translationLabels/serviceMessages';
export const initialCheckboxesStateForDays = daysUppercase.reduce((init, item) => {
  if (stryMutAct_9fa48("8782")) {
    {}
  } else {
    stryCov_9fa48("8782");
    const isCheckedDays = init;
    isCheckedDays[item] = stryMutAct_9fa48("8783") ? true : (stryCov_9fa48("8783"), false);
    return isCheckedDays;
  }
}, {});
export const initialCheckboxesStateForClasses = classScheduler => {
  if (stryMutAct_9fa48("8784")) {
    {}
  } else {
    stryCov_9fa48("8784");
    return classScheduler.reduce((init, classItem) => {
      if (stryMutAct_9fa48("8785")) {
        {}
      } else {
        stryCov_9fa48("8785");
        const isCheckedClass = init;
        isCheckedClass[stryMutAct_9fa48("8786") ? `` : (stryCov_9fa48("8786"), `${classItem.id}`)] = stryMutAct_9fa48("8787") ? true : (stryCov_9fa48("8787"), false);
        return isCheckedClass;
      }
    }, {});
  }
};
export const createClasslabel = (lessons, classItem) => {
  if (stryMutAct_9fa48("8788")) {
    {}
  } else {
    stryCov_9fa48("8788");
    const item = lessons.find(stryMutAct_9fa48("8789") ? () => undefined : (stryCov_9fa48("8789"), lesson => stryMutAct_9fa48("8792") ? lesson.id !== +classItem : stryMutAct_9fa48("8791") ? false : stryMutAct_9fa48("8790") ? true : (stryCov_9fa48("8790", "8791", "8792"), lesson.id === (stryMutAct_9fa48("8793") ? -classItem : (stryCov_9fa48("8793"), +classItem)))));
    return stryMutAct_9fa48("8794") ? `` : (stryCov_9fa48("8794"), `${item.class_name} (${item.startTime}-${item.endTime})`);
  }
};
export const checkSemesterYears = (endDay, startDay, year) => {
  if (stryMutAct_9fa48("8795")) {
    {}
  } else {
    stryCov_9fa48("8795");
    const dateEndYear = stryMutAct_9fa48("8796") ? endDay : (stryCov_9fa48("8796"), endDay.substring(stryMutAct_9fa48("8797") ? endDay.length + 4 : (stryCov_9fa48("8797"), endDay.length - 4)));
    const dateStartYear = stryMutAct_9fa48("8798") ? startDay : (stryCov_9fa48("8798"), startDay.substring(stryMutAct_9fa48("8799") ? startDay.length + 4 : (stryCov_9fa48("8799"), startDay.length - 4)));
    let conf = stryMutAct_9fa48("8800") ? false : (stryCov_9fa48("8800"), true);
    if (stryMutAct_9fa48("8803") ? year !== +dateEndYear && year !== +dateStartYear : stryMutAct_9fa48("8802") ? false : stryMutAct_9fa48("8801") ? true : (stryCov_9fa48("8801", "8802", "8803"), (stryMutAct_9fa48("8805") ? year === +dateEndYear : stryMutAct_9fa48("8804") ? false : (stryCov_9fa48("8804", "8805"), year !== (stryMutAct_9fa48("8806") ? -dateEndYear : (stryCov_9fa48("8806"), +dateEndYear)))) || (stryMutAct_9fa48("8808") ? year === +dateStartYear : stryMutAct_9fa48("8807") ? false : (stryCov_9fa48("8807", "8808"), year !== (stryMutAct_9fa48("8809") ? -dateStartYear : (stryCov_9fa48("8809"), +dateStartYear)))))) {
      if (stryMutAct_9fa48("8810")) {
        {}
      } else {
        stryCov_9fa48("8810");
        conf = window.confirm(i18n.t(SEMESTER_SERVICE_NOT_AS_BEGIN_OR_END));
      }
    }
    return conf;
  }
};