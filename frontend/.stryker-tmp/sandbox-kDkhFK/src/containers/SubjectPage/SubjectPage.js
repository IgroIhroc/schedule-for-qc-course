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
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from 'react';
import './SubjectPage.scss';
import { GiSightDisabled, IoMdEye } from 'react-icons/all';
import Card from '../../share/Card/Card';
import { search } from '../../helper/search';
import NotFound from '../../share/NotFound/NotFound';
import CustomDialog from '../Dialogs/CustomDialog';
import { dialogTypes } from '../../constants/dialogs';
import SearchPanel from '../../share/SearchPanel/SearchPanel';
import SnackbarComponent from '../../share/Snackbar/SnackbarComponent';
import AddSubject from '../../components/AddSubjectForm/AddSubjectForm';
import { handleSnackbarCloseService } from '../../services/snackbarService';
import { setIsOpenConfirmDialog } from '../../actions/dialog';
import { clearSubjectService, getDisabledSubjectsService, handleSubjectService, removeSubjectCardService, selectSubjectService, setDisabledSubjectsService, setEnabledSubjectsService, showAllSubjectsService } from '../../services/subjectService';
import { DELETE_TITLE, EDIT_TITLE, SUBJECT_Y_LABEL } from '../../constants/translationLabels/formElements';
import { COMMON_SET_DISABLED, COMMON_SET_ENABLED } from '../../constants/translationLabels/common';
const SubjectPage = props => {
  if (stryMutAct_9fa48("5346")) {
    {}
  } else {
    stryCov_9fa48("5346");
    const {
      t
    } = useTranslation(stryMutAct_9fa48("5347") ? "" : (stryCov_9fa48("5347"), 'formElements'));
    const {
      isSnackbarOpen,
      snackbarType,
      snackbarMessage,
      disabledSubjects,
      subjects,
      setOpenConfirmDialog,
      isOpenConfirmDialog
    } = props;
    const [confirmDialogType, setConfirmDialogType] = useState(stryMutAct_9fa48("5348") ? "Stryker was here!" : (stryCov_9fa48("5348"), ''));
    const [subjectId, setSubjectId] = useState(stryMutAct_9fa48("5349") ? +1 : (stryCov_9fa48("5349"), -1));
    const [term, setTerm] = useState(stryMutAct_9fa48("5350") ? "Stryker was here!" : (stryCov_9fa48("5350"), ''));
    const [disabled, setDisabled] = useState(stryMutAct_9fa48("5351") ? true : (stryCov_9fa48("5351"), false));
    useEffect(() => {
      if (stryMutAct_9fa48("5352")) {
        {}
      } else {
        stryCov_9fa48("5352");
        showAllSubjectsService();
        getDisabledSubjectsService();
      }
    }, stryMutAct_9fa48("5353") ? ["Stryker was here"] : (stryCov_9fa48("5353"), []));
    const handleFormReset = stryMutAct_9fa48("5354") ? () => undefined : (stryCov_9fa48("5354"), (() => {
      const handleFormReset = () => clearSubjectService();
      return handleFormReset;
    })());
    const visibleSubjects = disabled ? search(disabledSubjects, term, stryMutAct_9fa48("5355") ? [] : (stryCov_9fa48("5355"), [stryMutAct_9fa48("5356") ? "" : (stryCov_9fa48("5356"), 'name')])) : search(subjects, term, stryMutAct_9fa48("5357") ? [] : (stryCov_9fa48("5357"), [stryMutAct_9fa48("5358") ? "" : (stryCov_9fa48("5358"), 'name')]));
    const SearchChange = setTerm;
    const showConfirmDialog = (subjId, dialogType) => {
      if (stryMutAct_9fa48("5359")) {
        {}
      } else {
        stryCov_9fa48("5359");
        setSubjectId(subjId);
        setConfirmDialogType(dialogType);
        setOpenConfirmDialog(stryMutAct_9fa48("5360") ? false : (stryCov_9fa48("5360"), true));
      }
    };
    const acceptConfirmDialog = id => {
      if (stryMutAct_9fa48("5361")) {
        {}
      } else {
        stryCov_9fa48("5361");
        setOpenConfirmDialog(stryMutAct_9fa48("5362") ? true : (stryCov_9fa48("5362"), false));
        if (stryMutAct_9fa48("5365") ? false : stryMutAct_9fa48("5364") ? true : stryMutAct_9fa48("5363") ? id : (stryCov_9fa48("5363", "5364", "5365"), !id)) return;
        switch (confirmDialogType) {
          case dialogTypes.DELETE_CONFIRM:
            if (stryMutAct_9fa48("5366")) {} else {
              stryCov_9fa48("5366");
              removeSubjectCardService(subjectId);
              break;
            }
          case dialogTypes.SET_VISIBILITY_DISABLED:
            if (stryMutAct_9fa48("5367")) {} else {
              stryCov_9fa48("5367");
              {
                if (stryMutAct_9fa48("5368")) {
                  {}
                } else {
                  stryCov_9fa48("5368");
                  const group = subjects.find(stryMutAct_9fa48("5369") ? () => undefined : (stryCov_9fa48("5369"), subject => stryMutAct_9fa48("5372") ? subject.id !== subjectId : stryMutAct_9fa48("5371") ? false : stryMutAct_9fa48("5370") ? true : (stryCov_9fa48("5370", "5371", "5372"), subject.id === subjectId)));
                  setDisabledSubjectsService(group);
                }
              }
              break;
            }
          case dialogTypes.SET_VISIBILITY_ENABLED:
            if (stryMutAct_9fa48("5373")) {} else {
              stryCov_9fa48("5373");
              {
                if (stryMutAct_9fa48("5374")) {
                  {}
                } else {
                  stryCov_9fa48("5374");
                  const group = disabledSubjects.find(stryMutAct_9fa48("5375") ? () => undefined : (stryCov_9fa48("5375"), subject => stryMutAct_9fa48("5378") ? subject.id !== subjectId : stryMutAct_9fa48("5377") ? false : stryMutAct_9fa48("5376") ? true : (stryCov_9fa48("5376", "5377", "5378"), subject.id === subjectId)));
                  setEnabledSubjectsService(group);
                }
              }
              break;
            }
          default:
            if (stryMutAct_9fa48("5379")) {} else {
              stryCov_9fa48("5379");
              break;
            }
        }
      }
    };
    const showDisabledHandle = () => {
      if (stryMutAct_9fa48("5380")) {
        {}
      } else {
        stryCov_9fa48("5380");
        setDisabled(stryMutAct_9fa48("5381") ? () => undefined : (stryCov_9fa48("5381"), prev => stryMutAct_9fa48("5382") ? prev : (stryCov_9fa48("5382"), !prev)));
      }
    };
    return <>
            <CustomDialog type={confirmDialogType} whatDelete="subject" open={isOpenConfirmDialog} handelConfirm={stryMutAct_9fa48("5383") ? () => undefined : (stryCov_9fa48("5383"), () => acceptConfirmDialog(subjectId))} />

            <div className="cards-container">
                <aside className="search-list__panel">
                    <SearchPanel SearchChange={SearchChange} showDisabled={showDisabledHandle} />
                    {disabled ? stryMutAct_9fa48("5384") ? "Stryker was here!" : (stryCov_9fa48("5384"), '') : <AddSubject className="form" onSubmit={handleSubjectService} onReset={handleFormReset} />}
                </aside>
                <section className="container-flex-wrap wrapper">
                    {stryMutAct_9fa48("5387") ? visibleSubjects.length === 0 || <NotFound name={t(SUBJECT_Y_LABEL)} /> : stryMutAct_9fa48("5386") ? false : stryMutAct_9fa48("5385") ? true : (stryCov_9fa48("5385", "5386", "5387"), (stryMutAct_9fa48("5389") ? visibleSubjects.length !== 0 : stryMutAct_9fa48("5388") ? true : (stryCov_9fa48("5388", "5389"), visibleSubjects.length === 0)) && <NotFound name={t(SUBJECT_Y_LABEL)} />)}
                    {visibleSubjects.map(stryMutAct_9fa48("5390") ? () => undefined : (stryCov_9fa48("5390"), subject => <Card key={subject.id} additionClassName="subject-card done-card">
                            <h2 className="subject-card__name">{subject.name}</h2>
                            <div className="cards-btns">
                                {disabled ? <GiSightDisabled className="svg-btn copy-btn" title={t(COMMON_SET_ENABLED)} onClick={() => {
                if (stryMutAct_9fa48("5391")) {
                  {}
                } else {
                  stryCov_9fa48("5391");
                  showConfirmDialog(subject.id, dialogTypes.SET_VISIBILITY_ENABLED);
                }
              }} /> : <>
                                        <IoMdEye className="svg-btn copy-btn" title={t(COMMON_SET_DISABLED)} onClick={() => {
                  if (stryMutAct_9fa48("5392")) {
                    {}
                  } else {
                    stryCov_9fa48("5392");
                    showConfirmDialog(subject.id, dialogTypes.SET_VISIBILITY_DISABLED);
                  }
                }} />
                                        <FaEdit className="svg-btn edit-btn" title={t(EDIT_TITLE)} onClick={stryMutAct_9fa48("5393") ? () => undefined : (stryCov_9fa48("5393"), () => selectSubjectService(subject.id))} />
                                    </>}

                                <MdDelete className="svg-btn delete-btn" title={t(DELETE_TITLE)} onClick={stryMutAct_9fa48("5394") ? () => undefined : (stryCov_9fa48("5394"), () => showConfirmDialog(subject.id, dialogTypes.DELETE_CONFIRM))} />
                            </div>
                        </Card>))}
                </section>
            </div>
            <SnackbarComponent message={snackbarMessage} type={snackbarType} isOpen={isSnackbarOpen} handleSnackbarClose={handleSnackbarCloseService} />
        </>;
  }
};
const mapStateToProps = stryMutAct_9fa48("5395") ? () => undefined : (stryCov_9fa48("5395"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("5396") ? {} : (stryCov_9fa48("5396"), {
    subjects: state.subjects.subjects,
    disabledSubjects: state.subjects.disabledSubjects,
    isSnackbarOpen: state.snackbar.isSnackbarOpen,
    snackbarType: state.snackbar.snackbarType,
    snackbarMessage: state.snackbar.message,
    isOpenConfirmDialog: state.dialog.isOpenConfirmDialog
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("5397") ? () => undefined : (stryCov_9fa48("5397"), (() => {
  const mapDispatchToProps = dispatch => stryMutAct_9fa48("5398") ? {} : (stryCov_9fa48("5398"), {
    setOpenConfirmDialog: stryMutAct_9fa48("5399") ? () => undefined : (stryCov_9fa48("5399"), newState => dispatch(setIsOpenConfirmDialog(newState)))
  });
  return mapDispatchToProps;
})());
export default connect(mapStateToProps, mapDispatchToProps)(SubjectPage);