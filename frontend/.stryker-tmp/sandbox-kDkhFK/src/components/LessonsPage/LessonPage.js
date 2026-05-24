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
import { isNil } from 'lodash';
import TextField from '@material-ui/core/TextField';
import { Autocomplete } from '@material-ui/lab';
import CustomDialog from '../../containers/Dialogs/CustomDialog';
import { dialogTypes } from '../../constants/dialogs';
import { cardType } from '../../constants/cardType';
import { COMMON_LESSON_SERVICE_IS_NOT_UNIQUE } from '../../constants/translationLabels/common';
import { search } from '../../helper/search';
import { checkUniqLesson } from '../../validation/storeValidation';
import { cardObjectHandler } from '../../helper/cardObjectHandler';
import Lessons from '../../containers/LessonPage/Lessons';
import Search from '../../containers/LessonPage/Search';
import LessonForm from '../../containers/LessonPage/LessonForm';
import CopyLessonsFromSemesterForm from '../../containers/LessonPage/CopyLessonsFromSemesterForm';
import CopyLessonDialog from './CopyLessonDialog/CopyLessonDialog';
import './LessonPage.scss';
import './LessonForm/LessonForm.scss';
import { showAllSubjectsService } from '../../services/subjectService';
import { FORM_GROUP_LABEL } from '../../constants/translationLabels/formElements';
import { trasformLink } from '../../utils/trasformLink';
import { GROUPED } from '../../constants/common';
const LessonPage = props => {
  if (stryMutAct_9fa48("2189")) {
    {}
  } else {
    stryCov_9fa48("2189");
    const {
      currentSemester,
      isUniqueError,
      lessonTypes,
      subjects,
      teachers,
      lessons,
      groupId,
      group,
      groups,
      copyLessonCardStart,
      deleteLessonCardStart,
      getLessonTypesStart,
      getLessonsByGroupStart,
      selectLessonCardSuccess,
      setOpenConfirmDialog,
      isOpenConfirmDialog,
      setOpenErrorSnackbar,
      setUniqueError,
      copyLessonsFromSemester,
      handleLesson,
      selectByGroupId,
      selectGroupSuccess,
      getEnabledGroupsStart,
      showAllTeachers,
      getAllSemesters
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2190") ? "" : (stryCov_9fa48("2190"), 'common'));
    const [term, setTerm] = useState(stryMutAct_9fa48("2191") ? "Stryker was here!" : (stryCov_9fa48("2191"), ''));
    const [lessonId, setLessonId] = useState();
    const [copiedLesson, setCopiedLesson] = useState();
    const [isOpenCopyLessonDialog, setIsOpenCopyLessonDialog] = useState(stryMutAct_9fa48("2192") ? true : (stryCov_9fa48("2192"), false));
    const visibleItems = search(lessons, term, stryMutAct_9fa48("2193") ? [] : (stryCov_9fa48("2193"), [stryMutAct_9fa48("2194") ? "" : (stryCov_9fa48("2194"), 'teacher.surname'), stryMutAct_9fa48("2195") ? "" : (stryCov_9fa48("2195"), 'subjectForSite'), stryMutAct_9fa48("2196") ? "" : (stryCov_9fa48("2196"), 'lessonType'), GROUPED]));
    useEffect(() => {
      if (stryMutAct_9fa48("2197")) {
        {}
      } else {
        stryCov_9fa48("2197");
        if (stryMutAct_9fa48("2199") ? false : stryMutAct_9fa48("2198") ? true : (stryCov_9fa48("2198", "2199"), groupId)) {
          if (stryMutAct_9fa48("2200")) {
            {}
          } else {
            stryCov_9fa48("2200");
            getLessonsByGroupStart(groupId);
          }
        }
      }
    }, stryMutAct_9fa48("2201") ? [] : (stryCov_9fa48("2201"), [groupId]));
    useEffect(() => {
      if (stryMutAct_9fa48("2202")) {
        {}
      } else {
        stryCov_9fa48("2202");
        showAllTeachers();
        getLessonTypesStart();
        getEnabledGroupsStart();
        showAllSubjectsService();
        getAllSemesters();
      }
    }, stryMutAct_9fa48("2203") ? ["Stryker was here"] : (stryCov_9fa48("2203"), []));
    const submitLessonForm = card => {
      if (stryMutAct_9fa48("2204")) {
        {}
      } else {
        stryCov_9fa48("2204");
        const link = trasformLink(card.linkToMeeting);
        const values = cardObjectHandler(card, currentSemester, link);
        if (stryMutAct_9fa48("2207") ? false : stryMutAct_9fa48("2206") ? true : stryMutAct_9fa48("2205") ? checkUniqLesson(lessons, values) : (stryCov_9fa48("2205", "2206", "2207"), !checkUniqLesson(lessons, values))) {
          if (stryMutAct_9fa48("2208")) {
            {}
          } else {
            stryCov_9fa48("2208");
            const message = t(COMMON_LESSON_SERVICE_IS_NOT_UNIQUE);
            setOpenErrorSnackbar(message);
            setUniqueError(stryMutAct_9fa48("2209") ? false : (stryCov_9fa48("2209"), true));
            return;
          }
        }
        handleLesson(stryMutAct_9fa48("2210") ? {} : (stryCov_9fa48("2210"), {
          values,
          groupId
        }));
      }
    };
    const showConfirmDialog = lessonCardId => {
      if (stryMutAct_9fa48("2211")) {
        {}
      } else {
        stryCov_9fa48("2211");
        setLessonId(lessonCardId);
        setOpenConfirmDialog(stryMutAct_9fa48("2212") ? false : (stryCov_9fa48("2212"), true));
      }
    };
    const acceptConfirmDialog = () => {
      if (stryMutAct_9fa48("2213")) {
        {}
      } else {
        stryCov_9fa48("2213");
        setOpenConfirmDialog(stryMutAct_9fa48("2214") ? true : (stryCov_9fa48("2214"), false));
        deleteLessonCardStart(lessonId);
      }
    };
    const openCopyLessonDialogHandle = lesson => {
      if (stryMutAct_9fa48("2215")) {
        {}
      } else {
        stryCov_9fa48("2215");
        setCopiedLesson(lesson);
        setIsOpenCopyLessonDialog(stryMutAct_9fa48("2216") ? false : (stryCov_9fa48("2216"), true));
      }
    };
    const closeCopyLessonDialogHandle = params => {
      if (stryMutAct_9fa48("2217")) {
        {}
      } else {
        stryCov_9fa48("2217");
        const {
          group: copiedGroup,
          lesson
        } = params;
        setIsOpenCopyLessonDialog(stryMutAct_9fa48("2218") ? true : (stryCov_9fa48("2218"), false));
        if (stryMutAct_9fa48("2221") ? false : stryMutAct_9fa48("2220") ? true : stryMutAct_9fa48("2219") ? isNil(copiedGroup) : (stryCov_9fa48("2219", "2220", "2221"), !isNil(copiedGroup))) {
          if (stryMutAct_9fa48("2222")) {
            {}
          } else {
            stryCov_9fa48("2222");
            copyLessonCardStart(stryMutAct_9fa48("2223") ? {} : (stryCov_9fa48("2223"), {
              group: copiedGroup,
              lesson
            }));
          }
        }
      }
    };
    const submitCopySemester = values => {
      if (stryMutAct_9fa48("2224")) {
        {}
      } else {
        stryCov_9fa48("2224");
        const toSemesterId = currentSemester.id;
        const fromSemesterId = stryMutAct_9fa48("2225") ? -values.fromSemesterId : (stryCov_9fa48("2225"), +values.fromSemesterId);
        copyLessonsFromSemester(stryMutAct_9fa48("2226") ? {} : (stryCov_9fa48("2226"), {
          ...values,
          toSemesterId,
          fromSemesterId
        }));
      }
    };
    const handleGroupSelect = selectedGroup => {
      if (stryMutAct_9fa48("2227")) {
        {}
      } else {
        stryCov_9fa48("2227");
        if (stryMutAct_9fa48("2229") ? false : stryMutAct_9fa48("2228") ? true : (stryCov_9fa48("2228", "2229"), selectedGroup)) {
          if (stryMutAct_9fa48("2230")) {
            {}
          } else {
            stryCov_9fa48("2230");
            selectByGroupId(selectedGroup.id);
            selectGroupSuccess(selectedGroup.id);
          }
        }
      }
    };
    return <>
            <div className="lesson-wrapper">
                <div className="lesson-side-bar">
                    <Search setTerm={setTerm} />
                    <LessonForm lessonTypes={lessonTypes} isUniqueError={isUniqueError} subjects={subjects} teachers={teachers} onSubmit={submitLessonForm} onSetSelectedCard={selectLessonCardSuccess} />
                    {stryMutAct_9fa48("2233") ? !groupId || <CopyLessonsFromSemesterForm onSubmit={submitCopySemester} /> : stryMutAct_9fa48("2232") ? false : stryMutAct_9fa48("2231") ? true : (stryCov_9fa48("2231", "2232", "2233"), (stryMutAct_9fa48("2234") ? groupId : (stryCov_9fa48("2234"), !groupId)) && <CopyLessonsFromSemesterForm onSubmit={submitCopySemester} />)}
                </div>
                <div className="lessons-list">
                    <Autocomplete id="group" value={group} options={groups} className="group-lesson" clearOnEscape openOnFocus getOptionLabel={stryMutAct_9fa48("2235") ? () => undefined : (stryCov_9fa48("2235"), option => option.title)} onChange={(_, newValue) => {
            if (stryMutAct_9fa48("2236")) {
              {}
            } else {
              stryCov_9fa48("2236");
              handleGroupSelect(newValue);
            }
          }} renderInput={stryMutAct_9fa48("2237") ? () => undefined : (stryCov_9fa48("2237"), params => <TextField className="textField" {...params} label={t(FORM_GROUP_LABEL)} margin="normal" />)} />
                    <Lessons visibleItems={visibleItems} onClickOpen={showConfirmDialog} onCopyLesson={openCopyLessonDialogHandle} />
                </div>
            </div>

            {stryMutAct_9fa48("2240") ? isOpenCopyLessonDialog || <CopyLessonDialog open={isOpenCopyLessonDialog} onClose={closeCopyLessonDialogHandle} groupId={groupId} lesson={copiedLesson} groups={groups} translation={t} /> : stryMutAct_9fa48("2239") ? false : stryMutAct_9fa48("2238") ? true : (stryCov_9fa48("2238", "2239", "2240"), isOpenCopyLessonDialog && <CopyLessonDialog open={isOpenCopyLessonDialog} onClose={closeCopyLessonDialogHandle} groupId={groupId} lesson={copiedLesson} groups={groups} translation={t} />)}
            {stryMutAct_9fa48("2243") ? isOpenConfirmDialog || <CustomDialog type={dialogTypes.DELETE_CONFIRM} handelConfirm={acceptConfirmDialog} whatDelete={cardType.LESSON.toLowerCase()} open={isOpenConfirmDialog} /> : stryMutAct_9fa48("2242") ? false : stryMutAct_9fa48("2241") ? true : (stryCov_9fa48("2241", "2242", "2243"), isOpenConfirmDialog && <CustomDialog type={dialogTypes.DELETE_CONFIRM} handelConfirm={acceptConfirmDialog} whatDelete={stryMutAct_9fa48("2244") ? cardType.LESSON.toUpperCase() : (stryCov_9fa48("2244"), cardType.LESSON.toLowerCase())} open={isOpenConfirmDialog} />)}
        </>;
  }
};
export default LessonPage;