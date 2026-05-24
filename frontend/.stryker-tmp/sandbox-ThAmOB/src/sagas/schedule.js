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
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { isEmpty } from 'lodash';
import { addItemToSchedule, setLoading, setScheduleLoading, setSemesterLoading } from '../actions';
import * as actionTypes from '../actions/actionsType';
import { setMainScheduleLoading, setScheduleOperationLoading } from '../actions/loadingIndicator';
import { setScheduleNotPublished, setScheduleDepartment } from '../actions/schedule';
import { CLEAR_SCHEDULE_URL, CURRENT_SEMESTER_URL, DEFAULT_SEMESTER_URL, FOR_TEACHER_SCHEDULE_URL, FULL_SCHEDULE_URL, GROUP_SCHEDULE_URL, PUBLIC_SEMESTERS_URL, ROOMS_AVAILABILITY, SCHEDULE_CHECK_AVAILABILITY_URL, SCHEDULE_ITEM_ROOM_CHANGE, SCHEDULE_ITEMS_URL, SCHEDULE_SEMESTER_ITEMS_URL, SEND_PDF_TO_EMAIL, TEACHER_SCHEDULE_URL } from '../constants/axios';
import { setOpenErrorSnackbar, setOpenSuccessSnackbar } from '../actions/snackbar';
import { COMMON_SCHEDULE_TITLE, NO_CURRENT_SEMESTER_ERROR } from '../constants/translationLabels/common';
import { FORM_SCHEDULE_LABEL } from '../constants/translationLabels/formElements';
import { BACK_END_SUCCESS_OPERATION, CLEARED_LABEL, SERVICE_MESSAGE_SENT_LABEL, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { createErrorMessage, createMessage } from '../utils/sagaUtils';
import { checkAvailabilityScheduleSuccess, deleteScheduleItemSuccess, getAllPublicSemestersSuccess, getCurrentSemesterSuccess, getDefaultSemesterSuccess, getFullScheduleSuccess, getGroupScheduleSuccess, getScheduleItemsSuccess, getTeacherRangeScheduleSuccess, getTeacherScheduleSuccess, setScheduleGroup, setScheduleSemester, setScheduleTeacher, setScheduleType } from '../actions/schedule';
import i18n from '../i18n';
import { axiosCall } from '../services/axios';
import { DELETE, POST, PUT } from '../constants/methods';
import { FULL, GROUP, TEACHER, DEPARTMENT } from '../constants/scheduleTypes';
import { getAllPublicGroups } from './group';
import { getAllPublicTeachers } from './teachers';
export function* getScheduleItemsBySemester({
  semesterId
}) {
  if (stryMutAct_9fa48("7644")) {
    {}
  } else {
    stryCov_9fa48("7644");
    const requestUrl = stryMutAct_9fa48("7645") ? `` : (stryCov_9fa48("7645"), `${SCHEDULE_SEMESTER_ITEMS_URL}?semesterId=${semesterId}`);
    try {
      if (stryMutAct_9fa48("7646")) {
        {}
      } else {
        stryCov_9fa48("7646");
        const {
          data
        } = yield call(axiosCall, requestUrl);
        yield put(getScheduleItemsSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7647")) {
        {}
      } else {
        stryCov_9fa48("7647");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7648")) {
        {}
      } else {
        stryCov_9fa48("7648");
        yield put(setScheduleLoading(stryMutAct_9fa48("7649") ? true : (stryCov_9fa48("7649"), false)));
      }
    }
  }
}
export function* getScheduleItems() {
  if (stryMutAct_9fa48("7650")) {
    {}
  } else {
    stryCov_9fa48("7650");
    try {
      if (stryMutAct_9fa48("7651")) {
        {}
      } else {
        stryCov_9fa48("7651");
        const {
          data
        } = yield call(axiosCall, CURRENT_SEMESTER_URL);
        yield put(getCurrentSemesterSuccess(data));
        const {
          id
        } = data;
        yield call(getScheduleItemsBySemester, stryMutAct_9fa48("7652") ? {} : (stryCov_9fa48("7652"), {
          semesterId: id
        }));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7653")) {
        {}
      } else {
        stryCov_9fa48("7653");
        yield put(setOpenErrorSnackbar(i18n.t(NO_CURRENT_SEMESTER_ERROR)));
        yield put(setLoading(stryMutAct_9fa48("7654") ? true : (stryCov_9fa48("7654"), false)));
      }
    }
  }
}

// let scheduleDataLoaded = false;
//
// export function* getScheduleItems() {
//     try {
//         if (scheduleDataLoaded) {
//             yield put(setScheduleLoading(false));
//             return;
//         }
//
//         const { data } = yield call(axiosCall, CURRENT_SEMESTER_URL);
//         yield put(getCurrentSemesterSuccess(data));
//         const { id } = data;
//         yield call(getScheduleItemsBySemester, { semesterId: id });
//
//         scheduleDataLoaded = true;
//     } catch (error) {
//         yield put(setOpenErrorSnackbar(i18n.t(NO_CURRENT_SEMESTER_ERROR)));
//         yield put(setScheduleLoading(false));
//     }
// }
//
// export function* forceRefreshScheduleItems() {
//     try {
//         const { data } = yield call(axiosCall, CURRENT_SEMESTER_URL);
//         yield put(getCurrentSemesterSuccess(data));
//         const { id } = data;
//         yield call(getScheduleItemsBySemester, { semesterId: id });
//     } catch (error) {
//         yield put(setOpenErrorSnackbar(i18n.t(NO_CURRENT_SEMESTER_ERROR)));
//         yield put(setLoading(false));
//     }
// }

export function* addItemsToSchedule({
  item
}) {
  if (stryMutAct_9fa48("7655")) {
    {}
  } else {
    stryCov_9fa48("7655");
    try {
      if (stryMutAct_9fa48("7656")) {
        {}
      } else {
        stryCov_9fa48("7656");
        yield put(setScheduleOperationLoading(stryMutAct_9fa48("7657") ? false : (stryCov_9fa48("7657"), true)));
        const {
          data
        } = yield call(axiosCall, SCHEDULE_ITEMS_URL, POST, item);
        for (const schedule of data) {
          if (stryMutAct_9fa48("7658")) {
            {}
          } else {
            stryCov_9fa48("7658");
            yield put(addItemToSchedule(schedule));
          }
        }
      }
    } catch (error) {
      if (stryMutAct_9fa48("7659")) {
        {}
      } else {
        stryCov_9fa48("7659");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7660")) {
        {}
      } else {
        stryCov_9fa48("7660");
        yield put(setScheduleOperationLoading(stryMutAct_9fa48("7661") ? true : (stryCov_9fa48("7661"), false)));
      }
    }
  }
}
export function* checkAvailabilityChangeRoomSchedule({
  item
}) {
  if (stryMutAct_9fa48("7662")) {
    {}
  } else {
    stryCov_9fa48("7662");
    const {
      periodId,
      dayOfWeek,
      evenOdd,
      semesterId
    } = item;
    const requestUrl = stryMutAct_9fa48("7663") ? `` : (stryCov_9fa48("7663"), `${ROOMS_AVAILABILITY}?classId=${periodId}&dayOfWeek=${dayOfWeek}&evenOdd=${evenOdd}&semesterId=${semesterId}`);
    try {
      if (stryMutAct_9fa48("7664")) {
        {}
      } else {
        stryCov_9fa48("7664");
        const {
          data
        } = yield call(axiosCall, requestUrl);
        yield put(checkAvailabilityScheduleSuccess(stryMutAct_9fa48("7665") ? {} : (stryCov_9fa48("7665"), {
          classSuitsToTeacher: stryMutAct_9fa48("7666") ? false : (stryCov_9fa48("7666"), true),
          teacherAvailable: stryMutAct_9fa48("7667") ? false : (stryCov_9fa48("7667"), true),
          rooms: data
        })));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7668")) {
        {}
      } else {
        stryCov_9fa48("7668");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7669")) {
        {}
      } else {
        stryCov_9fa48("7669");
        yield put(setLoading(stryMutAct_9fa48("7670") ? true : (stryCov_9fa48("7670"), false)));
      }
    }
  }
}
export function* checkScheduleItemAvailability({
  item
}) {
  if (stryMutAct_9fa48("7671")) {
    {}
  } else {
    stryCov_9fa48("7671");
    const {
      periodId,
      dayOfWeek,
      evenOdd,
      lessonId,
      semesterId
    } = item;
    const requestUrl = stryMutAct_9fa48("7672") ? `` : (stryCov_9fa48("7672"), `${SCHEDULE_CHECK_AVAILABILITY_URL}?classId=${periodId}&dayOfWeek=${dayOfWeek}&evenOdd=${evenOdd}&lessonId=${lessonId}&semesterId=${semesterId}`);
    try {
      if (stryMutAct_9fa48("7673")) {
        {}
      } else {
        stryCov_9fa48("7673");
        const {
          data
        } = yield call(axiosCall, requestUrl);
        yield put(checkAvailabilityScheduleSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7674")) {
        {}
      } else {
        stryCov_9fa48("7674");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7675")) {
        {}
      } else {
        stryCov_9fa48("7675");
        yield put(setLoading(stryMutAct_9fa48("7676") ? true : (stryCov_9fa48("7676"), false)));
      }
    }
  }
}
export function* clearSchedule({
  semesterId
}) {
  if (stryMutAct_9fa48("7677")) {
    {}
  } else {
    stryCov_9fa48("7677");
    try {
      if (stryMutAct_9fa48("7678")) {
        {}
      } else {
        stryCov_9fa48("7678");
        const requestUrl = stryMutAct_9fa48("7679") ? `` : (stryCov_9fa48("7679"), `${CLEAR_SCHEDULE_URL}?semesterId=${semesterId}`);
        yield call(axiosCall, requestUrl, DELETE);
        const message = createMessage(BACK_END_SUCCESS_OPERATION, COMMON_SCHEDULE_TITLE, CLEARED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
        yield call(getScheduleItems);
        // yield call(forceRefreshScheduleItems);
      }
    } catch (error) {
      if (stryMutAct_9fa48("7680")) {
        {}
      } else {
        stryCov_9fa48("7680");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
        yield put(setLoading(stryMutAct_9fa48("7681") ? true : (stryCov_9fa48("7681"), false)));
      }
    }
  }
}
export function* deleteScheduleItem({
  itemId
}) {
  if (stryMutAct_9fa48("7682")) {
    {}
  } else {
    stryCov_9fa48("7682");
    try {
      if (stryMutAct_9fa48("7683")) {
        {}
      } else {
        stryCov_9fa48("7683");
        yield put(setScheduleOperationLoading(stryMutAct_9fa48("7684") ? false : (stryCov_9fa48("7684"), true)));
        const requestUrl = stryMutAct_9fa48("7685") ? `` : (stryCov_9fa48("7685"), `${SCHEDULE_ITEMS_URL}/${itemId}`);
        const {
          data
        } = yield call(axiosCall, requestUrl, DELETE);
        for (const deletedId of data) {
          if (stryMutAct_9fa48("7686")) {
            {}
          } else {
            stryCov_9fa48("7686");
            yield put(deleteScheduleItemSuccess(deletedId));
          }
        }
      }
    } catch (error) {
      if (stryMutAct_9fa48("7687")) {
        {}
      } else {
        stryCov_9fa48("7687");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7688")) {
        {}
      } else {
        stryCov_9fa48("7688");
        yield put(setScheduleOperationLoading(stryMutAct_9fa48("7689") ? true : (stryCov_9fa48("7689"), false)));
      }
    }
  }
}
export function* editRoomItemToSchedule({
  item
}) {
  if (stryMutAct_9fa48("7690")) {
    {}
  } else {
    stryCov_9fa48("7690");
    try {
      if (stryMutAct_9fa48("7691")) {
        {}
      } else {
        stryCov_9fa48("7691");
        const {
          roomId,
          itemId
        } = item;
        const requestUrl = stryMutAct_9fa48("7692") ? `` : (stryCov_9fa48("7692"), `${SCHEDULE_ITEM_ROOM_CHANGE}?roomId=${roomId}&scheduleId=${itemId}`);
        yield call(axiosCall, requestUrl, PUT);
        const message = createMessage(BACK_END_SUCCESS_OPERATION, COMMON_SCHEDULE_TITLE, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
        yield call(getScheduleItems);
        // yield call(forceRefreshScheduleItems);
      }
    } catch (error) {
      if (stryMutAct_9fa48("7693")) {
        {}
      } else {
        stryCov_9fa48("7693");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* getAllPublicSemesters() {
  if (stryMutAct_9fa48("7694")) {
    {}
  } else {
    stryCov_9fa48("7694");
    try {
      if (stryMutAct_9fa48("7695")) {
        {}
      } else {
        stryCov_9fa48("7695");
        const {
          data
        } = yield call(axiosCall, PUBLIC_SEMESTERS_URL);
        yield put(getAllPublicSemestersSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7696")) {
        {}
      } else {
        stryCov_9fa48("7696");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* getCurrentSemester() {
  if (stryMutAct_9fa48("7697")) {
    {}
  } else {
    stryCov_9fa48("7697");
    try {
      if (stryMutAct_9fa48("7698")) {
        {}
      } else {
        stryCov_9fa48("7698");
        const {
          data
        } = yield call(axiosCall, CURRENT_SEMESTER_URL);
        yield put(getCurrentSemesterSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7699")) {
        {}
      } else {
        stryCov_9fa48("7699");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7700")) {
        {}
      } else {
        stryCov_9fa48("7700");
        yield put(setSemesterLoading(stryMutAct_9fa48("7701") ? true : (stryCov_9fa48("7701"), false)));
      }
    }
  }
}
export function* getDefaultSemester() {
  if (stryMutAct_9fa48("7702")) {
    {}
  } else {
    stryCov_9fa48("7702");
    try {
      if (stryMutAct_9fa48("7703")) {
        {}
      } else {
        stryCov_9fa48("7703");
        const {
          data
        } = yield call(axiosCall, DEFAULT_SEMESTER_URL);
        yield put(getDefaultSemesterSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7704")) {
        {}
      } else {
        stryCov_9fa48("7704");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7705")) {
        {}
      } else {
        stryCov_9fa48("7705");
        yield put(setSemesterLoading(stryMutAct_9fa48("7706") ? true : (stryCov_9fa48("7706"), false)));
      }
    }
  }
}
export function* getFullSchedule({
  semesterId
}) {
  if (stryMutAct_9fa48("7707")) {
    {}
  } else {
    stryCov_9fa48("7707");
    const requestUrl = stryMutAct_9fa48("7708") ? FULL_SCHEDULE_URL - semesterId : (stryCov_9fa48("7708"), FULL_SCHEDULE_URL + semesterId);
    try {
      if (stryMutAct_9fa48("7709")) {
        {}
      } else {
        stryCov_9fa48("7709");
        yield put(setMainScheduleLoading(stryMutAct_9fa48("7710") ? false : (stryCov_9fa48("7710"), true)));
        const {
          data
        } = yield call(axiosCall, requestUrl);

        // Перевірка чи розклад опублікований
        if (stryMutAct_9fa48("7713") ? data.published !== false : stryMutAct_9fa48("7712") ? false : stryMutAct_9fa48("7711") ? true : (stryCov_9fa48("7711", "7712", "7713"), data.published === (stryMutAct_9fa48("7714") ? true : (stryCov_9fa48("7714"), false)))) {
          if (stryMutAct_9fa48("7715")) {
            {}
          } else {
            stryCov_9fa48("7715");
            yield put(setScheduleNotPublished(data.message));
            return;
          }
        }
        yield put(getFullScheduleSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7716")) {
        {}
      } else {
        stryCov_9fa48("7716");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7717")) {
        {}
      } else {
        stryCov_9fa48("7717");
        yield put(setMainScheduleLoading(stryMutAct_9fa48("7718") ? true : (stryCov_9fa48("7718"), false)));
      }
    }
  }
}
export function* getGroupSchedule({
  groupId,
  semesterId
}) {
  if (stryMutAct_9fa48("7719")) {
    {}
  } else {
    stryCov_9fa48("7719");
    const requestUrl = stryMutAct_9fa48("7720") ? `` : (stryCov_9fa48("7720"), `${stryMutAct_9fa48("7721") ? GROUP_SCHEDULE_URL - semesterId : (stryCov_9fa48("7721"), GROUP_SCHEDULE_URL + semesterId)}&groupId=${groupId}`);
    try {
      if (stryMutAct_9fa48("7722")) {
        {}
      } else {
        stryCov_9fa48("7722");
        yield put(setMainScheduleLoading(stryMutAct_9fa48("7723") ? false : (stryCov_9fa48("7723"), true)));
        const {
          data
        } = yield call(axiosCall, requestUrl);
        if (stryMutAct_9fa48("7726") ? data.published !== false : stryMutAct_9fa48("7725") ? false : stryMutAct_9fa48("7724") ? true : (stryCov_9fa48("7724", "7725", "7726"), data.published === (stryMutAct_9fa48("7727") ? true : (stryCov_9fa48("7727"), false)))) {
          if (stryMutAct_9fa48("7728")) {
            {}
          } else {
            stryCov_9fa48("7728");
            yield put(setScheduleNotPublished(data.message));
            return;
          }
        }
        yield put(getGroupScheduleSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7729")) {
        {}
      } else {
        stryCov_9fa48("7729");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7730")) {
        {}
      } else {
        stryCov_9fa48("7730");
        yield put(setMainScheduleLoading(stryMutAct_9fa48("7731") ? true : (stryCov_9fa48("7731"), false)));
      }
    }
  }
}
export function* getTeacherRangeSchedule({
  values
}) {
  if (stryMutAct_9fa48("7732")) {
    {}
  } else {
    stryCov_9fa48("7732");
    try {
      if (stryMutAct_9fa48("7733")) {
        {}
      } else {
        stryCov_9fa48("7733");
        const {
          startDay,
          endDay
        } = values;
        const fromUrlPart = startDay.replace(/\//g, stryMutAct_9fa48("7734") ? "" : (stryCov_9fa48("7734"), '-'));
        const toUrlPart = endDay.replace(/\//g, stryMutAct_9fa48("7735") ? "" : (stryCov_9fa48("7735"), '-'));
        const requestUrl = stryMutAct_9fa48("7736") ? `` : (stryCov_9fa48("7736"), `${FOR_TEACHER_SCHEDULE_URL}?from=${fromUrlPart}&to=${toUrlPart}`);
        const {
          data
        } = yield call(axiosCall, requestUrl);
        yield put(getTeacherRangeScheduleSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7737")) {
        {}
      } else {
        stryCov_9fa48("7737");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7738")) {
        {}
      } else {
        stryCov_9fa48("7738");
        yield put(setLoading(stryMutAct_9fa48("7739") ? true : (stryCov_9fa48("7739"), false)));
      }
    }
  }
}
export function* getTeacherSchedule({
  teacherId,
  semesterId
}) {
  if (stryMutAct_9fa48("7740")) {
    {}
  } else {
    stryCov_9fa48("7740");
    const requestUrl = stryMutAct_9fa48("7741") ? `` : (stryCov_9fa48("7741"), `${stryMutAct_9fa48("7742") ? TEACHER_SCHEDULE_URL - semesterId : (stryCov_9fa48("7742"), TEACHER_SCHEDULE_URL + semesterId)}&teacherId=${teacherId}`);
    try {
      if (stryMutAct_9fa48("7743")) {
        {}
      } else {
        stryCov_9fa48("7743");
        yield put(setMainScheduleLoading(stryMutAct_9fa48("7744") ? false : (stryCov_9fa48("7744"), true)));
        const {
          data
        } = yield call(axiosCall, requestUrl);
        if (stryMutAct_9fa48("7747") ? data.published !== false : stryMutAct_9fa48("7746") ? false : stryMutAct_9fa48("7745") ? true : (stryCov_9fa48("7745", "7746", "7747"), data.published === (stryMutAct_9fa48("7748") ? true : (stryCov_9fa48("7748"), false)))) {
          if (stryMutAct_9fa48("7749")) {
            {}
          } else {
            stryCov_9fa48("7749");
            yield put(setScheduleNotPublished(data.message));
            return;
          }
        }
        yield put(getTeacherScheduleSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7750")) {
        {}
      } else {
        stryCov_9fa48("7750");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7751")) {
        {}
      } else {
        stryCov_9fa48("7751");
        yield put(setMainScheduleLoading(stryMutAct_9fa48("7752") ? true : (stryCov_9fa48("7752"), false)));
      }
    }
  }
}
export function* sendTeacherSchedule({
  data
}) {
  if (stryMutAct_9fa48("7753")) {
    {}
  } else {
    stryCov_9fa48("7753");
    try {
      if (stryMutAct_9fa48("7754")) {
        {}
      } else {
        stryCov_9fa48("7754");
        const teachersId = data.teachersId.map(stryMutAct_9fa48("7755") ? () => undefined : (stryCov_9fa48("7755"), teacherId => stryMutAct_9fa48("7756") ? `` : (stryCov_9fa48("7756"), `teachersId=${teacherId}`))).join(stryMutAct_9fa48("7757") ? "" : (stryCov_9fa48("7757"), '&'));
        const {
          semesterId,
          language
        } = data;
        const requestUrl = stryMutAct_9fa48("7758") ? `` : (stryCov_9fa48("7758"), `${SEND_PDF_TO_EMAIL}/semester/${semesterId}?language=${language}&${teachersId}`);
        yield call(axiosCall, requestUrl);
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_SCHEDULE_LABEL, SERVICE_MESSAGE_SENT_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7759")) {
        {}
      } else {
        stryCov_9fa48("7759");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7760")) {
        {}
      } else {
        stryCov_9fa48("7760");
        yield put(setLoading(stryMutAct_9fa48("7761") ? true : (stryCov_9fa48("7761"), false)));
      }
    }
  }
}
const getSemestersFromState = stryMutAct_9fa48("7762") ? () => undefined : (stryCov_9fa48("7762"), (() => {
  const getSemestersFromState = state => state.schedule.semesters;
  return getSemestersFromState;
})());

// Refactor required
function* setSemesterAndType(semesterId, type) {
  if (stryMutAct_9fa48("7763")) {
    {}
  } else {
    stryCov_9fa48("7763");
    yield put(setMainScheduleLoading(stryMutAct_9fa48("7764") ? false : (stryCov_9fa48("7764"), true)));
    let semesters = yield select(getSemestersFromState);
    if (stryMutAct_9fa48("7766") ? false : stryMutAct_9fa48("7765") ? true : (stryCov_9fa48("7765", "7766"), isEmpty(semesters))) {
      if (stryMutAct_9fa48("7767")) {
        {}
      } else {
        stryCov_9fa48("7767");
        yield call(getAllPublicSemesters);
        semesters = yield select(getSemestersFromState);
      }
    }
    const semester = semesters.find(stryMutAct_9fa48("7768") ? () => undefined : (stryCov_9fa48("7768"), item => stryMutAct_9fa48("7771") ? item.id !== Number(semesterId) : stryMutAct_9fa48("7770") ? false : stryMutAct_9fa48("7769") ? true : (stryCov_9fa48("7769", "7770", "7771"), item.id === Number(semesterId))));
    const teachers = yield select(stryMutAct_9fa48("7772") ? () => undefined : (stryCov_9fa48("7772"), state => state.teachers.teachers));
    if (stryMutAct_9fa48("7774") ? false : stryMutAct_9fa48("7773") ? true : (stryCov_9fa48("7773", "7774"), isEmpty(teachers))) yield call(getAllPublicTeachers);
    const groups = yield select(stryMutAct_9fa48("7775") ? () => undefined : (stryCov_9fa48("7775"), state => state.groups.groups));
    if (stryMutAct_9fa48("7777") ? false : stryMutAct_9fa48("7776") ? true : (stryCov_9fa48("7776", "7777"), isEmpty(groups))) yield call(getAllPublicGroups, stryMutAct_9fa48("7778") ? {} : (stryCov_9fa48("7778"), {
      id: semesterId
    }));
    yield put(setScheduleSemester(semester));
    yield put(setScheduleType(type));
  }
}
export function* selectGroupSchedule({
  semesterId,
  groupId
}) {
  if (stryMutAct_9fa48("7779")) {
    {}
  } else {
    stryCov_9fa48("7779");
    yield call(setSemesterAndType, semesterId, GROUP);
    const groups = yield select(stryMutAct_9fa48("7780") ? () => undefined : (stryCov_9fa48("7780"), state => state.groups.groups));
    const group = groups.find(stryMutAct_9fa48("7781") ? () => undefined : (stryCov_9fa48("7781"), item => stryMutAct_9fa48("7784") ? item.id !== Number(groupId) : stryMutAct_9fa48("7783") ? false : stryMutAct_9fa48("7782") ? true : (stryCov_9fa48("7782", "7783", "7784"), item.id === Number(groupId))));
    yield put(setScheduleGroup(group));
    // yield put(setScheduleDepartment(null));
    yield call(getGroupSchedule, stryMutAct_9fa48("7785") ? {} : (stryCov_9fa48("7785"), {
      semesterId,
      groupId
    }));
  }
}
export function* selectTeacherSchedule({
  semesterId,
  teacherId
}) {
  if (stryMutAct_9fa48("7786")) {
    {}
  } else {
    stryCov_9fa48("7786");
    yield call(setSemesterAndType, semesterId, TEACHER);
    const teachers = yield select(stryMutAct_9fa48("7787") ? () => undefined : (stryCov_9fa48("7787"), state => state.teachers.teachers));
    const teacher = teachers.find(stryMutAct_9fa48("7788") ? () => undefined : (stryCov_9fa48("7788"), item => stryMutAct_9fa48("7791") ? item.id !== Number(teacherId) : stryMutAct_9fa48("7790") ? false : stryMutAct_9fa48("7789") ? true : (stryCov_9fa48("7789", "7790", "7791"), item.id === Number(teacherId))));
    yield put(setScheduleTeacher(teacher));
    // yield put(setScheduleDepartment(null));
    yield call(getTeacherSchedule, stryMutAct_9fa48("7792") ? {} : (stryCov_9fa48("7792"), {
      semesterId,
      teacherId
    }));
  }
}
export function* selectFullSchedule({
  semesterId
}) {
  if (stryMutAct_9fa48("7793")) {
    {}
  } else {
    stryCov_9fa48("7793");
    yield call(setSemesterAndType, semesterId, FULL);
    // yield put(setScheduleDepartment(null));
    yield call(getFullSchedule, stryMutAct_9fa48("7794") ? {} : (stryCov_9fa48("7794"), {
      semesterId
    }));
  }
}
export function* selectDepartmentSchedule({
  semesterId,
  departmentId
}) {
  if (stryMutAct_9fa48("7795")) {
    {}
  } else {
    stryCov_9fa48("7795");
    yield call(setSemesterAndType, semesterId, DEPARTMENT);
    const departments = yield select(stryMutAct_9fa48("7796") ? () => undefined : (stryCov_9fa48("7796"), state => state.departments.departments));
    const department = departments.find(stryMutAct_9fa48("7797") ? () => undefined : (stryCov_9fa48("7797"), item => stryMutAct_9fa48("7800") ? item.id !== Number(departmentId) : stryMutAct_9fa48("7799") ? false : stryMutAct_9fa48("7798") ? true : (stryCov_9fa48("7798", "7799", "7800"), item.id === Number(departmentId))));
    yield put(setScheduleDepartment(department));
    // yield put(setScheduleGroup(null));
    // yield put(setScheduleTeacher(null));
    yield call(getFullSchedule, stryMutAct_9fa48("7801") ? {} : (stryCov_9fa48("7801"), {
      semesterId
    }));
  }
}
export default function* watchSchedule() {
  if (stryMutAct_9fa48("7802")) {
    {}
  } else {
    stryCov_9fa48("7802");
    yield takeLatest(actionTypes.GET_CURRENT_SEMESTER_START, getCurrentSemester);
    yield takeLatest(actionTypes.GET_DEFAULT_SEMESTER_START, getDefaultSemester);
    yield takeLatest(actionTypes.CHECK_AVAILABILITY_SCHEDULE_START, checkScheduleItemAvailability);
    yield takeLatest(actionTypes.GET_SCHEDULE_ITEMS_START, getScheduleItemsBySemester);
    yield takeLatest(actionTypes.CHECK_AVAILABILITY_CHANGE_ROOM_SCHEDULE_START, checkAvailabilityChangeRoomSchedule);
    yield takeLatest(actionTypes.GET_ALL_PUBLIC_SEMESTERS_START, getAllPublicSemesters);
    yield takeLatest(actionTypes.SEND_TEACHER_SCHEDULE_START, sendTeacherSchedule);
    yield takeLatest(actionTypes.GET_TEACHER_RANGE_SCHEDULE_START, getTeacherRangeSchedule);
    yield takeLatest(actionTypes.GET_ALL_SCHEDULE_ITEMS_START, getScheduleItems);
    yield takeEvery(actionTypes.ADD_ITEM_TO_SCHEDULE_START, addItemsToSchedule);
    yield takeEvery(actionTypes.EDIT_ITEM_TO_SCHEDULE_START, editRoomItemToSchedule);
    yield takeEvery(actionTypes.DELETE_SCHEDULE_ITEM_START, deleteScheduleItem);
    yield takeEvery(actionTypes.CLEAR_SCHEDULE_START, clearSchedule);
    yield takeLatest(actionTypes.GET_GROUP_SCHEDULE_START, getGroupSchedule);
    yield takeLatest(actionTypes.GET_TEACHER_SCHEDULE_START, getTeacherSchedule);
    yield takeLatest(actionTypes.SELECT_GROUP_SCHEDULE_START, selectGroupSchedule);
    yield takeLatest(actionTypes.SELECT_TEACHER_SCHEDULE_START, selectTeacherSchedule);
    yield takeLatest(actionTypes.SELECT_FULL_SCHEDULE_START, selectFullSchedule);
    yield takeLatest(actionTypes.SELECT_DEPARTMENT_SCHEDULE_START, selectDepartmentSchedule);
  }
}