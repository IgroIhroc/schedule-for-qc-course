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
import { get } from 'lodash';
import CustomDialog from '../../containers/Dialogs/CustomDialog';
import { dialogTypes } from '../../constants/dialogs';
import { cardType } from '../../constants/cardType';
import AddRoomForm from './RoomForm/RoomForm';
import RoomTypeForm from './RoomTypeForm/RoomTypeForm';
import SearchPanel from '../../share/SearchPanel/SearchPanel';
import RoomList from './RoomsList/RoomsList';
const RoomPage = props => {
  if (stryMutAct_9fa48("2512")) {
    {}
  } else {
    stryCov_9fa48("2512");
    const {
      rooms,
      roomTypes,
      oneType,
      disabledRooms,
      isOpenConfirmDialog,
      setOpenConfirmDialog,
      oneRoom,
      handleRoomFormSubmit,
      getListOfRooms,
      getListOfDisabledRooms,
      getAllRoomTypes,
      toggleRoomVisibility,
      deleteRoom,
      deleteRoomType,
      handleRoomTypeFormSubmit,
      setSelectRoom,
      clearRoomItem,
      setSelectRoomType,
      loading,
      dragAndDropRoom
    } = props;
    const [isDisabled, setIsDisabled] = useState(stryMutAct_9fa48("2513") ? true : (stryCov_9fa48("2513"), false));
    const [confirmDialogType, setConfirmDialogType] = useState(stryMutAct_9fa48("2514") ? "Stryker was here!" : (stryCov_9fa48("2514"), ''));
    const [deleteLabel, setDeleteLabel] = useState(stryMutAct_9fa48("2515") ? "Stryker was here!" : (stryCov_9fa48("2515"), ''));
    const [selectedId, setSelectedId] = useState();
    const [term, setTerm] = useState(stryMutAct_9fa48("2516") ? "Stryker was here!" : (stryCov_9fa48("2516"), ''));
    useEffect(() => {
      if (stryMutAct_9fa48("2517")) {
        {}
      } else {
        stryCov_9fa48("2517");
        getAllRoomTypes();
      }
    }, stryMutAct_9fa48("2518") ? ["Stryker was here"] : (stryCov_9fa48("2518"), []));
    useEffect(() => {
      if (stryMutAct_9fa48("2519")) {
        {}
      } else {
        stryCov_9fa48("2519");
        if (stryMutAct_9fa48("2521") ? false : stryMutAct_9fa48("2520") ? true : (stryCov_9fa48("2520", "2521"), isDisabled)) {
          if (stryMutAct_9fa48("2522")) {
            {}
          } else {
            stryCov_9fa48("2522");
            getListOfDisabledRooms();
          }
        } else {
          if (stryMutAct_9fa48("2523")) {
            {}
          } else {
            stryCov_9fa48("2523");
            getListOfRooms();
          }
        }
      }
    }, stryMutAct_9fa48("2524") ? [] : (stryCov_9fa48("2524"), [isDisabled]));
    const submitRoomForm = values => {
      if (stryMutAct_9fa48("2525")) {
        {}
      } else {
        stryCov_9fa48("2525");
        const type = roomTypes.find(stryMutAct_9fa48("2526") ? () => undefined : (stryCov_9fa48("2526"), roomType => stryMutAct_9fa48("2529") ? roomType.id !== values.type : stryMutAct_9fa48("2528") ? false : stryMutAct_9fa48("2527") ? true : (stryCov_9fa48("2527", "2528", "2529"), roomType.id === values.type)));
        const afterId = values.afterId ? values.afterId.id : null;
        handleRoomFormSubmit(stryMutAct_9fa48("2530") ? {} : (stryCov_9fa48("2530"), {
          ...values,
          type,
          afterId
        }));
      }
    };
    const showConfirmDialog = (id, dialogType, label) => {
      if (stryMutAct_9fa48("2531")) {
        {}
      } else {
        stryCov_9fa48("2531");
        setSelectedId(id);
        setDeleteLabel(label);
        setConfirmDialogType(dialogType);
        setOpenConfirmDialog(stryMutAct_9fa48("2532") ? false : (stryCov_9fa48("2532"), true));
      }
    };
    const handleConfirm = () => {
      if (stryMutAct_9fa48("2533")) {
        {}
      } else {
        stryCov_9fa48("2533");
        setOpenConfirmDialog(stryMutAct_9fa48("2534") ? true : (stryCov_9fa48("2534"), false));
        if (stryMutAct_9fa48("2537") ? deleteLabel !== cardType.TYPE : stryMutAct_9fa48("2536") ? false : stryMutAct_9fa48("2535") ? true : (stryCov_9fa48("2535", "2536", "2537"), deleteLabel === cardType.TYPE)) deleteRoomType(selectedId);
        if (stryMutAct_9fa48("2540") ? deleteLabel !== cardType.ROOM : stryMutAct_9fa48("2539") ? false : stryMutAct_9fa48("2538") ? true : (stryCov_9fa48("2538", "2539", "2540"), deleteLabel === cardType.ROOM)) {
          if (stryMutAct_9fa48("2541")) {
            {}
          } else {
            stryCov_9fa48("2541");
            if (stryMutAct_9fa48("2544") ? confirmDialogType === dialogTypes.DELETE_CONFIRM : stryMutAct_9fa48("2543") ? false : stryMutAct_9fa48("2542") ? true : (stryCov_9fa48("2542", "2543", "2544"), confirmDialogType !== dialogTypes.DELETE_CONFIRM)) {
              if (stryMutAct_9fa48("2545")) {
                {}
              } else {
                stryCov_9fa48("2545");
                toggleRoomVisibility(selectedId, isDisabled);
              }
            } else {
              if (stryMutAct_9fa48("2546")) {
                {}
              } else {
                stryCov_9fa48("2546");
                deleteRoom(selectedId, isDisabled);
              }
            }
          }
        }
      }
    };
    const changeDisable = stryMutAct_9fa48("2547") ? () => undefined : (stryCov_9fa48("2547"), (() => {
      const changeDisable = () => setIsDisabled(stryMutAct_9fa48("2548") ? () => undefined : (stryCov_9fa48("2548"), prev => stryMutAct_9fa48("2549") ? prev : (stryCov_9fa48("2549"), !prev)));
      return changeDisable;
    })());
    return <>
            <CustomDialog type={confirmDialogType} handelConfirm={handleConfirm} whatDelete={deleteLabel} open={isOpenConfirmDialog} />

            <div className="cards-container">
                <aside className="search-list__panel">
                    <SearchPanel SearchChange={setTerm} showDisabled={changeDisable} />
                    {stryMutAct_9fa48("2552") ? !isDisabled || <>
                            <AddRoomForm onSubmit={submitRoomForm} clearRoomItem={clearRoomItem} oneRoom={oneRoom} roomTypes={roomTypes} rooms={rooms} />
                            <RoomTypeForm onSubmit={handleRoomTypeFormSubmit} isOpenConfirmDialog={isOpenConfirmDialog} showConfirmDialog={showConfirmDialog} oneType={oneType} roomTypes={roomTypes} setSelectRoomType={setSelectRoomType} />
                        </> : stryMutAct_9fa48("2551") ? false : stryMutAct_9fa48("2550") ? true : (stryCov_9fa48("2550", "2551", "2552"), (stryMutAct_9fa48("2553") ? isDisabled : (stryCov_9fa48("2553"), !isDisabled)) && <>
                            <AddRoomForm onSubmit={submitRoomForm} clearRoomItem={clearRoomItem} oneRoom={oneRoom} roomTypes={roomTypes} rooms={rooms} />
                            <RoomTypeForm onSubmit={handleRoomTypeFormSubmit} isOpenConfirmDialog={isOpenConfirmDialog} showConfirmDialog={showConfirmDialog} oneType={oneType} roomTypes={roomTypes} setSelectRoomType={setSelectRoomType} />
                        </>)}
                </aside>
                {stryMutAct_9fa48("2556") ? !get(rooms[0], 'schedules') || <RoomList isDisabled={isDisabled} showConfirmDialog={showConfirmDialog} term={term} disabledRooms={disabledRooms} rooms={rooms} setSelectRoom={setSelectRoom} loading={loading} dragAndDropRoom={dragAndDropRoom} /> : stryMutAct_9fa48("2555") ? false : stryMutAct_9fa48("2554") ? true : (stryCov_9fa48("2554", "2555", "2556"), (stryMutAct_9fa48("2557") ? get(rooms[0], 'schedules') : (stryCov_9fa48("2557"), !get(rooms[0], stryMutAct_9fa48("2558") ? "" : (stryCov_9fa48("2558"), 'schedules')))) && <RoomList isDisabled={isDisabled} showConfirmDialog={showConfirmDialog} term={term} disabledRooms={disabledRooms} rooms={rooms} setSelectRoom={setSelectRoom} loading={loading} dragAndDropRoom={dragAndDropRoom} />)}
            </div>
        </>;
  }
};
export default RoomPage;