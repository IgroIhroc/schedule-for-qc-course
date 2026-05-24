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
import './AddSubjectForm.scss';
import Card from '../../share/Card/Card';
import { SUBJECT_FORM } from '../../constants/reduxForms';
import renderTextField from '../../share/renderedFields/input';
import { maxLengthValue, required, uniqueSubject } from '../../validation/validateFields';
import { getClearOrCancelTitle, setDisableButton } from '../../helper/disableComponent';
import { CREATE_TITLE, EDIT_TITLE, SAVE_BUTTON_LABEL, SUBJECT_LABEL, SUBJECT_Y_LABEL } from '../../constants/translationLabels/formElements';
const AddSubject = props => {
  if (stryMutAct_9fa48("803")) {
    {}
  } else {
    stryCov_9fa48("803");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("804") ? "" : (stryCov_9fa48("804"), 'formElements'));
    const {
      handleSubmit,
      pristine,
      onReset,
      submitting,
      subject,
      initialize
    } = props;
    useEffect(() => {
      if (stryMutAct_9fa48("805")) {
        {}
      } else {
        stryCov_9fa48("805");
        if (stryMutAct_9fa48("807") ? false : stryMutAct_9fa48("806") ? true : (stryCov_9fa48("806", "807"), subject)) {
          if (stryMutAct_9fa48("808")) {
            {}
          } else {
            stryCov_9fa48("808");
            if (stryMutAct_9fa48("810") ? false : stryMutAct_9fa48("809") ? true : (stryCov_9fa48("809", "810"), subject.id)) {
              if (stryMutAct_9fa48("811")) {
                {}
              } else {
                stryCov_9fa48("811");
                initialize(stryMutAct_9fa48("812") ? {} : (stryCov_9fa48("812"), {
                  id: subject.id,
                  name: subject.name
                }));
              }
            } else {
              if (stryMutAct_9fa48("813")) {
                {}
              } else {
                stryCov_9fa48("813");
                initialize();
              }
            }
          }
        }
      }
    }, stryMutAct_9fa48("814") ? [] : (stryCov_9fa48("814"), [subject]));
    return <Card additionClassName="form-card subject-form">
            <h2 style={stryMutAct_9fa48("815") ? {} : (stryCov_9fa48("815"), {
        textAlign: stryMutAct_9fa48("816") ? "" : (stryCov_9fa48("816"), 'center')
      })}>
                {subject.id ? t(EDIT_TITLE) : t(CREATE_TITLE)}
                {t(SUBJECT_Y_LABEL)}
            </h2>
            <form onSubmit={handleSubmit}>
                <Field className="form-field" name="name" component={renderTextField} label={stryMutAct_9fa48("817") ? `` : (stryCov_9fa48("817"), `${t(SUBJECT_LABEL)}:`)} validate={stryMutAct_9fa48("818") ? [] : (stryCov_9fa48("818"), [required, uniqueSubject, maxLengthValue])} />
                <div className="form-buttons-container subject-btns">
                    <Button variant="contained" color="primary" className="buttons-style " disabled={stryMutAct_9fa48("821") ? pristine && submitting : stryMutAct_9fa48("820") ? false : stryMutAct_9fa48("819") ? true : (stryCov_9fa48("819", "820", "821"), pristine || submitting)} type="submit">
                        {t(SAVE_BUTTON_LABEL)}
                    </Button>
                    <Button type="button" variant="contained" className="buttons-style" disabled={setDisableButton(pristine, submitting, subject.id)} onClick={onReset}>
                        {getClearOrCancelTitle(subject.id, t)}
                    </Button>
                </div>
            </form>
        </Card>;
  }
};
const mapStateToProps = stryMutAct_9fa48("822") ? () => undefined : (stryCov_9fa48("822"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("823") ? {} : (stryCov_9fa48("823"), {
    subject: state.subjects.subject
  });
  return mapStateToProps;
})());
export default connect(mapStateToProps)(reduxForm(stryMutAct_9fa48("824") ? {} : (stryCov_9fa48("824"), {
  form: SUBJECT_FORM
}))(AddSubject));