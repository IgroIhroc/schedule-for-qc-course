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
import { change, reduxForm, untouch } from 'redux-form';
import { connect } from 'react-redux';
import { FREE_ROOMS } from '../../constants/reduxForms';
import { getAllSemestersStart } from '../../actions/semesters';
import { setRoomsLoading } from '../../actions/loadingIndicator';
import { getFreeRoomsStart } from '../../actions/rooms';
import FreeRoomForm from '../../components/FreeRoomsDialog/freeRoomForm';
const mapStateToProps = stryMutAct_9fa48("5278") ? () => undefined : (stryCov_9fa48("5278"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5279") ? {} : (stryCov_9fa48("5279"), {
    initialValues: stryMutAct_9fa48("5280") ? {} : (stryCov_9fa48("5280"), {
      semesterId: state.schedule.currentSemester.id
    }),
    freeRooms: state.rooms.freeRooms,
    semesters: state.semesters.semesters
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5281") ? () => undefined : (stryCov_9fa48("5281"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5282") ? {} : (stryCov_9fa48("5282"), {
    getAllSemestersItems: stryMutAct_9fa48("5283") ? () => undefined : (stryCov_9fa48("5283"), () => dispatch(getAllSemestersStart())),
    setRoomsLoading: stryMutAct_9fa48("5284") ? () => undefined : (stryCov_9fa48("5284"), newState => dispatch(setRoomsLoading(newState))),
    getFreeRoomsByParams: stryMutAct_9fa48("5285") ? () => undefined : (stryCov_9fa48("5285"), params => dispatch(getFreeRoomsStart(params))),
    clearField: fieldName => {
      if (stryMutAct_9fa48("5286")) {
        {}
      } else {
        stryCov_9fa48("5286");
        dispatch(change(FREE_ROOMS, fieldName));
        dispatch(untouch(FREE_ROOMS, fieldName));
      }
    }
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(stryMutAct_9fa48("5287") ? {} : (stryCov_9fa48("5287"), {
  form: FREE_ROOMS,
  enableReinitialize: stryMutAct_9fa48("5288") ? false : (stryCov_9fa48("5288"), true)
}))(FreeRoomForm));