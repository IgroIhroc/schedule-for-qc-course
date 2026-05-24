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
import { useTranslation } from 'react-i18next';
import CircularProgress from '@material-ui/core/CircularProgress';
import TemporaryScheduleForm from '../../components/TemporarySchedule/TemporaryScheduleForm/TemporaryScheduleForm';
import ScheduleAndTemporaryScheduleList from '../../components/TemporarySchedule/ScheduleAndTemporaryScheduleList/ScheduleAndTemporaryScheduleList';
import TemporaryScheduleTitle from '../../components/TemporarySchedule/TemporaryScheduleTitle/TemporaryScheduleTitle';
import TemporaryScheduleList from '../../components/TemporarySchedule/TemporaryScheduleList/TemporaryScheduleList';
import TemporaryScheduleVacationForm from '../../components/TemporarySchedule/TemporaryScheduleVacationForm/TemporaryScheduleVacationForm';
import Card from '../../share/Card/Card';
import { setLoadingService } from '../../services/loadingService';
import { addTemporaryScheduleForRangeService, addTemporaryScheduleService, editTemporaryScheduleService } from '../../services/temporaryScheduleService';
import { getClassScheduleListStart } from '../../actions/classes';
import { showAllSubjectsService } from '../../services/subjectService';
import './TemporarySchedule.scss';
import { EMPTY_LABEL } from '../../constants/translationLabels/common';
import { getEnabledGroupsStart, getLessonTypesStart } from '../../actions';
import { getListOfRoomsStart } from '../../actions/rooms';
import { showAllTeachersStart } from '../../actions/teachers';
const TemporarySchedule = props => {
  if (stryMutAct_9fa48("5417")) {
    {}
  } else {
    stryCov_9fa48("5417");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("5418") ? "" : (stryCov_9fa48("5418"), 'common'));
    const {
      teachers,
      teacherId,
      isLoading,
      getListOfRooms,
      getClassScheduleList,
      getEnabledGroups,
      showAllTeachers
    } = props;
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    useEffect(() => {
      if (stryMutAct_9fa48("5419")) {
        {}
      } else {
        stryCov_9fa48("5419");
        setLoadingService(stryMutAct_9fa48("5420") ? false : (stryCov_9fa48("5420"), true));
        getListOfRooms();
        showAllTeachers();
        showAllSubjectsService();
        getClassScheduleList();
        getLessonTypesStart();
        getEnabledGroups();
      }
    }, stryMutAct_9fa48("5421") ? ["Stryker was here"] : (stryCov_9fa48("5421"), []));
    const handleTemporaryScheduleSubmit = values => {
      if (stryMutAct_9fa48("5422")) {
        {}
      } else {
        stryCov_9fa48("5422");
        if (stryMutAct_9fa48("5424") ? false : stryMutAct_9fa48("5423") ? true : (stryCov_9fa48("5423", "5424"), values.id)) editTemporaryScheduleService(teacherId, values);else addTemporaryScheduleService(teacherId, values, stryMutAct_9fa48("5425") ? true : (stryCov_9fa48("5425"), false));
      }
    };
    const handleTemporaryScheduleVacationSubmit = values => {
      if (stryMutAct_9fa48("5426")) {
        {}
      } else {
        stryCov_9fa48("5426");
        const addVacation = stryMutAct_9fa48("5427") ? {} : (stryCov_9fa48("5427"), {
          ...values,
          vacation: stryMutAct_9fa48("5428") ? false : (stryCov_9fa48("5428"), true)
        });
        if (stryMutAct_9fa48("5431") ? !values.from && !values.to || values.id : stryMutAct_9fa48("5430") ? false : stryMutAct_9fa48("5429") ? true : (stryCov_9fa48("5429", "5430", "5431"), (stryMutAct_9fa48("5433") ? !values.from || !values.to : stryMutAct_9fa48("5432") ? true : (stryCov_9fa48("5432", "5433"), (stryMutAct_9fa48("5434") ? values.from : (stryCov_9fa48("5434"), !values.from)) && (stryMutAct_9fa48("5435") ? values.to : (stryCov_9fa48("5435"), !values.to)))) && values.id)) editTemporaryScheduleService(teacherId, addVacation, stryMutAct_9fa48("5436") ? false : (stryCov_9fa48("5436"), true));else if (stryMutAct_9fa48("5439") ? !values.from && !values.to || !values.id : stryMutAct_9fa48("5438") ? false : stryMutAct_9fa48("5437") ? true : (stryCov_9fa48("5437", "5438", "5439"), (stryMutAct_9fa48("5441") ? !values.from || !values.to : stryMutAct_9fa48("5440") ? true : (stryCov_9fa48("5440", "5441"), (stryMutAct_9fa48("5442") ? values.from : (stryCov_9fa48("5442"), !values.from)) && (stryMutAct_9fa48("5443") ? values.to : (stryCov_9fa48("5443"), !values.to)))) && (stryMutAct_9fa48("5444") ? values.id : (stryCov_9fa48("5444"), !values.id)))) addTemporaryScheduleService(teacherId, addVacation, stryMutAct_9fa48("5445") ? false : (stryCov_9fa48("5445"), true));else {
          if (stryMutAct_9fa48("5446")) {
            {}
          } else {
            stryCov_9fa48("5446");
            addTemporaryScheduleForRangeService(teacherId, addVacation, stryMutAct_9fa48("5447") ? false : (stryCov_9fa48("5447"), true));
          }
        }
      }
    };
    return <>
            <Card additionClassName="card-title lesson-card">
                <TemporaryScheduleTitle teacherId={teacherId} teachers={teachers} fromDate={fromDate} setFromDate={setFromDate} toDate={toDate} setToDate={setToDate} />
            </Card>
            <div className="cards-container">
                <aside>
                    {(stryMutAct_9fa48("5450") ? props.temporarySchedule.id && props.temporarySchedule.scheduleId : stryMutAct_9fa48("5449") ? false : stryMutAct_9fa48("5448") ? true : (stryCov_9fa48("5448", "5449", "5450"), props.temporarySchedule.id || props.temporarySchedule.scheduleId)) ? <TemporaryScheduleForm temporarySchedule={props.temporarySchedule} teacherRangeSchedule={props.teacherRangeSchedule} teacherId={teacherId} onSubmit={handleTemporaryScheduleSubmit} lessonTypes={props.lessonTypes} teachers={teachers} rooms={props.rooms} periods={props.periods} subjects={props.subjects} groups={props.groups} /> : <TemporaryScheduleVacationForm teachers={teachers} vacation={props.vacation} onSubmit={handleTemporaryScheduleVacationSubmit} teacherId={teacherId} />}
                </aside>
                {isLoading ? <section className="centered-container">
                        <CircularProgress />
                    </section> : <>
                        {stryMutAct_9fa48("5453") ? props.schedulesAndTemporarySchedules.length > 0 || <ScheduleAndTemporaryScheduleList schedulesAndTemporarySchedules={props.schedulesAndTemporarySchedules} /> : stryMutAct_9fa48("5452") ? false : stryMutAct_9fa48("5451") ? true : (stryCov_9fa48("5451", "5452", "5453"), (stryMutAct_9fa48("5456") ? props.schedulesAndTemporarySchedules.length <= 0 : stryMutAct_9fa48("5455") ? props.schedulesAndTemporarySchedules.length >= 0 : stryMutAct_9fa48("5454") ? true : (stryCov_9fa48("5454", "5455", "5456"), props.schedulesAndTemporarySchedules.length > 0)) && <ScheduleAndTemporaryScheduleList schedulesAndTemporarySchedules={props.schedulesAndTemporarySchedules} />)}
                        {stryMutAct_9fa48("5459") ? props.temporarySchedules.length > 0 || <TemporaryScheduleList temporarySchedules={props.temporarySchedules} /> : stryMutAct_9fa48("5458") ? false : stryMutAct_9fa48("5457") ? true : (stryCov_9fa48("5457", "5458", "5459"), (stryMutAct_9fa48("5462") ? props.temporarySchedules.length <= 0 : stryMutAct_9fa48("5461") ? props.temporarySchedules.length >= 0 : stryMutAct_9fa48("5460") ? true : (stryCov_9fa48("5460", "5461", "5462"), props.temporarySchedules.length > 0)) && <TemporaryScheduleList temporarySchedules={props.temporarySchedules} />)}
                        {stryMutAct_9fa48("5465") ? props.schedulesAndTemporarySchedules.length === 0 && props.temporarySchedules.length === 0 || <section className="centered-container">
                                    <h2>{t(EMPTY_LABEL)}</h2>
                                </section> : stryMutAct_9fa48("5464") ? false : stryMutAct_9fa48("5463") ? true : (stryCov_9fa48("5463", "5464", "5465"), (stryMutAct_9fa48("5467") ? props.schedulesAndTemporarySchedules.length === 0 || props.temporarySchedules.length === 0 : stryMutAct_9fa48("5466") ? true : (stryCov_9fa48("5466", "5467"), (stryMutAct_9fa48("5469") ? props.schedulesAndTemporarySchedules.length !== 0 : stryMutAct_9fa48("5468") ? true : (stryCov_9fa48("5468", "5469"), props.schedulesAndTemporarySchedules.length === 0)) && (stryMutAct_9fa48("5471") ? props.temporarySchedules.length !== 0 : stryMutAct_9fa48("5470") ? true : (stryCov_9fa48("5470", "5471"), props.temporarySchedules.length === 0)))) && <section className="centered-container">
                                    <h2>{t(EMPTY_LABEL)}</h2>
                                </section>)}
                    </>}
            </div>
        </>;
  }
};
const mapStateToProps = stryMutAct_9fa48("5472") ? () => undefined : (stryCov_9fa48("5472"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5473") ? {} : (stryCov_9fa48("5473"), {
    schedulesAndTemporarySchedules: state.temporarySchedule.schedulesAndTemporarySchedules,
    temporarySchedules: state.temporarySchedule.temporarySchedules,
    temporarySchedule: state.temporarySchedule.temporarySchedule,
    vacation: state.temporarySchedule.vacation,
    lessonTypes: state.lesson.lessonTypes,
    subjects: state.subjects.subjects,
    rooms: state.rooms.rooms,
    periods: state.classActions.classScheduler,
    groups: state.groups.groups,
    loading: state.loadingIndicator.loading,
    teachers: state.teachers.teachers,
    teacherId: state.temporarySchedule.teacherId
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5474") ? () => undefined : (stryCov_9fa48("5474"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5475") ? {} : (stryCov_9fa48("5475"), {
    getLessonTypesStart: stryMutAct_9fa48("5476") ? () => undefined : (stryCov_9fa48("5476"), () => dispatch(getLessonTypesStart())),
    getClassScheduleList: stryMutAct_9fa48("5477") ? () => undefined : (stryCov_9fa48("5477"), () => dispatch(getClassScheduleListStart())),
    getEnabledGroups: stryMutAct_9fa48("5478") ? () => undefined : (stryCov_9fa48("5478"), () => dispatch(getEnabledGroupsStart())),
    getListOfRooms: stryMutAct_9fa48("5479") ? () => undefined : (stryCov_9fa48("5479"), rooms => dispatch(getListOfRoomsStart(rooms))),
    showAllTeachers: stryMutAct_9fa48("5480") ? () => undefined : (stryCov_9fa48("5480"), () => dispatch(showAllTeachersStart()))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(TemporarySchedule);