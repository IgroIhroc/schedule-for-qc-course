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
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import renderTextField from '../../share/renderedFields/input';
import '../../styles/forms.scss';
import { REGISTRATION_FORM } from '../../constants/reduxForms';
import { email, password, required } from '../../validation/validateFields';
import { LOGIN_LINK } from '../../constants/links';
import { ACCOUNT_EXIST, CREATE_ACCOUNT, DIFFERENT_PASSWORDS, LOGIN_TITLE, REGISTRATION_PAGE_TITLE } from '../../constants/translationLabels/common';
import { EMAIL_LABEL, PASSWORD_LABEL, RETYPE_PASSWORD_LABEL } from '../../constants/translationLabels/formElements';
const RegistrationForm = props => {
  if (stryMutAct_9fa48("2397")) {
    {}
  } else {
    stryCov_9fa48("2397");
    const {
      handleSubmit,
      errors,
      setError,
      registrationHandler,
      isLoading
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2398") ? "" : (stryCov_9fa48("2398"), 'common'));
    const emailValidate = stryMutAct_9fa48("2399") ? {} : (stryCov_9fa48("2399"), {
      validate: stryMutAct_9fa48("2400") ? [] : (stryCov_9fa48("2400"), [required, email])
    });
    const emailErrorCondition = stryMutAct_9fa48("2403") ? errors || errors.registration.reg : stryMutAct_9fa48("2402") ? false : stryMutAct_9fa48("2401") ? true : (stryCov_9fa48("2401", "2402", "2403"), errors && errors.registration.reg);
    const emailAdvancedValidate = stryMutAct_9fa48("2404") ? {} : (stryCov_9fa48("2404"), {
      error: stryMutAct_9fa48("2405") ? !emailErrorCondition : (stryCov_9fa48("2405"), !(stryMutAct_9fa48("2406") ? emailErrorCondition : (stryCov_9fa48("2406"), !emailErrorCondition))),
      helperText: emailErrorCondition ? errors.registration.reg : stryMutAct_9fa48("2407") ? "Stryker was here!" : (stryCov_9fa48("2407"), '')
    });
    const passwordValidate = stryMutAct_9fa48("2408") ? {} : (stryCov_9fa48("2408"), {
      validate: stryMutAct_9fa48("2409") ? [] : (stryCov_9fa48("2409"), [required, password])
    });
    const passwordsCondition = stryMutAct_9fa48("2412") ? errors || errors.registration.passwords : stryMutAct_9fa48("2411") ? false : stryMutAct_9fa48("2410") ? true : (stryCov_9fa48("2410", "2411", "2412"), errors && errors.registration.passwords);
    const passwordValidateAdvanced = stryMutAct_9fa48("2413") ? {} : (stryCov_9fa48("2413"), {
      error: stryMutAct_9fa48("2414") ? !passwordsCondition : (stryCov_9fa48("2414"), !(stryMutAct_9fa48("2415") ? passwordsCondition : (stryCov_9fa48("2415"), !passwordsCondition))),
      helperText: passwordsCondition ? errors.registration.passwords : stryMutAct_9fa48("2416") ? "Stryker was here!" : (stryCov_9fa48("2416"), '')
    });
    const retypePasswordValidate = stryMutAct_9fa48("2417") ? {} : (stryCov_9fa48("2417"), {
      validate: stryMutAct_9fa48("2418") ? [] : (stryCov_9fa48("2418"), [required, password])
    });
    const retypePasswordValidateAdvanced = stryMutAct_9fa48("2419") ? {} : (stryCov_9fa48("2419"), {
      error: stryMutAct_9fa48("2420") ? !passwordsCondition : (stryCov_9fa48("2420"), !(stryMutAct_9fa48("2421") ? passwordsCondition : (stryCov_9fa48("2421"), !passwordsCondition)))
    });
    const isValidForm = formValues => {
      if (stryMutAct_9fa48("2422")) {
        {}
      } else {
        stryCov_9fa48("2422");
        if (stryMutAct_9fa48("2425") ? formValues.password === formValues.retypePassword : stryMutAct_9fa48("2424") ? false : stryMutAct_9fa48("2423") ? true : (stryCov_9fa48("2423", "2424", "2425"), formValues.password !== formValues.retypePassword)) {
          if (stryMutAct_9fa48("2426")) {
            {}
          } else {
            stryCov_9fa48("2426");
            setError(stryMutAct_9fa48("2427") ? {} : (stryCov_9fa48("2427"), {
              registration: stryMutAct_9fa48("2428") ? {} : (stryCov_9fa48("2428"), {
                passwords: t(DIFFERENT_PASSWORDS)
              })
            }));
            return stryMutAct_9fa48("2429") ? true : (stryCov_9fa48("2429"), false);
          }
        }
        return stryMutAct_9fa48("2430") ? false : (stryCov_9fa48("2430"), true);
      }
    };
    const onRegistration = values => {
      if (stryMutAct_9fa48("2431")) {
        {}
      } else {
        stryCov_9fa48("2431");
        const isValid = isValidForm(values);
        if (stryMutAct_9fa48("2433") ? false : stryMutAct_9fa48("2432") ? true : (stryCov_9fa48("2432", "2433"), isValid)) {
          if (stryMutAct_9fa48("2434")) {
            {}
          } else {
            stryCov_9fa48("2434");
            registrationHandler(values);
          }
        }
      }
    };
    return <Card className="auth-card">
            <div className="auth-card-header">
                <h2 className="auth-card-title">{t(REGISTRATION_PAGE_TITLE)}</h2>
            </div>

            {isLoading ? <CircularProgress size="70px" className="loading-circle auth-loading" /> : <form className="auth-form" onSubmit={handleSubmit(onRegistration)}>
                    <Field name="email" className="form-input" type="email" component={renderTextField} label={t(EMAIL_LABEL)} {...(stryMutAct_9fa48("2435") ? errors : (stryCov_9fa48("2435"), !errors)) ? emailValidate : emailAdvancedValidate} onChange={stryMutAct_9fa48("2436") ? () => undefined : (stryCov_9fa48("2436"), () => props.setError(null))} />
                    <Field name="password" className="form-input" type="password" component={renderTextField} label={t(PASSWORD_LABEL)} {...(stryMutAct_9fa48("2437") ? errors : (stryCov_9fa48("2437"), !errors)) ? passwordValidate : passwordValidateAdvanced} onChange={stryMutAct_9fa48("2438") ? () => undefined : (stryCov_9fa48("2438"), () => props.setError(null))} />
                    <Field name="retypePassword" className="form-input" type="password" component={renderTextField} label={t(RETYPE_PASSWORD_LABEL)} {...(stryMutAct_9fa48("2439") ? errors : (stryCov_9fa48("2439"), !errors)) ? retypePasswordValidate : retypePasswordValidateAdvanced} />
                    <div className="auth-form-actions">
                        <Button className="auth-confirm-button" type="submit" variant="contained" color="primary">
                            {t(CREATE_ACCOUNT)}
                        </Button>
                    </div>
                    <div className="auth-form-footer">
                        <span>{t(ACCOUNT_EXIST)}</span>
                        <Link to={LOGIN_LINK} className="form-link">
                            {t(LOGIN_TITLE)}
                        </Link>
                    </div>
                </form>}
        </Card>;
  }
};
const RegistrationReduxForm = reduxForm(stryMutAct_9fa48("2440") ? {} : (stryCov_9fa48("2440"), {
  form: REGISTRATION_FORM
}))(RegistrationForm);
export default RegistrationReduxForm;