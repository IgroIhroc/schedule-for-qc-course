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
import i18n from '../../i18n';
import { dialogNoButton, dialogTypes, dialogYesButton } from '../../constants/dialogs';
import { COMMON_ARE_YOU_SURE, COMMON_DELETE_WORD, COMMON_DO_YOU_WANNA, COMMON_DO_YOU_WANNA_DISABLE, COMMON_DO_YOU_WANNA_SHOW, COMMON_GO_TO_MEETING_WORD, COMMON_SET_DEFAULT_WORD, COMMON_THIS_CARD_TYPE } from '../../constants/translationLabels/common';
import { FORM_SEMESTER_ELEMENT } from '../../constants/translationLabels/formElements';
const dialogMapper = props => {
  if (stryMutAct_9fa48("8405")) {
    {}
  } else {
    stryCov_9fa48("8405");
    const {
      type,
      whatDelete,
      handelConfirm,
      onClose,
      setOpenConfirmDialog,
      warnings,
      linkToMeeting = stryMutAct_9fa48("8406") ? "" : (stryCov_9fa48("8406"), 'none')
    } = props;
    const handelClose = () => {
      if (stryMutAct_9fa48("8407")) {
        {}
      } else {
        stryCov_9fa48("8407");
        setOpenConfirmDialog(stryMutAct_9fa48("8408") ? true : (stryCov_9fa48("8408"), false));
      }
    };
    const defaultModalButtons = stryMutAct_9fa48("8409") ? [] : (stryCov_9fa48("8409"), [dialogYesButton(handelConfirm), dialogNoButton(stryMutAct_9fa48("8412") ? onClose && handelClose : stryMutAct_9fa48("8411") ? false : stryMutAct_9fa48("8410") ? true : (stryCov_9fa48("8410", "8411", "8412"), onClose || handelClose))]);
    switch (type) {
      case dialogTypes.DELETE_CONFIRM:
        if (stryMutAct_9fa48("8413")) {} else {
          stryCov_9fa48("8413");
          return stryMutAct_9fa48("8414") ? {} : (stryCov_9fa48("8414"), {
            title: <>
                        {i18n.t(COMMON_DO_YOU_WANNA)}{stryMutAct_9fa48("8415") ? "" : (stryCov_9fa48("8415"), ' ')}
                        <span className="delete-word">{i18n.t(COMMON_DELETE_WORD)}</span>{stryMutAct_9fa48("8416") ? "" : (stryCov_9fa48("8416"), ' ')}
                        {i18n.t(COMMON_THIS_CARD_TYPE, stryMutAct_9fa48("8417") ? {} : (stryCov_9fa48("8417"), {
                cardType: i18n.t(stryMutAct_9fa48("8418") ? `` : (stryCov_9fa48("8418"), `formElements:${whatDelete}_element`))
              }))}
                    </>,
            buttons: defaultModalButtons,
            onClose: handelClose,
            ...props
          });
        }
      case dialogTypes.CONFIRM_WITH_WARNING:
        if (stryMutAct_9fa48("8419")) {} else {
          stryCov_9fa48("8419");
          return stryMutAct_9fa48("8420") ? {} : (stryCov_9fa48("8420"), {
            title: i18n.t(COMMON_ARE_YOU_SURE),
            children: <div className="availability-info">
                        {warnings.map(stryMutAct_9fa48("8421") ? () => undefined : (stryCov_9fa48("8421"), warning => <p key={warning} className="availability-warning">
                                {warning}
                            </p>))}
                    </div>,
            buttons: defaultModalButtons,
            onClose: handelClose,
            ...props
          });
        }
      case dialogTypes.SET_VISIBILITY_DISABLED:
        if (stryMutAct_9fa48("8422")) {} else {
          stryCov_9fa48("8422");
          return stryMutAct_9fa48("8423") ? {} : (stryCov_9fa48("8423"), {
            title: i18n.t(COMMON_DO_YOU_WANNA_DISABLE),
            buttons: defaultModalButtons,
            onClose: handelClose,
            ...props
          });
        }
      case dialogTypes.SET_VISIBILITY_ENABLED:
        if (stryMutAct_9fa48("8424")) {} else {
          stryCov_9fa48("8424");
          return stryMutAct_9fa48("8425") ? {} : (stryCov_9fa48("8425"), {
            title: i18n.t(COMMON_DO_YOU_WANNA_SHOW),
            buttons: defaultModalButtons,
            onClose: handelClose,
            ...props
          });
        }
      case dialogTypes.MEETING_LINK:
        if (stryMutAct_9fa48("8426")) {} else {
          stryCov_9fa48("8426");
          return stryMutAct_9fa48("8427") ? {} : (stryCov_9fa48("8427"), {
            title: <>
                        {i18n.t(COMMON_DO_YOU_WANNA)}{stryMutAct_9fa48("8428") ? "" : (stryCov_9fa48("8428"), ' ')}
                        <span>
                            <a className="go-to-meeting" href={linkToMeeting} target="_blank" title={linkToMeeting} rel="noreferrer">
                                {i18n.t(COMMON_GO_TO_MEETING_WORD)}
                            </a>
                        </span>
                    </>,
            buttons: defaultModalButtons,
            onClose: handelClose,
            ...props
          });
        }
      case dialogTypes.SET_DEFAULT:
        if (stryMutAct_9fa48("8429")) {} else {
          stryCov_9fa48("8429");
          return stryMutAct_9fa48("8430") ? {} : (stryCov_9fa48("8430"), {
            title: <>
                        {i18n.t(COMMON_DO_YOU_WANNA)}{stryMutAct_9fa48("8431") ? "" : (stryCov_9fa48("8431"), ' ')}
                        <span className="set-default">{i18n.t(COMMON_SET_DEFAULT_WORD)}</span>{stryMutAct_9fa48("8432") ? "" : (stryCov_9fa48("8432"), ' ')}
                        {i18n.t(COMMON_THIS_CARD_TYPE, stryMutAct_9fa48("8433") ? {} : (stryCov_9fa48("8433"), {
                cardType: i18n.t(FORM_SEMESTER_ELEMENT)
              }))}
                    </>,
            buttons: defaultModalButtons,
            onClose: handelClose,
            ...props
          });
        }
      default:
        if (stryMutAct_9fa48("8434")) {} else {
          stryCov_9fa48("8434");
          return props;
        }
    }
  }
};
export default dialogMapper;