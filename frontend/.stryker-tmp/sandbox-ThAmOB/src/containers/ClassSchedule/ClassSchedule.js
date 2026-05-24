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
import { connect } from 'react-redux';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import ClassForm from '../../components/ClassForm/ClassForm';
import Card from '../../share/Card/Card';
import CustomDialog from '../Dialogs/CustomDialog';
import { dialogTypes } from '../../constants/dialogs';
import { cardType } from '../../constants/cardType';
import { classFormHandler, clearClassScheduleSuccess, deleteClassScheduleStart, getClassScheduleByIdStart, getClassScheduleListStart } from '../../actions/classes';
import { setIsOpenConfirmDialog } from '../../actions/dialog';
import { handleSnackbarOpenService } from '../../services/snackbarService';
import { snackbarTypes } from '../../constants/snackbarTypes';
import { CLASS_FROM_LABEL, CLASS_LABEL, CLASS_TO_LABEL, MAX_COUNT_CLASSES_REACHED } from '../../constants/translationLabels/formElements';
import { COMMON_DELETE_HOVER_TITLE, COMMON_EDIT_HOVER_TITLE } from '../../constants/translationLabels/common';
const ClassSchedule = props => {
  if (stryMutAct_9fa48("4939")) {
    {}
  } else {
    stryCov_9fa48("4939");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("4940") ? "" : (stryCov_9fa48("4940"), 'formElements'));
    const {
      isOpenConfirmDialog,
      setOpenConfirmDialog,
      formHandler,
      getClassScheduleList,
      deleteClassSchedule,
      getClassScheduleById,
      clearClassSchedule
    } = props;
    const [classId, setClassId] = useState(stryMutAct_9fa48("4941") ? +1 : (stryCov_9fa48("4941"), -1));
    useEffect(() => {
      if (stryMutAct_9fa48("4942")) {
        {}
      } else {
        stryCov_9fa48("4942");
        getClassScheduleList();
      }
    }, stryMutAct_9fa48("4943") ? ["Stryker was here"] : (stryCov_9fa48("4943"), []));
    const submit = values => {
      if (stryMutAct_9fa48("4944")) {
        {}
      } else {
        stryCov_9fa48("4944");
        if (stryMutAct_9fa48("4947") ? !values.id || props.classScheduler.length >= 7 : stryMutAct_9fa48("4946") ? false : stryMutAct_9fa48("4945") ? true : (stryCov_9fa48("4945", "4946", "4947"), (stryMutAct_9fa48("4948") ? values.id : (stryCov_9fa48("4948"), !values.id)) && (stryMutAct_9fa48("4951") ? props.classScheduler.length < 7 : stryMutAct_9fa48("4950") ? props.classScheduler.length > 7 : stryMutAct_9fa48("4949") ? true : (stryCov_9fa48("4949", "4950", "4951"), props.classScheduler.length >= 7)))) return handleSnackbarOpenService(stryMutAct_9fa48("4952") ? false : (stryCov_9fa48("4952"), true), snackbarTypes.ERROR, t(MAX_COUNT_CLASSES_REACHED));
        return formHandler(values);
      }
    };
    const handleEdit = id => {
      if (stryMutAct_9fa48("4953")) {
        {}
      } else {
        stryCov_9fa48("4953");
        getClassScheduleById(id);
      }
    };
    const handleClickOpen = id => {
      if (stryMutAct_9fa48("4954")) {
        {}
      } else {
        stryCov_9fa48("4954");
        setClassId(id);
        setOpenConfirmDialog(stryMutAct_9fa48("4955") ? false : (stryCov_9fa48("4955"), true));
      }
    };
    const handleDelete = id => {
      if (stryMutAct_9fa48("4956")) {
        {}
      } else {
        stryCov_9fa48("4956");
        setOpenConfirmDialog(stryMutAct_9fa48("4957") ? true : (stryCov_9fa48("4957"), false));
        deleteClassSchedule(id);
      }
    };
    return <div className="cards-container">
            <CustomDialog type={dialogTypes.DELETE_CONFIRM} handelConfirm={stryMutAct_9fa48("4958") ? () => undefined : (stryCov_9fa48("4958"), () => handleDelete(classId))} whatDelete={stryMutAct_9fa48("4959") ? cardType.CLASS.toUpperCase() : (stryCov_9fa48("4959"), cardType.CLASS.toLowerCase())} open={isOpenConfirmDialog} />

            <ClassForm onSubmit={submit} onReset={clearClassSchedule} />
            <section className="container-flex-wrap">
                {props.classScheduler.map(stryMutAct_9fa48("4960") ? () => undefined : (stryCov_9fa48("4960"), schedule => <Card additionClassName="class-card-width" key={schedule.id}>
                        <div className="cards-btns">
                            <FaEdit className="svg-btn" title={t(COMMON_EDIT_HOVER_TITLE)} onClick={stryMutAct_9fa48("4961") ? () => undefined : (stryCov_9fa48("4961"), () => handleEdit(schedule.id))} />
                            <MdDelete className="svg-btn" title={t(COMMON_DELETE_HOVER_TITLE)} onClick={stryMutAct_9fa48("4962") ? () => undefined : (stryCov_9fa48("4962"), () => handleClickOpen(schedule.id))} />
                        </div>
                        <p>
                            {t(CLASS_LABEL)}: {schedule.class_name}
                        </p>
                        <p>
                            {t(CLASS_FROM_LABEL)} - {t(CLASS_TO_LABEL)}
                        </p>
                        <p>
                            {schedule.startTime} - {schedule.endTime}
                        </p>
                    </Card>))}
            </section>
        </div>;
  }
};
const mapStateToProps = stryMutAct_9fa48("4963") ? () => undefined : (stryCov_9fa48("4963"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("4964") ? {} : (stryCov_9fa48("4964"), {
    classScheduler: state.classActions.classScheduler,
    isOpenConfirmDialog: state.dialog.isOpenConfirmDialog
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("4965") ? () => undefined : (stryCov_9fa48("4965"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("4966") ? {} : (stryCov_9fa48("4966"), {
    setOpenConfirmDialog: stryMutAct_9fa48("4967") ? () => undefined : (stryCov_9fa48("4967"), newState => dispatch(setIsOpenConfirmDialog(newState))),
    formHandler: stryMutAct_9fa48("4968") ? () => undefined : (stryCov_9fa48("4968"), values => dispatch(classFormHandler(values))),
    getClassScheduleList: stryMutAct_9fa48("4969") ? () => undefined : (stryCov_9fa48("4969"), () => dispatch(getClassScheduleListStart())),
    deleteClassSchedule: stryMutAct_9fa48("4970") ? () => undefined : (stryCov_9fa48("4970"), id => dispatch(deleteClassScheduleStart(id))),
    getClassScheduleById: stryMutAct_9fa48("4971") ? () => undefined : (stryCov_9fa48("4971"), id => dispatch(getClassScheduleByIdStart(id))),
    clearClassSchedule: stryMutAct_9fa48("4972") ? () => undefined : (stryCov_9fa48("4972"), () => dispatch(clearClassScheduleSuccess()))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(ClassSchedule);