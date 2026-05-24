/* eslint-disable */
// @ts-nocheck

// this functionality doesn't work
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
import { Field, reduxForm } from 'redux-form';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TEMPORARY_SCHEDULE_VACATION_FORM } from '../../../constants/reduxForms';
import renderMonthPicker from '../../../share/renderedFields/timeSemester';
import Card from '../../../share/Card/Card';
import { greaterThanDate, lessThanDate, required } from '../../../validation/validateFields';
import { handleTeacherInfo } from '../../../helper/renderTeacher';
import { selectTeacherIdService, selectVacationService } from '../../../services/temporaryScheduleService';
import renderCheckboxField from '../../../share/renderedFields/checkbox';
import { CLASS_FROM_LABEL, CLASS_TO_LABEL, CLEAR_BUTTON_LABEL, CREATE_VACATION_FORM, EDIT_VACATION_FORM, FOR_TEACHER, FORM_TEACHER_LABEL, SAVE_BUTTON_LABEL } from '../../../constants/translationLabels/formElements';
import { COMMON_DATE_LABEL, COMMON_FEW_DAYS_LABEL, COMMON_NOTIFY_LABEL, FOR_ALL } from '../../../constants/translationLabels/common';
const TemporaryScheduleVacationForm = props => {
  if (stryMutAct_9fa48("4155")) {
    {}
  } else {
    stryCov_9fa48("4155");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("4156") ? "" : (stryCov_9fa48("4156"), 'formElements'));
    const {
      handleSubmit,
      invalid,
      reset,
      submitting,
      teachers,
      teacherId,
      vacation,
      initialize
    } = props;
    const [isFewDays, setIsFewDays] = useState(stryMutAct_9fa48("4157") ? true : (stryCov_9fa48("4157"), false));
    const [forAll, setForAll] = useState(stryMutAct_9fa48("4158") ? false : (stryCov_9fa48("4158"), true));
    const [notify, setNotify] = useState(stryMutAct_9fa48("4159") ? true : (stryCov_9fa48("4159"), false));
    const vacationId = vacation.id;
    const initializeFormHandler = vacationData => {
      if (stryMutAct_9fa48("4160")) {
        {}
      } else {
        stryCov_9fa48("4160");
        if (stryMutAct_9fa48("4163") ? vacationData.teacher.id : stryMutAct_9fa48("4162") ? false : stryMutAct_9fa48("4161") ? true : (stryCov_9fa48("4161", "4162", "4163"), vacationData.teacher?.id)) {
          if (stryMutAct_9fa48("4164")) {
            {}
          } else {
            stryCov_9fa48("4164");
            selectTeacherIdService(vacationData.teacher.id);
            setForAll(stryMutAct_9fa48("4165") ? true : (stryCov_9fa48("4165"), false));
          }
        } else {
          if (stryMutAct_9fa48("4166")) {
            {}
          } else {
            stryCov_9fa48("4166");
            setForAll(stryMutAct_9fa48("4167") ? false : (stryCov_9fa48("4167"), true));
          }
        }
        initialize(stryMutAct_9fa48("4168") ? {} : (stryCov_9fa48("4168"), {
          id: vacationData.id,
          date: vacationData.date
        }));
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("4169")) {
        {}
      } else {
        stryCov_9fa48("4169");
        if (stryMutAct_9fa48("4171") ? false : stryMutAct_9fa48("4170") ? true : (stryCov_9fa48("4170", "4171"), vacationId)) {
          if (stryMutAct_9fa48("4172")) {
            {}
          } else {
            stryCov_9fa48("4172");
            initializeFormHandler(vacation);
          }
        } else {
          if (stryMutAct_9fa48("4173")) {
            {}
          } else {
            stryCov_9fa48("4173");
            initialize();
          }
        }
      }
    }, stryMutAct_9fa48("4174") ? [] : (stryCov_9fa48("4174"), [vacationId]));
    useEffect(() => {
      if (stryMutAct_9fa48("4175")) {
        {}
      } else {
        stryCov_9fa48("4175");
        if (stryMutAct_9fa48("4177") ? false : stryMutAct_9fa48("4176") ? true : (stryCov_9fa48("4176", "4177"), teacherId)) setForAll(stryMutAct_9fa48("4178") ? true : (stryCov_9fa48("4178"), false));
      }
    }, stryMutAct_9fa48("4179") ? [] : (stryCov_9fa48("4179"), [teacherId]));
    useEffect(() => {
      if (stryMutAct_9fa48("4180")) {
        {}
      } else {
        stryCov_9fa48("4180");
        if (stryMutAct_9fa48("4182") ? false : stryMutAct_9fa48("4181") ? true : (stryCov_9fa48("4181", "4182"), forAll)) selectTeacherIdService(null);
      }
    }, stryMutAct_9fa48("4183") ? [] : (stryCov_9fa48("4183"), [forAll]));
    const handleNotifyChange = stryMutAct_9fa48("4184") ? () => undefined : (stryCov_9fa48("4184"), (() => {
      const handleNotifyChange = event => setNotify(event.target.checked);
      return handleNotifyChange;
    })());
    const defaultProps = stryMutAct_9fa48("4185") ? {} : (stryCov_9fa48("4185"), {
      options: teachers,
      getOptionLabel: stryMutAct_9fa48("4186") ? () => undefined : (stryCov_9fa48("4186"), option => option ? handleTeacherInfo(option) : stryMutAct_9fa48("4187") ? "Stryker was here!" : (stryCov_9fa48("4187"), ''))
    });
    const handleFindTeacher = id => {
      if (stryMutAct_9fa48("4188")) {
        {}
      } else {
        stryCov_9fa48("4188");
        if (stryMutAct_9fa48("4190") ? false : stryMutAct_9fa48("4189") ? true : (stryCov_9fa48("4189", "4190"), id)) return teachers.find(stryMutAct_9fa48("4191") ? () => undefined : (stryCov_9fa48("4191"), teacher => stryMutAct_9fa48("4194") ? teacher.id !== id : stryMutAct_9fa48("4193") ? false : stryMutAct_9fa48("4192") ? true : (stryCov_9fa48("4192", "4193", "4194"), teacher.id === id)));
        return stryMutAct_9fa48("4195") ? "Stryker was here!" : (stryCov_9fa48("4195"), '');
      }
    };
    const handleTeacherSelect = teacher => {
      if (stryMutAct_9fa48("4196")) {
        {}
      } else {
        stryCov_9fa48("4196");
        if (stryMutAct_9fa48("4198") ? false : stryMutAct_9fa48("4197") ? true : (stryCov_9fa48("4197", "4198"), teacher)) selectTeacherIdService(teacher.id);
      }
    };
    const forAllLabel = forAll ? t(FOR_ALL) : t(FOR_TEACHER);
    const isDisabled = stryMutAct_9fa48("4201") ? submitting && invalid : stryMutAct_9fa48("4200") ? false : stryMutAct_9fa48("4199") ? true : (stryCov_9fa48("4199", "4200", "4201"), submitting || invalid);
    return <Card additionClassName='form-card'>
            <h2 className='form-title under-line'>
                {vacationId ? t(EDIT_VACATION_FORM) : t(CREATE_VACATION_FORM)}
            </h2>
            <form onSubmit={handleSubmit}>
                <FormControlLabel control={<Checkbox checked={isFewDays} onChange={event => {
          if (stryMutAct_9fa48("4202")) {
            {}
          } else {
            stryCov_9fa48("4202");
            setIsFewDays(event.target.checked);
          }
        }} color='primary' />} label={t(COMMON_FEW_DAYS_LABEL)} />
                {isFewDays ? <>
                        <Field className='time-input' name='from' component={renderMonthPicker} label={stryMutAct_9fa48("4203") ? `` : (stryCov_9fa48("4203"), `${t(CLASS_FROM_LABEL)}:`)} validate={stryMutAct_9fa48("4204") ? [] : (stryCov_9fa48("4204"), [required, lessThanDate])} />
                        <Field className='time-input' name='to' component={renderMonthPicker} label={stryMutAct_9fa48("4205") ? `` : (stryCov_9fa48("4205"), `${t(CLASS_TO_LABEL)}:`)} validate={stryMutAct_9fa48("4206") ? [] : (stryCov_9fa48("4206"), [required, greaterThanDate])} />
                    </> : <Field className='time-input' name='date' component={renderMonthPicker} label={stryMutAct_9fa48("4207") ? `` : (stryCov_9fa48("4207"), `${t(COMMON_DATE_LABEL)}:`)} validate={stryMutAct_9fa48("4208") ? [] : (stryCov_9fa48("4208"), [required])} />}
                <div>
                    <FormControlLabel control={<Switch color='primary' checked={forAll} onChange={event => {
            if (stryMutAct_9fa48("4209")) {
              {}
            } else {
              stryCov_9fa48("4209");
              setForAll(event.target.checked);
            }
          }} />} label={forAllLabel} />
                </div>
                {stryMutAct_9fa48("4212") ? !forAll || <Autocomplete {...defaultProps} clearOnEscape openOnFocus value={handleFindTeacher(teacherId)} onChange={(event, newValue) => {
          if (!newValue) handleTeacherSelect({});else handleTeacherSelect(newValue);
        }} renderInput={params => <TextField {...params} label={t(FORM_TEACHER_LABEL)} margin='normal' />} /> : stryMutAct_9fa48("4211") ? false : stryMutAct_9fa48("4210") ? true : (stryCov_9fa48("4210", "4211", "4212"), (stryMutAct_9fa48("4213") ? forAll : (stryCov_9fa48("4213"), !forAll)) && <Autocomplete {...defaultProps} clearOnEscape openOnFocus value={handleFindTeacher(teacherId)} onChange={(event, newValue) => {
          if (stryMutAct_9fa48("4214")) {
            {}
          } else {
            stryCov_9fa48("4214");
            if (stryMutAct_9fa48("4217") ? false : stryMutAct_9fa48("4216") ? true : stryMutAct_9fa48("4215") ? newValue : (stryCov_9fa48("4215", "4216", "4217"), !newValue)) handleTeacherSelect({});else handleTeacherSelect(newValue);
          }
        }} renderInput={stryMutAct_9fa48("4218") ? () => undefined : (stryCov_9fa48("4218"), params => <TextField {...params} label={t(FORM_TEACHER_LABEL)} margin='normal' />)} />)}
                <Field name='notify' label={t(COMMON_NOTIFY_LABEL)} component={renderCheckboxField} checked={notify} onChange={handleNotifyChange} color='primary' />

                <div className='form-buttons-container'>
                    <Button className='buttons-style' type='submit' variant='contained' color='primary' disabled={isDisabled}>
                        {t(SAVE_BUTTON_LABEL)}
                    </Button>
                    <Button className='buttons-style' type='button' variant='contained' disabled={isDisabled} onClick={() => {
            if (stryMutAct_9fa48("4219")) {
              {}
            } else {
              stryCov_9fa48("4219");
              reset();
              selectVacationService({});
            }
          }}>
                        {t(CLEAR_BUTTON_LABEL)}
                    </Button>
                </div>
            </form>
        </Card>;
  }
};
const TemporaryScheduleVacationReduxForm = reduxForm(stryMutAct_9fa48("4220") ? {} : (stryCov_9fa48("4220"), {
  form: TEMPORARY_SCHEDULE_VACATION_FORM
}))(TemporaryScheduleVacationForm);
export default TemporaryScheduleVacationReduxForm;