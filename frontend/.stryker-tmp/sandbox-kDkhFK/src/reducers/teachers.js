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
function compare(a, b) {
  if (stryMutAct_9fa48("7227")) {
    {}
  } else {
    stryCov_9fa48("7227");
    let comparison = 0;
    if (stryMutAct_9fa48("7231") ? a.surname <= b.surname : stryMutAct_9fa48("7230") ? a.surname >= b.surname : stryMutAct_9fa48("7229") ? false : stryMutAct_9fa48("7228") ? true : (stryCov_9fa48("7228", "7229", "7230", "7231"), a.surname > b.surname)) {
      if (stryMutAct_9fa48("7232")) {
        {}
      } else {
        stryCov_9fa48("7232");
        comparison = 1;
      }
    } else if (stryMutAct_9fa48("7236") ? a.surname >= b.surname : stryMutAct_9fa48("7235") ? a.surname <= b.surname : stryMutAct_9fa48("7234") ? false : stryMutAct_9fa48("7233") ? true : (stryCov_9fa48("7233", "7234", "7235", "7236"), a.surname < b.surname)) {
      if (stryMutAct_9fa48("7237")) {
        {}
      } else {
        stryCov_9fa48("7237");
        comparison = stryMutAct_9fa48("7238") ? +1 : (stryCov_9fa48("7238"), -1);
      }
    }
    return comparison;
  }
}
const reducer = (state = stryMutAct_9fa48("7239") ? {} : (stryCov_9fa48("7239"), {
  teachers: stryMutAct_9fa48("7240") ? ["Stryker was here"] : (stryCov_9fa48("7240"), []),
  teacher: {},
  disabledTeachers: stryMutAct_9fa48("7241") ? ["Stryker was here"] : (stryCov_9fa48("7241"), [])
}), action) => {
  if (stryMutAct_9fa48("7242")) {
    {}
  } else {
    stryCov_9fa48("7242");
    switch (action.type) {
      case actionTypes.ADD_TEACHER_SUCCESS:
        if (stryMutAct_9fa48("7243")) {} else {
          stryCov_9fa48("7243");
          return stryMutAct_9fa48("7244") ? {} : (stryCov_9fa48("7244"), {
            ...state,
            teachers: stryMutAct_9fa48("7245") ? [...state.teachers, action.teacher] : (stryCov_9fa48("7245"), (stryMutAct_9fa48("7246") ? [] : (stryCov_9fa48("7246"), [...state.teachers, action.teacher])).sort(compare))
          });
        }
      case actionTypes.DELETE_TEACHER_SUCCESS:
        if (stryMutAct_9fa48("7247")) {} else {
          stryCov_9fa48("7247");
          {
            if (stryMutAct_9fa48("7248")) {
              {}
            } else {
              stryCov_9fa48("7248");
              if (stryMutAct_9fa48("7250") ? false : stryMutAct_9fa48("7249") ? true : (stryCov_9fa48("7249", "7250"), action.disabledStatus)) {
                if (stryMutAct_9fa48("7251")) {
                  {}
                } else {
                  stryCov_9fa48("7251");
                  return stryMutAct_9fa48("7252") ? {} : (stryCov_9fa48("7252"), {
                    ...state,
                    disabledTeachers: stryMutAct_9fa48("7253") ? [] : (stryCov_9fa48("7253"), [...(stryMutAct_9fa48("7254") ? state.disabledTeachers : (stryCov_9fa48("7254"), state.disabledTeachers.filter(stryMutAct_9fa48("7255") ? () => undefined : (stryCov_9fa48("7255"), disabledTeacher => stryMutAct_9fa48("7258") ? disabledTeacher.id === action.id : stryMutAct_9fa48("7257") ? false : stryMutAct_9fa48("7256") ? true : (stryCov_9fa48("7256", "7257", "7258"), disabledTeacher.id !== action.id)))))])
                  });
                }
              }
              return stryMutAct_9fa48("7259") ? {} : (stryCov_9fa48("7259"), {
                ...state,
                teachers: stryMutAct_9fa48("7260") ? [] : (stryCov_9fa48("7260"), [...(stryMutAct_9fa48("7261") ? state.teachers : (stryCov_9fa48("7261"), state.teachers.filter(stryMutAct_9fa48("7262") ? () => undefined : (stryCov_9fa48("7262"), teacher => stryMutAct_9fa48("7265") ? teacher.id === action.id : stryMutAct_9fa48("7264") ? false : stryMutAct_9fa48("7263") ? true : (stryCov_9fa48("7263", "7264", "7265"), teacher.id !== action.id)))))])
              });
            }
          }
        }
      case actionTypes.SET_TEACHER:
        if (stryMutAct_9fa48("7266")) {} else {
          stryCov_9fa48("7266");
          return stryMutAct_9fa48("7267") ? {} : (stryCov_9fa48("7267"), {
            ...state,
            teacher: action.teacher
          });
        }
      case actionTypes.SELECT_TEACHER:
        if (stryMutAct_9fa48("7268")) {} else {
          stryCov_9fa48("7268");
          {
            if (stryMutAct_9fa48("7269")) {
              {}
            } else {
              stryCov_9fa48("7269");
              let teacher = state.teachers.find(stryMutAct_9fa48("7270") ? () => undefined : (stryCov_9fa48("7270"), teach => stryMutAct_9fa48("7273") ? teach.id !== action.teacher : stryMutAct_9fa48("7272") ? false : stryMutAct_9fa48("7271") ? true : (stryCov_9fa48("7271", "7272", "7273"), teach.id === action.teacher)));
              if (stryMutAct_9fa48("7276") ? false : stryMutAct_9fa48("7275") ? true : stryMutAct_9fa48("7274") ? teacher : (stryCov_9fa48("7274", "7275", "7276"), !teacher)) {
                if (stryMutAct_9fa48("7277")) {
                  {}
                } else {
                  stryCov_9fa48("7277");
                  teacher = stryMutAct_9fa48("7278") ? {} : (stryCov_9fa48("7278"), {
                    id: null
                  });
                }
              }
              return stryMutAct_9fa48("7279") ? {} : (stryCov_9fa48("7279"), {
                ...state,
                teacher
              });
            }
          }
        }
      case actionTypes.UPDATE_TEACHER_SUCCESS:
        if (stryMutAct_9fa48("7280")) {} else {
          stryCov_9fa48("7280");
          {
            if (stryMutAct_9fa48("7281")) {
              {}
            } else {
              stryCov_9fa48("7281");
              const teacherIndex = state.teachers.findIndex(stryMutAct_9fa48("7282") ? () => undefined : (stryCov_9fa48("7282"), ({
                id
              }) => stryMutAct_9fa48("7285") ? id !== action.teacher.id : stryMutAct_9fa48("7284") ? false : stryMutAct_9fa48("7283") ? true : (stryCov_9fa48("7283", "7284", "7285"), id === action.teacher.id)));
              const teachers = stryMutAct_9fa48("7286") ? [] : (stryCov_9fa48("7286"), [...state.teachers]);
              teachers[teacherIndex] = stryMutAct_9fa48("7287") ? {} : (stryCov_9fa48("7287"), {
                ...teachers[teacherIndex],
                ...action.teacher
              });
              return stryMutAct_9fa48("7288") ? {} : (stryCov_9fa48("7288"), {
                ...state,
                teacher: {},
                teachers
              });
            }
          }
        }
      case actionTypes.SET_DISABLED_TEACHERS_SUCCESS:
        if (stryMutAct_9fa48("7289")) {} else {
          stryCov_9fa48("7289");
          return stryMutAct_9fa48("7290") ? {} : (stryCov_9fa48("7290"), {
            ...state,
            disabledTeachers: stryMutAct_9fa48("7291") ? [] : (stryCov_9fa48("7291"), [...action.teachers])
          });
        }
      case actionTypes.SHOW_ALL_TEACHERS_SUCCESS:
      case actionTypes.GET_TEACHERS_BY_DEPARTMENT:
      case actionTypes.GET_TEACHERS_WITHOUT_ACCOUNT_SUCCESS:
        if (stryMutAct_9fa48("7292")) {} else {
          stryCov_9fa48("7292");
          return stryMutAct_9fa48("7293") ? {} : (stryCov_9fa48("7293"), {
            ...state,
            teachers: stryMutAct_9fa48("7294") ? [] : (stryCov_9fa48("7294"), [...action.teachers])
          });
        }
      default:
        if (stryMutAct_9fa48("7295")) {} else {
          stryCov_9fa48("7295");
          return state;
        }
    }
  }
};
export default reducer;