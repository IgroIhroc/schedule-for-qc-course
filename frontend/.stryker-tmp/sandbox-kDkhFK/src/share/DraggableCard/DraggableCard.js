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
import './DraggableCard.scss';
export const DraggableCard = props => {
  if (stryMutAct_9fa48("8504")) {
    {}
  } else {
    stryCov_9fa48("8504");
    const {
      children,
      item,
      dragAndDropItem,
      setGroupStart,
      cardClassName = stryMutAct_9fa48("8505") ? "" : (stryCov_9fa48("8505"), 'group-card')
    } = props;
    const [isDragging, setIsDragging] = useState(stryMutAct_9fa48("8506") ? true : (stryCov_9fa48("8506"), false));
    const findCard = e => {
      if (stryMutAct_9fa48("8507")) {
        {}
      } else {
        stryCov_9fa48("8507");
        return e.target.closest(stryMutAct_9fa48("8508") ? `` : (stryCov_9fa48("8508"), `.${cardClassName}`));
      }
    };
    const dragStartHandler = card => {
      if (stryMutAct_9fa48("8509")) {
        {}
      } else {
        stryCov_9fa48("8509");
        setIsDragging(stryMutAct_9fa48("8510") ? false : (stryCov_9fa48("8510"), true));
        setGroupStart(card);
      }
    };
    const dragEndHandler = () => {
      if (stryMutAct_9fa48("8511")) {
        {}
      } else {
        stryCov_9fa48("8511");
        setIsDragging(stryMutAct_9fa48("8512") ? true : (stryCov_9fa48("8512"), false));
      }
    };
    const dragLeaveHandler = e => {
      if (stryMutAct_9fa48("8513")) {
        {}
      } else {
        stryCov_9fa48("8513");
        const card = findCard(e);
        if (stryMutAct_9fa48("8515") ? false : stryMutAct_9fa48("8514") ? true : (stryCov_9fa48("8514", "8515"), card)) {
          if (stryMutAct_9fa48("8516")) {
            {}
          } else {
            stryCov_9fa48("8516");
            card.classList.remove(stryMutAct_9fa48("8517") ? "" : (stryCov_9fa48("8517"), 'drag-border-card'));
          }
        }
      }
    };
    const dragOverHandler = e => {
      if (stryMutAct_9fa48("8518")) {
        {}
      } else {
        stryCov_9fa48("8518");
        e.preventDefault();
        const card = findCard(e);
        if (stryMutAct_9fa48("8520") ? false : stryMutAct_9fa48("8519") ? true : (stryCov_9fa48("8519", "8520"), card)) {
          if (stryMutAct_9fa48("8521")) {
            {}
          } else {
            stryCov_9fa48("8521");
            card.classList.add(stryMutAct_9fa48("8522") ? "" : (stryCov_9fa48("8522"), 'drag-border-card'));
          }
        }
      }
    };
    const dropHandler = (e, cardItem) => {
      if (stryMutAct_9fa48("8523")) {
        {}
      } else {
        stryCov_9fa48("8523");
        e.preventDefault();
        const card = findCard(e);
        if (stryMutAct_9fa48("8525") ? false : stryMutAct_9fa48("8524") ? true : (stryCov_9fa48("8524", "8525"), card)) {
          if (stryMutAct_9fa48("8526")) {
            {}
          } else {
            stryCov_9fa48("8526");
            card.classList.remove(stryMutAct_9fa48("8527") ? "" : (stryCov_9fa48("8527"), 'drag-border-card'));
          }
        }
        dragAndDropItem(cardItem.id);
      }
    };
    return <div className={stryMutAct_9fa48("8528") ? `` : (stryCov_9fa48("8528"), `drag-and-drop-card ${isDragging ? stryMutAct_9fa48("8529") ? "" : (stryCov_9fa48("8529"), 'dragging') : stryMutAct_9fa48("8530") ? "Stryker was here!" : (stryCov_9fa48("8530"), '')}`)} onDragStart={stryMutAct_9fa48("8531") ? () => undefined : (stryCov_9fa48("8531"), () => dragStartHandler(item))} onDragEnd={dragEndHandler} onDragLeave={stryMutAct_9fa48("8532") ? () => undefined : (stryCov_9fa48("8532"), e => dragLeaveHandler(e))} onDragOver={stryMutAct_9fa48("8533") ? () => undefined : (stryCov_9fa48("8533"), e => dragOverHandler(e))} onDrop={stryMutAct_9fa48("8534") ? () => undefined : (stryCov_9fa48("8534"), e => dropHandler(e, item))} draggable>
            {children}
        </div>;
  }
};