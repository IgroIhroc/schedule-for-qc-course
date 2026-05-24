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
import { makeFullSchedule } from '../mappers/fullScheduleMapper';
import { makeTeacherSchedule } from '../mappers/teacherScheduleMapper';
import { makeGroupSchedule } from '../mappers/groupScheduleMapper';
import { places } from '../constants/places';
const initialState = stryMutAct_9fa48("6950") ? {} : (stryCov_9fa48("6950"), {
  items: stryMutAct_9fa48("6951") ? ["Stryker was here"] : (stryCov_9fa48("6951"), []),
  itemsIds: stryMutAct_9fa48("6952") ? ["Stryker was here"] : (stryCov_9fa48("6952"), []),
  fullSchedule: stryMutAct_9fa48("6953") ? ["Stryker was here"] : (stryCov_9fa48("6953"), []),
  groupSchedule: {},
  teacherSchedule: {},
  teacherRangeSchedule: null,
  scheduleType: stryMutAct_9fa48("6954") ? "" : (stryCov_9fa48("6954"), 'full'),
  scheduleSemester: null,
  scheduleGroup: null,
  scheduleTeacher: null,
  scheduleDepartment: null,
  currentSemester: {},
  defaultSemester: {},
  semesters: stryMutAct_9fa48("6955") ? ["Stryker was here"] : (stryCov_9fa48("6955"), []),
  place: stryMutAct_9fa48("6958") ? localStorage.getItem('place') && places.TOGETHER : stryMutAct_9fa48("6957") ? false : stryMutAct_9fa48("6956") ? true : (stryCov_9fa48("6956", "6957", "6958"), localStorage.getItem(stryMutAct_9fa48("6959") ? "" : (stryCov_9fa48("6959"), 'place')) || places.TOGETHER),
  viewTeacherScheduleResults: stryMutAct_9fa48("6960") ? "" : (stryCov_9fa48("6960"), 'block-view'),
  notPublished: stryMutAct_9fa48("6961") ? true : (stryCov_9fa48("6961"), false),
  notPublishedMessage: null,
  availability: {},
  itemGroupId: null
});
const reducer = (state = initialState, action) => {
  if (stryMutAct_9fa48("6962")) {
    {}
  } else {
    stryCov_9fa48("6962");
    switch (action.type) {
      case actionTypes.GET_CURRENT_SEMESTER_SUCCESS:
        if (stryMutAct_9fa48("6963")) {} else {
          stryCov_9fa48("6963");
          return stryMutAct_9fa48("6964") ? {} : (stryCov_9fa48("6964"), {
            ...state,
            currentSemester: action.semester
          });
        }
      case actionTypes.GET_DEFAULT_SEMESTER_SUCCESS:
        if (stryMutAct_9fa48("6965")) {} else {
          stryCov_9fa48("6965");
          return stryMutAct_9fa48("6966") ? {} : (stryCov_9fa48("6966"), {
            ...state,
            defaultSemester: action.semester
          });
        }
      case actionTypes.GET_ALL_PUBLIC_SEMESTERS_SUCCESS:
        if (stryMutAct_9fa48("6967")) {} else {
          stryCov_9fa48("6967");
          return stryMutAct_9fa48("6968") ? {} : (stryCov_9fa48("6968"), {
            ...state,
            semesters: action.semesters
          });
        }
      case actionTypes.SET_SCHEDULE_SEMESTER:
        if (stryMutAct_9fa48("6969")) {} else {
          stryCov_9fa48("6969");
          return stryMutAct_9fa48("6970") ? {} : (stryCov_9fa48("6970"), {
            ...state,
            scheduleSemester: action.semester,
            scheduleGroup: null,
            scheduleTeacher: null,
            scheduleDepartment: null
          });
        }
      case actionTypes.SET_SCHEDULE_GROUP:
        if (stryMutAct_9fa48("6971")) {} else {
          stryCov_9fa48("6971");
          return stryMutAct_9fa48("6972") ? {} : (stryCov_9fa48("6972"), {
            ...state,
            scheduleGroup: action.group,
            scheduleTeacher: null,
            scheduleDepartment: null
          });
        }
      case actionTypes.SET_SCHEDULE_TEACHER:
        if (stryMutAct_9fa48("6973")) {} else {
          stryCov_9fa48("6973");
          return stryMutAct_9fa48("6974") ? {} : (stryCov_9fa48("6974"), {
            ...state,
            scheduleTeacher: action.teacher,
            scheduleGroup: null,
            scheduleDepartment: null
          });
        }
      case actionTypes.SET_SCHEDULE_DEPARTMENT:
        if (stryMutAct_9fa48("6975")) {} else {
          stryCov_9fa48("6975");
          return stryMutAct_9fa48("6976") ? {} : (stryCov_9fa48("6976"), {
            ...state,
            scheduleDepartment: action.department,
            scheduleGroup: null,
            scheduleTeacher: null
          });
        }
      case actionTypes.SET_SCHEDULE_TYPE:
        if (stryMutAct_9fa48("6977")) {} else {
          stryCov_9fa48("6977");
          return stryMutAct_9fa48("6978") ? {} : (stryCov_9fa48("6978"), {
            ...state,
            scheduleType: action.newType,
            groupSchedule: {},
            fullSchedule: stryMutAct_9fa48("6979") ? ["Stryker was here"] : (stryCov_9fa48("6979"), [])
          });
        }
      case actionTypes.GET_FULL_SCHEDULE_SUCCESS:
        if (stryMutAct_9fa48("6980")) {} else {
          stryCov_9fa48("6980");
          {
            if (stryMutAct_9fa48("6981")) {
              {}
            } else {
              stryCov_9fa48("6981");
              const mappedSchedule = makeFullSchedule(action.schedule);
              return stryMutAct_9fa48("6982") ? {} : (stryCov_9fa48("6982"), {
                ...state,
                fullSchedule: mappedSchedule,
                groupSchedule: {},
                teacherSchedule: {},
                notPublished: stryMutAct_9fa48("6983") ? true : (stryCov_9fa48("6983"), false),
                notPublishedMessage: null
              });
            }
          }
        }
      case actionTypes.GET_GROUP_SCHEDULE_SUCCESS:
        if (stryMutAct_9fa48("6984")) {} else {
          stryCov_9fa48("6984");
          {
            if (stryMutAct_9fa48("6985")) {
              {}
            } else {
              stryCov_9fa48("6985");
              const mappedSchedule = makeGroupSchedule(action.schedule);
              return stryMutAct_9fa48("6986") ? {} : (stryCov_9fa48("6986"), {
                ...state,
                groupSchedule: mappedSchedule,
                fullSchedule: stryMutAct_9fa48("6987") ? ["Stryker was here"] : (stryCov_9fa48("6987"), []),
                teacherSchedule: {},
                notPublished: stryMutAct_9fa48("6988") ? true : (stryCov_9fa48("6988"), false),
                notPublishedMessage: null
              });
            }
          }
        }
      case actionTypes.GET_TEACHER_SCHEDULE_SUCCESS:
        if (stryMutAct_9fa48("6989")) {} else {
          stryCov_9fa48("6989");
          {
            if (stryMutAct_9fa48("6990")) {
              {}
            } else {
              stryCov_9fa48("6990");
              const mappedSchedule = makeTeacherSchedule(action.schedule);
              return stryMutAct_9fa48("6991") ? {} : (stryCov_9fa48("6991"), {
                ...state,
                teacherSchedule: mappedSchedule,
                fullSchedule: stryMutAct_9fa48("6992") ? ["Stryker was here"] : (stryCov_9fa48("6992"), []),
                groupSchedule: {},
                notPublished: stryMutAct_9fa48("6993") ? true : (stryCov_9fa48("6993"), false),
                notPublishedMessage: null
              });
            }
          }
        }
      case actionTypes.GET_TEACHER_RANGE_SCHEDULE_SUCCESS:
        if (stryMutAct_9fa48("6994")) {} else {
          stryCov_9fa48("6994");
          return stryMutAct_9fa48("6995") ? {} : (stryCov_9fa48("6995"), {
            ...state,
            teacherRangeSchedule: action.schedule,
            fullSchedule: stryMutAct_9fa48("6996") ? ["Stryker was here"] : (stryCov_9fa48("6996"), []),
            groupSchedule: {},
            teacherSchedule: stryMutAct_9fa48("6997") ? ["Stryker was here"] : (stryCov_9fa48("6997"), []),
            scheduleGroup: null
          });
        }
      case actionTypes.GET_SCHEDULE_ITEMS_SUCCESS:
        if (stryMutAct_9fa48("6998")) {} else {
          stryCov_9fa48("6998");
          return stryMutAct_9fa48("6999") ? {} : (stryCov_9fa48("6999"), {
            ...state,
            items: action.items
          });
        }
      case actionTypes.ADD_ITEM_TO_SCHEDULE:
        if (stryMutAct_9fa48("7000")) {} else {
          stryCov_9fa48("7000");
          {
            if (stryMutAct_9fa48("7001")) {
              {}
            } else {
              stryCov_9fa48("7001");
              const {
                id
              } = action.payload;
              let itemArr;
              if (stryMutAct_9fa48("7003") ? false : stryMutAct_9fa48("7002") ? true : (stryCov_9fa48("7002", "7003"), id)) {
                if (stryMutAct_9fa48("7004")) {
                  {}
                } else {
                  stryCov_9fa48("7004");
                  const index = state.items.findIndex(stryMutAct_9fa48("7005") ? () => undefined : (stryCov_9fa48("7005"), item => stryMutAct_9fa48("7008") ? item.id !== id : stryMutAct_9fa48("7007") ? false : stryMutAct_9fa48("7006") ? true : (stryCov_9fa48("7006", "7007", "7008"), item.id === id)));
                  if (stryMutAct_9fa48("7012") ? index >= 0 : stryMutAct_9fa48("7011") ? index <= 0 : stryMutAct_9fa48("7010") ? false : stryMutAct_9fa48("7009") ? true : (stryCov_9fa48("7009", "7010", "7011", "7012"), index < 0)) {
                    if (stryMutAct_9fa48("7013")) {
                      {}
                    } else {
                      stryCov_9fa48("7013");
                      itemArr = state.items.concat(action.payload);
                    }
                  } else {
                    if (stryMutAct_9fa48("7014")) {
                      {}
                    } else {
                      stryCov_9fa48("7014");
                      state.items.splice(index, 1, action.payload);
                      itemArr = state.items;
                    }
                  }
                }
              } else {
                if (stryMutAct_9fa48("7015")) {
                  {}
                } else {
                  stryCov_9fa48("7015");
                  itemArr = state.items.concat(action.payload);
                }
              }
              return stryMutAct_9fa48("7016") ? {} : (stryCov_9fa48("7016"), {
                ...state,
                items: itemArr
              });
            }
          }
        }
      case actionTypes.DELETE_SCHEDULE_ITEM_SUCCESS:
        if (stryMutAct_9fa48("7017")) {} else {
          stryCov_9fa48("7017");
          {
            if (stryMutAct_9fa48("7018")) {
              {}
            } else {
              stryCov_9fa48("7018");
              const index = state.items.findIndex(stryMutAct_9fa48("7019") ? () => undefined : (stryCov_9fa48("7019"), item => stryMutAct_9fa48("7022") ? item.id !== action.itemId : stryMutAct_9fa48("7021") ? false : stryMutAct_9fa48("7020") ? true : (stryCov_9fa48("7020", "7021", "7022"), item.id === action.itemId)));
              state.items.splice(index, 1);
              const newArr = state.items;
              return stryMutAct_9fa48("7023") ? {} : (stryCov_9fa48("7023"), {
                ...state,
                items: newArr
              });
            }
          }
        }
      case actionTypes.SET_ITEM_GROUP_ID:
        if (stryMutAct_9fa48("7024")) {} else {
          stryCov_9fa48("7024");
          return stryMutAct_9fa48("7025") ? {} : (stryCov_9fa48("7025"), {
            ...state,
            itemGroupId: action.payload
          });
        }
      case actionTypes.SET_PLACE:
        if (stryMutAct_9fa48("7026")) {} else {
          stryCov_9fa48("7026");
          return stryMutAct_9fa48("7027") ? {} : (stryCov_9fa48("7027"), {
            ...state,
            place: action.place
          });
        }
      case actionTypes.SET_TEACHER_VIEW_TYPE:
        if (stryMutAct_9fa48("7028")) {} else {
          stryCov_9fa48("7028");
          return stryMutAct_9fa48("7029") ? {} : (stryCov_9fa48("7029"), {
            ...state,
            viewTeacherScheduleResults: action.payload
          });
        }
      case actionTypes.CHECK_AVAILABILITY_CHANGE_ROOM_SCHEDULE_SUCCESS:
        if (stryMutAct_9fa48("7030")) {} else {
          stryCov_9fa48("7030");
          return stryMutAct_9fa48("7031") ? {} : (stryCov_9fa48("7031"), {
            ...state,
            availability: action.payload
          });
        }
      case actionTypes.SCHEDULE_NOT_PUBLISHED:
        if (stryMutAct_9fa48("7032")) {} else {
          stryCov_9fa48("7032");
          return stryMutAct_9fa48("7033") ? {} : (stryCov_9fa48("7033"), {
            ...state,
            notPublished: stryMutAct_9fa48("7034") ? false : (stryCov_9fa48("7034"), true),
            notPublishedMessage: action.payload
          });
        }
      default:
        if (stryMutAct_9fa48("7035")) {} else {
          stryCov_9fa48("7035");
          return state;
        }
    }
  }
};
export default reducer;