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
import SemesterPage from '../../components/Semester/SemesterPage';
import { getAllSemestersStart, getArchivedSemestersStart, getDisabledSemestersStart, handleSemesterFormSubmitStart } from '../../actions/semesters';
import { getEnabledGroupsStart } from '../../actions/groups';
import { setOpenErrorSnackbar } from '../../actions/snackbar';
const mapStateToProps = stryMutAct_9fa48("5326") ? () => undefined : (stryCov_9fa48("5326"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5327") ? {} : (stryCov_9fa48("5327"), {
    archivedSemesters: state.semesters.archivedSemesters,
    isSnackbarOpen: state.snackbar.isSnackbarOpen,
    snackbarType: state.snackbar.snackbarType,
    snackbarMessage: state.snackbar.message,
    semester: state.semesters.semester,
    groups: state.groups.groups,
    isOpenConfirmDialog: state.dialog.isOpenConfirmDialog,
    classScheduler: state.classActions.classScheduler
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5328") ? () => undefined : (stryCov_9fa48("5328"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5329") ? {} : (stryCov_9fa48("5329"), {
    getAllSemestersItems: stryMutAct_9fa48("5330") ? () => undefined : (stryCov_9fa48("5330"), () => dispatch(getAllSemestersStart())),
    getDisabledSemestersItems: stryMutAct_9fa48("5331") ? () => undefined : (stryCov_9fa48("5331"), () => dispatch(getDisabledSemestersStart())),
    getArchivedSemestersItems: stryMutAct_9fa48("5332") ? () => undefined : (stryCov_9fa48("5332"), () => dispatch(getArchivedSemestersStart())),
    handleSemesterFormSubmit: stryMutAct_9fa48("5333") ? () => undefined : (stryCov_9fa48("5333"), values => dispatch(handleSemesterFormSubmitStart(values))),
    setOpenErrorSnackbar: stryMutAct_9fa48("5334") ? () => undefined : (stryCov_9fa48("5334"), message => dispatch(setOpenErrorSnackbar(message))),
    getAllGroupsItems: stryMutAct_9fa48("5335") ? () => undefined : (stryCov_9fa48("5335"), () => dispatch(getEnabledGroupsStart()))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(SemesterPage);