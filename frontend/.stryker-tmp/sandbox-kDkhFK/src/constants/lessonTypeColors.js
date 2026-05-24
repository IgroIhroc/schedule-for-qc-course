// @ts-nocheck
// synchronize with styles/colors.scss
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
const lessonTypeColors = stryMutAct_9fa48("4384") ? {} : (stryCov_9fa48("4384"), {
  lecture: stryMutAct_9fa48("4385") ? "" : (stryCov_9fa48("4385"), '#689F38'),
  laboratory: stryMutAct_9fa48("4386") ? "" : (stryCov_9fa48("4386"), '#1976D2'),
  practical: stryMutAct_9fa48("4387") ? "" : (stryCov_9fa48("4387"), '#F9A825'),
  seminar: stryMutAct_9fa48("4388") ? "" : (stryCov_9fa48("4388"), '#8E24AA')
});
const getLessonTypeColor = lessonType => {
  if (stryMutAct_9fa48("4389")) {
    {}
  } else {
    stryCov_9fa48("4389");
    return stryMutAct_9fa48("4392") ? lessonTypeColors[lessonType?.toLowerCase()] && lessonTypeColors.default : stryMutAct_9fa48("4391") ? false : stryMutAct_9fa48("4390") ? true : (stryCov_9fa48("4390", "4391", "4392"), lessonTypeColors[stryMutAct_9fa48("4394") ? lessonType.toLowerCase() : stryMutAct_9fa48("4393") ? lessonType?.toUpperCase() : (stryCov_9fa48("4393", "4394"), lessonType?.toLowerCase())] || lessonTypeColors.default);
  }
};
export { lessonTypeColors, getLessonTypeColor };