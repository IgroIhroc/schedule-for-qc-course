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
import { CREATE_TITLE, EDIT_TITLE, LESSON_LABEL } from '../../../constants/translationLabels/formElements';
import './LessonForm.scss';
const LessonLabelForm = props => {
  if (stryMutAct_9fa48("2184")) {
    {}
  } else {
    stryCov_9fa48("2184");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2185") ? "" : (stryCov_9fa48("2185"), 'formElements'));
    const {
      lesson,
      groupId
    } = props;
    return <section>
            {stryMutAct_9fa48("2188") ? groupId || <h2 className="under-line">
                    {lesson.id ? t(EDIT_TITLE) : t(CREATE_TITLE)}
                    {t(LESSON_LABEL)}
                </h2> : stryMutAct_9fa48("2187") ? false : stryMutAct_9fa48("2186") ? true : (stryCov_9fa48("2186", "2187", "2188"), groupId && <h2 className="under-line">
                    {lesson.id ? t(EDIT_TITLE) : t(CREATE_TITLE)}
                    {t(LESSON_LABEL)}
                </h2>)}
        </section>;
  }
};
export default LessonLabelForm;