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
import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects';
import jwtDecode from 'jwt-decode';
import * as actionTypes from '../actions/actionsType';
import { ACTIVATE_ACCOUNT_URL, LOGIN_URL, LOGOUT_URL, REGISTRATION_URL, RESET_PASSWORD_URL } from '../constants/axios';
import { activateSuccess, authAutoLogout, authSuccess, logout, registerUserSuccess, resetUserPasswordSuccess, setAuthError } from '../actions';
import { axiosCall } from '../services/axios';
import { GOOGLE } from '../constants/common';
import { TOKEN_BEGIN } from '../constants/tokenBegin';
import axios from '../helper/axios';
import { setAuthLoading } from '../actions/loadingIndicator';
import { POST, PUT } from '../constants/methods';
import { createErrorMessage } from '../utils/sagaUtils';
function* loginToAccount({
  payload
}) {
  if (stryMutAct_9fa48("7347")) {
    {}
  } else {
    stryCov_9fa48("7347");
    try {
      if (stryMutAct_9fa48("7348")) {
        {}
      } else {
        stryCov_9fa48("7348");
        let response;
        if (stryMutAct_9fa48("7351") ? payload.type !== GOOGLE : stryMutAct_9fa48("7350") ? false : stryMutAct_9fa48("7349") ? true : (stryCov_9fa48("7349", "7350", "7351"), payload.type === GOOGLE)) {
          if (stryMutAct_9fa48("7352")) {
            {}
          } else {
            stryCov_9fa48("7352");
            response = stryMutAct_9fa48("7353") ? {} : (stryCov_9fa48("7353"), {
              data: stryMutAct_9fa48("7354") ? {} : (stryCov_9fa48("7354"), {
                token: payload.token,
                email: stryMutAct_9fa48("7355") ? "Stryker was here!" : (stryCov_9fa48("7355"), '')
              })
            });
          }
        } else {
          if (stryMutAct_9fa48("7356")) {
            {}
          } else {
            stryCov_9fa48("7356");
            response = yield call(axiosCall, LOGIN_URL, POST, payload);
          }
        }
        const {
          token,
          email
        } = response.data;
        const decodedJWT = jwtDecode(token);
        const expirationDate = new Date(stryMutAct_9fa48("7357") ? decodedJWT.exp / 1000 : (stryCov_9fa48("7357"), decodedJWT.exp * 1000));
        axios.defaults.headers.common.Authorization = stryMutAct_9fa48("7358") ? TOKEN_BEGIN - token : (stryCov_9fa48("7358"), TOKEN_BEGIN + token);
        yield localStorage.setItem(stryMutAct_9fa48("7359") ? "" : (stryCov_9fa48("7359"), 'token'), stryMutAct_9fa48("7360") ? TOKEN_BEGIN - token : (stryCov_9fa48("7360"), TOKEN_BEGIN + token));
        yield localStorage.setItem(stryMutAct_9fa48("7361") ? "" : (stryCov_9fa48("7361"), 'expirationDate'), expirationDate);
        yield localStorage.setItem(stryMutAct_9fa48("7362") ? "" : (stryCov_9fa48("7362"), 'userRole'), decodedJWT.roles);
        yield localStorage.setItem(stryMutAct_9fa48("7363") ? "" : (stryCov_9fa48("7363"), 'email'), stryMutAct_9fa48("7366") ? email && decodedJWT.sub : stryMutAct_9fa48("7365") ? false : stryMutAct_9fa48("7364") ? true : (stryCov_9fa48("7364", "7365", "7366"), email || decodedJWT.sub));
        yield put(authSuccess(stryMutAct_9fa48("7367") ? {} : (stryCov_9fa48("7367"), {
          token,
          role: decodedJWT.roles,
          email
        })));
        yield put(authAutoLogout(stryMutAct_9fa48("7368") ? decodedJWT.exp * 1000 + new Date().getTime() : (stryCov_9fa48("7368"), (stryMutAct_9fa48("7369") ? decodedJWT.exp / 1000 : (stryCov_9fa48("7369"), decodedJWT.exp * 1000)) - new Date().getTime())));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7370")) {
        {}
      } else {
        stryCov_9fa48("7370");
        yield put(setAuthError(stryMutAct_9fa48("7371") ? {} : (stryCov_9fa48("7371"), {
          login: createErrorMessage(stryMutAct_9fa48("7372") ? {} : (stryCov_9fa48("7372"), {
            response: error.response
          }))
        })));
      }
    } finally {
      if (stryMutAct_9fa48("7373")) {
        {}
      } else {
        stryCov_9fa48("7373");
        yield put(setAuthLoading(stryMutAct_9fa48("7374") ? true : (stryCov_9fa48("7374"), false)));
      }
    }
  }
}
function* registerAccount({
  payload
}) {
  if (stryMutAct_9fa48("7375")) {
    {}
  } else {
    stryCov_9fa48("7375");
    try {
      if (stryMutAct_9fa48("7376")) {
        {}
      } else {
        stryCov_9fa48("7376");
        const response = yield call(axiosCall, REGISTRATION_URL, POST, payload);
        yield put(registerUserSuccess(response));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7377")) {
        {}
      } else {
        stryCov_9fa48("7377");
        yield put(setAuthError(stryMutAct_9fa48("7378") ? {} : (stryCov_9fa48("7378"), {
          registration: createErrorMessage(stryMutAct_9fa48("7379") ? {} : (stryCov_9fa48("7379"), {
            response: error.response
          }))
        })));
      }
    } finally {
      if (stryMutAct_9fa48("7380")) {
        {}
      } else {
        stryCov_9fa48("7380");
        yield put(setAuthLoading(stryMutAct_9fa48("7381") ? true : (stryCov_9fa48("7381"), false)));
      }
    }
  }
}
function* logoutOfAccount(payload) {
  if (stryMutAct_9fa48("7382")) {
    {}
  } else {
    stryCov_9fa48("7382");
    try {
      if (stryMutAct_9fa48("7383")) {
        {}
      } else {
        stryCov_9fa48("7383");
        yield call(axiosCall, LOGOUT_URL, POST, payload);
        yield put(logout());
      }
    } catch (error) {
      if (stryMutAct_9fa48("7384")) {
        {}
      } else {
        stryCov_9fa48("7384");
        yield put(setAuthError(stryMutAct_9fa48("7385") ? {} : (stryCov_9fa48("7385"), {
          login: createErrorMessage(stryMutAct_9fa48("7386") ? {} : (stryCov_9fa48("7386"), {
            response: error.response
          }))
        })));
      }
    }
  }
}
function* checkAuthState(payload) {
  if (stryMutAct_9fa48("7387")) {
    {}
  } else {
    stryCov_9fa48("7387");
    const {
      token,
      role
    } = payload;
    const expirationDate = new Date(localStorage.getItem(stryMutAct_9fa48("7388") ? "" : (stryCov_9fa48("7388"), 'expirationDate')));
    if (stryMutAct_9fa48("7391") ? !token && expirationDate <= new Date() : stryMutAct_9fa48("7390") ? false : stryMutAct_9fa48("7389") ? true : (stryCov_9fa48("7389", "7390", "7391"), (stryMutAct_9fa48("7392") ? token : (stryCov_9fa48("7392"), !token)) || (stryMutAct_9fa48("7395") ? expirationDate > new Date() : stryMutAct_9fa48("7394") ? expirationDate < new Date() : stryMutAct_9fa48("7393") ? false : (stryCov_9fa48("7393", "7394", "7395"), expirationDate <= new Date())))) {
      if (stryMutAct_9fa48("7396")) {
        {}
      } else {
        stryCov_9fa48("7396");
        yield put(logout());
      }
    } else {
      if (stryMutAct_9fa48("7397")) {
        {}
      } else {
        stryCov_9fa48("7397");
        yield put(authSuccess(stryMutAct_9fa48("7398") ? {} : (stryCov_9fa48("7398"), {
          token,
          role
        })));
      }
    }
  }
}
function* checkAuthTimeout(action) {
  if (stryMutAct_9fa48("7399")) {
    {}
  } else {
    stryCov_9fa48("7399");
    yield delay(action.expirationTime);
    yield call(logoutOfAccount);
  }
}
function* activateUserAccount({
  payload
}) {
  if (stryMutAct_9fa48("7400")) {
    {}
  } else {
    stryCov_9fa48("7400");
    try {
      if (stryMutAct_9fa48("7401")) {
        {}
      } else {
        stryCov_9fa48("7401");
        const response = yield call(axiosCall, stryMutAct_9fa48("7402") ? `` : (stryCov_9fa48("7402"), `${ACTIVATE_ACCOUNT_URL}?token=${payload}`), PUT);
        yield put(activateSuccess(response));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7403")) {
        {}
      } else {
        stryCov_9fa48("7403");
        yield put(setAuthError(stryMutAct_9fa48("7404") ? {} : (stryCov_9fa48("7404"), {
          activationError: createErrorMessage(stryMutAct_9fa48("7405") ? {} : (stryCov_9fa48("7405"), {
            response: error.response
          }))
        })));
      }
    } finally {
      if (stryMutAct_9fa48("7406")) {
        {}
      } else {
        stryCov_9fa48("7406");
        yield put(setAuthLoading(stryMutAct_9fa48("7407") ? true : (stryCov_9fa48("7407"), false)));
      }
    }
  }
}
function* resetPassword({
  payload
}) {
  if (stryMutAct_9fa48("7408")) {
    {}
  } else {
    stryCov_9fa48("7408");
    try {
      if (stryMutAct_9fa48("7409")) {
        {}
      } else {
        stryCov_9fa48("7409");
        const response = yield call(axiosCall, stryMutAct_9fa48("7410") ? `` : (stryCov_9fa48("7410"), `${RESET_PASSWORD_URL}?email=${payload.email}`), PUT, payload);
        yield put(resetUserPasswordSuccess(response));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7411")) {
        {}
      } else {
        stryCov_9fa48("7411");
        yield put(setAuthError(stryMutAct_9fa48("7412") ? {} : (stryCov_9fa48("7412"), {
          resetPassword: createErrorMessage(stryMutAct_9fa48("7413") ? {} : (stryCov_9fa48("7413"), {
            response: error.response
          }))
        })));
      }
    } finally {
      if (stryMutAct_9fa48("7414")) {
        {}
      } else {
        stryCov_9fa48("7414");
        yield put(setAuthLoading(stryMutAct_9fa48("7415") ? true : (stryCov_9fa48("7415"), false)));
      }
    }
  }
}
export default function* watchUserAuthentication() {
  if (stryMutAct_9fa48("7416")) {
    {}
  } else {
    stryCov_9fa48("7416");
    yield takeLatest(actionTypes.REGISTER_USER, registerAccount);
    yield takeLatest(actionTypes.ACTIVATE_USER, activateUserAccount);
    yield takeLatest(actionTypes.RESET_USER_PASSWORD, resetPassword);
    yield takeLatest(actionTypes.AUTH_USER, loginToAccount);
    yield takeEvery(actionTypes.AUTH_USER_CHECK_STATE, checkAuthState);
    yield takeEvery(actionTypes.AUTH_USER_AUTO_LOGOUT, checkAuthTimeout);
    yield takeLatest(actionTypes.AUTH_USER_INITIATE_LOGOUT, logoutOfAccount);
  }
}