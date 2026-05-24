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
import React, { Suspense, useEffect } from 'react';
import './i18n';
import { connect } from 'react-redux';
import Routers from './router/Routers';
import { authCheckState } from './actions/index';
import { handleSnackbarCloseService } from './services/snackbarService';
import SnackbarComponent from './share/Snackbar/SnackbarComponent';
import SuccessSnackbar from './components/SuccessSnackbar/SuccessSnackbar';
import './App.scss';
const App = props => {
  if (stryMutAct_9fa48("701")) {
    {}
  } else {
    stryCov_9fa48("701");
    const {
      isSnackbarOpen,
      snackbarType,
      snackbarMessage
    } = props;
    const handleSnackbarClose = (event, reason) => {
      if (stryMutAct_9fa48("702")) {
        {}
      } else {
        stryCov_9fa48("702");
        if (stryMutAct_9fa48("705") ? !reason !== 'clickaway' : stryMutAct_9fa48("704") ? false : stryMutAct_9fa48("703") ? true : (stryCov_9fa48("703", "704", "705"), (stryMutAct_9fa48("706") ? reason : (stryCov_9fa48("706"), !reason)) === (stryMutAct_9fa48("707") ? "" : (stryCov_9fa48("707"), 'clickaway')))) {
          if (stryMutAct_9fa48("708")) {
            {}
          } else {
            stryCov_9fa48("708");
            return;
          }
        }
        handleSnackbarCloseService();
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("709")) {
        {}
      } else {
        stryCov_9fa48("709");
        props.onTryAutoLogin();
      }
    }, stryMutAct_9fa48("710") ? [] : (stryCov_9fa48("710"), [props]));
    return <Suspense fallback={null}>
            <div className="container">
                <Routers />
                <SuccessSnackbar />
                <SnackbarComponent message={snackbarMessage} type={snackbarType} isOpen={isSnackbarOpen} handleSnackbarClose={handleSnackbarClose} />
            </div>
        </Suspense>;
  }
};
const mapStateToProps = stryMutAct_9fa48("711") ? () => undefined : (stryCov_9fa48("711"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("712") ? {} : (stryCov_9fa48("712"), {
    isSnackbarOpen: state.snackbar.isSnackbarOpen,
    snackbarType: state.snackbar.snackbarType,
    snackbarMessage: state.snackbar.message
  });
  return mapStateToProps;
})());
const mapDispatchToProps = dispatch => {
  if (stryMutAct_9fa48("713")) {
    {}
  } else {
    stryCov_9fa48("713");
    return stryMutAct_9fa48("714") ? {} : (stryCov_9fa48("714"), {
      onTryAutoLogin: stryMutAct_9fa48("715") ? () => undefined : (stryCov_9fa48("715"), () => dispatch(authCheckState()))
    });
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(App);