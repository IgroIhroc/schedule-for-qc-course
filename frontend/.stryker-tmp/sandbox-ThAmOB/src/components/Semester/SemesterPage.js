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
import SemesterList from '../../containers/SemesterPage/SemesterList';
import { getGroupsOptionsForSelect } from '../../utils/selectUtils';
import SemesterSidebar from './SemesterSidebar';
const SemesterPage = props => {
  if (stryMutAct_9fa48("2794")) {
    {}
  } else {
    stryCov_9fa48("2794");
    const {
      groups,
      semester,
      getAllSemestersItems,
      getDisabledSemestersItems,
      handleSemesterFormSubmit,
      setOpenErrorSnackbar,
      getAllGroupsItems,
      classScheduler
      // it doesnt work, need to finish implement archived functionality
      // getArchivedSemestersItems,
      // archivedSemesters,
    } = props;
    const [term, setTerm] = useState(stryMutAct_9fa48("2795") ? "Stryker was here!" : (stryCov_9fa48("2795"), ''));
    const [disabled, setDisabled] = useState(stryMutAct_9fa48("2796") ? true : (stryCov_9fa48("2796"), false));
    const [archived, setArchived] = useState(stryMutAct_9fa48("2797") ? true : (stryCov_9fa48("2797"), false));
    const options = getGroupsOptionsForSelect(groups);
    useEffect(() => {
      if (stryMutAct_9fa48("2798")) {
        {}
      } else {
        stryCov_9fa48("2798");
        getAllGroupsItems();
      }
    }, stryMutAct_9fa48("2799") ? ["Stryker was here"] : (stryCov_9fa48("2799"), []));
    useEffect(() => {
      if (stryMutAct_9fa48("2800")) {
        {}
      } else {
        stryCov_9fa48("2800");
        if (stryMutAct_9fa48("2802") ? false : stryMutAct_9fa48("2801") ? true : (stryCov_9fa48("2801", "2802"), disabled)) {
          if (stryMutAct_9fa48("2803")) {
            {}
          } else {
            stryCov_9fa48("2803");
            getDisabledSemestersItems();
          }
        } else {
          if (stryMutAct_9fa48("2804")) {
            {}
          } else {
            stryCov_9fa48("2804");
            getAllSemestersItems();
          }
        }
        // it doesnt work, need to finish implement archived functionality
        // getArchivedSemestersItems();
      }
    }, stryMutAct_9fa48("2805") ? [] : (stryCov_9fa48("2805"), [disabled]));
    // it doesnt work, need to finish implement archeved functionality
    // const showArchivedHandler = () => {
    //     setArchived(!archived);
    //     setDisabled(false);
    //     return !archived ? setScheduleTypeService('archived') : setScheduleTypeService('default');
    // };

    return <div className="cards-container">
            <SemesterSidebar setTerm={setTerm} archived={archived} disabled={disabled} showDisabledHandle={() => {
        if (stryMutAct_9fa48("2806")) {
          {}
        } else {
          stryCov_9fa48("2806");
          setDisabled(stryMutAct_9fa48("2807") ? disabled : (stryCov_9fa48("2807"), !disabled));
          setArchived(stryMutAct_9fa48("2808") ? true : (stryCov_9fa48("2808"), false));
        }
      }} setOpenErrorSnackbar={setOpenErrorSnackbar} handleSemesterFormSubmit={handleSemesterFormSubmit} semester={semester} options={options} classScheduler={classScheduler} />
            <SemesterList term={term} archived={archived} disabled={disabled} options={options} />
        </div>;
  }
};
export default SemesterPage;