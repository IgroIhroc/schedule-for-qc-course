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
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { dateFormat } from '../../constants/formats';
const renderMonthPicker = ({
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
  if (stryMutAct_9fa48("8734")) {
    {}
  } else {
    stryCov_9fa48("8734");
    return <MuiPickersUtilsProvider utils={MomentUtils}>
            <DatePicker minDate={new Date()} placeholder="11/11/2021" clearable value={value ? moment(value, dateFormat).toDate() : null} format="DD/MM/YYYY" error={stryMutAct_9fa48("8737") ? touched || invalid : stryMutAct_9fa48("8736") ? false : stryMutAct_9fa48("8735") ? true : (stryCov_9fa48("8735", "8736", "8737"), touched && invalid)} helperText={(stryMutAct_9fa48("8740") ? touched || error : stryMutAct_9fa48("8739") ? false : stryMutAct_9fa48("8738") ? true : (stryCov_9fa48("8738", "8739", "8740"), touched && error)) ? stryMutAct_9fa48("8743") ? touched || error : stryMutAct_9fa48("8742") ? false : stryMutAct_9fa48("8741") ? true : (stryCov_9fa48("8741", "8742", "8743"), touched && error) : label} {...inputProps} {...custom} />
        </MuiPickersUtilsProvider>;
  }
};
export default renderMonthPicker;