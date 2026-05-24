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
const initialState = stryMutAct_9fa48("6643") ? {} : (stryCov_9fa48("6643"), {
  departments: stryMutAct_9fa48("6644") ? ["Stryker was here"] : (stryCov_9fa48("6644"), []),
  department: {},
  disabledDepartments: stryMutAct_9fa48("6645") ? ["Stryker was here"] : (stryCov_9fa48("6645"), [])
});
const reducer = (state = initialState, action) => {
  if (stryMutAct_9fa48("6646")) {
    {}
  } else {
    stryCov_9fa48("6646");
    switch (action.type) {
      case actionTypes.ADD_DEPARTMENT:
        if (stryMutAct_9fa48("6647")) {} else {
          stryCov_9fa48("6647");
          return stryMutAct_9fa48("6648") ? {} : (stryCov_9fa48("6648"), {
            ...state,
            departments: state.departments.concat(action.result)
          });
        }
      case actionTypes.GET_ALL_DEPARTMENTS:
        if (stryMutAct_9fa48("6649")) {} else {
          stryCov_9fa48("6649");
          {
            if (stryMutAct_9fa48("6650")) {
              {}
            } else {
              stryCov_9fa48("6650");
              const departments = stryMutAct_9fa48("6651") ? action.result : (stryCov_9fa48("6651"), action.result.filter(stryMutAct_9fa48("6652") ? () => undefined : (stryCov_9fa48("6652"), department => stryMutAct_9fa48("6655") ? department.disable !== false : stryMutAct_9fa48("6654") ? false : stryMutAct_9fa48("6653") ? true : (stryCov_9fa48("6653", "6654", "6655"), department.disable === (stryMutAct_9fa48("6656") ? true : (stryCov_9fa48("6656"), false))))));
              const disabledDepartments = stryMutAct_9fa48("6657") ? action.result : (stryCov_9fa48("6657"), action.result.filter(stryMutAct_9fa48("6658") ? () => undefined : (stryCov_9fa48("6658"), department => stryMutAct_9fa48("6661") ? department.disable !== true : stryMutAct_9fa48("6660") ? false : stryMutAct_9fa48("6659") ? true : (stryCov_9fa48("6659", "6660", "6661"), department.disable === (stryMutAct_9fa48("6662") ? false : (stryCov_9fa48("6662"), true))))));
              return stryMutAct_9fa48("6663") ? {} : (stryCov_9fa48("6663"), {
                ...state,
                departments,
                disabledDepartments
              });
            }
          }
        }
      case actionTypes.CLEAR_DEPARTMENT_FORM:
        if (stryMutAct_9fa48("6664")) {} else {
          stryCov_9fa48("6664");
          return stryMutAct_9fa48("6665") ? {} : (stryCov_9fa48("6665"), {
            ...state,
            department: {}
          });
        }
      case actionTypes.DELETE_DEPARTMENT:
        if (stryMutAct_9fa48("6666")) {} else {
          stryCov_9fa48("6666");
          {
            if (stryMutAct_9fa48("6667")) {
              {}
            } else {
              stryCov_9fa48("6667");
              const departments = stryMutAct_9fa48("6668") ? state.departments : (stryCov_9fa48("6668"), state.departments.filter(stryMutAct_9fa48("6669") ? () => undefined : (stryCov_9fa48("6669"), department => stryMutAct_9fa48("6672") ? department.id === action.result.id : stryMutAct_9fa48("6671") ? false : stryMutAct_9fa48("6670") ? true : (stryCov_9fa48("6670", "6671", "6672"), department.id !== action.result.id))));
              const disabledDepartments = stryMutAct_9fa48("6673") ? state.disabledDepartments : (stryCov_9fa48("6673"), state.disabledDepartments.filter(stryMutAct_9fa48("6674") ? () => undefined : (stryCov_9fa48("6674"), department => stryMutAct_9fa48("6677") ? department.id === action.result.id : stryMutAct_9fa48("6676") ? false : stryMutAct_9fa48("6675") ? true : (stryCov_9fa48("6675", "6676", "6677"), department.id !== action.result.id))));
              return stryMutAct_9fa48("6678") ? {} : (stryCov_9fa48("6678"), {
                ...state,
                departments,
                disabledDepartments
              });
            }
          }
        }
      case actionTypes.GET_DISABLED_DEPARTMENTS:
        if (stryMutAct_9fa48("6679")) {} else {
          stryCov_9fa48("6679");
          return stryMutAct_9fa48("6680") ? {} : (stryCov_9fa48("6680"), {
            ...state,
            disabledDepartments: action.result
          });
        }
      case actionTypes.SET_DISABLED_DEPARTMENT:
        if (stryMutAct_9fa48("6681")) {} else {
          stryCov_9fa48("6681");
          {
            if (stryMutAct_9fa48("6682")) {
              {}
            } else {
              stryCov_9fa48("6682");
              const departments = stryMutAct_9fa48("6683") ? state.departments : (stryCov_9fa48("6683"), state.departments.filter(stryMutAct_9fa48("6684") ? () => undefined : (stryCov_9fa48("6684"), department => stryMutAct_9fa48("6687") ? department.id === action.result.id : stryMutAct_9fa48("6686") ? false : stryMutAct_9fa48("6685") ? true : (stryCov_9fa48("6685", "6686", "6687"), department.id !== action.result.id))));
              const disabledDepartments = stryMutAct_9fa48("6688") ? [] : (stryCov_9fa48("6688"), [...state.disabledDepartments, action.result]);
              return stryMutAct_9fa48("6689") ? {} : (stryCov_9fa48("6689"), {
                ...state,
                departments,
                disabledDepartments
              });
            }
          }
        }
      case actionTypes.SET_ENABLED_DEPARTMENT:
        if (stryMutAct_9fa48("6690")) {} else {
          stryCov_9fa48("6690");
          {
            if (stryMutAct_9fa48("6691")) {
              {}
            } else {
              stryCov_9fa48("6691");
              const disabledDepartments = stryMutAct_9fa48("6692") ? state.disabledDepartments : (stryCov_9fa48("6692"), state.disabledDepartments.filter(stryMutAct_9fa48("6693") ? () => undefined : (stryCov_9fa48("6693"), department => stryMutAct_9fa48("6696") ? department.id === action.result.id : stryMutAct_9fa48("6695") ? false : stryMutAct_9fa48("6694") ? true : (stryCov_9fa48("6694", "6695", "6696"), department.id !== action.result.id))));
              const departments = stryMutAct_9fa48("6697") ? [] : (stryCov_9fa48("6697"), [...state.departments, action.result]);
              return stryMutAct_9fa48("6698") ? {} : (stryCov_9fa48("6698"), {
                ...state,
                departments,
                disabledDepartments
              });
            }
          }
        }
      case actionTypes.GET_DEPARTMENT_BY_ID:
        if (stryMutAct_9fa48("6699")) {} else {
          stryCov_9fa48("6699");
          {
            if (stryMutAct_9fa48("6700")) {
              {}
            } else {
              stryCov_9fa48("6700");
              let getDepartment = state.departments.find(stryMutAct_9fa48("6701") ? () => undefined : (stryCov_9fa48("6701"), department => stryMutAct_9fa48("6704") ? department.id !== action.result : stryMutAct_9fa48("6703") ? false : stryMutAct_9fa48("6702") ? true : (stryCov_9fa48("6702", "6703", "6704"), department.id === action.result)));
              if (stryMutAct_9fa48("6707") ? false : stryMutAct_9fa48("6706") ? true : stryMutAct_9fa48("6705") ? getDepartment : (stryCov_9fa48("6705", "6706", "6707"), !getDepartment)) {
                if (stryMutAct_9fa48("6708")) {
                  {}
                } else {
                  stryCov_9fa48("6708");
                  getDepartment = stryMutAct_9fa48("6709") ? {} : (stryCov_9fa48("6709"), {
                    id: null
                  });
                }
              }
              return stryMutAct_9fa48("6710") ? {} : (stryCov_9fa48("6710"), {
                ...state,
                department: getDepartment
              });
            }
          }
        }
      case actionTypes.UPDATE_DEPARTMENT:
        if (stryMutAct_9fa48("6711")) {} else {
          stryCov_9fa48("6711");
          {
            if (stryMutAct_9fa48("6712")) {
              {}
            } else {
              stryCov_9fa48("6712");
              const departmentIndex = state.departments.findIndex(department => {
                if (stryMutAct_9fa48("6713")) {
                  {}
                } else {
                  stryCov_9fa48("6713");
                  return stryMutAct_9fa48("6716") ? department.id !== action.result.id : stryMutAct_9fa48("6715") ? false : stryMutAct_9fa48("6714") ? true : (stryCov_9fa48("6714", "6715", "6716"), department.id === action.result.id);
                }
              });
              const departments = stryMutAct_9fa48("6717") ? [] : (stryCov_9fa48("6717"), [...state.departments]);
              departments[departmentIndex] = stryMutAct_9fa48("6718") ? {} : (stryCov_9fa48("6718"), {
                ...departments[departmentIndex],
                ...action.result
              });
              const disDepartmentIndex = state.disabledDepartments.findIndex(disabledDept => {
                if (stryMutAct_9fa48("6719")) {
                  {}
                } else {
                  stryCov_9fa48("6719");
                  return stryMutAct_9fa48("6722") ? disabledDept.id !== action.result : stryMutAct_9fa48("6721") ? false : stryMutAct_9fa48("6720") ? true : (stryCov_9fa48("6720", "6721", "6722"), disabledDept.id === action.result);
                }
              });
              const disabledDepartments = stryMutAct_9fa48("6723") ? [] : (stryCov_9fa48("6723"), [...state.departments]);
              disabledDepartments[disDepartmentIndex] = stryMutAct_9fa48("6724") ? {} : (stryCov_9fa48("6724"), {
                ...disabledDepartments[disDepartmentIndex],
                ...action.result
              });
              return stryMutAct_9fa48("6725") ? {} : (stryCov_9fa48("6725"), {
                ...state,
                departments,
                disabledDepartments,
                department: {}
              });
            }
          }
        }
      default:
        if (stryMutAct_9fa48("6726")) {} else {
          stryCov_9fa48("6726");
          return state;
        }
    }
  }
};
export default reducer;