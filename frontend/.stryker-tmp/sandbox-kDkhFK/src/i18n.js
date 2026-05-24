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
import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
const supportedLangs = stryMutAct_9fa48("6379") ? [] : (stryCov_9fa48("6379"), [stryMutAct_9fa48("6380") ? "" : (stryCov_9fa48("6380"), 'en'), stryMutAct_9fa48("6381") ? "" : (stryCov_9fa48("6381"), 'uk')]);
const userLang = stryMutAct_9fa48("6384") ? localStorage.getItem('i18nextLng') && navigator.language : stryMutAct_9fa48("6383") ? false : stryMutAct_9fa48("6382") ? true : (stryCov_9fa48("6382", "6383", "6384"), localStorage.getItem(stryMutAct_9fa48("6385") ? "" : (stryCov_9fa48("6385"), 'i18nextLng')) || navigator.language);
export const lang = stryMutAct_9fa48("6388") ? supportedLangs.find(i => i === userLang) && 'en' : stryMutAct_9fa48("6387") ? false : stryMutAct_9fa48("6386") ? true : (stryCov_9fa48("6386", "6387", "6388"), supportedLangs.find(stryMutAct_9fa48("6389") ? () => undefined : (stryCov_9fa48("6389"), i => stryMutAct_9fa48("6392") ? i !== userLang : stryMutAct_9fa48("6391") ? false : stryMutAct_9fa48("6390") ? true : (stryCov_9fa48("6390", "6391", "6392"), i === userLang))) || (stryMutAct_9fa48("6393") ? "" : (stryCov_9fa48("6393"), 'en')));
i18next.use(Backend).use(LanguageDetector).use(initReactI18next).init(stryMutAct_9fa48("6394") ? {} : (stryCov_9fa48("6394"), {
  lng: lang,
  fallbackLng: stryMutAct_9fa48("6395") ? "" : (stryCov_9fa48("6395"), 'en'),
  debug: stryMutAct_9fa48("6396") ? true : (stryCov_9fa48("6396"), false),
  ns: stryMutAct_9fa48("6397") ? [] : (stryCov_9fa48("6397"), [stryMutAct_9fa48("6398") ? "" : (stryCov_9fa48("6398"), 'formElements'), stryMutAct_9fa48("6399") ? "" : (stryCov_9fa48("6399"), 'validationMessages'), stryMutAct_9fa48("6400") ? "" : (stryCov_9fa48("6400"), 'common'), stryMutAct_9fa48("6401") ? "" : (stryCov_9fa48("6401"), 'serviceMessages')]),
  defaultNS: stryMutAct_9fa48("6402") ? "" : (stryCov_9fa48("6402"), 'common'),
  keySeparator: stryMutAct_9fa48("6403") ? true : (stryCov_9fa48("6403"), false),
  useDataAttrOptions: stryMutAct_9fa48("6404") ? false : (stryCov_9fa48("6404"), true),
  interpolation: stryMutAct_9fa48("6405") ? {} : (stryCov_9fa48("6405"), {
    escapeValue: stryMutAct_9fa48("6406") ? true : (stryCov_9fa48("6406"), false),
    formatSeparator: stryMutAct_9fa48("6407") ? "" : (stryCov_9fa48("6407"), ',')
  }),
  backend: stryMutAct_9fa48("6408") ? {} : (stryCov_9fa48("6408"), {
    loadPath: stryMutAct_9fa48("6409") ? "" : (stryCov_9fa48("6409"), '/assets/i18n/translations/{{lng}}/{{ns}}.json')
  }),
  react: stryMutAct_9fa48("6410") ? {} : (stryCov_9fa48("6410"), {
    bindI18n: stryMutAct_9fa48("6411") ? "" : (stryCov_9fa48("6411"), 'languageChanged'),
    bindStore: stryMutAct_9fa48("6412") ? "Stryker was here!" : (stryCov_9fa48("6412"), ''),
    transEmptyNodeValue: stryMutAct_9fa48("6413") ? "Stryker was here!" : (stryCov_9fa48("6413"), ''),
    transSupportBasicHtmlNodes: stryMutAct_9fa48("6414") ? false : (stryCov_9fa48("6414"), true),
    useSuspense: stryMutAct_9fa48("6415") ? false : (stryCov_9fa48("6415"), true)
  })
}), err => {
  if (stryMutAct_9fa48("6416")) {
    {}
  } else {
    stryCov_9fa48("6416");
    if (stryMutAct_9fa48("6418") ? false : stryMutAct_9fa48("6417") ? true : (stryCov_9fa48("6417", "6418"), err)) {
      if (stryMutAct_9fa48("6419")) {
        {}
      } else {
        stryCov_9fa48("6419");
        console.error(stryMutAct_9fa48("6420") ? "" : (stryCov_9fa48("6420"), 'Some problems with i18next!'));
      }
    }
  }
});
export default i18next;