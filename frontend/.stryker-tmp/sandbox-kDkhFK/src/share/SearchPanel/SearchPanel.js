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
import { FaSearch } from 'react-icons/fa';
import { TextField } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { SHOW_ARCHIVED, SHOW_REGULAR, TYPE_TO_SEARCH } from '../../constants/translationLabels/formElements';
import Card from '../Card/Card';
import { COMMON_SHOW_DISABLED, COMMON_SHOW_ENABLED } from '../../constants/translationLabels/common';
const SearchPanel = ({
  SearchChange,
  showDisabled,
  showArchived,
  forLessons
}) => {
  if (stryMutAct_9fa48("8744")) {
    {}
  } else {
    stryCov_9fa48("8744");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("8745") ? "" : (stryCov_9fa48("8745"), 'formElements'));
    const [term, setTerm] = useState(stryMutAct_9fa48("8746") ? "Stryker was here!" : (stryCov_9fa48("8746"), ''));
    const [state, setState] = useState(stryMutAct_9fa48("8747") ? {} : (stryCov_9fa48("8747"), {
      checkedB: stryMutAct_9fa48("8748") ? true : (stryCov_9fa48("8748"), false),
      checkedArchived: stryMutAct_9fa48("8749") ? true : (stryCov_9fa48("8749"), false)
    }));
    const handleChange = event => {
      if (stryMutAct_9fa48("8750")) {
        {}
      } else {
        stryCov_9fa48("8750");
        setState(stryMutAct_9fa48("8751") ? {} : (stryCov_9fa48("8751"), {
          ...state,
          checkedB: stryMutAct_9fa48("8752") ? true : (stryCov_9fa48("8752"), false),
          [event.target.name]: event.target.checked
        }));
        if (stryMutAct_9fa48("8755") ? event.target.name !== 'checkedArchived' : stryMutAct_9fa48("8754") ? false : stryMutAct_9fa48("8753") ? true : (stryCov_9fa48("8753", "8754", "8755"), event.target.name === (stryMutAct_9fa48("8756") ? "" : (stryCov_9fa48("8756"), 'checkedArchived')))) {
          if (stryMutAct_9fa48("8757")) {
            {}
          } else {
            stryCov_9fa48("8757");
            showArchived();
          }
        }
        showDisabled();
      }
    };
    const onSearchChange = e => {
      if (stryMutAct_9fa48("8758")) {
        {}
      } else {
        stryCov_9fa48("8758");
        const newTerm = e.target.value;
        setTerm(newTerm);
        SearchChange(newTerm);
      }
    };
    return <Card additionClassName="search-group">
            {stryMutAct_9fa48("8761") ? !forLessons || <FormControlLabel control={<Switch checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />} label={!state.checkedB ? t(COMMON_SHOW_DISABLED) : t(COMMON_SHOW_ENABLED)} /> : stryMutAct_9fa48("8760") ? false : stryMutAct_9fa48("8759") ? true : (stryCov_9fa48("8759", "8760", "8761"), (stryMutAct_9fa48("8762") ? forLessons : (stryCov_9fa48("8762"), !forLessons)) && <FormControlLabel control={<Switch checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />} label={(stryMutAct_9fa48("8763") ? state.checkedB : (stryCov_9fa48("8763"), !state.checkedB)) ? t(COMMON_SHOW_DISABLED) : t(COMMON_SHOW_ENABLED)} />)}
            {(stryMutAct_9fa48("8766") ? !forLessons || showArchived : stryMutAct_9fa48("8765") ? false : stryMutAct_9fa48("8764") ? true : (stryCov_9fa48("8764", "8765", "8766"), (stryMutAct_9fa48("8767") ? forLessons : (stryCov_9fa48("8767"), !forLessons)) && showArchived)) ? <FormControlLabel control={<Switch checked={state.checkedArchived} onChange={handleChange} name="checkedArchived" color="secondary" />} label={(stryMutAct_9fa48("8768") ? state.checkedArchived : (stryCov_9fa48("8768"), !state.checkedArchived)) ? t(SHOW_ARCHIVED) : t(SHOW_REGULAR)} /> : null}

            <TextField className="form-field" label={<FaSearch />} placeholder={t(TYPE_TO_SEARCH)} value={term} onChange={onSearchChange} />
        </Card>;
  }
};
export default SearchPanel;