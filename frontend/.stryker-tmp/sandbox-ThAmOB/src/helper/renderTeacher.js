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
export const parseShortPosition = position => {
  if (stryMutAct_9fa48("6124")) {
    {}
  } else {
    stryCov_9fa48("6124");
    const teacherPosition = new Map();
    teacherPosition.set(stryMutAct_9fa48("6125") ? "" : (stryCov_9fa48("6125"), 'доцент'), stryMutAct_9fa48("6126") ? "" : (stryCov_9fa48("6126"), 'доц.'));
    teacherPosition.set(stryMutAct_9fa48("6127") ? "" : (stryCov_9fa48("6127"), 'асистент'), stryMutAct_9fa48("6128") ? "" : (stryCov_9fa48("6128"), 'ac.'));
    teacherPosition.set(stryMutAct_9fa48("6129") ? "" : (stryCov_9fa48("6129"), 'професор'), stryMutAct_9fa48("6130") ? "" : (stryCov_9fa48("6130"), 'проф.'));
    return teacherPosition.get(stryMutAct_9fa48("6131") ? position.toUpperCase() : (stryCov_9fa48("6131"), position.toLowerCase()));
  }
};
export const getFirstLetter = word => {
  if (stryMutAct_9fa48("6132")) {
    {}
  } else {
    stryCov_9fa48("6132");
    return (stryMutAct_9fa48("6135") ? word === null : stryMutAct_9fa48("6134") ? false : stryMutAct_9fa48("6133") ? true : (stryCov_9fa48("6133", "6134", "6135"), word !== null)) ? stryMutAct_9fa48("6136") ? `` : (stryCov_9fa48("6136"), `${stryMutAct_9fa48("6137") ? word : (stryCov_9fa48("6137"), word.charAt(0))}.`) : stryMutAct_9fa48("6138") ? "Stryker was here!" : (stryCov_9fa48("6138"), '');
  }
};
export const getTeacherName = teacher => {
  if (stryMutAct_9fa48("6139")) {
    {}
  } else {
    stryCov_9fa48("6139");
    const {
      name,
      surname,
      patronymic
    } = teacher;
    return stryMutAct_9fa48("6140") ? `` : (stryCov_9fa48("6140"), `${surname} ${getFirstLetter(name)} ${getFirstLetter(patronymic)}`);
  }
};
export const getTeacherFullName = teacher => {
  if (stryMutAct_9fa48("6141")) {
    {}
  } else {
    stryCov_9fa48("6141");
    const {
      name,
      surname,
      patronymic
    } = teacher;
    return stryMutAct_9fa48("6142") ? `` : (stryCov_9fa48("6142"), `${surname} ${name} ${patronymic}`);
  }
};
export const getTeacherForSite = teacher => {
  if (stryMutAct_9fa48("6143")) {
    {}
  } else {
    stryCov_9fa48("6143");
    const {
      name,
      surname,
      patronymic,
      position
    } = teacher;
    return stryMutAct_9fa48("6144") ? `` : (stryCov_9fa48("6144"), `${position} ${surname} ${getFirstLetter(name)} ${getFirstLetter(patronymic)}\n`);
  }
};
export const handleTeacherInfo = teacher => {
  if (stryMutAct_9fa48("6145")) {
    {}
  } else {
    stryCov_9fa48("6145");
    const {
      name,
      surname,
      patronymic,
      position
    } = teacher;
    return stryMutAct_9fa48("6146") ? `` : (stryCov_9fa48("6146"), `${surname} ${name} ${patronymic} (${position})`);
  }
};
export const getTeacherWithPosition = teacher => {
  if (stryMutAct_9fa48("6147")) {
    {}
  } else {
    stryCov_9fa48("6147");
    const {
      name,
      surname,
      patronymic,
      position
    } = teacher;
    return stryMutAct_9fa48("6148") ? `` : (stryCov_9fa48("6148"), `${position} ${surname} ${name} ${patronymic}`);
  }
};
export const getTeacherWithShortPosition = teacher => {
  if (stryMutAct_9fa48("6149")) {
    {}
  } else {
    stryCov_9fa48("6149");
    const {
      name,
      surname,
      patronymic,
      position
    } = teacher;
    return stryMutAct_9fa48("6150") ? `` : (stryCov_9fa48("6150"), `${parseShortPosition(position)} ${surname} ${name} ${patronymic}`);
  }
};