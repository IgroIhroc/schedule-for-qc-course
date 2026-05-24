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
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import { useTranslation } from 'react-i18next';
import Checkbox from '@material-ui/core/Checkbox';
import { EMAIL_LABEL, SELECT_ALL, STUDENT_ACTIONS, STUDENT_FULL_NAME } from '../../constants/translationLabels/formElements';
export const StudentsTableHead = props => {
  if (stryMutAct_9fa48("2933")) {
    {}
  } else {
    stryCov_9fa48("2933");
    const {
      checkedAll,
      checkedAllOnPageClick
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2934") ? "" : (stryCov_9fa48("2934"), 'formElements'));
    return <TableHead>
            <TableRow>
                <TableCell>
                    <Checkbox className="checkbox-table-body" value="checkedAll" checked={checkedAll} onChange={checkedAllOnPageClick} color="primary" size="small" title={stryMutAct_9fa48("2935") ? `` : (stryCov_9fa48("2935"), `${t(SELECT_ALL)}`)} />
                </TableCell>
                <TableCell>{t(STUDENT_FULL_NAME)}</TableCell>
                <TableCell>{t(EMAIL_LABEL)}</TableCell>
                <TableCell>{t(STUDENT_ACTIONS)}</TableCell>
            </TableRow>
        </TableHead>;
  }
};