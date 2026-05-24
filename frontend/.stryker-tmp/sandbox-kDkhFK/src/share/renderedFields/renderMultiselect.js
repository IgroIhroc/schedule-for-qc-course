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
import Multiselect from 'multiselect-react-dropdown';
import React, { useEffect } from 'react';
export const RenderMultiselect = ({
  input,
  options,
  hidePlaceholder,
  placeholder,
  displayValue,
  selectedValues,
  alwaysDisplayedItem
}) => {
  if (stryMutAct_9fa48("8702")) {
    {}
  } else {
    stryCov_9fa48("8702");
    useEffect(() => {
      if (stryMutAct_9fa48("8703")) {
        {}
      } else {
        stryCov_9fa48("8703");
        input.onChange(stryMutAct_9fa48("8704") ? [] : (stryCov_9fa48("8704"), [alwaysDisplayedItem]));
      }
    }, stryMutAct_9fa48("8705") ? [] : (stryCov_9fa48("8705"), [alwaysDisplayedItem.id]));
    return <>
            <Multiselect {...input} onBlur={stryMutAct_9fa48("8706") ? () => undefined : (stryCov_9fa48("8706"), () => input.onBlur())} onSelect={stryMutAct_9fa48("8707") ? () => undefined : (stryCov_9fa48("8707"), e => input.onChange(stryMutAct_9fa48("8708") ? [] : (stryCov_9fa48("8708"), [...e])))} onRemove={stryMutAct_9fa48("8709") ? () => undefined : (stryCov_9fa48("8709"), e => input.onChange(stryMutAct_9fa48("8710") ? [] : (stryCov_9fa48("8710"), [...e])))} options={options} displayValue={displayValue} placeholder={placeholder} hidePlaceholder={hidePlaceholder} selectedValues={selectedValues} preSelectedValues={selectedValues} disablePreSelectedValues />
        </>;
  }
};