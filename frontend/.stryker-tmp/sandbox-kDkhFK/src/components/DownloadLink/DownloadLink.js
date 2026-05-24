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
import { MdPictureAsPdf } from 'react-icons/md';
import i18n from '../../i18n';
import { PUBLIC_DOWNLOAD_GROUP_SCHEDULE_URL, PUBLIC_DOWNLOAD_TEACHER_SCHEDULE_URL } from '../../constants/axios';
import { COMMON_DOWNLOAD_PDF } from '../../constants/translationLabels/common';
const BASE_URL = stryMutAct_9fa48("1228") ? process.env.REACT_APP_API_BASE_URL && '' : stryMutAct_9fa48("1227") ? false : stryMutAct_9fa48("1226") ? true : (stryCov_9fa48("1226", "1227", "1228"), process.env.REACT_APP_API_BASE_URL || (stryMutAct_9fa48("1229") ? "Stryker was here!" : (stryCov_9fa48("1229"), '')));
const getDownloadLink = stryMutAct_9fa48("1230") ? () => undefined : (stryCov_9fa48("1230"), (() => {
  const getDownloadLink = (entityId, semesterId, languageToRequest) => stryMutAct_9fa48("1231") ? {} : (stryCov_9fa48("1231"), {
    group: stryMutAct_9fa48("1232") ? `` : (stryCov_9fa48("1232"), `${BASE_URL}${PUBLIC_DOWNLOAD_GROUP_SCHEDULE_URL}?groupId=${entityId}&semesterId=${semesterId}${languageToRequest}`),
    teacher: stryMutAct_9fa48("1233") ? `` : (stryCov_9fa48("1233"), `${BASE_URL}${PUBLIC_DOWNLOAD_TEACHER_SCHEDULE_URL}?teacherId=${entityId}&semesterId=${semesterId}${languageToRequest}`)
  });
  return getDownloadLink;
})());
const DownloadLink = ({
  entity,
  semesterId,
  entityId
}) => {
  if (stryMutAct_9fa48("1234")) {
    {}
  } else {
    stryCov_9fa48("1234");
    if (stryMutAct_9fa48("1237") ? !semesterId && !entityId : stryMutAct_9fa48("1236") ? false : stryMutAct_9fa48("1235") ? true : (stryCov_9fa48("1235", "1236", "1237"), (stryMutAct_9fa48("1238") ? semesterId : (stryCov_9fa48("1238"), !semesterId)) || (stryMutAct_9fa48("1239") ? entityId : (stryCov_9fa48("1239"), !entityId)))) {
      if (stryMutAct_9fa48("1240")) {
        {}
      } else {
        stryCov_9fa48("1240");
        return null;
      }
    }
    const {
      language
    } = i18n;
    const languageToRequest = stryMutAct_9fa48("1241") ? `` : (stryCov_9fa48("1241"), `&language=${language}`);
    const downloadLink = getDownloadLink(entityId, semesterId, languageToRequest)[entity];
    return <a href={stryMutAct_9fa48("1244") ? downloadLink && '' : stryMutAct_9fa48("1243") ? false : stryMutAct_9fa48("1242") ? true : (stryCov_9fa48("1242", "1243", "1244"), downloadLink || (stryMutAct_9fa48("1245") ? "Stryker was here!" : (stryCov_9fa48("1245"), '')))} target="_blank" rel="noreferrer noopener" variant="contained" color="primary" className="pdf_link" download>
            <MdPictureAsPdf className="svg-btn" />
            {i18n.t(COMMON_DOWNLOAD_PDF)}
        </a>;
  }
};
export default DownloadLink;