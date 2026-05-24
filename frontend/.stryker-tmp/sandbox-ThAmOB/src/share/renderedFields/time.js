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
import MomentUtils from '@date-io/moment';
import * as moment from 'moment';
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
const renderTimePicker = ({
  label,
  input: {
    value,
    ...inputProps
  },
  meta: {
    touched,
    invalid,
    error
  },
  ...custom
}) => {
  if (stryMutAct_9fa48("8722")) {
    {}
  } else {
    stryCov_9fa48("8722");
    return <MuiPickersUtilsProvider utils={MomentUtils}>
            <TimePicker clearable ampm={stryMutAct_9fa48("8723") ? true : (stryCov_9fa48("8723"), false)} value={value ? moment(value, stryMutAct_9fa48("8724") ? "" : (stryCov_9fa48("8724"), 'HH:mm')).toDate() : null} error={stryMutAct_9fa48("8727") ? touched || invalid : stryMutAct_9fa48("8726") ? false : stryMutAct_9fa48("8725") ? true : (stryCov_9fa48("8725", "8726", "8727"), touched && invalid)} helperText={(stryMutAct_9fa48("8730") ? touched || error : stryMutAct_9fa48("8729") ? false : stryMutAct_9fa48("8728") ? true : (stryCov_9fa48("8728", "8729", "8730"), touched && error)) ? stryMutAct_9fa48("8733") ? touched || error : stryMutAct_9fa48("8732") ? false : stryMutAct_9fa48("8731") ? true : (stryCov_9fa48("8731", "8732", "8733"), touched && error) : label} format="HH:mm" {...inputProps} {...custom} />
        </MuiPickersUtilsProvider>;
  }
};
export default renderTimePicker;