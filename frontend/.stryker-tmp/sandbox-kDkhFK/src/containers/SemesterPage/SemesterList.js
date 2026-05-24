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
import SemesterList from '../../components/Semester/SemesterList/SemesterList';
import { createArchivedSemesterStart, deleteSemesterStart, getArchivedSemesterByIdStart, selectSemesterSuccess, setGroupsToSemesterStart, setSemesterCopyStart, toggleSemesterVisibilityStart, updateSemesterByIdStartSuccess, updateSemesterStart } from '../../actions/semesters';
import { setIsOpenConfirmDialog } from '../../actions/dialog';
import { setOpenSuccessSnackbar } from '../../actions/snackbar';
const mapStateToProps = stryMutAct_9fa48("5311") ? () => undefined : (stryCov_9fa48("5311"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5312") ? {} : (stryCov_9fa48("5312"), {
    isOpenConfirmDialog: state.dialog.isOpenConfirmDialog,
    semesters: state.semesters.semesters,
    loading: state.loadingIndicator.loading
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5313") ? () => undefined : (stryCov_9fa48("5313"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5314") ? {} : (stryCov_9fa48("5314"), {
    createArchivedSemester: stryMutAct_9fa48("5315") ? () => undefined : (stryCov_9fa48("5315"), semesterId => dispatch(createArchivedSemesterStart(semesterId))),
    getArchivedSemesterById: stryMutAct_9fa48("5316") ? () => undefined : (stryCov_9fa48("5316"), semesterId => dispatch(getArchivedSemesterByIdStart(semesterId))),
    selectSemester: stryMutAct_9fa48("5317") ? () => undefined : (stryCov_9fa48("5317"), semesterId => dispatch(selectSemesterSuccess(semesterId))),
    setOpenConfirmDialog: stryMutAct_9fa48("5318") ? () => undefined : (stryCov_9fa48("5318"), newState => dispatch(setIsOpenConfirmDialog(newState))),
    updateSemesterSuccess: stryMutAct_9fa48("5319") ? () => undefined : (stryCov_9fa48("5319"), item => dispatch(updateSemesterStart(item))),
    removeSemesterCard: stryMutAct_9fa48("5320") ? () => undefined : (stryCov_9fa48("5320"), semesterId => dispatch(deleteSemesterStart(semesterId))),
    setDefaultSemesterById: stryMutAct_9fa48("5321") ? () => undefined : (stryCov_9fa48("5321"), semesterId => dispatch(updateSemesterByIdStartSuccess(semesterId))),
    semesterCopy: stryMutAct_9fa48("5322") ? () => undefined : (stryCov_9fa48("5322"), values => dispatch(setSemesterCopyStart(values))),
    setOpenSuccessSnackbar: stryMutAct_9fa48("5323") ? () => undefined : (stryCov_9fa48("5323"), message => dispatch(setOpenSuccessSnackbar(message))),
    setGroupsToSemester: stryMutAct_9fa48("5324") ? () => undefined : (stryCov_9fa48("5324"), (semesterId, groups) => dispatch(setGroupsToSemesterStart(semesterId, groups))),
    toggleSemesterVisibility: stryMutAct_9fa48("5325") ? () => undefined : (stryCov_9fa48("5325"), semester => dispatch(toggleSemesterVisibilityStart(semester)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(SemesterList);