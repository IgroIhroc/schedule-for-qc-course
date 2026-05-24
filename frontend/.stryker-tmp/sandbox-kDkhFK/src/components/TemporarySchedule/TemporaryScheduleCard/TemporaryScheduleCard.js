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
import { useTranslation } from 'react-i18next';
import { GROUP_LABEL, ROOM_LABEL, SUBJECT_LABEL, TEACHER_LABEL } from '../../../constants/translationLabels/formElements';
import { COMMON_CLASS_SCHEDULE, SEMESTER_LABEL } from '../../../constants/translationLabels/common';
const TemporaryScheduleCard = props => {
  if (stryMutAct_9fa48("3951")) {
    {}
  } else {
    stryCov_9fa48("3951");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("3952") ? "" : (stryCov_9fa48("3952"), 'formElements'));
    const {
      schedule
    } = props;
    return <>
            <p>
                {t(SUBJECT_LABEL)}:{stryMutAct_9fa48("3953") ? "" : (stryCov_9fa48("3953"), ' ')}
                <b>
                    {schedule.lesson ? schedule.lesson.subjectForSite : schedule.subjectForSite}(
                    {schedule.lesson ? schedule.lesson.lessonType : schedule.lessonType})
                </b>
            </p>
            <p>
                {t(ROOM_LABEL)}: <b>{schedule.room.name}</b>
            </p>
            <p>
                {t(TEACHER_LABEL)}:{stryMutAct_9fa48("3954") ? "" : (stryCov_9fa48("3954"), ' ')}
                <b>{schedule.lesson ? schedule.lesson.teacherForSite : schedule.teacherForSite}</b>
            </p>
            <p>
                {t(COMMON_CLASS_SCHEDULE)}:{stryMutAct_9fa48("3955") ? "" : (stryCov_9fa48("3955"), ' ')}
                <b>
                    {schedule.class.startTime} - {schedule.class.endTime}
                </b>
            </p>
            <p>
                {t(GROUP_LABEL)}:{stryMutAct_9fa48("3956") ? "" : (stryCov_9fa48("3956"), ' ')}
                <b>{schedule.lesson ? schedule.lesson.group.title : schedule.group.title}</b>
            </p>
            <p>
                {t(SEMESTER_LABEL)}:{stryMutAct_9fa48("3957") ? "" : (stryCov_9fa48("3957"), ' ')}
                <b>
                    {schedule.lesson ? schedule.lesson.semester.description : schedule.semester.description}
                </b>
            </p>
        </>;
  }
};
export default TemporaryScheduleCard;