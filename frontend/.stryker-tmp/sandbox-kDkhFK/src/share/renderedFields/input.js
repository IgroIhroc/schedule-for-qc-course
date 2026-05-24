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
import React from 'react';
import TextField from '@material-ui/core/TextField';
const renderTextField = ({
  label,
  input,
  meta: {
    touched,
    invalid,
    error
  },
  ...custom
}) => {
  if (stryMutAct_9fa48("8695")) {
    {}
  } else {
    stryCov_9fa48("8695");
    return <TextField label={label} placeholder={label} error={stryMutAct_9fa48("8698") ? touched || invalid : stryMutAct_9fa48("8697") ? false : stryMutAct_9fa48("8696") ? true : (stryCov_9fa48("8696", "8697", "8698"), touched && invalid)} helperText={stryMutAct_9fa48("8701") ? touched || error : stryMutAct_9fa48("8700") ? false : stryMutAct_9fa48("8699") ? true : (stryCov_9fa48("8699", "8700", "8701"), touched && error)} {...input} {...custom} />;
  }
};
export default renderTextField;