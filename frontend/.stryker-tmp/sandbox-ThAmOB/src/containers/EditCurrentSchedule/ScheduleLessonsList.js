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
import { checkAvailabilityChangeRoomScheduleStart, deleteScheduleItemStart } from '../../actions/schedule';
import { getLessonsByGroupStart, selectGroupId } from '../../actions';
import ScheduleLessonsList from '../../components/EditCurrentSchedule/ScheduleLessonList/ScheduleLessonList';
const mapStateToProps = stryMutAct_9fa48("5094") ? () => undefined : (stryCov_9fa48("5094"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5095") ? {} : (stryCov_9fa48("5095"), {
    groups: state.groups.groups,
    lessons: state.lesson.lessons,
    items: state.schedule.items
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5096") ? () => undefined : (stryCov_9fa48("5096"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5097") ? {} : (stryCov_9fa48("5097"), {
    selectByGroupId: stryMutAct_9fa48("5098") ? () => undefined : (stryCov_9fa48("5098"), groupId => dispatch(selectGroupId(groupId))),
    checkRoomAvailability: stryMutAct_9fa48("5099") ? () => undefined : (stryCov_9fa48("5099"), item => dispatch(checkAvailabilityChangeRoomScheduleStart(item))),
    deleteScheduleItem: stryMutAct_9fa48("5100") ? () => undefined : (stryCov_9fa48("5100"), item => dispatch(deleteScheduleItemStart(item))),
    getLessonsByGroupId: stryMutAct_9fa48("5101") ? () => undefined : (stryCov_9fa48("5101"), id => dispatch(getLessonsByGroupStart(id)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleLessonsList);