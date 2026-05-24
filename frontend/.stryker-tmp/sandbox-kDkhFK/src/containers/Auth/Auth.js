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
import { authUser, registerUser, resetUserPassword, setAuthError, setAuthLoading } from '../../actions';
import Auth from '../../components/Auth/Auth';
const mapStateToProps = stryMutAct_9fa48("4927") ? () => undefined : (stryCov_9fa48("4927"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("4928") ? {} : (stryCov_9fa48("4928"), {
    response: state.auth.response,
    resetPasswordResponse: state.auth.resetPasswordResponse,
    error: state.auth.error,
    token: state.auth.token,
    userRole: state.auth.role,
    isLoading: state.loadingIndicator.authLoading
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("4929") ? () => undefined : (stryCov_9fa48("4929"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("4930") ? {} : (stryCov_9fa48("4930"), {
    onAuth: stryMutAct_9fa48("4931") ? () => undefined : (stryCov_9fa48("4931"), data => dispatch(authUser(data))),
    onRegister: stryMutAct_9fa48("4932") ? () => undefined : (stryCov_9fa48("4932"), data => dispatch(registerUser(data))),
    onResetPassword: stryMutAct_9fa48("4933") ? () => undefined : (stryCov_9fa48("4933"), data => dispatch(resetUserPassword(data))),
    setLoadingForm: stryMutAct_9fa48("4934") ? () => undefined : (stryCov_9fa48("4934"), isLoading => dispatch(setAuthLoading(isLoading))),
    setError: stryMutAct_9fa48("4935") ? () => undefined : (stryCov_9fa48("4935"), error => dispatch(setAuthError(error)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(Auth);