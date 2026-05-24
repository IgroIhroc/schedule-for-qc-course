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
import i18n from '../i18n';
import { COMMON_AVAILABLE, COMMON_UNAVAILABLE } from '../constants/translationLabels/common';
import { getFirstLetter } from '../helper/renderTeacher';
export const getGroupsOptionsForSelect = groupOptions => {
  if (stryMutAct_9fa48("8822")) {
    {}
  } else {
    stryCov_9fa48("8822");
    if (stryMutAct_9fa48("8825") ? false : stryMutAct_9fa48("8824") ? true : stryMutAct_9fa48("8823") ? isEmpty(groupOptions) : (stryCov_9fa48("8823", "8824", "8825"), !isEmpty(groupOptions))) {
      if (stryMutAct_9fa48("8826")) {
        {}
      } else {
        stryCov_9fa48("8826");
        return groupOptions.map(item => {
          if (stryMutAct_9fa48("8827")) {
            {}
          } else {
            stryCov_9fa48("8827");
            return stryMutAct_9fa48("8828") ? {} : (stryCov_9fa48("8828"), {
              id: item.id,
              value: item.id,
              label: stryMutAct_9fa48("8829") ? `` : (stryCov_9fa48("8829"), `${item.title}`)
            });
          }
        });
      }
    }
    return groupOptions;
  }
};
export const getOptionLabelWithAvailable = option => {
  if (stryMutAct_9fa48("8830")) {
    {}
  } else {
    stryCov_9fa48("8830");
    return stryMutAct_9fa48("8831") ? `` : (stryCov_9fa48("8831"), `${option.name} (${option.available ? i18n.t(COMMON_AVAILABLE) : i18n.t(COMMON_UNAVAILABLE)})`);
  }
};
export const setDepartmentOptions = dep => {
  if (stryMutAct_9fa48("8832")) {
    {}
  } else {
    stryCov_9fa48("8832");
    return dep.map(item => {
      if (stryMutAct_9fa48("8833")) {
        {}
      } else {
        stryCov_9fa48("8833");
        return stryMutAct_9fa48("8834") ? {} : (stryCov_9fa48("8834"), {
          id: item.id,
          value: item.id,
          label: stryMutAct_9fa48("8835") ? `` : (stryCov_9fa48("8835"), `${item.name}`)
        });
      }
    });
  }
};
export const setSemesterOptions = semesters => {
  if (stryMutAct_9fa48("8836")) {
    {}
  } else {
    stryCov_9fa48("8836");
    return (stryMutAct_9fa48("8839") ? semesters === undefined : stryMutAct_9fa48("8838") ? false : stryMutAct_9fa48("8837") ? true : (stryCov_9fa48("8837", "8838", "8839"), semesters !== undefined)) ? semesters.map(item => {
      if (stryMutAct_9fa48("8840")) {
        {}
      } else {
        stryCov_9fa48("8840");
        return stryMutAct_9fa48("8841") ? {} : (stryCov_9fa48("8841"), {
          id: item.id,
          value: item.id,
          label: stryMutAct_9fa48("8842") ? `` : (stryCov_9fa48("8842"), `${item.description}`)
        });
      }
    }) : null;
  }
};
export const setOptions = enabledTeachers => {
  if (stryMutAct_9fa48("8843")) {
    {}
  } else {
    stryCov_9fa48("8843");
    return enabledTeachers.map(item => {
      if (stryMutAct_9fa48("8844")) {
        {}
      } else {
        stryCov_9fa48("8844");
        return stryMutAct_9fa48("8845") ? {} : (stryCov_9fa48("8845"), {
          id: item.id,
          value: item.id,
          label: stryMutAct_9fa48("8846") ? `` : (stryCov_9fa48("8846"), `${item.surname} ${getFirstLetter(item.name)} ${getFirstLetter(item.patronymic)}`)
        });
      }
    });
  }
};