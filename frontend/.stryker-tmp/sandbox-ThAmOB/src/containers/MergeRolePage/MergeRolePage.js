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
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';
import { setLoadingService } from '../../services/loadingService';
import { getUsersService, mergeUserAndTeacherService } from '../../services/userService';
import Card from '../../share/Card/Card';
import './MergeRolePage.scss';
import { FORM_MERGE_BUTTON, FORM_TEACHER_LABEL, FORM_USER_LABEL } from '../../constants/translationLabels/formElements';
import { MERGE_HEADER } from '../../constants/translationLabels/common';
import { getTeacherWithoutAccountStart } from '../../actions/teachers';
const useStyles = makeStyles(stryMutAct_9fa48("5207") ? () => undefined : (stryCov_9fa48("5207"), () => stryMutAct_9fa48("5208") ? {} : (stryCov_9fa48("5208"), {
  autoCompleteField: stryMutAct_9fa48("5209") ? {} : (stryCov_9fa48("5209"), {
    '&': stryMutAct_9fa48("5210") ? {} : (stryCov_9fa48("5210"), {
      display: stryMutAct_9fa48("5211") ? "" : (stryCov_9fa48("5211"), 'inline-block'),
      margin: stryMutAct_9fa48("5212") ? "" : (stryCov_9fa48("5212"), '0 10px 10px 0'),
      width: 200
    })
  })
})));
const MergeRolePage = props => {
  if (stryMutAct_9fa48("5213")) {
    {}
  } else {
    stryCov_9fa48("5213");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("5214") ? "" : (stryCov_9fa48("5214"), 'common'));
    const [teacher, setTeacher] = useState(null);
    const [user, setUser] = useState(null);
    const classes = useStyles();
    const {
      teachers,
      getTeachersWithoutAccount
    } = props;
    const {
      users
    } = props;
    useEffect(() => {
      if (stryMutAct_9fa48("5215")) {
        {}
      } else {
        stryCov_9fa48("5215");
        getTeachersWithoutAccount();
      }
    }, stryMutAct_9fa48("5216") ? ["Stryker was here"] : (stryCov_9fa48("5216"), []));
    useEffect(() => {
      if (stryMutAct_9fa48("5217")) {
        {}
      } else {
        stryCov_9fa48("5217");
        getUsersService();
      }
    }, stryMutAct_9fa48("5218") ? ["Stryker was here"] : (stryCov_9fa48("5218"), []));
    const defaultPropsTeachers = stryMutAct_9fa48("5219") ? {} : (stryCov_9fa48("5219"), {
      options: teachers,
      getOptionLabel: stryMutAct_9fa48("5220") ? () => undefined : (stryCov_9fa48("5220"), option => option ? stryMutAct_9fa48("5221") ? `` : (stryCov_9fa48("5221"), `${option.position} ${option.surname} ${option.name} ${option.patronymic}`) : stryMutAct_9fa48("5222") ? "Stryker was here!" : (stryCov_9fa48("5222"), ''))
    });
    const defaultPropsUsers = stryMutAct_9fa48("5223") ? {} : (stryCov_9fa48("5223"), {
      options: users,
      getOptionLabel: stryMutAct_9fa48("5224") ? () => undefined : (stryCov_9fa48("5224"), option => option ? option.email : stryMutAct_9fa48("5225") ? "Stryker was here!" : (stryCov_9fa48("5225"), ''))
    });
    const mergeUserAndTeacherHandle = () => {
      if (stryMutAct_9fa48("5226")) {
        {}
      } else {
        stryCov_9fa48("5226");
        if (stryMutAct_9fa48("5229") ? !user && !teacher : stryMutAct_9fa48("5228") ? false : stryMutAct_9fa48("5227") ? true : (stryCov_9fa48("5227", "5228", "5229"), (stryMutAct_9fa48("5230") ? user : (stryCov_9fa48("5230"), !user)) || (stryMutAct_9fa48("5231") ? teacher : (stryCov_9fa48("5231"), !teacher)))) return;
        mergeUserAndTeacherService(stryMutAct_9fa48("5232") ? {} : (stryCov_9fa48("5232"), {
          teacherId: teacher.id,
          userId: user.id
        }));
        setUser(null);
        setTeacher(null);
        setLoadingService(stryMutAct_9fa48("5233") ? false : (stryCov_9fa48("5233"), true));
      }
    };
    return <>
            <div className="merge-role-form">
                <Card additionClassName="merge-role-card">
                    <h2 className="under-line">{t(MERGE_HEADER)}</h2>
                    {props.loading ? <CircularProgress /> : <>
                            <div className="autocomplete-group">
                                <Autocomplete {...defaultPropsTeachers} clearOnEscape openOnFocus className={classes.autoCompleteField} onChange={(event, newValue) => {
                if (stryMutAct_9fa48("5234")) {
                  {}
                } else {
                  stryCov_9fa48("5234");
                  setTeacher(newValue);
                }
              }} renderInput={stryMutAct_9fa48("5235") ? () => undefined : (stryCov_9fa48("5235"), params => <TextField {...params} label={t(FORM_TEACHER_LABEL)} margin="normal" />)} />
                                <Autocomplete {...defaultPropsUsers} clearOnEscape openOnFocus className={classes.autoCompleteField} onChange={(event, newValue) => {
                if (stryMutAct_9fa48("5236")) {
                  {}
                } else {
                  stryCov_9fa48("5236");
                  setUser(newValue);
                }
              }} renderInput={stryMutAct_9fa48("5237") ? () => undefined : (stryCov_9fa48("5237"), params => <TextField {...params} label={t(FORM_USER_LABEL)} margin="normal" />)} />
                            </div>
                            <Button className="merge-btn" variant="contained" color="primary" onClick={stryMutAct_9fa48("5238") ? () => undefined : (stryCov_9fa48("5238"), () => mergeUserAndTeacherHandle())}>
                                {t(FORM_MERGE_BUTTON)}
                            </Button>
                        </>}
                </Card>
            </div>
        </>;
  }
};
const mapStateToProps = stryMutAct_9fa48("5239") ? () => undefined : (stryCov_9fa48("5239"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5240") ? {} : (stryCov_9fa48("5240"), {
    teachers: state.teachers.teachers,
    users: state.users.users,
    loading: state.loadingIndicator.loading
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5241") ? () => undefined : (stryCov_9fa48("5241"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5242") ? {} : (stryCov_9fa48("5242"), {
    getTeachersWithoutAccount: stryMutAct_9fa48("5243") ? () => undefined : (stryCov_9fa48("5243"), () => dispatch(getTeacherWithoutAccountStart()))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(MergeRolePage);