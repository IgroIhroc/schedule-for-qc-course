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
import './GroupPage.scss';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@material-ui/core';
import { goToGroupPage } from '../../helper/pageRedirection';
import { dialogTypes } from '../../constants/dialogs';
import { GROUP_Y_LABEL } from '../../constants/translationLabels/formElements';
import { search } from '../../helper/search';
import GroupCard from './GroupCard/GroupCard';
import NotFound from '../../share/NotFound/NotFound';
import CustomDialog from '../../containers/Dialogs/CustomDialog';
import AddStudentDialog from '../../share/DialogWindows/_dialogWindows/AddStudentDialog';
import ShowStudentsOnGroupDialog from '../../containers/Students/ShowStudentsOnGroupDialog';
import { ADD_STUDENT_ACTION, SHOW_STUDENTS_ACTION } from '../../constants/actionsUrl';
import { DraggableCard } from '../../share/DraggableCard/DraggableCard';
const GroupList = props => {
  if (stryMutAct_9fa48("1612")) {
    {}
  } else {
    stryCov_9fa48("1612");
    const {
      getEnabledGroupsStart,
      getDisabledGroupsStart,
      setIsOpenConfirmDialog,
      dragAndDropGroupStart,
      toggleDisabledStatus,
      isOpenConfirmDialog,
      selectGroupSuccess,
      deleteGroupStart,
      searchItem,
      loading,
      groups,
      match,
      setGroup,
      isDisabled
    } = props;
    const history = useHistory();
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1613") ? "" : (stryCov_9fa48("1613"), 'formElements'));
    const [groupId, setGroupId] = useState(stryMutAct_9fa48("1614") ? +1 : (stryCov_9fa48("1614"), -1));
    const [confirmDialogType, setConfirmDialogType] = useState(stryMutAct_9fa48("1615") ? "Stryker was here!" : (stryCov_9fa48("1615"), ''));
    const [isOpenShowStudentsDialog, setIsOpenShowStudentsDialog] = useState(stryMutAct_9fa48("1616") ? true : (stryCov_9fa48("1616"), false));
    const [isOpenAddStudentDialog, setIsOpenAddStudentDialog] = useState(stryMutAct_9fa48("1617") ? true : (stryCov_9fa48("1617"), false));
    const [dragGroup, setGroupStart] = useState();
    useEffect(() => {
      if (stryMutAct_9fa48("1618")) {
        {}
      } else {
        stryCov_9fa48("1618");
        if (stryMutAct_9fa48("1620") ? false : stryMutAct_9fa48("1619") ? true : (stryCov_9fa48("1619", "1620"), isDisabled)) {
          if (stryMutAct_9fa48("1621")) {
            {}
          } else {
            stryCov_9fa48("1621");
            getDisabledGroupsStart();
          }
        } else {
          if (stryMutAct_9fa48("1622")) {
            {}
          } else {
            stryCov_9fa48("1622");
            getEnabledGroupsStart();
          }
        }
      }
    }, stryMutAct_9fa48("1623") ? [] : (stryCov_9fa48("1623"), [isDisabled]));
    const visibleGroups = search(groups, searchItem, stryMutAct_9fa48("1624") ? [] : (stryCov_9fa48("1624"), [stryMutAct_9fa48("1625") ? "" : (stryCov_9fa48("1625"), 'title')]));
    const showConfirmDialog = (currentId, disabledStatus) => {
      if (stryMutAct_9fa48("1626")) {
        {}
      } else {
        stryCov_9fa48("1626");
        setGroupId(currentId);
        setConfirmDialogType(disabledStatus);
        setIsOpenConfirmDialog(stryMutAct_9fa48("1627") ? false : (stryCov_9fa48("1627"), true));
      }
    };
    const acceptConfirmDialog = currentGroupId => {
      if (stryMutAct_9fa48("1628")) {
        {}
      } else {
        stryCov_9fa48("1628");
        setIsOpenConfirmDialog(stryMutAct_9fa48("1629") ? true : (stryCov_9fa48("1629"), false));
        if (stryMutAct_9fa48("1632") ? confirmDialogType === dialogTypes.DELETE_CONFIRM : stryMutAct_9fa48("1631") ? false : stryMutAct_9fa48("1630") ? true : (stryCov_9fa48("1630", "1631", "1632"), confirmDialogType !== dialogTypes.DELETE_CONFIRM)) {
          if (stryMutAct_9fa48("1633")) {
            {}
          } else {
            stryCov_9fa48("1633");
            toggleDisabledStatus(currentGroupId, isDisabled);
          }
        } else deleteGroupStart(currentGroupId);
      }
    };
    const showAddStudentDialog = currentGroupId => {
      if (stryMutAct_9fa48("1634")) {
        {}
      } else {
        stryCov_9fa48("1634");
        setGroupId(currentGroupId);
        setIsOpenAddStudentDialog(stryMutAct_9fa48("1635") ? false : (stryCov_9fa48("1635"), true));
      }
    };
    const showStudentsByGroup = currentGroupId => {
      if (stryMutAct_9fa48("1636")) {
        {}
      } else {
        stryCov_9fa48("1636");
        setGroupId(currentGroupId);
        selectGroupSuccess(currentGroupId);
        setIsOpenShowStudentsDialog(stryMutAct_9fa48("1637") ? false : (stryCov_9fa48("1637"), true));
      }
    };
    const closeShowStudentsByGroup = () => {
      if (stryMutAct_9fa48("1638")) {
        {}
      } else {
        stryCov_9fa48("1638");
        goToGroupPage(history);
        setIsOpenShowStudentsDialog(stryMutAct_9fa48("1639") ? true : (stryCov_9fa48("1639"), false));
      }
    };
    const dragAndDropItem = afterItemId => {
      if (stryMutAct_9fa48("1640")) {
        {}
      } else {
        stryCov_9fa48("1640");
        dragAndDropGroupStart(dragGroup, afterItemId);
      }
    };
    const checkParamsForActions = () => {
      if (stryMutAct_9fa48("1641")) {
        {}
      } else {
        stryCov_9fa48("1641");
        const {
          id,
          action
        } = match.params;
        const checkParamsAndSetActions = stryMutAct_9fa48("1642") ? {} : (stryCov_9fa48("1642"), {
          [ADD_STUDENT_ACTION]: showAddStudentDialog,
          [SHOW_STUDENTS_ACTION]: showStudentsByGroup
        });
        const actionsFunc = checkParamsAndSetActions[action];
        if (stryMutAct_9fa48("1645") ? actionsFunc || id : stryMutAct_9fa48("1644") ? false : stryMutAct_9fa48("1643") ? true : (stryCov_9fa48("1643", "1644", "1645"), actionsFunc && id)) actionsFunc(id);
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("1646")) {
        {}
      } else {
        stryCov_9fa48("1646");
        checkParamsForActions();
      }
    }, stryMutAct_9fa48("1647") ? ["Stryker was here"] : (stryCov_9fa48("1647"), []));
    if (stryMutAct_9fa48("1649") ? false : stryMutAct_9fa48("1648") ? true : (stryCov_9fa48("1648", "1649"), loading)) {
      if (stryMutAct_9fa48("1650")) {
        {}
      } else {
        stryCov_9fa48("1650");
        return <section className="centered-container">
                <CircularProgress />
            </section>;
      }
    }
    if (stryMutAct_9fa48("1652") ? false : stryMutAct_9fa48("1651") ? true : (stryCov_9fa48("1651", "1652"), isEmpty(visibleGroups))) {
      if (stryMutAct_9fa48("1653")) {
        {}
      } else {
        stryCov_9fa48("1653");
        return <NotFound name={t(GROUP_Y_LABEL)} />;
      }
    }
    return <>
            <CustomDialog type={confirmDialogType} handelConfirm={stryMutAct_9fa48("1654") ? () => undefined : (stryCov_9fa48("1654"), () => acceptConfirmDialog(groupId))} whatDelete="group" open={isOpenConfirmDialog} />
            {stryMutAct_9fa48("1657") ? isOpenAddStudentDialog || <AddStudentDialog groups={groups} groupId={groupId} open={isOpenAddStudentDialog} setOpen={setIsOpenAddStudentDialog} /> : stryMutAct_9fa48("1656") ? false : stryMutAct_9fa48("1655") ? true : (stryCov_9fa48("1655", "1656", "1657"), isOpenAddStudentDialog && <AddStudentDialog groups={groups} groupId={groupId} open={isOpenAddStudentDialog} setOpen={setIsOpenAddStudentDialog} />)}
            {stryMutAct_9fa48("1660") ? isOpenShowStudentsDialog || <ShowStudentsOnGroupDialog match={match} groupId={groupId} open={isOpenShowStudentsDialog} onClose={closeShowStudentsByGroup} /> : stryMutAct_9fa48("1659") ? false : stryMutAct_9fa48("1658") ? true : (stryCov_9fa48("1658", "1659", "1660"), isOpenShowStudentsDialog && <ShowStudentsOnGroupDialog match={match} groupId={groupId} open={isOpenShowStudentsDialog} onClose={closeShowStudentsByGroup} />)}
            <div className="group-list">
                {visibleGroups.map(stryMutAct_9fa48("1661") ? () => undefined : (stryCov_9fa48("1661"), item => <DraggableCard key={item.id} item={item} setGroupStart={setGroupStart} dragAndDropItem={dragAndDropItem}>
                        <GroupCard group={item} setGroup={setGroup} disabled={isDisabled} showConfirmDialog={showConfirmDialog} showAddStudentDialog={showAddStudentDialog} showStudentsByGroup={showStudentsByGroup} />
                    </DraggableCard>))}
            </div>
        </>;
  }
};
export default GroupList;