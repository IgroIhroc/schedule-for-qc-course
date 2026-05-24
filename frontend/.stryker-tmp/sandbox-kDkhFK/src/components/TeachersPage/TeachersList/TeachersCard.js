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
import './TeachersList.scss';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { GiSightDisabled, IoMdEye } from 'react-icons/all';
import Card from '../../../share/Card/Card';
import { dialogTypes } from '../../../constants/dialogs';
import { getTeacherFullName } from '../../../helper/renderTeacher';
import { getShortTitle } from '../../../helper/shortTitle';
import { COMMON_DELETE_HOVER_TITLE, COMMON_EDIT_HOVER_TITLE, COMMON_SET_DISABLED, COMMON_SET_ENABLED, TEACHER_DEPARTMENT } from '../../../constants/translationLabels/common';
import { MAX_LENGTH_40 } from '../../../constants/common';
const TeachersCard = props => {
  if (stryMutAct_9fa48("3649")) {
    {}
  } else {
    stryCov_9fa48("3649");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("3650") ? "" : (stryCov_9fa48("3650"), 'common'));
    const {
      isDisabled,
      showConfirmDialog,
      teacherItem,
      selectedTeacherCard
    } = props;
    const sendMail = email => {
      if (stryMutAct_9fa48("3651")) {
        {}
      } else {
        stryCov_9fa48("3651");
        const mailto = stryMutAct_9fa48("3652") ? `` : (stryCov_9fa48("3652"), `mailto:${email}`);
        window.location.href = mailto;
      }
    };
    return <Card key={teacherItem.id} additionClassName="teacher-card">
            <div className="cards-btns">
                {(stryMutAct_9fa48("3653") ? isDisabled : (stryCov_9fa48("3653"), !isDisabled)) ? <>
                        <IoMdEye className="copy-icon-btn" title={t(COMMON_SET_DISABLED)} onClick={() => {
            if (stryMutAct_9fa48("3654")) {
              {}
            } else {
              stryCov_9fa48("3654");
              showConfirmDialog(teacherItem.id, dialogTypes.SET_VISIBILITY_DISABLED);
            }
          }} />
                        <FaEdit className="edit-icon-btn" title={t(COMMON_EDIT_HOVER_TITLE)} onClick={() => {
            if (stryMutAct_9fa48("3655")) {
              {}
            } else {
              stryCov_9fa48("3655");
              selectedTeacherCard(teacherItem.id);
            }
          }} />
                    </> : <GiSightDisabled className="copy-icon-btn" title={t(COMMON_SET_ENABLED)} onClick={() => {
          if (stryMutAct_9fa48("3656")) {
            {}
          } else {
            stryCov_9fa48("3656");
            showConfirmDialog(teacherItem.id, dialogTypes.SET_VISIBILITY_ENABLED);
          }
        }} />}
                <MdDelete className="delete-icon-btn" title={t(COMMON_DELETE_HOVER_TITLE)} onClick={stryMutAct_9fa48("3657") ? () => undefined : (stryCov_9fa48("3657"), () => showConfirmDialog(teacherItem.id, dialogTypes.DELETE_CONFIRM))} />
            </div>
            <h2 className="teacher-card__name">
                {getShortTitle(getTeacherFullName(teacherItem), MAX_LENGTH_40)}
            </h2>
            <p className="teacher-card__title">
                {stryMutAct_9fa48("3658") ? `` : (stryCov_9fa48("3658"), `${teacherItem.position} ${(stryMutAct_9fa48("3661") ? teacherItem.department === null : stryMutAct_9fa48("3660") ? false : stryMutAct_9fa48("3659") ? true : (stryCov_9fa48("3659", "3660", "3661"), teacherItem.department !== null)) ? stryMutAct_9fa48("3662") ? `` : (stryCov_9fa48("3662"), `${t(TEACHER_DEPARTMENT)} ${teacherItem.department.name}`) : stryMutAct_9fa48("3663") ? "Stryker was here!" : (stryCov_9fa48("3663"), '')}`)}
            </p>
            {stryMutAct_9fa48("3666") ? teacherItem.email || <button type="button" className="teacher-card__email" onClick={() => {
        sendMail(teacherItem.email);
      }}>
                    {teacherItem.email}
                </button> : stryMutAct_9fa48("3665") ? false : stryMutAct_9fa48("3664") ? true : (stryCov_9fa48("3664", "3665", "3666"), teacherItem.email && <button type="button" className="teacher-card__email" onClick={() => {
        if (stryMutAct_9fa48("3667")) {
          {}
        } else {
          stryCov_9fa48("3667");
          sendMail(teacherItem.email);
        }
      }}>
                    {teacherItem.email}
                </button>)}
        </Card>;
  }
};
export default TeachersCard;