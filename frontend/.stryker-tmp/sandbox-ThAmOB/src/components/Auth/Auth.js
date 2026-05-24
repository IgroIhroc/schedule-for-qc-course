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
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { ADMIN_PAGE_LINK, HOME_PAGE_LINK, LOGIN_LINK } from '../../constants/links';
import { authTypes, successAuthMessages } from '../../constants/auth';
import { GOOGLE_LOGIN_URL } from '../../constants/axios';
import { userRoles } from '../../constants/userRoles';
import { snackbarTypes } from '../../constants/snackbarTypes';
import LoginForm from '../LoginForm/LoginForm';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import ResetPasswordForm from '../ResetPasswordForm/ResetPasswordForm';
import { resetFormHandler } from '../../helper/formHelper';
import { handleSnackbarOpenService } from '../../services/snackbarService';
import { LOGIN_FORM, REGISTRATION_FORM, RESET_PASSWORD_FORM } from '../../constants/reduxForms';
import { GOOGLE } from '../../constants/common';
import './Auth.scss';
import { ADMIN_TITLE, BROKEN_TOKEN, HOME_TITLE, LOGIN_TITLE, REGISTRATION_PAGE_TITLE, RESET_PASSWORD_PAGE_TITLE } from '../../constants/translationLabels/common';
const Auth = props => {
  if (stryMutAct_9fa48("825")) {
    {}
  } else {
    stryCov_9fa48("825");
    const {
      authType,
      userRole,
      response,
      resetPasswordResponse,
      onRegister,
      onResetPassword,
      setLoadingForm,
      onAuth,
      setError,
      error,
      isLoading
    } = props;
    const [isResponse, setIsResponse] = useState(stryMutAct_9fa48("826") ? true : (stryCov_9fa48("826"), false));
    const history = useHistory();
    const {
      t
    } = useTranslation(stryMutAct_9fa48("827") ? "" : (stryCov_9fa48("827"), 'common'));
    const url = window.document.location;
    const parser = new URL(url);
    const loginHandler = loginData => {
      if (stryMutAct_9fa48("828")) {
        {}
      } else {
        stryCov_9fa48("828");
        onAuth(loginData);
        setLoadingForm(stryMutAct_9fa48("829") ? false : (stryCov_9fa48("829"), true));
        resetFormHandler(LOGIN_FORM);
      }
    };
    const showSuccessMessage = massage => {
      if (stryMutAct_9fa48("830")) {
        {}
      } else {
        stryCov_9fa48("830");
        handleSnackbarOpenService(stryMutAct_9fa48("831") ? false : (stryCov_9fa48("831"), true), snackbarTypes.SUCCESS, t(massage));
      }
    };
    const successLoginRedirect = useCallback(() => {
      if (stryMutAct_9fa48("832")) {
        {}
      } else {
        stryCov_9fa48("832");
        if (stryMutAct_9fa48("835") ? userRole !== userRoles.MANAGER : stryMutAct_9fa48("834") ? false : stryMutAct_9fa48("833") ? true : (stryCov_9fa48("833", "834", "835"), userRole === userRoles.MANAGER)) {
          if (stryMutAct_9fa48("836")) {
            {}
          } else {
            stryCov_9fa48("836");
            document.title = t(ADMIN_TITLE);
            history.push(ADMIN_PAGE_LINK);
          }
        } else {
          if (stryMutAct_9fa48("837")) {
            {}
          } else {
            stryCov_9fa48("837");
            document.title = t(HOME_TITLE);
            history.push(HOME_PAGE_LINK);
          }
        }
        showSuccessMessage(successAuthMessages[authType]);
      }
    }, stryMutAct_9fa48("838") ? ["Stryker was here"] : (stryCov_9fa48("838"), []));
    const registrationHandler = registrationData => {
      if (stryMutAct_9fa48("839")) {
        {}
      } else {
        stryCov_9fa48("839");
        onRegister(stryMutAct_9fa48("840") ? {} : (stryCov_9fa48("840"), {
          email: registrationData.email,
          password: registrationData.password
        }));
        setLoadingForm(stryMutAct_9fa48("841") ? false : (stryCov_9fa48("841"), true));
        resetFormHandler(REGISTRATION_FORM);
        setIsResponse(stryMutAct_9fa48("842") ? false : (stryCov_9fa48("842"), true));
      }
    };
    const resetPasswordHandler = resetPasswordData => {
      if (stryMutAct_9fa48("843")) {
        {}
      } else {
        stryCov_9fa48("843");
        onResetPassword(stryMutAct_9fa48("844") ? {} : (stryCov_9fa48("844"), {
          email: resetPasswordData.email
        }));
        setLoadingForm(stryMutAct_9fa48("845") ? false : (stryCov_9fa48("845"), true));
        resetFormHandler(RESET_PASSWORD_FORM);
        setIsResponse(stryMutAct_9fa48("846") ? false : (stryCov_9fa48("846"), true));
      }
    };
    const socialLoginHandler = data => {
      if (stryMutAct_9fa48("847")) {
        {}
      } else {
        stryCov_9fa48("847");
        setLoadingForm(stryMutAct_9fa48("848") ? false : (stryCov_9fa48("848"), true));
        if (stryMutAct_9fa48("851") ? !data.token && data.token.length < 20 : stryMutAct_9fa48("850") ? false : stryMutAct_9fa48("849") ? true : (stryCov_9fa48("849", "850", "851"), (stryMutAct_9fa48("852") ? data.token : (stryCov_9fa48("852"), !data.token)) || (stryMutAct_9fa48("855") ? data.token.length >= 20 : stryMutAct_9fa48("854") ? data.token.length <= 20 : stryMutAct_9fa48("853") ? false : (stryCov_9fa48("853", "854", "855"), data.token.length < 20)))) {
          if (stryMutAct_9fa48("856")) {
            {}
          } else {
            stryCov_9fa48("856");
            props.setError(stryMutAct_9fa48("857") ? {} : (stryCov_9fa48("857"), {
              login: t(BROKEN_TOKEN)
            }));
            return;
          }
        }
        onAuth(stryMutAct_9fa48("858") ? {} : (stryCov_9fa48("858"), {
          type: authTypes.GOOGLE
        }));
        resetFormHandler(LOGIN_FORM);
        window.history.replaceState({}, document.title, stryMutAct_9fa48("859") ? "" : (stryCov_9fa48("859"), '/'));
        setLoadingForm(stryMutAct_9fa48("860") ? true : (stryCov_9fa48("860"), false));
      }
    };
    let social = stryMutAct_9fa48("861") ? true : (stryCov_9fa48("861"), false);
    let isToken = stryMutAct_9fa48("862") ? true : (stryCov_9fa48("862"), false);
    let splitedParamToken = stryMutAct_9fa48("863") ? "Stryker was here!" : (stryCov_9fa48("863"), '');
    if (stryMutAct_9fa48("867") ? parser.search.length <= 0 : stryMutAct_9fa48("866") ? parser.search.length >= 0 : stryMutAct_9fa48("865") ? false : stryMutAct_9fa48("864") ? true : (stryCov_9fa48("864", "865", "866", "867"), parser.search.length > 0)) {
      if (stryMutAct_9fa48("868")) {
        {}
      } else {
        stryCov_9fa48("868");
        const params = parser.search.split(stryMutAct_9fa48("869") ? "" : (stryCov_9fa48("869"), '&'));
        if (stryMutAct_9fa48("871") ? false : stryMutAct_9fa48("870") ? true : (stryCov_9fa48("870", "871"), params)) {
          if (stryMutAct_9fa48("872")) {
            {}
          } else {
            stryCov_9fa48("872");
            params.forEach(param => {
              if (stryMutAct_9fa48("873")) {
                {}
              } else {
                stryCov_9fa48("873");
                const splitedParam = param.split(stryMutAct_9fa48("874") ? "" : (stryCov_9fa48("874"), '='));
                if (stryMutAct_9fa48("876") ? false : stryMutAct_9fa48("875") ? true : (stryCov_9fa48("875", "876"), splitedParam)) {
                  if (stryMutAct_9fa48("877")) {
                    {}
                  } else {
                    stryCov_9fa48("877");
                    if (stryMutAct_9fa48("880") ? splitedParam[0] === '?social' || splitedParam[1] === 'true' : stryMutAct_9fa48("879") ? false : stryMutAct_9fa48("878") ? true : (stryCov_9fa48("878", "879", "880"), (stryMutAct_9fa48("882") ? splitedParam[0] !== '?social' : stryMutAct_9fa48("881") ? true : (stryCov_9fa48("881", "882"), splitedParam[0] === (stryMutAct_9fa48("883") ? "" : (stryCov_9fa48("883"), '?social')))) && (stryMutAct_9fa48("885") ? splitedParam[1] !== 'true' : stryMutAct_9fa48("884") ? true : (stryCov_9fa48("884", "885"), splitedParam[1] === (stryMutAct_9fa48("886") ? "" : (stryCov_9fa48("886"), 'true')))))) {
                      if (stryMutAct_9fa48("887")) {
                        {}
                      } else {
                        stryCov_9fa48("887");
                        social = stryMutAct_9fa48("888") ? false : (stryCov_9fa48("888"), true);
                      }
                    }
                    if (stryMutAct_9fa48("891") ? splitedParam[0] === 'token' || splitedParam[1].length > 0 : stryMutAct_9fa48("890") ? false : stryMutAct_9fa48("889") ? true : (stryCov_9fa48("889", "890", "891"), (stryMutAct_9fa48("893") ? splitedParam[0] !== 'token' : stryMutAct_9fa48("892") ? true : (stryCov_9fa48("892", "893"), splitedParam[0] === (stryMutAct_9fa48("894") ? "" : (stryCov_9fa48("894"), 'token')))) && (stryMutAct_9fa48("897") ? splitedParam[1].length <= 0 : stryMutAct_9fa48("896") ? splitedParam[1].length >= 0 : stryMutAct_9fa48("895") ? true : (stryCov_9fa48("895", "896", "897"), splitedParam[1].length > 0)))) {
                      if (stryMutAct_9fa48("898")) {
                        {}
                      } else {
                        stryCov_9fa48("898");
                        isToken = stryMutAct_9fa48("899") ? false : (stryCov_9fa48("899"), true);
                        splitedParamToken = splitedParam;
                      }
                    }
                  }
                }
              }
            });
          }
        }
        if (stryMutAct_9fa48("902") ? social || isToken : stryMutAct_9fa48("901") ? false : stryMutAct_9fa48("900") ? true : (stryCov_9fa48("900", "901", "902"), social && isToken)) socialLoginHandler(stryMutAct_9fa48("903") ? {} : (stryCov_9fa48("903"), {
          authType: GOOGLE,
          token: splitedParamToken[1]
        }));
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("904")) {
        {}
      } else {
        stryCov_9fa48("904");
        if (stryMutAct_9fa48("906") ? false : stryMutAct_9fa48("905") ? true : (stryCov_9fa48("905", "906"), userRole)) {
          if (stryMutAct_9fa48("907")) {
            {}
          } else {
            stryCov_9fa48("907");
            successLoginRedirect();
          }
        }
      }
    }, stryMutAct_9fa48("908") ? [] : (stryCov_9fa48("908"), [userRole]));
    useEffect(() => {
      if (stryMutAct_9fa48("909")) {
        {}
      } else {
        stryCov_9fa48("909");
        if (stryMutAct_9fa48("911") ? false : stryMutAct_9fa48("910") ? true : (stryCov_9fa48("910", "911"), isResponse)) {
          if (stryMutAct_9fa48("912")) {
            {}
          } else {
            stryCov_9fa48("912");
            showSuccessMessage(successAuthMessages[authType]);
            history.push(LOGIN_LINK);
          }
        }
      }
    }, stryMutAct_9fa48("913") ? [] : (stryCov_9fa48("913"), [response, resetPasswordResponse]));
    switch (authType) {
      case authTypes.REGISTRATION:
        if (stryMutAct_9fa48("914")) {} else {
          stryCov_9fa48("914");
          document.title = t(REGISTRATION_PAGE_TITLE);
          return <div className="auth-container">
                    <RegistrationForm isLoading={isLoading} registrationError={error} registrationHandler={registrationHandler} setError={setError} />
                </div>;
        }
      case authTypes.RESET_PASSWORD:
        if (stryMutAct_9fa48("915")) {} else {
          stryCov_9fa48("915");
          document.title = t(RESET_PASSWORD_PAGE_TITLE);
          return <div className="auth-container">
                    <ResetPasswordForm isLoading={isLoading} resetPasswordError={error} onSubmit={resetPasswordHandler} setError={setError} />
                </div>;
        }
      default:
        if (stryMutAct_9fa48("916")) {} else {
          stryCov_9fa48("916");
          document.title = t(LOGIN_TITLE);
          return <div className="auth-container">
                    <a className="hidden-link" href={stryMutAct_9fa48("917") ? `` : (stryCov_9fa48("917"), `${stryMutAct_9fa48("918") ? process.env.REACT_APP_API_BASE_URL : (stryCov_9fa48("918"), process.env.REACT_APP_API_BASE_URL.trim())}${stryMutAct_9fa48("919") ? `` : (stryCov_9fa48("919"), `/${GOOGLE_LOGIN_URL}`)}`)}>
                        auth via google
                    </a>
                    <LoginForm isLoading={isLoading} loginHandler={loginHandler} setError={setError} errors={error} />
                </div>;
        }
    }
  }
};
export default Auth;