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
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, FormControlLabel } from '@material-ui/core';
import './SchedulePublishBanner.scss';
import { DELETE, POST } from "../../../constants/methods";
import { axiosCall } from "../../../services/axios";
const SchedulePublishBanner = () => {
  if (stryMutAct_9fa48("1799")) {
    {}
  } else {
    stryCov_9fa48("1799");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1800") ? "" : (stryCov_9fa48("1800"), 'common'));
    const [published, setPublished] = useState(stryMutAct_9fa48("1801") ? false : (stryCov_9fa48("1801"), true));
    const [loading, setLoading] = useState(stryMutAct_9fa48("1802") ? false : (stryCov_9fa48("1802"), true));
    useEffect(() => {
      if (stryMutAct_9fa48("1803")) {
        {}
      } else {
        stryCov_9fa48("1803");
        axiosCall(stryMutAct_9fa48("1804") ? "" : (stryCov_9fa48("1804"), 'schedules/public/status')).then(stryMutAct_9fa48("1805") ? () => undefined : (stryCov_9fa48("1805"), ({
          data
        }) => setPublished(data.published))).catch(console.error).finally(stryMutAct_9fa48("1806") ? () => undefined : (stryCov_9fa48("1806"), () => setLoading(stryMutAct_9fa48("1807") ? true : (stryCov_9fa48("1807"), false))));
      }
    }, stryMutAct_9fa48("1808") ? ["Stryker was here"] : (stryCov_9fa48("1808"), []));
    const handleToggle = () => {
      if (stryMutAct_9fa48("1809")) {
        {}
      } else {
        stryCov_9fa48("1809");
        if (stryMutAct_9fa48("1811") ? false : stryMutAct_9fa48("1810") ? true : (stryCov_9fa48("1810", "1811"), published)) {
          if (stryMutAct_9fa48("1812")) {
            {}
          } else {
            stryCov_9fa48("1812");
            axiosCall(stryMutAct_9fa48("1813") ? "" : (stryCov_9fa48("1813"), 'schedules/publish'), DELETE).then(stryMutAct_9fa48("1814") ? () => undefined : (stryCov_9fa48("1814"), () => setPublished(stryMutAct_9fa48("1815") ? true : (stryCov_9fa48("1815"), false)))).catch(console.error);
          }
        } else {
          if (stryMutAct_9fa48("1816")) {
            {}
          } else {
            stryCov_9fa48("1816");
            axiosCall(stryMutAct_9fa48("1817") ? "" : (stryCov_9fa48("1817"), 'schedules/publish'), POST).then(stryMutAct_9fa48("1818") ? () => undefined : (stryCov_9fa48("1818"), () => setPublished(stryMutAct_9fa48("1819") ? false : (stryCov_9fa48("1819"), true)))).catch(console.error);
          }
        }
      }
    };
    if (stryMutAct_9fa48("1821") ? false : stryMutAct_9fa48("1820") ? true : (stryCov_9fa48("1820", "1821"), loading)) return null;
    return <FormControlLabel className={stryMutAct_9fa48("1822") ? `` : (stryCov_9fa48("1822"), `schedule-publish-banner ${published ? stryMutAct_9fa48("1823") ? "" : (stryCov_9fa48("1823"), 'published') : stryMutAct_9fa48("1824") ? "" : (stryCov_9fa48("1824"), 'unpublished')}`)} control={<Switch checked={published} onChange={handleToggle} color="primary" size="small" />} label={published ? t(stryMutAct_9fa48("1825") ? "" : (stryCov_9fa48("1825"), 'schedule_is_published')) : t(stryMutAct_9fa48("1826") ? "" : (stryCov_9fa48("1826"), 'admin_schedule_not_published'))} labelPlacement="start" />;
  }
};
export default SchedulePublishBanner;