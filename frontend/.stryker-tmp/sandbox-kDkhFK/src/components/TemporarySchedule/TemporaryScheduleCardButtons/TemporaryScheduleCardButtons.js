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
import { FaEdit, MdDelete } from 'react-icons/all';
import { useTranslation } from 'react-i18next';
import { selectTemporaryScheduleService } from '../../../services/temporaryScheduleService';
import { COMMON_DELETE_HOVER_TITLE, COMMON_EDIT_HOVER_TITLE } from '../../../constants/translationLabels/common';
const TemporaryScheduleCardButtons = props => {
  if (stryMutAct_9fa48("3958")) {
    {}
  } else {
    stryCov_9fa48("3958");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("3959") ? "" : (stryCov_9fa48("3959"), 'common'));
    const {
      schedule,
      date,
      isTemporary,
      scheduleId
    } = props;
    const {
      onOpenDialog,
      setDate,
      setTeacherId
    } = props;
    const selectTemporarySchedule = scheduleData => {
      if (stryMutAct_9fa48("3960")) {
        {}
      } else {
        stryCov_9fa48("3960");
        selectTemporaryScheduleService(stryMutAct_9fa48("3961") ? {} : (stryCov_9fa48("3961"), {
          ...scheduleData.lesson,
          room: scheduleData.room,
          class: scheduleData.class,
          id: scheduleData.id,
          vacation: scheduleData.vacation,
          scheduleId: scheduleData.scheduleId ? scheduleData.scheduleId : scheduleId,
          date: scheduleData.date
        }));
      }
    };
    const handleScheduleSelect = scheduleData => {
      if (stryMutAct_9fa48("3962")) {
        {}
      } else {
        stryCov_9fa48("3962");
        const resultSchedule = scheduleData;
        resultSchedule.scheduleId = scheduleData.id;
        resultSchedule.id = null;
        resultSchedule.lesson.id = null;
        selectTemporarySchedule(resultSchedule);
      }
    };
    const handleEditClick = () => {
      if (stryMutAct_9fa48("3963")) {
        {}
      } else {
        stryCov_9fa48("3963");
        if (stryMutAct_9fa48("3965") ? false : stryMutAct_9fa48("3964") ? true : (stryCov_9fa48("3964", "3965"), isTemporary)) selectTemporarySchedule(stryMutAct_9fa48("3966") ? {} : (stryCov_9fa48("3966"), {
          ...schedule,
          date
        }));else {
          if (stryMutAct_9fa48("3967")) {
            {}
          } else {
            stryCov_9fa48("3967");
            handleScheduleSelect(stryMutAct_9fa48("3968") ? {} : (stryCov_9fa48("3968"), {
              ...schedule,
              date
            }));
          }
        }
      }
    };
    return <div className="cards-btns">
            <FaEdit title={t(COMMON_EDIT_HOVER_TITLE)} className="svg-btn edit-btn" onClick={handleEditClick} />
            {stryMutAct_9fa48("3971") ? isTemporary || <MdDelete title={t(COMMON_DELETE_HOVER_TITLE)} className="svg-btn delete-btn" onClick={() => {
        onOpenDialog(schedule.id);
        setDate(date);
        setTeacherId(schedule.lesson.teacher.id);
      }} /> : stryMutAct_9fa48("3970") ? false : stryMutAct_9fa48("3969") ? true : (stryCov_9fa48("3969", "3970", "3971"), isTemporary && <MdDelete title={t(COMMON_DELETE_HOVER_TITLE)} className="svg-btn delete-btn" onClick={() => {
        if (stryMutAct_9fa48("3972")) {
          {}
        } else {
          stryCov_9fa48("3972");
          onOpenDialog(schedule.id);
          setDate(date);
          setTeacherId(schedule.lesson.teacher.id);
        }
      }} />)}
        </div>;
  }
};
export default TemporaryScheduleCardButtons;