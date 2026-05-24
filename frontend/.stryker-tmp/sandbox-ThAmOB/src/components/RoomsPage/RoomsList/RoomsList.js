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
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CircularProgress } from '@material-ui/core';
import { isEmpty } from 'lodash';
import NotFound from '../../../share/NotFound/NotFound';
import { ROOM_Y_LABEL } from '../../../constants/translationLabels/formElements';
import RoomCard from './RoomCard/RoomCard';
import { search } from '../../../helper/search';
import { DraggableCard } from '../../../share/DraggableCard/DraggableCard';
const RoomList = props => {
  if (stryMutAct_9fa48("2494")) {
    {}
  } else {
    stryCov_9fa48("2494");
    const {
      isDisabled,
      disabledRooms,
      term,
      rooms,
      loading,
      dragAndDropRoom,
      ...rest
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2495") ? "" : (stryCov_9fa48("2495"), 'formElements'));
    const [dragRoom, setDragRoom] = useState(null);
    const visibleItems = isDisabled ? search(disabledRooms, term, stryMutAct_9fa48("2496") ? [] : (stryCov_9fa48("2496"), [stryMutAct_9fa48("2497") ? "" : (stryCov_9fa48("2497"), 'name')])) : search(rooms, term, stryMutAct_9fa48("2498") ? [] : (stryCov_9fa48("2498"), [stryMutAct_9fa48("2499") ? "" : (stryCov_9fa48("2499"), 'name')]));
    const dragAndDropItem = afterItemId => {
      if (stryMutAct_9fa48("2500")) {
        {}
      } else {
        stryCov_9fa48("2500");
        dragAndDropRoom(dragRoom, afterItemId);
      }
    };
    if (stryMutAct_9fa48("2502") ? false : stryMutAct_9fa48("2501") ? true : (stryCov_9fa48("2501", "2502"), loading)) {
      if (stryMutAct_9fa48("2503")) {
        {}
      } else {
        stryCov_9fa48("2503");
        return <section className="centered-container">
                <CircularProgress />
            </section>;
      }
    }
    if (stryMutAct_9fa48("2505") ? false : stryMutAct_9fa48("2504") ? true : (stryCov_9fa48("2504", "2505"), isEmpty(visibleItems))) {
      if (stryMutAct_9fa48("2506")) {
        {}
      } else {
        stryCov_9fa48("2506");
        return <NotFound name={t(ROOM_Y_LABEL)} />;
      }
    }
    if (stryMutAct_9fa48("2508") ? false : stryMutAct_9fa48("2507") ? true : (stryCov_9fa48("2507", "2508"), isDisabled)) {
      if (stryMutAct_9fa48("2509")) {
        {}
      } else {
        stryCov_9fa48("2509");
        return <section className="container-flex-wrap">
                {visibleItems.map(stryMutAct_9fa48("2510") ? () => undefined : (stryCov_9fa48("2510"), room => <RoomCard key={room.id} {...rest} room={room} isDisabled={isDisabled} />))}
            </section>;
      }
    }
    return <section className="container-flex-wrap">
            {visibleItems.map(stryMutAct_9fa48("2511") ? () => undefined : (stryCov_9fa48("2511"), room => <DraggableCard key={room.id} item={room} setGroupStart={setDragRoom} dragAndDropItem={dragAndDropItem} cardClassName="room-card">
                    <RoomCard {...rest} room={room} isDisabled={isDisabled} />
                </DraggableCard>))}
        </section>;
  }
};
export default RoomList;