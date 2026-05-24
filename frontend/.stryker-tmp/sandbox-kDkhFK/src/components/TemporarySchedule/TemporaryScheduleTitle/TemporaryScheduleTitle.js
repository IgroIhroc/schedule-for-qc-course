/* eslint-disable */
// @ts-nocheck

// this functionality doesn't work
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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import MomentUtils from '@date-io/moment';
import * as moment from 'moment';
import Divider from '@material-ui/core/Divider';
import { temporaryScheduleRadioTypes } from '../../../constants/temporaryScheduleRadioTypes';
import { dateFormat } from '../../../constants/formats';
import { getTeacherTemporarySchedulesService, getTemporarySchedulesService, selectTeacherIdService } from '../../../services/temporaryScheduleService';
import { handleTeacherInfo } from '../../../helper/renderTeacher';
import { FORM_CLASS_FROM_LABEL, FORM_CLASS_TO_LABEL, FORM_SEMESTER_LABEL, FORM_TEACHER_LABEL } from '../../../constants/translationLabels/formElements';
import { DATE_LABEL, FEW_DAYS_LABEL, HOLIDAY_LABEL, ONE_DAY_LABEL, TEMPORARY_SCHEDULE_FOR_TEACHER_TITLE } from '../../../constants/translationLabels/common';
const useStyles = makeStyles(stryMutAct_9fa48("4053") ? {} : (stryCov_9fa48("4053"), {
  teacherField: stryMutAct_9fa48("4054") ? {} : (stryCov_9fa48("4054"), {
    width: stryMutAct_9fa48("4055") ? "" : (stryCov_9fa48("4055"), '250px')
  }),
  dateGroup: stryMutAct_9fa48("4056") ? {} : (stryCov_9fa48("4056"), {
    display: stryMutAct_9fa48("4057") ? "" : (stryCov_9fa48("4057"), 'flex'),
    margin: stryMutAct_9fa48("4058") ? "" : (stryCov_9fa48("4058"), '0 auto'),
    width: stryMutAct_9fa48("4059") ? "" : (stryCov_9fa48("4059"), '250px'),
    justifyContent: stryMutAct_9fa48("4060") ? "" : (stryCov_9fa48("4060"), 'space-between')
  }),
  dateField: stryMutAct_9fa48("4061") ? {} : (stryCov_9fa48("4061"), {
    width: stryMutAct_9fa48("4062") ? "" : (stryCov_9fa48("4062"), '120px'),
    margin: stryMutAct_9fa48("4063") ? "" : (stryCov_9fa48("4063"), '0')
  }),
  day: stryMutAct_9fa48("4064") ? {} : (stryCov_9fa48("4064"), {
    width: stryMutAct_9fa48("4065") ? "" : (stryCov_9fa48("4065"), '250px'),
    margin: stryMutAct_9fa48("4066") ? "" : (stryCov_9fa48("4066"), '0')
  }),
  button: stryMutAct_9fa48("4067") ? {} : (stryCov_9fa48("4067"), {
    width: stryMutAct_9fa48("4068") ? "" : (stryCov_9fa48("4068"), '250px'),
    margin: stryMutAct_9fa48("4069") ? "" : (stryCov_9fa48("4069"), '0 auto')
  }),
  panel: stryMutAct_9fa48("4070") ? {} : (stryCov_9fa48("4070"), {
    width: stryMutAct_9fa48("4071") ? "" : (stryCov_9fa48("4071"), '300px'),
    margin: stryMutAct_9fa48("4072") ? "" : (stryCov_9fa48("4072"), '0 auto')
  }),
  block: stryMutAct_9fa48("4073") ? {} : (stryCov_9fa48("4073"), {
    display: stryMutAct_9fa48("4074") ? "" : (stryCov_9fa48("4074"), 'block')
  }),
  legendBlock: stryMutAct_9fa48("4075") ? {} : (stryCov_9fa48("4075"), {
    textAlign: stryMutAct_9fa48("4076") ? "" : (stryCov_9fa48("4076"), 'left'),
    margin: stryMutAct_9fa48("4077") ? "" : (stryCov_9fa48("4077"), '10px 0')
  }),
  legend: stryMutAct_9fa48("4078") ? {} : (stryCov_9fa48("4078"), {
    display: stryMutAct_9fa48("4079") ? "" : (stryCov_9fa48("4079"), 'inline-block'),
    width: stryMutAct_9fa48("4080") ? "" : (stryCov_9fa48("4080"), '10px'),
    height: stryMutAct_9fa48("4081") ? "" : (stryCov_9fa48("4081"), '10px'),
    backgroundColor: stryMutAct_9fa48("4082") ? "" : (stryCov_9fa48("4082"), '#F5DEB3')
  })
}));
const TemporaryScheduleTitle = props => {
  if (stryMutAct_9fa48("4083")) {
    {}
  } else {
    stryCov_9fa48("4083");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("4084") ? "" : (stryCov_9fa48("4084"), 'common'));
    const classes = useStyles();
    const [day, setDay] = useState(null);
    const [radio, setRadio] = useState(temporaryScheduleRadioTypes.SEMESTER);
    const {
      teachers,
      teacherId,
      toDate,
      setToDate,
      fromDate,
      setFromDate
    } = props;
    useEffect(() => {
      if (stryMutAct_9fa48("4085")) {
        {}
      } else {
        stryCov_9fa48("4085");
        if (stryMutAct_9fa48("4088") ? radio !== temporaryScheduleRadioTypes.SEMESTER : stryMutAct_9fa48("4087") ? false : stryMutAct_9fa48("4086") ? true : (stryCov_9fa48("4086", "4087", "4088"), radio === temporaryScheduleRadioTypes.SEMESTER)) getTemporarySchedulesService(null, null);
      }
    }, stryMutAct_9fa48("4089") ? ["Stryker was here"] : (stryCov_9fa48("4089"), []));
    const handleChange = event => {
      if (stryMutAct_9fa48("4090")) {
        {}
      } else {
        stryCov_9fa48("4090");
        if (stryMutAct_9fa48("4093") ? event.target.value !== temporaryScheduleRadioTypes.SEMESTER : stryMutAct_9fa48("4092") ? false : stryMutAct_9fa48("4091") ? true : (stryCov_9fa48("4091", "4092", "4093"), event.target.value === temporaryScheduleRadioTypes.SEMESTER)) selectTeacherIdService(null);
        setToDate(stryMutAct_9fa48("4094") ? true : (stryCov_9fa48("4094"), false));
        setFromDate(stryMutAct_9fa48("4095") ? true : (stryCov_9fa48("4095"), false));
        setDay(stryMutAct_9fa48("4096") ? true : (stryCov_9fa48("4096"), false));
        setRadio(event.target.value);
      }
    };
    const handleDayChange = date => {
      if (stryMutAct_9fa48("4097")) {
        {}
      } else {
        stryCov_9fa48("4097");
        setFromDate(null);
        setToDate(null);
        setDay(moment(date, dateFormat).format(dateFormat));
      }
    };
    const handleFromDateChange = date => {
      if (stryMutAct_9fa48("4098")) {
        {}
      } else {
        stryCov_9fa48("4098");
        setDay(null);
        setFromDate(moment(date, dateFormat).format(dateFormat));
      }
    };
    const handleToDateChange = date => {
      if (stryMutAct_9fa48("4099")) {
        {}
      } else {
        stryCov_9fa48("4099");
        setDay(null);
        setToDate(moment(date, dateFormat).format(dateFormat));
      }
    };
    const handleClick = () => {
      if (stryMutAct_9fa48("4100")) {
        {}
      } else {
        stryCov_9fa48("4100");
        let fDate;
        let tDate;
        switch (radio) {
          case temporaryScheduleRadioTypes.SEMESTER:
            if (stryMutAct_9fa48("4101")) {} else {
              stryCov_9fa48("4101");
              fDate = null;
              tDate = null;
              break;
            }
          case temporaryScheduleRadioTypes.FEW_DAYS:
            if (stryMutAct_9fa48("4102")) {} else {
              stryCov_9fa48("4102");
              fDate = fromDate;
              tDate = toDate;
              break;
            }
          case temporaryScheduleRadioTypes.ONE_DAY:
            if (stryMutAct_9fa48("4103")) {} else {
              stryCov_9fa48("4103");
              fDate = day;
              tDate = day;
              break;
            }
          default:
            if (stryMutAct_9fa48("4104")) {} else {
              stryCov_9fa48("4104");
              tDate = null;
              fDate = null;
            }
        }
        if (stryMutAct_9fa48("4106") ? false : stryMutAct_9fa48("4105") ? true : (stryCov_9fa48("4105", "4106"), teacherId)) {
          if (stryMutAct_9fa48("4107")) {
            {}
          } else {
            stryCov_9fa48("4107");
            getTeacherTemporarySchedulesService(teacherId, fDate, tDate);
          }
        } else {
          if (stryMutAct_9fa48("4108")) {
            {}
          } else {
            stryCov_9fa48("4108");
            getTemporarySchedulesService(fDate, tDate);
          }
        }
      }
    };
    const defaultProps = stryMutAct_9fa48("4109") ? {} : (stryCov_9fa48("4109"), {
      options: teachers,
      getOptionLabel: stryMutAct_9fa48("4110") ? () => undefined : (stryCov_9fa48("4110"), option => option ? handleTeacherInfo(option) : stryMutAct_9fa48("4111") ? "Stryker was here!" : (stryCov_9fa48("4111"), ''))
    });
    const handleFindTeacher = id => {
      if (stryMutAct_9fa48("4112")) {
        {}
      } else {
        stryCov_9fa48("4112");
        if (stryMutAct_9fa48("4114") ? false : stryMutAct_9fa48("4113") ? true : (stryCov_9fa48("4113", "4114"), id)) return teachers.find(stryMutAct_9fa48("4115") ? () => undefined : (stryCov_9fa48("4115"), teacher => stryMutAct_9fa48("4118") ? teacher.id !== id : stryMutAct_9fa48("4117") ? false : stryMutAct_9fa48("4116") ? true : (stryCov_9fa48("4116", "4117", "4118"), teacher.id === id)));
        return stryMutAct_9fa48("4119") ? "Stryker was here!" : (stryCov_9fa48("4119"), '');
      }
    };
    const handleTeacherSelect = teacher => {
      if (stryMutAct_9fa48("4120")) {
        {}
      } else {
        stryCov_9fa48("4120");
        if (stryMutAct_9fa48("4122") ? false : stryMutAct_9fa48("4121") ? true : (stryCov_9fa48("4121", "4122"), teacher)) selectTeacherIdService(teacher.id);
      }
    };
    return <section className={classes.panel}>
            <ExpansionPanel>
                <ExpansionPanelSummary aria-controls='panel1a-content'>
                    <Typography className={classes.heading}>
                        {t(TEMPORARY_SCHEDULE_FOR_TEACHER_TITLE)}
                    </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.block}>
                    <Divider />
                    <div className={classes.legendBlock}>
                        <div className={classes.legend} /> - {t(HOLIDAY_LABEL)}
                    </div>
                    <Divider />
                    <RadioGroup className={classes.dateGroup} value={radio} onChange={handleChange}>
                        <FormControlLabel value={temporaryScheduleRadioTypes.SEMESTER} control={<Radio color='primary' />} label={t(FORM_SEMESTER_LABEL)} />
                        <FormControlLabel value={temporaryScheduleRadioTypes.FEW_DAYS} control={<Radio color='primary' />} label={t(FEW_DAYS_LABEL)} />
                        <FormControlLabel value={temporaryScheduleRadioTypes.ONE_DAY} control={<Radio color='primary' />} label={t(ONE_DAY_LABEL)} />
                    </RadioGroup>
                    {stryMutAct_9fa48("4125") ? radio !== temporaryScheduleRadioTypes.SEMESTER || <MuiPickersUtilsProvider utils={MomentUtils}>
                            {radio === temporaryScheduleRadioTypes.FEW_DAYS ? <div className={classes.dateGroup}>
                                    <DatePicker margin='normal' label={t(FORM_CLASS_FROM_LABEL)} format={dateFormat} className={classes.dateField} value={fromDate ? moment(fromDate, dateFormat).toDate() : null} onChange={handleFromDateChange} />
                                    <DatePicker margin='normal' className={classes.dateField} label={t(FORM_CLASS_TO_LABEL)} format={dateFormat} value={toDate ? moment(toDate, dateFormat).toDate() : null} onChange={handleToDateChange} />
                                </div> : <DatePicker margin='normal' className={classes.day} label={t(DATE_LABEL)} format={dateFormat} value={day ? moment(day, dateFormat).toDate() : null} onChange={handleDayChange} />}
                        </MuiPickersUtilsProvider> : stryMutAct_9fa48("4124") ? false : stryMutAct_9fa48("4123") ? true : (stryCov_9fa48("4123", "4124", "4125"), (stryMutAct_9fa48("4127") ? radio === temporaryScheduleRadioTypes.SEMESTER : stryMutAct_9fa48("4126") ? true : (stryCov_9fa48("4126", "4127"), radio !== temporaryScheduleRadioTypes.SEMESTER)) && <MuiPickersUtilsProvider utils={MomentUtils}>
                            {(stryMutAct_9fa48("4130") ? radio !== temporaryScheduleRadioTypes.FEW_DAYS : stryMutAct_9fa48("4129") ? false : stryMutAct_9fa48("4128") ? true : (stryCov_9fa48("4128", "4129", "4130"), radio === temporaryScheduleRadioTypes.FEW_DAYS)) ? <div className={classes.dateGroup}>
                                    <DatePicker margin='normal' label={t(FORM_CLASS_FROM_LABEL)} format={dateFormat} className={classes.dateField} value={fromDate ? moment(fromDate, dateFormat).toDate() : null} onChange={handleFromDateChange} />
                                    <DatePicker margin='normal' className={classes.dateField} label={t(FORM_CLASS_TO_LABEL)} format={dateFormat} value={toDate ? moment(toDate, dateFormat).toDate() : null} onChange={handleToDateChange} />
                                </div> : <DatePicker margin='normal' className={classes.day} label={t(DATE_LABEL)} format={dateFormat} value={day ? moment(day, dateFormat).toDate() : null} onChange={handleDayChange} />}
                        </MuiPickersUtilsProvider>)}
                    {stryMutAct_9fa48("4133") ? radio !== temporaryScheduleRadioTypes.SEMESTER || <Autocomplete {...defaultProps} clearOnEscape openOnFocus value={handleFindTeacher(teacherId)} onChange={(event, newValue) => {
            if (!newValue) handleTeacherSelect({});else handleTeacherSelect(newValue);
          }} renderInput={params => <TextField {...params} className={classes.teacherField} label={t(FORM_TEACHER_LABEL)} margin='normal' />} /> : stryMutAct_9fa48("4132") ? false : stryMutAct_9fa48("4131") ? true : (stryCov_9fa48("4131", "4132", "4133"), (stryMutAct_9fa48("4135") ? radio === temporaryScheduleRadioTypes.SEMESTER : stryMutAct_9fa48("4134") ? true : (stryCov_9fa48("4134", "4135"), radio !== temporaryScheduleRadioTypes.SEMESTER)) && <Autocomplete {...defaultProps} clearOnEscape openOnFocus value={handleFindTeacher(teacherId)} onChange={(event, newValue) => {
            if (stryMutAct_9fa48("4136")) {
              {}
            } else {
              stryCov_9fa48("4136");
              if (stryMutAct_9fa48("4139") ? false : stryMutAct_9fa48("4138") ? true : stryMutAct_9fa48("4137") ? newValue : (stryCov_9fa48("4137", "4138", "4139"), !newValue)) handleTeacherSelect({});else handleTeacherSelect(newValue);
            }
          }} renderInput={stryMutAct_9fa48("4140") ? () => undefined : (stryCov_9fa48("4140"), params => <TextField {...params} className={classes.teacherField} label={t(FORM_TEACHER_LABEL)} margin='normal' />)} />)}

                    <Button variant='contained' className={classes.button} color='primary' onClick={handleClick} disabled={stryMutAct_9fa48("4143") ? (!toDate || !fromDate) && !day || !teacherId || !temporaryScheduleRadioTypes.SEMESTER : stryMutAct_9fa48("4142") ? false : stryMutAct_9fa48("4141") ? true : (stryCov_9fa48("4141", "4142", "4143"), (stryMutAct_9fa48("4145") ? (!toDate || !fromDate) && !day && !teacherId : stryMutAct_9fa48("4144") ? true : (stryCov_9fa48("4144", "4145"), (stryMutAct_9fa48("4147") ? !toDate || !fromDate || !day : stryMutAct_9fa48("4146") ? false : (stryCov_9fa48("4146", "4147"), (stryMutAct_9fa48("4149") ? !toDate && !fromDate : stryMutAct_9fa48("4148") ? true : (stryCov_9fa48("4148", "4149"), (stryMutAct_9fa48("4150") ? toDate : (stryCov_9fa48("4150"), !toDate)) || (stryMutAct_9fa48("4151") ? fromDate : (stryCov_9fa48("4151"), !fromDate)))) && (stryMutAct_9fa48("4152") ? day : (stryCov_9fa48("4152"), !day)))) || (stryMutAct_9fa48("4153") ? teacherId : (stryCov_9fa48("4153"), !teacherId)))) && (stryMutAct_9fa48("4154") ? temporaryScheduleRadioTypes.SEMESTER : (stryCov_9fa48("4154"), !temporaryScheduleRadioTypes.SEMESTER)))}>
                        Search
                    </Button>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </section>;
  }
};
export default TemporaryScheduleTitle;