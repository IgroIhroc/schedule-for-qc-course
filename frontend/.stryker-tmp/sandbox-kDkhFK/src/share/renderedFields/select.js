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
import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { renderFromHelper } from './error';
const SelectField = props => {
  if (stryMutAct_9fa48("8711")) {
    {}
  } else {
    stryCov_9fa48("8711");
    const {
      input,
      label,
      name,
      id,
      meta: {
        touched,
        error
      },
      children,
      className,
      ...custom
    } = props;
    const [isOpen, setIsOpen] = useState(stryMutAct_9fa48("8712") ? true : (stryCov_9fa48("8712"), false));
    return <FormControl className={className} error={stryMutAct_9fa48("8715") ? touched || !!error : stryMutAct_9fa48("8714") ? false : stryMutAct_9fa48("8713") ? true : (stryCov_9fa48("8713", "8714", "8715"), touched && (stryMutAct_9fa48("8716") ? !error : (stryCov_9fa48("8716"), !(stryMutAct_9fa48("8717") ? error : (stryCov_9fa48("8717"), !error)))))} onClick={stryMutAct_9fa48("8718") ? () => undefined : (stryCov_9fa48("8718"), () => setIsOpen(stryMutAct_9fa48("8719") ? () => undefined : (stryCov_9fa48("8719"), state => stryMutAct_9fa48("8720") ? state : (stryCov_9fa48("8720"), !state))))}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <Select {...input} {...custom} name={name} id={id} open={isOpen}>
                {children}
            </Select>
            {renderFromHelper(stryMutAct_9fa48("8721") ? {} : (stryCov_9fa48("8721"), {
        touched,
        error
      }))}
        </FormControl>;
  }
};
export default SelectField;