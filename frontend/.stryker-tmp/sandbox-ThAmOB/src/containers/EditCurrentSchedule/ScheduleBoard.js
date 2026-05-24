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
import { checkAvailabilityChangeRoomScheduleStart, checkAvailabilityScheduleStart, deleteScheduleItemStart } from '../../actions/schedule';
import { getLessonsByGroupStart, selectGroupId } from '../../actions';
import ScheduleBoard from '../../components/EditCurrentSchedule/ScheduleBoard/ScheduleBoard';
const mapStateToProps = stryMutAct_9fa48("5077") ? () => undefined : (stryCov_9fa48("5077"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5078") ? {} : (stryCov_9fa48("5078"), {
    scheduleItems: state.schedule.items
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5079") ? () => undefined : (stryCov_9fa48("5079"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5080") ? {} : (stryCov_9fa48("5080"), {
    checkScheduleItemAvailability: stryMutAct_9fa48("5081") ? () => undefined : (stryCov_9fa48("5081"), item => dispatch(checkAvailabilityScheduleStart(item))),
    selectByGroupId: stryMutAct_9fa48("5082") ? () => undefined : (stryCov_9fa48("5082"), groupId => dispatch(selectGroupId(groupId))),
    checkRoomAvailability: stryMutAct_9fa48("5083") ? () => undefined : (stryCov_9fa48("5083"), item => dispatch(checkAvailabilityChangeRoomScheduleStart(item))),
    deleteScheduleItem: stryMutAct_9fa48("5084") ? () => undefined : (stryCov_9fa48("5084"), item => dispatch(deleteScheduleItemStart(item))),
    getLessonsByGroupId: stryMutAct_9fa48("5085") ? () => undefined : (stryCov_9fa48("5085"), id => dispatch(getLessonsByGroupStart(id)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleBoard);