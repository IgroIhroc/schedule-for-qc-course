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
import { GiSightDisabled, IoMdEye } from 'react-icons/all';
import { FaChalkboardTeacher, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import SearchPanel from '../../share/SearchPanel/SearchPanel';
import Card from '../../share/Card/Card';
import AddDepartment from '../../components/AddDepartmentForm/AddDepartmentForm';
import { search } from '../../helper/search';
import NotFound from '../../share/NotFound/NotFound';
import SnackbarComponent from '../../share/Snackbar/SnackbarComponent';
import { handleSnackbarCloseService } from '../../services/snackbarService';
import { clearDepartment, createDepartmentService, deleteDepartmentsService, getAllDepartmentsService, getDepartmentByIdService, getDisabledDepartmentsService, setDisabledDepartmentService, setEnabledDepartmentService, updateDepartmentService } from '../../services/departmentService';
import { setIsOpenConfirmDialog } from '../../actions/dialog';
import CustomDialog from '../Dialogs/CustomDialog';
import ShowDepartmentDataDialog from '../../share/DialogWindows/_dialogWindows/ShowDepartmentDataDialog';
import { dialogTypes } from '../../constants/dialogs';
import { DELETE_TITLE, DEPARTMENT_LABEL, EDIT_TITLE, SHOW_TEACHER_TITLE } from '../../constants/translationLabels/formElements';
import { COMMON_SET_DISABLED, COMMON_SET_ENABLED } from '../../constants/translationLabels/common';
import { getAllPublicTeachersByDepartmentStart } from '../../actions/teachers';
import './DepartmentPage.scss';
const DepartmentPage = props => {
  if (stryMutAct_9fa48("4973")) {
    {}
  } else {
    stryCov_9fa48("4973");
    const {
      teachers,
      snackbarType,
      isSnackbarOpen,
      snackbarMessage,
      enabledDepartments,
      disabledDepartments,
      setOpenConfirmDialog,
      isOpenConfirmDialog,
      getAllPublicTeachersByDepartment
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("4974") ? "" : (stryCov_9fa48("4974"), 'formElements'));
    const [term, setTerm] = useState(stryMutAct_9fa48("4975") ? "Stryker was here!" : (stryCov_9fa48("4975"), ''));
    const [confirmDialogType, setConfirmDialogType] = useState(stryMutAct_9fa48("4976") ? "Stryker was here!" : (stryCov_9fa48("4976"), ''));
    const [isDisabled, setIsDisabled] = useState(stryMutAct_9fa48("4977") ? true : (stryCov_9fa48("4977"), false));
    const [isUpdateForm, setIsUpdateForm] = useState(stryMutAct_9fa48("4978") ? true : (stryCov_9fa48("4978"), false));
    const [departmentId, setDepartmentId] = useState(stryMutAct_9fa48("4979") ? +1 : (stryCov_9fa48("4979"), -1));
    const [isOpenTeacherDialog, setIsOpenTeacherDialog] = useState(stryMutAct_9fa48("4980") ? true : (stryCov_9fa48("4980"), false));
    const clearDepartmentForm = () => {
      if (stryMutAct_9fa48("4981")) {
        {}
      } else {
        stryCov_9fa48("4981");
        clearDepartment();
      }
    };
    useEffect(() => {
      if (stryMutAct_9fa48("4982")) {
        {}
      } else {
        stryCov_9fa48("4982");
        getDisabledDepartmentsService();
        getAllDepartmentsService();
        clearDepartment();
      }
    }, stryMutAct_9fa48("4983") ? ["Stryker was here"] : (stryCov_9fa48("4983"), []));
    const SearchChange = setTerm;
    const visibleDepartments = isDisabled ? search(disabledDepartments, term, stryMutAct_9fa48("4984") ? [] : (stryCov_9fa48("4984"), [stryMutAct_9fa48("4985") ? "" : (stryCov_9fa48("4985"), 'name')])) : search(enabledDepartments, term, stryMutAct_9fa48("4986") ? [] : (stryCov_9fa48("4986"), [stryMutAct_9fa48("4987") ? "" : (stryCov_9fa48("4987"), 'name')]));
    const submitAddForm = data => {
      if (stryMutAct_9fa48("4988")) {
        {}
      } else {
        stryCov_9fa48("4988");
        return data.id ? updateDepartmentService(data) : createDepartmentService(data);
      }
    };
    const showConfirmDialog = (currentId, dialogType) => {
      if (stryMutAct_9fa48("4989")) {
        {}
      } else {
        stryCov_9fa48("4989");
        setDepartmentId(currentId);
        setConfirmDialogType(dialogType);
        setOpenConfirmDialog(stryMutAct_9fa48("4990") ? false : (stryCov_9fa48("4990"), true));
      }
    };
    const setDepartmentToUpdate = currentId => {
      if (stryMutAct_9fa48("4991")) {
        {}
      } else {
        stryCov_9fa48("4991");
        getDepartmentByIdService(currentId);
        setIsUpdateForm(stryMutAct_9fa48("4992") ? false : (stryCov_9fa48("4992"), true));
      }
    };
    const changeDepartmentDisabledStatus = currentId => {
      if (stryMutAct_9fa48("4993")) {
        {}
      } else {
        stryCov_9fa48("4993");
        const foundDepartment = (stryMutAct_9fa48("4994") ? [] : (stryCov_9fa48("4994"), [...disabledDepartments, ...enabledDepartments])).find(stryMutAct_9fa48("4995") ? () => undefined : (stryCov_9fa48("4995"), departm => stryMutAct_9fa48("4998") ? departm.id !== currentId : stryMutAct_9fa48("4997") ? false : stryMutAct_9fa48("4996") ? true : (stryCov_9fa48("4996", "4997", "4998"), departm.id === currentId)));
        const newDepartment = stryMutAct_9fa48("4999") ? {} : (stryCov_9fa48("4999"), {
          ...foundDepartment,
          disable: stryMutAct_9fa48("5000") ? foundDepartment.disable : (stryCov_9fa48("5000"), !foundDepartment.disable)
        });
        const changeDisabledStatus = stryMutAct_9fa48("5001") ? {} : (stryCov_9fa48("5001"), {
          [dialogTypes.SET_VISIBILITY_ENABLED]: setEnabledDepartmentService(newDepartment),
          [dialogTypes.SET_VISIBILITY_DISABLED]: setDisabledDepartmentService(newDepartment)
        });
        return changeDisabledStatus[confirmDialogType];
      }
    };
    const acceptConfirmDialog = currentId => {
      if (stryMutAct_9fa48("5002")) {
        {}
      } else {
        stryCov_9fa48("5002");
        setOpenConfirmDialog(stryMutAct_9fa48("5003") ? true : (stryCov_9fa48("5003"), false));
        if (stryMutAct_9fa48("5006") ? confirmDialogType === dialogTypes.DELETE_CONFIRM : stryMutAct_9fa48("5005") ? false : stryMutAct_9fa48("5004") ? true : (stryCov_9fa48("5004", "5005", "5006"), confirmDialogType !== dialogTypes.DELETE_CONFIRM)) {
          if (stryMutAct_9fa48("5007")) {
            {}
          } else {
            stryCov_9fa48("5007");
            changeDepartmentDisabledStatus(currentId);
          }
        } else {
          if (stryMutAct_9fa48("5008")) {
            {}
          } else {
            stryCov_9fa48("5008");
            deleteDepartmentsService(currentId);
          }
        }
      }
    };
    const closeTeacherDialog = () => {
      if (stryMutAct_9fa48("5009")) {
        {}
      } else {
        stryCov_9fa48("5009");
        setIsOpenTeacherDialog(stryMutAct_9fa48("5010") ? true : (stryCov_9fa48("5010"), false));
      }
    };
    const changeDisable = () => {
      if (stryMutAct_9fa48("5011")) {
        {}
      } else {
        stryCov_9fa48("5011");
        setIsDisabled(stryMutAct_9fa48("5012") ? () => undefined : (stryCov_9fa48("5012"), prev => stryMutAct_9fa48("5013") ? prev : (stryCov_9fa48("5013"), !prev)));
      }
    };
    return <>
            <CustomDialog type={confirmDialogType} whatDelete="department" handelConfirm={stryMutAct_9fa48("5014") ? () => undefined : (stryCov_9fa48("5014"), () => acceptConfirmDialog(departmentId))} open={isOpenConfirmDialog} />
            {stryMutAct_9fa48("5017") ? isOpenTeacherDialog || <ShowDepartmentDataDialog isHide={departmentId.disabledStatus} cardId={departmentId.id} open={isOpenTeacherDialog} onClose={closeTeacherDialog} teachers={teachers} /> : stryMutAct_9fa48("5016") ? false : stryMutAct_9fa48("5015") ? true : (stryCov_9fa48("5015", "5016", "5017"), isOpenTeacherDialog && <ShowDepartmentDataDialog isHide={departmentId.disabledStatus} cardId={departmentId.id} open={isOpenTeacherDialog} onClose={closeTeacherDialog} teachers={teachers} />)}
            <div className="cards-container">
                <aside className="search-list__panel">
                    <SearchPanel SearchChange={SearchChange} showDisabled={changeDisable} />
                    {stryMutAct_9fa48("5020") ? !isDisabled || <AddDepartment onSubmit={submitAddForm} clear={clearDepartmentForm} editDepartment={isUpdateForm} /> : stryMutAct_9fa48("5019") ? false : stryMutAct_9fa48("5018") ? true : (stryCov_9fa48("5018", "5019", "5020"), (stryMutAct_9fa48("5021") ? isDisabled : (stryCov_9fa48("5021"), !isDisabled)) && <AddDepartment onSubmit={submitAddForm} clear={clearDepartmentForm} editDepartment={isUpdateForm} />)}
                </aside>
                <section className="container-flex-wrap wrapper">
                    {stryMutAct_9fa48("5024") ? visibleDepartments.length === 0 || <NotFound name={t(DEPARTMENT_LABEL)} /> : stryMutAct_9fa48("5023") ? false : stryMutAct_9fa48("5022") ? true : (stryCov_9fa48("5022", "5023", "5024"), (stryMutAct_9fa48("5026") ? visibleDepartments.length !== 0 : stryMutAct_9fa48("5025") ? true : (stryCov_9fa48("5025", "5026"), visibleDepartments.length === 0)) && <NotFound name={t(DEPARTMENT_LABEL)} />)}
                    {visibleDepartments.map(stryMutAct_9fa48("5027") ? () => undefined : (stryCov_9fa48("5027"), departmentItem => <Card key={departmentItem.id} additionClassName="department-card">
                            <h2 className="department-card__name">{departmentItem.name}</h2>
                            <div className="cards-btns">
                                {isDisabled ? <IoMdEye className="svg-btn copy-btn" title={t(COMMON_SET_ENABLED)} onClick={() => {
                if (stryMutAct_9fa48("5028")) {
                  {}
                } else {
                  stryCov_9fa48("5028");
                  showConfirmDialog(departmentItem.id, dialogTypes.SET_VISIBILITY_ENABLED);
                }
              }} /> : <>
                                        <GiSightDisabled className="svg-btn copy-btn" title={t(COMMON_SET_DISABLED)} onClick={() => {
                  if (stryMutAct_9fa48("5029")) {
                    {}
                  } else {
                    stryCov_9fa48("5029");
                    showConfirmDialog(departmentItem.id, dialogTypes.SET_VISIBILITY_DISABLED);
                  }
                }} />

                                        <FaEdit className="svg-btn edit-btn" title={t(EDIT_TITLE)} onClick={() => {
                  if (stryMutAct_9fa48("5030")) {
                    {}
                  } else {
                    stryCov_9fa48("5030");
                    setDepartmentToUpdate(departmentItem.id);
                  }
                }} />
                                    </>}

                                <MdDelete className="svg-btn delete-btn" title={t(DELETE_TITLE)} onClick={() => {
                if (stryMutAct_9fa48("5031")) {
                  {}
                } else {
                  stryCov_9fa48("5031");
                  showConfirmDialog(departmentItem.id, dialogTypes.DELETE_CONFIRM);
                }
              }} />
                                <FaChalkboardTeacher className="svg-btn delete-btn" title={t(SHOW_TEACHER_TITLE)} onClick={() => {
                if (stryMutAct_9fa48("5032")) {
                  {}
                } else {
                  stryCov_9fa48("5032");
                  getAllPublicTeachersByDepartment(departmentItem.id);
                  getDepartmentByIdService(departmentItem.id);
                  setIsOpenTeacherDialog(stryMutAct_9fa48("5033") ? false : (stryCov_9fa48("5033"), true));
                }
              }} />
                            </div>
                        </Card>))}
                </section>
            </div>
            <SnackbarComponent message={snackbarMessage} type={snackbarType} isOpen={isSnackbarOpen} handleSnackbarClose={handleSnackbarCloseService} />
        </>;
  }
};
const mapStateToProps = stryMutAct_9fa48("5034") ? () => undefined : (stryCov_9fa48("5034"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5035") ? {} : (stryCov_9fa48("5035"), {
    enabledDepartments: state.departments.departments,
    disabledDepartments: state.departments.disabledDepartments,
    department: state.departments.department,
    isSnackbarOpen: state.snackbar.isSnackbarOpen,
    snackbarType: state.snackbar.snackbarType,
    snackbarMessage: state.snackbar.message,
    teachers: state.teachers.teachers,
    isOpenConfirmDialog: state.dialog.isOpenConfirmDialog
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5036") ? () => undefined : (stryCov_9fa48("5036"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5037") ? {} : (stryCov_9fa48("5037"), {
    setOpenConfirmDialog: stryMutAct_9fa48("5038") ? () => undefined : (stryCov_9fa48("5038"), newState => dispatch(setIsOpenConfirmDialog(newState))),
    getAllPublicTeachersByDepartment: stryMutAct_9fa48("5039") ? () => undefined : (stryCov_9fa48("5039"), id => dispatch(getAllPublicTeachersByDepartmentStart(id)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(DepartmentPage);