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
import './UploadFile.scss';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import BackupIcon from '@material-ui/icons/Backup';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import CustomDialog from '../../containers/Dialogs/CustomDialog';
import { dialogCloseButton, dialogUploadButton } from '../../constants/dialogs';
import { EXAMPLE_FILE, FILE_RULES_FOR_EACH_LNE, FILE_RULES_FOR_HEADER, SELECT_CORRECT_FORMAT, SELECT_FILE } from '../../constants/translationLabels/common';
export const UploadFile = props => {
  if (stryMutAct_9fa48("4221")) {
    {}
  } else {
    stryCov_9fa48("4221");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("4222") ? "" : (stryCov_9fa48("4222"), 'common'));
    const [isHideRules, setIsHideRules] = useState(stryMutAct_9fa48("4223") ? true : (stryCov_9fa48("4223"), false));
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef();
    const {
      group: {
        id
      },
      open,
      handleCloseDialogFile,
      uploadStudentsToGroupStart
    } = props;
    const changeHandler = event => {
      if (stryMutAct_9fa48("4224")) {
        {}
      } else {
        stryCov_9fa48("4224");
        setSelectedFile(event.target.files[0]);
      }
    };
    const handleSubmission = () => {
      if (stryMutAct_9fa48("4225")) {
        {}
      } else {
        stryCov_9fa48("4225");
        uploadStudentsToGroupStart(selectedFile, id);
        fileInputRef.current.value = stryMutAct_9fa48("4226") ? "Stryker was here!" : (stryCov_9fa48("4226"), '');
        setSelectedFile(null);
      }
    };
    const setDisabledSendButton = () => {
      if (stryMutAct_9fa48("4227")) {
        {}
      } else {
        stryCov_9fa48("4227");
        return stryMutAct_9fa48("4230") ? selectedFile !== null : stryMutAct_9fa48("4229") ? false : stryMutAct_9fa48("4228") ? true : (stryCov_9fa48("4228", "4229", "4230"), selectedFile === null);
      }
    };
    const buttonTitle = selectedFile ? selectedFile.name : t(SELECT_FILE);
    return <CustomDialog open={open} onClose={handleCloseDialogFile} buttons={stryMutAct_9fa48("4231") ? [] : (stryCov_9fa48("4231"), [dialogUploadButton(handleSubmission, setDisabledSendButton()), dialogCloseButton(handleCloseDialogFile)])}>
            <div className="upload-dialog">
                {stryMutAct_9fa48("4234") ? isHideRules || <div className="upload-title">
                        <div>{t(SELECT_CORRECT_FORMAT)}</div>
                        <div>{t(FILE_RULES_FOR_HEADER)}</div>
                        <div>{t(FILE_RULES_FOR_EACH_LNE)}</div>
                    </div> : stryMutAct_9fa48("4233") ? false : stryMutAct_9fa48("4232") ? true : (stryCov_9fa48("4232", "4233", "4234"), isHideRules && <div className="upload-title">
                        <div>{t(SELECT_CORRECT_FORMAT)}</div>
                        <div>{t(FILE_RULES_FOR_HEADER)}</div>
                        <div>{t(FILE_RULES_FOR_EACH_LNE)}</div>
                    </div>)}
                <div className="upload-example-btn">
                    <div className="upload-example">{t(EXAMPLE_FILE)}</div>
                    <HelpOutlineIcon className="upload-button" onClick={stryMutAct_9fa48("4235") ? () => undefined : (stryCov_9fa48("4235"), () => setIsHideRules(stryMutAct_9fa48("4236") ? isHideRules : (stryCov_9fa48("4236"), !isHideRules)))} />
                </div>
                <div className="upload-text-file">
                    <div> surname,name,patronymic,email</div>
                    <div> example,example,example,example@gmail.com</div>
                </div>
                <label htmlFor="file-upload" className="upload-file">
                    <input id="file-upload" type="file" accept=".txt, .csv" onChange={changeHandler} ref={fileInputRef} className="upload-input" />
                    <BackupIcon></BackupIcon>
                    <div className="upload-text">{t(buttonTitle)}</div>
                </label>
            </div>
        </CustomDialog>;
  }
};