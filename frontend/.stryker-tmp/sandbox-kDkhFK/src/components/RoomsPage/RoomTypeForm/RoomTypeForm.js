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
import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import { useTranslation } from 'react-i18next';
import Button from '@material-ui/core/Button';
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { ROOM_FORM_TYPE } from '../../../constants/reduxForms';
import { cardType } from '../../../constants/cardType';
import { dialogTypes } from '../../../constants/dialogs';
import Card from '../../../share/Card/Card';
import renderTextField from '../../../share/renderedFields/input';
import './RoomTypeForm.scss';
import { ADD_TYPE_LABEL, NEW_TYPE_LABEL, SAVE_BUTTON_LABEL } from '../../../constants/translationLabels/formElements';
const RoomTypeForm = props => {
  if (stryMutAct_9fa48("2559")) {
    {}
  } else {
    stryCov_9fa48("2559");
    const {
      handleSubmit,
      pristine,
      submitting,
      roomTypes,
      oneType,
      initialize,
      setSelectRoomType,
      showConfirmDialog
    } = props;
    useEffect(() => {
      if (stryMutAct_9fa48("2560")) {
        {}
      } else {
        stryCov_9fa48("2560");
        if (stryMutAct_9fa48("2562") ? false : stryMutAct_9fa48("2561") ? true : (stryCov_9fa48("2561", "2562"), oneType.id)) {
          if (stryMutAct_9fa48("2563")) {
            {}
          } else {
            stryCov_9fa48("2563");
            const {
              description,
              id
            } = oneType;
            initialize(stryMutAct_9fa48("2564") ? {} : (stryCov_9fa48("2564"), {
              description,
              id
            }));
          }
        } else {
          if (stryMutAct_9fa48("2565")) {
            {}
          } else {
            stryCov_9fa48("2565");
            initialize({});
          }
        }
      }
    }, stryMutAct_9fa48("2566") ? [] : (stryCov_9fa48("2566"), [oneType]));
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2567") ? "" : (stryCov_9fa48("2567"), 'formElements'));
    return <>
            <Card additionClassName="form-card room-type-card">
                <form className="room-type-form" onSubmit={handleSubmit}>
                    <Field type="text" name="description" component={renderTextField} placeholder={t(ADD_TYPE_LABEL)} label={t(NEW_TYPE_LABEL)} className="form-field" variant="outlined" />
                    <div className="btn-type-form-wrapper">
                        <Button color="primary" className="type-form-btn" disabled={stryMutAct_9fa48("2570") ? pristine && submitting : stryMutAct_9fa48("2569") ? false : stryMutAct_9fa48("2568") ? true : (stryCov_9fa48("2568", "2569", "2570"), pristine || submitting)} variant="contained" type="submit">
                            {t(SAVE_BUTTON_LABEL)}
                        </Button>
                    </div>
                </form>

                <ul className="form-types-list">
                    {roomTypes.map(stryMutAct_9fa48("2571") ? () => undefined : (stryCov_9fa48("2571"), roomType => <li key={roomType.id} value={roomType.description} className="form-types-item">
                            <span className="form-types">{roomType.description}</span>
                            <span>
                                <FaEdit className="room-type-icon room-type-icon_edit" onClick={stryMutAct_9fa48("2572") ? () => undefined : (stryCov_9fa48("2572"), () => setSelectRoomType(roomType.id))} />
                                <MdDelete className="room-type-icon room-type-icon_delete" onClick={() => {
                if (stryMutAct_9fa48("2573")) {
                  {}
                } else {
                  stryCov_9fa48("2573");
                  showConfirmDialog(roomType.id, dialogTypes.DELETE_CONFIRM, cardType.TYPE);
                }
              }} />
                            </span>
                        </li>))}
                </ul>
            </Card>
        </>;
  }
};
export default reduxForm(stryMutAct_9fa48("2574") ? {} : (stryCov_9fa48("2574"), {
  form: ROOM_FORM_TYPE
}))(RoomTypeForm);