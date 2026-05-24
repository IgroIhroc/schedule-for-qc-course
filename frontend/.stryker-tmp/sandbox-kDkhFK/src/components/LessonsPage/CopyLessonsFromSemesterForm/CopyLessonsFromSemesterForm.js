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
import { Field } from 'redux-form';
import { useTranslation } from 'react-i18next';
import { MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SelectField from '../../../share/renderedFields/select';
import './CopyLessonsFromSemesterForm.scss';
import Card from '../../../share/Card/Card';
import { required } from '../../../validation/validateFields';
import { FORM_COPY_LESSON, FORM_SEMESTER_LABEL } from '../../../constants/translationLabels/formElements';
import { COPY_LESSON, COPY_LESSONS_FROM_SEMESTER } from '../../../constants/translationLabels/common';
const CopyLessonsFromSemesterForm = props => {
  if (stryMutAct_9fa48("2096")) {
    {}
  } else {
    stryCov_9fa48("2096");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2097") ? "" : (stryCov_9fa48("2097"), 'common'));
    const {
      semesters,
      handleSubmit,
      pristine,
      submitting
    } = props;
    const renderSemesterList = () => {
      if (stryMutAct_9fa48("2098")) {
        {}
      } else {
        stryCov_9fa48("2098");
        if (stryMutAct_9fa48("2102") ? semesters?.length <= 1 : stryMutAct_9fa48("2101") ? semesters?.length >= 1 : stryMutAct_9fa48("2100") ? false : stryMutAct_9fa48("2099") ? true : (stryCov_9fa48("2099", "2100", "2101", "2102"), (stryMutAct_9fa48("2103") ? semesters.length : (stryCov_9fa48("2103"), semesters?.length)) > 1)) {
          if (stryMutAct_9fa48("2104")) {
            {}
          } else {
            stryCov_9fa48("2104");
            return <Field id="fromSemesterId" name="fromSemesterId" component={SelectField} label={t(FORM_SEMESTER_LABEL)} type="text" validate={stryMutAct_9fa48("2105") ? [] : (stryCov_9fa48("2105"), [required])}>
                    <MenuItem value="" className="hidden" disabled />
                    {semesters.map(stryMutAct_9fa48("2106") ? () => undefined : (stryCov_9fa48("2106"), semester => <MenuItem key={semester.id} value={semester.id}>
                            {semester.description}
                        </MenuItem>))}
                </Field>;
          }
        }
        if (stryMutAct_9fa48("2109") ? semesters?.length !== 1 : stryMutAct_9fa48("2108") ? false : stryMutAct_9fa48("2107") ? true : (stryCov_9fa48("2107", "2108", "2109"), (stryMutAct_9fa48("2110") ? semesters.length : (stryCov_9fa48("2110"), semesters?.length)) === 1)) {
          if (stryMutAct_9fa48("2111")) {
            {}
          } else {
            stryCov_9fa48("2111");
            handleSubmit(stryMutAct_9fa48("2112") ? {} : (stryCov_9fa48("2112"), {
              fromSemesterId: semesters[0].id
            }));
            return <p>{semesters[0].description}</p>;
          }
        }
        return null;
      }
    };
    return <Card additionClassName="form-card">
            <form onSubmit={handleSubmit}>
                <h2>{t(COPY_LESSON)}</h2>
                <p>{t(COPY_LESSONS_FROM_SEMESTER)}</p>
                {renderSemesterList()}
                <div className="form-buttons-container">
                    <Button className="semester-copy-btn" variant="contained" color="primary" type="submit" disabled={stryMutAct_9fa48("2115") ? pristine && submitting : stryMutAct_9fa48("2114") ? false : stryMutAct_9fa48("2113") ? true : (stryCov_9fa48("2113", "2114", "2115"), pristine || submitting)}>
                        {t(FORM_COPY_LESSON)}
                    </Button>
                </div>
            </form>
        </Card>;
  }
};
export default CopyLessonsFromSemesterForm;