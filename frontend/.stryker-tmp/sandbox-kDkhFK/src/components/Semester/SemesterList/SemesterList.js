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
import { useTranslation } from 'react-i18next';
import { isEmpty, isEqual } from 'lodash';
import { CircularProgress } from '@material-ui/core';
import NotFound from '../../../share/NotFound/NotFound';
import { dialogCloseButton, dialogTypes } from '../../../constants/dialogs';
import { COPY_LABEL, SEMESTER_COPY_LABEL, SEMESTERY_LABEL } from '../../../constants/translationLabels/formElements';
import { EXIST_LABEL, GROUP_EXIST_IN_THIS_SEMESTER } from '../../../constants/translationLabels/serviceMessages';
import { COMMON_GROUP_TITLE } from '../../../constants/translationLabels/common';
import { search } from '../../../helper/search';
import { getGroupsOptionsForSelect } from '../../../utils/selectUtils';
import SemesterCopyForm from '../../../containers/SemesterPage/SemesterCopyForm';
import SemesterCard from './SemesterCard';
import CustomDialog from '../../../containers/Dialogs/CustomDialog';
import { createMessage } from '../../../utils/sagaUtils';
import MultiselectForGroups from '../../../share/Multiselects/MultiSelectForGroups';
const SemesterList = props => {
  if (stryMutAct_9fa48("2731")) {
    {}
  } else {
    stryCov_9fa48("2731");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2732") ? "" : (stryCov_9fa48("2732"), 'formElements'));
    const {
      archived,
      disabled,
      term,
      semesters,
      selectSemester,
      createArchivedSemester,
      setOpenConfirmDialog,
      removeSemesterCard,
      setDefaultSemesterById,
      isOpenConfirmDialog,
      semesterCopy,
      options,
      setOpenSuccessSnackbar,
      setGroupsToSemester,
      toggleSemesterVisibility,
      loading
      // archivedSemesters,
      // getArchivedSemesterById,
    } = props;
    const [isOpenSemesterCopyForm, setIsOpenSemesterCopyForm] = useState(stryMutAct_9fa48("2733") ? true : (stryCov_9fa48("2733"), false));
    const [confirmDialogType, setConfirmDialogType] = useState(stryMutAct_9fa48("2734") ? "Stryker was here!" : (stryCov_9fa48("2734"), ''));
    const [isOpenGroupsDialog, setIsOpenGroupsDialog] = useState(stryMutAct_9fa48("2735") ? true : (stryCov_9fa48("2735"), false));
    const [semesterGroupsOptions, setSemesterGroupsOptions] = useState(stryMutAct_9fa48("2736") ? ["Stryker was here"] : (stryCov_9fa48("2736"), []));
    const [semesterId, setSemesterId] = useState(null);
    const searchArr = stryMutAct_9fa48("2737") ? [] : (stryCov_9fa48("2737"), [stryMutAct_9fa48("2738") ? "" : (stryCov_9fa48("2738"), 'year'), stryMutAct_9fa48("2739") ? "" : (stryCov_9fa48("2739"), 'description'), stryMutAct_9fa48("2740") ? "" : (stryCov_9fa48("2740"), 'startDay'), stryMutAct_9fa48("2741") ? "" : (stryCov_9fa48("2741"), 'endDay')]);
    const visibleItems = search(semesters, term, searchArr);
    const showConfirmDialog = (id, dialogType) => {
      if (stryMutAct_9fa48("2742")) {
        {}
      } else {
        stryCov_9fa48("2742");
        setSemesterId(id);
        setConfirmDialogType(dialogType);
        setOpenConfirmDialog(stryMutAct_9fa48("2743") ? false : (stryCov_9fa48("2743"), true));
      }
    };
    const submitSemesterCopy = ({
      toSemesterId
    }) => {
      if (stryMutAct_9fa48("2744")) {
        {}
      } else {
        stryCov_9fa48("2744");
        semesterCopy(stryMutAct_9fa48("2745") ? {} : (stryCov_9fa48("2745"), {
          fromSemesterId: semesterId,
          toSemesterId
        }));
        setIsOpenSemesterCopyForm(stryMutAct_9fa48("2746") ? true : (stryCov_9fa48("2746"), false));
      }
    };
    const closeSemesterCopyForm = () => {
      if (stryMutAct_9fa48("2747")) {
        {}
      } else {
        stryCov_9fa48("2747");
        setIsOpenSemesterCopyForm(stryMutAct_9fa48("2748") ? true : (stryCov_9fa48("2748"), false));
      }
    };
    const acceptConfirmDialog = currentSemesterId => {
      if (stryMutAct_9fa48("2749")) {
        {}
      } else {
        stryCov_9fa48("2749");
        setOpenConfirmDialog(stryMutAct_9fa48("2750") ? true : (stryCov_9fa48("2750"), false));
        const foundSemester = semesters.find(stryMutAct_9fa48("2751") ? () => undefined : (stryCov_9fa48("2751"), semesterItem => stryMutAct_9fa48("2754") ? semesterItem.id !== currentSemesterId : stryMutAct_9fa48("2753") ? false : stryMutAct_9fa48("2752") ? true : (stryCov_9fa48("2752", "2753", "2754"), semesterItem.id === currentSemesterId)));
        switch (confirmDialogType) {
          case dialogTypes.SET_DEFAULT:
            if (stryMutAct_9fa48("2755")) {} else {
              stryCov_9fa48("2755");
              setDefaultSemesterById(currentSemesterId);
              break;
            }
          case dialogTypes.SET_VISIBILITY_ENABLED:
            if (stryMutAct_9fa48("2756")) {} else {
              stryCov_9fa48("2756");
              toggleSemesterVisibility(stryMutAct_9fa48("2757") ? {} : (stryCov_9fa48("2757"), {
                ...foundSemester,
                disable: stryMutAct_9fa48("2758") ? true : (stryCov_9fa48("2758"), false)
              }));
              break;
            }
          case dialogTypes.SET_VISIBILITY_DISABLED:
            if (stryMutAct_9fa48("2759")) {} else {
              stryCov_9fa48("2759");
              toggleSemesterVisibility(stryMutAct_9fa48("2760") ? {} : (stryCov_9fa48("2760"), {
                ...foundSemester,
                disable: stryMutAct_9fa48("2761") ? false : (stryCov_9fa48("2761"), true)
              }));
              break;
            }
          default:
            if (stryMutAct_9fa48("2762")) {} else {
              stryCov_9fa48("2762");
              removeSemesterCard(currentSemesterId);
            }
        }
      }
    };
    // it doesnt work, need to finish implement archeved functionality
    // const handleSemesterArchivedPreview = (currentSemesterId) => {
    //     getArchivedSemesterById(+currentSemesterId);
    // };
    const onChangeGroups = () => {
      if (stryMutAct_9fa48("2763")) {
        {}
      } else {
        stryCov_9fa48("2763");
        const semester = semesters.find(stryMutAct_9fa48("2764") ? () => undefined : (stryCov_9fa48("2764"), semesterItem => stryMutAct_9fa48("2767") ? semesterItem.id !== semesterId : stryMutAct_9fa48("2766") ? false : stryMutAct_9fa48("2765") ? true : (stryCov_9fa48("2765", "2766", "2767"), semesterItem.id === semesterId)));
        const beginGroups = (stryMutAct_9fa48("2768") ? isEmpty(semester.semester_groups) : (stryCov_9fa48("2768"), !isEmpty(semester.semester_groups))) ? getGroupsOptionsForSelect(semester.semester_groups) : stryMutAct_9fa48("2769") ? ["Stryker was here"] : (stryCov_9fa48("2769"), []);
        const finishGroups = stryMutAct_9fa48("2770") ? [] : (stryCov_9fa48("2770"), [...semesterGroupsOptions]);
        if (stryMutAct_9fa48("2772") ? false : stryMutAct_9fa48("2771") ? true : (stryCov_9fa48("2771", "2772"), isEqual(beginGroups, finishGroups))) {
          if (stryMutAct_9fa48("2773")) {
            {}
          } else {
            stryCov_9fa48("2773");
            const message = createMessage(GROUP_EXIST_IN_THIS_SEMESTER, COMMON_GROUP_TITLE, EXIST_LABEL);
            setOpenSuccessSnackbar(message);
            return;
          }
        }
        setGroupsToSemester(semesterId, semesterGroupsOptions);
        setIsOpenGroupsDialog(stryMutAct_9fa48("2774") ? true : (stryCov_9fa48("2774"), false));
      }
    };
    const cancelMultiselect = () => {
      if (stryMutAct_9fa48("2775")) {
        {}
      } else {
        stryCov_9fa48("2775");
        setIsOpenGroupsDialog(stryMutAct_9fa48("2776") ? true : (stryCov_9fa48("2776"), false));
      }
    };
    if (stryMutAct_9fa48("2778") ? false : stryMutAct_9fa48("2777") ? true : (stryCov_9fa48("2777", "2778"), loading)) {
      if (stryMutAct_9fa48("2779")) {
        {}
      } else {
        stryCov_9fa48("2779");
        return <section className="centered-container">
                <CircularProgress />
            </section>;
      }
    }
    if (stryMutAct_9fa48("2781") ? false : stryMutAct_9fa48("2780") ? true : (stryCov_9fa48("2780", "2781"), isEmpty(visibleItems))) {
      if (stryMutAct_9fa48("2782")) {
        {}
      } else {
        stryCov_9fa48("2782");
        return <NotFound name={t(SEMESTERY_LABEL)} />;
      }
    }
    return <>
            {stryMutAct_9fa48("2785") ? isOpenConfirmDialog || <CustomDialog type={confirmDialogType} whatDelete="semester" open={isOpenConfirmDialog} handelConfirm={() => acceptConfirmDialog(semesterId)} /> : stryMutAct_9fa48("2784") ? false : stryMutAct_9fa48("2783") ? true : (stryCov_9fa48("2783", "2784", "2785"), isOpenConfirmDialog && <CustomDialog type={confirmDialogType} whatDelete="semester" open={isOpenConfirmDialog} handelConfirm={stryMutAct_9fa48("2786") ? () => undefined : (stryCov_9fa48("2786"), () => acceptConfirmDialog(semesterId))} />)}
            {stryMutAct_9fa48("2789") ? isOpenSemesterCopyForm || <CustomDialog className="semester-copy-dialog" title={t(SEMESTER_COPY_LABEL)} open={isOpenSemesterCopyForm} onClose={closeSemesterCopyForm} buttons={[dialogCloseButton(closeSemesterCopyForm)]}>
                    <SemesterCopyForm semesterId={semesterId} onSubmit={submitSemesterCopy} submitButtonLabel={t(COPY_LABEL)} semesters={semesters} />
                </CustomDialog> : stryMutAct_9fa48("2788") ? false : stryMutAct_9fa48("2787") ? true : (stryCov_9fa48("2787", "2788", "2789"), isOpenSemesterCopyForm && <CustomDialog className="semester-copy-dialog" title={t(SEMESTER_COPY_LABEL)} open={isOpenSemesterCopyForm} onClose={closeSemesterCopyForm} buttons={stryMutAct_9fa48("2790") ? [] : (stryCov_9fa48("2790"), [dialogCloseButton(closeSemesterCopyForm)])}>
                    <SemesterCopyForm semesterId={semesterId} onSubmit={submitSemesterCopy} submitButtonLabel={t(COPY_LABEL)} semesters={semesters} />
                </CustomDialog>)}
            <section className="container-flex-wrap">
                {visibleItems.map(semester => {
          if (stryMutAct_9fa48("2791")) {
            {}
          } else {
            stryCov_9fa48("2791");
            const semDays = semester.semester_days.map(stryMutAct_9fa48("2792") ? () => undefined : (stryCov_9fa48("2792"), day => t(stryMutAct_9fa48("2793") ? `` : (stryCov_9fa48("2793"), `common:day_of_week_${day}`))));
            return <SemesterCard key={semester.id} semester={semester} semDays={semDays} disabled={disabled} archived={archived} selectSemester={selectSemester} showConfirmDialog={showConfirmDialog} setIsOpenSemesterCopyForm={setIsOpenSemesterCopyForm} setSemesterId={setSemesterId} createArchivedSemester={createArchivedSemester} setSemesterGroupsOptions={setSemesterGroupsOptions} setIsOpenGroupsDialog={setIsOpenGroupsDialog} />;
          }
        })}
            </section>
            <MultiselectForGroups open={isOpenGroupsDialog} options={options} value={semesterGroupsOptions} onChange={setSemesterGroupsOptions} onCancel={cancelMultiselect} onClose={onChangeGroups} />
        </>;
  }
};
export default SemesterList;