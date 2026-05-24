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
import { reset } from 'redux-form';
import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionsType';
import { setScheduleLoading } from '../actions';
import { setLoading, setRoomsLoading } from '../actions/loadingIndicator';
import { setOpenErrorSnackbar, setOpenSuccessSnackbar } from '../actions/snackbar';
import { axiosCall } from '../services/axios';
import { BUSY_ROOMS, CURRENT_SEMESTER_URL, DISABLED_ROOMS_URL, FREE_ROOMS_URL, ROOM_ORDERED_URL, ROOM_TYPES_URL, ROOM_URL, ROOM_AFTER_URL } from '../constants/axios';
import { ROOM_FORM, ROOM_FORM_TYPE } from '../constants/reduxForms';
import { createErrorMessage, createMessage } from '../utils/sagaUtils';
import { addRoomSuccess, addRoomTypeSuccess, deleteRoomSuccess, deleteRoomTypeSuccess, getAllRoomTypesSuccess, getBusyRoomsSuccess, getFreeRoomsSuccess, getListOfDisabledRoomsSuccess, getListOfRoomsSuccess, updateRoomSuccess, updateRoomTypeSuccess, updateRoomOrderSuccess } from '../actions/rooms';
import { BACK_END_SUCCESS_OPERATION, CREATED_LABEL, DELETED_LABEL, UPDATED_LABEL } from '../constants/translationLabels/serviceMessages';
import { FORM_ROOM_LABEL, FORM_TYPE_LABEL } from '../constants/translationLabels/formElements';
import { DELETE, POST, PUT } from '../constants/methods';
export function* getListOfRooms() {
  if (stryMutAct_9fa48("7552")) {
    {}
  } else {
    stryCov_9fa48("7552");
    try {
      if (stryMutAct_9fa48("7553")) {
        {}
      } else {
        stryCov_9fa48("7553");
        yield put(setLoading(stryMutAct_9fa48("7554") ? false : (stryCov_9fa48("7554"), true)));
        const {
          data
        } = yield call(axiosCall, ROOM_ORDERED_URL);
        yield put(getListOfRoomsSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7555")) {
        {}
      } else {
        stryCov_9fa48("7555");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7556")) {
        {}
      } else {
        stryCov_9fa48("7556");
        yield put(setLoading(stryMutAct_9fa48("7557") ? true : (stryCov_9fa48("7557"), false)));
      }
    }
  }
}
export function* getListOfDisabledRooms() {
  if (stryMutAct_9fa48("7558")) {
    {}
  } else {
    stryCov_9fa48("7558");
    try {
      if (stryMutAct_9fa48("7559")) {
        {}
      } else {
        stryCov_9fa48("7559");
        yield put(setLoading(stryMutAct_9fa48("7560") ? false : (stryCov_9fa48("7560"), true)));
        const {
          data
        } = yield call(axiosCall, DISABLED_ROOMS_URL);
        yield put(getListOfDisabledRoomsSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7561")) {
        {}
      } else {
        stryCov_9fa48("7561");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7562")) {
        {}
      } else {
        stryCov_9fa48("7562");
        yield put(setLoading(stryMutAct_9fa48("7563") ? true : (stryCov_9fa48("7563"), false)));
      }
    }
  }
}
export function* dragAndDropRoom({
  dragRoom,
  afterRoomId
}) {
  if (stryMutAct_9fa48("7564")) {
    {}
  } else {
    stryCov_9fa48("7564");
    try {
      if (stryMutAct_9fa48("7565")) {
        {}
      } else {
        stryCov_9fa48("7565");
        yield put(setLoading(stryMutAct_9fa48("7566") ? false : (stryCov_9fa48("7566"), true)));
        const url = stryMutAct_9fa48("7567") ? `` : (stryCov_9fa48("7567"), `${ROOM_AFTER_URL}/${stryMutAct_9fa48("7570") ? afterRoomId && 0 : stryMutAct_9fa48("7569") ? false : stryMutAct_9fa48("7568") ? true : (stryCov_9fa48("7568", "7569", "7570"), afterRoomId || 0)}`);
        const {
          data
        } = yield call(axiosCall, url, PUT, dragRoom);
        yield put(updateRoomOrderSuccess(data, afterRoomId));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_ROOM_LABEL, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7571")) {
        {}
      } else {
        stryCov_9fa48("7571");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7572")) {
        {}
      } else {
        stryCov_9fa48("7572");
        yield put(setLoading(stryMutAct_9fa48("7573") ? true : (stryCov_9fa48("7573"), false)));
      }
    }
  }
}
export function* updateRoomItem({
  values
}) {
  if (stryMutAct_9fa48("7574")) {
    {}
  } else {
    stryCov_9fa48("7574");
    try {
      if (stryMutAct_9fa48("7575")) {
        {}
      } else {
        stryCov_9fa48("7575");
        const {
          data
        } = yield call(axiosCall, ROOM_URL, PUT, values);
        yield put(updateRoomSuccess(data));
        yield put(reset(ROOM_FORM));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_ROOM_LABEL, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7576")) {
        {}
      } else {
        stryCov_9fa48("7576");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* addRoomItem({
  values
}) {
  if (stryMutAct_9fa48("7577")) {
    {}
  } else {
    stryCov_9fa48("7577");
    try {
      if (stryMutAct_9fa48("7578")) {
        {}
      } else {
        stryCov_9fa48("7578");
        const {
          data
        } = yield call(axiosCall, ROOM_URL, POST, values);
        yield put(addRoomSuccess(data));
        yield put(reset(ROOM_FORM));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_ROOM_LABEL, CREATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7579")) {
        {}
      } else {
        stryCov_9fa48("7579");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* toggleRoomsVisibility({
  roomId,
  isDisabled
}) {
  if (stryMutAct_9fa48("7580")) {
    {}
  } else {
    stryCov_9fa48("7580");
    try {
      if (stryMutAct_9fa48("7581")) {
        {}
      } else {
        stryCov_9fa48("7581");
        const state = yield select();
        const {
          disabledRooms,
          rooms
        } = state.rooms;
        const room = (stryMutAct_9fa48("7582") ? [] : (stryCov_9fa48("7582"), [...disabledRooms, ...rooms])).find(stryMutAct_9fa48("7583") ? () => undefined : (stryCov_9fa48("7583"), roomItem => stryMutAct_9fa48("7586") ? roomItem.id !== roomId : stryMutAct_9fa48("7585") ? false : stryMutAct_9fa48("7584") ? true : (stryCov_9fa48("7584", "7585", "7586"), roomItem.id === roomId)));
        yield call(axiosCall, ROOM_URL, PUT, stryMutAct_9fa48("7587") ? {} : (stryCov_9fa48("7587"), {
          ...room,
          disable: stryMutAct_9fa48("7588") ? room.disable : (stryCov_9fa48("7588"), !room.disable)
        }));
        yield put(deleteRoomSuccess(roomId, isDisabled));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_ROOM_LABEL, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7589")) {
        {}
      } else {
        stryCov_9fa48("7589");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* deleteRoomItem({
  roomId,
  isDisabled
}) {
  if (stryMutAct_9fa48("7590")) {
    {}
  } else {
    stryCov_9fa48("7590");
    try {
      if (stryMutAct_9fa48("7591")) {
        {}
      } else {
        stryCov_9fa48("7591");
        const requestUrl = stryMutAct_9fa48("7592") ? `` : (stryCov_9fa48("7592"), `${ROOM_URL}/${roomId}`);
        yield call(axiosCall, requestUrl, DELETE);
        yield put(deleteRoomSuccess(roomId, isDisabled));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_ROOM_LABEL, DELETED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7593")) {
        {}
      } else {
        stryCov_9fa48("7593");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* handleRoomFormSubmit({
  values
}) {
  if (stryMutAct_9fa48("7594")) {
    {}
  } else {
    stryCov_9fa48("7594");
    try {
      if (stryMutAct_9fa48("7595")) {
        {}
      } else {
        stryCov_9fa48("7595");
        if (stryMutAct_9fa48("7597") ? false : stryMutAct_9fa48("7596") ? true : (stryCov_9fa48("7596", "7597"), values.id)) {
          if (stryMutAct_9fa48("7598")) {
            {}
          } else {
            stryCov_9fa48("7598");
            const url = stryMutAct_9fa48("7599") ? `` : (stryCov_9fa48("7599"), `${ROOM_AFTER_URL}/${stryMutAct_9fa48("7602") ? values.afterId && 0 : stryMutAct_9fa48("7601") ? false : stryMutAct_9fa48("7600") ? true : (stryCov_9fa48("7600", "7601", "7602"), values.afterId || 0)}`);
            const {
              data
            } = yield call(axiosCall, url, PUT, values);
            yield put(updateRoomOrderSuccess(data, values.afterId));
            yield put(reset(ROOM_FORM));
            const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_ROOM_LABEL, UPDATED_LABEL);
            yield put(setOpenSuccessSnackbar(message));
          }
        } else {
          if (stryMutAct_9fa48("7603")) {
            {}
          } else {
            stryCov_9fa48("7603");
            const url = stryMutAct_9fa48("7604") ? `` : (stryCov_9fa48("7604"), `${ROOM_AFTER_URL}/${stryMutAct_9fa48("7607") ? values.afterId && 0 : stryMutAct_9fa48("7606") ? false : stryMutAct_9fa48("7605") ? true : (stryCov_9fa48("7605", "7606", "7607"), values.afterId || 0)}`);
            const {
              data
            } = yield call(axiosCall, url, POST, values);
            yield put(addRoomSuccess(data, values.afterId)); // <-- додати afterId
            yield put(reset(ROOM_FORM));
            const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_ROOM_LABEL, CREATED_LABEL);
            yield put(setOpenSuccessSnackbar(message));
          }
        }
      }
    } catch (error) {
      if (stryMutAct_9fa48("7608")) {
        {}
      } else {
        stryCov_9fa48("7608");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* getAllRoomTypes() {
  if (stryMutAct_9fa48("7609")) {
    {}
  } else {
    stryCov_9fa48("7609");
    try {
      if (stryMutAct_9fa48("7610")) {
        {}
      } else {
        stryCov_9fa48("7610");
        const {
          data
        } = yield call(axiosCall, ROOM_TYPES_URL);
        yield put(getAllRoomTypesSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7611")) {
        {}
      } else {
        stryCov_9fa48("7611");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* updateRoomTypeItem({
  values
}) {
  if (stryMutAct_9fa48("7612")) {
    {}
  } else {
    stryCov_9fa48("7612");
    try {
      if (stryMutAct_9fa48("7613")) {
        {}
      } else {
        stryCov_9fa48("7613");
        const {
          data
        } = yield call(axiosCall, ROOM_TYPES_URL, PUT, values);
        yield put(updateRoomTypeSuccess(data));
        yield put(reset(ROOM_FORM_TYPE));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_TYPE_LABEL, UPDATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7614")) {
        {}
      } else {
        stryCov_9fa48("7614");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* addRoomTypeItem({
  values
}) {
  if (stryMutAct_9fa48("7615")) {
    {}
  } else {
    stryCov_9fa48("7615");
    try {
      if (stryMutAct_9fa48("7616")) {
        {}
      } else {
        stryCov_9fa48("7616");
        const {
          data
        } = yield call(axiosCall, ROOM_TYPES_URL, POST, values);
        yield put(addRoomTypeSuccess(data));
        yield put(reset(ROOM_FORM_TYPE));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_TYPE_LABEL, CREATED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7617")) {
        {}
      } else {
        stryCov_9fa48("7617");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* handleRoomTypeFormSubmit({
  values
}) {
  if (stryMutAct_9fa48("7618")) {
    {}
  } else {
    stryCov_9fa48("7618");
    try {
      if (stryMutAct_9fa48("7619")) {
        {}
      } else {
        stryCov_9fa48("7619");
        if (stryMutAct_9fa48("7621") ? false : stryMutAct_9fa48("7620") ? true : (stryCov_9fa48("7620", "7621"), values.id)) {
          if (stryMutAct_9fa48("7622")) {
            {}
          } else {
            stryCov_9fa48("7622");
            yield call(updateRoomTypeItem, stryMutAct_9fa48("7623") ? {} : (stryCov_9fa48("7623"), {
              values
            }));
          }
        } else {
          if (stryMutAct_9fa48("7624")) {
            {}
          } else {
            stryCov_9fa48("7624");
            yield call(addRoomTypeItem, stryMutAct_9fa48("7625") ? {} : (stryCov_9fa48("7625"), {
              values
            }));
          }
        }
      }
    } catch (error) {
      if (stryMutAct_9fa48("7626")) {
        {}
      } else {
        stryCov_9fa48("7626");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* deleteRoomTypeItem({
  roomTypeId
}) {
  if (stryMutAct_9fa48("7627")) {
    {}
  } else {
    stryCov_9fa48("7627");
    try {
      if (stryMutAct_9fa48("7628")) {
        {}
      } else {
        stryCov_9fa48("7628");
        const requestUrl = stryMutAct_9fa48("7629") ? `` : (stryCov_9fa48("7629"), `${ROOM_TYPES_URL}/${roomTypeId}`);
        yield call(axiosCall, requestUrl, DELETE);
        yield put(deleteRoomTypeSuccess(roomTypeId));
        const message = createMessage(BACK_END_SUCCESS_OPERATION, FORM_TYPE_LABEL, DELETED_LABEL);
        yield put(setOpenSuccessSnackbar(message));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7630")) {
        {}
      } else {
        stryCov_9fa48("7630");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    }
  }
}
export function* getFreeRoomsByParams({
  params
}) {
  if (stryMutAct_9fa48("7631")) {
    {}
  } else {
    stryCov_9fa48("7631");
    try {
      if (stryMutAct_9fa48("7632")) {
        {}
      } else {
        stryCov_9fa48("7632");
        const {
          dayOfWeek,
          evenOdd,
          classId,
          semesterId
        } = params;
        const requestUrl = stryMutAct_9fa48("7633") ? `` : (stryCov_9fa48("7633"), `${FREE_ROOMS_URL}?dayOfWeek=${dayOfWeek}&evenOdd=${evenOdd}&classId=${classId}&semesterId=${semesterId}`);
        const {
          data
        } = yield call(axiosCall, requestUrl);
        yield put(getFreeRoomsSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7634")) {
        {}
      } else {
        stryCov_9fa48("7634");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7635")) {
        {}
      } else {
        stryCov_9fa48("7635");
        yield put(setRoomsLoading(stryMutAct_9fa48("7636") ? true : (stryCov_9fa48("7636"), false)));
      }
    }
  }
}
export function* getBusyRooms() {
  if (stryMutAct_9fa48("7637")) {
    {}
  } else {
    stryCov_9fa48("7637");
    try {
      if (stryMutAct_9fa48("7638")) {
        {}
      } else {
        stryCov_9fa48("7638");
        const semesterResponse = yield call(axiosCall, CURRENT_SEMESTER_URL);
        const {
          id
        } = semesterResponse.data;
        const {
          data
        } = yield call(axiosCall, stryMutAct_9fa48("7639") ? `` : (stryCov_9fa48("7639"), `${BUSY_ROOMS}?semesterId=${id}`));
        yield put(getBusyRoomsSuccess(data));
      }
    } catch (error) {
      if (stryMutAct_9fa48("7640")) {
        {}
      } else {
        stryCov_9fa48("7640");
        yield put(setOpenErrorSnackbar(createErrorMessage(error)));
      }
    } finally {
      if (stryMutAct_9fa48("7641")) {
        {}
      } else {
        stryCov_9fa48("7641");
        yield put(setScheduleLoading(stryMutAct_9fa48("7642") ? true : (stryCov_9fa48("7642"), false)));
      }
    }
  }
}
function* watchRooms() {
  if (stryMutAct_9fa48("7643")) {
    {}
  } else {
    stryCov_9fa48("7643");
    yield takeLatest(actionTypes.GET_LIST_OF_ROOMS_START, getListOfRooms);
    yield takeLatest(actionTypes.GET_LIST_OF_DISABLED_ROOMS_START, getListOfDisabledRooms);
    yield takeLatest(actionTypes.GET_ALL_ROOM_TYPES_START, getAllRoomTypes);
    yield takeLatest(actionTypes.GET_FREE_ROOMS_START, getFreeRoomsByParams);
    yield takeEvery(actionTypes.ADD_ROOM_START, addRoomItem);
    yield takeEvery(actionTypes.DRAG_AND_DROP_ROOM_START, dragAndDropRoom);
    yield takeEvery(actionTypes.UPDATE_ROOM_START, updateRoomItem);
    yield takeEvery(actionTypes.DELETE_ROOM_START, deleteRoomItem);
    yield takeEvery(actionTypes.DELETE_ROOM_TYPE_START, deleteRoomTypeItem);
    yield takeEvery(actionTypes.HANDLE_ROOM_FORM_SUBMIT_START, handleRoomFormSubmit);
    yield takeEvery(actionTypes.HANDLE_ROOM_TYPE_FORM_SUBMIT_START, handleRoomTypeFormSubmit);
    yield takeEvery(actionTypes.TOGGLE_ROOM_VISIBILITY_START, toggleRoomsVisibility);
    yield takeLatest(actionTypes.GET_BUSY_ROOMS_START, getBusyRooms);
  }
}
export default watchRooms;