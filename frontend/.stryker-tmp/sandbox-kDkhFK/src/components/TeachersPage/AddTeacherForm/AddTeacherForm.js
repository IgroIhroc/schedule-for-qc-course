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
import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import renderTextField from '../../../share/renderedFields/input';
import { required } from '../../../validation/validateFields';
import Card from '../../../share/Card/Card';
import { TEACHER_FORM } from '../../../constants/reduxForms';
import './AddTeacherForm.scss';
import SelectField from '../../../share/renderedFields/select';
import { getDepartmentByIdService } from '../../../services/departmentService';
import { getClearOrCancelTitle, setDisableButton } from '../../../helper/disableComponent';
import { CREATE_TITLE, DEPARTMENT_TEACHER_LABEL, EDIT_TITLE, EMAIL_FIELD, SAVE_BUTTON_LABEL, TEACHER_A_LABEL, TEACHER_FIRST_NAME, TEACHER_PATRONYMIC, TEACHER_POSITION, TEACHER_SURNAME } from '../../../constants/translationLabels/formElements';
const AddTeacherForm = props => {
  if (stryMutAct_9fa48("3626")) {
    {}
  } else {
    stryCov_9fa48("3626");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("3627") ? "" : (stryCov_9fa48("3627"), 'formElements'));
    const {
      handleSubmit,
      pristine,
      submitting,
      reset,
      departments,
      teacher,
      initialize
    } = props;
    const teacherId = teacher.id;
    const initializeFormHandler = teacherData => {
      if (stryMutAct_9fa48("3628")) {
        {}
      } else {
        stryCov_9fa48("3628");
        const department = teacherData.department ? teacherData.department.id : 0;
        const {
          id,
          surname,
          name,
          patronymic,
          position,
          email
        } = teacherData;
        initialize(stryMutAct_9fa48("3629") ? {} : (stryCov_9fa48("3629"), {
          id,
          surname,
          name,
          patronymic,
          position,
          email,
          department
        }));
        if (stryMutAct_9fa48("3631") ? false : stryMutAct_9fa48("3630") ? true : (stryCov_9fa48("3630", "3631"), teacherData.department)) getDepartmentByIdService(teacherData.department.id);
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("3632")) {
        {}
      } else {
        stryCov_9fa48("3632");
        if (stryMutAct_9fa48("3634") ? false : stryMutAct_9fa48("3633") ? true : (stryCov_9fa48("3633", "3634"), teacherId)) {
          if (stryMutAct_9fa48("3635")) {
            {}
          } else {
            stryCov_9fa48("3635");
            initializeFormHandler(teacher);
          }
        } else {
          if (stryMutAct_9fa48("3636")) {
            {}
          } else {
            stryCov_9fa48("3636");
            initialize();
          }
        }
      }
    }, stryMutAct_9fa48("3637") ? [] : (stryCov_9fa48("3637"), [teacherId]));
    return <Card additionClassName="form-card teacher-form">
            <form className="createTeacherForm w-100" onSubmit={handleSubmit}>
                <h2 className="form-title">
                    {teacherId ? t(EDIT_TITLE) : t(CREATE_TITLE)} {t(TEACHER_A_LABEL)}
                </h2>

                <Field className="form-field" name="surname" id="surname" component={renderTextField} type="text" placeholder={t(TEACHER_SURNAME)} label={t(TEACHER_SURNAME)} validate={stryMutAct_9fa48("3638") ? [] : (stryCov_9fa48("3638"), [required])} />

                <Field className="form-field" name="name" id="name" component={renderTextField} type="text" placeholder={t(TEACHER_FIRST_NAME)} label={t(TEACHER_FIRST_NAME)} validate={stryMutAct_9fa48("3639") ? [] : (stryCov_9fa48("3639"), [required])} />

                <Field className="form-field" name="patronymic" id="patronymic" component={renderTextField} type="text" placeholder={t(TEACHER_PATRONYMIC)} label={t(TEACHER_PATRONYMIC)} validate={stryMutAct_9fa48("3640") ? [] : (stryCov_9fa48("3640"), [required])} />

                <Field className="form-field" name="position" id="position" component={renderTextField} type="text" placeholder={t(TEACHER_POSITION)} label={t(TEACHER_POSITION)} validate={stryMutAct_9fa48("3641") ? [] : (stryCov_9fa48("3641"), [required])} />
                <Field className="form-field" name="email" id="email" component={renderTextField} type="email" placeholder={t(EMAIL_FIELD)} label={t(EMAIL_FIELD)} />
                <Field name="department" className="week-days" component={SelectField} label={t(DEPARTMENT_TEACHER_LABEL)} type="text" onChange={({
          target
        }) => {
          if (stryMutAct_9fa48("3642")) {
            {}
          } else {
            stryCov_9fa48("3642");
            getDepartmentByIdService(target.value);
          }
        }}>
                    <MenuItem value="" className="hidden" disabled />
                    {departments.map(stryMutAct_9fa48("3643") ? () => undefined : (stryCov_9fa48("3643"), item => <MenuItem key={item.id} value={item.value}>
                            {item.label}
                        </MenuItem>))}
                </Field>

                <div className="form-buttons-container">
                    <Button className="buttons-style" variant="contained" color="primary" disabled={stryMutAct_9fa48("3646") ? pristine && submitting : stryMutAct_9fa48("3645") ? false : stryMutAct_9fa48("3644") ? true : (stryCov_9fa48("3644", "3645", "3646"), pristine || submitting)} type="submit">
                        {t(SAVE_BUTTON_LABEL)}
                    </Button>
                    <Button className="buttons-style" variant="contained" disabled={setDisableButton(pristine, submitting, teacher.id)} onClick={() => {
            if (stryMutAct_9fa48("3647")) {
              {}
            } else {
              stryCov_9fa48("3647");
              reset();
              props.onSetSelectedCard(null);
            }
          }}>
                        {getClearOrCancelTitle(teacher.id, t)}
                    </Button>
                </div>
            </form>
        </Card>;
  }
};
export default reduxForm(stryMutAct_9fa48("3648") ? {} : (stryCov_9fa48("3648"), {
  form: TEACHER_FORM
}))(AddTeacherForm);