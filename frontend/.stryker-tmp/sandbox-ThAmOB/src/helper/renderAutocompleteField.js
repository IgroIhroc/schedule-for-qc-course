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
import { Autocomplete } from '@material-ui/lab';
import { FormControl, TextField } from '@material-ui/core';
import { renderFromHelper } from '../share/renderedFields/error';
export const renderAutocompleteField = ({
  values,
  label,
  input,
  handleChange,
  getOptionLabel,
  meta: {
    touched,
    error
  },
  className,
  ...custom
}) => {
  if (stryMutAct_9fa48("5683")) {
    {}
  } else {
    stryCov_9fa48("5683");
    return <Autocomplete {...input} {...custom} label={label} options={values} placeholder={label} getOptionLabel={getOptionLabel} className={className} onChange={(_, value) => {
      if (stryMutAct_9fa48("5684")) {
        {}
      } else {
        stryCov_9fa48("5684");
        if (stryMutAct_9fa48("5686") ? false : stryMutAct_9fa48("5685") ? true : (stryCov_9fa48("5685", "5686"), handleChange)) {
          if (stryMutAct_9fa48("5687")) {
            {}
          } else {
            stryCov_9fa48("5687");
            handleChange(value);
          }
        }
        return input.onChange(value);
      }
    }} onBlur={stryMutAct_9fa48("5688") ? () => undefined : (stryCov_9fa48("5688"), (_, value) => input.onBlur(value))} renderInput={stryMutAct_9fa48("5689") ? () => undefined : (stryCov_9fa48("5689"), params => <FormControl error={stryMutAct_9fa48("5692") ? touched || !!error : stryMutAct_9fa48("5691") ? false : stryMutAct_9fa48("5690") ? true : (stryCov_9fa48("5690", "5691", "5692"), touched && (stryMutAct_9fa48("5693") ? !error : (stryCov_9fa48("5693"), !(stryMutAct_9fa48("5694") ? error : (stryCov_9fa48("5694"), !error)))))} fullWidth>
                    <TextField {...params} label={label} />
                    {renderFromHelper(stryMutAct_9fa48("5695") ? {} : (stryCov_9fa48("5695"), {
        touched,
        error
      }))}
                </FormControl>)} />;
  }
};