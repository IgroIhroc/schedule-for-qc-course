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
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { GiSightDisabled, IoMdEye } from 'react-icons/all';
import { dialogTypes } from '../../../../constants/dialogs';
import Card from '../../../../share/Card/Card';
import { COMMON_SET_DISABLED, COMMON_SET_ENABLED } from '../../../../constants/translationLabels/common';
import { cardType } from '../../../../constants/cardType';
import './RoomCard.scss';
const RoomCard = props => {
  if (stryMutAct_9fa48("2487")) {
    {}
  } else {
    stryCov_9fa48("2487");
    const {
      room,
      isDisabled,
      showConfirmDialog,
      setSelectRoom
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2488") ? "" : (stryCov_9fa48("2488"), 'formElements'));
    return <Card additionClassName="room-card">
            <div className="cards-btns">
                {(stryMutAct_9fa48("2489") ? isDisabled : (stryCov_9fa48("2489"), !isDisabled)) ? <>
                        <IoMdEye className="eye-icon-btn" title={t(COMMON_SET_DISABLED)} onClick={() => {
            if (stryMutAct_9fa48("2490")) {
              {}
            } else {
              stryCov_9fa48("2490");
              showConfirmDialog(room.id, dialogTypes.SET_VISIBILITY_DISABLED, cardType.ROOM);
            }
          }} />
                        <FaEdit className="edit-icon-btn" onClick={stryMutAct_9fa48("2491") ? () => undefined : (stryCov_9fa48("2491"), () => setSelectRoom(room.id))} />
                    </> : <GiSightDisabled className="eye-icon-btn" title={t(COMMON_SET_ENABLED)} onClick={() => {
          if (stryMutAct_9fa48("2492")) {
            {}
          } else {
            stryCov_9fa48("2492");
            showConfirmDialog(room.id, dialogTypes.SET_VISIBILITY_ENABLED, cardType.ROOM);
          }
        }} />}

                <MdDelete className="delete-icon-btn" onClick={() => {
          if (stryMutAct_9fa48("2493")) {
            {}
          } else {
            stryCov_9fa48("2493");
            showConfirmDialog(room.id, dialogTypes.DELETE_CONFIRM, cardType.ROOM);
          }
        }} />
            </div>
            <h2 className="room-card-name">{room.name}</h2>
            <p className="room-card-title">{room.type.description}</p>
        </Card>;
  }
};
export default RoomCard;