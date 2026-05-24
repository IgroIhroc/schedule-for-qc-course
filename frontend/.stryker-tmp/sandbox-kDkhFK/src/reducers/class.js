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
import * as actionTypes from '../actions/actionsType';
const reducer = (state = stryMutAct_9fa48("6601") ? {} : (stryCov_9fa48("6601"), {
  classScheduler: stryMutAct_9fa48("6602") ? ["Stryker was here"] : (stryCov_9fa48("6602"), []),
  classSchedule: {}
}), action) => {
  if (stryMutAct_9fa48("6603")) {
    {}
  } else {
    stryCov_9fa48("6603");
    switch (action.type) {
      case actionTypes.GET_CLASS_SCHEDULE_LIST_SUCCESS:
        if (stryMutAct_9fa48("6604")) {} else {
          stryCov_9fa48("6604");
          {
            if (stryMutAct_9fa48("6605")) {
              {}
            } else {
              stryCov_9fa48("6605");
              return stryMutAct_9fa48("6606") ? {} : (stryCov_9fa48("6606"), {
                ...state,
                classScheduler: stryMutAct_9fa48("6607") ? [] : (stryCov_9fa48("6607"), [...action.classScheduler])
              });
            }
          }
        }
      case actionTypes.ADD_CLASS_SCHEDULE_SUCCESS:
        if (stryMutAct_9fa48("6608")) {} else {
          stryCov_9fa48("6608");
          {
            if (stryMutAct_9fa48("6609")) {
              {}
            } else {
              stryCov_9fa48("6609");
              return stryMutAct_9fa48("6610") ? {} : (stryCov_9fa48("6610"), {
                ...state,
                classSchedule: {},
                classScheduler: stryMutAct_9fa48("6611") ? [] : (stryCov_9fa48("6611"), [...state.classScheduler, action.classSchedule])
              });
            }
          }
        }
      case actionTypes.GET_PUBLIC_CLASS_SCHEDULE_LIST_SUCCESS:
        if (stryMutAct_9fa48("6612")) {} else {
          stryCov_9fa48("6612");
          return stryMutAct_9fa48("6613") ? {} : (stryCov_9fa48("6613"), {
            ...state,
            classScheduler: stryMutAct_9fa48("6614") ? [] : (stryCov_9fa48("6614"), [...action.classScheduler])
          });
        }
      case actionTypes.GET_CLASS_SCHEDULE_BY_ID_SUCCESS:
        if (stryMutAct_9fa48("6615")) {} else {
          stryCov_9fa48("6615");
          {
            if (stryMutAct_9fa48("6616")) {
              {}
            } else {
              stryCov_9fa48("6616");
              const one = state.classScheduler.find(stryMutAct_9fa48("6617") ? () => undefined : (stryCov_9fa48("6617"), classScheduleItem => stryMutAct_9fa48("6620") ? classScheduleItem.id !== action.id : stryMutAct_9fa48("6619") ? false : stryMutAct_9fa48("6618") ? true : (stryCov_9fa48("6618", "6619", "6620"), classScheduleItem.id === action.id)));
              return stryMutAct_9fa48("6621") ? {} : (stryCov_9fa48("6621"), {
                ...state,
                classSchedule: one
              });
            }
          }
        }
      case actionTypes.DELETE_CLASS_SCHEDULE_SUCCESS:
        if (stryMutAct_9fa48("6622")) {} else {
          stryCov_9fa48("6622");
          {
            if (stryMutAct_9fa48("6623")) {
              {}
            } else {
              stryCov_9fa48("6623");
              return stryMutAct_9fa48("6624") ? {} : (stryCov_9fa48("6624"), {
                ...state,
                classScheduler: stryMutAct_9fa48("6625") ? state.classScheduler : (stryCov_9fa48("6625"), state.classScheduler.filter(stryMutAct_9fa48("6626") ? () => undefined : (stryCov_9fa48("6626"), classScheduleItem => stryMutAct_9fa48("6629") ? classScheduleItem.id === action.id : stryMutAct_9fa48("6628") ? false : stryMutAct_9fa48("6627") ? true : (stryCov_9fa48("6627", "6628", "6629"), classScheduleItem.id !== action.id))))
              });
            }
          }
        }
      case actionTypes.UPDATE_CLASS_SCHEDULE_SUCCESS:
        if (stryMutAct_9fa48("6630")) {} else {
          stryCov_9fa48("6630");
          {
            if (stryMutAct_9fa48("6631")) {
              {}
            } else {
              stryCov_9fa48("6631");
              const classSchedulerstate = stryMutAct_9fa48("6632") ? [] : (stryCov_9fa48("6632"), [...state.classScheduler]);
              classSchedulerstate[classSchedulerstate.findIndex(stryMutAct_9fa48("6633") ? () => undefined : (stryCov_9fa48("6633"), classItem => stryMutAct_9fa48("6636") ? classItem.id !== action.classSchedule.id : stryMutAct_9fa48("6635") ? false : stryMutAct_9fa48("6634") ? true : (stryCov_9fa48("6634", "6635", "6636"), classItem.id === action.classSchedule.id)))] = action.classSchedule;
              return stryMutAct_9fa48("6637") ? {} : (stryCov_9fa48("6637"), {
                ...state,
                classSchedule: {},
                classScheduler: stryMutAct_9fa48("6638") ? [] : (stryCov_9fa48("6638"), [...classSchedulerstate])
              });
            }
          }
        }
      case actionTypes.CLEAR_CLASS_SCHEDULE_SUCCESS:
        if (stryMutAct_9fa48("6639")) {} else {
          stryCov_9fa48("6639");
          {
            if (stryMutAct_9fa48("6640")) {
              {}
            } else {
              stryCov_9fa48("6640");
              return stryMutAct_9fa48("6641") ? {} : (stryCov_9fa48("6641"), {
                ...state,
                classSchedule: {}
              });
            }
          }
        }
      default:
        if (stryMutAct_9fa48("6642")) {} else {
          stryCov_9fa48("6642");
          return state;
        }
    }
  }
};
export default reducer;