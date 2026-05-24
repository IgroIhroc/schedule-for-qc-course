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
import * as actionsType from './actionsType';
export const addRoomSuccess = stryMutAct_9fa48("391") ? () => undefined : (stryCov_9fa48("391"), (() => {
  const addRoomSuccess = (room, afterId) => stryMutAct_9fa48("392") ? {} : (stryCov_9fa48("392"), {
    type: actionsType.ADD_ROOM,
    room,
    afterId
  });
  return addRoomSuccess;
})());
export const addRoomStart = stryMutAct_9fa48("393") ? () => undefined : (stryCov_9fa48("393"), (() => {
  const addRoomStart = room => stryMutAct_9fa48("394") ? {} : (stryCov_9fa48("394"), {
    type: actionsType.ADD_ROOM_START,
    room
  });
  return addRoomStart;
})());
export const dragAndDropRoomStart = stryMutAct_9fa48("395") ? () => undefined : (stryCov_9fa48("395"), (() => {
  const dragAndDropRoomStart = (dragRoom, afterRoomId) => stryMutAct_9fa48("396") ? {} : (stryCov_9fa48("396"), {
    type: actionsType.DRAG_AND_DROP_ROOM_START,
    dragRoom,
    afterRoomId
  });
  return dragAndDropRoomStart;
})());
export const updateRoomOrderSuccess = stryMutAct_9fa48("397") ? () => undefined : (stryCov_9fa48("397"), (() => {
  const updateRoomOrderSuccess = (room, afterId) => stryMutAct_9fa48("398") ? {} : (stryCov_9fa48("398"), {
    type: actionsType.UPDATE_ROOM_ORDER_SUCCESS,
    room,
    afterId
  });
  return updateRoomOrderSuccess;
})());
export const deleteRoomSuccess = stryMutAct_9fa48("399") ? () => undefined : (stryCov_9fa48("399"), (() => {
  const deleteRoomSuccess = (roomId, isDisabled) => stryMutAct_9fa48("400") ? {} : (stryCov_9fa48("400"), {
    type: actionsType.DELETE_ROOM,
    roomId,
    isDisabled
  });
  return deleteRoomSuccess;
})());
export const deleteRoomStart = stryMutAct_9fa48("401") ? () => undefined : (stryCov_9fa48("401"), (() => {
  const deleteRoomStart = (roomId, isDisabled) => stryMutAct_9fa48("402") ? {} : (stryCov_9fa48("402"), {
    type: actionsType.DELETE_ROOM_START,
    roomId,
    isDisabled
  });
  return deleteRoomStart;
})());
export const getListOfRoomsSuccess = stryMutAct_9fa48("403") ? () => undefined : (stryCov_9fa48("403"), (() => {
  const getListOfRoomsSuccess = rooms => stryMutAct_9fa48("404") ? {} : (stryCov_9fa48("404"), {
    type: actionsType.SHOW_LIST_OF_ROOMS_SUCCESS,
    rooms
  });
  return getListOfRoomsSuccess;
})());
export const getListOfRoomsStart = stryMutAct_9fa48("405") ? () => undefined : (stryCov_9fa48("405"), (() => {
  const getListOfRoomsStart = () => stryMutAct_9fa48("406") ? {} : (stryCov_9fa48("406"), {
    type: actionsType.GET_LIST_OF_ROOMS_START
  });
  return getListOfRoomsStart;
})());
export const getListOfDisabledRoomsSuccess = stryMutAct_9fa48("407") ? () => undefined : (stryCov_9fa48("407"), (() => {
  const getListOfDisabledRoomsSuccess = rooms => stryMutAct_9fa48("408") ? {} : (stryCov_9fa48("408"), {
    type: actionsType.SET_DISABLED_ROOMS,
    rooms
  });
  return getListOfDisabledRoomsSuccess;
})());
export const getListOfDisabledRoomsStart = stryMutAct_9fa48("409") ? () => undefined : (stryCov_9fa48("409"), (() => {
  const getListOfDisabledRoomsStart = () => stryMutAct_9fa48("410") ? {} : (stryCov_9fa48("410"), {
    type: actionsType.GET_LIST_OF_DISABLED_ROOMS_START
  });
  return getListOfDisabledRoomsStart;
})());
export const setSelectRoomSuccess = stryMutAct_9fa48("411") ? () => undefined : (stryCov_9fa48("411"), (() => {
  const setSelectRoomSuccess = roomId => stryMutAct_9fa48("412") ? {} : (stryCov_9fa48("412"), {
    type: actionsType.SET_SELECT_ROOM,
    roomId
  });
  return setSelectRoomSuccess;
})());
export const updateRoomSuccess = stryMutAct_9fa48("413") ? () => undefined : (stryCov_9fa48("413"), (() => {
  const updateRoomSuccess = room => stryMutAct_9fa48("414") ? {} : (stryCov_9fa48("414"), {
    type: actionsType.UPDATE_ROOM,
    room
  });
  return updateRoomSuccess;
})());
export const updateRoomStart = stryMutAct_9fa48("415") ? () => undefined : (stryCov_9fa48("415"), (() => {
  const updateRoomStart = values => stryMutAct_9fa48("416") ? {} : (stryCov_9fa48("416"), {
    type: actionsType.UPDATE_ROOM_START,
    values
  });
  return updateRoomStart;
})());
export const getFreeRoomsStart = stryMutAct_9fa48("417") ? () => undefined : (stryCov_9fa48("417"), (() => {
  const getFreeRoomsStart = params => stryMutAct_9fa48("418") ? {} : (stryCov_9fa48("418"), {
    type: actionsType.GET_FREE_ROOMS_START,
    params
  });
  return getFreeRoomsStart;
})());
export const getFreeRoomsSuccess = stryMutAct_9fa48("419") ? () => undefined : (stryCov_9fa48("419"), (() => {
  const getFreeRoomsSuccess = freeRooms => stryMutAct_9fa48("420") ? {} : (stryCov_9fa48("420"), {
    type: actionsType.GET_FREE_ROOMS_SUCCESS,
    freeRooms
  });
  return getFreeRoomsSuccess;
})());
export const clearFreeRooms = stryMutAct_9fa48("421") ? () => undefined : (stryCov_9fa48("421"), (() => {
  const clearFreeRooms = () => stryMutAct_9fa48("422") ? {} : (stryCov_9fa48("422"), {
    type: actionsType.CLEAR_FREE_ROOMS
  });
  return clearFreeRooms;
})());
export const getBusyRoomsStart = stryMutAct_9fa48("423") ? () => undefined : (stryCov_9fa48("423"), (() => {
  const getBusyRoomsStart = semesterId => stryMutAct_9fa48("424") ? {} : (stryCov_9fa48("424"), {
    type: actionsType.GET_BUSY_ROOMS_START,
    semesterId
  });
  return getBusyRoomsStart;
})());
export const getBusyRoomsSuccess = stryMutAct_9fa48("425") ? () => undefined : (stryCov_9fa48("425"), (() => {
  const getBusyRoomsSuccess = busyRooms => stryMutAct_9fa48("426") ? {} : (stryCov_9fa48("426"), {
    type: actionsType.GET_BUSY_ROOMS_SUCCESS,
    busyRooms
  });
  return getBusyRoomsSuccess;
})());
export const clearRoomSuccess = stryMutAct_9fa48("427") ? () => undefined : (stryCov_9fa48("427"), (() => {
  const clearRoomSuccess = () => stryMutAct_9fa48("428") ? {} : (stryCov_9fa48("428"), {
    type: actionsType.CLEAR_ROOM
  });
  return clearRoomSuccess;
})());
export const handleRoomFormSubmitStart = stryMutAct_9fa48("429") ? () => undefined : (stryCov_9fa48("429"), (() => {
  const handleRoomFormSubmitStart = values => stryMutAct_9fa48("430") ? {} : (stryCov_9fa48("430"), {
    type: actionsType.HANDLE_ROOM_FORM_SUBMIT_START,
    values
  });
  return handleRoomFormSubmitStart;
})());
export const toggleRoomVisibilityStart = stryMutAct_9fa48("431") ? () => undefined : (stryCov_9fa48("431"), (() => {
  const toggleRoomVisibilityStart = (roomId, isDisabled) => stryMutAct_9fa48("432") ? {} : (stryCov_9fa48("432"), {
    type: actionsType.TOGGLE_ROOM_VISIBILITY_START,
    roomId,
    isDisabled
  });
  return toggleRoomVisibilityStart;
})());
export const addRoomTypeSuccess = stryMutAct_9fa48("433") ? () => undefined : (stryCov_9fa48("433"), (() => {
  const addRoomTypeSuccess = roomType => stryMutAct_9fa48("434") ? {} : (stryCov_9fa48("434"), {
    type: actionsType.ADD_ROOM_TYPE,
    roomType
  });
  return addRoomTypeSuccess;
})());
export const getAllRoomTypesSuccess = stryMutAct_9fa48("435") ? () => undefined : (stryCov_9fa48("435"), (() => {
  const getAllRoomTypesSuccess = roomType => stryMutAct_9fa48("436") ? {} : (stryCov_9fa48("436"), {
    type: actionsType.GET_ALL_ROOM_TYPES,
    roomType
  });
  return getAllRoomTypesSuccess;
})());
export const getAllRoomTypesStart = stryMutAct_9fa48("437") ? () => undefined : (stryCov_9fa48("437"), (() => {
  const getAllRoomTypesStart = () => stryMutAct_9fa48("438") ? {} : (stryCov_9fa48("438"), {
    type: actionsType.GET_ALL_ROOM_TYPES_START
  });
  return getAllRoomTypesStart;
})());
export const deleteRoomTypeSuccess = stryMutAct_9fa48("439") ? () => undefined : (stryCov_9fa48("439"), (() => {
  const deleteRoomTypeSuccess = roomTypeId => stryMutAct_9fa48("440") ? {} : (stryCov_9fa48("440"), {
    type: actionsType.DELETE_ROOM_TYPE,
    roomTypeId
  });
  return deleteRoomTypeSuccess;
})());
export const deleteRoomTypeStart = stryMutAct_9fa48("441") ? () => undefined : (stryCov_9fa48("441"), (() => {
  const deleteRoomTypeStart = roomTypeId => stryMutAct_9fa48("442") ? {} : (stryCov_9fa48("442"), {
    type: actionsType.DELETE_ROOM_TYPE_START,
    roomTypeId
  });
  return deleteRoomTypeStart;
})());
export const updateRoomTypeSuccess = stryMutAct_9fa48("443") ? () => undefined : (stryCov_9fa48("443"), (() => {
  const updateRoomTypeSuccess = roomType => stryMutAct_9fa48("444") ? {} : (stryCov_9fa48("444"), {
    type: actionsType.UPDATE_ROOM_TYPE,
    roomType
  });
  return updateRoomTypeSuccess;
})());
export const selectRoomType = stryMutAct_9fa48("445") ? () => undefined : (stryCov_9fa48("445"), (() => {
  const selectRoomType = typeId => stryMutAct_9fa48("446") ? {} : (stryCov_9fa48("446"), {
    type: actionsType.SELECT_ROOM_TYPE,
    typeId
  });
  return selectRoomType;
})());
export const handleRoomTypeFormSubmitStart = stryMutAct_9fa48("447") ? () => undefined : (stryCov_9fa48("447"), (() => {
  const handleRoomTypeFormSubmitStart = values => stryMutAct_9fa48("448") ? {} : (stryCov_9fa48("448"), {
    type: actionsType.HANDLE_ROOM_TYPE_FORM_SUBMIT_START,
    values
  });
  return handleRoomTypeFormSubmitStart;
})());