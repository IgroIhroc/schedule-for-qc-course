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
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { Icon } from '@material-ui/core';
import React from 'react';
import { clearSnackbar } from '../../actions/snackBarReducer';
export default function SuccessSnackbar() {
  if (stryMutAct_9fa48("2936")) {
    {}
  } else {
    stryCov_9fa48("2936");
    const dispatch = useDispatch();
    const {
      successSnackbarMessage,
      successSnackbarOpen
    } = useSelector(stryMutAct_9fa48("2937") ? () => undefined : (stryCov_9fa48("2937"), state => state));
    function handleClose() {
      if (stryMutAct_9fa48("2938")) {
        {}
      } else {
        stryCov_9fa48("2938");
        dispatch(clearSnackbar());
      }
    }
    return <Snackbar anchorOrigin={stryMutAct_9fa48("2939") ? {} : (stryCov_9fa48("2939"), {
      vertical: stryMutAct_9fa48("2940") ? "" : (stryCov_9fa48("2940"), 'bottom'),
      horizontal: stryMutAct_9fa48("2941") ? "" : (stryCov_9fa48("2941"), 'left')
    })} open={successSnackbarOpen} autoHideDuration={4000} onClose={stryMutAct_9fa48("2942") ? () => undefined : (stryCov_9fa48("2942"), () => handleClose())} aria-describedby="client-snackbar" message={<span id="client-snackbar">
                    <Icon>check_circle</Icon>
                    {successSnackbarMessage}
                </span>} action={stryMutAct_9fa48("2943") ? [] : (stryCov_9fa48("2943"), [<IconButton key="close" aria-label="close" color="inherit" onClick={stryMutAct_9fa48("2944") ? () => undefined : (stryCov_9fa48("2944"), () => handleClose())}>
                    <Icon>close</Icon>
                </IconButton>])} />;
  }
}