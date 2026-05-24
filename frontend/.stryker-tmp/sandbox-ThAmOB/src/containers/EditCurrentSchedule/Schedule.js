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
import { connect } from 'react-redux';
import { addItemsToScheduleStart, editRoomItemToScheduleStart } from '../../actions/schedule';
import { getLessonsByGroupStart, selectGroupId, setScheduleLoading } from '../../actions';
import Schedule from '../../components/EditCurrentSchedule/Schedule/Schedule';
import { setScheduleOperationLoading } from "../../actions/loadingIndicator";
const mapStateToProps = stryMutAct_9fa48("5067") ? () => undefined : (stryCov_9fa48("5067"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5068") ? {} : (stryCov_9fa48("5068"), {
    groups: state.groups.groups,
    scheduleOperationLoading: state.loadingIndicator.scheduleOperationLoading
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5069") ? () => undefined : (stryCov_9fa48("5069"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5070") ? {} : (stryCov_9fa48("5070"), {
    addItemsToSchedule: stryMutAct_9fa48("5071") ? () => undefined : (stryCov_9fa48("5071"), item => dispatch(addItemsToScheduleStart(item))),
    editRoomItemToSchedule: stryMutAct_9fa48("5072") ? () => undefined : (stryCov_9fa48("5072"), item => dispatch(editRoomItemToScheduleStart(item))),
    selectedGroupById: stryMutAct_9fa48("5073") ? () => undefined : (stryCov_9fa48("5073"), id => dispatch(selectGroupId(id))),
    getLessonsByGroupId: stryMutAct_9fa48("5074") ? () => undefined : (stryCov_9fa48("5074"), id => dispatch(getLessonsByGroupStart(id))),
    setScheduleLoading: stryMutAct_9fa48("5075") ? () => undefined : (stryCov_9fa48("5075"), newState => dispatch(setScheduleLoading(newState))),
    setScheduleOperationLoading: stryMutAct_9fa48("5076") ? () => undefined : (stryCov_9fa48("5076"), loading => dispatch(setScheduleOperationLoading(loading)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(Schedule);