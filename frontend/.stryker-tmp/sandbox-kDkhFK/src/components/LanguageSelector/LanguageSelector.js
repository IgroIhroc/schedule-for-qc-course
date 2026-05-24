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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.scss';
import { languageShorthands } from '../../constants/languages/shorthands';
import { languageTitles } from '../../constants/languages/titles';
import ukIcon from '../../share/icons/uk.png';
import uaIcon from '../../share/icons/ua.png';
const LanguageSelector = () => {
  if (stryMutAct_9fa48("2056")) {
    {}
  } else {
    stryCov_9fa48("2056");
    const {
      i18n
    } = useTranslation();
    const langFlags = stryMutAct_9fa48("2057") ? [] : (stryCov_9fa48("2057"), [stryMutAct_9fa48("2058") ? {} : (stryCov_9fa48("2058"), {
      lang: languageShorthands.English,
      img: ukIcon,
      title: languageTitles.English
    }), stryMutAct_9fa48("2059") ? {} : (stryCov_9fa48("2059"), {
      lang: languageShorthands.Ukrainian,
      img: uaIcon,
      title: languageTitles.Ukrainian
    })]);
    const radioLangClasses = {};
    langFlags.forEach(lang => {
      if (stryMutAct_9fa48("2060")) {
        {}
      } else {
        stryCov_9fa48("2060");
        radioLangClasses[lang.lang] = stryMutAct_9fa48("2061") ? "" : (stryCov_9fa48("2061"), 'languageItem ');
      }
    });
    radioLangClasses[i18n.language] += stryMutAct_9fa48("2062") ? "" : (stryCov_9fa48("2062"), ' activeLanguage');
    const changeLanguage = event => {
      if (stryMutAct_9fa48("2063")) {
        {}
      } else {
        stryCov_9fa48("2063");
        radioLangClasses[i18n.language] = stryMutAct_9fa48("2064") ? "" : (stryCov_9fa48("2064"), 'languageItem ');
        radioLangClasses[event.target.value] += stryMutAct_9fa48("2065") ? "" : (stryCov_9fa48("2065"), ' activeLanguage');
        i18n.changeLanguage(event.target.value);
      }
    };
    const renderLangControls = stryMutAct_9fa48("2066") ? () => undefined : (stryCov_9fa48("2066"), (() => {
      const renderLangControls = langItem => <FormControlLabel key={langItem.lang} control={<>
                    <Radio color="primary" value={langItem.lang} onChange={changeLanguage} />
                    <img className="language-icon" src={langItem.img} alt={langItem.lang} title={langItem.title} />
                </>} className={radioLangClasses[langItem.lang]} />;
      return renderLangControls;
    })());
    return <RadioGroup row aria-label="lang" name="lang" value={i18n.language} className="lang_selector">
            {langFlags.map(stryMutAct_9fa48("2067") ? () => undefined : (stryCov_9fa48("2067"), langItem => renderLangControls(langItem)))}
        </RadioGroup>;
  }
};
export default LanguageSelector;