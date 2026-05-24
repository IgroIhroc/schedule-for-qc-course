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
import './ProfilePage.scss';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Card from '../../share/Card/Card';
import { resetFormHandler } from '../../helper/formHelper';
import { PROFILE_FORM, TEACHER_FORM } from '../../constants/reduxForms';
import ChangePasswordForm from '../../components/ChangePasswordForm/ChangePasswordForm';
import { getUserProfile, updateUserPassword, updateUserTeacher } from '../../services/userService';
import AddTeacherForm from '../../components/TeachersPage/AddTeacherForm/AddTeacherForm';
import { EMAIL_LABEL } from '../../constants/translationLabels/formElements';
import { COMMON_MY_PROFILE, DIFFERENT_PASSWORDS } from '../../constants/translationLabels/common';
const ProfilePage = props => {
  if (stryMutAct_9fa48("5244")) {
    {}
  } else {
    stryCov_9fa48("5244");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("5245") ? "" : (stryCov_9fa48("5245"), 'formElements'));
    const handlePasswordFormReset = stryMutAct_9fa48("5246") ? () => undefined : (stryCov_9fa48("5246"), (() => {
      const handlePasswordFormReset = () => resetFormHandler(PROFILE_FORM);
      return handlePasswordFormReset;
    })());
    const submitPasswordChange = values => {
      if (stryMutAct_9fa48("5247")) {
        {}
      } else {
        stryCov_9fa48("5247");
        if (stryMutAct_9fa48("5250") ? values.new_password === values.confirm_password : stryMutAct_9fa48("5249") ? false : stryMutAct_9fa48("5248") ? true : (stryCov_9fa48("5248", "5249", "5250"), values.new_password !== values.confirm_password)) {
          if (stryMutAct_9fa48("5251")) {
            {}
          } else {
            stryCov_9fa48("5251");
            props.setError(stryMutAct_9fa48("5252") ? {} : (stryCov_9fa48("5252"), {
              registration: stryMutAct_9fa48("5253") ? {} : (stryCov_9fa48("5253"), {
                passwords: t(DIFFERENT_PASSWORDS)
              })
            }));
            return;
          }
        }
        updateUserPassword(values);
        handlePasswordFormReset();
      }
    };
    const submitTeacherChange = values => {
      if (stryMutAct_9fa48("5254")) {
        {}
      } else {
        stryCov_9fa48("5254");
        updateUserTeacher(values);
      }
    };
    const handleTeacherFormReset = stryMutAct_9fa48("5255") ? () => undefined : (stryCov_9fa48("5255"), (() => {
      const handleTeacherFormReset = () => resetFormHandler(TEACHER_FORM);
      return handleTeacherFormReset;
    })());
    useEffect(() => {
      if (stryMutAct_9fa48("5256")) {
        {}
      } else {
        stryCov_9fa48("5256");
        getUserProfile();
      }
    }, stryMutAct_9fa48("5257") ? [] : (stryCov_9fa48("5257"), [localStorage.getItem(stryMutAct_9fa48("5258") ? "" : (stryCov_9fa48("5258"), 'userRole'))]));
    const renderTeacherdataForm = () => {
      if (stryMutAct_9fa48("5259")) {
        {}
      } else {
        stryCov_9fa48("5259");
        if (stryMutAct_9fa48("5262") ? localStorage.getItem('userRole') !== 'ROLE_TEACHER' : stryMutAct_9fa48("5261") ? false : stryMutAct_9fa48("5260") ? true : (stryCov_9fa48("5260", "5261", "5262"), localStorage.getItem(stryMutAct_9fa48("5263") ? "" : (stryCov_9fa48("5263"), 'userRole')) === (stryMutAct_9fa48("5264") ? "" : (stryCov_9fa48("5264"), 'ROLE_TEACHER')))) {
          if (stryMutAct_9fa48("5265")) {
            {}
          } else {
            stryCov_9fa48("5265");
            return <AddTeacherForm onSubmit={submitTeacherChange} onReset={handleTeacherFormReset} />;
          }
        }
        return null;
      }
    };
    return <>
            <Card additionClassName="form-card">
                <h2 className="form-title">{t(COMMON_MY_PROFILE)}</h2>
                <section>
                    <span>{stryMutAct_9fa48("5266") ? `` : (stryCov_9fa48("5266"), `${t(EMAIL_LABEL)}: `)}</span>
                    <span>{localStorage.getItem(stryMutAct_9fa48("5267") ? "" : (stryCov_9fa48("5267"), 'email'))}</span>
                </section>
                <ChangePasswordForm onSubmit={submitPasswordChange} onReset={handlePasswordFormReset} />
            </Card>
            {renderTeacherdataForm()}
        </>;
  }
};
const mapStateToProps = stryMutAct_9fa48("5268") ? () => undefined : (stryCov_9fa48("5268"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5269") ? {} : (stryCov_9fa48("5269"), {
    user: state.users.user
  });
  return mapStateToProps;
})());
export default connect(mapStateToProps)(ProfilePage);