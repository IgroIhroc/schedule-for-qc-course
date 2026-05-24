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
import { sortRooms } from '../helper/sortRoom';
const initialState = stryMutAct_9fa48("6849") ? {} : (stryCov_9fa48("6849"), {
  rooms: stryMutAct_9fa48("6850") ? ["Stryker was here"] : (stryCov_9fa48("6850"), []),
  disabledRooms: stryMutAct_9fa48("6851") ? ["Stryker was here"] : (stryCov_9fa48("6851"), []),
  roomTypes: stryMutAct_9fa48("6852") ? ["Stryker was here"] : (stryCov_9fa48("6852"), []),
  oneRoom: {},
  oneType: {},
  freeRooms: stryMutAct_9fa48("6853") ? ["Stryker was here"] : (stryCov_9fa48("6853"), [])
});
const reducer = (state = initialState, action) => {
  if (stryMutAct_9fa48("6854")) {
    {}
  } else {
    stryCov_9fa48("6854");
    switch (action.type) {
      case actionTypes.ADD_ROOM:
        if (stryMutAct_9fa48("6855")) {} else {
          stryCov_9fa48("6855");
          {
            if (stryMutAct_9fa48("6856")) {
              {}
            } else {
              stryCov_9fa48("6856");
              const newRooms = sortRooms(stryMutAct_9fa48("6857") ? [] : (stryCov_9fa48("6857"), [...state.rooms]), action.room, action.afterId);
              return stryMutAct_9fa48("6858") ? {} : (stryCov_9fa48("6858"), {
                ...state,
                rooms: newRooms,
                oneRoom: {}
              });
            }
          }
        }
      case actionTypes.DELETE_ROOM:
        if (stryMutAct_9fa48("6859")) {} else {
          stryCov_9fa48("6859");
          if (stryMutAct_9fa48("6861") ? false : stryMutAct_9fa48("6860") ? true : (stryCov_9fa48("6860", "6861"), action.isDisabled)) {
            if (stryMutAct_9fa48("6862")) {
              {}
            } else {
              stryCov_9fa48("6862");
              return stryMutAct_9fa48("6863") ? {} : (stryCov_9fa48("6863"), {
                ...state,
                disabledRooms: stryMutAct_9fa48("6864") ? [] : (stryCov_9fa48("6864"), [...(stryMutAct_9fa48("6865") ? state.disabledRooms : (stryCov_9fa48("6865"), state.disabledRooms.filter(stryMutAct_9fa48("6866") ? () => undefined : (stryCov_9fa48("6866"), room => stryMutAct_9fa48("6869") ? room.id === action.roomId : stryMutAct_9fa48("6868") ? false : stryMutAct_9fa48("6867") ? true : (stryCov_9fa48("6867", "6868", "6869"), room.id !== action.roomId)))))])
              });
            }
          }
          return stryMutAct_9fa48("6870") ? {} : (stryCov_9fa48("6870"), {
            ...state,
            rooms: stryMutAct_9fa48("6871") ? [] : (stryCov_9fa48("6871"), [...(stryMutAct_9fa48("6872") ? state.rooms : (stryCov_9fa48("6872"), state.rooms.filter(stryMutAct_9fa48("6873") ? () => undefined : (stryCov_9fa48("6873"), room => stryMutAct_9fa48("6876") ? room.id === action.roomId : stryMutAct_9fa48("6875") ? false : stryMutAct_9fa48("6874") ? true : (stryCov_9fa48("6874", "6875", "6876"), room.id !== action.roomId)))))])
          });
        }
      case actionTypes.SHOW_LIST_OF_ROOMS_SUCCESS:
        if (stryMutAct_9fa48("6877")) {} else {
          stryCov_9fa48("6877");
          return stryMutAct_9fa48("6878") ? {} : (stryCov_9fa48("6878"), {
            ...state,
            rooms: stryMutAct_9fa48("6879") ? [] : (stryCov_9fa48("6879"), [...action.rooms])
          });
        }
      case actionTypes.SET_DISABLED_ROOMS:
        if (stryMutAct_9fa48("6880")) {} else {
          stryCov_9fa48("6880");
          return stryMutAct_9fa48("6881") ? {} : (stryCov_9fa48("6881"), {
            ...state,
            disabledRooms: stryMutAct_9fa48("6882") ? [] : (stryCov_9fa48("6882"), [...action.rooms])
          });
        }
      case actionTypes.SET_SELECT_ROOM:
        if (stryMutAct_9fa48("6883")) {} else {
          stryCov_9fa48("6883");
          {
            if (stryMutAct_9fa48("6884")) {
              {}
            } else {
              stryCov_9fa48("6884");
              const room = state.rooms.find(stryMutAct_9fa48("6885") ? () => undefined : (stryCov_9fa48("6885"), roomItem => stryMutAct_9fa48("6888") ? roomItem.id !== action.roomId : stryMutAct_9fa48("6887") ? false : stryMutAct_9fa48("6886") ? true : (stryCov_9fa48("6886", "6887", "6888"), roomItem.id === action.roomId)));
              return stryMutAct_9fa48("6889") ? {} : (stryCov_9fa48("6889"), {
                ...state,
                oneRoom: room
              });
            }
          }
        }
      case actionTypes.UPDATE_ROOM:
        if (stryMutAct_9fa48("6890")) {} else {
          stryCov_9fa48("6890");
          {
            if (stryMutAct_9fa48("6891")) {
              {}
            } else {
              stryCov_9fa48("6891");
              const rooms = stryMutAct_9fa48("6892") ? [] : (stryCov_9fa48("6892"), [...state.rooms]);
              rooms[rooms.findIndex(stryMutAct_9fa48("6893") ? () => undefined : (stryCov_9fa48("6893"), roomItem => stryMutAct_9fa48("6896") ? roomItem.id !== action.room.id : stryMutAct_9fa48("6895") ? false : stryMutAct_9fa48("6894") ? true : (stryCov_9fa48("6894", "6895", "6896"), roomItem.id === action.room.id)))] = action.room;
              return stryMutAct_9fa48("6897") ? {} : (stryCov_9fa48("6897"), {
                ...state,
                oneRoom: {},
                rooms: stryMutAct_9fa48("6898") ? [] : (stryCov_9fa48("6898"), [...rooms])
              });
            }
          }
        }
      case actionTypes.UPDATE_ROOM_ORDER_SUCCESS:
        if (stryMutAct_9fa48("6899")) {} else {
          stryCov_9fa48("6899");
          {
            if (stryMutAct_9fa48("6900")) {
              {}
            } else {
              stryCov_9fa48("6900");
              const rooms = stryMutAct_9fa48("6901") ? state.rooms : (stryCov_9fa48("6901"), state.rooms.filter(stryMutAct_9fa48("6902") ? () => undefined : (stryCov_9fa48("6902"), room => stryMutAct_9fa48("6905") ? room.id === action.room.id : stryMutAct_9fa48("6904") ? false : stryMutAct_9fa48("6903") ? true : (stryCov_9fa48("6903", "6904", "6905"), room.id !== action.room.id))));
              const newRooms = sortRooms(rooms, action.room, action.afterId);
              return stryMutAct_9fa48("6906") ? {} : (stryCov_9fa48("6906"), {
                ...state,
                rooms: newRooms,
                oneRoom: {}
              });
            }
          }
        }
      case actionTypes.CLEAR_ROOM:
        if (stryMutAct_9fa48("6907")) {} else {
          stryCov_9fa48("6907");
          return stryMutAct_9fa48("6908") ? {} : (stryCov_9fa48("6908"), {
            ...state,
            oneRoom: {}
          });
        }
      case actionTypes.ADD_ROOM_TYPE:
        if (stryMutAct_9fa48("6909")) {} else {
          stryCov_9fa48("6909");
          return stryMutAct_9fa48("6910") ? {} : (stryCov_9fa48("6910"), {
            ...state,
            roomTypes: stryMutAct_9fa48("6911") ? [] : (stryCov_9fa48("6911"), [...state.roomTypes, action.roomType])
          });
        }
      case actionTypes.GET_ALL_ROOM_TYPES:
        if (stryMutAct_9fa48("6912")) {} else {
          stryCov_9fa48("6912");
          return stryMutAct_9fa48("6913") ? {} : (stryCov_9fa48("6913"), {
            ...state,
            roomTypes: stryMutAct_9fa48("6914") ? [] : (stryCov_9fa48("6914"), [...action.roomType])
          });
        }
      case actionTypes.DELETE_ROOM_TYPE:
        if (stryMutAct_9fa48("6915")) {} else {
          stryCov_9fa48("6915");
          return stryMutAct_9fa48("6916") ? {} : (stryCov_9fa48("6916"), {
            ...state,
            roomTypes: stryMutAct_9fa48("6917") ? [] : (stryCov_9fa48("6917"), [...(stryMutAct_9fa48("6918") ? state.roomTypes : (stryCov_9fa48("6918"), state.roomTypes.filter(stryMutAct_9fa48("6919") ? () => undefined : (stryCov_9fa48("6919"), type => stryMutAct_9fa48("6922") ? type.id === action.roomTypeId : stryMutAct_9fa48("6921") ? false : stryMutAct_9fa48("6920") ? true : (stryCov_9fa48("6920", "6921", "6922"), type.id !== action.roomTypeId)))))])
          });
        }
      case actionTypes.UPDATE_ROOM_TYPE:
        if (stryMutAct_9fa48("6923")) {} else {
          stryCov_9fa48("6923");
          {
            if (stryMutAct_9fa48("6924")) {
              {}
            } else {
              stryCov_9fa48("6924");
              const roomTypes = stryMutAct_9fa48("6925") ? [] : (stryCov_9fa48("6925"), [...state.roomTypes]);
              roomTypes[roomTypes.findIndex(stryMutAct_9fa48("6926") ? () => undefined : (stryCov_9fa48("6926"), typeItem => stryMutAct_9fa48("6929") ? typeItem.id !== action.roomType.id : stryMutAct_9fa48("6928") ? false : stryMutAct_9fa48("6927") ? true : (stryCov_9fa48("6927", "6928", "6929"), typeItem.id === action.roomType.id)))] = action.roomType;
              return stryMutAct_9fa48("6930") ? {} : (stryCov_9fa48("6930"), {
                ...state,
                oneType: {},
                roomTypes: stryMutAct_9fa48("6931") ? [] : (stryCov_9fa48("6931"), [...roomTypes])
              });
            }
          }
        }
      case actionTypes.SELECT_ROOM_TYPE:
        if (stryMutAct_9fa48("6932")) {} else {
          stryCov_9fa48("6932");
          {
            if (stryMutAct_9fa48("6933")) {
              {}
            } else {
              stryCov_9fa48("6933");
              const type = state.roomTypes.find(stryMutAct_9fa48("6934") ? () => undefined : (stryCov_9fa48("6934"), roomType => stryMutAct_9fa48("6937") ? roomType.id !== action.typeId : stryMutAct_9fa48("6936") ? false : stryMutAct_9fa48("6935") ? true : (stryCov_9fa48("6935", "6936", "6937"), roomType.id === action.typeId)));
              return stryMutAct_9fa48("6938") ? {} : (stryCov_9fa48("6938"), {
                ...state,
                oneType: type
              });
            }
          }
        }
      case actionTypes.GET_FREE_ROOMS_SUCCESS:
        if (stryMutAct_9fa48("6939")) {} else {
          stryCov_9fa48("6939");
          {
            if (stryMutAct_9fa48("6940")) {
              {}
            } else {
              stryCov_9fa48("6940");
              return stryMutAct_9fa48("6941") ? {} : (stryCov_9fa48("6941"), {
                ...state,
                freeRooms: action.freeRooms
              });
            }
          }
        }
      case actionTypes.GET_BUSY_ROOMS_SUCCESS:
        if (stryMutAct_9fa48("6942")) {} else {
          stryCov_9fa48("6942");
          {
            if (stryMutAct_9fa48("6943")) {
              {}
            } else {
              stryCov_9fa48("6943");
              return stryMutAct_9fa48("6944") ? {} : (stryCov_9fa48("6944"), {
                ...state,
                rooms: action.busyRooms
              });
            }
          }
        }
      case actionTypes.CLEAR_FREE_ROOMS:
        if (stryMutAct_9fa48("6945")) {} else {
          stryCov_9fa48("6945");
          {
            if (stryMutAct_9fa48("6946")) {
              {}
            } else {
              stryCov_9fa48("6946");
              return stryMutAct_9fa48("6947") ? {} : (stryCov_9fa48("6947"), {
                ...state,
                freeRooms: stryMutAct_9fa48("6948") ? ["Stryker was here"] : (stryCov_9fa48("6948"), [])
              });
            }
          }
        }
      default:
        if (stryMutAct_9fa48("6949")) {} else {
          stryCov_9fa48("6949");
          return state;
        }
    }
  }
};
export default reducer;