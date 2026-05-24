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
import { useTranslation } from 'react-i18next';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { TEMPORARY_SCHEDULE_FORM } from '../../../constants/reduxForms';
import Card from '../../../share/Card/Card';
import renderCheckboxField from '../../../share/renderedFields/checkbox';
import SelectField from '../../../share/renderedFields/select';
import renderTextField from '../../../share/renderedFields/input';
import { handleTeacherInfo } from '../../../helper/renderTeacher';
import { setValueToSubjectForSiteHandler, setValueToTeacherForSiteHandler } from '../../../helper/reduxFormHelper';
import { maxLengthValue, required } from '../../../validation/validateFields';
import { selectTemporaryScheduleService } from '../../../services/temporaryScheduleService';
import { CLASS_LABEL, CLEAR_BUTTON_LABEL, CREATE_TEMPORARY_SCHEDULE_FORM, EDIT_TEMPORARY_SCHEDULE_FORM, FOR_SITE_LABEL, GROUP_LABEL, ROOM_LABEL, SAVE_BUTTON_LABEL, SUBJECT_LABEL, TEACHER_LABEL } from '../../../constants/translationLabels/formElements';
import { COMMON_HOLIDAY_LABEL, COMMON_NOTIFY_LABEL, TYPE_LABEL } from '../../../constants/translationLabels/common';
const TemporaryScheduleForm = props => {
  if (stryMutAct_9fa48("3973")) {
    {}
  } else {
    stryCov_9fa48("3973");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("3974") ? "" : (stryCov_9fa48("3974"), 'formElements'));
    const {
      handleSubmit,
      invalid,
      reset,
      submitting,
      temporarySchedule,
      teachers,
      periods,
      rooms,
      subjects,
      lessonTypes,
      groups,
      initialize
    } = props;
    const [isVacation, setIsVacation] = useState(stryMutAct_9fa48("3975") ? true : (stryCov_9fa48("3975"), false));
    const [notify, setNotify] = useState(stryMutAct_9fa48("3976") ? true : (stryCov_9fa48("3976"), false));
    const scheduleId = stryMutAct_9fa48("3977") ? temporarySchedule.scheduleId : (stryCov_9fa48("3977"), temporarySchedule?.scheduleId);
    const temporaryScheduleId = stryMutAct_9fa48("3978") ? temporarySchedule.id : (stryCov_9fa48("3978"), temporarySchedule?.id);
    const initializeFormHandler = temporaryScheduleData => {
      if (stryMutAct_9fa48("3979")) {
        {}
      } else {
        stryCov_9fa48("3979");
        setIsVacation(temporaryScheduleData.vacation);
        initialize(stryMutAct_9fa48("3980") ? {} : (stryCov_9fa48("3980"), {
          vacation: isVacation,
          teacher: temporaryScheduleData.teacher.id,
          semester: temporaryScheduleData.semester.id,
          subject: temporaryScheduleData.subject.id,
          group: temporaryScheduleData.group.id,
          room: temporaryScheduleData.room.id,
          period: temporaryScheduleData.class.id,
          lessonType: temporaryScheduleData.lessonType,
          teacherForSite: temporaryScheduleData.teacherForSite,
          subjectForSite: temporaryScheduleData.subjectForSite,
          date: temporaryScheduleData.date,
          id: temporaryScheduleData.id,
          scheduleId: temporaryScheduleData.scheduleId
        }));
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("3981")) {
        {}
      } else {
        stryCov_9fa48("3981");
        if (stryMutAct_9fa48("3984") ? temporaryScheduleId && scheduleId : stryMutAct_9fa48("3983") ? false : stryMutAct_9fa48("3982") ? true : (stryCov_9fa48("3982", "3983", "3984"), temporaryScheduleId || scheduleId)) {
          if (stryMutAct_9fa48("3985")) {
            {}
          } else {
            stryCov_9fa48("3985");
            initializeFormHandler(temporarySchedule);
          }
        } else {
          if (stryMutAct_9fa48("3986")) {
            {}
          } else {
            stryCov_9fa48("3986");
            initialize(stryMutAct_9fa48("3987") ? {} : (stryCov_9fa48("3987"), {
              vacation: isVacation
            }));
          }
        }
      }
    }, stryMutAct_9fa48("3988") ? [] : (stryCov_9fa48("3988"), [temporaryScheduleId]));
    const handleVacationChange = stryMutAct_9fa48("3989") ? () => undefined : (stryCov_9fa48("3989"), (() => {
      const handleVacationChange = event => setIsVacation(event.target.checked);
      return handleVacationChange;
    })());
    const handleNotifyChange = stryMutAct_9fa48("3990") ? () => undefined : (stryCov_9fa48("3990"), (() => {
      const handleNotifyChange = event => setNotify(event.target.checked);
      return handleNotifyChange;
    })());
    return <Card additionClassName="form-card">
            <>
                <h2 className="form-title under-line">
                    {(stryMutAct_9fa48("3991") ? temporarySchedule.scheduleId : (stryCov_9fa48("3991"), !temporarySchedule.scheduleId)) ? t(EDIT_TEMPORARY_SCHEDULE_FORM) : t(CREATE_TEMPORARY_SCHEDULE_FORM)}
                </h2>
                <form onSubmit={handleSubmit}>
                    <Field name="vacation" label={t(COMMON_HOLIDAY_LABEL)} component={renderCheckboxField} checked={isVacation} onChange={handleVacationChange} color="primary" />
                    <Field name="teacher" className="form-field" component={SelectField} label={t(TEACHER_LABEL)} validate={stryMutAct_9fa48("3992") ? [] : (stryCov_9fa48("3992"), [required])} disabled={isVacation} onChange={event => {
            if (stryMutAct_9fa48("3993")) {
              {}
            } else {
              stryCov_9fa48("3993");
              if (stryMutAct_9fa48("3995") ? false : stryMutAct_9fa48("3994") ? true : (stryCov_9fa48("3994", "3995"), event.target.value)) setValueToTeacherForSiteHandler(teachers, event.target.value, props.change);else props.change(stryMutAct_9fa48("3996") ? "" : (stryCov_9fa48("3996"), 'teacherForSite'), stryMutAct_9fa48("3997") ? "Stryker was here!" : (stryCov_9fa48("3997"), ''));
            }
          }}>
                        <option value="" />
                        {teachers.map(stryMutAct_9fa48("3998") ? () => undefined : (stryCov_9fa48("3998"), teacher => <option value={teacher.id} key={teacher.id}>
                                {handleTeacherInfo(teacher)}
                            </option>))}
                    </Field>
                    <Field name="subject" className="form-field" component={SelectField} label={t(SUBJECT_LABEL)} validate={stryMutAct_9fa48("3999") ? [] : (stryCov_9fa48("3999"), [required])} disabled={isVacation} onChange={event => {
            if (stryMutAct_9fa48("4000")) {
              {}
            } else {
              stryCov_9fa48("4000");
              setValueToSubjectForSiteHandler(subjects, event.target.value, props.change);
            }
          }}>
                        <option value="" />
                        {subjects.map(stryMutAct_9fa48("4001") ? () => undefined : (stryCov_9fa48("4001"), subject => <option key={subject.id} value={subject.id}>
                                {subject.name}
                            </option>))}
                    </Field>
                    <Field name="group" className="form-field" component={SelectField} label={t(GROUP_LABEL)} validate={stryMutAct_9fa48("4002") ? [] : (stryCov_9fa48("4002"), [required])} disabled={isVacation}>
                        <option value="" />
                        {groups.map(stryMutAct_9fa48("4003") ? () => undefined : (stryCov_9fa48("4003"), group => <option key={group.id} value={group.id}>
                                {group.title}
                            </option>))}
                    </Field>
                    <Field name="lessonType" className="form-field" component={SelectField} label={t(TYPE_LABEL)} validate={stryMutAct_9fa48("4004") ? [] : (stryCov_9fa48("4004"), [required])} disabled={isVacation}>
                        <option value="" />
                        {lessonTypes.map(stryMutAct_9fa48("4005") ? () => undefined : (stryCov_9fa48("4005"), lessonType => <option value={lessonType} key={lessonType}>
                                {t(stryMutAct_9fa48("4006") ? `` : (stryCov_9fa48("4006"), `formElements:lesson_type_${stryMutAct_9fa48("4007") ? lessonType.toUpperCase() : (stryCov_9fa48("4007"), lessonType.toLowerCase())}_label`))}
                            </option>))}
                    </Field>
                    <Field name="room" className="form-field" component={SelectField} label={t(ROOM_LABEL)} validate={stryMutAct_9fa48("4008") ? [] : (stryCov_9fa48("4008"), [required])} disabled={isVacation}>
                        <option value="" />
                        {rooms.map(stryMutAct_9fa48("4009") ? () => undefined : (stryCov_9fa48("4009"), room => <option value={room.id} key={room.id}>
                                {room.name}
                            </option>))}
                    </Field>
                    <Field name="period" className="form-field" component={SelectField} label={t(CLASS_LABEL)} validate={stryMutAct_9fa48("4010") ? [] : (stryCov_9fa48("4010"), [required])} disabled={isVacation}>
                        <option value="" />
                        {periods.map(stryMutAct_9fa48("4011") ? () => undefined : (stryCov_9fa48("4011"), period => <option value={period.id} key={period.id}>
                                {period.startTime} - {period.endTime}
                            </option>))}
                    </Field>
                    <Field name="teacherForSite" className="form-field" multiline rowsMax="1" margin="normal" component={renderTextField} label={stryMutAct_9fa48("4012") ? t(TEACHER_LABEL) - t(FOR_SITE_LABEL) : (stryCov_9fa48("4012"), t(TEACHER_LABEL) + t(FOR_SITE_LABEL))} validate={stryMutAct_9fa48("4013") ? [] : (stryCov_9fa48("4013"), [required, maxLengthValue])} disabled={isVacation} />
                    <Field name="subjectForSite" className="form-field" multiline rowsMax="1" margin="normal" component={renderTextField} label={stryMutAct_9fa48("4014") ? t(SUBJECT_LABEL) - t(FOR_SITE_LABEL) : (stryCov_9fa48("4014"), t(SUBJECT_LABEL) + t(FOR_SITE_LABEL))} validate={stryMutAct_9fa48("4015") ? [] : (stryCov_9fa48("4015"), [required, maxLengthValue])} disabled={isVacation} />
                    <Field name="notify" label={t(COMMON_NOTIFY_LABEL)} component={renderCheckboxField} checked={notify} onChange={handleNotifyChange} color="primary" />
                    <Hidden smUp smDown xsDown xsUp>
                        <Field name="date" component={renderTextField} />
                        <Field name="id" component={renderTextField} />
                        <Field name="scheduleId" component={renderTextField} />
                        <Field name="semester" component={renderTextField} />
                    </Hidden>
                    <div className="form-buttons-container">
                        <Button className="buttons-style" type="submit" variant="contained" color="primary" disabled={stryMutAct_9fa48("4018") ? invalid && submitting : stryMutAct_9fa48("4017") ? false : stryMutAct_9fa48("4016") ? true : (stryCov_9fa48("4016", "4017", "4018"), invalid || submitting)}>
                            {t(SAVE_BUTTON_LABEL)}
                        </Button>
                        <Button className="buttons-style" type="button" variant="contained" disabled={stryMutAct_9fa48("4021") ? invalid && submitting : stryMutAct_9fa48("4020") ? false : stryMutAct_9fa48("4019") ? true : (stryCov_9fa48("4019", "4020", "4021"), invalid || submitting)} onClick={() => {
              if (stryMutAct_9fa48("4022")) {
                {}
              } else {
                stryCov_9fa48("4022");
                reset();
                selectTemporaryScheduleService({});
              }
            }}>
                            {t(CLEAR_BUTTON_LABEL)}
                        </Button>
                    </div>
                </form>
            </>
        </Card>;
  }
};
const TemporaryScheduleReduxForm = reduxForm(stryMutAct_9fa48("4023") ? {} : (stryCov_9fa48("4023"), {
  form: TEMPORARY_SCHEDULE_FORM
}))(TemporaryScheduleForm);
export default TemporaryScheduleReduxForm;