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
import './GroupCard.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GiSightDisabled, IoMdEye } from 'react-icons/all';
import { FaEdit, FaUserPlus, FaUsers } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { dialogTypes } from '../../../constants/dialogs';
import { ADD_STUDENT_LINK, GROUP_LIST_LINK, SHOW_STUDENTS_LINK } from '../../../constants/links';
import { getShortTitle } from '../../../helper/shortTitle';
import { COMMON_EDIT, COMMON_SET_DISABLED, COMMON_SET_ENABLED } from '../../../constants/translationLabels/common';
import { DELETE_TITLE_LABEL, FORM_SHOW_STUDENTS, FORM_STUDENT_ADD_LABEL, GROUP_LABEL } from '../../../constants/translationLabels/formElements';
const GroupCard = props => {
  if (stryMutAct_9fa48("1600")) {
    {}
  } else {
    stryCov_9fa48("1600");
    const {
      group,
      disabled,
      setGroup,
      showConfirmDialog,
      showStudentsByGroup,
      showAddStudentDialog
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1601") ? "" : (stryCov_9fa48("1601"), 'formElements'));
    return <div className="group-card">
            <div className="group-card-buttons">
                {(stryMutAct_9fa48("1602") ? disabled : (stryCov_9fa48("1602"), !disabled)) ? <>
                        <IoMdEye className="eye-icon-btn" title={t(COMMON_SET_DISABLED)} onClick={() => {
            if (stryMutAct_9fa48("1603")) {
              {}
            } else {
              stryCov_9fa48("1603");
              showConfirmDialog(group.id, dialogTypes.SET_VISIBILITY_DISABLED);
            }
          }} />
                        <FaEdit className="edit-icon-btn" title={t(COMMON_EDIT)} onClick={stryMutAct_9fa48("1604") ? () => undefined : (stryCov_9fa48("1604"), () => setGroup(group))} />
                    </> : <GiSightDisabled className="eye-icon-btn" title={t(COMMON_SET_ENABLED)} onClick={() => {
          if (stryMutAct_9fa48("1605")) {
            {}
          } else {
            stryCov_9fa48("1605");
            showConfirmDialog(group.id, dialogTypes.SET_VISIBILITY_ENABLED);
          }
        }} />}
                <MdDelete className="delete-icon-btn" title={t(DELETE_TITLE_LABEL)} onClick={stryMutAct_9fa48("1606") ? () => undefined : (stryCov_9fa48("1606"), () => showConfirmDialog(group.id, dialogTypes.DELETE_CONFIRM))} />
                <Link to={stryMutAct_9fa48("1607") ? `` : (stryCov_9fa48("1607"), `${GROUP_LIST_LINK}/${group.id}${ADD_STUDENT_LINK}`)}>
                    <FaUserPlus title={t(FORM_STUDENT_ADD_LABEL)} className="group-card-buttons-add-student" onClick={() => {
            if (stryMutAct_9fa48("1608")) {
              {}
            } else {
              stryCov_9fa48("1608");
              showAddStudentDialog(group.id);
            }
          }} />
                </Link>
            </div>
            <p className="group-card__description">{stryMutAct_9fa48("1609") ? `` : (stryCov_9fa48("1609"), `${t(GROUP_LABEL)}:`)}</p>
            <h3 className="group-card__number">{getShortTitle(group.title, 5)}</h3>
            <Link to={stryMutAct_9fa48("1610") ? `` : (stryCov_9fa48("1610"), `${GROUP_LIST_LINK}/${group.id}${SHOW_STUDENTS_LINK}`)}>
                <FaUsers title={t(FORM_SHOW_STUDENTS)} className="group-card-button-students" onClick={() => {
          if (stryMutAct_9fa48("1611")) {
            {}
          } else {
            stryCov_9fa48("1611");
            showStudentsByGroup(group.id);
          }
        }} />
            </Link>
        </div>;
  }
};
export default GroupCard;