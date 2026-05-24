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
import React, { useRef } from 'react';
import ReactSelect from 'react-select';
import './MultiSelect.scss';
import { useTranslation } from 'react-i18next';
import { ALL_TEACHERS, CHOOSE_TEACHER, SCHEDULE_FOR_SEMESTER } from '../../constants/translationLabels/common';
import CustomDialog from '../../containers/Dialogs/CustomDialog';
import { dialogCancelButton, dialogSendSchedule } from '../../constants/dialogs';
const MultiSelect = props => {
  if (stryMutAct_9fa48("8535")) {
    {}
  } else {
    stryCov_9fa48("8535");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("8536") ? "" : (stryCov_9fa48("8536"), 'common'));
    const valueRef = useRef(props.value);
    valueRef.current = props.value;
    const {
      open,
      defaultSemester,
      semesters,
      onCancel,
      onSentTeachers,
      isEnabledSentBtn
    } = props;
    const selectAllOption = stryMutAct_9fa48("8537") ? {} : (stryCov_9fa48("8537"), {
      value: stryMutAct_9fa48("8538") ? "" : (stryCov_9fa48("8538"), '<SELECT_ALL>'),
      label: t(ALL_TEACHERS)
    });
    const isSelectAllSelected = stryMutAct_9fa48("8539") ? () => undefined : (stryCov_9fa48("8539"), (() => {
      const isSelectAllSelected = () => stryMutAct_9fa48("8542") ? valueRef.current.length !== props.options.length : stryMutAct_9fa48("8541") ? false : stryMutAct_9fa48("8540") ? true : (stryCov_9fa48("8540", "8541", "8542"), valueRef.current.length === props.options.length);
      return isSelectAllSelected;
    })());
    const isOptionSelected = stryMutAct_9fa48("8543") ? () => undefined : (stryCov_9fa48("8543"), (() => {
      const isOptionSelected = option => stryMutAct_9fa48("8546") ? valueRef.current.some(({
        value
      }) => value === option.value) && isSelectAllSelected() : stryMutAct_9fa48("8545") ? false : stryMutAct_9fa48("8544") ? true : (stryCov_9fa48("8544", "8545", "8546"), (stryMutAct_9fa48("8547") ? valueRef.current.every(({
        value
      }) => value === option.value) : (stryCov_9fa48("8547"), valueRef.current.some(stryMutAct_9fa48("8548") ? () => undefined : (stryCov_9fa48("8548"), ({
        value
      }) => stryMutAct_9fa48("8551") ? value !== option.value : stryMutAct_9fa48("8550") ? false : stryMutAct_9fa48("8549") ? true : (stryCov_9fa48("8549", "8550", "8551"), value === option.value))))) || isSelectAllSelected());
      return isOptionSelected;
    })());
    const getOptions = stryMutAct_9fa48("8552") ? () => undefined : (stryCov_9fa48("8552"), (() => {
      const getOptions = () => stryMutAct_9fa48("8553") ? [] : (stryCov_9fa48("8553"), [selectAllOption, ...props.options]);
      return getOptions;
    })());
    const getValue = stryMutAct_9fa48("8554") ? () => undefined : (stryCov_9fa48("8554"), (() => {
      const getValue = () => isSelectAllSelected() ? stryMutAct_9fa48("8555") ? [] : (stryCov_9fa48("8555"), [selectAllOption]) : props.value;
      return getValue;
    })());
    const onChange = (newValue, actionMeta) => {
      if (stryMutAct_9fa48("8556")) {
        {}
      } else {
        stryCov_9fa48("8556");
        const {
          action,
          option,
          removedValue
        } = actionMeta;
        if (stryMutAct_9fa48("8559") ? action === 'select-option' || option.value === selectAllOption.value : stryMutAct_9fa48("8558") ? false : stryMutAct_9fa48("8557") ? true : (stryCov_9fa48("8557", "8558", "8559"), (stryMutAct_9fa48("8561") ? action !== 'select-option' : stryMutAct_9fa48("8560") ? true : (stryCov_9fa48("8560", "8561"), action === (stryMutAct_9fa48("8562") ? "" : (stryCov_9fa48("8562"), 'select-option')))) && (stryMutAct_9fa48("8564") ? option.value !== selectAllOption.value : stryMutAct_9fa48("8563") ? true : (stryCov_9fa48("8563", "8564"), option.value === selectAllOption.value)))) {
          if (stryMutAct_9fa48("8565")) {
            {}
          } else {
            stryCov_9fa48("8565");
            props.onChange(props.options, actionMeta);
          }
        } else if (stryMutAct_9fa48("8568") ? action === 'deselect-option' && option.value === selectAllOption.value && action === 'remove-value' && removedValue.value === selectAllOption.value : stryMutAct_9fa48("8567") ? false : stryMutAct_9fa48("8566") ? true : (stryCov_9fa48("8566", "8567", "8568"), (stryMutAct_9fa48("8570") ? action === 'deselect-option' || option.value === selectAllOption.value : stryMutAct_9fa48("8569") ? false : (stryCov_9fa48("8569", "8570"), (stryMutAct_9fa48("8572") ? action !== 'deselect-option' : stryMutAct_9fa48("8571") ? true : (stryCov_9fa48("8571", "8572"), action === (stryMutAct_9fa48("8573") ? "" : (stryCov_9fa48("8573"), 'deselect-option')))) && (stryMutAct_9fa48("8575") ? option.value !== selectAllOption.value : stryMutAct_9fa48("8574") ? true : (stryCov_9fa48("8574", "8575"), option.value === selectAllOption.value)))) || (stryMutAct_9fa48("8577") ? action === 'remove-value' || removedValue.value === selectAllOption.value : stryMutAct_9fa48("8576") ? false : (stryCov_9fa48("8576", "8577"), (stryMutAct_9fa48("8579") ? action !== 'remove-value' : stryMutAct_9fa48("8578") ? true : (stryCov_9fa48("8578", "8579"), action === (stryMutAct_9fa48("8580") ? "" : (stryCov_9fa48("8580"), 'remove-value')))) && (stryMutAct_9fa48("8582") ? removedValue.value !== selectAllOption.value : stryMutAct_9fa48("8581") ? true : (stryCov_9fa48("8581", "8582"), removedValue.value === selectAllOption.value)))))) {
          if (stryMutAct_9fa48("8583")) {
            {}
          } else {
            stryCov_9fa48("8583");
            props.onChange(stryMutAct_9fa48("8584") ? ["Stryker was here"] : (stryCov_9fa48("8584"), []), actionMeta);
          }
        } else if (stryMutAct_9fa48("8587") ? actionMeta.action === 'deselect-option' || isSelectAllSelected() : stryMutAct_9fa48("8586") ? false : stryMutAct_9fa48("8585") ? true : (stryCov_9fa48("8585", "8586", "8587"), (stryMutAct_9fa48("8589") ? actionMeta.action !== 'deselect-option' : stryMutAct_9fa48("8588") ? true : (stryCov_9fa48("8588", "8589"), actionMeta.action === (stryMutAct_9fa48("8590") ? "" : (stryCov_9fa48("8590"), 'deselect-option')))) && isSelectAllSelected())) {
          if (stryMutAct_9fa48("8591")) {
            {}
          } else {
            stryCov_9fa48("8591");
            props.onChange(stryMutAct_9fa48("8592") ? props.options : (stryCov_9fa48("8592"), props.options.filter(stryMutAct_9fa48("8593") ? () => undefined : (stryCov_9fa48("8593"), ({
              value
            }) => stryMutAct_9fa48("8596") ? value === option.value : stryMutAct_9fa48("8595") ? false : stryMutAct_9fa48("8594") ? true : (stryCov_9fa48("8594", "8595", "8596"), value !== option.value)))), actionMeta);
          }
        } else {
          if (stryMutAct_9fa48("8597")) {
            {}
          } else {
            stryCov_9fa48("8597");
            props.onChange(stryMutAct_9fa48("8600") ? newValue && [] : stryMutAct_9fa48("8599") ? false : stryMutAct_9fa48("8598") ? true : (stryCov_9fa48("8598", "8599", "8600"), newValue || (stryMutAct_9fa48("8601") ? ["Stryker was here"] : (stryCov_9fa48("8601"), []))), actionMeta);
          }
        }
      }
    };
    const handleChange = newValue => {
      if (stryMutAct_9fa48("8602")) {
        {}
      } else {
        stryCov_9fa48("8602");
        props.onChangeSemesterValue(newValue);
      }
    };
    return <CustomDialog className="select-dialog" title={t(SCHEDULE_FOR_SEMESTER)} open={open} onClose={onCancel} buttons={stryMutAct_9fa48("8603") ? [] : (stryCov_9fa48("8603"), [dialogSendSchedule(onSentTeachers, stryMutAct_9fa48("8604") ? isEnabledSentBtn : (stryCov_9fa48("8604"), !isEnabledSentBtn)), dialogCancelButton(onCancel)])}>
            <div className="teacher-semester">
                <ReactSelect classNamePrefix="react-select" defaultValue={defaultSemester} options={semesters} onChange={handleChange} />

                <ReactSelect classNamePrefix="react-select" isOptionSelected={isOptionSelected} options={getOptions()} value={getValue()} onChange={onChange} hideSelectedOptions={stryMutAct_9fa48("8605") ? true : (stryCov_9fa48("8605"), false)} closeMenuOnSelect={stryMutAct_9fa48("8606") ? true : (stryCov_9fa48("8606"), false)} isMulti placeholder={t(CHOOSE_TEACHER)} />
            </div>
        </CustomDialog>;
  }
};
export default MultiSelect;