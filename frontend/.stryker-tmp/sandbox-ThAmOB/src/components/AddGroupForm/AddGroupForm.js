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
import Button from '@material-ui/core/Button';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Field } from 'redux-form';
import { CREATE_TITLE, EDIT_TITLE, FORM_GROUP_LABEL_AFTER, GROUP_LABEL, GROUP_Y_LABEL, SAVE_BUTTON_LABEL } from '../../constants/translationLabels/formElements';
import { getClearOrCancelTitle, setDisableButton } from '../../helper/disableComponent';
import { renderAutocompleteField } from '../../helper/renderAutocompleteField';
import renderTextField from '../../share/renderedFields/input';
import { minLengthValue, required, uniqueGroup } from '../../validation/validateFields';
import './AddGroupForms.scss';
export const AddGroup = props => {
  if (stryMutAct_9fa48("739")) {
    {}
  } else {
    stryCov_9fa48("739");
    const {
      clearGroupStart,
      submitGroupStart,
      handleSubmit,
      initialize,
      submitting,
      setGroup,
      pristine,
      invalid,
      groups,
      group
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("740") ? "" : (stryCov_9fa48("740"), 'formElements'));
    const removeCurrentGroup = stryMutAct_9fa48("741") ? () => undefined : (stryCov_9fa48("741"), (() => {
      const removeCurrentGroup = () => stryMutAct_9fa48("742") ? groups : (stryCov_9fa48("742"), groups.filter(stryMutAct_9fa48("743") ? () => undefined : (stryCov_9fa48("743"), el => stryMutAct_9fa48("746") ? el.id === group.id : stryMutAct_9fa48("745") ? false : stryMutAct_9fa48("744") ? true : (stryCov_9fa48("744", "745", "746"), el.id !== group.id))));
      return removeCurrentGroup;
    })());
    const groupsForAutocomplete = group.id ? removeCurrentGroup() : groups;
    useEffect(() => {
      if (stryMutAct_9fa48("747")) {
        {}
      } else {
        stryCov_9fa48("747");
        const groupIndex = groups.findIndex(stryMutAct_9fa48("748") ? () => undefined : (stryCov_9fa48("748"), ({
          id
        }) => stryMutAct_9fa48("751") ? id !== group.id : stryMutAct_9fa48("750") ? false : stryMutAct_9fa48("749") ? true : (stryCov_9fa48("749", "750", "751"), id === group.id)));
        const afterId = groups.find(stryMutAct_9fa48("752") ? () => undefined : (stryCov_9fa48("752"), (item, index) => stryMutAct_9fa48("755") ? index !== groupIndex - 1 : stryMutAct_9fa48("754") ? false : stryMutAct_9fa48("753") ? true : (stryCov_9fa48("753", "754", "755"), index === (stryMutAct_9fa48("756") ? groupIndex + 1 : (stryCov_9fa48("756"), groupIndex - 1)))));
        if (stryMutAct_9fa48("758") ? false : stryMutAct_9fa48("757") ? true : (stryCov_9fa48("757", "758"), group.id)) {
          if (stryMutAct_9fa48("759")) {
            {}
          } else {
            stryCov_9fa48("759");
            initialize(stryMutAct_9fa48("760") ? {} : (stryCov_9fa48("760"), {
              id: group.id,
              title: group.title,
              afterId
            }));
          }
        } else {
          if (stryMutAct_9fa48("761")) {
            {}
          } else {
            stryCov_9fa48("761");
            initialize();
          }
        }
      }
    }, stryMutAct_9fa48("762") ? [] : (stryCov_9fa48("762"), [group.id, group.title, groups, initialize]));
    const submitGroup = data => {
      if (stryMutAct_9fa48("763")) {
        {}
      } else {
        stryCov_9fa48("763");
        const afterId = data.afterId ? data.afterId.id : null;
        submitGroupStart(stryMutAct_9fa48("764") ? {} : (stryCov_9fa48("764"), {
          ...data,
          disable: stryMutAct_9fa48("765") ? true : (stryCov_9fa48("765"), false),
          afterId
        }));
        setGroup({});
      }
    };
    const onReset = () => {
      if (stryMutAct_9fa48("766")) {
        {}
      } else {
        stryCov_9fa48("766");
        setGroup({});
        clearGroupStart();
      }
    };
    return <div className="group-form">
            <h3 className="group-form-title">
                {group.id ? t(EDIT_TITLE) : t(CREATE_TITLE)}
                {t(GROUP_Y_LABEL)}
            </h3>
            <form onSubmit={handleSubmit(stryMutAct_9fa48("767") ? () => undefined : (stryCov_9fa48("767"), data => submitGroup(data)))}>
                <Field className="form-field" name="title" id="title" label={stryMutAct_9fa48("768") ? `` : (stryCov_9fa48("768"), `${t(GROUP_LABEL)}:`)} component={renderTextField} validate={stryMutAct_9fa48("769") ? [] : (stryCov_9fa48("769"), [required, uniqueGroup, minLengthValue])} />
                <Field className="select-field" name="afterId" component={renderAutocompleteField} label={t(FORM_GROUP_LABEL_AFTER)} type="text" values={groupsForAutocomplete} getOptionLabel={stryMutAct_9fa48("770") ? () => undefined : (stryCov_9fa48("770"), item => item ? item.title : stryMutAct_9fa48("771") ? "Stryker was here!" : (stryCov_9fa48("771"), ''))}></Field>
                <div className="form-buttons-container">
                    <Button size="small" variant="contained" className="buttons-style " color="primary" disabled={stryMutAct_9fa48("774") ? (invalid || pristine) && submitting : stryMutAct_9fa48("773") ? false : stryMutAct_9fa48("772") ? true : (stryCov_9fa48("772", "773", "774"), (stryMutAct_9fa48("776") ? invalid && pristine : stryMutAct_9fa48("775") ? false : (stryCov_9fa48("775", "776"), invalid || pristine)) || submitting)} type="submit">
                        {t(SAVE_BUTTON_LABEL)}
                    </Button>
                    <Button size="small" type="button" className="buttons-style" variant="contained" disabled={setDisableButton(pristine, submitting, group.id)} onClick={onReset}>
                        {getClearOrCancelTitle(group.id, t)}
                    </Button>
                </div>
            </form>
        </div>;
  }
};