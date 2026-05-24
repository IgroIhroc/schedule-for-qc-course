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
import { Field, reduxForm, reset } from 'redux-form';
import { connect } from 'react-redux';
import * as moment from 'moment';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import Card from '../../share/Card/Card';
import './ClassForm.scss';
import renderTextField from '../../share/renderedFields/input';
import renderTimePicker from '../../share/renderedFields/time';
import { greaterThanTime, lessThanTime, required, timeIntersect, uniqueClassName } from '../../validation/validateFields';
import { CLASS_FORM } from '../../constants/reduxForms';
import { CLASS_DURATION } from '../../constants/common';
import { getClearOrCancelTitle, setDisableButton } from '../../helper/disableComponent';
import { CLASS_FROM_LABEL, CLASS_LABEL, CLASS_TO_LABEL, CLASS_Y_LABEL, CREATE_TITLE, EDIT_TITLE, SAVE_BUTTON_LABEL } from '../../constants/translationLabels/formElements';
import { hourFormat, timeFormat } from '../../constants/formats';
const ClassFormFunc = props => {
  if (stryMutAct_9fa48("990")) {
    {}
  } else {
    stryCov_9fa48("990");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("991") ? "" : (stryCov_9fa48("991"), 'formElements'));
    const {
      handleSubmit,
      pristine,
      onReset,
      submitting,
      classSchedule,
      initialize,
      change,
      dispatch
    } = props;
    useEffect(() => {
      if (stryMutAct_9fa48("992")) {
        {}
      } else {
        stryCov_9fa48("992");
        let initialValues = {};
        if (stryMutAct_9fa48("994") ? false : stryMutAct_9fa48("993") ? true : (stryCov_9fa48("993", "994"), classSchedule)) {
          if (stryMutAct_9fa48("995")) {
            {}
          } else {
            stryCov_9fa48("995");
            initialValues = classSchedule;
          }
        }
        initialize(initialValues);
      }
    }, stryMutAct_9fa48("996") ? [] : (stryCov_9fa48("996"), [classSchedule, initialize]));
    const setEndTime = stryMutAct_9fa48("997") ? () => undefined : (stryCov_9fa48("997"), (() => {
      const setEndTime = startTime => change(stryMutAct_9fa48("998") ? "" : (stryCov_9fa48("998"), 'endTime'), moment(startTime, timeFormat).add(CLASS_DURATION, hourFormat).format(timeFormat));
      return setEndTime;
    })());
    const handleReset = () => {
      if (stryMutAct_9fa48("999")) {
        {}
      } else {
        stryCov_9fa48("999");
        onReset();
        dispatch(reset(CLASS_FORM));
      }
    };
    return <Card additionClassName="form-card">
            <h2 className="form-title">
                {classSchedule.id ? t(EDIT_TITLE) : t(CREATE_TITLE)} {t(CLASS_Y_LABEL)}
            </h2>
            <form onSubmit={handleSubmit}>
                <Field component={renderTextField} className="form-field" name="class_name" id="class_name" label={t(CLASS_LABEL)} type="text" validate={stryMutAct_9fa48("1000") ? [] : (stryCov_9fa48("1000"), [required, uniqueClassName])} />
                <div className="form-time-block">
                    <Field component={renderTimePicker} className="time-input" name="startTime" label={t(CLASS_FROM_LABEL)} type="time" validate={stryMutAct_9fa48("1001") ? [] : (stryCov_9fa48("1001"), [required, lessThanTime, timeIntersect])} onChange={(event, value) => {
            if (stryMutAct_9fa48("1002")) {
              {}
            } else {
              stryCov_9fa48("1002");
              if (stryMutAct_9fa48("1004") ? false : stryMutAct_9fa48("1003") ? true : (stryCov_9fa48("1003", "1004"), value)) {
                if (stryMutAct_9fa48("1005")) {
                  {}
                } else {
                  stryCov_9fa48("1005");
                  setEndTime(value);
                }
              }
            }
          }} />
                    <Field component={renderTimePicker} className="time-input" name="endTime" label={t(CLASS_TO_LABEL)} type="time" validate={stryMutAct_9fa48("1006") ? [] : (stryCov_9fa48("1006"), [required, greaterThanTime, timeIntersect])} />
                </div>

                <div className="form-buttons-container">
                    <Button className="buttons-style" type="submit" variant="contained" color="primary" disabled={stryMutAct_9fa48("1009") ? pristine && submitting : stryMutAct_9fa48("1008") ? false : stryMutAct_9fa48("1007") ? true : (stryCov_9fa48("1007", "1008", "1009"), pristine || submitting)}>
                        {t(SAVE_BUTTON_LABEL)}
                    </Button>
                    <Button className="buttons-style" type="button" variant="contained" disabled={setDisableButton(pristine, submitting, classSchedule.id)} onClick={handleReset}>
                        {getClearOrCancelTitle(classSchedule.id, t)}
                    </Button>
                </div>
            </form>
        </Card>;
  }
};
const mapStateToProps = stryMutAct_9fa48("1010") ? () => undefined : (stryCov_9fa48("1010"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("1011") ? {} : (stryCov_9fa48("1011"), {
    classSchedule: state.classActions.classSchedule
  });
  return mapStateToProps;
})());
export default connect(mapStateToProps)(reduxForm(stryMutAct_9fa48("1012") ? {} : (stryCov_9fa48("1012"), {
  form: CLASS_FORM
}))(ClassFormFunc));