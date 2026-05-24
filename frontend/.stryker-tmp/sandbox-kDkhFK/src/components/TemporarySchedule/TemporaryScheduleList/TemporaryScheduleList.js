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
import { FaEdit, MdDelete } from 'react-icons/all';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import shortId from 'shortid';
import Card from '../../../share/Card/Card';
import CustomDialog from '../../../containers/Dialogs/CustomDialog';
import { dialogTypes } from '../../../constants/dialogs';
import { deleteTemporaryScheduleService, selectTemporaryScheduleService, selectVacationService } from '../../../services/temporaryScheduleService';
import { setIsOpenConfirmDialog } from '../../../actions/dialog';
import { cardType } from '../../../constants/cardType';
import TemporaryScheduleCard from '../TemporaryScheduleCard/TemporaryScheduleCard';
import { getTeacherForSite } from '../../../helper/renderTeacher';
import { DATE_LABEL, DELETE_HOVER_TITLE, EDIT_HOVER_TITLE, FOR_ALL, HOLIDAY_LABEL } from '../../../constants/translationLabels/common';
const TemporaryScheduleList = props => {
  if (stryMutAct_9fa48("4024")) {
    {}
  } else {
    stryCov_9fa48("4024");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("4025") ? "" : (stryCov_9fa48("4025"), 'common'));
    const {
      isOpenConfirmDialog,
      setOpenConfirmDialog
    } = props;
    const temporarySchedules = stryMutAct_9fa48("4028") ? props.temporarySchedules && [] : stryMutAct_9fa48("4027") ? false : stryMutAct_9fa48("4026") ? true : (stryCov_9fa48("4026", "4027", "4028"), props.temporarySchedules || (stryMutAct_9fa48("4029") ? ["Stryker was here"] : (stryCov_9fa48("4029"), [])));
    const [temporaryScheduleId, setTemporaryScheduleId] = useState(stryMutAct_9fa48("4030") ? +1 : (stryCov_9fa48("4030"), -1));
    const handleClickOpen = id => {
      if (stryMutAct_9fa48("4031")) {
        {}
      } else {
        stryCov_9fa48("4031");
        setTemporaryScheduleId(id);
        setOpenConfirmDialog(stryMutAct_9fa48("4032") ? false : (stryCov_9fa48("4032"), true));
      }
    };
    const handleDelete = id => {
      if (stryMutAct_9fa48("4033")) {
        {}
      } else {
        stryCov_9fa48("4033");
        setOpenConfirmDialog(stryMutAct_9fa48("4034") ? true : (stryCov_9fa48("4034"), false));
        deleteTemporaryScheduleService(id, null, null);
      }
    };
    return <main className="container-flex-wrap">
            <CustomDialog handelConfirm={stryMutAct_9fa48("4035") ? () => undefined : (stryCov_9fa48("4035"), () => handleDelete(temporaryScheduleId))} type={dialogTypes.DELETE_CONFIRM} whatDelete={cardType.TEMPORARY_SCHEDULE} open={isOpenConfirmDialog} />

            {temporarySchedules.map(stryMutAct_9fa48("4036") ? () => undefined : (stryCov_9fa48("4036"), temporarySchedule => <Card additionClassName={stryMutAct_9fa48("4037") ? `` : (stryCov_9fa48("4037"), `done-card${temporarySchedule.vacation ? stryMutAct_9fa48("4038") ? "" : (stryCov_9fa48("4038"), ' vacation-card') : stryMutAct_9fa48("4039") ? "Stryker was here!" : (stryCov_9fa48("4039"), '')}`)} key={shortId.generate()}>
                    <div className="cards-btns">
                        <FaEdit title={t(EDIT_HOVER_TITLE)} className="svg-btn edit-btn" onClick={stryMutAct_9fa48("4040") ? () => undefined : (stryCov_9fa48("4040"), () => temporarySchedule.vacation ? selectVacationService(temporarySchedule) : selectTemporaryScheduleService(temporarySchedule))} />
                        <MdDelete title={t(DELETE_HOVER_TITLE)} className="svg-btn delete-btn" onClick={() => {
            if (stryMutAct_9fa48("4041")) {
              {}
            } else {
              stryCov_9fa48("4041");
              handleClickOpen(temporarySchedule.id);
            }
          }} />
                    </div>
                    {(stryMutAct_9fa48("4042") ? temporarySchedule.vacation : (stryCov_9fa48("4042"), !temporarySchedule.vacation)) ? <>
                            <TemporaryScheduleCard schedule={temporarySchedule} />
                        </> : <>
                            <h2>{t(HOLIDAY_LABEL)}</h2>
                            <p>
                                (
                                {(stryMutAct_9fa48("4043") ? temporarySchedule.teacher.name : (stryCov_9fa48("4043"), temporarySchedule.teacher?.name)) ? getTeacherForSite(temporarySchedule.teacher) : t(FOR_ALL)}
                                )
                            </p>
                            <Divider />
                        </>}
                    <p>
                        {stryMutAct_9fa48("4046") ? !temporarySchedule.vacation || <>{t(DATE_LABEL)} :</> : stryMutAct_9fa48("4045") ? false : stryMutAct_9fa48("4044") ? true : (stryCov_9fa48("4044", "4045", "4046"), (stryMutAct_9fa48("4047") ? temporarySchedule.vacation : (stryCov_9fa48("4047"), !temporarySchedule.vacation)) && <>{t(DATE_LABEL)} :</>)}
                        <b>{temporarySchedule.date}</b>
                    </p>
                </Card>))}
        </main>;
  }
};
const mapStateToProps = stryMutAct_9fa48("4048") ? () => undefined : (stryCov_9fa48("4048"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("4049") ? {} : (stryCov_9fa48("4049"), {
    isOpenConfirmDialog: state.dialog.isOpenConfirmDialog
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("4050") ? () => undefined : (stryCov_9fa48("4050"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("4051") ? {} : (stryCov_9fa48("4051"), {
    setOpenConfirmDialog: stryMutAct_9fa48("4052") ? () => undefined : (stryCov_9fa48("4052"), newState => dispatch(setIsOpenConfirmDialog(newState)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(TemporaryScheduleList);