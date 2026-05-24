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
import Button from '@material-ui/core/Button';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Field } from 'redux-form';
import './AddStudentForm.scss';
import { required } from '../../validation/validateFields';
import renderTextField from '../../share/renderedFields/input';
import renderSelectField from '../../share/renderedFields/select';
import { CANCEL_BUTTON_LABEL, TYPE_LABEL } from '../../constants/translationLabels/common';
import { CLEAR_BUTTON_LABEL, EMAIL_FIELD, NAME_PLACEHOLDER, PATRONYMIC_PLACEHOLDER, SAVE_BUTTON_LABEL, SURNAME_PLACEHOLDER } from '../../constants/translationLabels/formElements';
export const AddStudentForm = props => {
  if (stryMutAct_9fa48("777")) {
    {}
  } else {
    stryCov_9fa48("777");
    const {
      handleSubmit,
      submitting,
      initialize,
      pristine,
      student,
      reset,
      groups,
      groupId,
      submitStudentStart
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("778") ? "" : (stryCov_9fa48("778"), 'formElements'));
    const initializeFormHandler = currentStudent => {
      if (stryMutAct_9fa48("779")) {
        {}
      } else {
        stryCov_9fa48("779");
        const {
          id,
          surname,
          name,
          patronymic,
          email
        } = currentStudent;
        initialize(stryMutAct_9fa48("780") ? {} : (stryCov_9fa48("780"), {
          id,
          surname,
          name,
          patronymic,
          email,
          group: groupId
        }));
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("781")) {
        {}
      } else {
        stryCov_9fa48("781");
        if (stryMutAct_9fa48("783") ? false : stryMutAct_9fa48("782") ? true : (stryCov_9fa48("782", "783"), student)) {
          if (stryMutAct_9fa48("784")) {
            {}
          } else {
            stryCov_9fa48("784");
            initializeFormHandler(student);
          }
        } else {
          if (stryMutAct_9fa48("785")) {
            {}
          } else {
            stryCov_9fa48("785");
            initialize();
          }
        }
      }
    }, stryMutAct_9fa48("786") ? [] : (stryCov_9fa48("786"), [student]));
    return <form className="student-form" onSubmit={handleSubmit(stryMutAct_9fa48("787") ? () => undefined : (stryCov_9fa48("787"), data => submitStudentStart(data, groupId)))}>
            <Field className="form-field" name="surname" id="surname" component={renderTextField} type="text" placeholder={t(SURNAME_PLACEHOLDER)} label={t(SURNAME_PLACEHOLDER)} validate={stryMutAct_9fa48("788") ? [] : (stryCov_9fa48("788"), [required])} />
            <Field className="form-field" name="name" id="name" component={renderTextField} type="text" placeholder={t(NAME_PLACEHOLDER)} label={t(NAME_PLACEHOLDER)} validate={stryMutAct_9fa48("789") ? [] : (stryCov_9fa48("789"), [required])} />
            <Field className="form-field" name="patronymic" id="patronymic" component={renderTextField} type="text" placeholder={t(PATRONYMIC_PLACEHOLDER)} label={t(PATRONYMIC_PLACEHOLDER)} validate={stryMutAct_9fa48("790") ? [] : (stryCov_9fa48("790"), [required])} />

            <Field className="form-field" name="email" id="email" component={renderTextField} type="email" placeholder={t(EMAIL_FIELD)} label={t(EMAIL_FIELD)} validate={stryMutAct_9fa48("791") ? [] : (stryCov_9fa48("791"), [required])} />
            {stryMutAct_9fa48("794") ? student.id || <Field className="form-field" component={renderSelectField} name="group" label={t(TYPE_LABEL)} validate={[required]}>
                    defaultValue={groupId}
                    {groups.map(groupItem => <option key={groupItem.id} value={groupItem.id}>
                            {groupItem.title}
                        </option>)}
                </Field> : stryMutAct_9fa48("793") ? false : stryMutAct_9fa48("792") ? true : (stryCov_9fa48("792", "793", "794"), student.id && <Field className="form-field" component={renderSelectField} name="group" label={t(TYPE_LABEL)} validate={stryMutAct_9fa48("795") ? [] : (stryCov_9fa48("795"), [required])}>
                    defaultValue={groupId}
                    {groups.map(stryMutAct_9fa48("796") ? () => undefined : (stryCov_9fa48("796"), groupItem => <option key={groupItem.id} value={groupItem.id}>
                            {groupItem.title}
                        </option>))}
                </Field>)}

            <div className="form-buttons">
                <Button className="buttons-style" variant="contained" color="primary" disabled={stryMutAct_9fa48("799") ? pristine && submitting : stryMutAct_9fa48("798") ? false : stryMutAct_9fa48("797") ? true : (stryCov_9fa48("797", "798", "799"), pristine || submitting)} type="submit">
                    {t(SAVE_BUTTON_LABEL)}
                </Button>
                <Button className="buttons-style" variant="contained" disabled={stryMutAct_9fa48("802") ? pristine && submitting : stryMutAct_9fa48("801") ? false : stryMutAct_9fa48("800") ? true : (stryCov_9fa48("800", "801", "802"), pristine || submitting)} onClick={reset}>
                    {student ? t(CANCEL_BUTTON_LABEL) : t(CLEAR_BUTTON_LABEL)}
                </Button>
            </div>
        </form>;
  }
};