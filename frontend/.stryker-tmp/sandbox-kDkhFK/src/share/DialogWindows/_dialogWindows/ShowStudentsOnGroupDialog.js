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
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';
import { UploadFile } from '../../../components/UploadFile/UploadFile';
import CustomDialog from '../../../containers/Dialogs/CustomDialog';
import { GROUP_LABEL } from '../../../constants/translationLabels/formElements';
import { ShowStudentsOnGroupContent } from '../../../components/Students/ShowStudentsOnGroupContent';
import { dialogChooseGroupButton, dialogCloseButton, dialogUploadFromFileButton } from '../../../constants/dialogs';
const ShowStudentsOnGroupDialog = props => {
  if (stryMutAct_9fa48("8477")) {
    {}
  } else {
    stryCov_9fa48("8477");
    const {
      uploadStudentsToGroupStart,
      getAllStudentsStart,
      onDeleteStudent,
      students,
      onClose,
      groupId,
      loading,
      open,
      match,
      groups
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("8478") ? "" : (stryCov_9fa48("8478"), 'formElements'));
    const [group, setGroup] = useState({});
    const [isOpenUploadFileDialog, setIsOpenUploadFileDialog] = useState(stryMutAct_9fa48("8479") ? true : (stryCov_9fa48("8479"), false));
    const [isOpenMoveStudentsDialog, setIsOpenMoveStudentDialog] = useState(stryMutAct_9fa48("8480") ? true : (stryCov_9fa48("8480"), false));
    const [isDisabledBtnMoveStudent, setIsDisabledBtnMoveStudent] = useState(stryMutAct_9fa48("8481") ? true : (stryCov_9fa48("8481"), false));
    useEffect(() => {
      if (stryMutAct_9fa48("8482")) {
        {}
      } else {
        stryCov_9fa48("8482");
        getAllStudentsStart(groupId);
        setGroup(groups.find(stryMutAct_9fa48("8483") ? () => undefined : (stryCov_9fa48("8483"), item => stryMutAct_9fa48("8486") ? item.id !== +groupId : stryMutAct_9fa48("8485") ? false : stryMutAct_9fa48("8484") ? true : (stryCov_9fa48("8484", "8485", "8486"), item.id === (stryMutAct_9fa48("8487") ? -groupId : (stryCov_9fa48("8487"), +groupId))))));
      }
    }, stryMutAct_9fa48("8488") ? [] : (stryCov_9fa48("8488"), [groupId]));
    const showMoveStudentsByGroupDialog = () => {
      if (stryMutAct_9fa48("8489")) {
        {}
      } else {
        stryCov_9fa48("8489");
        setIsOpenMoveStudentDialog(stryMutAct_9fa48("8490") ? false : (stryCov_9fa48("8490"), true));
      }
    };
    const handleShowDialogFile = () => {
      if (stryMutAct_9fa48("8491")) {
        {}
      } else {
        stryCov_9fa48("8491");
        setIsOpenUploadFileDialog(stryMutAct_9fa48("8492") ? () => undefined : (stryCov_9fa48("8492"), prevState => stryMutAct_9fa48("8493") ? prevState : (stryCov_9fa48("8493"), !prevState)));
      }
    };
    const buttonClassName = stryMutAct_9fa48("8494") ? {} : (stryCov_9fa48("8494"), {
      additionClassName: stryMutAct_9fa48("8495") ? "" : (stryCov_9fa48("8495"), 'student-dialog-button-data')
    });
    const dialogButtons = stryMutAct_9fa48("8496") ? [] : (stryCov_9fa48("8496"), [dialogUploadFromFileButton(handleShowDialogFile, buttonClassName), dialogCloseButton(onClose, buttonClassName)]);
    return <>
            <CustomDialog open={open} title={stryMutAct_9fa48("8497") ? `` : (stryCov_9fa48("8497"), `${t(GROUP_LABEL)} - ${group.title}`)} onClose={onClose} buttons={(stryMutAct_9fa48("8498") ? isEmpty(students) : (stryCov_9fa48("8498"), !isEmpty(students))) ? stryMutAct_9fa48("8499") ? [] : (stryCov_9fa48("8499"), [dialogChooseGroupButton(showMoveStudentsByGroupDialog, isDisabledBtnMoveStudent, buttonClassName), ...dialogButtons]) : dialogButtons}>
                <ShowStudentsOnGroupContent group={group} match={match} groups={groups} loading={loading} students={students} onDeleteStudent={onDeleteStudent} isOpenMoveStudentsDialog={isOpenMoveStudentsDialog} setIsOpenMoveStudentDialog={setIsOpenMoveStudentDialog} setIsDisabledBtnMoveStudent={setIsDisabledBtnMoveStudent} />
            </CustomDialog>
            {stryMutAct_9fa48("8502") ? isOpenUploadFileDialog || <UploadFile group={group} open={isOpenUploadFileDialog} handleCloseDialogFile={handleShowDialogFile} uploadStudentsToGroupStart={uploadStudentsToGroupStart} /> : stryMutAct_9fa48("8501") ? false : stryMutAct_9fa48("8500") ? true : (stryCov_9fa48("8500", "8501", "8502"), isOpenUploadFileDialog && <UploadFile group={group} open={isOpenUploadFileDialog} handleCloseDialogFile={handleShowDialogFile} uploadStudentsToGroupStart={uploadStudentsToGroupStart} />)}
        </>;
  }
};
ShowStudentsOnGroupDialog.propTypes = stryMutAct_9fa48("8503") ? {} : (stryCov_9fa48("8503"), {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
});
export default ShowStudentsOnGroupDialog;