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
export const BACK_END_SUCCESS_OPERATION = stryMutAct_9fa48("4842") ? "" : (stryCov_9fa48("4842"), 'serviceMessages:back_end_success_operation');
export const BACK_END_ACTION_SUCCESS = stryMutAct_9fa48("4843") ? "" : (stryCov_9fa48("4843"), 'serviceMessages:back_end_action_success');
export const CREATED_LABEL = stryMutAct_9fa48("4844") ? "" : (stryCov_9fa48("4844"), 'serviceMessages:created_label');
export const UPDATED_LABEL = stryMutAct_9fa48("4845") ? "" : (stryCov_9fa48("4845"), 'serviceMessages:updated_label');
export const DELETED_LABEL = stryMutAct_9fa48("4846") ? "" : (stryCov_9fa48("4846"), 'serviceMessages:deleted_label');
export const FILE_LABEL = stryMutAct_9fa48("4847") ? "" : (stryCov_9fa48("4847"), 'serviceMessages:file_label');
export const SEMESTER_SERVICE_IS_ACTIVE = stryMutAct_9fa48("4848") ? "" : (stryCov_9fa48("4848"), 'serviceMessages:semester_service_is_active');
export const SEMESTER_SERVICE_NOT_AS_BEGIN_OR_END = stryMutAct_9fa48("4849") ? "" : (stryCov_9fa48("4849"), 'serviceMessages:semester_service_not_as_begin_or_end');
export const FILE_BACK_END_SUCCESS_OPERATION = stryMutAct_9fa48("4850") ? "" : (stryCov_9fa48("4850"), 'serviceMessages:file_backend_success_operation');
export const COPIED_LABEL = stryMutAct_9fa48("4851") ? "" : (stryCov_9fa48("4851"), 'serviceMessages:copied_label');
export const ARCHIVED_LABEL = stryMutAct_9fa48("4852") ? "" : (stryCov_9fa48("4852"), 'serviceMessages:archived_label');
export const CLEARED_LABEL = stryMutAct_9fa48("4853") ? "" : (stryCov_9fa48("4853"), 'serviceMessages:cleared_label');
export const SERVICE_MESSAGE_GROUP_LABEL = stryMutAct_9fa48("4854") ? "" : (stryCov_9fa48("4854"), 'serviceMessages:group_label');
export const CHOSEN_SEMESTER_HAS_NOT_GROUPS = stryMutAct_9fa48("4855") ? "" : (stryCov_9fa48("4855"), 'serviceMessages:chosen_semester_has_not_groups');
export const SERVICE_MESSAGE_SENT_LABEL = stryMutAct_9fa48("4856") ? "" : (stryCov_9fa48("4856"), 'serviceMessages:sent_label');
export const EXIST_LABEL = stryMutAct_9fa48("4857") ? "" : (stryCov_9fa48("4857"), 'serviceMessages:exist_label');
export const GROUP_EXIST_IN_THIS_SEMESTER = stryMutAct_9fa48("4858") ? "" : (stryCov_9fa48("4858"), 'serviceMessages:group_exist_in_this_semester');
export const STUDENTS_EXIST_IN_THIS_GROUP = stryMutAct_9fa48("4859") ? "" : (stryCov_9fa48("4859"), 'serviceMessages:students_exist_in_this_group');
export const SUCCESSFULLY_MERGED = stryMutAct_9fa48("4860") ? "" : (stryCov_9fa48("4860"), 'serviceMessages:successfully_merged');
export const MOVED_TO_GROUP_LABEL = stryMutAct_9fa48("4861") ? "" : (stryCov_9fa48("4861"), 'serviceMessages:moved_to_group');