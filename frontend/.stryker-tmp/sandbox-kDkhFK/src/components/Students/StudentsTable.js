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
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import './StudentTable.scss';
import { TableFooterComponent } from '../Table/TableFooter';
import { StudentsTableBody } from './StudentsTableBody';
import { StudentsTableHead } from './StudentsTableHead';
export const StudentsTable = props => {
  if (stryMutAct_9fa48("2886")) {
    {}
  } else {
    stryCov_9fa48("2886");
    const {
      students,
      updateStudentSuccess,
      checkAllStudentsSuccess,
      setIsDisabledBtnMoveStudent
    } = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [checkedAll, setCheckedAll] = useState(stryMutAct_9fa48("2887") ? true : (stryCov_9fa48("2887"), false));
    const currentStudentsOnList = stryMutAct_9fa48("2888") ? students : (stryCov_9fa48("2888"), students.slice(stryMutAct_9fa48("2889") ? page / rowsPerPage : (stryCov_9fa48("2889"), page * rowsPerPage), stryMutAct_9fa48("2890") ? page * rowsPerPage - rowsPerPage : (stryCov_9fa48("2890"), (stryMutAct_9fa48("2891") ? page / rowsPerPage : (stryCov_9fa48("2891"), page * rowsPerPage)) + rowsPerPage)));
    const checkedAllOnPageClick = () => {
      if (stryMutAct_9fa48("2892")) {
        {}
      } else {
        stryCov_9fa48("2892");
        checkAllStudentsSuccess(currentStudentsOnList, checkedAll);
      }
    };
    const isCheckedAll = () => {
      if (stryMutAct_9fa48("2893")) {
        {}
      } else {
        stryCov_9fa48("2893");
        setCheckedAll(stryMutAct_9fa48("2894") ? currentStudentsOnList.some(item => item.checked) : (stryCov_9fa48("2894"), currentStudentsOnList.every(stryMutAct_9fa48("2895") ? () => undefined : (stryCov_9fa48("2895"), item => item.checked))));
      }
    };
    const checkStudent = event => {
      if (stryMutAct_9fa48("2896")) {
        {}
      } else {
        stryCov_9fa48("2896");
        const {
          value,
          checked
        } = event.target;
        const checkedStudent = stryMutAct_9fa48("2897") ? students : (stryCov_9fa48("2897"), students.filter(stryMutAct_9fa48("2898") ? () => undefined : (stryCov_9fa48("2898"), student => stryMutAct_9fa48("2901") ? student.id !== +value : stryMutAct_9fa48("2900") ? false : stryMutAct_9fa48("2899") ? true : (stryCov_9fa48("2899", "2900", "2901"), student.id === (stryMutAct_9fa48("2902") ? -value : (stryCov_9fa48("2902"), +value))))));
        updateStudentSuccess(stryMutAct_9fa48("2903") ? {} : (stryCov_9fa48("2903"), {
          ...checkedStudent[0],
          checked
        }));
        isCheckedAll();
      }
    };
    const checkIsDisabledBtn = () => {
      if (stryMutAct_9fa48("2904")) {
        {}
      } else {
        stryCov_9fa48("2904");
        if (stryMutAct_9fa48("2906") ? false : stryMutAct_9fa48("2905") ? true : (stryCov_9fa48("2905", "2906"), students.find(stryMutAct_9fa48("2907") ? () => undefined : (stryCov_9fa48("2907"), item => stryMutAct_9fa48("2910") ? item.checked !== true : stryMutAct_9fa48("2909") ? false : stryMutAct_9fa48("2908") ? true : (stryCov_9fa48("2908", "2909", "2910"), item.checked === (stryMutAct_9fa48("2911") ? false : (stryCov_9fa48("2911"), true))))))) {
          if (stryMutAct_9fa48("2912")) {
            {}
          } else {
            stryCov_9fa48("2912");
            setIsDisabledBtnMoveStudent(stryMutAct_9fa48("2913") ? true : (stryCov_9fa48("2913"), false));
          }
        } else {
          if (stryMutAct_9fa48("2914")) {
            {}
          } else {
            stryCov_9fa48("2914");
            setIsDisabledBtnMoveStudent(stryMutAct_9fa48("2915") ? false : (stryCov_9fa48("2915"), true));
          }
        }
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("2916")) {
        {}
      } else {
        stryCov_9fa48("2916");
        isCheckedAll();
        checkIsDisabledBtn();
      }
    }, stryMutAct_9fa48("2917") ? [] : (stryCov_9fa48("2917"), [currentStudentsOnList]));
    return <div className="table">
            <TableContainer>
                <Table>
                    <StudentsTableHead checkedAll={checkedAll} checkedAllOnPageClick={checkedAllOnPageClick} />
                    <StudentsTableBody page={page} rowsPerPage={rowsPerPage} checkStudent={checkStudent} setCheckedAll={setCheckedAll} currentStudentsOnList={currentStudentsOnList} {...props} />
                </Table>
                <TableFooterComponent page={page} items={students} setPage={setPage} rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} />
            </TableContainer>
        </div>;
  }
};