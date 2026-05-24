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
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import './dialog.scss';
import dialogMapper from './dialogMapper';
const CustomDialog = props => {
  if (stryMutAct_9fa48("8394")) {
    {}
  } else {
    stryCov_9fa48("8394");
    const {
      className,
      onClose,
      open,
      children,
      handelConfirm,
      whatDelete,
      warnings,
      linkToMeeting,
      setOpenConfirmDialog,
      title,
      buttons = stryMutAct_9fa48("8395") ? ["Stryker was here"] : (stryCov_9fa48("8395"), []),
      ...other
    } = dialogMapper(props);
    return <Dialog className={stryMutAct_9fa48("8396") ? `` : (stryCov_9fa48("8396"), `custom-dialog ${className}`)} onClose={stryMutAct_9fa48("8397") ? () => undefined : (stryCov_9fa48("8397"), () => onClose(stryMutAct_9fa48("8398") ? "Stryker was here!" : (stryCov_9fa48("8398"), '')))} open={open} {...other}>
            <DialogTitle className="custom-dialog-title">{title}</DialogTitle>
            <DialogContent className="custom-dialog-body">{children}</DialogContent>
            <DialogActions className="buttons-container app-button-container">
                {buttons.map(stryMutAct_9fa48("8399") ? () => undefined : (stryCov_9fa48("8399"), ({
          label,
          handleClick,
          additionClassName = stryMutAct_9fa48("8400") ? "Stryker was here!" : (stryCov_9fa48("8400"), ''),
          ...res
        }) => <Button key={label} variant="contained" className={stryMutAct_9fa48("8401") ? `` : (stryCov_9fa48("8401"), `dialog-button common-button ${additionClassName}`)} onClick={handleClick} {...res}>
                        {label}
                    </Button>))}
            </DialogActions>
        </Dialog>;
  }
};
Dialog.propTypes = stryMutAct_9fa48("8402") ? {} : (stryCov_9fa48("8402"), {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.oneOfType(stryMutAct_9fa48("8403") ? [] : (stryCov_9fa48("8403"), [PropTypes.arrayOf(PropTypes.node), PropTypes.string])),
  children: PropTypes.oneOfType(stryMutAct_9fa48("8404") ? [] : (stryCov_9fa48("8404"), [PropTypes.arrayOf(PropTypes.node), PropTypes.node])),
  buttons: PropTypes.arrayOf(PropTypes.object)
});
export default CustomDialog;