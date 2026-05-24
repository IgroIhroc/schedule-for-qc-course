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
import { getLessonsByGroupStart, setScheduleLoading, showAllGroupsSuccess } from '../../actions';
import { getClassScheduleListStart } from '../../actions/classes';
import { clearScheduleStart, getAllScheduleItemsStart } from '../../actions/schedule';
import { getEnabledGroupsStart } from '../../actions/groups';
import EditCurrentSchedulePage from '../../components/EditCurrentSchedule/EditCurrentSchedulePage';
import { getListOfRoomsStart } from '../../actions/rooms';
const mapStateToProps = stryMutAct_9fa48("5055") ? () => undefined : (stryCov_9fa48("5055"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5056") ? {} : (stryCov_9fa48("5056"), {
    groups: state.groups.groups,
    lessons: state.lesson.lessons,
    groupId: state.lesson.groupId,
    scheduleLoading: state.loadingIndicator.scheduleLoading,
    scheduleItems: state.schedule.items,
    itemGroupId: state.schedule.itemGroupId,
    currentSemester: state.schedule.currentSemester,
    semester: state.schedule.semester
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5057") ? () => undefined : (stryCov_9fa48("5057"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5058") ? {} : (stryCov_9fa48("5058"), {
    getEnabledGroups: stryMutAct_9fa48("5059") ? () => undefined : (stryCov_9fa48("5059"), () => dispatch(getEnabledGroupsStart())),
    getAllLessonsByGroup: stryMutAct_9fa48("5060") ? () => undefined : (stryCov_9fa48("5060"), groupId => dispatch(getLessonsByGroupStart(groupId))),
    getAllScheduleItems: stryMutAct_9fa48("5061") ? () => undefined : (stryCov_9fa48("5061"), () => dispatch(getAllScheduleItemsStart())),
    clearScheduleItems: stryMutAct_9fa48("5062") ? () => undefined : (stryCov_9fa48("5062"), id => dispatch(clearScheduleStart(id))),
    setScheduleLoading: stryMutAct_9fa48("5063") ? () => undefined : (stryCov_9fa48("5063"), newState => dispatch(setScheduleLoading(newState))),
    showAllGroups: stryMutAct_9fa48("5064") ? () => undefined : (stryCov_9fa48("5064"), () => dispatch(showAllGroupsSuccess())),
    getClassScheduleList: stryMutAct_9fa48("5065") ? () => undefined : (stryCov_9fa48("5065"), () => dispatch(getClassScheduleListStart())),
    getListOfRooms: stryMutAct_9fa48("5066") ? () => undefined : (stryCov_9fa48("5066"), () => dispatch(getListOfRoomsStart()))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(EditCurrentSchedulePage);