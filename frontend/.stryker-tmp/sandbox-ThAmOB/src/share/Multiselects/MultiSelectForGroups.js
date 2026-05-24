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
import Select from 'react-select';
import './MultiSelect.scss';
import { useTranslation } from 'react-i18next';
import { ALL_GROUPS, CHOOSE_GROUPS } from '../../constants/translationLabels/common';
import CustomDialog from '../../containers/Dialogs/CustomDialog';
import { dialogCancelButton, dialogConfirmButton } from '../../constants/dialogs';
const MultiselectForGroups = props => {
  if (stryMutAct_9fa48("8607")) {
    {}
  } else {
    stryCov_9fa48("8607");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("8608") ? "" : (stryCov_9fa48("8608"), 'common'));
    const valueRef = useRef(props.value);
    valueRef.current = props.value;
    const {
      open,
      onClose,
      onCancel
    } = props;
    const selectAllOption = stryMutAct_9fa48("8609") ? {} : (stryCov_9fa48("8609"), {
      value: stryMutAct_9fa48("8610") ? "" : (stryCov_9fa48("8610"), '<SELECT_ALL>'),
      label: t(ALL_GROUPS)
    });
    const isSelectAllSelected = () => {
      if (stryMutAct_9fa48("8611")) {
        {}
      } else {
        stryCov_9fa48("8611");
        if (stryMutAct_9fa48("8614") ? props.options !== undefined || valueRef.current : stryMutAct_9fa48("8613") ? false : stryMutAct_9fa48("8612") ? true : (stryCov_9fa48("8612", "8613", "8614"), (stryMutAct_9fa48("8616") ? props.options === undefined : stryMutAct_9fa48("8615") ? true : (stryCov_9fa48("8615", "8616"), props.options !== undefined)) && valueRef.current)) {
          if (stryMutAct_9fa48("8617")) {
            {}
          } else {
            stryCov_9fa48("8617");
            return stryMutAct_9fa48("8620") ? valueRef.current.length !== props.options.length : stryMutAct_9fa48("8619") ? false : stryMutAct_9fa48("8618") ? true : (stryCov_9fa48("8618", "8619", "8620"), valueRef.current.length === props.options.length);
          }
        }
        return stryMutAct_9fa48("8621") ? true : (stryCov_9fa48("8621"), false);
      }
    };
    const isOptionSelected = stryMutAct_9fa48("8622") ? () => undefined : (stryCov_9fa48("8622"), (() => {
      const isOptionSelected = option => stryMutAct_9fa48("8625") ? valueRef.current.some(({
        value
      }) => value === option.value) && isSelectAllSelected() : stryMutAct_9fa48("8624") ? false : stryMutAct_9fa48("8623") ? true : (stryCov_9fa48("8623", "8624", "8625"), (stryMutAct_9fa48("8626") ? valueRef.current.every(({
        value
      }) => value === option.value) : (stryCov_9fa48("8626"), valueRef.current.some(stryMutAct_9fa48("8627") ? () => undefined : (stryCov_9fa48("8627"), ({
        value
      }) => stryMutAct_9fa48("8630") ? value !== option.value : stryMutAct_9fa48("8629") ? false : stryMutAct_9fa48("8628") ? true : (stryCov_9fa48("8628", "8629", "8630"), value === option.value))))) || isSelectAllSelected());
      return isOptionSelected;
    })());
    const getOptions = stryMutAct_9fa48("8631") ? () => undefined : (stryCov_9fa48("8631"), (() => {
      const getOptions = () => stryMutAct_9fa48("8632") ? [] : (stryCov_9fa48("8632"), [selectAllOption, ...props.options]);
      return getOptions;
    })());
    const getValue = stryMutAct_9fa48("8633") ? () => undefined : (stryCov_9fa48("8633"), (() => {
      const getValue = () => isSelectAllSelected() ? stryMutAct_9fa48("8634") ? [] : (stryCov_9fa48("8634"), [selectAllOption]) : props.value;
      return getValue;
    })());
    const onChange = (newValue, actionMeta) => {
      if (stryMutAct_9fa48("8635")) {
        {}
      } else {
        stryCov_9fa48("8635");
        const {
          action,
          option,
          removedValue
        } = actionMeta;
        if (stryMutAct_9fa48("8638") ? action === 'select-option' || option.value === selectAllOption.value : stryMutAct_9fa48("8637") ? false : stryMutAct_9fa48("8636") ? true : (stryCov_9fa48("8636", "8637", "8638"), (stryMutAct_9fa48("8640") ? action !== 'select-option' : stryMutAct_9fa48("8639") ? true : (stryCov_9fa48("8639", "8640"), action === (stryMutAct_9fa48("8641") ? "" : (stryCov_9fa48("8641"), 'select-option')))) && (stryMutAct_9fa48("8643") ? option.value !== selectAllOption.value : stryMutAct_9fa48("8642") ? true : (stryCov_9fa48("8642", "8643"), option.value === selectAllOption.value)))) {
          if (stryMutAct_9fa48("8644")) {
            {}
          } else {
            stryCov_9fa48("8644");
            props.onChange(props.options, actionMeta);
          }
        } else if (stryMutAct_9fa48("8647") ? action === 'deselect-option' && option.value === selectAllOption.value && action === 'remove-value' && removedValue.value === selectAllOption.value : stryMutAct_9fa48("8646") ? false : stryMutAct_9fa48("8645") ? true : (stryCov_9fa48("8645", "8646", "8647"), (stryMutAct_9fa48("8649") ? action === 'deselect-option' || option.value === selectAllOption.value : stryMutAct_9fa48("8648") ? false : (stryCov_9fa48("8648", "8649"), (stryMutAct_9fa48("8651") ? action !== 'deselect-option' : stryMutAct_9fa48("8650") ? true : (stryCov_9fa48("8650", "8651"), action === (stryMutAct_9fa48("8652") ? "" : (stryCov_9fa48("8652"), 'deselect-option')))) && (stryMutAct_9fa48("8654") ? option.value !== selectAllOption.value : stryMutAct_9fa48("8653") ? true : (stryCov_9fa48("8653", "8654"), option.value === selectAllOption.value)))) || (stryMutAct_9fa48("8656") ? action === 'remove-value' || removedValue.value === selectAllOption.value : stryMutAct_9fa48("8655") ? false : (stryCov_9fa48("8655", "8656"), (stryMutAct_9fa48("8658") ? action !== 'remove-value' : stryMutAct_9fa48("8657") ? true : (stryCov_9fa48("8657", "8658"), action === (stryMutAct_9fa48("8659") ? "" : (stryCov_9fa48("8659"), 'remove-value')))) && (stryMutAct_9fa48("8661") ? removedValue.value !== selectAllOption.value : stryMutAct_9fa48("8660") ? true : (stryCov_9fa48("8660", "8661"), removedValue.value === selectAllOption.value)))))) {
          if (stryMutAct_9fa48("8662")) {
            {}
          } else {
            stryCov_9fa48("8662");
            props.onChange(stryMutAct_9fa48("8663") ? ["Stryker was here"] : (stryCov_9fa48("8663"), []), actionMeta);
          }
        } else if (stryMutAct_9fa48("8666") ? actionMeta.action === 'deselect-option' || isSelectAllSelected() : stryMutAct_9fa48("8665") ? false : stryMutAct_9fa48("8664") ? true : (stryCov_9fa48("8664", "8665", "8666"), (stryMutAct_9fa48("8668") ? actionMeta.action !== 'deselect-option' : stryMutAct_9fa48("8667") ? true : (stryCov_9fa48("8667", "8668"), actionMeta.action === (stryMutAct_9fa48("8669") ? "" : (stryCov_9fa48("8669"), 'deselect-option')))) && isSelectAllSelected())) {
          if (stryMutAct_9fa48("8670")) {
            {}
          } else {
            stryCov_9fa48("8670");
            props.onChange(stryMutAct_9fa48("8671") ? props.options : (stryCov_9fa48("8671"), props.options.filter(stryMutAct_9fa48("8672") ? () => undefined : (stryCov_9fa48("8672"), ({
              value
            }) => stryMutAct_9fa48("8675") ? value === option.value : stryMutAct_9fa48("8674") ? false : stryMutAct_9fa48("8673") ? true : (stryCov_9fa48("8673", "8674", "8675"), value !== option.value)))), actionMeta);
          }
        } else {
          if (stryMutAct_9fa48("8676")) {
            {}
          } else {
            stryCov_9fa48("8676");
            props.onChange(stryMutAct_9fa48("8679") ? newValue && [] : stryMutAct_9fa48("8678") ? false : stryMutAct_9fa48("8677") ? true : (stryCov_9fa48("8677", "8678", "8679"), newValue || (stryMutAct_9fa48("8680") ? ["Stryker was here"] : (stryCov_9fa48("8680"), []))), actionMeta);
          }
        }
      }
    };
    return <CustomDialog className="select-dialog" open={open} onClose={onClose} buttons={stryMutAct_9fa48("8681") ? [] : (stryCov_9fa48("8681"), [dialogConfirmButton(onClose), dialogCancelButton(onCancel)])}>
            <Select classNamePrefix="react-select" isOptionSelected={isOptionSelected} options={getOptions()} defaultValue={getValue()} onChange={onChange} hideSelectedOptions={stryMutAct_9fa48("8682") ? true : (stryCov_9fa48("8682"), false)} closeMenuOnSelect={stryMutAct_9fa48("8683") ? true : (stryCov_9fa48("8683"), false)} isMulti placeholder={t(CHOOSE_GROUPS)} />
        </CustomDialog>;
  }
};
export default MultiselectForGroups;