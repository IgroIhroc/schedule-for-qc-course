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
import { FaEdit, FaFileArchive, FaUsers } from 'react-icons/fa';
import { MdDelete, MdDonutSmall } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import './SemesterCard.scss';
import { FaCopy, GiSightDisabled, IoMdEye } from 'react-icons/all';
import Card from '../../../share/Card/Card';
import { dialogTypes } from '../../../constants/dialogs';
import { COPY_LABEL, DELETE_TITLE, EDIT_TITLE, FORM_SHOW_GROUPS, SET_DEFAULT_TITLE } from '../../../constants/translationLabels/formElements';
import { COMMON_CLASS_SCHEDULE_MANAGEMENT_TITLE, COMMON_DAYS_LABEL, COMMON_MAKE_ARCHIVE, COMMON_SET_DISABLED, COMMON_SET_ENABLED, SEMESTER_LABEL } from '../../../constants/translationLabels/common';
import { getGroupsOptionsForSelect } from '../../../utils/selectUtils';
const SemesterCard = props => {
  if (stryMutAct_9fa48("2657")) {
    {}
  } else {
    stryCov_9fa48("2657");
    const {
      disabled,
      archived,
      selectSemester,
      showConfirmDialog,
      setIsOpenSemesterCopyForm,
      setSemesterId,
      createArchivedSemester,
      setSemesterGroupsOptions,
      setIsOpenGroupsDialog,
      semDays,
      semester
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2658") ? "" : (stryCov_9fa48("2658"), 'formElements'));
    return <Card additionClassName={stryMutAct_9fa48("2659") ? `` : (stryCov_9fa48("2659"), `semester-card ${semester.currentSemester ? stryMutAct_9fa48("2660") ? "" : (stryCov_9fa48("2660"), 'current-semester') : stryMutAct_9fa48("2661") ? "Stryker was here!" : (stryCov_9fa48("2661"), '')}`)}>
            <div className="cards-btns">
                {stryMutAct_9fa48("2664") ? !(disabled || archived) || <>
                        <IoMdEye className="eye-icon-btn" title={t(COMMON_SET_DISABLED)} onClick={() => {
            showConfirmDialog(semester.id, dialogTypes.SET_VISIBILITY_DISABLED);
          }} />
                        <FaEdit className="edit-icon-btn" title={t(EDIT_TITLE)} onClick={() => {
            selectSemester(semester.id);
          }} />
                        <FaCopy className="copy-icon-btn" title={t(COPY_LABEL)} onClick={() => {
            setIsOpenSemesterCopyForm(true);
            setSemesterId(semester.id);
          }} />
                        {!semester.currentSemester && <FaFileArchive className="archive-icon-btn" title={t(COMMON_MAKE_ARCHIVE)} onClick={() => {
            createArchivedSemester(semester.id);
          }} />}
                    </> : stryMutAct_9fa48("2663") ? false : stryMutAct_9fa48("2662") ? true : (stryCov_9fa48("2662", "2663", "2664"), (stryMutAct_9fa48("2665") ? disabled || archived : (stryCov_9fa48("2665"), !(stryMutAct_9fa48("2668") ? disabled && archived : stryMutAct_9fa48("2667") ? false : stryMutAct_9fa48("2666") ? true : (stryCov_9fa48("2666", "2667", "2668"), disabled || archived)))) && <>
                        <IoMdEye className="eye-icon-btn" title={t(COMMON_SET_DISABLED)} onClick={() => {
            if (stryMutAct_9fa48("2669")) {
              {}
            } else {
              stryCov_9fa48("2669");
              showConfirmDialog(semester.id, dialogTypes.SET_VISIBILITY_DISABLED);
            }
          }} />
                        <FaEdit className="edit-icon-btn" title={t(EDIT_TITLE)} onClick={() => {
            if (stryMutAct_9fa48("2670")) {
              {}
            } else {
              stryCov_9fa48("2670");
              selectSemester(semester.id);
            }
          }} />
                        <FaCopy className="copy-icon-btn" title={t(COPY_LABEL)} onClick={() => {
            if (stryMutAct_9fa48("2671")) {
              {}
            } else {
              stryCov_9fa48("2671");
              setIsOpenSemesterCopyForm(stryMutAct_9fa48("2672") ? false : (stryCov_9fa48("2672"), true));
              setSemesterId(semester.id);
            }
          }} />
                        {stryMutAct_9fa48("2675") ? !semester.currentSemester || <FaFileArchive className="archive-icon-btn" title={t(COMMON_MAKE_ARCHIVE)} onClick={() => {
            createArchivedSemester(semester.id);
          }} /> : stryMutAct_9fa48("2674") ? false : stryMutAct_9fa48("2673") ? true : (stryCov_9fa48("2673", "2674", "2675"), (stryMutAct_9fa48("2676") ? semester.currentSemester : (stryCov_9fa48("2676"), !semester.currentSemester)) && <FaFileArchive className="archive-icon-btn" title={t(COMMON_MAKE_ARCHIVE)} onClick={() => {
            if (stryMutAct_9fa48("2677")) {
              {}
            } else {
              stryCov_9fa48("2677");
              createArchivedSemester(semester.id);
            }
          }} />)}
                    </>)}
                {stryMutAct_9fa48("2680") ? disabled && !archived || <GiSightDisabled className="copy-icon-btn" title={t(COMMON_SET_ENABLED)} onClick={() => {
          showConfirmDialog(semester.id, dialogTypes.SET_VISIBILITY_ENABLED);
        }} /> : stryMutAct_9fa48("2679") ? false : stryMutAct_9fa48("2678") ? true : (stryCov_9fa48("2678", "2679", "2680"), (stryMutAct_9fa48("2682") ? disabled || !archived : stryMutAct_9fa48("2681") ? true : (stryCov_9fa48("2681", "2682"), disabled && (stryMutAct_9fa48("2683") ? archived : (stryCov_9fa48("2683"), !archived)))) && <GiSightDisabled className="copy-icon-btn" title={t(COMMON_SET_ENABLED)} onClick={() => {
          if (stryMutAct_9fa48("2684")) {
            {}
          } else {
            stryCov_9fa48("2684");
            showConfirmDialog(semester.id, dialogTypes.SET_VISIBILITY_ENABLED);
          }
        }} />)}
                {/* {archived && (
                                <IoMdEye
                                    className="eye-icon-btn"
                                    title={t(COMMON_PREVIEW)}
                                    onClick={() => {
                                        handleSemesterArchivedPreview(semester.id);
                                    }}
                                />
                            )} */}
                <MdDelete className="delete-icon-btn" title={t(DELETE_TITLE)} onClick={stryMutAct_9fa48("2685") ? () => undefined : (stryCov_9fa48("2685"), () => showConfirmDialog(semester.id, dialogTypes.DELETE_CONFIRM))} />

                {stryMutAct_9fa48("2688") ? !(disabled || archived) || <MdDonutSmall className={`default-icon-btn ${semester.defaultSemester ? 'default-semester' : ''}`} title={t(SET_DEFAULT_TITLE)} onClick={() => showConfirmDialog(semester.id, dialogTypes.SET_DEFAULT)} /> : stryMutAct_9fa48("2687") ? false : stryMutAct_9fa48("2686") ? true : (stryCov_9fa48("2686", "2687", "2688"), (stryMutAct_9fa48("2689") ? disabled || archived : (stryCov_9fa48("2689"), !(stryMutAct_9fa48("2692") ? disabled && archived : stryMutAct_9fa48("2691") ? false : stryMutAct_9fa48("2690") ? true : (stryCov_9fa48("2690", "2691", "2692"), disabled || archived)))) && <MdDonutSmall className={stryMutAct_9fa48("2693") ? `` : (stryCov_9fa48("2693"), `default-icon-btn ${semester.defaultSemester ? stryMutAct_9fa48("2694") ? "" : (stryCov_9fa48("2694"), 'default-semester') : stryMutAct_9fa48("2695") ? "Stryker was here!" : (stryCov_9fa48("2695"), '')}`)} title={t(SET_DEFAULT_TITLE)} onClick={stryMutAct_9fa48("2696") ? () => undefined : (stryCov_9fa48("2696"), () => showConfirmDialog(semester.id, dialogTypes.SET_DEFAULT))} />)}
            </div>

            <p className="semester-card-description">
                <small>{stryMutAct_9fa48("2697") ? `` : (stryCov_9fa48("2697"), `${t(SEMESTER_LABEL)}: `)}</small>
                <b>{semester.description}</b>
                {stryMutAct_9fa48("2698") ? `` : (stryCov_9fa48("2698"), ` ( ${semester.year} )`)}
            </p>
            <p className="semester-card-description">
                <b>
                    {semester.startDay} - {semester.endDay}
                </b>
            </p>
            <p className="semester-card-description">
                {stryMutAct_9fa48("2699") ? `` : (stryCov_9fa48("2699"), `${t(COMMON_DAYS_LABEL)}: `)}
                {semDays.join(stryMutAct_9fa48("2700") ? "" : (stryCov_9fa48("2700"), ', '))}
            </p>
            <p className="semester-card-description">
                {stryMutAct_9fa48("2701") ? `` : (stryCov_9fa48("2701"), `${t(COMMON_CLASS_SCHEDULE_MANAGEMENT_TITLE)}: `)}
                {semester.semester_classes.map(classItem => {
          if (stryMutAct_9fa48("2702")) {
            {}
          } else {
            stryCov_9fa48("2702");
            return classItem.class_name;
          }
        }).join(stryMutAct_9fa48("2703") ? "" : (stryCov_9fa48("2703"), ', '))}
            </p>

            {stryMutAct_9fa48("2706") ? !(disabled || archived) || <FaUsers title={t(FORM_SHOW_GROUPS)} className="semester-groups-icon" onClick={() => {
        setSemesterId(semester.id);
        setSemesterGroupsOptions(getGroupsOptionsForSelect(semester.semester_groups));
        setIsOpenGroupsDialog(true);
      }} /> : stryMutAct_9fa48("2705") ? false : stryMutAct_9fa48("2704") ? true : (stryCov_9fa48("2704", "2705", "2706"), (stryMutAct_9fa48("2707") ? disabled || archived : (stryCov_9fa48("2707"), !(stryMutAct_9fa48("2710") ? disabled && archived : stryMutAct_9fa48("2709") ? false : stryMutAct_9fa48("2708") ? true : (stryCov_9fa48("2708", "2709", "2710"), disabled || archived)))) && <FaUsers title={t(FORM_SHOW_GROUPS)} className="semester-groups-icon" onClick={() => {
        if (stryMutAct_9fa48("2711")) {
          {}
        } else {
          stryCov_9fa48("2711");
          setSemesterId(semester.id);
          setSemesterGroupsOptions(getGroupsOptionsForSelect(semester.semester_groups));
          setIsOpenGroupsDialog(stryMutAct_9fa48("2712") ? false : (stryCov_9fa48("2712"), true));
        }
      }} />)}
        </Card>;
  }
};
export default SemesterCard;