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
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { MdGroup } from 'react-icons/md';
import { IoMdMore } from 'react-icons/all';
import Card from '@material-ui/core/Card';
import { FORM_GROUPED_LABEL } from '../../../constants/translationLabels/formElements';
import { COMMON_DELETE_HOVER_TITLE, COMMON_EDIT } from '../../../constants/translationLabels/common';
import { actionType } from '../../../constants/actionTypes';
import { getTeacherName } from '../../../helper/renderTeacher';
import LessonTypeBadge from '../../../components/LessonTypeBadge/LessonTypeBadge';
const ScheduleItem = props => {
  if (stryMutAct_9fa48("1423")) {
    {}
  } else {
    stryCov_9fa48("1423");
    const {
      deleteScheduleItem,
      checkRoomAvailability,
      itemData,
      getLessonsByGroupId,
      selectByGroupId,
      t,
      openDialogWithData
    } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const {
      lesson
    } = itemData;
    const handleClick = event => {
      if (stryMutAct_9fa48("1424")) {
        {}
      } else {
        stryCov_9fa48("1424");
        setAnchorEl(event.currentTarget);
      }
    };
    const handleClose = () => {
      if (stryMutAct_9fa48("1425")) {
        {}
      } else {
        stryCov_9fa48("1425");
        setAnchorEl(null);
      }
    };
    const handelEdit = () => {
      if (stryMutAct_9fa48("1426")) {
        {}
      } else {
        stryCov_9fa48("1426");
        const {
          group
        } = lesson;
        const {
          id,
          period,
          dayOfWeek,
          evenOdd
        } = itemData;
        const editObj = stryMutAct_9fa48("1427") ? {} : (stryCov_9fa48("1427"), {
          id,
          dayOfWeek,
          periodId: period.id,
          evenOdd,
          semesterId: lesson.semesterId
        });
        checkRoomAvailability(editObj);
        selectByGroupId(group.id);
        openDialogWithData(stryMutAct_9fa48("1428") ? {} : (stryCov_9fa48("1428"), {
          type: actionType.UPDATED,
          item: editObj,
          groupId: group.id
        }));
        handleClose();
      }
    };
    const handelDelete = () => {
      if (stryMutAct_9fa48("1429")) {
        {}
      } else {
        stryCov_9fa48("1429");
        const {
          group
        } = lesson;
        deleteScheduleItem(itemData.id);
        selectByGroupId(group.id);
        getLessonsByGroupId(group.id);
        handleClose();
      }
    };
    return <Card className="schedule-item">
            <Button aria-controls="simple-menu" className="schedule-item-menu" onClick={handleClick}>
                <IoMdMore title="more" className="svg-btn delete-btn" />
            </Button>
            <Menu className="action-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem className="edit-item" onClick={handelEdit}>
                    {t(COMMON_EDIT)}
                </MenuItem>
                <MenuItem className="delete-item" onClick={handelDelete}>
                    {t(COMMON_DELETE_HOVER_TITLE)}
                </MenuItem>
            </Menu>
            <h5 className="lesson-title">{lesson.subjectForSite}</h5>
            <LessonTypeBadge lessonType={lesson.lessonType} showIcon={stryMutAct_9fa48("1430") ? true : (stryCov_9fa48("1430"), false)} size="small" />
            <p className="teacher-name">{getTeacherName(lesson.teacher)}</p>
            {stryMutAct_9fa48("1433") ? lesson.grouped || <MdGroup title={t(FORM_GROUPED_LABEL)} className="svg-btn copy-btn grouped-icon align-left info-btn" /> : stryMutAct_9fa48("1432") ? false : stryMutAct_9fa48("1431") ? true : (stryCov_9fa48("1431", "1432", "1433"), lesson.grouped && <MdGroup title={t(FORM_GROUPED_LABEL)} className="svg-btn copy-btn grouped-icon align-left info-btn" />)}
            <p className="lesson-duration" style={stryMutAct_9fa48("1434") ? {} : (stryCov_9fa48("1434"), {
        color: stryMutAct_9fa48("1435") ? "" : (stryCov_9fa48("1435"), '#757575')
      })}>
                {stryMutAct_9fa48("1438") ? itemData.room?.name && '—' : stryMutAct_9fa48("1437") ? false : stryMutAct_9fa48("1436") ? true : (stryCov_9fa48("1436", "1437", "1438"), (stryMutAct_9fa48("1439") ? itemData.room.name : (stryCov_9fa48("1439"), itemData.room?.name)) || (stryMutAct_9fa48("1440") ? "" : (stryCov_9fa48("1440"), '—')))}
            </p>
        </Card>;
  }
};
export default ScheduleItem;