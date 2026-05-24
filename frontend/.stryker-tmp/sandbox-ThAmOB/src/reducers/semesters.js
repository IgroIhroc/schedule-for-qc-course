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
const initialState = stryMutAct_9fa48("7036") ? {} : (stryCov_9fa48("7036"), {
  semesters: stryMutAct_9fa48("7037") ? ["Stryker was here"] : (stryCov_9fa48("7037"), []),
  semester: {},
  archivedSemesters: stryMutAct_9fa48("7038") ? ["Stryker was here"] : (stryCov_9fa48("7038"), [])
});
const reducer = (state = initialState, action) => {
  if (stryMutAct_9fa48("7039")) {
    {}
  } else {
    stryCov_9fa48("7039");
    switch (action.type) {
      case actionTypes.ADD_SEMESTER_SUCCESS:
        if (stryMutAct_9fa48("7040")) {} else {
          stryCov_9fa48("7040");
          return stryMutAct_9fa48("7041") ? {} : (stryCov_9fa48("7041"), {
            ...state,
            semesters: state.semesters.concat(action.item),
            semester: {}
          });
        }
      case actionTypes.DELETE_SEMESTER_SUCCESS:
        if (stryMutAct_9fa48("7042")) {} else {
          stryCov_9fa48("7042");
          {
            if (stryMutAct_9fa48("7043")) {
              {}
            } else {
              stryCov_9fa48("7043");
              const semesters = stryMutAct_9fa48("7044") ? state.semesters : (stryCov_9fa48("7044"), state.semesters.filter(stryMutAct_9fa48("7045") ? () => undefined : (stryCov_9fa48("7045"), semester => stryMutAct_9fa48("7048") ? semester.id === action.semesterId : stryMutAct_9fa48("7047") ? false : stryMutAct_9fa48("7046") ? true : (stryCov_9fa48("7046", "7047", "7048"), semester.id !== action.semesterId))));
              return stryMutAct_9fa48("7049") ? {} : (stryCov_9fa48("7049"), {
                ...state,
                semesters
              });
            }
          }
        }
      case actionTypes.SHOW_ALL_SEMESTERS_SUCCESS:
        if (stryMutAct_9fa48("7050")) {} else {
          stryCov_9fa48("7050");
          return stryMutAct_9fa48("7051") ? {} : (stryCov_9fa48("7051"), {
            ...state,
            semesters: stryMutAct_9fa48("7052") ? action.semesters : (stryCov_9fa48("7052"), action.semesters.sort(stryMutAct_9fa48("7053") ? () => undefined : (stryCov_9fa48("7053"), (a, b) => stryMutAct_9fa48("7054") ? a.year + b.year : (stryCov_9fa48("7054"), a.year - b.year)))),
            semester: state.semester
          });
        }
      case actionTypes.SET_DISABLED_SEMESTERS_SUCCESS:
        if (stryMutAct_9fa48("7055")) {} else {
          stryCov_9fa48("7055");
          return stryMutAct_9fa48("7056") ? {} : (stryCov_9fa48("7056"), {
            ...state,
            disabledSemesters: action.semesters
          });
        }
      case actionTypes.SET_ARCHIVED_SEMESTERS_SUCCESS:
        if (stryMutAct_9fa48("7057")) {} else {
          stryCov_9fa48("7057");
          return stryMutAct_9fa48("7058") ? {} : (stryCov_9fa48("7058"), {
            ...state,
            archivedSemesters: action.semesters
          });
        }
      case actionTypes.SELECT_SEMESTER_SUCCESS:
        if (stryMutAct_9fa48("7059")) {} else {
          stryCov_9fa48("7059");
          {
            if (stryMutAct_9fa48("7060")) {
              {}
            } else {
              stryCov_9fa48("7060");
              let selectSemester = state.semesters.find(stryMutAct_9fa48("7061") ? () => undefined : (stryCov_9fa48("7061"), semester => stryMutAct_9fa48("7064") ? semester.id !== action.semesterId : stryMutAct_9fa48("7063") ? false : stryMutAct_9fa48("7062") ? true : (stryCov_9fa48("7062", "7063", "7064"), semester.id === action.semesterId)));
              if (stryMutAct_9fa48("7067") ? false : stryMutAct_9fa48("7066") ? true : stryMutAct_9fa48("7065") ? selectSemester : (stryCov_9fa48("7065", "7066", "7067"), !selectSemester)) {
                if (stryMutAct_9fa48("7068")) {
                  {}
                } else {
                  stryCov_9fa48("7068");
                  selectSemester = {};
                }
              }
              return stryMutAct_9fa48("7069") ? {} : (stryCov_9fa48("7069"), {
                ...state,
                semester: selectSemester
              });
            }
          }
        }
      case actionTypes.UPDATE_SEMESTER_SUCCESS:
        if (stryMutAct_9fa48("7070")) {} else {
          stryCov_9fa48("7070");
          {
            if (stryMutAct_9fa48("7071")) {
              {}
            } else {
              stryCov_9fa48("7071");
              const semesterIndex = state.semesters.findIndex(stryMutAct_9fa48("7072") ? () => undefined : (stryCov_9fa48("7072"), ({
                id
              }) => stryMutAct_9fa48("7075") ? id !== action.semester.id : stryMutAct_9fa48("7074") ? false : stryMutAct_9fa48("7073") ? true : (stryCov_9fa48("7073", "7074", "7075"), id === action.semester.id)));
              const semesters = stryMutAct_9fa48("7076") ? [] : (stryCov_9fa48("7076"), [...state.semesters]);
              semesters[semesterIndex] = stryMutAct_9fa48("7077") ? {} : (stryCov_9fa48("7077"), {
                ...semesters[semesterIndex],
                ...action.semester
              });
              return stryMutAct_9fa48("7078") ? {} : (stryCov_9fa48("7078"), {
                ...state,
                semesters,
                semester: {}
              });
            }
          }
        }
      case actionTypes.MOVE_SEMESTER_TO_ARCHIVE_SUCCESS:
        if (stryMutAct_9fa48("7079")) {} else {
          stryCov_9fa48("7079");
          {
            if (stryMutAct_9fa48("7080")) {
              {}
            } else {
              stryCov_9fa48("7080");
              const archivedSemester = state.semesters.find(stryMutAct_9fa48("7081") ? () => undefined : (stryCov_9fa48("7081"), semester => stryMutAct_9fa48("7084") ? semester.id !== action.result : stryMutAct_9fa48("7083") ? false : stryMutAct_9fa48("7082") ? true : (stryCov_9fa48("7082", "7083", "7084"), semester.id === action.result)));
              const semesters = stryMutAct_9fa48("7085") ? state.semesters : (stryCov_9fa48("7085"), state.semesters.filter(stryMutAct_9fa48("7086") ? () => undefined : (stryCov_9fa48("7086"), semester => stryMutAct_9fa48("7089") ? semester.id === action.semesterId : stryMutAct_9fa48("7088") ? false : stryMutAct_9fa48("7087") ? true : (stryCov_9fa48("7087", "7088", "7089"), semester.id !== action.semesterId))));
              return stryMutAct_9fa48("7090") ? {} : (stryCov_9fa48("7090"), {
                ...state,
                semesters,
                archivedSemesters: stryMutAct_9fa48("7091") ? [] : (stryCov_9fa48("7091"), [...state.archivedSemesters, archivedSemester])
              });
            }
          }
        }
      case actionTypes.CLEAR_SEMESTER_SUCCESS:
        if (stryMutAct_9fa48("7092")) {} else {
          stryCov_9fa48("7092");
          return stryMutAct_9fa48("7093") ? {} : (stryCov_9fa48("7093"), {
            ...state,
            semester: {}
          });
        }
      default:
        if (stryMutAct_9fa48("7094")) {} else {
          stryCov_9fa48("7094");
          return state;
        }
    }
  }
};
export default reducer;