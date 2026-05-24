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
import React, { useState } from 'react';
import { IoMdLink } from 'react-icons/all';
import CustomDialog from '../../containers/Dialogs/CustomDialog';
import { dialogTypes } from '../../constants/dialogs';
import './LinkToMeeting.scss';
const LinkToMeeting = props => {
  if (stryMutAct_9fa48("2312")) {
    {}
  } else {
    stryCov_9fa48("2312");
    const {
      linkToMeeting
    } = props;
    const [isOpenMeetingDialog, setIsOpenMeetingDialog] = useState(stryMutAct_9fa48("2313") ? true : (stryCov_9fa48("2313"), false));
    const openWindowByUrl = url => {
      if (stryMutAct_9fa48("2314")) {
        {}
      } else {
        stryCov_9fa48("2314");
        const win = window.open(url, stryMutAct_9fa48("2315") ? "" : (stryCov_9fa48("2315"), '_blank'));
        win.focus();
      }
    };
    const handelRedirectToMeeting = semesterId => {
      if (stryMutAct_9fa48("2316")) {
        {}
      } else {
        stryCov_9fa48("2316");
        setIsOpenMeetingDialog(stryMutAct_9fa48("2317") ? true : (stryCov_9fa48("2317"), false));
        if (stryMutAct_9fa48("2320") ? semesterId === '' : stryMutAct_9fa48("2319") ? false : stryMutAct_9fa48("2318") ? true : (stryCov_9fa48("2318", "2319", "2320"), semesterId !== (stryMutAct_9fa48("2321") ? "Stryker was here!" : (stryCov_9fa48("2321"), '')))) {
          if (stryMutAct_9fa48("2322")) {
            {}
          } else {
            stryCov_9fa48("2322");
            openWindowByUrl(linkToMeeting);
          }
        }
      }
    };
    return <>
            <IoMdLink color="blue" className="svg-btn copy-btn link" onClick={() => {
        if (stryMutAct_9fa48("2323")) {
          {}
        } else {
          stryCov_9fa48("2323");
          setIsOpenMeetingDialog(stryMutAct_9fa48("2324") ? false : (stryCov_9fa48("2324"), true));
        }
      }} title={linkToMeeting} />
            {stryMutAct_9fa48("2327") ? isOpenMeetingDialog || <CustomDialog type={dialogTypes.MEETING_LINK} handelConfirm={handelRedirectToMeeting} open={isOpenMeetingDialog} onClose={() => {
        setIsOpenMeetingDialog(false);
      }} linkToMeeting={linkToMeeting} /> : stryMutAct_9fa48("2326") ? false : stryMutAct_9fa48("2325") ? true : (stryCov_9fa48("2325", "2326", "2327"), isOpenMeetingDialog && <CustomDialog type={dialogTypes.MEETING_LINK} handelConfirm={handelRedirectToMeeting} open={isOpenMeetingDialog} onClose={() => {
        if (stryMutAct_9fa48("2328")) {
          {}
        } else {
          stryCov_9fa48("2328");
          setIsOpenMeetingDialog(stryMutAct_9fa48("2329") ? true : (stryCov_9fa48("2329"), false));
        }
      }} linkToMeeting={linkToMeeting} />)}
        </>;
  }
};
export default LinkToMeeting;