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
import { sortGroups } from '../helper/sortGroup';
const initialState = stryMutAct_9fa48("6733") ? {} : (stryCov_9fa48("6733"), {
  groups: stryMutAct_9fa48("6734") ? ["Stryker was here"] : (stryCov_9fa48("6734"), []),
  group: {}
});
const reducer = (state = initialState, action) => {
  if (stryMutAct_9fa48("6735")) {
    {}
  } else {
    stryCov_9fa48("6735");
    switch (action.type) {
      case actionTypes.SHOW_ALL_GROUPS_SUCCESS:
        if (stryMutAct_9fa48("6736")) {} else {
          stryCov_9fa48("6736");
          return stryMutAct_9fa48("6737") ? {} : (stryCov_9fa48("6737"), {
            ...state,
            groups: action.payload
          });
        }
      case actionTypes.GET_GROUP_BY_ID_SUCCESS:
        if (stryMutAct_9fa48("6738")) {} else {
          stryCov_9fa48("6738");
          return stryMutAct_9fa48("6739") ? {} : (stryCov_9fa48("6739"), {
            ...state,
            group: action.group
          });
        }
      case actionTypes.CREATE_GROUP_SUCCESS:
        if (stryMutAct_9fa48("6740")) {} else {
          stryCov_9fa48("6740");
          {
            if (stryMutAct_9fa48("6741")) {
              {}
            } else {
              stryCov_9fa48("6741");
              const groups = stryMutAct_9fa48("6742") ? [] : (stryCov_9fa48("6742"), [...state.groups]);
              const newGroups = sortGroups(groups, action.group, action.afterId);
              return stryMutAct_9fa48("6743") ? {} : (stryCov_9fa48("6743"), {
                ...state,
                groups: newGroups
              });
            }
          }
        }
      case actionTypes.UPDATE_GROUP_SUCCESS:
        if (stryMutAct_9fa48("6744")) {} else {
          stryCov_9fa48("6744");
          {
            if (stryMutAct_9fa48("6745")) {
              {}
            } else {
              stryCov_9fa48("6745");
              const groups = stryMutAct_9fa48("6746") ? state.groups : (stryCov_9fa48("6746"), state.groups.filter(stryMutAct_9fa48("6747") ? () => undefined : (stryCov_9fa48("6747"), group => stryMutAct_9fa48("6750") ? group.id === action.group.id : stryMutAct_9fa48("6749") ? false : stryMutAct_9fa48("6748") ? true : (stryCov_9fa48("6748", "6749", "6750"), group.id !== action.group.id))));
              const newGroups = sortGroups(groups, action.group, action.afterId);
              return stryMutAct_9fa48("6751") ? {} : (stryCov_9fa48("6751"), {
                ...state,
                groups: newGroups,
                group: {}
              });
            }
          }
        }
      case actionTypes.DELETE_GROUP_SUCCESS:
        if (stryMutAct_9fa48("6752")) {} else {
          stryCov_9fa48("6752");
          {
            if (stryMutAct_9fa48("6753")) {
              {}
            } else {
              stryCov_9fa48("6753");
              const groups = stryMutAct_9fa48("6754") ? state.groups : (stryCov_9fa48("6754"), state.groups.filter(stryMutAct_9fa48("6755") ? () => undefined : (stryCov_9fa48("6755"), group => stryMutAct_9fa48("6758") ? group.id === action.id : stryMutAct_9fa48("6757") ? false : stryMutAct_9fa48("6756") ? true : (stryCov_9fa48("6756", "6757", "6758"), group.id !== action.id))));
              return stryMutAct_9fa48("6759") ? {} : (stryCov_9fa48("6759"), {
                ...state,
                groups
              });
            }
          }
        }
      case actionTypes.SELECT_GROUP_SUCCESS:
        if (stryMutAct_9fa48("6760")) {} else {
          stryCov_9fa48("6760");
          {
            if (stryMutAct_9fa48("6761")) {
              {}
            } else {
              stryCov_9fa48("6761");
              let selectedGroup = state.groups.find(stryMutAct_9fa48("6762") ? () => undefined : (stryCov_9fa48("6762"), group => stryMutAct_9fa48("6765") ? group.id !== +action.id : stryMutAct_9fa48("6764") ? false : stryMutAct_9fa48("6763") ? true : (stryCov_9fa48("6763", "6764", "6765"), group.id === (stryMutAct_9fa48("6766") ? -action.id : (stryCov_9fa48("6766"), +action.id)))));
              if (stryMutAct_9fa48("6769") ? false : stryMutAct_9fa48("6768") ? true : stryMutAct_9fa48("6767") ? selectedGroup : (stryCov_9fa48("6767", "6768", "6769"), !selectedGroup)) {
                if (stryMutAct_9fa48("6770")) {
                  {}
                } else {
                  stryCov_9fa48("6770");
                  selectedGroup = stryMutAct_9fa48("6771") ? {} : (stryCov_9fa48("6771"), {
                    id: null
                  });
                }
              }
              return stryMutAct_9fa48("6772") ? {} : (stryCov_9fa48("6772"), {
                ...state,
                group: selectedGroup
              });
            }
          }
        }
      case actionTypes.CLEAR_GROUP_SUCCESS:
        if (stryMutAct_9fa48("6773")) {} else {
          stryCov_9fa48("6773");
          return stryMutAct_9fa48("6774") ? {} : (stryCov_9fa48("6774"), {
            ...state,
            group: {}
          });
        }
      default:
        if (stryMutAct_9fa48("6775")) {} else {
          stryCov_9fa48("6775");
          return state;
        }
    }
  }
};
export default reducer;