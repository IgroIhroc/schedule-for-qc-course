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
const initialState = stryMutAct_9fa48("7209") ? {} : (stryCov_9fa48("7209"), {
  lessons: stryMutAct_9fa48("7210") ? ["Stryker was here"] : (stryCov_9fa48("7210"), []),
  selectedTeacher: null,
  loading: stryMutAct_9fa48("7211") ? true : (stryCov_9fa48("7211"), false)
});
const teacherLessonsReducer = (state = initialState, action) => {
  if (stryMutAct_9fa48("7212")) {
    {}
  } else {
    stryCov_9fa48("7212");
    switch (action.type) {
      case actionTypes.GET_LESSONS_BY_TEACHER_START:
        if (stryMutAct_9fa48("7213")) {} else {
          stryCov_9fa48("7213");
          return stryMutAct_9fa48("7214") ? {} : (stryCov_9fa48("7214"), {
            ...state,
            loading: stryMutAct_9fa48("7215") ? false : (stryCov_9fa48("7215"), true)
          });
        }
      case actionTypes.GET_LESSONS_BY_TEACHER_SUCCESS:
        if (stryMutAct_9fa48("7216")) {} else {
          stryCov_9fa48("7216");
          return stryMutAct_9fa48("7217") ? {} : (stryCov_9fa48("7217"), {
            ...state,
            lessons: action.lessons,
            selectedTeacher: action.teacher,
            loading: stryMutAct_9fa48("7218") ? true : (stryCov_9fa48("7218"), false)
          });
        }
      case actionTypes.UPDATE_LESSONS_LINK_SUCCESS:
        if (stryMutAct_9fa48("7219")) {} else {
          stryCov_9fa48("7219");
          return stryMutAct_9fa48("7220") ? {} : (stryCov_9fa48("7220"), {
            ...state,
            lessons: action.lessons
          });
        }
      case actionTypes.CLEAR_TEACHER_LESSONS:
        if (stryMutAct_9fa48("7221")) {} else {
          stryCov_9fa48("7221");
          return stryMutAct_9fa48("7222") ? {} : (stryCov_9fa48("7222"), {
            ...state,
            lessons: stryMutAct_9fa48("7223") ? ["Stryker was here"] : (stryCov_9fa48("7223"), []),
            selectedTeacher: null
          });
        }
      case actionTypes.SET_TEACHER_LESSONS_LOADING:
        if (stryMutAct_9fa48("7224")) {} else {
          stryCov_9fa48("7224");
          return stryMutAct_9fa48("7225") ? {} : (stryCov_9fa48("7225"), {
            ...state,
            loading: action.loading
          });
        }
      default:
        if (stryMutAct_9fa48("7226")) {} else {
          stryCov_9fa48("7226");
          return state;
        }
    }
  }
};
export default teacherLessonsReducer;