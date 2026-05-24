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
import { connect } from 'react-redux';
import { clearRoomSuccess, deleteRoomStart, deleteRoomTypeStart, getAllRoomTypesStart, getListOfDisabledRoomsStart, getListOfRoomsStart, handleRoomFormSubmitStart, handleRoomTypeFormSubmitStart, selectRoomType, setSelectRoomSuccess, toggleRoomVisibilityStart, dragAndDropRoomStart } from '../../actions/rooms';
import { setIsOpenConfirmDialog } from '../../actions/dialog';
import RoomPage from '../../components/RoomsPage/RoomsPage';
const mapStateToProps = stryMutAct_9fa48("5289") ? () => undefined : (stryCov_9fa48("5289"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5290") ? {} : (stryCov_9fa48("5290"), {
    rooms: state.rooms.rooms,
    disabledRooms: state.rooms.disabledRooms,
    oneRoom: state.rooms.oneRoom,
    roomTypes: state.rooms.roomTypes,
    oneType: state.rooms.oneType,
    isOpenConfirmDialog: state.dialog.isOpenConfirmDialog,
    loading: state.loadingIndicator.loading
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5291") ? () => undefined : (stryCov_9fa48("5291"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5292") ? {} : (stryCov_9fa48("5292"), {
    setOpenConfirmDialog: stryMutAct_9fa48("5293") ? () => undefined : (stryCov_9fa48("5293"), newState => dispatch(setIsOpenConfirmDialog(newState))),
    handleRoomFormSubmit: stryMutAct_9fa48("5294") ? () => undefined : (stryCov_9fa48("5294"), values => dispatch(handleRoomFormSubmitStart(values))),
    getListOfRooms: stryMutAct_9fa48("5295") ? () => undefined : (stryCov_9fa48("5295"), () => dispatch(getListOfRoomsStart())),
    getListOfDisabledRooms: stryMutAct_9fa48("5296") ? () => undefined : (stryCov_9fa48("5296"), () => dispatch(getListOfDisabledRoomsStart())),
    getAllRoomTypes: stryMutAct_9fa48("5297") ? () => undefined : (stryCov_9fa48("5297"), () => dispatch(getAllRoomTypesStart())),
    toggleRoomVisibility: stryMutAct_9fa48("5298") ? () => undefined : (stryCov_9fa48("5298"), (roomId, isDisabled) => dispatch(toggleRoomVisibilityStart(roomId, isDisabled))),
    deleteRoom: stryMutAct_9fa48("5299") ? () => undefined : (stryCov_9fa48("5299"), (roomId, isDisabled) => dispatch(deleteRoomStart(roomId, isDisabled))),
    deleteRoomType: stryMutAct_9fa48("5300") ? () => undefined : (stryCov_9fa48("5300"), roomTypeId => dispatch(deleteRoomTypeStart(roomTypeId))),
    handleRoomTypeFormSubmit: stryMutAct_9fa48("5301") ? () => undefined : (stryCov_9fa48("5301"), values => dispatch(handleRoomTypeFormSubmitStart(values))),
    setSelectRoom: stryMutAct_9fa48("5302") ? () => undefined : (stryCov_9fa48("5302"), roomId => dispatch(setSelectRoomSuccess(roomId))),
    clearRoomItem: stryMutAct_9fa48("5303") ? () => undefined : (stryCov_9fa48("5303"), () => dispatch(clearRoomSuccess())),
    setSelectRoomType: stryMutAct_9fa48("5304") ? () => undefined : (stryCov_9fa48("5304"), typeId => dispatch(selectRoomType(typeId))),
    dragAndDropRoom: stryMutAct_9fa48("5305") ? () => undefined : (stryCov_9fa48("5305"), (dragRoom, afterRoomId) => dispatch(dragAndDropRoomStart(dragRoom, afterRoomId)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(RoomPage);