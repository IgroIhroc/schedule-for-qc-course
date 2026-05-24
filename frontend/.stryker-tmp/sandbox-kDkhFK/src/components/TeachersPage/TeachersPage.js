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
import Button from '@material-ui/core/Button';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { isEmpty } from 'lodash';
import { dialogTypes } from '../../constants/dialogs';
import { cardType } from '../../constants/cardType';
import { SEND_SCHEDULE_FOR_TEACHER } from '../../constants/translationLabels/common';
import { search } from '../../helper/search';
import MultiSelect from '../../share/Multiselects/MultiSelect';
import SearchPanel from '../../share/SearchPanel/SearchPanel';
import { clearDepartment, getAllDepartmentsService } from '../../services/departmentService';
import AddTeacherForm from './AddTeacherForm/AddTeacherForm';
import CustomDialog from '../../containers/Dialogs/CustomDialog';
import TeachersTable from './TeachersList/TeachersTable';
// import './TeachersList/TeachersList.scss';
import { setDepartmentOptions, setOptions, setSemesterOptions } from '../../utils/selectUtils';
const TeachersPage = props => {
  if (stryMutAct_9fa48("3846")) {
    {}
  } else {
    stryCov_9fa48("3846");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("3847") ? "" : (stryCov_9fa48("3847"), 'common'));
    const {
      teacher,
      enabledTeachers,
      disabledTeachers,
      defaultSemester,
      departments,
      department,
      semesters,
      getAllSemestersItems,
      setOpenConfirmDialog,
      isOpenConfirmDialog,
      getCurrentSemester,
      getDefaultSemester,
      getAllPublicSemesters,
      sendTeacherSchedule,
      selectedTeacherCard,
      deleteTeacher,
      showAllTeachers,
      getDisabledTeachers,
      handleTeacher,
      getPublicClassSchedule,
      toggleDisabledTeacher
    } = props;
    const [term, setTerm] = useState(stryMutAct_9fa48("3848") ? "Stryker was here!" : (stryCov_9fa48("3848"), ''));
    const [isDisabled, setIsDisabled] = useState(stryMutAct_9fa48("3849") ? true : (stryCov_9fa48("3849"), false));
    const [selected, setSelected] = useState(stryMutAct_9fa48("3850") ? ["Stryker was here"] : (stryCov_9fa48("3850"), []));
    const [teacherId, setTeacherId] = useState(stryMutAct_9fa48("3851") ? +1 : (stryCov_9fa48("3851"), -1));
    const [isOpenMultiSelectDialog, setIsOpenMultiSelectDialog] = useState(stryMutAct_9fa48("3852") ? true : (stryCov_9fa48("3852"), false));
    const [selectedSemester, setSelectedSemester] = useState(stryMutAct_9fa48("3853") ? "Stryker was here!" : (stryCov_9fa48("3853"), ''));
    const [confirmDialogType, setConfirmDialogType] = useState(stryMutAct_9fa48("3854") ? "Stryker was here!" : (stryCov_9fa48("3854"), ''));
    const {
      id,
      description
    } = defaultSemester;
    useEffect(() => {
      if (stryMutAct_9fa48("3855")) {
        {}
      } else {
        stryCov_9fa48("3855");
        getCurrentSemester();
        getDefaultSemester();
        getAllSemestersItems();
        getAllDepartmentsService();
        getAllPublicSemesters();
        getPublicClassSchedule();
      }
    }, stryMutAct_9fa48("3856") ? ["Stryker was here"] : (stryCov_9fa48("3856"), []));
    useEffect(() => {
      if (stryMutAct_9fa48("3857")) {
        {}
      } else {
        stryCov_9fa48("3857");
        if (stryMutAct_9fa48("3859") ? false : stryMutAct_9fa48("3858") ? true : (stryCov_9fa48("3858", "3859"), isDisabled)) {
          if (stryMutAct_9fa48("3860")) {
            {}
          } else {
            stryCov_9fa48("3860");
            getDisabledTeachers();
          }
        } else {
          if (stryMutAct_9fa48("3861")) {
            {}
          } else {
            stryCov_9fa48("3861");
            showAllTeachers();
          }
        }
      }
    }, stryMutAct_9fa48("3862") ? [] : (stryCov_9fa48("3862"), [isDisabled]));
    const visibleItems = search(isDisabled ? disabledTeachers : enabledTeachers, term, stryMutAct_9fa48("3863") ? [] : (stryCov_9fa48("3863"), [stryMutAct_9fa48("3864") ? "" : (stryCov_9fa48("3864"), 'name'), stryMutAct_9fa48("3865") ? "" : (stryCov_9fa48("3865"), 'surname'), stryMutAct_9fa48("3866") ? "" : (stryCov_9fa48("3866"), 'patronymic'), stryMutAct_9fa48("3867") ? "" : (stryCov_9fa48("3867"), 'department.name')]));
    const changeDisable = () => {
      if (stryMutAct_9fa48("3868")) {
        {}
      } else {
        stryCov_9fa48("3868");
        setIsDisabled(stryMutAct_9fa48("3869") ? () => undefined : (stryCov_9fa48("3869"), prev => stryMutAct_9fa48("3870") ? prev : (stryCov_9fa48("3870"), !prev)));
      }
    };
    const teacherSubmit = values => {
      if (stryMutAct_9fa48("3871")) {
        {}
      } else {
        stryCov_9fa48("3871");
        const sendData = stryMutAct_9fa48("3872") ? {} : (stryCov_9fa48("3872"), {
          ...values,
          department
        });
        handleTeacher(sendData);
        clearDepartment();
      }
    };
    const showConfirmDialog = (takeId, dialogType) => {
      if (stryMutAct_9fa48("3873")) {
        {}
      } else {
        stryCov_9fa48("3873");
        setTeacherId(takeId);
        setConfirmDialogType(dialogType);
        setOpenConfirmDialog(stryMutAct_9fa48("3874") ? false : (stryCov_9fa48("3874"), true));
      }
    };
    const acceptConfirmDialog = () => {
      if (stryMutAct_9fa48("3875")) {
        {}
      } else {
        stryCov_9fa48("3875");
        setOpenConfirmDialog(stryMutAct_9fa48("3876") ? true : (stryCov_9fa48("3876"), false));
        if (stryMutAct_9fa48("3879") ? confirmDialogType === dialogTypes.DELETE_CONFIRM : stryMutAct_9fa48("3878") ? false : stryMutAct_9fa48("3877") ? true : (stryCov_9fa48("3877", "3878", "3879"), confirmDialogType !== dialogTypes.DELETE_CONFIRM)) {
          if (stryMutAct_9fa48("3880")) {
            {}
          } else {
            stryCov_9fa48("3880");
            toggleDisabledTeacher(teacherId, isDisabled);
          }
        } else {
          if (stryMutAct_9fa48("3881")) {
            {}
          } else {
            stryCov_9fa48("3881");
            deleteTeacher(teacherId);
          }
        }
      }
    };
    const cancelSelection = () => {
      if (stryMutAct_9fa48("3882")) {
        {}
      } else {
        stryCov_9fa48("3882");
        setSelected(stryMutAct_9fa48("3883") ? ["Stryker was here"] : (stryCov_9fa48("3883"), []));
        setIsOpenMultiSelectDialog(stryMutAct_9fa48("3884") ? true : (stryCov_9fa48("3884"), false));
      }
    };
    const sendTeachers = () => {
      if (stryMutAct_9fa48("3885")) {
        {}
      } else {
        stryCov_9fa48("3885");
        setIsOpenMultiSelectDialog(stryMutAct_9fa48("3886") ? true : (stryCov_9fa48("3886"), false));
        const teachersId = selected.map(item => {
          if (stryMutAct_9fa48("3887")) {
            {}
          } else {
            stryCov_9fa48("3887");
            return item.id;
          }
        });
        const semesterId = stryMutAct_9fa48("3890") ? selectedSemester === '' || id : stryMutAct_9fa48("3889") ? false : stryMutAct_9fa48("3888") ? true : (stryCov_9fa48("3888", "3889", "3890"), (stryMutAct_9fa48("3892") ? selectedSemester !== '' : stryMutAct_9fa48("3891") ? true : (stryCov_9fa48("3891", "3892"), selectedSemester === (stryMutAct_9fa48("3893") ? "Stryker was here!" : (stryCov_9fa48("3893"), '')))) && id);
        const {
          language
        } = i18n;
        const data = stryMutAct_9fa48("3894") ? {} : (stryCov_9fa48("3894"), {
          semesterId,
          teachersId,
          language
        });
        sendTeacherSchedule(data);
        setSelected(stryMutAct_9fa48("3895") ? ["Stryker was here"] : (stryCov_9fa48("3895"), []));
      }
    };
    const isChosenSelection = () => {
      if (stryMutAct_9fa48("3896")) {
        {}
      } else {
        stryCov_9fa48("3896");
        return stryMutAct_9fa48("3897") ? isEmpty(selected) : (stryCov_9fa48("3897"), !isEmpty(selected));
      }
    };
    const parseDefaultSemester = () => {
      if (stryMutAct_9fa48("3898")) {
        {}
      } else {
        stryCov_9fa48("3898");
        return stryMutAct_9fa48("3899") ? {} : (stryCov_9fa48("3899"), {
          id,
          value: id,
          label: stryMutAct_9fa48("3900") ? `` : (stryCov_9fa48("3900"), `${description}`)
        });
      }
    };
    return <div className="cards-container">
            <div className="form-with-search-panel">
                <SearchPanel SearchChange={setTerm} showDisabled={changeDisable} />

                {stryMutAct_9fa48("3903") ? !isDisabled || <div className="teacher-form-container">
                        <Button className="send-button" variant="contained" color="primary" onClick={() => {
            setIsOpenMultiSelectDialog(true);
          }}>
                            {t(SEND_SCHEDULE_FOR_TEACHER)}
                        </Button>
                        <div className="add-form">
                            <AddTeacherForm departments={setDepartmentOptions(departments)} teachers={enabledTeachers} onSubmit={teacherSubmit} onSetSelectedCard={selectedTeacherCard} teacher={teacher} />
                        </div>
                    </div> : stryMutAct_9fa48("3902") ? false : stryMutAct_9fa48("3901") ? true : (stryCov_9fa48("3901", "3902", "3903"), (stryMutAct_9fa48("3904") ? isDisabled : (stryCov_9fa48("3904"), !isDisabled)) && <div className="teacher-form-container">
                        <Button className="send-button" variant="contained" color="primary" onClick={() => {
            if (stryMutAct_9fa48("3905")) {
              {}
            } else {
              stryCov_9fa48("3905");
              setIsOpenMultiSelectDialog(stryMutAct_9fa48("3906") ? false : (stryCov_9fa48("3906"), true));
            }
          }}>
                            {t(SEND_SCHEDULE_FOR_TEACHER)}
                        </Button>
                        <div className="add-form">
                            <AddTeacherForm departments={setDepartmentOptions(departments)} teachers={enabledTeachers} onSubmit={teacherSubmit} onSetSelectedCard={selectedTeacherCard} teacher={teacher} />
                        </div>
                    </div>)}
            </div>
            <TeachersTable visibleItems={visibleItems} isDisabled={isDisabled} showConfirmDialog={showConfirmDialog} selectedTeacherCard={selectedTeacherCard} />

            {stryMutAct_9fa48("3909") ? isOpenMultiSelectDialog || <MultiSelect open={isOpenMultiSelectDialog} options={setOptions(enabledTeachers)} value={selected} onChange={setSelected} onCancel={cancelSelection} onSentTeachers={sendTeachers} isEnabledSentBtn={isChosenSelection()} semesters={setSemesterOptions(semesters)} defaultSemester={parseDefaultSemester()} onChangeSemesterValue={setSelectedSemester} /> : stryMutAct_9fa48("3908") ? false : stryMutAct_9fa48("3907") ? true : (stryCov_9fa48("3907", "3908", "3909"), isOpenMultiSelectDialog && <MultiSelect open={isOpenMultiSelectDialog} options={setOptions(enabledTeachers)} value={selected} onChange={setSelected} onCancel={cancelSelection} onSentTeachers={sendTeachers} isEnabledSentBtn={isChosenSelection()} semesters={setSemesterOptions(semesters)} defaultSemester={parseDefaultSemester()} onChangeSemesterValue={setSelectedSemester} />)}

            <CustomDialog type={confirmDialogType} whatDelete={cardType.TEACHER} open={isOpenConfirmDialog} handelConfirm={acceptConfirmDialog} />
        </div>;
  }
};
export default TeachersPage;