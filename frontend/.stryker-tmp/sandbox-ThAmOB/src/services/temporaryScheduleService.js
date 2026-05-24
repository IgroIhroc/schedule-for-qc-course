// @ts-nocheck
///// this functionality doesn't' work yet
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
import axios from '../helper/axios';
import { errorHandler, successHandler } from '../helper/handlerAxios';
import i18n from '../i18n';
import { store } from '../store';
import { TEACHER_TEMPORARY_SCHEDULE, TEMPORARY_SCHEDULE_RANGE_URL, TEMPORARY_SCHEDULE_URL } from '../constants/axios';
import { actionType } from '../constants/actionTypes';
import { setLoadingService } from './loadingService';
import { selectTeacherId, selectTemporarySchedule, selectVacation, setSchedulesAndTemporarySchedules, setTemporarySchedules } from '../actions/index';
import { resetFormHandler } from '../helper/formHelper';
import { TEMPORARY_SCHEDULE_FORM, TEMPORARY_SCHEDULE_VACATION_FORM } from '../constants/reduxForms';
import { BACK_END_SUCCESS_OPERATION } from '../constants/translationLabels/serviceMessages';
import { FORM_TEMPORARY_SCHEDULE_LABEL } from '../constants/translationLabels/formElements';
const handleSuccessMessage = action => {
  if (stryMutAct_9fa48("8159")) {
    {}
  } else {
    stryCov_9fa48("8159");
    return i18n.t(BACK_END_SUCCESS_OPERATION, stryMutAct_9fa48("8160") ? {} : (stryCov_9fa48("8160"), {
      cardType: i18n.t(FORM_TEMPORARY_SCHEDULE_LABEL),
      actionType: i18n.t(stryMutAct_9fa48("8161") ? `` : (stryCov_9fa48("8161"), `serviceMessages:${action}_label`))
    }));
  }
};
export const getTemporarySchedulesService = (from, to) => {
  if (stryMutAct_9fa48("8162")) {
    {}
  } else {
    stryCov_9fa48("8162");
    axios.get(TEMPORARY_SCHEDULE_URL, stryMutAct_9fa48("8163") ? {} : (stryCov_9fa48("8163"), {
      params: stryMutAct_9fa48("8164") ? {} : (stryCov_9fa48("8164"), {
        from,
        to
      })
    })).then(response => {
      if (stryMutAct_9fa48("8165")) {
        {}
      } else {
        stryCov_9fa48("8165");
        store.dispatch(setSchedulesAndTemporarySchedules(stryMutAct_9fa48("8166") ? ["Stryker was here"] : (stryCov_9fa48("8166"), [])));
        store.dispatch(setTemporarySchedules(response.data));
        setLoadingService(stryMutAct_9fa48("8167") ? true : (stryCov_9fa48("8167"), false));
      }
    }).catch(err => {
      if (stryMutAct_9fa48("8168")) {
        {}
      } else {
        stryCov_9fa48("8168");
        errorHandler(err);
        setLoadingService(stryMutAct_9fa48("8169") ? true : (stryCov_9fa48("8169"), false));
      }
    });
  }
};
export const getTeacherTemporarySchedulesService = (teacherId, from, to) => {
  if (stryMutAct_9fa48("8170")) {
    {}
  } else {
    stryCov_9fa48("8170");
    axios.get(TEACHER_TEMPORARY_SCHEDULE, stryMutAct_9fa48("8171") ? {} : (stryCov_9fa48("8171"), {
      params: stryMutAct_9fa48("8172") ? {} : (stryCov_9fa48("8172"), {
        teacherId,
        from,
        to
      })
    })).then(response => {
      if (stryMutAct_9fa48("8173")) {
        {}
      } else {
        stryCov_9fa48("8173");
        store.dispatch(setTemporarySchedules(stryMutAct_9fa48("8174") ? ["Stryker was here"] : (stryCov_9fa48("8174"), [])));
        store.dispatch(setSchedulesAndTemporarySchedules(response.data));
        setLoadingService(stryMutAct_9fa48("8175") ? true : (stryCov_9fa48("8175"), false));
      }
    }).catch(err => {
      if (stryMutAct_9fa48("8176")) {
        {}
      } else {
        stryCov_9fa48("8176");
        errorHandler(err);
        setLoadingService(stryMutAct_9fa48("8177") ? true : (stryCov_9fa48("8177"), false));
      }
    });
  }
};
export const deleteTemporaryScheduleService = (temporaryScheduleId, date, teacherId) => {
  if (stryMutAct_9fa48("8178")) {
    {}
  } else {
    stryCov_9fa48("8178");
    axios.delete(stryMutAct_9fa48("8179") ? `` : (stryCov_9fa48("8179"), `${TEMPORARY_SCHEDULE_URL}/${temporaryScheduleId}`)).then(() => {
      if (stryMutAct_9fa48("8180")) {
        {}
      } else {
        stryCov_9fa48("8180");
        if (stryMutAct_9fa48("8182") ? false : stryMutAct_9fa48("8181") ? true : (stryCov_9fa48("8181", "8182"), teacherId)) getTeacherTemporarySchedulesService(teacherId, date, date);else getTemporarySchedulesService(null, null);
        successHandler(handleSuccessMessage(actionType.DELETED));
      }
    }).catch(err => {
      if (stryMutAct_9fa48("8183")) {
        {}
      } else {
        stryCov_9fa48("8183");
        errorHandler(err);
      }
    });
  }
};
const formatObj = (formValues, teacherId) => {
  if (stryMutAct_9fa48("8184")) {
    {}
  } else {
    stryCov_9fa48("8184");
    let obj = {};
    if (stryMutAct_9fa48("8186") ? false : stryMutAct_9fa48("8185") ? true : (stryCov_9fa48("8185", "8186"), teacherId)) obj = stryMutAct_9fa48("8187") ? {} : (stryCov_9fa48("8187"), {
      teacher: stryMutAct_9fa48("8188") ? {} : (stryCov_9fa48("8188"), {
        id: teacherId
      })
    });else if (stryMutAct_9fa48("8190") ? false : stryMutAct_9fa48("8189") ? true : (stryCov_9fa48("8189", "8190"), formValues.teacher)) obj = stryMutAct_9fa48("8191") ? {} : (stryCov_9fa48("8191"), {
      teacher: stryMutAct_9fa48("8192") ? {} : (stryCov_9fa48("8192"), {
        id: formValues.teacher
      })
    });
    if (stryMutAct_9fa48("8195") ? !formValues.vacation && formValues.vacation && formValues.scheduleId : stryMutAct_9fa48("8194") ? false : stryMutAct_9fa48("8193") ? true : (stryCov_9fa48("8193", "8194", "8195"), (stryMutAct_9fa48("8196") ? formValues.vacation : (stryCov_9fa48("8196"), !formValues.vacation)) || (stryMutAct_9fa48("8198") ? formValues.vacation || formValues.scheduleId : stryMutAct_9fa48("8197") ? false : (stryCov_9fa48("8197", "8198"), formValues.vacation && formValues.scheduleId)))) obj = stryMutAct_9fa48("8199") ? {} : (stryCov_9fa48("8199"), {
      ...obj,
      id: formValues.id ? formValues.id : null,
      class: stryMutAct_9fa48("8200") ? {} : (stryCov_9fa48("8200"), {
        id: formValues.period
      }),
      date: formValues.date,
      group: stryMutAct_9fa48("8201") ? {} : (stryCov_9fa48("8201"), {
        id: formValues.group
      }),
      lessonType: formValues.lessonType,
      room: stryMutAct_9fa48("8202") ? {} : (stryCov_9fa48("8202"), {
        id: formValues.room
      }),
      schedule: stryMutAct_9fa48("8203") ? {} : (stryCov_9fa48("8203"), {
        id: formValues.scheduleId
      }),
      semester: stryMutAct_9fa48("8204") ? {} : (stryCov_9fa48("8204"), {
        id: formValues.semester
      }),
      subject: stryMutAct_9fa48("8205") ? {} : (stryCov_9fa48("8205"), {
        id: formValues.subject
      }),
      subjectForSite: formValues.subjectForSite,
      linkToMeeting: formValues.linkToMeeting
    });
    return obj;
  }
};
const handleSuccess = (isVacation, teacherId, formValues) => {
  if (stryMutAct_9fa48("8206")) {
    {}
  } else {
    stryCov_9fa48("8206");
    store.dispatch(selectTemporarySchedule({}));
    store.dispatch(selectVacation({}));
    if (stryMutAct_9fa48("8209") ? !isVacation && isVacation && formValues.scheduleId : stryMutAct_9fa48("8208") ? false : stryMutAct_9fa48("8207") ? true : (stryCov_9fa48("8207", "8208", "8209"), (stryMutAct_9fa48("8210") ? isVacation : (stryCov_9fa48("8210"), !isVacation)) || (stryMutAct_9fa48("8212") ? isVacation || formValues.scheduleId : stryMutAct_9fa48("8211") ? false : (stryCov_9fa48("8211", "8212"), isVacation && formValues.scheduleId)))) {
      if (stryMutAct_9fa48("8213")) {
        {}
      } else {
        stryCov_9fa48("8213");
        resetFormHandler(TEMPORARY_SCHEDULE_FORM);
        getTeacherTemporarySchedulesService(teacherId, formValues.date, formValues.date);
      }
    } else {
      if (stryMutAct_9fa48("8214")) {
        {}
      } else {
        stryCov_9fa48("8214");
        resetFormHandler(TEMPORARY_SCHEDULE_VACATION_FORM);
        store.dispatch(selectTeacherId(null));
        getTemporarySchedulesService(null, null);
      }
    }
  }
};
export const addTemporaryScheduleService = (teacherId, formValues, isVacation) => {
  if (stryMutAct_9fa48("8215")) {
    {}
  } else {
    stryCov_9fa48("8215");
    const bufferFormValues = formValues;
    bufferFormValues.date = bufferFormValues.date.replace(/\//g, stryMutAct_9fa48("8216") ? "" : (stryCov_9fa48("8216"), '-'));
    const obj = formatObj(bufferFormValues, teacherId);
    axios.post(TEMPORARY_SCHEDULE_URL, stryMutAct_9fa48("8217") ? {} : (stryCov_9fa48("8217"), {
      ...bufferFormValues,
      ...obj
    })).then(() => {
      if (stryMutAct_9fa48("8218")) {
        {}
      } else {
        stryCov_9fa48("8218");
        handleSuccess(isVacation, teacherId, formValues);
        successHandler(handleSuccessMessage(actionType.CREATED));
      }
    }).catch(err => {
      if (stryMutAct_9fa48("8219")) {
        {}
      } else {
        stryCov_9fa48("8219");
        errorHandler(err);
      }
    });
  }
};
export const addTemporaryScheduleForRangeService = (teacherId, formValues, isVacation) => {
  if (stryMutAct_9fa48("8220")) {
    {}
  } else {
    stryCov_9fa48("8220");
    const bufferFormValues = formValues;
    bufferFormValues.from = bufferFormValues.from.replace(/\//g, stryMutAct_9fa48("8221") ? "" : (stryCov_9fa48("8221"), '-'));
    bufferFormValues.to = bufferFormValues.to.replace(/\//g, stryMutAct_9fa48("8222") ? "" : (stryCov_9fa48("8222"), '-'));
    const obj = formatObj(bufferFormValues, teacherId);
    axios.post(TEMPORARY_SCHEDULE_RANGE_URL, stryMutAct_9fa48("8223") ? {} : (stryCov_9fa48("8223"), {
      from: bufferFormValues.from,
      to: bufferFormValues.to,
      temporary_schedule: stryMutAct_9fa48("8224") ? {} : (stryCov_9fa48("8224"), {
        ...bufferFormValues,
        ...obj
      })
    })).then(() => {
      if (stryMutAct_9fa48("8225")) {
        {}
      } else {
        stryCov_9fa48("8225");
        handleSuccess(isVacation, teacherId, formValues);
        successHandler(handleSuccessMessage(actionType.CREATED));
      }
    }).catch(err => {
      if (stryMutAct_9fa48("8226")) {
        {}
      } else {
        stryCov_9fa48("8226");
        errorHandler(err);
      }
    });
  }
};
export const editTemporaryScheduleService = (teacherId, formValues, isVacation) => {
  if (stryMutAct_9fa48("8227")) {
    {}
  } else {
    stryCov_9fa48("8227");
    const bufferFormValues = formValues;
    bufferFormValues.date = bufferFormValues.date.replace(/\//g, stryMutAct_9fa48("8228") ? "" : (stryCov_9fa48("8228"), '-'));
    const obj = formatObj(bufferFormValues, teacherId);
    axios.put(TEMPORARY_SCHEDULE_URL, stryMutAct_9fa48("8229") ? {} : (stryCov_9fa48("8229"), {
      ...bufferFormValues,
      ...obj
    })).then(() => {
      if (stryMutAct_9fa48("8230")) {
        {}
      } else {
        stryCov_9fa48("8230");
        const tId = stryMutAct_9fa48("8233") ? teacherId && bufferFormValues.teacher : stryMutAct_9fa48("8232") ? false : stryMutAct_9fa48("8231") ? true : (stryCov_9fa48("8231", "8232", "8233"), teacherId || bufferFormValues.teacher);
        handleSuccess(isVacation, tId, bufferFormValues);
        successHandler(handleSuccessMessage(actionType.UPDATED));
      }
    }).catch(err => {
      if (stryMutAct_9fa48("8234")) {
        {}
      } else {
        stryCov_9fa48("8234");
        errorHandler(err);
      }
    });
  }
};
export const selectTemporaryScheduleService = temporarySchedule => {
  if (stryMutAct_9fa48("8235")) {
    {}
  } else {
    stryCov_9fa48("8235");
    store.dispatch(selectVacation({}));
    store.dispatch(selectTemporarySchedule(temporarySchedule));
  }
};
export const selectVacationService = vacation => {
  if (stryMutAct_9fa48("8236")) {
    {}
  } else {
    stryCov_9fa48("8236");
    store.dispatch(selectTemporarySchedule({}));
    store.dispatch(selectVacation(vacation));
  }
};
export const selectTeacherIdService = teacherId => {
  if (stryMutAct_9fa48("8237")) {
    {}
  } else {
    stryCov_9fa48("8237");
    store.dispatch(selectTeacherId(teacherId));
  }
};