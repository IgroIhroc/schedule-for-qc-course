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
import { useTranslation } from 'react-i18next';
import { Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import { isEmpty } from 'lodash';
import './SemesterForm.scss';
import renderCheckboxField from '../../../share/renderedFields/checkbox';
import renderTextField from '../../../share/renderedFields/input';
import renderMonthPicker from '../../../share/renderedFields/timeSemester';
import MultiselectForGroups from '../../../share/Multiselects/MultiSelectForGroups';
import { greaterThanDate, lessThanDate, minYearValue, required } from '../../../validation/validateFields';
import { getClearOrCancelTitle, setDisableButton, setDisabledSaveButtonSemester } from '../../../helper/disableComponent';
import Card from '../../../share/Card/Card';
import { COMMON_CHOOSE_GROUPS_BUTTON_LABEL, COMMON_CLASS_FROM_LABEL, COMMON_CLASS_SCHEDULE_MANAGEMENT_TITLE, COMMON_CLASS_TO_LABEL, COMMON_CREATE, COMMON_CURRENT_LABEL, COMMON_DAYS_LABEL, COMMON_DEFAULT_LABEL, COMMON_EDIT, COMMON_SAVE_BUTTON_LABEL, COMMON_SEMESTER, COMMON_SEMESTER_LABEL, COMMON_YEAR_LABEL } from '../../../constants/translationLabels/common';
import SetSemesterCheckboxes from './SemesterCheckboxes';
import { initialCheckboxesStateForClasses, initialCheckboxesStateForDays } from '../../../utils/formUtils';
import { getGroupsOptionsForSelect } from '../../../utils/selectUtils';
import { SEMESTER_FORM } from '../../../constants/reduxForms';
const SemesterForm = props => {
  if (stryMutAct_9fa48("2602")) {
    {}
  } else {
    stryCov_9fa48("2602");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2603") ? "" : (stryCov_9fa48("2603"), 'formElements'));
    const {
      handleSubmit,
      pristine,
      submitting,
      semester,
      classScheduler,
      initialize,
      reset,
      selectedGroups,
      setSelectedGroups,
      options,
      clearSemesterSuccess
    } = props;
    const [checkedClasses, setCheckedClasses] = useState({});
    const [checkedDates, setCheckedDates] = useState(initialCheckboxesStateForDays);
    const [current, setCurrent] = useState(stryMutAct_9fa48("2604") ? true : (stryCov_9fa48("2604"), false));
    const [byDefault, setByDefault] = useState(stryMutAct_9fa48("2605") ? true : (stryCov_9fa48("2605"), false));
    const [openGroupDialog, setOpenGroupDialog] = useState(stryMutAct_9fa48("2606") ? true : (stryCov_9fa48("2606"), false));
    const clearCheckboxes = () => {
      if (stryMutAct_9fa48("2607")) {
        {}
      } else {
        stryCov_9fa48("2607");
        setCurrent(stryMutAct_9fa48("2608") ? true : (stryCov_9fa48("2608"), false));
        setByDefault(stryMutAct_9fa48("2609") ? true : (stryCov_9fa48("2609"), false));
        setCheckedDates(initialCheckboxesStateForDays);
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("2610")) {
        {}
      } else {
        stryCov_9fa48("2610");
        const prepSetCheckedClasses = initialCheckboxesStateForClasses(classScheduler);
        setCheckedClasses(stryMutAct_9fa48("2611") ? {} : (stryCov_9fa48("2611"), {
          ...prepSetCheckedClasses
        }));
        const semesterItem = stryMutAct_9fa48("2612") ? {} : (stryCov_9fa48("2612"), {
          ...semester
        });
        clearCheckboxes();
        if (stryMutAct_9fa48("2614") ? false : stryMutAct_9fa48("2613") ? true : (stryCov_9fa48("2613", "2614"), semester.id)) {
          if (stryMutAct_9fa48("2615")) {
            {}
          } else {
            stryCov_9fa48("2615");
            const newDays = {};
            const newClasses = {};
            semesterItem.semester_days.forEach(item => {
              if (stryMutAct_9fa48("2616")) {
                {}
              } else {
                stryCov_9fa48("2616");
                semesterItem[stryMutAct_9fa48("2617") ? `` : (stryCov_9fa48("2617"), `semester_days_markup_${item}`)] = stryMutAct_9fa48("2618") ? false : (stryCov_9fa48("2618"), true);
                newDays[item] = stryMutAct_9fa48("2619") ? false : (stryCov_9fa48("2619"), true);
              }
            });
            setCheckedDates(stryMutAct_9fa48("2620") ? {} : (stryCov_9fa48("2620"), {
              ...initialCheckboxesStateForDays,
              ...newDays
            }));
            semesterItem.semester_classes.forEach(item => {
              if (stryMutAct_9fa48("2621")) {
                {}
              } else {
                stryCov_9fa48("2621");
                semesterItem[stryMutAct_9fa48("2622") ? `` : (stryCov_9fa48("2622"), `semester_classes_markup_${item.id}`)] = stryMutAct_9fa48("2623") ? false : (stryCov_9fa48("2623"), true);
                newClasses[item.id] = stryMutAct_9fa48("2624") ? false : (stryCov_9fa48("2624"), true);
              }
            });
            setCurrent(semester.currentSemester);
            setByDefault(semester.defaultSemester);
            setCheckedClasses(stryMutAct_9fa48("2625") ? {} : (stryCov_9fa48("2625"), {
              ...prepSetCheckedClasses,
              ...newClasses
            }));
          }
        }
        initialize(semesterItem);
      }
    }, stryMutAct_9fa48("2626") ? [] : (stryCov_9fa48("2626"), [semester, classScheduler]));
    useEffect(() => {
      if (stryMutAct_9fa48("2627")) {
        {}
      } else {
        stryCov_9fa48("2627");
        if (stryMutAct_9fa48("2630") ? false : stryMutAct_9fa48("2629") ? true : stryMutAct_9fa48("2628") ? isEmpty(semester.semester_groups) : (stryCov_9fa48("2628", "2629", "2630"), !isEmpty(semester.semester_groups))) {
          if (stryMutAct_9fa48("2631")) {
            {}
          } else {
            stryCov_9fa48("2631");
            setSelectedGroups(getGroupsOptionsForSelect(semester.semester_groups));
          }
        }
      }
    }, stryMutAct_9fa48("2632") ? [] : (stryCov_9fa48("2632"), [semester.id]));
    const openDialogForGroup = () => {
      if (stryMutAct_9fa48("2633")) {
        {}
      } else {
        stryCov_9fa48("2633");
        setOpenGroupDialog(stryMutAct_9fa48("2634") ? false : (stryCov_9fa48("2634"), true));
      }
    };
    const closeDialogForGroup = () => {
      if (stryMutAct_9fa48("2635")) {
        {}
      } else {
        stryCov_9fa48("2635");
        setOpenGroupDialog(stryMutAct_9fa48("2636") ? true : (stryCov_9fa48("2636"), false));
      }
    };
    const resetSemesterForm = () => {
      if (stryMutAct_9fa48("2637")) {
        {}
      } else {
        stryCov_9fa48("2637");
        setSelectedGroups(stryMutAct_9fa48("2638") ? ["Stryker was here"] : (stryCov_9fa48("2638"), []));
        clearSemesterSuccess();
        reset(SEMESTER_FORM);
      }
    };
    return <Card additionClassName="semester-form-card">
            <h2 className="card-title">
                {semester.id ? t(COMMON_EDIT) : t(COMMON_CREATE)}
                {stryMutAct_9fa48("2639") ? `` : (stryCov_9fa48("2639"), ` ${t(COMMON_SEMESTER)}`)}
            </h2>
            <MultiselectForGroups open={openGroupDialog} options={options} value={selectedGroups} onChange={setSelectedGroups} onCancel={closeDialogForGroup} onClose={closeDialogForGroup} />
            <form onSubmit={handleSubmit}>
                <div className="semester-checkboxes">
                    <div>
                        <Field name="currentSemester" label={t(COMMON_CURRENT_LABEL)} labelPlacement="start" component={renderCheckboxField} checked={current} onChange={stryMutAct_9fa48("2640") ? () => undefined : (stryCov_9fa48("2640"), event => setCurrent(event.target.checked))} color="primary" />
                        <Field name="defaultSemester" label={t(COMMON_DEFAULT_LABEL)} labelPlacement="start" component={renderCheckboxField} checked={byDefault} onChange={stryMutAct_9fa48("2641") ? () => undefined : (stryCov_9fa48("2641"), event => setByDefault(event.target.checked))} color="primary" />
                    </div>
                    <Button variant="contained" color="primary" className="buttons-style" onClick={openDialogForGroup}>
                        {t(COMMON_CHOOSE_GROUPS_BUTTON_LABEL)}
                    </Button>
                </div>
                <div className="semester-inputs-block">
                    <Field className="semester-field-input" name="year" type="number" component={renderTextField} label={stryMutAct_9fa48("2642") ? `` : (stryCov_9fa48("2642"), `${t(COMMON_YEAR_LABEL)}:`)} validate={stryMutAct_9fa48("2643") ? [] : (stryCov_9fa48("2643"), [required, minYearValue])} />
                    <Field className="semester-field-input" name="description" component={renderTextField} label={stryMutAct_9fa48("2644") ? `` : (stryCov_9fa48("2644"), `${t(COMMON_SEMESTER_LABEL)}:`)} validate={stryMutAct_9fa48("2645") ? [] : (stryCov_9fa48("2645"), [required])} />
                </div>
                <div className="semester-inputs-block">
                    <Field className="semester-field-input" name="startDay" component={renderMonthPicker} label={stryMutAct_9fa48("2646") ? `` : (stryCov_9fa48("2646"), `${t(COMMON_CLASS_FROM_LABEL)}:`)} validate={stryMutAct_9fa48("2647") ? [] : (stryCov_9fa48("2647"), [required, lessThanDate])} />
                    <Field className="semester-field-input" name="endDay" component={renderMonthPicker} label={stryMutAct_9fa48("2648") ? `` : (stryCov_9fa48("2648"), `${t(COMMON_CLASS_TO_LABEL)}:`)} validate={stryMutAct_9fa48("2649") ? [] : (stryCov_9fa48("2649"), [required, greaterThanDate])} />
                </div>
                <p>{stryMutAct_9fa48("2650") ? `` : (stryCov_9fa48("2650"), `${t(COMMON_DAYS_LABEL)}: `)}</p>
                <div className="semester-checkboxes-container">
                    <SetSemesterCheckboxes checked={checkedDates} method={setCheckedDates} name="semester_days_markup_" classScheduler={classScheduler} />
                </div>
                <p>{stryMutAct_9fa48("2651") ? `` : (stryCov_9fa48("2651"), `${t(COMMON_CLASS_SCHEDULE_MANAGEMENT_TITLE)}: `)}</p>
                <div className="semester-checkboxes-container">
                    <SetSemesterCheckboxes checked={checkedClasses} method={setCheckedClasses} name="semester_classes_markup_" classScheduler={classScheduler} />
                </div>
                <div className="form-buttons-container">
                    <Button variant="contained" color="primary" className="buttons-style" disabled={setDisabledSaveButtonSemester(pristine, submitting, semester, selectedGroups)} type="submit">
                        {t(COMMON_SAVE_BUTTON_LABEL)}
                    </Button>
                    <Button type="button" variant="contained" className="buttons-style" disabled={stryMutAct_9fa48("2654") ? setDisableButton(pristine, submitting, semester.id) || selectedGroups.length === 0 : stryMutAct_9fa48("2653") ? false : stryMutAct_9fa48("2652") ? true : (stryCov_9fa48("2652", "2653", "2654"), setDisableButton(pristine, submitting, semester.id) && (stryMutAct_9fa48("2656") ? selectedGroups.length !== 0 : stryMutAct_9fa48("2655") ? true : (stryCov_9fa48("2655", "2656"), selectedGroups.length === 0)))} onClick={resetSemesterForm}>
                        {getClearOrCancelTitle(semester.id, t)}
                    </Button>
                </div>
            </form>
        </Card>;
  }
};
export default SemesterForm;