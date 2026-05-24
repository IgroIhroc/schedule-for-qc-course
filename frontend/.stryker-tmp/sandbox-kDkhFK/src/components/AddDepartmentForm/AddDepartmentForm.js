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
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import Card from '../../share/Card/Card';
import { DEPARTMENT_FORM } from '../../constants/reduxForms';
import renderTextField from '../../share/renderedFields/input';
import { maxLengthValue, required, uniqueDepartment } from '../../validation/validateFields';
import { getClearOrCancelTitle, setDisableButton } from '../../helper/disableComponent';
import { CREATE_TITLE, DEPARTMENT_LABEL, EDIT_TITLE, NAME_LABEL, SAVE_BUTTON_LABEL } from '../../constants/translationLabels/formElements';
const AddDepartment = props => {
  if (stryMutAct_9fa48("716")) {
    {}
  } else {
    stryCov_9fa48("716");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("717") ? "" : (stryCov_9fa48("717"), 'formElements'));
    const {
      handleSubmit,
      clear,
      department,
      pristine,
      submitting,
      editDepartment,
      initialize
    } = props;
    useEffect(() => {
      if (stryMutAct_9fa48("718")) {
        {}
      } else {
        stryCov_9fa48("718");
        if (stryMutAct_9fa48("721") ? department || editDepartment : stryMutAct_9fa48("720") ? false : stryMutAct_9fa48("719") ? true : (stryCov_9fa48("719", "720", "721"), department && editDepartment)) {
          if (stryMutAct_9fa48("722")) {
            {}
          } else {
            stryCov_9fa48("722");
            if (stryMutAct_9fa48("724") ? false : stryMutAct_9fa48("723") ? true : (stryCov_9fa48("723", "724"), department.id)) {
              if (stryMutAct_9fa48("725")) {
                {}
              } else {
                stryCov_9fa48("725");
                initialize(stryMutAct_9fa48("726") ? {} : (stryCov_9fa48("726"), {
                  name: department.name,
                  id: department.id
                }));
              }
            } else {
              if (stryMutAct_9fa48("727")) {
                {}
              } else {
                stryCov_9fa48("727");
                initialize();
              }
            }
          }
        }
      }
    }, stryMutAct_9fa48("728") ? [] : (stryCov_9fa48("728"), [department, editDepartment, initialize]));
    return <Card additionClassName="form-card subject-form">
            <h2 style={stryMutAct_9fa48("729") ? {} : (stryCov_9fa48("729"), {
        textAlign: stryMutAct_9fa48("730") ? "" : (stryCov_9fa48("730"), 'center')
      })}>
                {department.id ? t(EDIT_TITLE) : t(CREATE_TITLE)}
                {t(DEPARTMENT_LABEL)}
            </h2>
            <form onSubmit={handleSubmit}>
                <Field className="form-field" name="name" component={renderTextField} label={stryMutAct_9fa48("731") ? `` : (stryCov_9fa48("731"), `${t(NAME_LABEL)}:`)} validate={stryMutAct_9fa48("732") ? [] : (stryCov_9fa48("732"), [required, uniqueDepartment, maxLengthValue])} />
                <div className="form-buttons-container subject-btns">
                    <Button variant="contained" color="primary" className="buttons-style " disabled={stryMutAct_9fa48("735") ? pristine && submitting : stryMutAct_9fa48("734") ? false : stryMutAct_9fa48("733") ? true : (stryCov_9fa48("733", "734", "735"), pristine || submitting)} type="submit">
                        {t(SAVE_BUTTON_LABEL)}
                    </Button>
                    <Button type="button" variant="contained" className="buttons-style" disabled={setDisableButton(pristine, submitting, department.id)} onClick={clear}>
                        {getClearOrCancelTitle(department.id, t)}
                    </Button>
                </div>
            </form>
        </Card>;
  }
};
const mapStateToProps = stryMutAct_9fa48("736") ? () => undefined : (stryCov_9fa48("736"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("737") ? {} : (stryCov_9fa48("737"), {
    department: state.departments.department
  });
  return mapStateToProps;
})());
export default connect(mapStateToProps)(reduxForm(stryMutAct_9fa48("738") ? {} : (stryCov_9fa48("738"), {
  form: DEPARTMENT_FORM
}))(AddDepartment));