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
const initialState = stryMutAct_9fa48("7167") ? {} : (stryCov_9fa48("7167"), {
  subjects: stryMutAct_9fa48("7168") ? ["Stryker was here"] : (stryCov_9fa48("7168"), []),
  subject: {},
  disabledSubjects: stryMutAct_9fa48("7169") ? ["Stryker was here"] : (stryCov_9fa48("7169"), [])
});
const reducer = (state = initialState, action) => {
  if (stryMutAct_9fa48("7170")) {
    {}
  } else {
    stryCov_9fa48("7170");
    switch (action.type) {
      case actionTypes.ADD_SUBJECT:
        if (stryMutAct_9fa48("7171")) {} else {
          stryCov_9fa48("7171");
          return stryMutAct_9fa48("7172") ? {} : (stryCov_9fa48("7172"), {
            ...state,
            subjects: state.subjects.concat(action.result)
          });
        }
      case actionTypes.DELETE_SUBJECT:
        if (stryMutAct_9fa48("7173")) {} else {
          stryCov_9fa48("7173");
          {
            if (stryMutAct_9fa48("7174")) {
              {}
            } else {
              stryCov_9fa48("7174");
              const subjects = stryMutAct_9fa48("7175") ? state.subjects : (stryCov_9fa48("7175"), state.subjects.filter(stryMutAct_9fa48("7176") ? () => undefined : (stryCov_9fa48("7176"), subject => stryMutAct_9fa48("7179") ? subject.id === action.result : stryMutAct_9fa48("7178") ? false : stryMutAct_9fa48("7177") ? true : (stryCov_9fa48("7177", "7178", "7179"), subject.id !== action.result))));
              return stryMutAct_9fa48("7180") ? {} : (stryCov_9fa48("7180"), {
                ...state,
                subjects
              });
            }
          }
        }
      case actionTypes.SHOW_ALL_SUBJECTS:
        if (stryMutAct_9fa48("7181")) {} else {
          stryCov_9fa48("7181");
          return stryMutAct_9fa48("7182") ? {} : (stryCov_9fa48("7182"), {
            ...state,
            subjects: action.result
          });
        }
      case actionTypes.SET_DISABLED_SUBJECTS:
        if (stryMutAct_9fa48("7183")) {} else {
          stryCov_9fa48("7183");
          return stryMutAct_9fa48("7184") ? {} : (stryCov_9fa48("7184"), {
            ...state,
            disabledSubjects: action.result
          });
        }
      case actionTypes.SELECT_SUBJECT:
        if (stryMutAct_9fa48("7185")) {} else {
          stryCov_9fa48("7185");
          {
            if (stryMutAct_9fa48("7186")) {
              {}
            } else {
              stryCov_9fa48("7186");
              let subject = state.subjects.find(stryMutAct_9fa48("7187") ? () => undefined : (stryCov_9fa48("7187"), subj => stryMutAct_9fa48("7190") ? subj.id !== action.result : stryMutAct_9fa48("7189") ? false : stryMutAct_9fa48("7188") ? true : (stryCov_9fa48("7188", "7189", "7190"), subj.id === action.result)));
              if (stryMutAct_9fa48("7193") ? false : stryMutAct_9fa48("7192") ? true : stryMutAct_9fa48("7191") ? subject : (stryCov_9fa48("7191", "7192", "7193"), !subject)) {
                if (stryMutAct_9fa48("7194")) {
                  {}
                } else {
                  stryCov_9fa48("7194");
                  subject = stryMutAct_9fa48("7195") ? {} : (stryCov_9fa48("7195"), {
                    id: null
                  });
                }
              }
              return stryMutAct_9fa48("7196") ? {} : (stryCov_9fa48("7196"), {
                ...state,
                subject
              });
            }
          }
        }
      case actionTypes.UPDATE_SUBJECT:
        if (stryMutAct_9fa48("7197")) {} else {
          stryCov_9fa48("7197");
          {
            if (stryMutAct_9fa48("7198")) {
              {}
            } else {
              stryCov_9fa48("7198");
              const subjectIndex = state.subjects.findIndex(stryMutAct_9fa48("7199") ? () => undefined : (stryCov_9fa48("7199"), ({
                id
              }) => stryMutAct_9fa48("7202") ? id !== action.result.id : stryMutAct_9fa48("7201") ? false : stryMutAct_9fa48("7200") ? true : (stryCov_9fa48("7200", "7201", "7202"), id === action.result.id)));
              const subjects = stryMutAct_9fa48("7203") ? [] : (stryCov_9fa48("7203"), [...state.subjects]);
              subjects[subjectIndex] = stryMutAct_9fa48("7204") ? {} : (stryCov_9fa48("7204"), {
                ...subjects[subjectIndex],
                ...action.result
              });
              return stryMutAct_9fa48("7205") ? {} : (stryCov_9fa48("7205"), {
                ...state,
                subjects,
                subject: {}
              });
            }
          }
        }
      case actionTypes.CLEAR_SUBJECT:
        if (stryMutAct_9fa48("7206")) {} else {
          stryCov_9fa48("7206");
          return stryMutAct_9fa48("7207") ? {} : (stryCov_9fa48("7207"), {
            ...state,
            subject: {}
          });
        }
      default:
        if (stryMutAct_9fa48("7208")) {} else {
          stryCov_9fa48("7208");
          return state;
        }
    }
  }
};
export default reducer;