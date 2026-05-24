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
import i18n from 'i18next';
import { FORM_CANCEL_BUTTON_TITLE, FORM_CHOOSE_BUTTON_TITLE } from './translationLabels/formElements';
import { COMMON_CLOSE_TITLE, COMMON_MOVE_LABEL, COMMON_MOVE_TO_GROUP_TITLE, COMMON_NO_BUTTON_TITLE, COMMON_UPLOAD_FROM_FILE_TITLE, COMMON_YES_BUTTON_TITLE, CONFIRM_GROUPS, SENT_SCHEDULE } from './translationLabels/common';
export const dialogTypes = stryMutAct_9fa48("4328") ? {} : (stryCov_9fa48("4328"), {
  DELETE_CONFIRM: stryMutAct_9fa48("4329") ? "" : (stryCov_9fa48("4329"), 'deleteConfirm'),
  SET_VISIBILITY_ENABLED: stryMutAct_9fa48("4330") ? "" : (stryCov_9fa48("4330"), 'setVisibilityEnabled'),
  SET_VISIBILITY_DISABLED: stryMutAct_9fa48("4331") ? "" : (stryCov_9fa48("4331"), 'setVisibilityDisabled'),
  MEETING_LINK: stryMutAct_9fa48("4332") ? "" : (stryCov_9fa48("4332"), 'meetingLink'),
  SET_DEFAULT: stryMutAct_9fa48("4333") ? "" : (stryCov_9fa48("4333"), 'setDefault'),
  CONFIRM_WITH_WARNING: stryMutAct_9fa48("4334") ? "" : (stryCov_9fa48("4334"), 'confirmWithWarning')
});
export const dialogCloseButton = (handelFuc, additionalParams = {}) => {
  if (stryMutAct_9fa48("4335")) {
    {}
  } else {
    stryCov_9fa48("4335");
    const {
      additionClassName = stryMutAct_9fa48("4336") ? "Stryker was here!" : (stryCov_9fa48("4336"), ''),
      ...param
    } = additionalParams;
    return stryMutAct_9fa48("4337") ? {} : (stryCov_9fa48("4337"), {
      label: i18n.t(COMMON_CLOSE_TITLE),
      handleClick: handelFuc,
      color: stryMutAct_9fa48("4338") ? "" : (stryCov_9fa48("4338"), 'primary'),
      additionClassName: stryMutAct_9fa48("4339") ? `` : (stryCov_9fa48("4339"), `close-button ${additionClassName}`),
      ...param
    });
  }
};
export const dialogChooseButton = handelFuc => {
  if (stryMutAct_9fa48("4340")) {
    {}
  } else {
    stryCov_9fa48("4340");
    return stryMutAct_9fa48("4341") ? {} : (stryCov_9fa48("4341"), {
      label: i18n.t(FORM_CHOOSE_BUTTON_TITLE),
      handleClick: handelFuc,
      color: stryMutAct_9fa48("4342") ? "" : (stryCov_9fa48("4342"), 'primary')
    });
  }
};
export const dialogChooseGroupButton = (handelFuc, isDisabled, additionalParams = {}) => {
  if (stryMutAct_9fa48("4343")) {
    {}
  } else {
    stryCov_9fa48("4343");
    const {
      additionClassName = stryMutAct_9fa48("4344") ? "Stryker was here!" : (stryCov_9fa48("4344"), ''),
      ...param
    } = additionalParams;
    return stryMutAct_9fa48("4345") ? {} : (stryCov_9fa48("4345"), {
      label: i18n.t(COMMON_MOVE_TO_GROUP_TITLE),
      handleClick: handelFuc,
      color: stryMutAct_9fa48("4346") ? "" : (stryCov_9fa48("4346"), 'primary'),
      disabled: isDisabled,
      additionClassName: stryMutAct_9fa48("4347") ? `` : (stryCov_9fa48("4347"), `choose-button ${additionClassName}`),
      ...param
    });
  }
};
export const dialogConfirmButton = handelFuc => {
  if (stryMutAct_9fa48("4348")) {
    {}
  } else {
    stryCov_9fa48("4348");
    return stryMutAct_9fa48("4349") ? {} : (stryCov_9fa48("4349"), {
      label: i18n.t(CONFIRM_GROUPS),
      handleClick: handelFuc
    });
  }
};
export const dialogCancelButton = handelFuc => {
  if (stryMutAct_9fa48("4350")) {
    {}
  } else {
    stryCov_9fa48("4350");
    return stryMutAct_9fa48("4351") ? {} : (stryCov_9fa48("4351"), {
      label: i18n.t(FORM_CANCEL_BUTTON_TITLE),
      handleClick: handelFuc,
      additionClassName: stryMutAct_9fa48("4352") ? "" : (stryCov_9fa48("4352"), 'close-button')
    });
  }
};
export const dialogSendSchedule = (handelFuc, isDisabled) => {
  if (stryMutAct_9fa48("4353")) {
    {}
  } else {
    stryCov_9fa48("4353");
    return stryMutAct_9fa48("4354") ? {} : (stryCov_9fa48("4354"), {
      label: i18n.t(SENT_SCHEDULE),
      handleClick: handelFuc,
      color: stryMutAct_9fa48("4355") ? "" : (stryCov_9fa48("4355"), 'primary'),
      disabled: isDisabled
    });
  }
};
export const dialogUploadButton = (handelFuc, isDisabled) => {
  if (stryMutAct_9fa48("4356")) {
    {}
  } else {
    stryCov_9fa48("4356");
    return stryMutAct_9fa48("4357") ? {} : (stryCov_9fa48("4357"), {
      label: i18n.t(COMMON_UPLOAD_FROM_FILE_TITLE),
      handleClick: handelFuc,
      additionClassName: stryMutAct_9fa48("4358") ? `` : (stryCov_9fa48("4358"), `choose-button`),
      disabled: isDisabled
    });
  }
};
export const dialogUploadFromFileButton = (handelFuc, additionalParams = {}) => {
  if (stryMutAct_9fa48("4359")) {
    {}
  } else {
    stryCov_9fa48("4359");
    const {
      additionClassName = stryMutAct_9fa48("4360") ? "Stryker was here!" : (stryCov_9fa48("4360"), ''),
      ...param
    } = additionalParams;
    return stryMutAct_9fa48("4361") ? {} : (stryCov_9fa48("4361"), {
      label: i18n.t(COMMON_UPLOAD_FROM_FILE_TITLE),
      handleClick: handelFuc,
      additionClassName: stryMutAct_9fa48("4362") ? `` : (stryCov_9fa48("4362"), `upload-file-button ${additionClassName}`),
      ...param
    });
  }
};
export const dialogMoveToGroupButton = (handelFuc, isDisabled) => {
  if (stryMutAct_9fa48("4363")) {
    {}
  } else {
    stryCov_9fa48("4363");
    return stryMutAct_9fa48("4364") ? {} : (stryCov_9fa48("4364"), {
      label: i18n.t(COMMON_MOVE_LABEL),
      handleClick: handelFuc,
      disabled: isDisabled
    });
  }
};
export const dialogYesButton = handelFuc => {
  if (stryMutAct_9fa48("4365")) {
    {}
  } else {
    stryCov_9fa48("4365");
    return stryMutAct_9fa48("4366") ? {} : (stryCov_9fa48("4366"), {
      label: i18n.t(COMMON_YES_BUTTON_TITLE),
      handleClick: handelFuc
    });
  }
};
export const dialogNoButton = handelFuc => {
  if (stryMutAct_9fa48("4367")) {
    {}
  } else {
    stryCov_9fa48("4367");
    return stryMutAct_9fa48("4368") ? {} : (stryCov_9fa48("4368"), {
      label: i18n.t(COMMON_NO_BUTTON_TITLE),
      handleClick: handelFuc,
      variant: stryMutAct_9fa48("4369") ? "" : (stryCov_9fa48("4369"), 'contained'),
      additionClassName: stryMutAct_9fa48("4370") ? "" : (stryCov_9fa48("4370"), 'close-button')
    });
  }
};