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
import { Trans, useTranslation } from 'react-i18next';
import { FaEdit, FaUserPlus } from 'react-icons/fa';
import { MdContentCopy } from 'react-icons/all';
import { MdDelete } from 'react-icons/md';
import Card from '../../../share/Card/Card';
import LessonTypeBadge from '../../../components/LessonTypeBadge/LessonTypeBadge';
import { getTeacherName } from '../../../helper/renderTeacher';
import { getShortTitle } from '../../../helper/shortTitle';
import { firstStringLetterCapital } from '../../../helper/strings';
import { FORM_GROUPED_LABEL } from '../../../constants/translationLabels/formElements';
import { MAX_LENGTH_50 } from '../../../constants/common';
import { COPY_LESSON, DELETE_LESSON, EDIT_LESSON } from '../../../constants/translationLabels/common';
import './LessonList.scss';
const LessonsCard = props => {
  if (stryMutAct_9fa48("2255")) {
    {}
  } else {
    stryCov_9fa48("2255");
    const {
      lesson,
      onCopyLesson,
      onSelectLesson,
      onClickOpen
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2256") ? [] : (stryCov_9fa48("2256"), [stryMutAct_9fa48("2257") ? "" : (stryCov_9fa48("2257"), 'common'), stryMutAct_9fa48("2258") ? "" : (stryCov_9fa48("2258"), 'formElements')]));
    const getTitle = stryMutAct_9fa48("2259") ? () => undefined : (stryCov_9fa48("2259"), (() => {
      const getTitle = lessonItem => stryMutAct_9fa48("2260") ? `` : (stryCov_9fa48("2260"), `${firstStringLetterCapital(lessonItem.subjectForSite)}`);
      return getTitle;
    })());
    return <Card additionClassName="lesson-card">
            <div className="cards-btns">
                {stryMutAct_9fa48("2263") ? lesson.grouped || <FaUserPlus title={t(FORM_GROUPED_LABEL, {
          ns: 'formElements'
        })} className="svg-btn copy-btn align-left info-btn" /> : stryMutAct_9fa48("2262") ? false : stryMutAct_9fa48("2261") ? true : (stryCov_9fa48("2261", "2262", "2263"), lesson.grouped && <FaUserPlus title={t(FORM_GROUPED_LABEL, stryMutAct_9fa48("2264") ? {} : (stryCov_9fa48("2264"), {
          ns: stryMutAct_9fa48("2265") ? "" : (stryCov_9fa48("2265"), 'formElements')
        }))} className="svg-btn copy-btn align-left info-btn" />)}
                <MdContentCopy title={t(COPY_LESSON)} className="copy-icon-btn" onClick={stryMutAct_9fa48("2266") ? () => undefined : (stryCov_9fa48("2266"), () => onCopyLesson(lesson))} />
                <FaEdit title={t(EDIT_LESSON)} className="edit-icon-btn" onClick={stryMutAct_9fa48("2267") ? () => undefined : (stryCov_9fa48("2267"), () => onSelectLesson(lesson.id))} />
                <MdDelete title={t(DELETE_LESSON)} className="delete-icon-btn" onClick={stryMutAct_9fa48("2268") ? () => undefined : (stryCov_9fa48("2268"), () => onClickOpen(lesson.id))} />
            </div>
            <p className="lesson-card__title" title={lesson.subjectForSite}>
                {getShortTitle(getTitle(lesson), MAX_LENGTH_50)}
            </p>
            <LessonTypeBadge lessonType={lesson.lessonType} size="normal" />
            <p className="lesson-card__teacher">{getTeacherName(lesson.teacher)}</p>
            <p>
                <Trans i18nKey="hour" count={lesson.hours} ns="common" components={stryMutAct_9fa48("2269") ? [] : (stryCov_9fa48("2269"), [<strong key="strong" />])}>
                    {stryMutAct_9fa48("2270") ? {} : (stryCov_9fa48("2270"), {
            count: lesson.hours
          })}
                </Trans>
            </p>
            {stryMutAct_9fa48("2273") ? lesson.linkToMeeting || <a className="lesson-card__link" href={lesson.linkToMeeting} target="_blank" rel="noreferrer">{lesson.linkToMeeting}</a> : stryMutAct_9fa48("2272") ? false : stryMutAct_9fa48("2271") ? true : (stryCov_9fa48("2271", "2272", "2273"), lesson.linkToMeeting && <a className="lesson-card__link" href={lesson.linkToMeeting} target="_blank" rel="noreferrer">{lesson.linkToMeeting}</a>)}
        </Card>;
  }
};
export default LessonsCard;