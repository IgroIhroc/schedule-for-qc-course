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
import CircularProgress from '@material-ui/core/CircularProgress';
import { FaDoorOpen } from 'react-icons/fa';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FreeRoomForm from '../../containers/Rooms/FreeRoomsForm';
import CustomDialog from '../../containers/Dialogs/CustomDialog';
import { dialogCloseButton } from '../../constants/dialogs';
import './FreeRoomsDialog.scss';
import { FIND_FREE_ROOM } from '../../constants/translationLabels/formElements';
import FreeRoomsCardList from './FreeRoomsCardList';
const FreeRoomsDialog = props => {
  if (stryMutAct_9fa48("1588")) {
    {}
  } else {
    stryCov_9fa48("1588");
    const {
      clearFreeRooms,
      freeRooms,
      isLoading,
      getClassScheduleList
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("1589") ? "" : (stryCov_9fa48("1589"), 'formElements'));
    const [isOpenFreeRoomDialog, setIsOpenFreeRoomDialog] = useState(stryMutAct_9fa48("1590") ? true : (stryCov_9fa48("1590"), false));
    useEffect(() => {
      if (stryMutAct_9fa48("1591")) {
        {}
      } else {
        stryCov_9fa48("1591");
        getClassScheduleList();
      }
    }, stryMutAct_9fa48("1592") ? ["Stryker was here"] : (stryCov_9fa48("1592"), []));
    const handleIsOpenFreeRoomDialog = () => {
      if (stryMutAct_9fa48("1593")) {
        {}
      } else {
        stryCov_9fa48("1593");
        setIsOpenFreeRoomDialog(stryMutAct_9fa48("1594") ? () => undefined : (stryCov_9fa48("1594"), prev => stryMutAct_9fa48("1595") ? prev : (stryCov_9fa48("1595"), !prev)));
        clearFreeRooms();
      }
    };
    return <>
            <span className="navLinks" onClick={handleIsOpenFreeRoomDialog} aria-hidden="true">
                <ListItemIcon>
                    <FaDoorOpen fontSize="normal" />
                </ListItemIcon>
                {t(FIND_FREE_ROOM)}
            </span>
            {stryMutAct_9fa48("1598") ? isOpenFreeRoomDialog || <CustomDialog open={isOpenFreeRoomDialog} onClose={handleIsOpenFreeRoomDialog} buttons={[dialogCloseButton(handleIsOpenFreeRoomDialog)]} className="free-room-dialog">
                    <div className="dialog-body-container">
                        <section className="free-rooms-container">
                            {isLoading ? <div className="loading-rooms">
                                    <CircularProgress size="70px" className="loading-circle" />
                                </div> : <FreeRoomsCardList freeRooms={freeRooms} t={t} />}
                        </section>
                        <aside className="free-rooms-form-container">
                            <FreeRoomForm />
                        </aside>
                    </div>
                </CustomDialog> : stryMutAct_9fa48("1597") ? false : stryMutAct_9fa48("1596") ? true : (stryCov_9fa48("1596", "1597", "1598"), isOpenFreeRoomDialog && <CustomDialog open={isOpenFreeRoomDialog} onClose={handleIsOpenFreeRoomDialog} buttons={stryMutAct_9fa48("1599") ? [] : (stryCov_9fa48("1599"), [dialogCloseButton(handleIsOpenFreeRoomDialog)])} className="free-room-dialog">
                    <div className="dialog-body-container">
                        <section className="free-rooms-container">
                            {isLoading ? <div className="loading-rooms">
                                    <CircularProgress size="70px" className="loading-circle" />
                                </div> : <FreeRoomsCardList freeRooms={freeRooms} t={t} />}
                        </section>
                        <aside className="free-rooms-form-container">
                            <FreeRoomForm />
                        </aside>
                    </div>
                </CustomDialog>)}
        </>;
  }
};
export default FreeRoomsDialog;