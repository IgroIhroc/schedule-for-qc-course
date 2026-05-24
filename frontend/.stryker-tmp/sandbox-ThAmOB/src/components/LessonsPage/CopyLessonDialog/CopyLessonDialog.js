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
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { COMMON_CHOOSE_GROUP, COPY_TO_SAME_GROUP_ERROR } from '../../../constants/translationLabels/common';
import CustomDialog from '../../../containers/Dialogs/CustomDialog';
import { dialogChooseButton, dialogCloseButton } from '../../../constants/dialogs';
import './CopyLessonDialog.scss';
const CopyLessonDialog = props => {
  if (stryMutAct_9fa48("2068")) {
    {}
  } else {
    stryCov_9fa48("2068");
    const {
      onClose,
      lesson,
      translation,
      groups,
      groupId,
      open
    } = props;
    const [group, setGroup] = useState(stryMutAct_9fa48("2069") ? "Stryker was here!" : (stryCov_9fa48("2069"), ''));
    const [error, setError] = useState(stryMutAct_9fa48("2070") ? "Stryker was here!" : (stryCov_9fa48("2070"), ''));
    const chooseClickHandle = () => {
      if (stryMutAct_9fa48("2071")) {
        {}
      } else {
        stryCov_9fa48("2071");
        if (stryMutAct_9fa48("2074") ? false : stryMutAct_9fa48("2073") ? true : stryMutAct_9fa48("2072") ? group : (stryCov_9fa48("2072", "2073", "2074"), !group)) {
          if (stryMutAct_9fa48("2075")) {
            {}
          } else {
            stryCov_9fa48("2075");
            return;
          }
        }
        if (stryMutAct_9fa48("2078") ? group.id !== groupId : stryMutAct_9fa48("2077") ? false : stryMutAct_9fa48("2076") ? true : (stryCov_9fa48("2076", "2077", "2078"), group.id === groupId)) {
          if (stryMutAct_9fa48("2079")) {
            {}
          } else {
            stryCov_9fa48("2079");
            setError(translation(COPY_TO_SAME_GROUP_ERROR));
            return;
          }
        }
        onClose(stryMutAct_9fa48("2080") ? {} : (stryCov_9fa48("2080"), {
          lesson,
          group
        }));
      }
    };
    const handleChangeAutocomplete = (event, newValue) => {
      if (stryMutAct_9fa48("2081")) {
        {}
      } else {
        stryCov_9fa48("2081");
        setGroup(newValue);
        setError(null);
      }
    };
    const defaultProps = stryMutAct_9fa48("2082") ? {} : (stryCov_9fa48("2082"), {
      options: groups,
      getOptionLabel: stryMutAct_9fa48("2083") ? () => undefined : (stryCov_9fa48("2083"), option => option ? option.title : stryMutAct_9fa48("2084") ? "Stryker was here!" : (stryCov_9fa48("2084"), ''))
    });
    return <CustomDialog open={open} onClose={onClose} buttons={stryMutAct_9fa48("2085") ? [] : (stryCov_9fa48("2085"), [dialogChooseButton(chooseClickHandle), dialogCloseButton(stryMutAct_9fa48("2086") ? () => undefined : (stryCov_9fa48("2086"), () => onClose(stryMutAct_9fa48("2087") ? "Stryker was here!" : (stryCov_9fa48("2087"), ''))))])}>
            <Autocomplete {...defaultProps} id="group" multiple clearOnEscape openOnFocus className="groupField" onChange={handleChangeAutocomplete} renderInput={stryMutAct_9fa48("2088") ? () => undefined : (stryCov_9fa48("2088"), params => <TextField {...params} label={translation(COMMON_CHOOSE_GROUP)} error={stryMutAct_9fa48("2089") ? !error : (stryCov_9fa48("2089"), !(stryMutAct_9fa48("2090") ? error : (stryCov_9fa48("2090"), !error)))} helperText={stryMutAct_9fa48("2093") ? error && null : stryMutAct_9fa48("2092") ? false : stryMutAct_9fa48("2091") ? true : (stryCov_9fa48("2091", "2092", "2093"), error || null)} margin="normal" />)} />
        </CustomDialog>;
  }
};
CopyLessonDialog.propTypes = stryMutAct_9fa48("2094") ? {} : (stryCov_9fa48("2094"), {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  lesson: PropTypes.object.isRequired,
  translation: PropTypes.func.isRequired,
  groupId: PropTypes.oneOfType(stryMutAct_9fa48("2095") ? [] : (stryCov_9fa48("2095"), [PropTypes.number, PropTypes.string])).isRequired
});
export default CopyLessonDialog;