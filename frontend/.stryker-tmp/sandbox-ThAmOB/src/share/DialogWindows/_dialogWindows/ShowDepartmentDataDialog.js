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
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash';
import CustomDialog from '../../../containers/Dialogs/CustomDialog';
import '../dialog.scss';
import RenderTeacherTable from '../../../helper/renderTeacherTable';
import { DEPARTMENT_TEACHER_LABEL, DEPARTMENT_TEACHERS, NO_EXIST_TEACHER_AT_DEPARTMENT, TEACHER_LABEL, TEACHERS_LABEL } from '../../../constants/translationLabels/formElements';
import { dialogCloseButton } from '../../../constants/dialogs';
const ShowDepartmentDataDialog = props => {
  if (stryMutAct_9fa48("8459")) {
    {}
  } else {
    stryCov_9fa48("8459");
    const {
      onClose,
      cardId,
      open,
      teachers,
      department
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("8460") ? "" : (stryCov_9fa48("8460"), 'formElements'));
    const handleClose = () => {
      if (stryMutAct_9fa48("8461")) {
        {}
      } else {
        stryCov_9fa48("8461");
        onClose(cardId);
      }
    };
    return <CustomDialog onClose={handleClose} open={open} title="Show dependencies data" buttons={stryMutAct_9fa48("8462") ? [] : (stryCov_9fa48("8462"), [dialogCloseButton(stryMutAct_9fa48("8463") ? () => undefined : (stryCov_9fa48("8463"), () => onClose(stryMutAct_9fa48("8464") ? "Stryker was here!" : (stryCov_9fa48("8464"), ''))))])}>
            {isEmpty(teachers) ? <>
                    <h2 className="title-align">
                        {stryMutAct_9fa48("8465") ? `` : (stryCov_9fa48("8465"), `${t(DEPARTMENT_TEACHER_LABEL)} - `)}
                        <span>{stryMutAct_9fa48("8466") ? `` : (stryCov_9fa48("8466"), `${department.name}`)}</span>
                    </h2>
                    {t(NO_EXIST_TEACHER_AT_DEPARTMENT)}
                </> : <>
                    <h3 className="title-align">
                        <span>
                            {(stryMutAct_9fa48("8469") ? teachers.length === 1 : stryMutAct_9fa48("8468") ? false : stryMutAct_9fa48("8467") ? true : (stryCov_9fa48("8467", "8468", "8469"), teachers.length !== 1)) ? stryMutAct_9fa48("8470") ? `` : (stryCov_9fa48("8470"), `${t(TEACHERS_LABEL)} `) : stryMutAct_9fa48("8471") ? `` : (stryCov_9fa48("8471"), `${t(TEACHER_LABEL)} `)}
                        </span>
                        {stryMutAct_9fa48("8472") ? `` : (stryCov_9fa48("8472"), `${t(DEPARTMENT_TEACHERS)} `)}
                        <span>{stryMutAct_9fa48("8473") ? `` : (stryCov_9fa48("8473"), `${department.name}`)}</span>
                    </h3>
                    <RenderTeacherTable teachers={teachers} />
                </>}
        </CustomDialog>;
  }
};
ShowDepartmentDataDialog.propTypes = stryMutAct_9fa48("8474") ? {} : (stryCov_9fa48("8474"), {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
});
const mapStateToProps = stryMutAct_9fa48("8475") ? () => undefined : (stryCov_9fa48("8475"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("8476") ? {} : (stryCov_9fa48("8476"), {
    department: state.departments.department
  });
  return mapStateToProps;
})());
export default connect(mapStateToProps, {})(ShowDepartmentDataDialog);