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
import { Link } from 'react-router-dom';
import '../../styles/forms.scss';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Card from '@material-ui/core/Card';
import renderTextField from '../../share/renderedFields/input';
import { LOGIN_FORM } from '../../constants/reduxForms';
import { validation } from '../../constants/validation';
import { EMAIL_MESSAGE } from '../../constants/translationLabels/validationMessages';
import { required } from '../../validation/validateFields';
import { DONT_HAVE_ACCOUNT_LABEL, EMAIL_LABEL, FORGOT_PASSWORD_LABEL, PASSWORD_LABEL } from '../../constants/translationLabels/formElements';
import { EMPTY_FIELDS, LOGIN_TITLE, REGISTRATION_PAGE_TITLE } from '../../constants/translationLabels/common';
import { REGISTRATION_LINK, RESET_PASSWORD_LINK } from '../../constants/links';
const LoginForm = props => {
  if (stryMutAct_9fa48("2331")) {
    {}
  } else {
    stryCov_9fa48("2331");
    const {
      handleSubmit,
      loginHandler,
      errors,
      setError,
      isLoading
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2332") ? "" : (stryCov_9fa48("2332"), 'common'));
    const isValidForm = formValues => {
      if (stryMutAct_9fa48("2333")) {
        {}
      } else {
        stryCov_9fa48("2333");
        if (stryMutAct_9fa48("2336") ? !formValues.email && !formValues.password : stryMutAct_9fa48("2335") ? false : stryMutAct_9fa48("2334") ? true : (stryCov_9fa48("2334", "2335", "2336"), (stryMutAct_9fa48("2337") ? formValues.email : (stryCov_9fa48("2337"), !formValues.email)) || (stryMutAct_9fa48("2338") ? formValues.password : (stryCov_9fa48("2338"), !formValues.password)))) {
          if (stryMutAct_9fa48("2339")) {
            {}
          } else {
            stryCov_9fa48("2339");
            setError(stryMutAct_9fa48("2340") ? {} : (stryCov_9fa48("2340"), {
              login: t(EMPTY_FIELDS)
            }));
            return stryMutAct_9fa48("2341") ? true : (stryCov_9fa48("2341"), false);
          }
        }
        if (stryMutAct_9fa48("2344") ? false : stryMutAct_9fa48("2343") ? true : stryMutAct_9fa48("2342") ? validation.EMAIL.test(formValues.email) : (stryCov_9fa48("2342", "2343", "2344"), !validation.EMAIL.test(formValues.email))) {
          if (stryMutAct_9fa48("2345")) {
            {}
          } else {
            stryCov_9fa48("2345");
            setError(stryMutAct_9fa48("2346") ? {} : (stryCov_9fa48("2346"), {
              login: t(EMAIL_MESSAGE)
            }));
            return stryMutAct_9fa48("2347") ? true : (stryCov_9fa48("2347"), false);
          }
        }
        return stryMutAct_9fa48("2348") ? false : (stryCov_9fa48("2348"), true);
      }
    };
    const onLogin = values => {
      if (stryMutAct_9fa48("2349")) {
        {}
      } else {
        stryCov_9fa48("2349");
        const isValid = isValidForm(values);
        if (stryMutAct_9fa48("2351") ? false : stryMutAct_9fa48("2350") ? true : (stryCov_9fa48("2350", "2351"), isValid)) {
          if (stryMutAct_9fa48("2352")) {
            {}
          } else {
            stryCov_9fa48("2352");
            loginHandler(values);
          }
        }
      }
    };
    const errorHandling = value => {
      if (stryMutAct_9fa48("2353")) {
        {}
      } else {
        stryCov_9fa48("2353");
        if (stryMutAct_9fa48("2355") ? false : stryMutAct_9fa48("2354") ? true : (stryCov_9fa48("2354", "2355"), required(value))) setError(required(value));else setError(null);
      }
    };
    return <Card className="auth-card">
            <div className="auth-card-header">
                <h2 className="auth-card-title">{t(LOGIN_TITLE)}</h2>
            </div>

            {isLoading ? <CircularProgress size="70px" className="loading-circle auth-loading" /> : <form onSubmit={handleSubmit(onLogin)} className="auth-form">
                    <Field name="email" className="form-input" component={renderTextField} label={t(EMAIL_LABEL)} error={stryMutAct_9fa48("2356") ? !errors : (stryCov_9fa48("2356"), !(stryMutAct_9fa48("2357") ? errors : (stryCov_9fa48("2357"), !errors)))} helperText={errors ? errors.login : null} onChange={stryMutAct_9fa48("2358") ? () => undefined : (stryCov_9fa48("2358"), e => errorHandling(e.target.value))} />
                    <Field name="password" className="form-input" type="password" component={renderTextField} label={t(PASSWORD_LABEL)} error={stryMutAct_9fa48("2359") ? !errors : (stryCov_9fa48("2359"), !(stryMutAct_9fa48("2360") ? errors : (stryCov_9fa48("2360"), !errors)))} onChange={stryMutAct_9fa48("2361") ? () => undefined : (stryCov_9fa48("2361"), () => setError(null))} />
                    <div className="forgot-password-label">
                        <Link to={RESET_PASSWORD_LINK} className="form-link">
                            {t(FORGOT_PASSWORD_LABEL)}
                        </Link>
                    </div>
                    <div className="auth-form-actions">
                        <Button className="auth-confirm-button" type="submit" variant="contained" color="primary">
                            {t(LOGIN_TITLE)}
                        </Button>
                    </div>

                    <div className="auth-form-footer">
                        <span>{t(DONT_HAVE_ACCOUNT_LABEL)}</span>
                        <Link to={REGISTRATION_LINK} className="form-link">
                            {t(REGISTRATION_PAGE_TITLE)}
                        </Link>
                    </div>
                </form>}
        </Card>;
  }
};
const LoginReduxForm = reduxForm(stryMutAct_9fa48("2362") ? {} : (stryCov_9fa48("2362"), {
  form: LOGIN_FORM
}))(LoginForm);
export default LoginReduxForm;