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
const initialState = stryMutAct_9fa48("7103") ? {} : (stryCov_9fa48("7103"), {
  students: stryMutAct_9fa48("7104") ? ["Stryker was here"] : (stryCov_9fa48("7104"), []),
  student: {}
});
const reducer = (state = initialState, action) => {
  if (stryMutAct_9fa48("7105")) {
    {}
  } else {
    stryCov_9fa48("7105");
    switch (action.type) {
      case actionTypes.SHOW_ALL_STUDENTS:
        if (stryMutAct_9fa48("7106")) {} else {
          stryCov_9fa48("7106");
          {
            if (stryMutAct_9fa48("7107")) {
              {}
            } else {
              stryCov_9fa48("7107");
              const newData = action.payload.map(item => {
                if (stryMutAct_9fa48("7108")) {
                  {}
                } else {
                  stryCov_9fa48("7108");
                  return stryMutAct_9fa48("7109") ? {} : (stryCov_9fa48("7109"), {
                    ...item,
                    checked: stryMutAct_9fa48("7110") ? true : (stryCov_9fa48("7110"), false)
                  });
                }
              });
              return stryMutAct_9fa48("7111") ? {} : (stryCov_9fa48("7111"), {
                ...state,
                students: newData
              });
            }
          }
        }
      case actionTypes.CREATE_STUDENT:
        if (stryMutAct_9fa48("7112")) {} else {
          stryCov_9fa48("7112");
          return stryMutAct_9fa48("7113") ? {} : (stryCov_9fa48("7113"), {
            ...state,
            students: state.students.concat(action.student)
          });
        }
      case actionTypes.DELETE_STUDENT:
        if (stryMutAct_9fa48("7114")) {} else {
          stryCov_9fa48("7114");
          {
            if (stryMutAct_9fa48("7115")) {
              {}
            } else {
              stryCov_9fa48("7115");
              const students = stryMutAct_9fa48("7116") ? state.students : (stryCov_9fa48("7116"), state.students.filter(stryMutAct_9fa48("7117") ? () => undefined : (stryCov_9fa48("7117"), student => stryMutAct_9fa48("7120") ? student.id === +action.id : stryMutAct_9fa48("7119") ? false : stryMutAct_9fa48("7118") ? true : (stryCov_9fa48("7118", "7119", "7120"), student.id !== (stryMutAct_9fa48("7121") ? -action.id : (stryCov_9fa48("7121"), +action.id))))));
              return stryMutAct_9fa48("7122") ? {} : (stryCov_9fa48("7122"), {
                ...state,
                students
              });
            }
          }
        }
      case actionTypes.DELETE_SELECTED_STUDENTS:
        if (stryMutAct_9fa48("7123")) {} else {
          stryCov_9fa48("7123");
          {
            if (stryMutAct_9fa48("7124")) {
              {}
            } else {
              stryCov_9fa48("7124");
              const students = stryMutAct_9fa48("7125") ? state.students : (stryCov_9fa48("7125"), state.students.filter(stryMutAct_9fa48("7126") ? () => undefined : (stryCov_9fa48("7126"), student => stryMutAct_9fa48("7127") ? action.students.some(el => student.id === +el.id) : (stryCov_9fa48("7127"), !(stryMutAct_9fa48("7128") ? action.students.every(el => student.id === +el.id) : (stryCov_9fa48("7128"), action.students.some(stryMutAct_9fa48("7129") ? () => undefined : (stryCov_9fa48("7129"), el => stryMutAct_9fa48("7132") ? student.id !== +el.id : stryMutAct_9fa48("7131") ? false : stryMutAct_9fa48("7130") ? true : (stryCov_9fa48("7130", "7131", "7132"), student.id === (stryMutAct_9fa48("7133") ? -el.id : (stryCov_9fa48("7133"), +el.id)))))))))));
              return stryMutAct_9fa48("7134") ? {} : (stryCov_9fa48("7134"), {
                ...state,
                students
              });
            }
          }
        }
      case actionTypes.SET_STUDENT:
        if (stryMutAct_9fa48("7135")) {} else {
          stryCov_9fa48("7135");
          {
            if (stryMutAct_9fa48("7136")) {
              {}
            } else {
              stryCov_9fa48("7136");
              let student = state.students.find(stryMutAct_9fa48("7137") ? () => undefined : (stryCov_9fa48("7137"), stud => stryMutAct_9fa48("7140") ? stud.id !== +action.id : stryMutAct_9fa48("7139") ? false : stryMutAct_9fa48("7138") ? true : (stryCov_9fa48("7138", "7139", "7140"), stud.id === (stryMutAct_9fa48("7141") ? -action.id : (stryCov_9fa48("7141"), +action.id)))));
              if (stryMutAct_9fa48("7144") ? false : stryMutAct_9fa48("7143") ? true : stryMutAct_9fa48("7142") ? student : (stryCov_9fa48("7142", "7143", "7144"), !student)) {
                if (stryMutAct_9fa48("7145")) {
                  {}
                } else {
                  stryCov_9fa48("7145");
                  student = stryMutAct_9fa48("7146") ? {} : (stryCov_9fa48("7146"), {
                    id: null
                  });
                }
              }
              return stryMutAct_9fa48("7147") ? {} : (stryCov_9fa48("7147"), {
                ...state,
                student
              });
            }
          }
        }
      case actionTypes.UPDATE_STUDENT:
        if (stryMutAct_9fa48("7148")) {} else {
          stryCov_9fa48("7148");
          {
            if (stryMutAct_9fa48("7149")) {
              {}
            } else {
              stryCov_9fa48("7149");
              const studentIndex = state.students.findIndex(stryMutAct_9fa48("7150") ? () => undefined : (stryCov_9fa48("7150"), ({
                id
              }) => stryMutAct_9fa48("7153") ? id !== action.student.id : stryMutAct_9fa48("7152") ? false : stryMutAct_9fa48("7151") ? true : (stryCov_9fa48("7151", "7152", "7153"), id === action.student.id)));
              const students = stryMutAct_9fa48("7154") ? [] : (stryCov_9fa48("7154"), [...state.students]);
              students[studentIndex] = stryMutAct_9fa48("7155") ? {} : (stryCov_9fa48("7155"), {
                ...students[studentIndex],
                ...action.student
              });
              return stryMutAct_9fa48("7156") ? {} : (stryCov_9fa48("7156"), {
                ...state,
                students,
                student: {}
              });
            }
          }
        }
      case actionTypes.CHECK_ALL_STUDENTS:
        if (stryMutAct_9fa48("7157")) {} else {
          stryCov_9fa48("7157");
          {
            if (stryMutAct_9fa48("7158")) {
              {}
            } else {
              stryCov_9fa48("7158");
              const newData = state.students.map(item => {
                if (stryMutAct_9fa48("7159")) {
                  {}
                } else {
                  stryCov_9fa48("7159");
                  const newItem = item;
                  action.checkedStudents.forEach(element => {
                    if (stryMutAct_9fa48("7160")) {
                      {}
                    } else {
                      stryCov_9fa48("7160");
                      if (stryMutAct_9fa48("7163") ? element.id !== item.id : stryMutAct_9fa48("7162") ? false : stryMutAct_9fa48("7161") ? true : (stryCov_9fa48("7161", "7162", "7163"), element.id === item.id)) newItem.checked = stryMutAct_9fa48("7164") ? action.checkedAll : (stryCov_9fa48("7164"), !action.checkedAll);
                    }
                  });
                  return newItem;
                }
              });
              return stryMutAct_9fa48("7165") ? {} : (stryCov_9fa48("7165"), {
                ...state,
                students: newData
              });
            }
          }
        }
      default:
        if (stryMutAct_9fa48("7166")) {} else {
          stryCov_9fa48("7166");
          return state;
        }
    }
  }
};
export default reducer;