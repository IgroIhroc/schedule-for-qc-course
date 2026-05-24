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
import { MdExpandMore } from 'react-icons/all';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import shortId from 'shortid';
import Card from '../../../share/Card/Card';
import CustomDialog from '../../../containers/Dialogs/CustomDialog';
import TemporaryScheduleCard from '../TemporaryScheduleCard/TemporaryScheduleCard';
import TemporaryScheduleCardButtons from '../TemporaryScheduleCardButtons/TemporaryScheduleCardButtons';
import { cardType } from '../../../constants/cardType';
import { deleteTemporaryScheduleService } from '../../../services/temporaryScheduleService';
import { setIsOpenConfirmDialog } from '../../../actions/dialog';
import { dialogTypes } from '../../../constants/dialogs';
const ScheduleAndTemporaryScheduleList = props => {
  if (stryMutAct_9fa48("3910")) {
    {}
  } else {
    stryCov_9fa48("3910");
    const schedulesAndTemporarySchedules = stryMutAct_9fa48("3913") ? props.schedulesAndTemporarySchedules && [] : stryMutAct_9fa48("3912") ? false : stryMutAct_9fa48("3911") ? true : (stryCov_9fa48("3911", "3912", "3913"), props.schedulesAndTemporarySchedules || (stryMutAct_9fa48("3914") ? ["Stryker was here"] : (stryCov_9fa48("3914"), [])));
    const {
      isOpenConfirmDialog,
      setOpenConfirmDialog
    } = props;
    const [temporaryScheduleId, setTemporaryScheduleId] = useState(stryMutAct_9fa48("3915") ? +1 : (stryCov_9fa48("3915"), -1));
    const [date, setDate] = useState(null);
    const [teacherId, setTeacherId] = useState(null);
    let expandedProp;
    if (stryMutAct_9fa48("3918") ? schedulesAndTemporarySchedules.length !== 1 : stryMutAct_9fa48("3917") ? false : stryMutAct_9fa48("3916") ? true : (stryCov_9fa48("3916", "3917", "3918"), schedulesAndTemporarySchedules.length === 1)) {
      if (stryMutAct_9fa48("3919")) {
        {}
      } else {
        stryCov_9fa48("3919");
        expandedProp = stryMutAct_9fa48("3920") ? {} : (stryCov_9fa48("3920"), {
          expanded: stryMutAct_9fa48("3921") ? false : (stryCov_9fa48("3921"), true)
        });
      }
    }
    const handleClickOpen = id => {
      if (stryMutAct_9fa48("3922")) {
        {}
      } else {
        stryCov_9fa48("3922");
        setTemporaryScheduleId(id);
        setOpenConfirmDialog(stryMutAct_9fa48("3923") ? false : (stryCov_9fa48("3923"), true));
      }
    };
    const handleDelete = id => {
      if (stryMutAct_9fa48("3924")) {
        {}
      } else {
        stryCov_9fa48("3924");
        setOpenConfirmDialog(stryMutAct_9fa48("3925") ? true : (stryCov_9fa48("3925"), false));
        deleteTemporaryScheduleService(id, date, teacherId);
      }
    };
    return <main className="temporary-schedule-section">
            <CustomDialog type={dialogTypes.DELETE_CONFIRM} handelConfirm={stryMutAct_9fa48("3926") ? () => undefined : (stryCov_9fa48("3926"), () => handleDelete(temporaryScheduleId))} whatDelete={stryMutAct_9fa48("3927") ? cardType.TEMPORARY_SCHEDULE.toUpperCase() : (stryCov_9fa48("3927"), cardType.TEMPORARY_SCHEDULE.toLowerCase())} open={isOpenConfirmDialog} />

            {schedulesAndTemporarySchedules.map(stryMutAct_9fa48("3928") ? () => undefined : (stryCov_9fa48("3928"), scheduleAndTemporarySchedule => <ExpansionPanel key={shortId.generate()} {...expandedProp}>
                    <ExpansionPanelSummary expandIcon={<MdExpandMore />} id={stryMutAct_9fa48("3929") ? `` : (stryCov_9fa48("3929"), `panel1a-header${shortId.generate()}`)}>
                        <h2>{scheduleAndTemporarySchedule.date}</h2>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Divider />
                        <section className="temporary-schedule-list">
                            {scheduleAndTemporarySchedule.schedules.map(stryMutAct_9fa48("3930") ? () => undefined : (stryCov_9fa48("3930"), schedule => <section className="temporary-schedule-row" key={shortId.generate()}>
                                    <Card additionClassName={stryMutAct_9fa48("3931") ? `` : (stryCov_9fa48("3931"), `done-card text-center ${stryMutAct_9fa48("3934") ? schedule.schedule.vacation || 'vacation-card ' : stryMutAct_9fa48("3933") ? false : stryMutAct_9fa48("3932") ? true : (stryCov_9fa48("3932", "3933", "3934"), schedule.schedule.vacation && (stryMutAct_9fa48("3935") ? "" : (stryCov_9fa48("3935"), 'vacation-card ')))}`)}>
                                        {stryMutAct_9fa48("3938") ? !schedule.temporary_schedule || <TemporaryScheduleCardButtons schedule={schedule.schedule} date={scheduleAndTemporarySchedule.date} isTemporary={false} scheduleId={schedule.schedule.id} /> : stryMutAct_9fa48("3937") ? false : stryMutAct_9fa48("3936") ? true : (stryCov_9fa48("3936", "3937", "3938"), (stryMutAct_9fa48("3939") ? schedule.temporary_schedule : (stryCov_9fa48("3939"), !schedule.temporary_schedule)) && <TemporaryScheduleCardButtons schedule={schedule.schedule} date={scheduleAndTemporarySchedule.date} isTemporary={stryMutAct_9fa48("3940") ? true : (stryCov_9fa48("3940"), false)} scheduleId={schedule.schedule.id} />)}
                                        <TemporaryScheduleCard schedule={schedule.schedule} />
                                    </Card>
                                    <Divider orientation="vertical" flexItem className="divider" />
                                    {schedule.temporary_schedule ? <Card additionClassName={stryMutAct_9fa48("3941") ? `` : (stryCov_9fa48("3941"), `done-card text-center ${stryMutAct_9fa48("3944") ? schedule.temporary_schedule_vacation || 'vacation-card ' : stryMutAct_9fa48("3943") ? false : stryMutAct_9fa48("3942") ? true : (stryCov_9fa48("3942", "3943", "3944"), schedule.temporary_schedule_vacation && (stryMutAct_9fa48("3945") ? "" : (stryCov_9fa48("3945"), 'vacation-card ')))}`)}>
                                            <TemporaryScheduleCardButtons schedule={schedule.temporary_schedule} date={scheduleAndTemporarySchedule.date} scheduleId={schedule.schedule.id} isTemporary onOpenDialog={handleClickOpen} setDate={setDate} setTeacherId={setTeacherId} />
                                            <TemporaryScheduleCard schedule={schedule.temporary_schedule} />
                                        </Card> : <Card additionClassName="done-card hidden-card">
                                            Hidden
                                        </Card>}
                                </section>))}
                        </section>
                    </ExpansionPanelDetails>
                </ExpansionPanel>))}
        </main>;
  }
};
const mapStateToProps = stryMutAct_9fa48("3946") ? () => undefined : (stryCov_9fa48("3946"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("3947") ? {} : (stryCov_9fa48("3947"), {
    isOpenConfirmDialog: state.dialog.isOpenConfirmDialog
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("3948") ? () => undefined : (stryCov_9fa48("3948"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("3949") ? {} : (stryCov_9fa48("3949"), {
    setOpenConfirmDialog: stryMutAct_9fa48("3950") ? () => undefined : (stryCov_9fa48("3950"), newState => dispatch(setIsOpenConfirmDialog(newState)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleAndTemporaryScheduleList);