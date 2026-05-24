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
import axios from 'axios';
import { TOKEN_BEGIN } from '../constants/tokenBegin';
const instance = axios.create(stryMutAct_9fa48("5481") ? {} : (stryCov_9fa48("5481"), {
  baseURL: process.env.REACT_APP_API_BASE_URL
}));
instance.interceptors.request.use(config => {
  if (stryMutAct_9fa48("5482")) {
    {}
  } else {
    stryCov_9fa48("5482");
    const token = localStorage.getItem(stryMutAct_9fa48("5483") ? "" : (stryCov_9fa48("5483"), 'token'));
    if (stryMutAct_9fa48("5486") ? token || token.includes(TOKEN_BEGIN) : stryMutAct_9fa48("5485") ? false : stryMutAct_9fa48("5484") ? true : (stryCov_9fa48("5484", "5485", "5486"), token && token.includes(TOKEN_BEGIN))) {
      if (stryMutAct_9fa48("5487")) {
        {}
      } else {
        stryCov_9fa48("5487");
        config.headers.Authorization = token;
      }
    }
    return config;
  }
}, error => {
  if (stryMutAct_9fa48("5488")) {
    {}
  } else {
    stryCov_9fa48("5488");
    return Promise.reject(error);
  }
});
instance.interceptors.response.use(response => {
  if (stryMutAct_9fa48("5489")) {
    {}
  } else {
    stryCov_9fa48("5489");
    const newToken = response.headers[stryMutAct_9fa48("5490") ? "" : (stryCov_9fa48("5490"), 'x-new-token')];
    if (stryMutAct_9fa48("5492") ? false : stryMutAct_9fa48("5491") ? true : (stryCov_9fa48("5491", "5492"), newToken)) {
      if (stryMutAct_9fa48("5493")) {
        {}
      } else {
        stryCov_9fa48("5493");
        localStorage.setItem(stryMutAct_9fa48("5494") ? "" : (stryCov_9fa48("5494"), 'token'), stryMutAct_9fa48("5495") ? `` : (stryCov_9fa48("5495"), `${TOKEN_BEGIN}${newToken}`));
      }
    }
    return response;
  }
}, error => {
  if (stryMutAct_9fa48("5496")) {
    {}
  } else {
    stryCov_9fa48("5496");
    if (stryMutAct_9fa48("5499") ? error.response?.status === 401 && error.response?.status === 403 : stryMutAct_9fa48("5498") ? false : stryMutAct_9fa48("5497") ? true : (stryCov_9fa48("5497", "5498", "5499"), (stryMutAct_9fa48("5501") ? error.response?.status !== 401 : stryMutAct_9fa48("5500") ? false : (stryCov_9fa48("5500", "5501"), (stryMutAct_9fa48("5502") ? error.response.status : (stryCov_9fa48("5502"), error.response?.status)) === 401)) || (stryMutAct_9fa48("5504") ? error.response?.status !== 403 : stryMutAct_9fa48("5503") ? false : (stryCov_9fa48("5503", "5504"), (stryMutAct_9fa48("5505") ? error.response.status : (stryCov_9fa48("5505"), error.response?.status)) === 403)))) {
      if (stryMutAct_9fa48("5506")) {
        {}
      } else {
        stryCov_9fa48("5506");
        localStorage.removeItem(stryMutAct_9fa48("5507") ? "" : (stryCov_9fa48("5507"), 'token'));
        localStorage.removeItem(stryMutAct_9fa48("5508") ? "" : (stryCov_9fa48("5508"), 'userRole'));
        window.location.href = stryMutAct_9fa48("5509") ? "" : (stryCov_9fa48("5509"), '/login');
      }
    }
    return Promise.reject(error);
  }
});
export default instance;