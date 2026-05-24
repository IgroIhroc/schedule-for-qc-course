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
const initialState = stryMutAct_9fa48("6822") ? {} : (stryCov_9fa48("6822"), {
  loading: stryMutAct_9fa48("6823") ? false : (stryCov_9fa48("6823"), true),
  authLoading: stryMutAct_9fa48("6824") ? true : (stryCov_9fa48("6824"), false),
  scheduleLoading: stryMutAct_9fa48("6825") ? true : (stryCov_9fa48("6825"), false),
  semesterLoading: stryMutAct_9fa48("6826") ? true : (stryCov_9fa48("6826"), false),
  studentsLoading: stryMutAct_9fa48("6827") ? true : (stryCov_9fa48("6827"), false),
  mainScheduleLoading: stryMutAct_9fa48("6828") ? true : (stryCov_9fa48("6828"), false),
  roomsLoading: stryMutAct_9fa48("6829") ? true : (stryCov_9fa48("6829"), false),
  scheduleOperationLoading: stryMutAct_9fa48("6830") ? true : (stryCov_9fa48("6830"), false)
});
const reducer = (state = initialState, action) => {
  if (stryMutAct_9fa48("6831")) {
    {}
  } else {
    stryCov_9fa48("6831");
    switch (action.type) {
      case actionTypes.SET_LOADING_INDICATOR:
        if (stryMutAct_9fa48("6832")) {} else {
          stryCov_9fa48("6832");
          return stryMutAct_9fa48("6833") ? {} : (stryCov_9fa48("6833"), {
            ...state,
            loading: action.payload
          });
        }
      case actionTypes.SET_AUTH_LOADING_INDICATOR:
        if (stryMutAct_9fa48("6834")) {} else {
          stryCov_9fa48("6834");
          return stryMutAct_9fa48("6835") ? {} : (stryCov_9fa48("6835"), {
            ...state,
            authLoading: action.payload
          });
        }
      case actionTypes.SET_SCHEDULE_LOADING_INDICATOR:
        if (stryMutAct_9fa48("6836")) {} else {
          stryCov_9fa48("6836");
          return stryMutAct_9fa48("6837") ? {} : (stryCov_9fa48("6837"), {
            ...state,
            scheduleLoading: action.payload
          });
        }
      case actionTypes.SET_MAIN_SCHEDULE_LOADING_INDICATOR:
        if (stryMutAct_9fa48("6838")) {} else {
          stryCov_9fa48("6838");
          return stryMutAct_9fa48("6839") ? {} : (stryCov_9fa48("6839"), {
            ...state,
            mainScheduleLoading: action.payload
          });
        }
      case actionTypes.SET_SEMESTER_LOADING_INDICATOR:
        if (stryMutAct_9fa48("6840")) {} else {
          stryCov_9fa48("6840");
          return stryMutAct_9fa48("6841") ? {} : (stryCov_9fa48("6841"), {
            ...state,
            semesterLoading: action.payload
          });
        }
      case actionTypes.SET_STUDENTS_LOADING_INDICATOR:
        if (stryMutAct_9fa48("6842")) {} else {
          stryCov_9fa48("6842");
          return stryMutAct_9fa48("6843") ? {} : (stryCov_9fa48("6843"), {
            ...state,
            studentsLoading: action.payload
          });
        }
      case actionTypes.SET_ROOMS_LOADING_INDICATOR:
        if (stryMutAct_9fa48("6844")) {} else {
          stryCov_9fa48("6844");
          return stryMutAct_9fa48("6845") ? {} : (stryCov_9fa48("6845"), {
            ...state,
            roomsLoading: action.payload
          });
        }
      case actionTypes.SET_SCHEDULE_OPERATION_LOADING:
        if (stryMutAct_9fa48("6846")) {} else {
          stryCov_9fa48("6846");
          return stryMutAct_9fa48("6847") ? {} : (stryCov_9fa48("6847"), {
            ...state,
            scheduleOperationLoading: action.payload
          });
        }
      default:
        if (stryMutAct_9fa48("6848")) {} else {
          stryCov_9fa48("6848");
          return state;
        }
    }
  }
};
export default reducer;