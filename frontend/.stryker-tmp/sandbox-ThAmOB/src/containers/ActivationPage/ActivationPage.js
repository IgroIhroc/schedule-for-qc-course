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
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { get } from 'lodash';
import { CircularProgress } from '@material-ui/core';
import { activateUser } from '../../actions';
import { LOGIN_LINK } from '../../constants/links';
import { snackbarTypes } from '../../constants/snackbarTypes';
import { handleSnackbarOpenService } from '../../services/snackbarService';
import { TOKEN_ERROR, VERIFYING_TOKEN } from '../../constants/translationLabels/common';
import './ActivationPage.scss';
const ActivationPage = props => {
  if (stryMutAct_9fa48("4905")) {
    {}
  } else {
    stryCov_9fa48("4905");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("4906") ? "" : (stryCov_9fa48("4906"), 'common'));
    const params = new URLSearchParams(props.location.search);
    const token = params.get(stryMutAct_9fa48("4907") ? "" : (stryCov_9fa48("4907"), 'token'));
    const {
      error
    } = props;
    const {
      response
    } = props;
    let redirect = null;
    if (stryMutAct_9fa48("4910") ? response || get(response.data, 'message') : stryMutAct_9fa48("4909") ? false : stryMutAct_9fa48("4908") ? true : (stryCov_9fa48("4908", "4909", "4910"), response && get(response.data, stryMutAct_9fa48("4911") ? "" : (stryCov_9fa48("4911"), 'message')))) {
      if (stryMutAct_9fa48("4912")) {
        {}
      } else {
        stryCov_9fa48("4912");
        redirect = <Redirect to={LOGIN_LINK} />;
        handleSnackbarOpenService(stryMutAct_9fa48("4913") ? false : (stryCov_9fa48("4913"), true), snackbarTypes.SUCCESS, response.data.message);
      }
    }
    let main = <>
            <h2>{t(VERIFYING_TOKEN)}</h2>
            <CircularProgress />
        </>;
    if (stryMutAct_9fa48("4915") ? false : stryMutAct_9fa48("4914") ? true : (stryCov_9fa48("4914", "4915"), error)) {
      if (stryMutAct_9fa48("4916")) {
        {}
      } else {
        stryCov_9fa48("4916");
        main = <>
                <h2>{t(TOKEN_ERROR)}</h2>
                <p>{error}</p>
            </>;
      }
    }
    useEffect(() => {
      if (stryMutAct_9fa48("4917")) {
        {}
      } else {
        stryCov_9fa48("4917");
        if (stryMutAct_9fa48("4919") ? false : stryMutAct_9fa48("4918") ? true : (stryCov_9fa48("4918", "4919"), token)) {
          if (stryMutAct_9fa48("4920")) {
            {}
          } else {
            stryCov_9fa48("4920");
            props.onActivate(token);
          }
        }
      }
    }, stryMutAct_9fa48("4921") ? [] : (stryCov_9fa48("4921"), [token]));
    return <>
            <section className="activation-page-container">
                {redirect}
                <section className="card activation-section">{main}</section>
            </section>
        </>;
  }
};
const mapStateToProps = stryMutAct_9fa48("4922") ? () => undefined : (stryCov_9fa48("4922"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("4923") ? {} : (stryCov_9fa48("4923"), {
    response: state.auth.response,
    error: state.auth.activationError
  });
  return mapStateToProps;
})());
const mapDispatchToProps = dispatch => {
  if (stryMutAct_9fa48("4924")) {
    {}
  } else {
    stryCov_9fa48("4924");
    return stryMutAct_9fa48("4925") ? {} : (stryCov_9fa48("4925"), {
      onActivate: stryMutAct_9fa48("4926") ? () => undefined : (stryCov_9fa48("4926"), data => dispatch(activateUser(data)))
    });
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ActivationPage);