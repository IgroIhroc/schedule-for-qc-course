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
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import MenuItem from '@material-ui/core/MenuItem';
import renderTextField from '../../../share/renderedFields/input';
import SelectField from '../../../share/renderedFields/select';
import { ROOM_FORM } from '../../../constants/reduxForms';
import { required, uniqueRoomName } from '../../../validation/validateFields';
import Card from '../../../share/Card/Card';
import './RoomForm.scss';
import { getClearOrCancelTitle, setDisableButton } from '../../../helper/disableComponent';
import { CREATE_TITLE, EDIT_TITLE, FORM_ROOM_LABEL_AFTER, NUMBER_LABEL, ROOM_LABEL, ROOM_Y_LABEL, SAVE_BUTTON_LABEL } from '../../../constants/translationLabels/formElements';
import { TYPE_LABEL } from '../../../constants/translationLabels/common';
import { renderAutocompleteField } from '../../../helper/renderAutocompleteField';
const RoomForm = props => {
  if (stryMutAct_9fa48("2453")) {
    {}
  } else {
    stryCov_9fa48("2453");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("2454") ? "" : (stryCov_9fa48("2454"), 'formElements'));
    const {
      handleSubmit,
      pristine,
      submitting,
      reset,
      oneRoom,
      roomTypes,
      rooms,
      initialize,
      clearRoomItem
    } = props;
    const removeCurrentRoom = stryMutAct_9fa48("2455") ? () => undefined : (stryCov_9fa48("2455"), (() => {
      const removeCurrentRoom = () => stryMutAct_9fa48("2456") ? rooms : (stryCov_9fa48("2456"), rooms.filter(stryMutAct_9fa48("2457") ? () => undefined : (stryCov_9fa48("2457"), el => stryMutAct_9fa48("2460") ? el.id === oneRoom.id : stryMutAct_9fa48("2459") ? false : stryMutAct_9fa48("2458") ? true : (stryCov_9fa48("2458", "2459", "2460"), el.id !== oneRoom.id))));
      return removeCurrentRoom;
    })());
    const roomsForAutocomplete = oneRoom.id ? removeCurrentRoom() : rooms;
    useEffect(() => {
      if (stryMutAct_9fa48("2461")) {
        {}
      } else {
        stryCov_9fa48("2461");
        if (stryMutAct_9fa48("2463") ? false : stryMutAct_9fa48("2462") ? true : (stryCov_9fa48("2462", "2463"), oneRoom.id)) {
          if (stryMutAct_9fa48("2464")) {
            {}
          } else {
            stryCov_9fa48("2464");
            const {
              name,
              type,
              id
            } = oneRoom;
            const roomIndex = rooms.findIndex(stryMutAct_9fa48("2465") ? () => undefined : (stryCov_9fa48("2465"), room => stryMutAct_9fa48("2468") ? room.id !== id : stryMutAct_9fa48("2467") ? false : stryMutAct_9fa48("2466") ? true : (stryCov_9fa48("2466", "2467", "2468"), room.id === id)));
            const afterId = rooms.find(stryMutAct_9fa48("2469") ? () => undefined : (stryCov_9fa48("2469"), (item, index) => stryMutAct_9fa48("2472") ? index !== roomIndex - 1 : stryMutAct_9fa48("2471") ? false : stryMutAct_9fa48("2470") ? true : (stryCov_9fa48("2470", "2471", "2472"), index === (stryMutAct_9fa48("2473") ? roomIndex + 1 : (stryCov_9fa48("2473"), roomIndex - 1)))));
            initialize(stryMutAct_9fa48("2474") ? {} : (stryCov_9fa48("2474"), {
              id,
              name,
              type: type.id,
              afterId
            }));
          }
        } else {
          if (stryMutAct_9fa48("2475")) {
            {}
          } else {
            stryCov_9fa48("2475");
            initialize();
          }
        }
      }
    }, stryMutAct_9fa48("2476") ? [] : (stryCov_9fa48("2476"), [oneRoom, rooms, initialize]));
    return <Card additionClassName="form-card room-form">
            <form onSubmit={handleSubmit}>
                <h2 className="form-title">
                    {oneRoom.id ? t(EDIT_TITLE) : t(CREATE_TITLE)} {t(ROOM_Y_LABEL)}
                </h2>
                <Field type="text" name="name" component={renderTextField} placeholder={t(NUMBER_LABEL)} className="form-field" label={t(ROOM_LABEL)} validate={stryMutAct_9fa48("2477") ? [] : (stryCov_9fa48("2477"), [required, uniqueRoomName])} />
                <Field className="form-field" component={SelectField} name="type" label={t(TYPE_LABEL)} validate={stryMutAct_9fa48("2478") ? [] : (stryCov_9fa48("2478"), [required])}>
                    <MenuItem value="" className="hidden" disabled />
                    {roomTypes.map(stryMutAct_9fa48("2479") ? () => undefined : (stryCov_9fa48("2479"), roomType => <MenuItem key={roomType.id} value={roomType.id}>
                            {roomType.description}
                        </MenuItem>))}
                </Field>
                <Field className="form-field" name="afterId" component={renderAutocompleteField} label={t(FORM_ROOM_LABEL_AFTER)} type="text" values={roomsForAutocomplete} getOptionLabel={stryMutAct_9fa48("2480") ? () => undefined : (stryCov_9fa48("2480"), item => item ? item.name : stryMutAct_9fa48("2481") ? "Stryker was here!" : (stryCov_9fa48("2481"), ''))} />
                <div className="form-buttons-container">
                    <Button className="buttons-style" variant="contained" color="primary" disabled={stryMutAct_9fa48("2484") ? pristine && submitting : stryMutAct_9fa48("2483") ? false : stryMutAct_9fa48("2482") ? true : (stryCov_9fa48("2482", "2483", "2484"), pristine || submitting)} type="submit">
                        {t(SAVE_BUTTON_LABEL)}
                    </Button>
                    <Button className="buttons-style" variant="contained" disabled={setDisableButton(pristine, submitting, oneRoom.id)} onClick={() => {
            if (stryMutAct_9fa48("2485")) {
              {}
            } else {
              stryCov_9fa48("2485");
              clearRoomItem();
              reset(ROOM_FORM);
            }
          }}>
                        {getClearOrCancelTitle(oneRoom.id, t)}
                    </Button>
                </div>
            </form>
        </Card>;
  }
};
export default reduxForm(stryMutAct_9fa48("2486") ? {} : (stryCov_9fa48("2486"), {
  form: ROOM_FORM
}))(RoomForm);