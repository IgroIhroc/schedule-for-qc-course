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
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import renderTextField from '../../share/renderedFields/input';
import { RESET_PASSWORD_FORM } from '../../constants/reduxForms';
import { email, required } from '../../validation/validateFields';
import { EMAIL_LABEL, RESET_PASSWORD_HELPER_TEXT } from '../../constants/translationLabels/formElements';
import { LOGIN_LINK } from '../../constants/links';
import i18n from '../../i18n';
import { LOGIN_TITLE, RESET_PASSWORD_LABEL, RESET_PASSWORD_PAGE_TITLE } from '../../constants/translationLabels/common';
const ResetPasswordForm = props => {
  if (stryMutAct_9fa48("2442")) {
    {}
  } else {
    stryCov_9fa48("2442");
    const {
      handleSubmit,
      resetPasswordError,
      setError,
      isLoading
    } = props;
    const error = resetPasswordError;
    const emailValidate = stryMutAct_9fa48("2443") ? {} : (stryCov_9fa48("2443"), {
      validate: stryMutAct_9fa48("2444") ? [] : (stryCov_9fa48("2444"), [required, email])
    });
    const errorHandling = value => {
      if (stryMutAct_9fa48("2445")) {
        {}
      } else {
        stryCov_9fa48("2445");
        if (stryMutAct_9fa48("2447") ? false : stryMutAct_9fa48("2446") ? true : (stryCov_9fa48("2446", "2447"), required(value))) {
          if (stryMutAct_9fa48("2448")) {
            {}
          } else {
            stryCov_9fa48("2448");
            setError(required(value));
          }
        } else {
          if (stryMutAct_9fa48("2449")) {
            {}
          } else {
            stryCov_9fa48("2449");
            setError(null);
          }
        }
      }
    };
    return <Card className="auth-card">
            <div className="auth-card-header">
                <h2 className="auth-card-title">{i18n.t(RESET_PASSWORD_PAGE_TITLE)}</h2>
                <span className="auth-card-subtitle">{i18n.t(RESET_PASSWORD_HELPER_TEXT)}</span>
            </div>
            {isLoading ? <CircularProgress size="70px" className="loading-circle auth-loading" /> : <form className="auth-form" onSubmit={handleSubmit}>
                    <Field name="email" className="form-input" component={renderTextField} label={i18n.t(EMAIL_LABEL)} {...(stryMutAct_9fa48("2450") ? error : (stryCov_9fa48("2450"), !error)) ? emailValidate : error} onChange={e => {
          if (stryMutAct_9fa48("2451")) {
            {}
          } else {
            stryCov_9fa48("2451");
            errorHandling(e.target.value);
          }
        }} />
                    <div className="auth-form-actions">
                        <Button className="auth-confirm-button" type="submit" variant="contained" color="primary">
                            {i18n.t(RESET_PASSWORD_LABEL)}
                        </Button>
                    </div>
                    <div className="auth-form-footer">
                        <Link to={LOGIN_LINK} className="form-link">
                            {i18n.t(LOGIN_TITLE)}
                        </Link>
                    </div>
                </form>}
        </Card>;
  }
};
const ResetPasswordReduxForm = reduxForm(stryMutAct_9fa48("2452") ? {} : (stryCov_9fa48("2452"), {
  form: RESET_PASSWORD_FORM
}))(ResetPasswordForm);
export default ResetPasswordReduxForm;