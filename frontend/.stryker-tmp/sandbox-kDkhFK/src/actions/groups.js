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
import * as actionTypes from './actionsType';
export const showAllGroupsSuccess = stryMutAct_9fa48("317") ? () => undefined : (stryCov_9fa48("317"), (() => {
  const showAllGroupsSuccess = payload => stryMutAct_9fa48("318") ? {} : (stryCov_9fa48("318"), {
    type: actionTypes.SHOW_ALL_GROUPS_SUCCESS,
    payload
  });
  return showAllGroupsSuccess;
})());
export const getGroupByIdSuccess = stryMutAct_9fa48("319") ? () => undefined : (stryCov_9fa48("319"), (() => {
  const getGroupByIdSuccess = group => stryMutAct_9fa48("320") ? {} : (stryCov_9fa48("320"), {
    type: actionTypes.GET_GROUP_BY_ID_SUCCESS,
    group
  });
  return getGroupByIdSuccess;
})());
export const createGroupSuccess = stryMutAct_9fa48("321") ? () => undefined : (stryCov_9fa48("321"), (() => {
  const createGroupSuccess = (group, afterId) => stryMutAct_9fa48("322") ? {} : (stryCov_9fa48("322"), {
    type: actionTypes.CREATE_GROUP_SUCCESS,
    group,
    afterId
  });
  return createGroupSuccess;
})());
export const updateGroupSuccess = stryMutAct_9fa48("323") ? () => undefined : (stryCov_9fa48("323"), (() => {
  const updateGroupSuccess = (group, afterId) => stryMutAct_9fa48("324") ? {} : (stryCov_9fa48("324"), {
    type: actionTypes.UPDATE_GROUP_SUCCESS,
    group,
    afterId
  });
  return updateGroupSuccess;
})());
export const getAllPublicGroupsStart = stryMutAct_9fa48("325") ? () => undefined : (stryCov_9fa48("325"), (() => {
  const getAllPublicGroupsStart = id => stryMutAct_9fa48("326") ? {} : (stryCov_9fa48("326"), {
    type: actionTypes.GET_ALL_PUBLIC_GROUPS_START,
    id
  });
  return getAllPublicGroupsStart;
})());
export const deleteGroupSuccess = stryMutAct_9fa48("327") ? () => undefined : (stryCov_9fa48("327"), (() => {
  const deleteGroupSuccess = id => stryMutAct_9fa48("328") ? {} : (stryCov_9fa48("328"), {
    type: actionTypes.DELETE_GROUP_SUCCESS,
    id
  });
  return deleteGroupSuccess;
})());
export const selectGroupSuccess = stryMutAct_9fa48("329") ? () => undefined : (stryCov_9fa48("329"), (() => {
  const selectGroupSuccess = id => stryMutAct_9fa48("330") ? {} : (stryCov_9fa48("330"), {
    type: actionTypes.SELECT_GROUP_SUCCESS,
    id
  });
  return selectGroupSuccess;
})());
export const clearGroupSuccess = stryMutAct_9fa48("331") ? () => undefined : (stryCov_9fa48("331"), (() => {
  const clearGroupSuccess = () => stryMutAct_9fa48("332") ? {} : (stryCov_9fa48("332"), {
    type: actionTypes.CLEAR_GROUP_SUCCESS
  });
  return clearGroupSuccess;
})());
export const getDisabledGroupsStart = stryMutAct_9fa48("333") ? () => undefined : (stryCov_9fa48("333"), (() => {
  const getDisabledGroupsStart = () => stryMutAct_9fa48("334") ? {} : (stryCov_9fa48("334"), {
    type: actionTypes.GET_DISABLED_GROUPS_START
  });
  return getDisabledGroupsStart;
})());
export const getEnabledGroupsStart = stryMutAct_9fa48("335") ? () => undefined : (stryCov_9fa48("335"), (() => {
  const getEnabledGroupsStart = () => stryMutAct_9fa48("336") ? {} : (stryCov_9fa48("336"), {
    type: actionTypes.GET_ENABLED_GROUPS_START
  });
  return getEnabledGroupsStart;
})());
export const getGroupByIdStart = stryMutAct_9fa48("337") ? () => undefined : (stryCov_9fa48("337"), (() => {
  const getGroupByIdStart = id => stryMutAct_9fa48("338") ? {} : (stryCov_9fa48("338"), {
    type: actionTypes.GET_GROUP_BY_ID_START,
    id
  });
  return getGroupByIdStart;
})());
export const deleteGroupStart = stryMutAct_9fa48("339") ? () => undefined : (stryCov_9fa48("339"), (() => {
  const deleteGroupStart = id => stryMutAct_9fa48("340") ? {} : (stryCov_9fa48("340"), {
    type: actionTypes.DELETE_GROUP_START,
    id
  });
  return deleteGroupStart;
})());
export const submitGroupStart = stryMutAct_9fa48("341") ? () => undefined : (stryCov_9fa48("341"), (() => {
  const submitGroupStart = group => stryMutAct_9fa48("342") ? {} : (stryCov_9fa48("342"), {
    type: actionTypes.SUBMIT_GROUP_START,
    group
  });
  return submitGroupStart;
})());
export const clearGroupStart = stryMutAct_9fa48("343") ? () => undefined : (stryCov_9fa48("343"), (() => {
  const clearGroupStart = () => stryMutAct_9fa48("344") ? {} : (stryCov_9fa48("344"), {
    type: actionTypes.CLEAR_GROUP_START
  });
  return clearGroupStart;
})());
export const toggleDisabledStatus = stryMutAct_9fa48("345") ? () => undefined : (stryCov_9fa48("345"), (() => {
  const toggleDisabledStatus = (groupId, disabledStatus) => stryMutAct_9fa48("346") ? {} : (stryCov_9fa48("346"), {
    type: actionTypes.TOGGLE_DISABLED_STATUS_GROUP,
    groupId,
    disabledStatus
  });
  return toggleDisabledStatus;
})());
export const dragAndDropGroupStart = stryMutAct_9fa48("347") ? () => undefined : (stryCov_9fa48("347"), (() => {
  const dragAndDropGroupStart = (dragGroup, afterGroupId) => stryMutAct_9fa48("348") ? {} : (stryCov_9fa48("348"), {
    type: actionTypes.DRAG_AND_DROP_GROUP_START,
    dragGroup,
    afterGroupId
  });
  return dragAndDropGroupStart;
})());