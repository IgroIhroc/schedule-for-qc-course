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
import SearchPanel from '../../share/SearchPanel/SearchPanel';
import SemesterForm from '../../containers/SemesterPage/SemesterForm';
import i18n from '../../i18n';
import { COMMON_SEMESTER_IS_NOT_UNIQUE } from '../../constants/translationLabels/common';
import { checkUniqSemester } from '../../validation/storeValidation';
import { checkSemesterYears } from '../../utils/formUtils';
const SemesterSidebar = props => {
  if (stryMutAct_9fa48("2809")) {
    {}
  } else {
    stryCov_9fa48("2809");
    const {
      setTerm,
      archived,
      disabled,
      showDisabledHandle,
      setOpenErrorSnackbar,
      handleSemesterFormSubmit,
      semester,
      options,
      classScheduler
    } = props;
    const [selectedGroups, setSelectedGroups] = useState(stryMutAct_9fa48("2810") ? ["Stryker was here"] : (stryCov_9fa48("2810"), []));
    const submitSemesterForm = values => {
      if (stryMutAct_9fa48("2811")) {
        {}
      } else {
        stryCov_9fa48("2811");
        const semesterDays = stryMutAct_9fa48("2812") ? ["Stryker was here"] : (stryCov_9fa48("2812"), []);
        const semesterClasses = stryMutAct_9fa48("2813") ? ["Stryker was here"] : (stryCov_9fa48("2813"), []);
        const semesterGroups = selectedGroups.map(group => {
          if (stryMutAct_9fa48("2814")) {
            {}
          } else {
            stryCov_9fa48("2814");
            return stryMutAct_9fa48("2815") ? {} : (stryCov_9fa48("2815"), {
              id: group.id,
              title: group.label
            });
          }
        });
        Object.keys(values).forEach(prop => {
          if (stryMutAct_9fa48("2816")) {
            {}
          } else {
            stryCov_9fa48("2816");
            if (stryMutAct_9fa48("2819") ? prop.indexOf('semester_days_markup_') >= 0 || values[prop] : stryMutAct_9fa48("2818") ? false : stryMutAct_9fa48("2817") ? true : (stryCov_9fa48("2817", "2818", "2819"), (stryMutAct_9fa48("2822") ? prop.indexOf('semester_days_markup_') < 0 : stryMutAct_9fa48("2821") ? prop.indexOf('semester_days_markup_') > 0 : stryMutAct_9fa48("2820") ? true : (stryCov_9fa48("2820", "2821", "2822"), prop.indexOf(stryMutAct_9fa48("2823") ? "" : (stryCov_9fa48("2823"), 'semester_days_markup_')) >= 0)) && values[prop])) {
              if (stryMutAct_9fa48("2824")) {
                {}
              } else {
                stryCov_9fa48("2824");
                semesterDays.push(stryMutAct_9fa48("2825") ? prop : (stryCov_9fa48("2825"), prop.substring(21)));
              }
            }
            if (stryMutAct_9fa48("2828") ? prop.indexOf('semester_classes_markup_') >= 0 || values[prop] : stryMutAct_9fa48("2827") ? false : stryMutAct_9fa48("2826") ? true : (stryCov_9fa48("2826", "2827", "2828"), (stryMutAct_9fa48("2831") ? prop.indexOf('semester_classes_markup_') < 0 : stryMutAct_9fa48("2830") ? prop.indexOf('semester_classes_markup_') > 0 : stryMutAct_9fa48("2829") ? true : (stryCov_9fa48("2829", "2830", "2831"), prop.indexOf(stryMutAct_9fa48("2832") ? "" : (stryCov_9fa48("2832"), 'semester_classes_markup_')) >= 0)) && values[prop])) {
              if (stryMutAct_9fa48("2833")) {
                {}
              } else {
                stryCov_9fa48("2833");
                semesterClasses.push(classScheduler.find(stryMutAct_9fa48("2834") ? () => undefined : (stryCov_9fa48("2834"), schedule => stryMutAct_9fa48("2837") ? schedule.id !== +prop.substring(24) : stryMutAct_9fa48("2836") ? false : stryMutAct_9fa48("2835") ? true : (stryCov_9fa48("2835", "2836", "2837"), schedule.id === (stryMutAct_9fa48("2838") ? -prop.substring(24) : (stryCov_9fa48("2838"), +(stryMutAct_9fa48("2839") ? prop : (stryCov_9fa48("2839"), prop.substring(24)))))))));
              }
            }
          }
        });
        const semesterItem = stryMutAct_9fa48("2840") ? {} : (stryCov_9fa48("2840"), {
          ...values,
          semester_groups: semesterGroups,
          semester_classes: semesterClasses,
          semester_days: semesterDays
        });
        if (stryMutAct_9fa48("2843") ? false : stryMutAct_9fa48("2842") ? true : stryMutAct_9fa48("2841") ? checkUniqSemester(semesterItem) : (stryCov_9fa48("2841", "2842", "2843"), !checkUniqSemester(semesterItem))) {
          if (stryMutAct_9fa48("2844")) {
            {}
          } else {
            stryCov_9fa48("2844");
            const message = i18n.t(COMMON_SEMESTER_IS_NOT_UNIQUE);
            setOpenErrorSnackbar(message);
            return;
          }
        }
        if (stryMutAct_9fa48("2847") ? false : stryMutAct_9fa48("2846") ? true : stryMutAct_9fa48("2845") ? checkSemesterYears(semesterItem.endDay, semesterItem.startDay, +semesterItem.year) : (stryCov_9fa48("2845", "2846", "2847"), !checkSemesterYears(semesterItem.endDay, semesterItem.startDay, stryMutAct_9fa48("2848") ? -semesterItem.year : (stryCov_9fa48("2848"), +semesterItem.year)))) return;
        handleSemesterFormSubmit(semesterItem);
        setSelectedGroups(stryMutAct_9fa48("2849") ? ["Stryker was here"] : (stryCov_9fa48("2849"), []));
      }
    };
    return <aside className="semester-aside-panel">
            <SearchPanel SearchChange={setTerm} showDisabled={showDisabledHandle}
      // it doesnt work, need to finish implement archeved functionality
      // showArchived={showArchivedHandler}
      />
            {stryMutAct_9fa48("2852") ? !(disabled || archived) || <SemesterForm selectedGroups={selectedGroups} setSelectedGroups={setSelectedGroups} className="form" onSubmit={submitSemesterForm} semester={semester} options={options} classScheduler={classScheduler} /> : stryMutAct_9fa48("2851") ? false : stryMutAct_9fa48("2850") ? true : (stryCov_9fa48("2850", "2851", "2852"), (stryMutAct_9fa48("2853") ? disabled || archived : (stryCov_9fa48("2853"), !(stryMutAct_9fa48("2856") ? disabled && archived : stryMutAct_9fa48("2855") ? false : stryMutAct_9fa48("2854") ? true : (stryCov_9fa48("2854", "2855", "2856"), disabled || archived)))) && <SemesterForm selectedGroups={selectedGroups} setSelectedGroups={setSelectedGroups} className="form" onSubmit={submitSemesterForm} semester={semester} options={options} classScheduler={classScheduler} />)}
        </aside>;
  }
};
export default SemesterSidebar;