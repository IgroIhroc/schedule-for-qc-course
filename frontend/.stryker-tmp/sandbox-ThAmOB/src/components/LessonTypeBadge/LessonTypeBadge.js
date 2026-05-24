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
import { FaChalkboardTeacher, FaFlask, FaPencilAlt, FaUsers } from 'react-icons/fa';
import './LessonTypeBadge.scss';
const lessonTypeConfig = stryMutAct_9fa48("2280") ? {} : (stryCov_9fa48("2280"), {
  lecture: stryMutAct_9fa48("2281") ? {} : (stryCov_9fa48("2281"), {
    icon: FaChalkboardTeacher,
    colorClass: stryMutAct_9fa48("2282") ? "" : (stryCov_9fa48("2282"), 'lecture')
  }),
  laboratory: stryMutAct_9fa48("2283") ? {} : (stryCov_9fa48("2283"), {
    icon: FaFlask,
    colorClass: stryMutAct_9fa48("2284") ? "" : (stryCov_9fa48("2284"), 'laboratory')
  }),
  practical: stryMutAct_9fa48("2285") ? {} : (stryCov_9fa48("2285"), {
    icon: FaPencilAlt,
    colorClass: stryMutAct_9fa48("2286") ? "" : (stryCov_9fa48("2286"), 'practical')
  }),
  seminar: stryMutAct_9fa48("2287") ? {} : (stryCov_9fa48("2287"), {
    icon: FaUsers,
    colorClass: stryMutAct_9fa48("2288") ? "" : (stryCov_9fa48("2288"), 'seminar')
  })
});
const LessonTypeBadge = ({
  lessonType,
  showIcon = stryMutAct_9fa48("2289") ? false : (stryCov_9fa48("2289"), true),
  size = stryMutAct_9fa48("2290") ? "" : (stryCov_9fa48("2290"), 'normal')
}) => {
  if (stryMutAct_9fa48("2291")) {
    {}
  } else {
    stryCov_9fa48("2291");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2292") ? "" : (stryCov_9fa48("2292"), 'formElements'));
    const type = stryMutAct_9fa48("2295") ? lessonType?.toLowerCase() && '' : stryMutAct_9fa48("2294") ? false : stryMutAct_9fa48("2293") ? true : (stryCov_9fa48("2293", "2294", "2295"), (stryMutAct_9fa48("2297") ? lessonType.toLowerCase() : stryMutAct_9fa48("2296") ? lessonType?.toUpperCase() : (stryCov_9fa48("2296", "2297"), lessonType?.toLowerCase())) || (stryMutAct_9fa48("2298") ? "Stryker was here!" : (stryCov_9fa48("2298"), '')));
    const config = stryMutAct_9fa48("2301") ? lessonTypeConfig[type] && {
      colorClass: 'default'
    } : stryMutAct_9fa48("2300") ? false : stryMutAct_9fa48("2299") ? true : (stryCov_9fa48("2299", "2300", "2301"), lessonTypeConfig[type] || (stryMutAct_9fa48("2302") ? {} : (stryCov_9fa48("2302"), {
      colorClass: stryMutAct_9fa48("2303") ? "" : (stryCov_9fa48("2303"), 'default')
    })));
    const Icon = config.icon;
    const label = t(stryMutAct_9fa48("2304") ? `` : (stryCov_9fa48("2304"), `lesson_type_${type}_label`), stryMutAct_9fa48("2305") ? {} : (stryCov_9fa48("2305"), {
      defaultValue: lessonType
    }));
    return <span className={stryMutAct_9fa48("2306") ? `` : (stryCov_9fa48("2306"), `lesson-type-badge ${config.colorClass} lesson-type-badge--${size}`)}>
            {stryMutAct_9fa48("2309") ? showIcon && Icon || <Icon className="lesson-type-badge__icon" /> : stryMutAct_9fa48("2308") ? false : stryMutAct_9fa48("2307") ? true : (stryCov_9fa48("2307", "2308", "2309"), (stryMutAct_9fa48("2311") ? showIcon || Icon : stryMutAct_9fa48("2310") ? true : (stryCov_9fa48("2310", "2311"), showIcon && Icon)) && <Icon className="lesson-type-badge__icon" />)}
            {label}
        </span>;
  }
};
export default LessonTypeBadge;