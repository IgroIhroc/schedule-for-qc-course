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
import './tableFooter.scss';
import TablePagination from '@material-ui/core/TablePagination';
import { useTranslation } from 'react-i18next';
import { ALL_PAGE, ROWS_PER_PAGE } from '../../constants/translationLabels/formElements';
import { RenderStudentTableActions } from './Pagination';
export const TableFooterComponent = props => {
  if (stryMutAct_9fa48("2990")) {
    {}
  } else {
    stryCov_9fa48("2990");
    const {
      page,
      setPage,
      rowsPerPage,
      setRowsPerPage,
      items
    } = props;
    const ALL_ROWS = items.length;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2991") ? "" : (stryCov_9fa48("2991"), 'formElements'));
    const onRowsPerPageChange = event => {
      if (stryMutAct_9fa48("2992")) {
        {}
      } else {
        stryCov_9fa48("2992");
        const {
          value
        } = event.target;
        setPage(0);
        setRowsPerPage(parseInt(value, 10));
      }
    };
    return <div className="table-footer">
            <TablePagination labelRowsPerPage={stryMutAct_9fa48("2993") ? `` : (stryCov_9fa48("2993"), `${t(ROWS_PER_PAGE)}`)} rowsPerPageOptions={stryMutAct_9fa48("2994") ? [] : (stryCov_9fa48("2994"), [5, 10, 25, stryMutAct_9fa48("2995") ? {} : (stryCov_9fa48("2995"), {
        label: stryMutAct_9fa48("2996") ? `` : (stryCov_9fa48("2996"), `${t(ALL_PAGE)}`),
        value: ALL_ROWS
      })])} count={items.length} rowsPerPage={rowsPerPage} page={page} SelectProps={stryMutAct_9fa48("2997") ? {} : (stryCov_9fa48("2997"), {
        inputProps: stryMutAct_9fa48("2998") ? {} : (stryCov_9fa48("2998"), {
          'aria-label': stryMutAct_9fa48("2999") ? "" : (stryCov_9fa48("2999"), 'rows per page')
        }),
        native: stryMutAct_9fa48("3000") ? false : (stryCov_9fa48("3000"), true)
      })} onPageChange={stryMutAct_9fa48("3001") ? () => undefined : (stryCov_9fa48("3001"), (_, newPage) => setPage(newPage))} onRowsPerPageChange={onRowsPerPageChange} ActionsComponent={RenderStudentTableActions} />
        </div>;
  }
};