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
import { Autocomplete } from '@material-ui/lab';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import './TeacherLessonsPage.scss';
import LessonsTable from './LessonsTable/LessonsTable';
import { showAllTeachersStart } from '../../actions/teachers';
import { clearTeacherLessons, getLessonsByTeacherStart, updateLessonsLinkStart } from '../../actions/teacherLessons';
import { FORM_TEACHER_LABEL } from '../../constants/translationLabels/formElements';
const TeacherLessonsPage = props => {
  if (stryMutAct_9fa48("3487")) {
    {}
  } else {
    stryCov_9fa48("3487");
    const {
      teachers,
      selectedTeacher,
      lessons,
      loading,
      getTeachers,
      getLessonsByTeacher,
      updateLessonsLink,
      clearLessons
    } = props;
    const {
      t
    } = useTranslation(stryMutAct_9fa48("3488") ? "" : (stryCov_9fa48("3488"), 'common'));
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(stryMutAct_9fa48("3489") ? true : (stryCov_9fa48("3489"), false));
    const [pendingTeacher, setPendingTeacher] = useState(null);
    const [showConfirmDialog, setShowConfirmDialog] = useState(stryMutAct_9fa48("3490") ? true : (stryCov_9fa48("3490"), false));
    useEffect(() => {
      if (stryMutAct_9fa48("3491")) {
        {}
      } else {
        stryCov_9fa48("3491");
        getTeachers();
        return () => {
          if (stryMutAct_9fa48("3492")) {
            {}
          } else {
            stryCov_9fa48("3492");
            clearLessons();
          }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }
    }, stryMutAct_9fa48("3493") ? ["Stryker was here"] : (stryCov_9fa48("3493"), []));
    const handleTeacherSelect = teacher => {
      if (stryMutAct_9fa48("3494")) {
        {}
      } else {
        stryCov_9fa48("3494");
        if (stryMutAct_9fa48("3496") ? false : stryMutAct_9fa48("3495") ? true : (stryCov_9fa48("3495", "3496"), hasUnsavedChanges)) {
          if (stryMutAct_9fa48("3497")) {
            {}
          } else {
            stryCov_9fa48("3497");
            setPendingTeacher(teacher);
            setShowConfirmDialog(stryMutAct_9fa48("3498") ? false : (stryCov_9fa48("3498"), true));
          }
        } else {
          if (stryMutAct_9fa48("3499")) {
            {}
          } else {
            stryCov_9fa48("3499");
            applyTeacherChange(teacher);
          }
        }
      }
    };
    const applyTeacherChange = teacher => {
      if (stryMutAct_9fa48("3500")) {
        {}
      } else {
        stryCov_9fa48("3500");
        if (stryMutAct_9fa48("3502") ? false : stryMutAct_9fa48("3501") ? true : (stryCov_9fa48("3501", "3502"), teacher)) {
          if (stryMutAct_9fa48("3503")) {
            {}
          } else {
            stryCov_9fa48("3503");
            getLessonsByTeacher(teacher.id);
          }
        } else {
          if (stryMutAct_9fa48("3504")) {
            {}
          } else {
            stryCov_9fa48("3504");
            clearLessons();
          }
        }
        setHasUnsavedChanges(stryMutAct_9fa48("3505") ? true : (stryCov_9fa48("3505"), false));
      }
    };
    const handleConfirmChange = () => {
      if (stryMutAct_9fa48("3506")) {
        {}
      } else {
        stryCov_9fa48("3506");
        setShowConfirmDialog(stryMutAct_9fa48("3507") ? true : (stryCov_9fa48("3507"), false));
        applyTeacherChange(pendingTeacher);
        setPendingTeacher(null);
      }
    };
    const handleCancelChange = () => {
      if (stryMutAct_9fa48("3508")) {
        {}
      } else {
        stryCov_9fa48("3508");
        setShowConfirmDialog(stryMutAct_9fa48("3509") ? true : (stryCov_9fa48("3509"), false));
        setPendingTeacher(null);
      }
    };
    const handleUpdateLink = linkData => {
      if (stryMutAct_9fa48("3510")) {
        {}
      } else {
        stryCov_9fa48("3510");
        updateLessonsLink(linkData);
      }
    };
    const handleUnsavedChanges = hasChanges => {
      if (stryMutAct_9fa48("3511")) {
        {}
      } else {
        stryCov_9fa48("3511");
        setHasUnsavedChanges(hasChanges);
      }
    };
    const getTeacherFullName = teacher => {
      if (stryMutAct_9fa48("3512")) {
        {}
      } else {
        stryCov_9fa48("3512");
        if (stryMutAct_9fa48("3515") ? !teacher && !teacher.surname : stryMutAct_9fa48("3514") ? false : stryMutAct_9fa48("3513") ? true : (stryCov_9fa48("3513", "3514", "3515"), (stryMutAct_9fa48("3516") ? teacher : (stryCov_9fa48("3516"), !teacher)) || (stryMutAct_9fa48("3517") ? teacher.surname : (stryCov_9fa48("3517"), !teacher.surname)))) return stryMutAct_9fa48("3518") ? "Stryker was here!" : (stryCov_9fa48("3518"), '');
        return stryMutAct_9fa48("3519") ? `${teacher.surname} ${teacher.name} ${teacher.patronymic || ''}` : (stryCov_9fa48("3519"), (stryMutAct_9fa48("3520") ? `` : (stryCov_9fa48("3520"), `${teacher.surname} ${teacher.name} ${stryMutAct_9fa48("3523") ? teacher.patronymic && '' : stryMutAct_9fa48("3522") ? false : stryMutAct_9fa48("3521") ? true : (stryCov_9fa48("3521", "3522", "3523"), teacher.patronymic || (stryMutAct_9fa48("3524") ? "Stryker was here!" : (stryCov_9fa48("3524"), '')))}`)).trim());
      }
    };
    return <div className="teacher-lessons-wrapper">
            <div className="teacher-lessons-sidebar">
                <div className="sidebar-card">
                    <Autocomplete id="teacher" value={selectedTeacher} options={teachers} className="teacher-autocomplete" clearOnEscape openOnFocus getOptionLabel={stryMutAct_9fa48("3525") ? () => undefined : (stryCov_9fa48("3525"), option => getTeacherFullName(option))} getOptionSelected={stryMutAct_9fa48("3526") ? () => undefined : (stryCov_9fa48("3526"), (option, value) => stryMutAct_9fa48("3529") ? option.id !== value?.id : stryMutAct_9fa48("3528") ? false : stryMutAct_9fa48("3527") ? true : (stryCov_9fa48("3527", "3528", "3529"), option.id === (stryMutAct_9fa48("3530") ? value.id : (stryCov_9fa48("3530"), value?.id))))} onChange={(_, newValue) => {
            if (stryMutAct_9fa48("3531")) {
              {}
            } else {
              stryCov_9fa48("3531");
              handleTeacherSelect(newValue);
            }
          }} renderInput={stryMutAct_9fa48("3532") ? () => undefined : (stryCov_9fa48("3532"), params => <TextField className="textField" {...params} label={t(FORM_TEACHER_LABEL)} margin="normal" />)} />
                </div>
            </div>

            <div className="teacher-lessons-list">
                {stryMutAct_9fa48("3535") ? loading || <div className="loading-container">
                        <span>{t('loading') || 'Завантаження...'}</span>
                    </div> : stryMutAct_9fa48("3534") ? false : stryMutAct_9fa48("3533") ? true : (stryCov_9fa48("3533", "3534", "3535"), loading && <div className="loading-container">
                        <span>{stryMutAct_9fa48("3538") ? t('loading') && 'Завантаження...' : stryMutAct_9fa48("3537") ? false : stryMutAct_9fa48("3536") ? true : (stryCov_9fa48("3536", "3537", "3538"), t(stryMutAct_9fa48("3539") ? "" : (stryCov_9fa48("3539"), 'loading')) || (stryMutAct_9fa48("3540") ? "" : (stryCov_9fa48("3540"), 'Завантаження...')))}</span>
                    </div>)}

                {stryMutAct_9fa48("3543") ? !loading && selectedTeacher && lessons.length > 0 || <LessonsTable lessons={lessons} selectedTeacher={selectedTeacher} onUpdateLink={handleUpdateLink} onUnsavedChanges={handleUnsavedChanges} t={t} /> : stryMutAct_9fa48("3542") ? false : stryMutAct_9fa48("3541") ? true : (stryCov_9fa48("3541", "3542", "3543"), (stryMutAct_9fa48("3545") ? !loading && selectedTeacher || lessons.length > 0 : stryMutAct_9fa48("3544") ? true : (stryCov_9fa48("3544", "3545"), (stryMutAct_9fa48("3547") ? !loading || selectedTeacher : stryMutAct_9fa48("3546") ? true : (stryCov_9fa48("3546", "3547"), (stryMutAct_9fa48("3548") ? loading : (stryCov_9fa48("3548"), !loading)) && selectedTeacher)) && (stryMutAct_9fa48("3551") ? lessons.length <= 0 : stryMutAct_9fa48("3550") ? lessons.length >= 0 : stryMutAct_9fa48("3549") ? true : (stryCov_9fa48("3549", "3550", "3551"), lessons.length > 0)))) && <LessonsTable lessons={lessons} selectedTeacher={selectedTeacher} onUpdateLink={handleUpdateLink} onUnsavedChanges={handleUnsavedChanges} t={t} />)}

                {stryMutAct_9fa48("3554") ? !loading && selectedTeacher && lessons.length === 0 || <div className="no-lessons-message">
                        {t('no_lessons_found') || 'Пари не знайдено'}
                    </div> : stryMutAct_9fa48("3553") ? false : stryMutAct_9fa48("3552") ? true : (stryCov_9fa48("3552", "3553", "3554"), (stryMutAct_9fa48("3556") ? !loading && selectedTeacher || lessons.length === 0 : stryMutAct_9fa48("3555") ? true : (stryCov_9fa48("3555", "3556"), (stryMutAct_9fa48("3558") ? !loading || selectedTeacher : stryMutAct_9fa48("3557") ? true : (stryCov_9fa48("3557", "3558"), (stryMutAct_9fa48("3559") ? loading : (stryCov_9fa48("3559"), !loading)) && selectedTeacher)) && (stryMutAct_9fa48("3561") ? lessons.length !== 0 : stryMutAct_9fa48("3560") ? true : (stryCov_9fa48("3560", "3561"), lessons.length === 0)))) && <div className="no-lessons-message">
                        {stryMutAct_9fa48("3564") ? t('no_lessons_found') && 'Пари не знайдено' : stryMutAct_9fa48("3563") ? false : stryMutAct_9fa48("3562") ? true : (stryCov_9fa48("3562", "3563", "3564"), t(stryMutAct_9fa48("3565") ? "" : (stryCov_9fa48("3565"), 'no_lessons_found')) || (stryMutAct_9fa48("3566") ? "" : (stryCov_9fa48("3566"), 'Пари не знайдено')))}
                    </div>)}

                {stryMutAct_9fa48("3569") ? !selectedTeacher || <div className="select-teacher-message">
                        {t('select_teacher_prompt') || 'Виберіть викладача для перегляду пар'}
                    </div> : stryMutAct_9fa48("3568") ? false : stryMutAct_9fa48("3567") ? true : (stryCov_9fa48("3567", "3568", "3569"), (stryMutAct_9fa48("3570") ? selectedTeacher : (stryCov_9fa48("3570"), !selectedTeacher)) && <div className="select-teacher-message">
                        {stryMutAct_9fa48("3573") ? t('select_teacher_prompt') && 'Виберіть викладача для перегляду пар' : stryMutAct_9fa48("3572") ? false : stryMutAct_9fa48("3571") ? true : (stryCov_9fa48("3571", "3572", "3573"), t(stryMutAct_9fa48("3574") ? "" : (stryCov_9fa48("3574"), 'select_teacher_prompt')) || (stryMutAct_9fa48("3575") ? "" : (stryCov_9fa48("3575"), 'Виберіть викладача для перегляду пар')))}
                    </div>)}
            </div>

            <Dialog open={showConfirmDialog} onClose={handleCancelChange}>
                <DialogTitle>{stryMutAct_9fa48("3578") ? t('unsaved_changes_title') && 'Незбережені зміни' : stryMutAct_9fa48("3577") ? false : stryMutAct_9fa48("3576") ? true : (stryCov_9fa48("3576", "3577", "3578"), t(stryMutAct_9fa48("3579") ? "" : (stryCov_9fa48("3579"), 'unsaved_changes_title')) || (stryMutAct_9fa48("3580") ? "" : (stryCov_9fa48("3580"), 'Незбережені зміни')))}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {stryMutAct_9fa48("3583") ? t('unsaved_changes_warning') && 'У вас є незбережені дані. Ви впевнені, що хочете покинути сторінку?' : stryMutAct_9fa48("3582") ? false : stryMutAct_9fa48("3581") ? true : (stryCov_9fa48("3581", "3582", "3583"), t(stryMutAct_9fa48("3584") ? "" : (stryCov_9fa48("3584"), 'unsaved_changes_warning')) || (stryMutAct_9fa48("3585") ? "" : (stryCov_9fa48("3585"), 'У вас є незбережені дані. Ви впевнені, що хочете покинути сторінку?')))}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancelChange} color="primary">
                        {stryMutAct_9fa48("3588") ? t('cancel') && 'Скасувати' : stryMutAct_9fa48("3587") ? false : stryMutAct_9fa48("3586") ? true : (stryCov_9fa48("3586", "3587", "3588"), t(stryMutAct_9fa48("3589") ? "" : (stryCov_9fa48("3589"), 'cancel')) || (stryMutAct_9fa48("3590") ? "" : (stryCov_9fa48("3590"), 'Скасувати')))}
                    </Button>
                    <Button onClick={handleConfirmChange} color="secondary">
                        {stryMutAct_9fa48("3593") ? t('confirm') && 'Продовжити' : stryMutAct_9fa48("3592") ? false : stryMutAct_9fa48("3591") ? true : (stryCov_9fa48("3591", "3592", "3593"), t(stryMutAct_9fa48("3594") ? "" : (stryCov_9fa48("3594"), 'confirm')) || (stryMutAct_9fa48("3595") ? "" : (stryCov_9fa48("3595"), 'Продовжити')))}
                    </Button>
                </DialogActions>
            </Dialog>
        </div>;
  }
};
const mapStateToProps = stryMutAct_9fa48("3596") ? () => undefined : (stryCov_9fa48("3596"), (() => {
  const mapStateToProps = state => stryMutAct_9fa48("3597") ? {} : (stryCov_9fa48("3597"), {
    teachers: state.teachers.teachers,
    selectedTeacher: state.teacherLessons.selectedTeacher,
    lessons: state.teacherLessons.lessons,
    loading: state.teacherLessons.loading
  });
  return mapStateToProps;
})());
const mapDispatchToProps = stryMutAct_9fa48("3598") ? {} : (stryCov_9fa48("3598"), {
  getTeachers: showAllTeachersStart,
  getLessonsByTeacher: getLessonsByTeacherStart,
  updateLessonsLink: updateLessonsLinkStart,
  clearLessons: clearTeacherLessons
});
export default connect(mapStateToProps, mapDispatchToProps)(TeacherLessonsPage);