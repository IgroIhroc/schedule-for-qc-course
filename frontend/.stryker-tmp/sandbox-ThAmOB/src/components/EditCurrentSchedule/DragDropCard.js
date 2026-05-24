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
import Card from '@material-ui/core/Card';
import { MdGroup } from 'react-icons/md';
import { FORM_GROUPED_LABEL, FORM_HOURS_LABEL } from '../../constants/translationLabels/formElements';
import { getTeacherName } from '../../helper/renderTeacher';
import LessonTypeBadge from '../../components/LessonTypeBadge/LessonTypeBadge';
import './ScheduleLessonList/ScheduleLessonList.scss';
const DragDropCard = props => {
  if (stryMutAct_9fa48("1246")) {
    {}
  } else {
    stryCov_9fa48("1246");
    const {
      setDragItemData,
      lesson,
      t
    } = props;
    const onDragStart = () => {
      if (stryMutAct_9fa48("1247")) {
        {}
      } else {
        stryCov_9fa48("1247");
        setDragItemData(lesson);
      }
    };
    return <div className="board-container">
            <Card className="draggable-card schedule-item card" draggable onDragStart={onDragStart}>
                <h5 className="lesson-title">{lesson.subjectForSite}</h5>
                <LessonTypeBadge lessonType={lesson.lessonType} showIcon={stryMutAct_9fa48("1248") ? true : (stryCov_9fa48("1248"), false)} size="small" />
                <p className="teacher-name">{getTeacherName(lesson.teacher)}</p>
                {stryMutAct_9fa48("1251") ? lesson.grouped || <MdGroup title={t(FORM_GROUPED_LABEL)} className="svg-btn copy-btn info-btn grouped-icon" /> : stryMutAct_9fa48("1250") ? false : stryMutAct_9fa48("1249") ? true : (stryCov_9fa48("1249", "1250", "1251"), lesson.grouped && <MdGroup title={t(FORM_GROUPED_LABEL)} className="svg-btn copy-btn info-btn grouped-icon" />)}
                <p className="lesson-duration">
                    <b>1</b> {t(FORM_HOURS_LABEL)}
                </p>
            </Card>
        </div>;
  }
};
export default DragDropCard;