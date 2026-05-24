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
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { dialogChooseButton, dialogCloseButton, dialogTypes } from '../../../constants/dialogs';
import { COMMON_ROOM_IS_UNAVAILABLE, COMMON_SCHEDULE_DIALOG_TITLE, COMMON_TEACHER_IS_UNAVAILABLE } from '../../../constants/translationLabels/common';
import { FORM_ROOM_LABEL } from '../../../constants/translationLabels/formElements';
import './ScheduleDialog.scss';
import CustomDialog from '../../../containers/Dialogs/CustomDialog';
import { sortByName } from '../../../helper/sortArray';
import '../../../share/DialogWindows/dialog.scss';
import i18n from '../../../i18n';
import { getOptionLabelWithAvailable } from '../../../utils/selectUtils';
const ScheduleDialog = props => {
  if (stryMutAct_9fa48("1441")) {
    {}
  } else {
    stryCov_9fa48("1441");
    const {
      onClose,
      setOpenConfirmDialog,
      handleChangeSchedule,
      itemData,
      open,
      rooms,
      t,
      availability,
      isOpenConfirmDialog
    } = props;
    const [room, setRoom] = useState(stryMutAct_9fa48("1442") ? "Stryker was here!" : (stryCov_9fa48("1442"), ''));
    const [warnings, setWarnings] = useState(stryMutAct_9fa48("1443") ? ["Stryker was here"] : (stryCov_9fa48("1443"), []));
    useEffect(() => {
      if (stryMutAct_9fa48("1444")) {
        {}
      } else {
        stryCov_9fa48("1444");
        if (stryMutAct_9fa48("1447") ? false : stryMutAct_9fa48("1446") ? true : stryMutAct_9fa48("1445") ? availability.teacherAvailable : (stryCov_9fa48("1445", "1446", "1447"), !availability.teacherAvailable)) {
          if (stryMutAct_9fa48("1448")) {
            {}
          } else {
            stryCov_9fa48("1448");
            setWarnings(stryMutAct_9fa48("1449") ? [] : (stryCov_9fa48("1449"), [i18n.t(COMMON_TEACHER_IS_UNAVAILABLE)]));
          }
        } else {
          if (stryMutAct_9fa48("1450")) {
            {}
          } else {
            stryCov_9fa48("1450");
            setWarnings(stryMutAct_9fa48("1451") ? ["Stryker was here"] : (stryCov_9fa48("1451"), []));
          }
        }
      }
    }, stryMutAct_9fa48("1452") ? [] : (stryCov_9fa48("1452"), [availability]));
    const updateWarnings = () => {
      if (stryMutAct_9fa48("1453")) {
        {}
      } else {
        stryCov_9fa48("1453");
        const isRoomAvailableWarning = warnings.includes(i18n.t(COMMON_ROOM_IS_UNAVAILABLE));
        if (stryMutAct_9fa48("1456") ? !room.available || !isRoomAvailableWarning : stryMutAct_9fa48("1455") ? false : stryMutAct_9fa48("1454") ? true : (stryCov_9fa48("1454", "1455", "1456"), (stryMutAct_9fa48("1457") ? room.available : (stryCov_9fa48("1457"), !room.available)) && (stryMutAct_9fa48("1458") ? isRoomAvailableWarning : (stryCov_9fa48("1458"), !isRoomAvailableWarning)))) {
          if (stryMutAct_9fa48("1459")) {
            {}
          } else {
            stryCov_9fa48("1459");
            setWarnings(stryMutAct_9fa48("1460") ? () => undefined : (stryCov_9fa48("1460"), prev => stryMutAct_9fa48("1461") ? [] : (stryCov_9fa48("1461"), [...prev, i18n.t(COMMON_ROOM_IS_UNAVAILABLE)])));
          }
        } else if (stryMutAct_9fa48("1464") ? room.available || isRoomAvailableWarning : stryMutAct_9fa48("1463") ? false : stryMutAct_9fa48("1462") ? true : (stryCov_9fa48("1462", "1463", "1464"), room.available && isRoomAvailableWarning)) {
          if (stryMutAct_9fa48("1465")) {
            {}
          } else {
            stryCov_9fa48("1465");
            setWarnings(prev => {
              if (stryMutAct_9fa48("1466")) {
                {}
              } else {
                stryCov_9fa48("1466");
                prev.pop();
                return prev;
              }
            });
          }
        }
      }
    };
    const chooseClickHandle = () => {
      if (stryMutAct_9fa48("1467")) {
        {}
      } else {
        stryCov_9fa48("1467");
        if (stryMutAct_9fa48("1470") ? false : stryMutAct_9fa48("1469") ? true : stryMutAct_9fa48("1468") ? room : (stryCov_9fa48("1468", "1469", "1470"), !room)) return;
        setOpenConfirmDialog(stryMutAct_9fa48("1471") ? false : (stryCov_9fa48("1471"), true));
        updateWarnings();
      }
    };
    const defaultProps = stryMutAct_9fa48("1472") ? {} : (stryCov_9fa48("1472"), {
      options: availability.rooms ? sortByName(availability.rooms) : sortByName(rooms),
      getOptionLabel: getOptionLabelWithAvailable
    });
    return <>
            <CustomDialog title={t(COMMON_SCHEDULE_DIALOG_TITLE)} open={open} onClose={onClose} buttons={stryMutAct_9fa48("1473") ? [] : (stryCov_9fa48("1473"), [dialogChooseButton(chooseClickHandle), dialogCloseButton(onClose)])}>
                <div className="availability-info">
                    <p className="availability-warning">{warnings[0]}</p>
                </div>
                <div className="autocomplete-container">
                    <Autocomplete {...defaultProps} id="group" clearOnEscape openOnFocus className="form-input" getOptionSelected={stryMutAct_9fa48("1474") ? () => undefined : (stryCov_9fa48("1474"), (option, value) => stryMutAct_9fa48("1477") ? option.id !== value.id : stryMutAct_9fa48("1476") ? false : stryMutAct_9fa48("1475") ? true : (stryCov_9fa48("1475", "1476", "1477"), option.id === value.id))} onChange={(_, newValue) => {
            if (stryMutAct_9fa48("1478")) {
              {}
            } else {
              stryCov_9fa48("1478");
              setRoom(newValue);
            }
          }} renderInput={stryMutAct_9fa48("1479") ? () => undefined : (stryCov_9fa48("1479"), params => <TextField {...params} label={t(FORM_ROOM_LABEL)} margin="normal" />)} />
                </div>
            </CustomDialog>

            <CustomDialog type={dialogTypes.CONFIRM_WITH_WARNING} open={isOpenConfirmDialog} warnings={warnings} handelConfirm={() => {
        if (stryMutAct_9fa48("1480")) {
          {}
        } else {
          stryCov_9fa48("1480");
          handleChangeSchedule(room.id, itemData);
          setOpenConfirmDialog(stryMutAct_9fa48("1481") ? true : (stryCov_9fa48("1481"), false));
        }
      }} />
        </>;
  }
};
ScheduleDialog.propTypes = stryMutAct_9fa48("1482") ? {} : (stryCov_9fa48("1482"), {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  rooms: PropTypes.array.isRequired,
  availability: PropTypes.object.isRequired
});
export default ScheduleDialog;