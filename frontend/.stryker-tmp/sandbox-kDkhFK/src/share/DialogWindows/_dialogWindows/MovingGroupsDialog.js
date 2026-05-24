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
import Select from 'react-select';
import { isEmpty } from 'lodash';
import i18n from '../../../i18n';
import CustomDialog from '../../../containers/Dialogs/CustomDialog';
import { COMMON_MOVE_TO_GROUP_TITLE } from '../../../constants/translationLabels/common';
import { dialogCloseButton, dialogMoveToGroupButton } from '../../../constants/dialogs';
import { getGroupsOptionsForSelect } from '../../../utils/selectUtils';
const MovingGroupsDialog = props => {
  if (stryMutAct_9fa48("8443")) {
    {}
  } else {
    stryCov_9fa48("8443");
    const {
      open,
      group,
      groups,
      onClose,
      moveStudentsToGroupStart
    } = props;
    const [newGroup, setNewGroup] = useState({});
    const [isDisabled, setIsDisabled] = useState(stryMutAct_9fa48("8444") ? false : (stryCov_9fa48("8444"), true));
    const groupsWithoutCurrentGroup = stryMutAct_9fa48("8445") ? groups : (stryCov_9fa48("8445"), groups.filter(stryMutAct_9fa48("8446") ? () => undefined : (stryCov_9fa48("8446"), item => stryMutAct_9fa48("8449") ? item.id === group.id : stryMutAct_9fa48("8448") ? false : stryMutAct_9fa48("8447") ? true : (stryCov_9fa48("8447", "8448", "8449"), item.id !== group.id))));
    const groupsOption = getGroupsOptionsForSelect(groupsWithoutCurrentGroup);
    const clearSelection = () => {
      if (stryMutAct_9fa48("8450")) {
        {}
      } else {
        stryCov_9fa48("8450");
        onClose();
        setNewGroup({});
      }
    };
    const selectGroup = currentGroup => {
      if (stryMutAct_9fa48("8451")) {
        {}
      } else {
        stryCov_9fa48("8451");
        if (stryMutAct_9fa48("8453") ? false : stryMutAct_9fa48("8452") ? true : (stryCov_9fa48("8452", "8453"), isEmpty(currentGroup))) {
          if (stryMutAct_9fa48("8454")) {
            {}
          } else {
            stryCov_9fa48("8454");
            return;
          }
        }
        setIsDisabled(stryMutAct_9fa48("8455") ? true : (stryCov_9fa48("8455"), false));
        setNewGroup(currentGroup);
      }
    };
    const handleSubmitGroupStudents = () => {
      if (stryMutAct_9fa48("8456")) {
        {}
      } else {
        stryCov_9fa48("8456");
        moveStudentsToGroupStart(newGroup);
        clearSelection();
      }
    };
    return <CustomDialog title={i18n.t(COMMON_MOVE_TO_GROUP_TITLE)} className="select-dialog" onClose={onClose} open={open} buttons={stryMutAct_9fa48("8457") ? [] : (stryCov_9fa48("8457"), [dialogMoveToGroupButton(handleSubmitGroupStudents, isDisabled), dialogCloseButton(clearSelection)])}>
            <Select disabled="disabled" classNamePrefix="react-select" options={groupsOption} onChange={selectGroup} />
        </CustomDialog>;
  }
};
MovingGroupsDialog.propTypes = stryMutAct_9fa48("8458") ? {} : (stryCov_9fa48("8458"), {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
});
export default MovingGroupsDialog;