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
import * as moment from 'moment';
import { checkUniqClassName, checkUniqSemester, checkUniqueDepartment, checkUniqueGroup, checkUniqueRoomName, checkUniqueSubject, timeIntersectService } from './storeValidation';
import i18n from '../i18n';
import { validation } from '../constants/validation';
import { BIGGER_THAN_CHAR_MESSAGE, BIGGER_THAN_FIELD_MESSAGE, BIGGER_THAN_THIS_YEAR_MESSAGE, BIGGER_THAN_ZERO_MESSAGE, EMAIL_MESSAGE, LESS_THAN_CHAR_MESSAGE, LESS_THAN_FIELD_MESSAGE, PASSWORD_MESSAGE, REQUIRED_MESSAGE, URL_MESSAGE } from '../constants/translationLabels/validationMessages';
import { FORM_CLASS_FROM_LABEL, FORM_CLASS_TO_LABEL } from '../constants/translationLabels/formElements';
import { dateFormat } from '../constants/formats';
export const required = stryMutAct_9fa48("9090") ? () => undefined : (stryCov_9fa48("9090"), (() => {
  const required = value => value ? undefined : i18n.t(REQUIRED_MESSAGE);
  return required;
})());
export const isUrl = value => {
  if (stryMutAct_9fa48("9091")) {
    {}
  } else {
    stryCov_9fa48("9091");
    const validationUrl = stryMutAct_9fa48("9092") ? value.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g) : (stryCov_9fa48("9092"), value?.match(stryMutAct_9fa48("9101") ? /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([^-a-zA-Z0-9@:%_+.~#?&//=]*)/g : stryMutAct_9fa48("9100") ? /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=])/g : stryMutAct_9fa48("9099") ? /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[^a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g : stryMutAct_9fa48("9098") ? /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g : stryMutAct_9fa48("9097") ? /(http(s)?:\/\/.)?(www\.)?[^-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g : stryMutAct_9fa48("9096") ? /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g : stryMutAct_9fa48("9095") ? /(http(s)?:\/\/.)?(www\.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g : stryMutAct_9fa48("9094") ? /(http(s):\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g : stryMutAct_9fa48("9093") ? /(http(s)?:\/\/.)(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g : (stryCov_9fa48("9093", "9094", "9095", "9096", "9097", "9098", "9099", "9100", "9101"), /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g)));
    if (stryMutAct_9fa48("9104") ? value || validationUrl == null : stryMutAct_9fa48("9103") ? false : stryMutAct_9fa48("9102") ? true : (stryCov_9fa48("9102", "9103", "9104"), value && (stryMutAct_9fa48("9106") ? validationUrl != null : stryMutAct_9fa48("9105") ? true : (stryCov_9fa48("9105", "9106"), validationUrl == null)))) return i18n.t(URL_MESSAGE);
    return stryMutAct_9fa48("9107") ? "Stryker was here!" : (stryCov_9fa48("9107"), '');
  }
};
export const lessThanZero = stryMutAct_9fa48("9108") ? () => undefined : (stryCov_9fa48("9108"), (() => {
  const lessThanZero = value => (stryMutAct_9fa48("9112") ? value <= 0 : stryMutAct_9fa48("9111") ? value >= 0 : stryMutAct_9fa48("9110") ? false : stryMutAct_9fa48("9109") ? true : (stryCov_9fa48("9109", "9110", "9111", "9112"), value > 0)) ? undefined : i18n.t(BIGGER_THAN_ZERO_MESSAGE);
  return lessThanZero;
})());
const minLength = stryMutAct_9fa48("9113") ? () => undefined : (stryCov_9fa48("9113"), (() => {
  const minLength = min => stryMutAct_9fa48("9114") ? () => undefined : (stryCov_9fa48("9114"), value => (stryMutAct_9fa48("9117") ? value || value.length < min : stryMutAct_9fa48("9116") ? false : stryMutAct_9fa48("9115") ? true : (stryCov_9fa48("9115", "9116", "9117"), value && (stryMutAct_9fa48("9120") ? value.length >= min : stryMutAct_9fa48("9119") ? value.length <= min : stryMutAct_9fa48("9118") ? true : (stryCov_9fa48("9118", "9119", "9120"), value.length < min)))) ? i18n.t(BIGGER_THAN_CHAR_MESSAGE, stryMutAct_9fa48("9121") ? {} : (stryCov_9fa48("9121"), {
    min
  })) : undefined);
  return minLength;
})());
export const minLengthValue = minLength(3);
const maxLength = stryMutAct_9fa48("9122") ? () => undefined : (stryCov_9fa48("9122"), (() => {
  const maxLength = max => stryMutAct_9fa48("9123") ? () => undefined : (stryCov_9fa48("9123"), value => (stryMutAct_9fa48("9126") ? value || value.length > max : stryMutAct_9fa48("9125") ? false : stryMutAct_9fa48("9124") ? true : (stryCov_9fa48("9124", "9125", "9126"), value && (stryMutAct_9fa48("9129") ? value.length <= max : stryMutAct_9fa48("9128") ? value.length >= max : stryMutAct_9fa48("9127") ? true : (stryCov_9fa48("9127", "9128", "9129"), value.length > max)))) ? i18n.t(LESS_THAN_CHAR_MESSAGE, stryMutAct_9fa48("9130") ? {} : (stryCov_9fa48("9130"), {
    max
  })) : undefined);
  return maxLength;
})());
export const maxLengthValue = maxLength(200);
export const lessThanTime = (value, previousValue, allValues) => {
  if (stryMutAct_9fa48("9131")) {
    {}
  } else {
    stryCov_9fa48("9131");
    const otherField = stryMutAct_9fa48("9132") ? "" : (stryCov_9fa48("9132"), 'endTime');
    if (stryMutAct_9fa48("9135") ? allValues.values[otherField] !== undefined : stryMutAct_9fa48("9134") ? false : stryMutAct_9fa48("9133") ? true : (stryCov_9fa48("9133", "9134", "9135"), allValues.values[otherField] === undefined)) return undefined;
    return (stryMutAct_9fa48("9138") ? moment(value, 'HH:mm').toDate() <= moment(allValues.values[otherField], 'HH:mm').toDate() || allValues.values[otherField] !== undefined : stryMutAct_9fa48("9137") ? false : stryMutAct_9fa48("9136") ? true : (stryCov_9fa48("9136", "9137", "9138"), (stryMutAct_9fa48("9141") ? moment(value, 'HH:mm').toDate() > moment(allValues.values[otherField], 'HH:mm').toDate() : stryMutAct_9fa48("9140") ? moment(value, 'HH:mm').toDate() < moment(allValues.values[otherField], 'HH:mm').toDate() : stryMutAct_9fa48("9139") ? true : (stryCov_9fa48("9139", "9140", "9141"), moment(value, stryMutAct_9fa48("9142") ? "" : (stryCov_9fa48("9142"), 'HH:mm')).toDate() <= moment(allValues.values[otherField], stryMutAct_9fa48("9143") ? "" : (stryCov_9fa48("9143"), 'HH:mm')).toDate())) && (stryMutAct_9fa48("9145") ? allValues.values[otherField] === undefined : stryMutAct_9fa48("9144") ? true : (stryCov_9fa48("9144", "9145"), allValues.values[otherField] !== undefined)))) ? undefined : i18n.t(LESS_THAN_FIELD_MESSAGE, stryMutAct_9fa48("9146") ? {} : (stryCov_9fa48("9146"), {
      field: i18n.t(FORM_CLASS_TO_LABEL)
    }));
  }
};
export const greaterThanTime = (value, previousValue, allValues) => {
  if (stryMutAct_9fa48("9147")) {
    {}
  } else {
    stryCov_9fa48("9147");
    const otherField = stryMutAct_9fa48("9148") ? "" : (stryCov_9fa48("9148"), 'startTime');
    if (stryMutAct_9fa48("9151") ? allValues.values[otherField] !== undefined : stryMutAct_9fa48("9150") ? false : stryMutAct_9fa48("9149") ? true : (stryCov_9fa48("9149", "9150", "9151"), allValues.values[otherField] === undefined)) return undefined;
    return (stryMutAct_9fa48("9155") ? moment(value, 'HH:mm').toDate() < moment(allValues.values[otherField], 'HH:mm').toDate() : stryMutAct_9fa48("9154") ? moment(value, 'HH:mm').toDate() > moment(allValues.values[otherField], 'HH:mm').toDate() : stryMutAct_9fa48("9153") ? false : stryMutAct_9fa48("9152") ? true : (stryCov_9fa48("9152", "9153", "9154", "9155"), moment(value, stryMutAct_9fa48("9156") ? "" : (stryCov_9fa48("9156"), 'HH:mm')).toDate() >= moment(allValues.values[otherField], stryMutAct_9fa48("9157") ? "" : (stryCov_9fa48("9157"), 'HH:mm')).toDate())) ? undefined : i18n.t(BIGGER_THAN_FIELD_MESSAGE, stryMutAct_9fa48("9158") ? {} : (stryCov_9fa48("9158"), {
      field: i18n.t(FORM_CLASS_FROM_LABEL)
    }));
  }
};
export const uniqueClassName = value => {
  if (stryMutAct_9fa48("9159")) {
    {}
  } else {
    stryCov_9fa48("9159");
    return checkUniqClassName(value);
  }
};
export const uniqueGroup = value => {
  if (stryMutAct_9fa48("9160")) {
    {}
  } else {
    stryCov_9fa48("9160");
    return checkUniqueGroup(value);
  }
};
export const uniqueSubject = value => {
  if (stryMutAct_9fa48("9161")) {
    {}
  } else {
    stryCov_9fa48("9161");
    return checkUniqueSubject(value);
  }
};
export const uniqueDepartment = value => {
  if (stryMutAct_9fa48("9162")) {
    {}
  } else {
    stryCov_9fa48("9162");
    return checkUniqueDepartment(value);
  }
};
export const timeIntersect = (value, previousValue, allValues) => {
  if (stryMutAct_9fa48("9163")) {
    {}
  } else {
    stryCov_9fa48("9163");
    return timeIntersectService(allValues.values.startTime, allValues.values.endTime);
  }
};
export const uniqueRoomName = value => {
  if (stryMutAct_9fa48("9164")) {
    {}
  } else {
    stryCov_9fa48("9164");
    return checkUniqueRoomName(value);
  }
};
export const email = stryMutAct_9fa48("9165") ? () => undefined : (stryCov_9fa48("9165"), (() => {
  const email = value => (stryMutAct_9fa48("9168") ? value || !validation.EMAIL.test(value) : stryMutAct_9fa48("9167") ? false : stryMutAct_9fa48("9166") ? true : (stryCov_9fa48("9166", "9167", "9168"), value && (stryMutAct_9fa48("9169") ? validation.EMAIL.test(value) : (stryCov_9fa48("9169"), !validation.EMAIL.test(value))))) ? i18n.t(EMAIL_MESSAGE) : undefined;
  return email;
})());
export const password = stryMutAct_9fa48("9170") ? () => undefined : (stryCov_9fa48("9170"), (() => {
  const password = value => (stryMutAct_9fa48("9173") ? value || !validation.PASSWORD.test(value) : stryMutAct_9fa48("9172") ? false : stryMutAct_9fa48("9171") ? true : (stryCov_9fa48("9171", "9172", "9173"), value && (stryMutAct_9fa48("9174") ? validation.PASSWORD.test(value) : (stryCov_9fa48("9174"), !validation.PASSWORD.test(value))))) ? i18n.t(PASSWORD_MESSAGE) : undefined;
  return password;
})());
const minYear = stryMutAct_9fa48("9175") ? () => undefined : (stryCov_9fa48("9175"), (() => {
  const minYear = min => stryMutAct_9fa48("9176") ? () => undefined : (stryCov_9fa48("9176"), value => (stryMutAct_9fa48("9180") ? value >= min : stryMutAct_9fa48("9179") ? value <= min : stryMutAct_9fa48("9178") ? false : stryMutAct_9fa48("9177") ? true : (stryCov_9fa48("9177", "9178", "9179", "9180"), value < min)) ? i18n.t(BIGGER_THAN_THIS_YEAR_MESSAGE, stryMutAct_9fa48("9181") ? {} : (stryCov_9fa48("9181"), {
    min
  })) : undefined);
  return minYear;
})());
const today = new Date();
const year = today.getFullYear();
export const minYearValue = minYear(year);
export const lessThanDate = (value, previousValue, allValues) => {
  if (stryMutAct_9fa48("9182")) {
    {}
  } else {
    stryCov_9fa48("9182");
    const otherField = stryMutAct_9fa48("9183") ? "" : (stryCov_9fa48("9183"), 'endDay');
    if (stryMutAct_9fa48("9186") ? allValues.values[otherField] !== undefined : stryMutAct_9fa48("9185") ? false : stryMutAct_9fa48("9184") ? true : (stryCov_9fa48("9184", "9185", "9186"), allValues.values[otherField] === undefined)) return undefined;
    return (stryMutAct_9fa48("9189") ? moment(value, dateFormat).toDate() <= moment(allValues.values[otherField], dateFormat).toDate() || allValues.values[otherField] !== undefined : stryMutAct_9fa48("9188") ? false : stryMutAct_9fa48("9187") ? true : (stryCov_9fa48("9187", "9188", "9189"), (stryMutAct_9fa48("9192") ? moment(value, dateFormat).toDate() > moment(allValues.values[otherField], dateFormat).toDate() : stryMutAct_9fa48("9191") ? moment(value, dateFormat).toDate() < moment(allValues.values[otherField], dateFormat).toDate() : stryMutAct_9fa48("9190") ? true : (stryCov_9fa48("9190", "9191", "9192"), moment(value, dateFormat).toDate() <= moment(allValues.values[otherField], dateFormat).toDate())) && (stryMutAct_9fa48("9194") ? allValues.values[otherField] === undefined : stryMutAct_9fa48("9193") ? true : (stryCov_9fa48("9193", "9194"), allValues.values[otherField] !== undefined)))) ? undefined : i18n.t(LESS_THAN_FIELD_MESSAGE, stryMutAct_9fa48("9195") ? {} : (stryCov_9fa48("9195"), {
      field: i18n.t(FORM_CLASS_TO_LABEL)
    }));
  }
};
export const greaterThanDate = (value, previousValue, allValues) => {
  if (stryMutAct_9fa48("9196")) {
    {}
  } else {
    stryCov_9fa48("9196");
    const otherField = stryMutAct_9fa48("9197") ? "" : (stryCov_9fa48("9197"), 'startDay');
    if (stryMutAct_9fa48("9200") ? allValues.values[otherField] !== undefined : stryMutAct_9fa48("9199") ? false : stryMutAct_9fa48("9198") ? true : (stryCov_9fa48("9198", "9199", "9200"), allValues.values[otherField] === undefined)) return undefined;
    return (stryMutAct_9fa48("9204") ? moment(value, dateFormat).toDate() < moment(allValues.values[otherField], dateFormat).toDate() : stryMutAct_9fa48("9203") ? moment(value, dateFormat).toDate() > moment(allValues.values[otherField], dateFormat).toDate() : stryMutAct_9fa48("9202") ? false : stryMutAct_9fa48("9201") ? true : (stryCov_9fa48("9201", "9202", "9203", "9204"), moment(value, dateFormat).toDate() >= moment(allValues.values[otherField], dateFormat).toDate())) ? undefined : i18n.t(BIGGER_THAN_FIELD_MESSAGE, stryMutAct_9fa48("9205") ? {} : (stryCov_9fa48("9205"), {
      field: i18n.t(FORM_CLASS_FROM_LABEL)
    }));
  }
};
export const uniquesSemesterName = stryMutAct_9fa48("9206") ? () => undefined : (stryCov_9fa48("9206"), (() => {
  const uniquesSemesterName = value => checkUniqSemester(value);
  return uniquesSemesterName;
})());