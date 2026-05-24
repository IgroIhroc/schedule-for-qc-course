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
import './StudentTable.scss';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { useTranslation } from 'react-i18next';
import { FaEdit } from 'react-icons/all';
import { Delete } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { getTeacherFullName } from '../../helper/renderTeacher';
import { DELETE_LINK, EDIT_LINK, GROUP_LIST_LINK, SHOW_STUDENTS_LINK, STUDENT_LINK } from '../../constants/links';
import { DELETE_TITLE_LABEL, EDIT_TITLE, SELECT_STUDENT, SEND_LETTER_LABEL } from '../../constants/translationLabels/formElements';
export const StudentsTableBody = props => {
  if (stryMutAct_9fa48("2918")) {
    {}
  } else {
    stryCov_9fa48("2918");
    const {
      group,
      setStudent,
      checkStudent,
      setIsOpenUpdateDialog,
      selectStudentSuccess,
      currentStudentsOnList,
      setIsOpenConfirmDialog
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2919") ? "" : (stryCov_9fa48("2919"), 'formElements'));
    const sendMail = email => {
      if (stryMutAct_9fa48("2920")) {
        {}
      } else {
        stryCov_9fa48("2920");
        const mailto = stryMutAct_9fa48("2921") ? `` : (stryCov_9fa48("2921"), `mailto:${email}`);
        window.location.href = mailto;
      }
    };
    return <TableBody>
            {currentStudentsOnList.map(stryMutAct_9fa48("2922") ? () => undefined : (stryCov_9fa48("2922"), student => <TableRow key={student.id}>
                    <TableCell component="th" scope="row" align="center">
                        <div className="checkbox-table-body">
                            <Checkbox onChange={stryMutAct_9fa48("2923") ? () => undefined : (stryCov_9fa48("2923"), e => checkStudent(e))} checked={student.checked} value={student.id} color="primary" size="small" title={stryMutAct_9fa48("2924") ? `` : (stryCov_9fa48("2924"), `${t(SELECT_STUDENT)} ${getTeacherFullName(student)}`)} />
                        </div>
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                        {getTeacherFullName(student)}
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                        <button className="send-letter-button" title={stryMutAct_9fa48("2925") ? `` : (stryCov_9fa48("2925"), `${t(SEND_LETTER_LABEL)} ${student.email}`)} onClick={stryMutAct_9fa48("2926") ? () => undefined : (stryCov_9fa48("2926"), () => sendMail(student.email))} type="button">
                            {student.email}
                        </button>
                    </TableCell>
                    <TableCell component="th" scope="row" align="center">
                        <div className="edit-cell-table">
                            <Link to={stryMutAct_9fa48("2927") ? `` : (stryCov_9fa48("2927"), `${GROUP_LIST_LINK}/${group.id}${SHOW_STUDENTS_LINK}/${student.id}${EDIT_LINK}`)}>
                                <FaEdit className="edit-button-table" title={t(EDIT_TITLE)} onClick={() => {
                if (stryMutAct_9fa48("2928")) {
                  {}
                } else {
                  stryCov_9fa48("2928");
                  selectStudentSuccess(student.id);
                  setIsOpenUpdateDialog(stryMutAct_9fa48("2929") ? false : (stryCov_9fa48("2929"), true));
                }
              }} />
                            </Link>
                            <Link to={stryMutAct_9fa48("2930") ? `` : (stryCov_9fa48("2930"), `${GROUP_LIST_LINK}/${group.id}${STUDENT_LINK}/${student.id}${DELETE_LINK}`)}>
                                <Delete title={t(DELETE_TITLE_LABEL)} className="delete-button-table" onClick={() => {
                if (stryMutAct_9fa48("2931")) {
                  {}
                } else {
                  stryCov_9fa48("2931");
                  setStudent(student);
                  setIsOpenConfirmDialog(stryMutAct_9fa48("2932") ? false : (stryCov_9fa48("2932"), true));
                }
              }} />
                            </Link>
                        </div>
                    </TableCell>
                </TableRow>))}
        </TableBody>;
  }
};