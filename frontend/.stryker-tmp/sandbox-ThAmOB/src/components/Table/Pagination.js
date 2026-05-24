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
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import './tableFooter.scss';
export const RenderStudentTableActions = props => {
  if (stryMutAct_9fa48("2945")) {
    {}
  } else {
    stryCov_9fa48("2945");
    const theme = useTheme();
    const {
      count,
      page,
      rowsPerPage,
      onPageChange
    } = props;
    const handleFirstPageButtonClick = event => {
      if (stryMutAct_9fa48("2946")) {
        {}
      } else {
        stryCov_9fa48("2946");
        onPageChange(event, 0);
      }
    };
    const handleBackButtonClick = event => {
      if (stryMutAct_9fa48("2947")) {
        {}
      } else {
        stryCov_9fa48("2947");
        onPageChange(event, stryMutAct_9fa48("2948") ? page + 1 : (stryCov_9fa48("2948"), page - 1));
      }
    };
    const handleNextButtonClick = event => {
      if (stryMutAct_9fa48("2949")) {
        {}
      } else {
        stryCov_9fa48("2949");
        onPageChange(event, stryMutAct_9fa48("2950") ? page - 1 : (stryCov_9fa48("2950"), page + 1));
      }
    };
    const handleLastPageButtonClick = event => {
      if (stryMutAct_9fa48("2951")) {
        {}
      } else {
        stryCov_9fa48("2951");
        onPageChange(event, stryMutAct_9fa48("2952") ? Math.min(0, Math.ceil(count / rowsPerPage) - 1) : (stryCov_9fa48("2952"), Math.max(0, stryMutAct_9fa48("2953") ? Math.ceil(count / rowsPerPage) + 1 : (stryCov_9fa48("2953"), Math.ceil(stryMutAct_9fa48("2954") ? count * rowsPerPage : (stryCov_9fa48("2954"), count / rowsPerPage)) - 1))));
      }
    };
    return <div className="pagination">
            <IconButton onClick={handleFirstPageButtonClick} disabled={stryMutAct_9fa48("2957") ? page !== 0 : stryMutAct_9fa48("2956") ? false : stryMutAct_9fa48("2955") ? true : (stryCov_9fa48("2955", "2956", "2957"), page === 0)} aria-label="first page">
                {(stryMutAct_9fa48("2960") ? theme.direction !== 'rtl' : stryMutAct_9fa48("2959") ? false : stryMutAct_9fa48("2958") ? true : (stryCov_9fa48("2958", "2959", "2960"), theme.direction === (stryMutAct_9fa48("2961") ? "" : (stryCov_9fa48("2961"), 'rtl')))) ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={stryMutAct_9fa48("2964") ? page !== 0 : stryMutAct_9fa48("2963") ? false : stryMutAct_9fa48("2962") ? true : (stryCov_9fa48("2962", "2963", "2964"), page === 0)} aria-label="previous page">
                {(stryMutAct_9fa48("2967") ? theme.direction !== 'rtl' : stryMutAct_9fa48("2966") ? false : stryMutAct_9fa48("2965") ? true : (stryCov_9fa48("2965", "2966", "2967"), theme.direction === (stryMutAct_9fa48("2968") ? "" : (stryCov_9fa48("2968"), 'rtl')))) ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton onClick={handleNextButtonClick} disabled={stryMutAct_9fa48("2972") ? page < Math.ceil(count / rowsPerPage) - 1 : stryMutAct_9fa48("2971") ? page > Math.ceil(count / rowsPerPage) - 1 : stryMutAct_9fa48("2970") ? false : stryMutAct_9fa48("2969") ? true : (stryCov_9fa48("2969", "2970", "2971", "2972"), page >= (stryMutAct_9fa48("2973") ? Math.ceil(count / rowsPerPage) + 1 : (stryCov_9fa48("2973"), Math.ceil(stryMutAct_9fa48("2974") ? count * rowsPerPage : (stryCov_9fa48("2974"), count / rowsPerPage)) - 1)))} aria-label="next page">
                {(stryMutAct_9fa48("2977") ? theme.direction !== 'rtl' : stryMutAct_9fa48("2976") ? false : stryMutAct_9fa48("2975") ? true : (stryCov_9fa48("2975", "2976", "2977"), theme.direction === (stryMutAct_9fa48("2978") ? "" : (stryCov_9fa48("2978"), 'rtl')))) ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton onClick={handleLastPageButtonClick} disabled={stryMutAct_9fa48("2982") ? page < Math.ceil(count / rowsPerPage) - 1 : stryMutAct_9fa48("2981") ? page > Math.ceil(count / rowsPerPage) - 1 : stryMutAct_9fa48("2980") ? false : stryMutAct_9fa48("2979") ? true : (stryCov_9fa48("2979", "2980", "2981", "2982"), page >= (stryMutAct_9fa48("2983") ? Math.ceil(count / rowsPerPage) + 1 : (stryCov_9fa48("2983"), Math.ceil(stryMutAct_9fa48("2984") ? count * rowsPerPage : (stryCov_9fa48("2984"), count / rowsPerPage)) - 1)))} aria-label="last page">
                {(stryMutAct_9fa48("2987") ? theme.direction !== 'rtl' : stryMutAct_9fa48("2986") ? false : stryMutAct_9fa48("2985") ? true : (stryCov_9fa48("2985", "2986", "2987"), theme.direction === (stryMutAct_9fa48("2988") ? "" : (stryCov_9fa48("2988"), 'rtl')))) ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>;
  }
};
RenderStudentTableActions.propTypes = stryMutAct_9fa48("2989") ? {} : (stryCov_9fa48("2989"), {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
});