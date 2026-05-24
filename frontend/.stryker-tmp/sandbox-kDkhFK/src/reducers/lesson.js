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
const initialState = stryMutAct_9fa48("6777") ? {} : (stryCov_9fa48("6777"), {
  lessons: stryMutAct_9fa48("6778") ? ["Stryker was here"] : (stryCov_9fa48("6778"), []),
  lessonTypes: stryMutAct_9fa48("6779") ? ["Stryker was here"] : (stryCov_9fa48("6779"), []),
  lesson: {},
  groupId: null,
  uniqueError: stryMutAct_9fa48("6780") ? true : (stryCov_9fa48("6780"), false)
});
const reducer = (state = initialState, action) => {
  if (stryMutAct_9fa48("6781")) {
    {}
  } else {
    stryCov_9fa48("6781");
    switch (action.type) {
      case actionTypes.CREATE_LESSON_CARD_SUCCESS:
        if (stryMutAct_9fa48("6782")) {} else {
          stryCov_9fa48("6782");
          return stryMutAct_9fa48("6783") ? {} : (stryCov_9fa48("6783"), {
            ...state,
            lessons: state.lessons.concat(action.result)
          });
        }
      case actionTypes.SET_LESSONS_CARDS_START:
        if (stryMutAct_9fa48("6784")) {} else {
          stryCov_9fa48("6784");
          return stryMutAct_9fa48("6785") ? {} : (stryCov_9fa48("6785"), {
            ...state,
            lessons: action.result
          });
        }
      case actionTypes.SET_LESSON_TYPES_SUCCESS:
        if (stryMutAct_9fa48("6786")) {} else {
          stryCov_9fa48("6786");
          return stryMutAct_9fa48("6787") ? {} : (stryCov_9fa48("6787"), {
            ...state,
            lessonTypes: action.result
          });
        }
      case actionTypes.DELETE_LESSON_CARD_SUCCESS:
        if (stryMutAct_9fa48("6788")) {} else {
          stryCov_9fa48("6788");
          {
            if (stryMutAct_9fa48("6789")) {
              {}
            } else {
              stryCov_9fa48("6789");
              const lessons = stryMutAct_9fa48("6790") ? state.lessons : (stryCov_9fa48("6790"), state.lessons.filter(stryMutAct_9fa48("6791") ? () => undefined : (stryCov_9fa48("6791"), lesson => stryMutAct_9fa48("6794") ? lesson.id === action.id : stryMutAct_9fa48("6793") ? false : stryMutAct_9fa48("6792") ? true : (stryCov_9fa48("6792", "6793", "6794"), lesson.id !== action.id))));
              return stryMutAct_9fa48("6795") ? {} : (stryCov_9fa48("6795"), {
                ...state,
                lessons
              });
            }
          }
        }
      case actionTypes.SELECT_LESSON_CARD_SUCCESS:
        if (stryMutAct_9fa48("6796")) {} else {
          stryCov_9fa48("6796");
          {
            if (stryMutAct_9fa48("6797")) {
              {}
            } else {
              stryCov_9fa48("6797");
              let lesson = state.lessons.find(stryMutAct_9fa48("6798") ? () => undefined : (stryCov_9fa48("6798"), less => stryMutAct_9fa48("6801") ? less.id !== action.cardId : stryMutAct_9fa48("6800") ? false : stryMutAct_9fa48("6799") ? true : (stryCov_9fa48("6799", "6800", "6801"), less.id === action.cardId)));
              if (stryMutAct_9fa48("6804") ? false : stryMutAct_9fa48("6803") ? true : stryMutAct_9fa48("6802") ? lesson : (stryCov_9fa48("6802", "6803", "6804"), !lesson)) {
                if (stryMutAct_9fa48("6805")) {
                  {}
                } else {
                  stryCov_9fa48("6805");
                  lesson = stryMutAct_9fa48("6806") ? {} : (stryCov_9fa48("6806"), {
                    id: null
                  });
                }
              }
              return stryMutAct_9fa48("6807") ? {} : (stryCov_9fa48("6807"), {
                ...state,
                lesson
              });
            }
          }
        }
      case actionTypes.UPDATE_LESSON_CARD_SUCCESS:
        if (stryMutAct_9fa48("6808")) {} else {
          stryCov_9fa48("6808");
          {
            if (stryMutAct_9fa48("6809")) {
              {}
            } else {
              stryCov_9fa48("6809");
              const lessonIndex = state.lessons.findIndex(stryMutAct_9fa48("6810") ? () => undefined : (stryCov_9fa48("6810"), ({
                id
              }) => stryMutAct_9fa48("6813") ? id !== action.result.id : stryMutAct_9fa48("6812") ? false : stryMutAct_9fa48("6811") ? true : (stryCov_9fa48("6811", "6812", "6813"), id === action.result.id)));
              const lessons = stryMutAct_9fa48("6814") ? [] : (stryCov_9fa48("6814"), [...state.lessons]);
              lessons[lessonIndex] = stryMutAct_9fa48("6815") ? {} : (stryCov_9fa48("6815"), {
                ...lessons[lessonIndex],
                ...action.result
              });
              return stryMutAct_9fa48("6816") ? {} : (stryCov_9fa48("6816"), {
                ...state,
                lessons,
                lesson: {}
              });
            }
          }
        }
      case actionTypes.SELECT_GROUP_ID:
        if (stryMutAct_9fa48("6817")) {} else {
          stryCov_9fa48("6817");
          return stryMutAct_9fa48("6818") ? {} : (stryCov_9fa48("6818"), {
            ...state,
            lesson: {},
            groupId: action.id
          });
        }
      case actionTypes.SET_UNIQUE_ERROR:
        if (stryMutAct_9fa48("6819")) {} else {
          stryCov_9fa48("6819");
          return stryMutAct_9fa48("6820") ? {} : (stryCov_9fa48("6820"), {
            ...state,
            uniqueError: action.result
          });
        }
      default:
        if (stryMutAct_9fa48("6821")) {} else {
          stryCov_9fa48("6821");
          return state;
        }
    }
  }
};
export default reducer;