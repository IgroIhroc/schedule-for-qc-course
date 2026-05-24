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
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './ChangePasswordForm.scss';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import renderTextField from '../../share/renderedFields/input';
import { password, required } from '../../validation/validateFields';
import { PROFILE_FORM } from '../../constants/reduxForms';
import { CHANGE_PASSWORD_FROM_TITLE, CLEAR_BUTTON_LABEL, NEW_PASSWORD_LABEL, PASSWORD_LABEL, RETYPE_PASSWORD_LABEL, SAVE_BUTTON_LABEL } from '../../constants/translationLabels/formElements';
function ExpandMoreIcon() {
  if (stryMutAct_9fa48("977")) {
    {}
  } else {
    stryCov_9fa48("977");
    return null;
  }
}
const ChangePasswordForm = props => {
  if (stryMutAct_9fa48("978")) {
    {}
  } else {
    stryCov_9fa48("978");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("979") ? "" : (stryCov_9fa48("979"), 'formElements'));
    const {
      handleSubmit,
      pristine,
      onReset,
      submitting
    } = props;
    return <>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography>{t(CHANGE_PASSWORD_FROM_TITLE)}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <form onSubmit={handleSubmit}>
                            <Field component={renderTextField} className="form-field" name="current_password" id="current_password" label={t(PASSWORD_LABEL)} type="password" validate={stryMutAct_9fa48("980") ? [] : (stryCov_9fa48("980"), [required, password])} />
                            <Field component={renderTextField} className="form-field" name="new_password" id="new_password" label={t(NEW_PASSWORD_LABEL)} type="password" validate={stryMutAct_9fa48("981") ? [] : (stryCov_9fa48("981"), [required, password])} />
                            <Field component={renderTextField} className="form-field" name="confirm_password" id="confirm_password" label={t(RETYPE_PASSWORD_LABEL)} type="password" validate={stryMutAct_9fa48("982") ? [] : (stryCov_9fa48("982"), [required, password])} />

                            <div className="form-buttons-container">
                                <Button className="buttons-style" type="submit" variant="contained" color="primary" disabled={stryMutAct_9fa48("985") ? pristine && submitting : stryMutAct_9fa48("984") ? false : stryMutAct_9fa48("983") ? true : (stryCov_9fa48("983", "984", "985"), pristine || submitting)}>
                                    {t(SAVE_BUTTON_LABEL)}
                                </Button>
                                <Button className="buttons-style" type="button" variant="contained" disabled={stryMutAct_9fa48("988") ? pristine && submitting : stryMutAct_9fa48("987") ? false : stryMutAct_9fa48("986") ? true : (stryCov_9fa48("986", "987", "988"), pristine || submitting)} onClick={onReset}>
                                    {t(CLEAR_BUTTON_LABEL)}
                                </Button>
                            </div>
                        </form>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>;
  }
};
export default connect()(reduxForm(stryMutAct_9fa48("989") ? {} : (stryCov_9fa48("989"), {
  form: PROFILE_FORM
}))(ChangePasswordForm));