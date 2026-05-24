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
import MovingGroupsDialog from '../../share/DialogWindows/_dialogWindows/MovingGroupsDialog';
import { StudentsTable } from './StudentsTable';
import CustomDialog from '../../containers/Dialogs/CustomDialog';
import { dialogTypes } from '../../constants/dialogs';
import AddStudentDialog from '../../share/DialogWindows/_dialogWindows/AddStudentDialog';
import { STUDENT } from '../../constants/names';
export const StudentsPage = props => {
  if (stryMutAct_9fa48("2865")) {
    {}
  } else {
    stryCov_9fa48("2865");
    const {
      group,
      groups,
      students,
      deleteStudentStart,
      isOpenConfirmDialog,
      selectStudentSuccess,
      setIsOpenConfirmDialog,
      isOpenMoveStudentsDialog,
      moveStudentsToGroupStart,
      setIsOpenMoveStudentDialog
    } = props;
    const [student, setStudent] = useState(0);
    const [isOpenUpdateDialog, setIsOpenUpdateDialog] = useState(stryMutAct_9fa48("2866") ? true : (stryCov_9fa48("2866"), false));
    const confirmDeleteStudent = studentId => {
      if (stryMutAct_9fa48("2867")) {
        {}
      } else {
        stryCov_9fa48("2867");
        setIsOpenConfirmDialog(stryMutAct_9fa48("2868") ? true : (stryCov_9fa48("2868"), false));
        deleteStudentStart(studentId);
      }
    };
    const closeAddStudentDialog = () => {
      if (stryMutAct_9fa48("2869")) {
        {}
      } else {
        stryCov_9fa48("2869");
        setIsOpenUpdateDialog(stryMutAct_9fa48("2870") ? true : (stryCov_9fa48("2870"), false));
        selectStudentSuccess(null);
      }
    };
    return <>
            <StudentsTable students={students} setStudent={setStudent} setIsOpenUpdateDialog={setIsOpenUpdateDialog} {...props} />
            {stryMutAct_9fa48("2873") ? isOpenMoveStudentsDialog || <MovingGroupsDialog group={group} groups={groups} open={isOpenMoveStudentsDialog} checkBoxStudents={students} onClose={() => setIsOpenMoveStudentDialog(false)} moveStudentsToGroupStart={moveStudentsToGroupStart} /> : stryMutAct_9fa48("2872") ? false : stryMutAct_9fa48("2871") ? true : (stryCov_9fa48("2871", "2872", "2873"), isOpenMoveStudentsDialog && <MovingGroupsDialog group={group} groups={groups} open={isOpenMoveStudentsDialog} checkBoxStudents={students} onClose={stryMutAct_9fa48("2874") ? () => undefined : (stryCov_9fa48("2874"), () => setIsOpenMoveStudentDialog(stryMutAct_9fa48("2875") ? true : (stryCov_9fa48("2875"), false)))} moveStudentsToGroupStart={moveStudentsToGroupStart} />)}
            {stryMutAct_9fa48("2878") ? isOpenUpdateDialog || <AddStudentDialog groupId={group.id} open={isOpenUpdateDialog} setOpen={closeAddStudentDialog} /> : stryMutAct_9fa48("2877") ? false : stryMutAct_9fa48("2876") ? true : (stryCov_9fa48("2876", "2877", "2878"), isOpenUpdateDialog && <AddStudentDialog groupId={group.id} open={isOpenUpdateDialog} setOpen={closeAddStudentDialog} />)}
            <CustomDialog whatDelete={STUDENT} open={isOpenConfirmDialog} type={dialogTypes.DELETE_CONFIRM} handelConfirm={stryMutAct_9fa48("2879") ? () => undefined : (stryCov_9fa48("2879"), () => confirmDeleteStudent(student.id))} />
        </>;
  }
};