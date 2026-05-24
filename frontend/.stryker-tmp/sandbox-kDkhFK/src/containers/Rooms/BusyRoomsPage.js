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
import { getAllScheduleItemsStart } from '../../actions/schedule';
import BusyRoomPage from '../../components/BusyRoomsPage/BusyRoomsPage';
import { getBusyRoomsStart } from '../../actions/rooms';
import { getClassScheduleListStart } from '../../actions/classes';
import { setScheduleLoading } from '../../actions';
const mapStateToProps = stryMutAct_9fa48("5270") ? () => undefined : (stryCov_9fa48("5270"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5271") ? {} : (stryCov_9fa48("5271"), {
    busyRooms: state.rooms.rooms,
    semesterId: state.schedule.currentSemester.id,
    scheduleLoading: state.loadingIndicator.scheduleLoading,
    currentSemester: state.schedule.currentSemester
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5272") ? () => undefined : (stryCov_9fa48("5272"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5273") ? {} : (stryCov_9fa48("5273"), {
    getAllScheduleItems: stryMutAct_9fa48("5274") ? () => undefined : (stryCov_9fa48("5274"), () => dispatch(getAllScheduleItemsStart())),
    setScheduleLoading: stryMutAct_9fa48("5275") ? () => undefined : (stryCov_9fa48("5275"), newState => dispatch(setScheduleLoading(newState))),
    getBusyRooms: stryMutAct_9fa48("5276") ? () => undefined : (stryCov_9fa48("5276"), semesterId => dispatch(getBusyRoomsStart(semesterId))),
    getClassScheduleList: stryMutAct_9fa48("5277") ? () => undefined : (stryCov_9fa48("5277"), () => dispatch(getClassScheduleListStart()))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(BusyRoomPage);