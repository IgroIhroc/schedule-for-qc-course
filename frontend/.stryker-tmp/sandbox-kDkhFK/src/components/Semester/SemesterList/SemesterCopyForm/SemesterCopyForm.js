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
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { MdPlayArrow } from 'react-icons/md';
import './SemesterCopyForm.scss';
import { FORM_SEMESTER_COPY_HINT, FORM_SEMESTER_COPY_RED_HINT } from '../../../../constants/translationLabels/formElements';
import { TEACHER_SCHEDULE_LABEL } from '../../../../constants/translationLabels/common';
import SemesterSelect from './SemesterSelect';
const SemesterCopyForm = props => {
  if (stryMutAct_9fa48("2713")) {
    {}
  } else {
    stryCov_9fa48("2713");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2714") ? "" : (stryCov_9fa48("2714"), 'common'));
    const {
      semesterId,
      semesters,
      handleSubmit,
      pristine,
      submitting,
      submitButtonLabel
    } = props;
    return <section>
            <p>{t(FORM_SEMESTER_COPY_HINT)}</p>
            <p className="semester-copy-title">{t(FORM_SEMESTER_COPY_RED_HINT)}</p>
            <form onSubmit={handleSubmit} className="semester-copy-form">
                <SemesterSelect semesterId={semesterId} semesters={semesters} />
                <Button variant="contained" color="primary" type="submit" disabled={stryMutAct_9fa48("2717") ? pristine && submitting : stryMutAct_9fa48("2716") ? false : stryMutAct_9fa48("2715") ? true : (stryCov_9fa48("2715", "2716", "2717"), pristine || submitting)}>
                    <MdPlayArrow title={t(TEACHER_SCHEDULE_LABEL)} className="svg-btn" />
                    {submitButtonLabel}
                </Button>
            </form>
        </section>;
  }
};
export default SemesterCopyForm;